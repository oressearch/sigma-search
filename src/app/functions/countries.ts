// ----------------------------------------------------------------- # Private #

const COUNTRY_FOLDER = '1CybM-yy7u8rlhKzhafSGsGW1ltuSYl7b'

type  JPEG = 'image/jpeg'
const JPEG = 'image/jpeg' as JPEG

type  XLS = 'application/vnd.google-apps.spreadsheet'
const XLS = 'application/vnd.google-apps.spreadsheet' as XLS

interface GoogleFile {
  id: string
  mimeType: JPEG | XLS
  name: string
  webContentLink: string | null
}

async function fetchFiles(parentId: string, orderBy: string = 'createdTime') {
  const base_url = 'https://www.googleapis.com/drive/v3/files'
  const key      = process.env.GOOGLE_API_KEY
  const q        = `'${parentId}'+in+parents`
  const fields   = `files(id,name,mimeType,webContentLink)`

  const url =
    `${base_url}?key=${key}&q=${q}&fields=${fields}&orderBy=${orderBy}`

  return fetch(url)
    .then((data_raw: any) => data_raw.json())
    .then((data: any) => data.files as GoogleFile[])
}

async function fetchConsultantInfos(
  consultant: GoogleFile,
  images: GoogleFile[],
) {
  const baseUrl = 'https://sheets.googleapis.com/v4/spreadsheets'
  const key      = process.env.GOOGLE_API_KEY
  const url      = `${baseUrl}/${consultant.id}/values/B2:B9`

  return fetch(`${url}?key=${key}&majorDimension=COLUMNS`)
    .then((dataRaw: any) => dataRaw.json())
    .then((data: any) => data.values[0])
    .then((data: any) => ({
      company: {
        city: data[7].trim(),
        name: data[5].trim(),
        street: data[6].trim(),
      },
      email: data[1].trim(),
      image: parseImage(consultant, images),
      link: data[2].trim(),
      name: consultant.name,
      phones: data[0].trim(),
    } as Consultant))
}

function parseImage(consultant: GoogleFile, images: GoogleFile[]) {
  const image = images.find(({name}) => name === consultant.name)
  if (! image) return ''

  return image.webContentLink
}

async function fetchContact(countryId: string, image: string | null) {
  const baseUrl = 'https://sheets.googleapis.com/v4/spreadsheets'
  const key      = process.env.GOOGLE_API_KEY
  const url      = `${baseUrl}/${countryId}/values/B2:B8`

  return fetch(`${url}?key=${key}&majorDimension=COLUMNS`)
    .then((dataRaw: any) => dataRaw.json())
    .then((data: any) => data.values[0])
    .then((data: any) => ({
      address: data[0].trim(),
      email: data[4].trim(),
      image: image || '#',
      latitude: data[1].trim(),
      linkedin: data[6].trim(),
      longitude: data[2].trim(),
      phones: data[3].trim(),
      website: data[5].trim(),
    } as Contact))
}

async function fetchContactAndConsultants(country: GoogleFile) {
  const files = await fetchFiles(country.id)
  const contactFiles = files.filter(f => f.name.toLowerCase() === 'contact')
  const contactImageFile = contactFiles.find(f => f.mimeType === JPEG)
  const contactInfosFile = contactFiles.find(f => f.mimeType === XLS)

  if (! contactInfosFile || ! contactImageFile) {
    throw new Error(`No contact file found for country "${country.name}"`)
  }

  const contact = await fetchContact(
    contactInfosFile.id,
    contactImageFile.webContentLink,
  )

  const consultantImageFiles = files.filter(f => (
    f.mimeType === JPEG && f.name.toLowerCase() !== 'contact'
  ))

  const consultantInfosFiles = files.filter(f => (
    f.mimeType === XLS && f.name.toLowerCase() !== 'contact'
  ))

  const consultantsImage = consultantImageFiles.filter(f => (
    f.mimeType === JPEG
  ))

  const consultants = await Promise.all(
    consultantInfosFiles.map(consultant => (
      fetchConsultantInfos(consultant, consultantsImage)
    )),
  )

  return {
    ...country,
    consultants,
    contact,
  }
}

// ------------------------------------------------------------------ # Public #

export type Country = GoogleFile & {
  consultants: Consultant[]
  contact: Contact
}

export interface Consultant {
  email: string
  image: string
  link: string
  name: string
  phones: string
  company: {
    city: string
    name: string
    street: string
  }
}

export interface Contact {
  address: string
  email: string
  image: string
  latitude: number
  linkedin: string
  longitude: number
  phones: string
  website: string
}

export async function fetchCountries() {
  const countryFiles = await fetchFiles(COUNTRY_FOLDER, 'name')
  const contactInfos = await Promise.all(
    countryFiles.map(fetchContactAndConsultants),
  )

  return contactInfos as Country[]
}
