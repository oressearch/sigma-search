import React, {Component} from 'react'

// @ts-ignore
import styles from './Animation.styl'

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

  container: HTMLDivElement    | null = null
  animation: HTMLCanvasElement | null = null

  constructor(props: Props) {
    super(props)
  }

  onFileLoaded(comp: any) {
    return (evt: any) => {
      const images = comp.getImages()

      if (evt && (evt.item.type === 'image')) {
        images[evt.item.id] = evt.result
      }
    }
  }

  onCompleted(comp: any) {
    return (evt: any) => {
      const {createjs, AdobeAn} = window as any
      const lib = comp.getLibrary()
      const ss = comp.getSpriteSheet()
      const root = lib[this.props.name]

      if (this.props.hasResources) {
        for (const ss_metadata of lib.ssMetadata) {
          ss[ss_metadata.name] = new createjs.SpriteSheet({
            frames: ss_metadata.frames,
            images: [evt.target.getResult(ss_metadata.name)],
          })
        }
      }

      const stage = new lib.Stage(this.animation)
      stage.enableMouseOver()

      const start_animation = () => {
        stage.addChild(new root())
        createjs.Ticker.setFPS(lib.properties.fps)
        createjs.Ticker.addEventListener('tick', stage)
      }

      let lastW: number
      let lastS = 1

      const resize_canvas = () => {
        const w = lib.properties.width
        const h = lib.properties.height
        const iw = window.innerWidth
        const ih = window.innerHeight
        const pRatio = window.devicePixelRatio || 1
        const xRatio = iw / w
        const yRatio = ih / h
        let sRatio = 1

        if (lastW === iw) {
          sRatio = lastS
        } else {
          sRatio = Math.max(xRatio, yRatio)
        }

        if (this.animation && this.container) {
          this.animation.width = w * pRatio * sRatio
          this.animation.height = h * pRatio * sRatio
          this.animation.style.width = this.container.style.width =  w * sRatio + 'px'
          this.animation.style.height = this.container.style.height = h * sRatio + 'px'
        }

        stage.scaleX = pRatio * sRatio
        stage.scaleY = pRatio * sRatio
        lastW = iw
        lastS = sRatio
        stage.tickOnUpdate = false
        stage.update()
        stage.tickOnUpdate = true
      }

      window.addEventListener('resize', resize_canvas)
      resize_canvas()

      AdobeAn.compositionLoaded(lib.properties.id)
      start_animation()
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

  componentDidMount() {
    if (this.props.isVisible) {
      this.animationStart()
    }
  }

  componentDidUpdate(prevProps: Props) {
    if (! prevProps.isVisible && this.props.isVisible) {
      this.animationStart()
    }
  }

  render() {
    const type = this.props.isBackground
      ? 'absolute'
      : 'relative'

    return (
      <div
        className={styles[`container-${type}`]}
        ref={ref => this.container = ref}
      >
        <canvas
          className={styles[`animation-${type}`]}
          ref={ref => this.animation = ref}
        />
      </div>
    )
  }
}
