import React, {Component} from 'react'

// @ts-ignore
import styles from './styles.styl'

// ----------------------------------------------------------------- # Private #

interface Props {
  name: string
  composition: string
  hasResources?: boolean
  isBackground?: boolean
  isVisible?: boolean
}

// ------------------------------------------------------------------ # Public #

export default class Animation extends Component<Props, {}> {
  static defaultProps: Partial<Props> = {
    hasResources: false,
    isBackground: false,
    isVisible: true,
  }

  container: HTMLDivElement | null = null
  animation: HTMLCanvasElement | null = null

  lastS: number = 1
  lastW: number = 0
  lib: any = null
  stage: any = null

  constructor(props: Props) {
    super(props)
  }

  onFileLoaded(comp: any) {
    return (evt: any) => {
      const images = comp.getImages()

      if (evt && evt.item.type === 'image') {
        images[evt.item.id] = evt.result
      }
    }
  }

  onCompleted(comp: any) {
    return (evt: any) => {
      const {createjs, AdobeAn} = window as any
      const ss = comp.getSpriteSheet()

      this.lib = comp.getLibrary()
      const root = this.lib[this.props.name]

      if (this.props.hasResources) {
        for (const ss_metadata of this.lib.ssMetadata) {
          ss[ss_metadata.name] = new createjs.SpriteSheet({
            frames: ss_metadata.frames,
            images: [evt.target.getResult(ss_metadata.name)],
          })
        }
      }

      this.stage = new this.lib.Stage(this.animation)
      this.stage.enableMouseOver()

      AdobeAn.compositionLoaded(this.lib.properties.id)
      this.stage.addChild(new root())
      createjs.Ticker.setFPS(this.lib.properties.fps)
      createjs.Ticker.addEventListener('tick', this.stage)

      window.addEventListener('resize', this.onResize)
      this.onResize()
    }
  }

  animationStart() {
    const {createjs, AdobeAn} = window as any
    const composition = AdobeAn.getComposition(this.props.composition)

    if (this.props.hasResources) {
      const loader = new createjs.LoadQueue(false)
      loader.addEventListener('fileload', this.onFileLoaded(composition))
      loader.addEventListener('complete', this.onCompleted(composition))
      loader.loadManifest(composition.getLibrary().properties.manifest)
    } else {
      this.onCompleted(composition)({})
    }
  }

  onResize = () => {
    const w = this.lib.properties.width
    const h = this.lib.properties.height
    const iw = window.innerWidth
    const ih = window.innerHeight
    const pRatio = window.devicePixelRatio || 1
    const xRatio = iw / w
    const yRatio = ih / h
    let sRatio = 1

    if (this.lastW === iw) {
      sRatio = this.lastS
    } else {
      sRatio = Math.max(xRatio, yRatio)
    }

    if (this.animation && this.container) {
      this.animation.width = w * pRatio * sRatio
      this.animation.height = h * pRatio * sRatio
      this.animation.style.width = this.container.style.width =
        w * sRatio + 'px'
      this.animation.style.height = this.container.style.height =
        h * sRatio + 'px'
    }

    this.stage.scaleX = pRatio * sRatio
    this.stage.scaleY = pRatio * sRatio
    this.lastW = iw
    this.lastS = sRatio
    this.stage.tickOnUpdate = false
    this.stage.update()
    this.stage.tickOnUpdate = true
  }

  componentDidMount() {
    if (this.props.isVisible) {
      this.animationStart()
    }
  }

  componentDidUpdate(prevProps: Props) {
    if (!prevProps.isVisible && this.props.isVisible) {
      this.animationStart()
    }
  }

  componentWillUnmount() {
    const {createjs} = window as any

    window.removeEventListener('resize', this.onResize)
    createjs.Ticker.removeEventListener('tick', this.stage)
    createjs.Ticker.reset()
  }

  render() {
    const type = this.props.isBackground ? 'absolute' : 'relative'

    return (
      <div
        className={styles[`container-${type}`]}
        ref={ref => (this.container = ref)}
      >
        <canvas
          className={styles[`animation-${type}`]}
          ref={ref => (this.animation = ref)}
        />
        {this.props.children}
      </div>
    )
  }
}
