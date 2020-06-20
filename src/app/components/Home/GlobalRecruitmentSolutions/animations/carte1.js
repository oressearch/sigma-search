;(function(cjs, an) {
  var p // shortcut to reference prototypes
  var lib = {}
  var ss = {}
  var img = {}
  lib.ssMetadata = [{name: 'carte1_atlas_P_1', frames: [[0, 0, 1920, 1920]]}]
  ;(lib.AnMovieClip = function() {
    this.actionFrames = []
    this.gotoAndPlay = function(positionOrLabel) {
      cjs.MovieClip.prototype.gotoAndPlay.call(this, positionOrLabel)
    }
    this.play = function() {
      cjs.MovieClip.prototype.play.call(this)
    }
    this.gotoAndStop = function(positionOrLabel) {
      cjs.MovieClip.prototype.gotoAndStop.call(this, positionOrLabel)
    }
    this.stop = function() {
      cjs.MovieClip.prototype.stop.call(this)
    }
  }).prototype = p = new cjs.MovieClip()
  // symbols:
  ;(lib.cartissa = function() {
    this.initialize(ss['carte1_atlas_P_1'])
    this.gotoAndStop(0)
  }).prototype = p = new cjs.Sprite()
  // helper functions:

  function mc_symbol_clone() {
    var clone = this._cloneProps(
      new this.constructor(
        this.mode,
        this.startPosition,
        this.loop,
        this.reversed,
      ),
    )
    clone.gotoAndStop(this.currentFrame)
    clone.paused = this.paused
    clone.framerate = this.framerate
    return clone
  }

  function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
    var prototype = cjs.extend(symbol, cjs.MovieClip)
    prototype.clone = mc_symbol_clone
    prototype.nominalBounds = nominalBounds
    prototype.frameBounds = frameBounds
    return prototype
  }

  ;(lib.uk = function(mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f('#F8692A')
      .s()
      .p('AAPA1IgjgvIAAAvIgZAAIAAhpIAZAAIAAAvIAkgvIAeAAIgqA0IAqA1g')
    this.shape.setTransform(18.075, 13.75)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f('#F8692A')
      .s()
      .p(
        'AgWAwQgKgEgGgLQgFgLAAgOIAAg8IAZAAIAAA8QAAAKAFAFQAFAHAIgBQAJABAFgHQAEgFAAgKIAAg8IAaAAIAAA8QAAAOgGALQgGAKgKAFQgKAGgMAAQgMAAgKgGg',
      )
    this.shape_1.setTransform(7.2, 13.8)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape_1}, {t: this.shape}]})
        .wait(1),
    )

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-0.1, 0, 25.200000000000003, 30.5)
  ;(lib.tcheq = function(mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgUAmQgJgGgGgJQgFgKAAgNQAAgMAFgKQAFgKAKgFQAJgFAMAAQAQAAALAJQALAJACAPIgbAAQgBgFgDgDQgEgDgGAAQgFAAgFAFQgEAGAAAJQAAAKAEAFQAFAGAFAAQAGAAAEgDQADgDABgGIAbAAQgCAQgLAJQgLAJgQAAQgMAAgJgFg',
      )
    this.shape.setTransform(115.3, 14.875)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgMA9IAAhTIAZAAIAABTgAgKgkQgEgEAAgFQAAgHAEgDQAEgFAGAAQAHAAAEAFQAEADAAAHQAAAFgEAEQgEAEgHgBQgGABgEgEg',
      )
    this.shape_1.setTransform(108.475, 13)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f('#CCA57F')
      .s()
      .p('AgMA4IAAhvIAZAAIAABvg')
    this.shape_2.setTransform(104.075, 13.5)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgIA0QgHgFgDgHIAAAPIgZAAIAAhuIAZAAIAAArQADgIAHgFQAIgDAIAAQAKAAAIAEQAIAGAGAJQAEAJAAANQAAANgEAKQgGAJgIAGQgIAFgKAAQgIAAgIgEgAgMgBQgGAFAAAJQAAAJAGAGQAEAFAIABQAIgBAFgFQAFgFAAgKQAAgJgFgFQgFgFgIgBQgIABgEAFg',
      )
    this.shape_3.setTransform(97, 13.55)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AghAhQgIgKAAgRIAAgvIAZAAIAAAsQAAAJAFAEQAEAFAHAAQAIAAAEgFQAFgFAAgJIAAgrIAZAAIAABSIgZAAIAAgPQgEAHgHAFQgGAEgKAAQgOAAgJgJg',
      )
    this.shape_4.setTransform(86.575, 14.925)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgrA+IAAh6IAaAAIAAAPQACgIAIgEQAGgEAJAAQAKAAAJAFQAHAFAFAKQAFAJAAANQAAANgFAJQgFAKgHAFQgJAFgKAAQgJAAgGgEQgIgEgCgIIAAA3gAgNgiQgEAGAAAJQAAAKAEAFQAGAFAHAAQAIAAAFgFQAFgFAAgKQAAgJgFgGQgFgFgIAAQgHAAgGAFg',
      )
    this.shape_5.setTransform(76.7, 16.825)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgVAmQgJgGgFgJQgGgKAAgNQAAgMAGgKQAFgKAJgFQAKgFALAAQAMAAAKAFQAJAFAGAJQAFAKAAAMIgBAGIg5AAQABAJAEAEQAEAEAHAAQAFAAAEgDQADgCABgFIAbAAQgBAJgGAHQgFAHgJAEQgIAEgLAAQgLAAgKgFgAgLgSQgEAFgBAIIAgAAQAAgIgFgFQgEgEgHAAQgGAAgFAEg',
      )
    this.shape_6.setTransform(66.8, 14.875)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AANA1IgWgoIgGAAIAAAoIgZAAIAAhpIAqAAQANAAAJAFQAIADAFAIQAEAIAAAJQAAAMgGAHQgHAIgMAEIAZApgAgPgDIAPAAQAIgBADgDQAEgEAAgGQAAgHgEgDQgDgEgIABIgPAAg',
      )
    this.shape_7.setTransform(57.425, 13.75)

    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AAQA4IAAguQAAgJgEgDQgEgFgIAAQgHAAgEAFQgFAEAAAJIAAAtIgZAAIAAhvIAZAAIAAArQAEgHAHgFQAGgEAKAAQAOAAAJAJQAIAKAAAQIAAAxg',
      )
    this.shape_8.setTransform(44.225, 13.5)

    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgUAmQgKgGgFgJQgGgKAAgNQAAgMAGgKQAFgKAKgFQAKgFAKAAQARAAALAJQAKAJAEAPIgbAAQgCgFgEgDQgDgDgGAAQgFAAgFAFQgEAGgBAJQABAKAEAFQAFAGAFAAQAGAAADgDQAEgDACgGIAbAAQgEAQgKAJQgLAJgRAAQgKAAgKgFg',
      )
    this.shape_9.setTransform(34.6, 14.875)

    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgVAmQgJgGgFgJQgGgKAAgNQAAgMAGgKQAFgKAJgFQAKgFALAAQAMAAAKAFQAJAFAGAJQAFAKAAAMIgBAGIg5AAQABAJAEAEQAEAEAHAAQAFAAAEgDQADgCABgFIAbAAQgBAJgGAHQgFAHgJAEQgIAEgLAAQgLAAgKgFgAgLgSQgEAFgBAIIAgAAQAAgIgFgFQgEgEgHAAQgGAAgFAEg',
      )
    this.shape_10.setTransform(25.4, 14.875)

    this.shape_11 = new cjs.Shape()
    this.shape_11.graphics
      .f('#CCA57F')
      .s()
      .p('AggAqIAAgUIAjgqIgjAAIAAgVIBAAAIAAAUIgkApIAlAAIAAAWg')
    this.shape_11.setTransform(16.975, 14.875)

    this.shape_12 = new cjs.Shape()
    this.shape_12.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgaAvQgLgGgHgNQgGgNAAgPQAAgPAGgMQAHgMALgIQAMgGAPAAQAUAAANAKQANALAEATIgbAAQgDgIgGgEQgGgEgJAAQgKAAgHAIQgHAIAAANQAAAOAHAIQAHAIAKAAQAJAAAGgEQAGgFADgGIAbAAQgEARgNALQgNALgUAAQgPAAgMgHg',
      )
    this.shape_12.setTransform(7.525, 13.75)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {t: this.shape_12},
            {t: this.shape_11},
            {t: this.shape_10},
            {t: this.shape_9},
            {t: this.shape_8},
            {t: this.shape_7},
            {t: this.shape_6},
            {t: this.shape_5},
            {t: this.shape_4},
            {t: this.shape_3},
            {t: this.shape_2},
            {t: this.shape_1},
            {t: this.shape},
          ],
        })
        .wait(1),
    )

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(
    lib.tcheq,
    new cjs.Rectangle(-0.2, 0, 122.10000000000001, 30.5),
    null,
  )
  ;(lib.spain = function(mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f('#FFA902')
      .s()
      .p('AAVA1IgphAIAABAIgaAAIAAhpIAaAAIApBBIAAhBIAaAAIAABpg')
    this.shape.setTransform(41.45, 13.75)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f('#FFA902')
      .s()
      .p('AgMA1IAAhpIAZAAIAABpg')
    this.shape_1.setTransform(33.625, 13.75)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f('#FFA902')
      .s()
      .p('AAaA1IgGgUIgnAAIgHAUIgbAAIAnhpIAdAAIAnBpgAgMAOIAZAAIgNgmg')
    this.shape_2.setTransform(25.875, 13.775)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgnA1IAAhpIApAAQASAAAKAJQAKAKAAAPQAAAKgEAIQgFAHgJAFQgIAEgMAAIgQAAIAAAlgAgOgDIAOAAQAOgBAAgOQAAgNgOAAIgOAAg',
      )
    this.shape_3.setTransform(15.95, 13.75)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgaAuQgLgJgBgQIAbAAQABAGADAEQAEADAFAAQAFAAADgDQACgCAAgFQAAgEgCgCQgDgDgEgCIgKgEIgQgHQgGgCgFgGQgFgHAAgKQAAgJAFgHQAFgHAJgEQAIgDALAAQARAAAKAIQAKAIACAPIgcAAQgBgFgDgDQgDgDgEAAQgFAAgCACQgDACAAAFQAAAEACACQADADAEACIAJAEQALADAGAEQAGACAFAHQAFAGAAAKQAAAJgEAHQgFAHgIAEQgIAEgMAAQgRAAgMgIg',
      )
    this.shape_4.setTransform(6.325, 13.725)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {t: this.shape_4},
            {t: this.shape_3},
            {t: this.shape_2},
            {t: this.shape_1},
            {t: this.shape},
          ],
        })
        .wait(1),
    )

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(
    lib.spain,
    new cjs.Rectangle(-0.2, 0, 49.5, 30.5),
    null,
  )
  ;(lib.prague = function(mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])

    // Calque_4
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgKALQgGgEAAgHQAAgGAGgEQAFgFAFAAQAHAAAEAFQAGAEAAAGQAAAHgGAEQgEAFgHAAQgFAAgFgFg',
      )
    this.shape.setTransform(22.9, 15.8)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgKALQgEgFgBgGQABgFAEgFQAFgEAFAAQAGAAAFAEQAFAFAAAFQAAAGgFAFQgFAEgGAAQgFAAgFgEg',
      )
    this.shape_1.setTransform(22.9, 15.8)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgJAKQgFgEAAgGQAAgFAFgEQAFgEAEAAQAGAAAEAEQAEAEABAFQgBAGgEAEQgEAEgGAAQgEAAgFgEg',
      )
    this.shape_2.setTransform(22.9, 15.8)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgJAJQgEgDAAgGQAAgFAEgEQAEgDAFAAQAFAAAEADQAFAEAAAFQAAAGgFADQgEAEgFABQgFgBgEgEg',
      )
    this.shape_3.setTransform(22.925, 15.8)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEABQAFgBAEAEQAEADAAAFQAAAFgEAEQgEADgFAAQgEAAgEgDg',
      )
    this.shape_4.setTransform(22.925, 15.8)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgHAIQgEgDAAgFQAAgEAEgDQAEgEADABQAFgBAEAEQADADAAAEQAAAFgDADQgEADgFAAQgDAAgEgDg',
      )
    this.shape_5.setTransform(22.9, 15.8)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgHAIQgDgEAAgEQAAgEADgDQAEgCADAAQAFAAADACQADADAAAEQAAAEgDAEQgDADgFgBQgDABgEgDg',
      )
    this.shape_6.setTransform(22.9, 15.8)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgGAHQgDgDAAgEQAAgEADgCQADgDADAAQAEAAADADQADACAAAEQAAAEgDADQgDADgEAAQgDAAgDgDg',
      )
    this.shape_7.setTransform(22.925, 15.8)

    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgFAHQgDgDAAgEQAAgDADgCQACgDADAAQAEAAACADQADACAAADQAAAEgDADQgCACgEAAQgDAAgCgCg',
      )
    this.shape_8.setTransform(22.925, 15.8)

    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEgBQgDABgDgDg',
      )
    this.shape_9.setTransform(22.925, 15.8)

    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgHAIQgDgDAAgFQAAgEADgDQAEgCADAAQAEAAADACQAEADAAAEQAAAFgEADQgDACgEAAQgDAAgEgCg',
      )
    this.shape_10.setTransform(22.925, 15.8)

    this.shape_11 = new cjs.Shape()
    this.shape_11.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgHAIQgEgDABgFQgBgEAEgDQAEgDADAAQAFAAADADQAEADgBAEQABAFgEADQgDADgFAAQgDAAgEgDg',
      )
    this.shape_11.setTransform(22.9, 15.8)

    this.shape_12 = new cjs.Shape()
    this.shape_12.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgEgDg',
      )
    this.shape_12.setTransform(22.925, 15.8)

    this.shape_13 = new cjs.Shape()
    this.shape_13.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgIAJQgEgDAAgGQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg',
      )
    this.shape_13.setTransform(22.925, 15.8)

    this.shape_14 = new cjs.Shape()
    this.shape_14.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgIAKQgFgEAAgGQAAgFAFgEQADgDAFAAQAFAAAFADQAEAEAAAFQAAAGgEAEQgFAEgFAAQgFAAgDgEg',
      )
    this.shape_14.setTransform(22.9, 15.8)

    this.shape_15 = new cjs.Shape()
    this.shape_15.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgJAKQgFgEAAgGQAAgGAFgDQAEgEAFgBQAGABAEAEQAFADAAAGQAAAGgFAEQgEAFgGAAQgFAAgEgFg',
      )
    this.shape_15.setTransform(22.9, 15.8)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape, p: {scaleX: 1, scaleY: 1}}]})
        .to({state: [{t: this.shape_1}]}, 1)
        .to({state: [{t: this.shape_2}]}, 1)
        .to({state: [{t: this.shape_3}]}, 1)
        .to({state: [{t: this.shape_4}]}, 1)
        .to({state: [{t: this.shape_5}]}, 1)
        .to({state: [{t: this.shape_6}]}, 1)
        .to({state: [{t: this.shape_7}]}, 1)
        .to({state: [{t: this.shape_8}]}, 1)
        .to({state: [{t: this.shape, p: {scaleX: 0.5, scaleY: 0.5}}]}, 1)
        .to({state: [{t: this.shape_8}]}, 1)
        .to({state: [{t: this.shape_9}]}, 1)
        .to({state: [{t: this.shape_10}]}, 1)
        .to({state: [{t: this.shape_11}]}, 1)
        .to({state: [{t: this.shape_12}]}, 1)
        .to({state: [{t: this.shape_13}]}, 1)
        .to({state: [{t: this.shape_14}]}, 1)
        .to({state: [{t: this.shape_15}]}, 1)
        .to({state: [{t: this.shape_1}]}, 1)
        .to({state: [{t: this.shape, p: {scaleX: 1, scaleY: 1}}]}, 1)
        .wait(1),
    )

    // Calque_5
    this.shape_16 = new cjs.Shape()
    this.shape_16.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgPAPQgHgFAAgKQAAgIAHgHQAHgGAIAAQAJAAAHAGQAHAHAAAIQAAAKgHAFQgHAHgJAAQgIAAgHgHg',
      )
    this.shape_16.setTransform(24.725, 5.85)

    this.shape_17 = new cjs.Shape()
    this.shape_17.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgPAQQgIgGAAgKQAAgJAIgGQAHgHAIAAQAJAAAHAHQAIAGAAAJQAAAKgIAGQgHAHgJAAQgIAAgHgHg',
      )
    this.shape_17.setTransform(24.725, 5.85)

    this.shape_18 = new cjs.Shape()
    this.shape_18.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgQAQQgIgFAAgLQAAgJAIgHQAIgGAIAAQAJAAAIAGQAIAHAAAJQAAALgIAFQgIAIgJgBQgIABgIgIg',
      )
    this.shape_18.setTransform(24.725, 5.85)

    this.shape_19 = new cjs.Shape()
    this.shape_19.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgRARQgHgGAAgLQAAgJAHgIQAIgGAJAAQAKAAAIAGQAHAIAAAJQAAALgHAGQgIAIgKgBQgJABgIgIg',
      )
    this.shape_19.setTransform(24.725, 5.85)

    this.shape_20 = new cjs.Shape()
    this.shape_20.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgRASQgIgHAAgLQAAgKAIgIQAIgGAJAAQAKAAAIAGQAIAIAAAKQAAALgIAHQgIAIgKgBQgJABgIgIg',
      )
    this.shape_20.setTransform(24.725, 5.85)

    this.shape_21 = new cjs.Shape()
    this.shape_21.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgSATQgIgIAAgLQAAgLAIgHQAJgHAJAAQAKAAAJAHQAIAHAAALQAAALgIAIQgJAHgKAAQgJAAgJgHg',
      )
    this.shape_21.setTransform(24.725, 5.85)

    this.shape_22 = new cjs.Shape()
    this.shape_22.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgSATQgJgHAAgMQAAgLAJgIQAIgHAKAAQALAAAIAHQAJAIAAALQAAAMgJAHQgIAIgLAAQgKAAgIgIg',
      )
    this.shape_22.setTransform(24.725, 5.85)

    this.shape_23 = new cjs.Shape()
    this.shape_23.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgTAUQgJgIAAgMQAAgLAJgJQAJgHAKAAQALAAAJAHQAJAJAAALQAAAMgJAIQgJAIgLAAQgKAAgJgIg',
      )
    this.shape_23.setTransform(24.725, 5.85)

    this.shape_24 = new cjs.Shape()
    this.shape_24.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgUAVQgJgJAAgMQAAgMAJgIQAKgIAKAAQALAAAKAIQAJAIAAAMQAAAMgJAJQgKAHgLABQgKgBgKgHg',
      )
    this.shape_24.setTransform(24.725, 5.85)

    this.shape_25 = new cjs.Shape()
    this.shape_25.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgUAVQgKgIAAgNQAAgMAKgJQAJgHALgBQAMABAJAHQAKAJAAAMQAAANgKAIQgJAJgMAAQgLAAgJgJg',
      )
    this.shape_25.setTransform(24.725, 5.85)

    this.shape_26 = new cjs.Shape()
    this.shape_26.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgTAUQgJgHAAgNQAAgLAJgJQAJgHAKAAQALAAAJAHQAJAJAAALQAAANgJAHQgJAIgLAAQgKAAgJgIg',
      )
    this.shape_26.setTransform(24.725, 5.85)

    this.shape_27 = new cjs.Shape()
    this.shape_27.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgTAUQgIgIAAgMQAAgLAIgIQAJgHAKAAQALAAAJAHQAIAIAAALQAAAMgIAIQgJAHgLAAQgKAAgJgHg',
      )
    this.shape_27.setTransform(24.725, 5.85)

    this.shape_28 = new cjs.Shape()
    this.shape_28.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgSATQgJgHAAgMQAAgKAJgJQAIgGAKAAQALAAAIAGQAJAJAAAKQAAAMgJAHQgIAIgLgBQgKABgIgIg',
      )
    this.shape_28.setTransform(24.725, 5.85)

    this.shape_29 = new cjs.Shape()
    this.shape_29.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgRASQgJgHAAgLQAAgKAJgIQAIgHAJAAQAKAAAJAHQAIAIAAAKQAAALgIAHQgJAIgKAAQgJAAgIgIg',
      )
    this.shape_29.setTransform(24.725, 5.875)

    this.shape_30 = new cjs.Shape()
    this.shape_30.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgRARQgIgGAAgLQAAgKAIgHQAIgHAJAAQAKAAAIAHQAIAHAAAKQAAALgIAGQgIAIgKAAQgJAAgIgIg',
      )
    this.shape_30.setTransform(24.725, 5.85)

    this.shape_31 = new cjs.Shape()
    this.shape_31.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgQARQgIgHAAgKQAAgKAIgGQAHgIAJABQAKgBAHAIQAIAGAAAKQAAAKgIAHQgHAHgKAAQgJAAgHgHg',
      )
    this.shape_31.setTransform(24.725, 5.85)

    this.shape_32 = new cjs.Shape()
    this.shape_32.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgQAQQgHgGAAgKQAAgJAHgHQAIgGAIAAQAJAAAIAGQAHAHAAAJQAAAKgHAGQgIAIgJgBQgIABgIgIg',
      )
    this.shape_32.setTransform(24.725, 5.85)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape_16}]})
        .to({state: [{t: this.shape_17}]}, 1)
        .to({state: [{t: this.shape_18}]}, 1)
        .to({state: [{t: this.shape_19}]}, 1)
        .to({state: [{t: this.shape_20}]}, 1)
        .to({state: [{t: this.shape_21}]}, 1)
        .to({state: [{t: this.shape_22}]}, 1)
        .to({state: [{t: this.shape_23}]}, 1)
        .to({state: [{t: this.shape_24}]}, 1)
        .to({state: [{t: this.shape_25}]}, 1)
        .to({state: [{t: this.shape_24}]}, 1)
        .to({state: [{t: this.shape_26}]}, 1)
        .to({state: [{t: this.shape_27}]}, 1)
        .to({state: [{t: this.shape_28}]}, 1)
        .to({state: [{t: this.shape_29}]}, 1)
        .to({state: [{t: this.shape_30}]}, 1)
        .to({state: [{t: this.shape_31}]}, 1)
        .to({state: [{t: this.shape_32}]}, 1)
        .to({state: [{t: this.shape_17}]}, 1)
        .to({state: [{t: this.shape_16}]}, 1)
        .wait(1),
    )

    // Calque_3
    this.shape_33 = new cjs.Shape()
    this.shape_33.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgKAMQgFgFgBgHQABgGAFgFQAEgEAGAAQAGAAAFAEQAGAFgBAGQABAHgGAFQgFAEgGAAQgGAAgEgEg',
      )
    this.shape_33.setTransform(4.65, 1.6)

    this.shape_34 = new cjs.Shape()
    this.shape_34.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgLAMQgFgFgBgHQABgHAFgEQAFgFAGAAQAHAAAFAFQAFAEAAAHQAAAHgFAFQgFAFgHAAQgGAAgFgFg',
      )
    this.shape_34.setTransform(4.65, 1.625)

    this.shape_35 = new cjs.Shape()
    this.shape_35.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgLANQgGgGAAgHQAAgHAGgEQAFgFAGgBQAHABAGAFQAFAEAAAHQAAAHgFAGQgGAEgHAAQgGAAgFgEg',
      )
    this.shape_35.setTransform(4.65, 1.6)

    this.shape_36 = new cjs.Shape()
    this.shape_36.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgMANQgGgFAAgIQAAgHAGgFQAGgFAGAAQAHAAAGAFQAGAFAAAHQAAAIgGAFQgGAFgHAAQgGAAgGgFg',
      )
    this.shape_36.setTransform(4.65, 1.625)

    this.shape_37 = new cjs.Shape()
    this.shape_37.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgMAOQgHgGABgIQgBgHAHgFQAFgGAHAAQAHAAAHAGQAFAFAAAHQAAAIgFAGQgHAFgHAAQgHAAgFgFg',
      )
    this.shape_37.setTransform(4.65, 1.6)

    this.shape_38 = new cjs.Shape()
    this.shape_38.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgNAOQgHgGABgIQgBgIAHgFQAGgGAHAAQAIAAAGAGQAHAFgBAIQABAIgHAGQgGAGgIAAQgHAAgGgGg',
      )
    this.shape_38.setTransform(4.65, 1.625)

    this.shape_39 = new cjs.Shape()
    this.shape_39.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgOAPQgGgGAAgJQAAgIAGgFQAGgHAIAAQAIAAAHAHQAGAFAAAIQAAAJgGAGQgHAGgIAAQgIAAgGgGg',
      )
    this.shape_39.setTransform(4.65, 1.6)

    this.shape_40 = new cjs.Shape()
    this.shape_40.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgPAPQgGgGAAgJQAAgIAGgGQAHgGAIAAQAIAAAHAGQAHAGAAAIQAAAJgHAGQgHAGgIAAQgIAAgHgGg',
      )
    this.shape_40.setTransform(4.65, 1.625)

    this.shape_41 = new cjs.Shape()
    this.shape_41.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgPAQQgHgHABgJQgBgIAHgGQAHgHAIAAQAIAAAIAHQAGAGABAIQgBAJgGAHQgIAGgIAAQgIAAgHgGg',
      )
    this.shape_41.setTransform(4.65, 1.6)

    this.shape_42 = new cjs.Shape()
    this.shape_42.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgQAQQgGgGAAgKQAAgJAGgGQAIgHAIAAQAJAAAHAHQAIAGAAAJQAAAKgIAGQgHAHgJAAQgIAAgIgHg',
      )
    this.shape_42.setTransform(4.65, 1.625)

    this.shape_43 = new cjs.Shape()
    this.shape_43.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgPAQQgHgHAAgJQAAgIAHgHQAHgGAIAAQAIAAAIAGQAHAHAAAIQAAAJgHAHQgIAGgIAAQgIAAgHgGg',
      )
    this.shape_43.setTransform(4.65, 1.625)

    this.shape_44 = new cjs.Shape()
    this.shape_44.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAIAAAHAGQAGAGABAIQgBAJgGAGQgHAGgIAAQgIAAgGgGg',
      )
    this.shape_44.setTransform(4.65, 1.625)

    this.shape_45 = new cjs.Shape()
    this.shape_45.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgNAPQgHgGABgJQgBgHAHgGQAFgGAIAAQAIAAAGAGQAHAGgBAHQABAJgHAGQgGAFgIAAQgIAAgFgFg',
      )
    this.shape_45.setTransform(4.65, 1.6)

    this.shape_46 = new cjs.Shape()
    this.shape_46.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgNAOQgGgGAAgIQAAgHAGgGQAGgFAHAAQAIAAAGAFQAGAGAAAHQAAAIgGAGQgGAFgIAAQgHAAgGgFg',
      )
    this.shape_46.setTransform(4.65, 1.625)

    this.shape_47 = new cjs.Shape()
    this.shape_47.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgMANQgHgFABgIQgBgHAHgGQAFgFAHAAQAHAAAHAFQAFAGAAAHQAAAIgFAFQgHAGgHAAQgHAAgFgGg',
      )
    this.shape_47.setTransform(4.65, 1.625)

    this.shape_48 = new cjs.Shape()
    this.shape_48.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgMANQgFgFgBgIQABgHAFgFQAGgFAGAAQAHAAAGAFQAGAFgBAHQABAIgGAFQgGAFgHAAQgGAAgGgFg',
      )
    this.shape_48.setTransform(4.65, 1.6)

    this.shape_49 = new cjs.Shape()
    this.shape_49.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAEgHAAQgGAAgFgEg',
      )
    this.shape_49.setTransform(4.65, 1.6)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape_33}]})
        .to({state: [{t: this.shape_34}]}, 1)
        .to({state: [{t: this.shape_35}]}, 1)
        .to({state: [{t: this.shape_36}]}, 1)
        .to({state: [{t: this.shape_37}]}, 1)
        .to({state: [{t: this.shape_38}]}, 1)
        .to({state: [{t: this.shape_39}]}, 1)
        .to({state: [{t: this.shape_40}]}, 1)
        .to({state: [{t: this.shape_41}]}, 1)
        .to({state: [{t: this.shape_42}]}, 1)
        .to({state: [{t: this.shape_43}]}, 1)
        .to({state: [{t: this.shape_40}]}, 1)
        .to({state: [{t: this.shape_44}]}, 1)
        .to({state: [{t: this.shape_45}]}, 1)
        .to({state: [{t: this.shape_46}]}, 1)
        .to({state: [{t: this.shape_47}]}, 1)
        .to({state: [{t: this.shape_48}]}, 1)
        .to({state: [{t: this.shape_35}]}, 1)
        .to({state: [{t: this.shape_49}]}, 1)
        .to({state: [{t: this.shape_33}]}, 1)
        .wait(1),
    )

    // Calque_2
    this.shape_50 = new cjs.Shape()
    this.shape_50.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgPAPQgHgFAAgKQAAgIAHgHQAHgGAIAAQAJAAAHAGQAHAHAAAIQAAAKgHAFQgHAHgJAAQgIAAgHgHg',
      )
    this.shape_50.setTransform(5.825, 18.8)

    this.shape_51 = new cjs.Shape()
    this.shape_51.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgOAPQgGgGAAgJQAAgIAGgGQAHgGAHAAQAIAAAHAGQAGAGAAAIQAAAJgGAGQgHAGgIAAQgHAAgHgGg',
      )
    this.shape_51.setTransform(5.825, 18.8)

    this.shape_52 = new cjs.Shape()
    this.shape_52.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgNAOQgGgFAAgJQAAgHAGgGQAGgFAHgBQAIABAGAFQAGAGAAAHQAAAJgGAFQgGAGgIAAQgHAAgGgGg',
      )
    this.shape_52.setTransform(5.825, 18.8)

    this.shape_53 = new cjs.Shape()
    this.shape_53.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgMANQgGgFAAgIQAAgHAGgFQAGgFAGgBQAHABAGAFQAGAFAAAHQAAAIgGAFQgGAGgHgBQgGABgGgGg',
      )
    this.shape_53.setTransform(5.825, 18.8)

    this.shape_54 = new cjs.Shape()
    this.shape_54.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgLAMQgGgFAAgHQAAgHAGgFQAFgEAGAAQAHAAAFAEQAGAFAAAHQAAAHgGAFQgFAFgHAAQgGAAgFgFg',
      )
    this.shape_54.setTransform(5.825, 18.8)

    this.shape_55 = new cjs.Shape()
    this.shape_55.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgKAMQgFgFAAgHQAAgGAFgFQAFgEAFAAQAGAAAFAEQAFAFAAAGQAAAHgFAFQgFAEgGAAQgFAAgFgEg',
      )
    this.shape_55.setTransform(5.825, 18.8)

    this.shape_56 = new cjs.Shape()
    this.shape_56.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgJALQgFgFAAgGQAAgFAFgFQAEgDAFAAQAGAAAEADQAFAFAAAFQAAAGgFAFQgEAEgGgBQgFABgEgEg',
      )
    this.shape_56.setTransform(5.825, 18.8)

    this.shape_57 = new cjs.Shape()
    this.shape_57.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgJAJQgEgDAAgGQAAgFAEgEQAFgDAEAAQAFAAAFADQAEAEAAAFQAAAGgEADQgFAFgFAAQgEAAgFgFg',
      )
    this.shape_57.setTransform(5.825, 18.8)

    this.shape_58 = new cjs.Shape()
    this.shape_58.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgIAJQgEgEAAgFQAAgEAEgEQAEgDAEAAQAFAAAEADQAEAEAAAEQAAAFgEAEQgEADgFAAQgEAAgEgDg',
      )
    this.shape_58.setTransform(5.825, 18.8)

    this.shape_59 = new cjs.Shape()
    this.shape_59.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgHAIQgDgDAAgFQAAgDADgEQAEgDADAAQAEAAAEADQADAEAAADQAAAFgDADQgEADgEAAQgDAAgEgDg',
      )
    this.shape_59.setTransform(5.825, 18.8)

    this.shape_60 = new cjs.Shape()
    this.shape_60.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgEgDg',
      )
    this.shape_60.setTransform(5.825, 18.8)

    this.shape_61 = new cjs.Shape()
    this.shape_61.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgIAJQgFgDAAgGQAAgFAFgEQAEgDAEAAQAFAAAEADQAFAEAAAFQAAAGgFADQgEAEgFAAQgEAAgEgEg',
      )
    this.shape_61.setTransform(5.825, 18.8)

    this.shape_62 = new cjs.Shape()
    this.shape_62.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgKALQgFgEAAgHQAAgGAFgEQAFgFAFABQAGgBAFAFQAFAEAAAGQAAAHgFAEQgFAEgGAAQgFAAgFgEg',
      )
    this.shape_62.setTransform(5.825, 18.8)

    this.shape_63 = new cjs.Shape()
    this.shape_63.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgLAMQgFgFAAgHQAAgGAFgFQAGgFAFABQAGgBAGAFQAFAFAAAGQAAAHgFAFQgGAFgGgBQgFABgGgFg',
      )
    this.shape_63.setTransform(5.85, 18.8)

    this.shape_64 = new cjs.Shape()
    this.shape_64.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgMANQgFgGAAgHQAAgHAFgFQAGgFAGAAQAHAAAGAFQAFAFAAAHQAAAHgFAGQgGAEgHAAQgGAAgGgEg',
      )
    this.shape_64.setTransform(5.825, 18.8)

    this.shape_65 = new cjs.Shape()
    this.shape_65.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgNAOQgGgFAAgJQAAgIAGgFQAGgGAHAAQAIAAAGAGQAGAFAAAIQAAAJgGAFQgGAGgIAAQgHAAgGgGg',
      )
    this.shape_65.setTransform(5.825, 18.8)

    this.shape_66 = new cjs.Shape()
    this.shape_66.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgOAPQgHgGAAgJQAAgIAHgGQAHgGAHAAQAIAAAHAGQAHAGAAAIQAAAJgHAGQgHAGgIAAQgHAAgHgGg',
      )
    this.shape_66.setTransform(5.825, 18.8)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape_50}]})
        .to({state: [{t: this.shape_51}]}, 1)
        .to({state: [{t: this.shape_52}]}, 1)
        .to({state: [{t: this.shape_53}]}, 1)
        .to({state: [{t: this.shape_54}]}, 1)
        .to({state: [{t: this.shape_55}]}, 1)
        .to({state: [{t: this.shape_56}]}, 1)
        .to({state: [{t: this.shape_57}]}, 1)
        .to({state: [{t: this.shape_58}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_60}]}, 1)
        .to({state: [{t: this.shape_61}]}, 1)
        .to({state: [{t: this.shape_56}]}, 1)
        .to({state: [{t: this.shape_62}]}, 1)
        .to({state: [{t: this.shape_63}]}, 1)
        .to({state: [{t: this.shape_64}]}, 1)
        .to({state: [{t: this.shape_53}]}, 1)
        .to({state: [{t: this.shape_65}]}, 1)
        .to({state: [{t: this.shape_66}]}, 1)
        .to({state: [{t: this.shape_50}]}, 1)
        .wait(1),
    )

    // Calque_1
    this.shape_67 = new cjs.Shape()
    this.shape_67.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgXAzQgVgVAAgeQAAgdAVgVQAWgWAdAAQAeAAAVAWQAVAVAAAdQAAAegVAVQgVAVgeAAQgdAAgWgVgAheAhQgFgFAAgGQAAgIAFgEQAFgEAGAAQAHAAAFAEQAFAEAAAIQAAAGgFAFQgFAFgHAAQgGAAgFgFg',
      )
    this.shape_67.setTransform(10.025, 8.45)

    this.timeline.addTween(cjs.Tween.get(this.shape_67).wait(20))

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(0, -0.6, 27.8, 21.6)
  ;(lib.pol = function(mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f('#0091B3')
      .s()
      .p('AAVA1IgVghIgUAhIgdAAIAig2IgjgzIAeAAIAVAgIATggIAdAAIghA0IAjA1g')
    this.shape.setTransform(60.225, 13.75)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgWAwQgKgEgFgLQgGgLAAgOIAAg8IAZAAIAAA8QABAKAEAFQAEAHAJgBQAIABAGgHQAEgFAAgKIAAg8IAaAAIAAA8QAAAOgGALQgGAKgKAFQgKAGgMAAQgNAAgJgGg',
      )
    this.shape_1.setTransform(49.65, 13.8)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f('#0091B3')
      .s()
      .p('AgdA1IAAhpIAaAAIAABWIAhAAIAAATg')
    this.shape_2.setTransform(41.125, 13.75)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f('#0091B3')
      .s()
      .p('AggA1IAAhpIBBAAIAAAVIgoAAIAAAVIAjAAIAAATIgjAAIAAAYIAoAAIAAAUg')
    this.shape_3.setTransform(33.35, 13.75)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f('#0091B3')
      .s()
      .p('AAVA1IgphAIAABAIgaAAIAAhpIAaAAIApBBIAAhBIAaAAIAABpg')
    this.shape_4.setTransform(23.45, 13.75)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f('#0091B3')
      .s()
      .p('AggA1IAAhpIBBAAIAAAVIgnAAIAAAVIAjAAIAAATIgjAAIAAAYIAnAAIAAAUg')
    this.shape_5.setTransform(13.95, 13.75)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgpA1IAAhpIAvAAQAQAAAJAHQAJAHAAANQAAAKgFAGQgGAGgIACQAKACAFAGQAGAIAAAJQAAAOgJAHQgJAIgRAAgAgQAgIASAAQAOAAAAgLQAAgGgEgDQgEgEgHAAIgRAAgAgQgJIAQAAQANAAAAgLQAAgLgNAAIgQAAg',
      )
    this.shape_6.setTransform(4.975, 13.75)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {t: this.shape_6},
            {t: this.shape_5},
            {t: this.shape_4},
            {t: this.shape_3},
            {t: this.shape_2},
            {t: this.shape_1},
            {t: this.shape},
          ],
        })
        .wait(1),
    )

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(
    lib.pol,
    new cjs.Rectangle(-2.2, 0, 70, 30.5),
    null,
  )
  ;(lib.lignes = function(mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])

    // Calque_9
    this.shape = new cjs.Shape()
    this.shape.graphics
      .lf(
        ['#0091B3', '#B8AC8D', '#FF8CD9'],
        [0, 0.537, 1],
        -572.5,
        -232,
        7.7,
        -232,
      )
      .s()
      .p(
        'ABEBBIiPh2IAAgMICVB7QABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgBAAIgDgBg',
      )
    this.shape.setTransform(791.8256, 330.6131)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .lf(
        ['#0091B3', '#B8AC8D', '#FF8CD9'],
        [0, 0.537, 1],
        -544.8,
        -209.3,
        35.3,
        -209.3,
      )
      .s()
      .p(
        'AFeEkIgBgCIACABIAAABgAFVEeIgOgKIqBoQIgegiIKXIhQAHAFAFAHIAQARIACACIgIgEgAlckhIgCgCIABAAIAAAAIAAAAIAFAFg',
      )
    this.shape_1.setTransform(764.175, 307.975)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .lf(
        ['#0091B3', '#B8AC8D', '#FF8CD9'],
        [0, 0.537, 1],
        -518.7,
        -187.9,
        61.4,
        -187.9,
      )
      .s()
      .p(
        'AJjH7IgIgIIAJAGIAAABIAAABgAJUHuIgYgSIxbuVIgygwIR3OrIAWAUIAfAdIgHgFgApin3IAAgBIgBgBIAAgBIABAAIARARg',
      )
    this.shape_2.setTransform(738.075, 286.525)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .lf(
        ['#0091B3', '#B8AC8D', '#FF8CD9'],
        [0, 0.537, 1],
        -494,
        -167.6,
        86.1,
        -167.6,
      )
      .s()
      .p(
        'ANZLGIgLgLIgFgFIASAOIAAAAIAAABIgBABIgBAAgANFKzIgigaI4a0EIg5g1IYwUWIAgAcIApAkIgEgDgAtZrCIgBgBIAAAAIAAgBIABgBIABABIAoAkg',
      )
    this.shape_3.setTransform(713.375, 266.225)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .lf(
        ['#0091B3', '#B8AC8D', '#FF8CD9'],
        [0, 0.537, 1],
        -470.7,
        -148.4,
        109.4,
        -148.4,
      )
      .s()
      .p(
        'ARCOFIgPgNIgVgTIAKAIIAcAVIAAABIAAACIgBAAIgBAAgAP9NLIiNh2IBeBLIApAjIAnAiIghgagAxCuAIgBgCIAAAAIAAgBIABgBIACAAIBRBIg',
      )
    this.shape_4.setTransform(690.075, 247.075)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .lf(
        ['#0091B3', '#B8AC8D', '#FF8CD9'],
        [0, 0.537, 1],
        -448.9,
        -130.5,
        131.3,
        -130.5,
      )
      .s()
      .p(
        'AUcQ5IgSgQIhAg3IA0AqIAhAaIABABIgBABIgCABIgBAAgAR9OxIASAPIAxAqIAEADgA0dw0IgBgBIgBgBIABgBIABgBIADAAIB/Bvg',
      )
    this.shape_5.setTransform(668.2, 229.1)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .lf(
        ['#0091B3', '#B8AC8D', '#FF8CD9'],
        [0, 0.537, 1],
        -428.4,
        -113.7,
        151.8,
        -113.7,
      )
      .s()
      .p(
        'AXoTgIgVgSIhVhJIgPgMIAbAWIA7AvIAnAfIAAACIAAABIgCABIgCgBgA3qzcIgBgBIAAAAIAAgCIACgBIACABICzCZg',
      )
    this.shape_6.setTransform(647.725, 212.3)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .lf(
        ['#0091B3', '#B8AC8D', '#FF8CD9'],
        [0, 0.537, 1],
        -409.3,
        -98,
        170.8,
        -98,
      )
      .s()
      .p(
        'AanV9IgYgVIhihSIhBg2MgyUgpXIgBgCIgBgBIABgCIABgBIADAAIDLCtMAwXAnxIBCA1IArAjIABABIgBADIgBABIgCgBg',
      )
    this.shape_7.setTransform(628.65, 196.65)

    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .lf(
        ['#0091B3', '#B8AC8D', '#FF8CD9'],
        [0, 0.537, 1],
        -391.7,
        -83.5,
        188.5,
        -83.5,
      )
      .s()
      .p(
        'AdWYOIgagXIhshaIhIg8Mg3hgtpIgBgCIgBgBIABgCIACgBIADABIDgC9MA1XAr4IBJA7IAwAmIABACIgBADIgCABIgDgBg',
      )
    this.shape_8.setTransform(611.025, 182.15)

    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics
      .lf(
        ['#0091B3', '#B8AC8D', '#FF8CD9'],
        [0, 0.537, 1],
        -375.5,
        -70.2,
        204.7,
        -70.2,
      )
      .s()
      .p(
        'Af4aTIgcgYIh2hiIhPhCMg8TgxkIgBgCIAAgBIABgCQAAAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAIADAAID1DOMA58AvpIBPBBIA0AqIABACIgBACIgCABIgDgBg',
      )
    this.shape_9.setTransform(594.8, 168.8)

    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics
      .lf(
        ['#0091B3', '#B8AC8D', '#FF8CD9'],
        [0, 0.537, 1],
        -360.6,
        -58,
        219.5,
        -58,
      )
      .s()
      .p(
        'EAiMAcNIgfgaIh+hpIhVhGMhAqg1KQAAgBAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIAAAAIABgDQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAABAAIADABMBCQA2iIBVBFIA3AtIABACIAAADIgDABIgDgBg',
      )
    this.shape_10.setTransform(579.975, 156.625)

    this.shape_11 = new cjs.Shape()
    this.shape_11.graphics
      .lf(
        ['#0091B3', '#B8AC8D', '#FF8CD9'],
        [0, 0.537, 1],
        -347.2,
        -47,
        232.9,
        -47,
      )
      .s()
      .p(
        'EAkSAd7IghgbIiGhwIhahKMhEng4aQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIABgDQAAAAAAgBQAAAAABAAQAAAAAAAAQABgBAAAAIADACMBGUA52IBaBKIA6AvIABADIAAADIgDABIgDgBg',
      )
    this.shape_11.setTransform(566.55, 145.6)

    this.shape_12 = new cjs.Shape()
    this.shape_12.graphics
      .lf(
        ['#0091B3', '#B8AC8D', '#FF8CD9'],
        [0, 0.537, 1],
        -335.2,
        -37.1,
        244.9,
        -37.1,
      )
      .s()
      .p(
        'EAmKAfeIgjgeIiOh1IhfhNMhIIg7UQAAgBgBAAQAAAAAAgBQAAAAAAgBQgBAAAAgBIABgDQABAAAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIAEABMBJ7A81IBeBNIA+AzIABACIAAAEIgDABIgDgBg',
      )
    this.shape_12.setTransform(554.55, 135.75)

    this.shape_13 = new cjs.Shape()
    this.shape_13.graphics
      .lf(
        ['#0091B3', '#B8AC8D', '#FF8CD9'],
        [0, 0.537, 1],
        -324.6,
        -28.4,
        255.5,
        -28.4,
      )
      .s()
      .p(
        'EAnzAg1IgkgfIiUh6IhjhRMhLQg94QAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAIAAgBIACgCQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIAEABMBNIA/dIBjBRIBAA1QABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAIgBAEIgDABIgEgBg',
      )
    this.shape_13.setTransform(543.975, 127.05)

    this.shape_14 = new cjs.Shape()
    this.shape_14.graphics
      .lf(
        ['#0091B3', '#B8AC8D', '#FF8CD9'],
        [0, 0.537, 1],
        -315.5,
        -20.9,
        264.7,
        -20.9,
      )
      .s()
      .p(
        'EApPAiAIgmgfIiah/IhmhUMhN8hAGQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAIABgDQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAMBP6BBuIBmBUIBDA2QAAABABAAQAAAAAAABQAAAAAAABQABAAAAABIgBADQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBAAIgDgBg',
      )
    this.shape_14.setTransform(534.8, 119.5)

    this.shape_15 = new cjs.Shape()
    this.shape_15.graphics
      .lf(
        ['#0091B3', '#B8AC8D', '#FF8CD9'],
        [0, 0.537, 1],
        -307.7,
        -14.5,
        272.5,
        -14.5,
      )
      .s()
      .p(
        'EAqdAjAIgoghIieiCIhphXMhQPhB+QgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAIABgDQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIAEABMBSQBDqIBpBWIBFA4QAAAAAAABQABAAAAABQAAAAAAAAQAAABAAAAIgBAEQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgDgBg',
      )
    this.shape_15.setTransform(527.025, 113.125)

    this.shape_16 = new cjs.Shape()
    this.shape_16.graphics
      .lf(
        ['#0091B3', '#B8AC8D', '#FF8CD9'],
        [0, 0.537, 1],
        -301.3,
        -9.3,
        278.8,
        -9.3,
      )
      .s()
      .p(
        'EArcAj0IgoghIiiiFIhshZMhSHhDhQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAAAAAAAIAEABMBULBFOIBsBZIBGA5QABABAAAAQAAAAAAABQABAAAAAAQAAABAAAAIgBAEQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgDgBg',
      )
    this.shape_16.setTransform(520.675, 107.9)

    this.shape_17 = new cjs.Shape()
    this.shape_17.graphics
      .lf(
        ['#0091B3', '#B8AC8D', '#FF8CD9'],
        [0, 0.537, 1],
        -296.4,
        -5.2,
        283.8,
        -5.2,
      )
      .s()
      .p(
        'EAsNAkdIgpgiIiliIIhthaMhTkhEuQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAAAIAAgBIABgDQAAAAABgBQAAAAABAAQAAgBAAAAQABAAAAAAIAEABMBVrBGdIBtBaIBIA7QAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAAAIgBAFQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAIgEgBg',
      )
    this.shape_17.setTransform(515.725, 103.85)

    this.shape_18 = new cjs.Shape()
    this.shape_18.graphics
      .lf(
        ['#0091B3', '#B8AC8D', '#FF8CD9'],
        [0, 0.537, 1],
        -292.9,
        -2.3,
        287.3,
        -2.3,
      )
      .s()
      .p(
        'EAsxAk6IgqgiIiniLIhvhbMhUmhFjQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAAAABAAIAEACMBWvBHUIBvBbIBIA8QAAAAABAAQAAAAAAABQAAAAAAABQABAAAAAAIgBAFQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAIgDgBg',
      )
    this.shape_18.setTransform(512.2, 100.95)

    this.shape_19 = new cjs.Shape()
    this.shape_19.graphics
      .lf(
        ['#0091B3', '#B8AC8D', '#FF8CD9'],
        [0, 0.537, 1],
        -290.7,
        -0.6,
        289.4,
        -0.6,
      )
      .s()
      .p(
        'EAtGAlLIgqgjIipiKIhvhcMhVPhGFQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBABAAIAEACMBXYBH2IBvBcIBJA8QABAAAAABQAAAAAAAAQABABAAAAQAAAAAAABIgBAEQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgDgBg',
      )
    this.shape_19.setTransform(510.075, 99.2)

    this.shape_20 = new cjs.Shape()
    this.shape_20.graphics
      .lf(['#0091B3', '#B8AC8D', '#FF8CD9'], [0, 0.537, 1], -290, 0, 290.1, 0)
      .s()
      .p(
        'EAtMAlRMhaehKZQAAgBgBAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAMBafBKaQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAIAAAAIgEgBg',
      )
    this.shape_20.setTransform(509.375, 98.625)

    this.shape_21 = new cjs.Shape()
    this.shape_21.graphics
      .lf(
        ['#0091B3', '#B8AC8D', '#FF8CD9'],
        [0, 0.537, 1],
        -248.9,
        33.8,
        331.2,
        33.8,
      )
      .s()
      .p(
        'EAmyAf+MhI5g77Ikwj6IgBgDIABgDQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAAAAAIAEABIE5EBIE7ECIE6ECMA+7AzwQAAAAABABQAAAAAAAAQAAABAAAAQABABAAAAIgBADIgEACIgDgCg',
      )
    this.shape_21.setTransform(468.25, 64.85)

    this.shape_22 = new cjs.Shape()
    this.shape_22.graphics
      .lf(
        ['#0091B3', '#B8AC8D', '#FF8CD9'],
        [0, 0.537, 1],
        -207.8,
        67.6,
        372.4,
        67.6,
      )
      .s()
      .p(
        'EAgYAasMg82gyAIj+jSIgBgCIABgCIACgCIADABIEGDWIEGDWIEHDYMA0hArOIABACIAAADIgDABIgDgBg',
      )
    this.shape_22.setTransform(427.1, 31.05)

    this.shape_23 = new cjs.Shape()
    this.shape_23.graphics
      .lf(
        ['#0091B3', '#B8AC8D', '#FF8CD9'],
        [0, 0.537, 1],
        -166.7,
        101.3,
        413.5,
        101.3,
      )
      .s()
      .p(
        'AZ+VaMgwzgoGIjMioIgBgCIABgCIACgBIACAAIDSCrIDSCrIDTCtMAqIAirIABACIgBACIgCABIgCAAg',
      )
    this.shape_23.setTransform(385.975, -2.725)

    this.shape_24 = new cjs.Shape()
    this.shape_24.graphics
      .lf(
        ['#0091B3', '#B8AC8D', '#FF8CD9'],
        [0, 0.537, 1],
        -125.5,
        135.1,
        454.6,
        135.1,
      )
      .s()
      .p(
        'ATkQHMgkxgeLIiYh/IgBgBIAAgCIACgBIABABICeB/ICeCAICgCCIbiWoIEMDhIABABIgBACIgCABIgBgBg',
      )
    this.shape_24.setTransform(344.85, -36.525)

    this.shape_25 = new cjs.Shape()
    this.shape_25.graphics
      .lf(
        ['#0091B3', '#B8AC8D', '#FF8CD9'],
        [0, 0.537, 1],
        -84.4,
        168.9,
        495.7,
        168.9,
      )
      .s()
      .p(
        'ANKK0Iidh8I2RyUIhnhVIAAgBIAAgCIABAAIABAAIBqBUIBrBUIBrBYISiPOICzCYIAAABIAAABIgBABIgBgBg',
      )
    this.shape_25.setTransform(303.725, -70.3)

    this.shape_26 = new cjs.Shape()
    this.shape_26.graphics
      .lf(
        ['#0091B3', '#B8AC8D', '#FF8CD9'],
        [0, 0.537, 1],
        -43.3,
        202.7,
        536.9,
        202.7,
      )
      .s()
      .p(
        'AGwFiIhPg7IrcpaQgbgWgZgXIgBAAIAAgBIABgBIAAABIA2AoIA3ApIA4AsIJhH1IBaBQIAAABg',
      )
    this.shape_26.setTransform(262.575, -104.1)

    this.shape_27 = new cjs.Shape()
    this.shape_27.graphics
      .lf(
        ['#0091B3', '#B8AC8D', '#FF8CD9'],
        [0, 0.537, 1],
        -2.1,
        236.5,
        578,
        236.5,
      )
      .s()
      .p(
        'AgTgMQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQgBAAABgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABABAAIAiAbIAAANg',
      )
    this.shape_27.setTransform(221.4494, -137.8631)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: []})
        .to({state: [{t: this.shape}]}, 107)
        .to({state: [{t: this.shape_1}]}, 1)
        .to({state: [{t: this.shape_2}]}, 1)
        .to({state: [{t: this.shape_3}]}, 1)
        .to({state: [{t: this.shape_4}]}, 1)
        .to({state: [{t: this.shape_5}]}, 1)
        .to({state: [{t: this.shape_6}]}, 1)
        .to({state: [{t: this.shape_7}]}, 1)
        .to({state: [{t: this.shape_8}]}, 1)
        .to({state: [{t: this.shape_9}]}, 1)
        .to({state: [{t: this.shape_10}]}, 1)
        .to({state: [{t: this.shape_11}]}, 1)
        .to({state: [{t: this.shape_12}]}, 1)
        .to({state: [{t: this.shape_13}]}, 1)
        .to({state: [{t: this.shape_14}]}, 1)
        .to({state: [{t: this.shape_15}]}, 1)
        .to({state: [{t: this.shape_16}]}, 1)
        .to({state: [{t: this.shape_17}]}, 1)
        .to({state: [{t: this.shape_18}]}, 1)
        .to({state: [{t: this.shape_19}]}, 1)
        .to({state: [{t: this.shape_20}]}, 1)
        .to({state: [{t: this.shape_20}]}, 48)
        .to({state: [{t: this.shape_21}]}, 1)
        .to({state: [{t: this.shape_22}]}, 1)
        .to({state: [{t: this.shape_23}]}, 1)
        .to({state: [{t: this.shape_24}]}, 1)
        .to({state: [{t: this.shape_25}]}, 1)
        .to({state: [{t: this.shape_26}]}, 1)
        .to({state: [{t: this.shape_27}]}, 1)
        .to({state: []}, 1)
        .wait(7),
    )

    // Calque_8
    this.shape_28 = new cjs.Shape()
    this.shape_28.graphics
      .lf(
        ['#66FFFF', '#FFCC33', '#FF45D8'],
        [0.094, 0.651, 1],
        -3.8,
        261.1,
        1487.9,
        261.1,
      )
      .s()
      .p(
        'AgigHQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABABIBEAXIAAALg',
      )
    this.shape_28.setTransform(-672.5891, -165.6766)

    this.shape_29 = new cjs.Shape()
    this.shape_29.graphics
      .lf(
        ['#66FFFF', '#FFCC33', '#FF45D8'],
        [0.094, 0.651, 1],
        -50.9,
        244.6,
        1440.8,
        244.6,
      )
      .s()
      .p(
        'AH8C0IgkgJItuk1IgtgRIg5gXIAAgBIABAAIA3AQIAzAQINFEmIBJAhIAAAAIAAAAIgBAAg',
      )
    this.shape_29.setTransform(-625.475, -149.1)

    this.shape_30 = new cjs.Shape()
    this.shape_30.graphics
      .lf(
        ['#66FFFF', '#FFCC33', '#FF45D8'],
        [0.094, 0.651, 1],
        -96.5,
        228.5,
        1395.2,
        228.5,
      )
      .s()
      .p(
        'APEFVIhJgXI55pGIhVggIhwgqIAAgBIAAgBIABAAIBpAiQAwAQAxARIYuIsICOA5IAAAAIAAABg',
      )
    this.shape_30.setTransform(-579.925, -133.075)

    this.shape_31 = new cjs.Shape()
    this.shape_31.graphics
      .lf(
        ['#66FFFF', '#FFCC33', '#FF45D8'],
        [0.094, 0.651, 1],
        -140.5,
        213,
        1351.2,
        213,
      )
      .s()
      .p(
        'AV7HwIhrgjMglqgNQIh8gtIilg9IgBgBIABgBIAAAAICbA0QBHAXBGAZMAj9AMpIDSBQIAAAAIAAABIAAABIgBAAg',
      )
    this.shape_31.setTransform(-535.9, -117.575)

    this.shape_32 = new cjs.Shape()
    this.shape_32.graphics
      .lf(
        ['#66FFFF', '#FFCC33', '#FF45D8'],
        [0.094, 0.651, 1],
        -183,
        198.1,
        1308.7,
        198.1,
      )
      .s()
      .p(
        'AcjKFIiMguMgxAgRQIiig6IjZhPIAAgCIAAAAIABAAIDKBEIC3A/MAuyAQdIEUBnIABABIAAABIgBAAIgBAAg',
      )
    this.shape_32.setTransform(-493.425, -102.6375)

    this.shape_33 = new cjs.Shape()
    this.shape_33.graphics
      .lf(
        ['#66FFFF', '#FFCC33', '#FF45D8'],
        [0.094, 0.651, 1],
        -223.9,
        183.7,
        1267.8,
        183.7,
      )
      .s()
      .p(
        'A7spqIjHhIIkJhgIgBgCIAAgBIACAAID3BVIDgBOMA5PAUIIFTB9IAAAAIAAACIAAAAIgCABg',
      )
    this.shape_33.setTransform(-452.5125, -88.225)

    this.shape_34 = new cjs.Shape()
    this.shape_34.graphics
      .lf(
        ['#66FFFF', '#FFCC33', '#FF45D8'],
        [0.094, 0.651, 1],
        -263.3,
        169.8,
        1228.4,
        169.8,
      )
      .s()
      .p(
        'EApGAOgMhJqgZ4IjphTIk5hxIgBgCIABgBIABAAIEjBkIEIBcMBDRAXrIGQCRIABABIAAABIgBABIgBAAIAAAAg',
      )
    this.shape_34.setTransform(-413.125, -74.375)

    this.shape_35 = new cjs.Shape()
    this.shape_35.graphics
      .lf(
        ['#66FFFF', '#FFCC33', '#FF45D8'],
        [0.094, 0.651, 1],
        -301.1,
        156.5,
        1190.6,
        156.5,
      )
      .s()
      .p(
        'EAvAAQlMhUPgdmIkLhfIlniBIgBgDIABgBIACAAIFNBzIEuBqMBM7AbEIHKCmIABABIAAACIgBAAIAAABIgBgBg',
      )
    this.shape_35.setTransform(-375.2875, -61.05)

    this.shape_36 = new cjs.Shape()
    this.shape_36.graphics
      .lf(
        ['#66FFFF', '#FFCC33', '#FF45D8'],
        [0.094, 0.651, 1],
        -337.4,
        143.7,
        1154.3,
        143.7,
      )
      .s()
      .p(
        'EgptgOmIkshrImSiPIgCgDIABgCIACAAIF2CCIFSB2MBWMAeVIICC5IABABIAAACIgBABIgCABg',
      )
    this.shape_36.setTransform(-338.9875, -48.2875)

    this.shape_37 = new cjs.Shape()
    this.shape_37.graphics
      .lf(
        ['#66FFFF', '#FFCC33', '#FF45D8'],
        [0.094, 0.651, 1],
        -372.2,
        131.5,
        1119.5,
        131.5,
      )
      .s()
      .p(
        'EA6GAUgMhoGgknIlLh1Im8ieIgBgEIABgBIACAAIGdCPIF0CDMBfEAhdII3DLIACABIAAADIgBABIgBAAIgBAAg',
      )
    this.shape_37.setTransform(-304.2375, -36.05)

    this.shape_38 = new cjs.Shape()
    this.shape_38.graphics
      .lf(
        ['#66FFFF', '#FFCC33', '#FF45D8'],
        [0.094, 0.651, 1],
        -405.4,
        119.8,
        1086.3,
        119.8,
      )
      .s()
      .p(
        'EgyGgRjIloh/InlitIgBgDIABgCIACAAIHCCdQDLBGDKBIMBniAkcIJrDdIACABIAAACIgCACIgCAAg',
      )
    this.shape_38.setTransform(-271.0375, -24.3625)

    this.shape_39 = new cjs.Shape()
    this.shape_39.graphics
      .lf(
        ['#66FFFF', '#FFCC33', '#FF45D8'],
        [0.094, 0.651, 1],
        -437,
        108.7,
        1054.7,
        108.7,
      )
      .s()
      .p(
        'Eg2AgS7ImFiJIoKi6IgCgEIACgCIACAAIHlCqIG1CZMBvnAnSIKcDuIABABIAAADIgBABIgCABg',
      )
    this.shape_39.setTransform(-239.3875, -13.2375)

    this.shape_40 = new cjs.Shape()
    this.shape_40.graphics
      .lf(
        ['#66FFFF', '#FFCC33', '#FF45D8'],
        [0.094, 0.651, 1],
        -467.1,
        98.1,
        1024.6,
        98.1,
      )
      .s()
      .p(
        'Eg5ugUOImfiUIovjGIgCgEIACgCIACAAIIHC2IHTCkMB3TAp+ILKD/IACABIAAADIgCABIgCABg',
      )
    this.shape_40.setTransform(-209.2625, -2.6375)

    this.shape_41 = new cjs.Shape()
    this.shape_41.graphics
      .lf(
        ['#66FFFF', '#FFCC33', '#FF45D8'],
        [0.094, 0.651, 1],
        -495.7,
        88,
        996,
        88,
      )
      .s()
      .p(
        'EBNYAbTMiKogwxIm5icIpRjSIgCgEIACgCIADAAIImDAIHwCvMCKbAwwIACACQAAAAAAAAQAAABABAAQAAAAAAABQAAAAgBAAIgBACIgCABIgBgBg',
      )
    this.shape_41.setTransform(-180.6917, 7.425)

    this.shape_42 = new cjs.Shape()
    this.shape_42.graphics
      .lf(
        ['#66FFFF', '#FFCC33', '#FF45D8'],
        [0.094, 0.651, 1],
        -522.7,
        78.5,
        969,
        78.5,
      )
      .s()
      .p(
        'EBRmAczMiSLgzcInRikIpyjeIgCgEIACgCQAAgBAAAAQABAAAAAAQABAAAAAAQAAAAABABIJEDLIILC4MCR/AzaIABACQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAABIgCABIgCABIgBAAg',
      )
    this.shape_42.setTransform(-153.6667, 16.9333)

    this.shape_43 = new cjs.Shape()
    this.shape_43.graphics
      .lf(
        ['#66FFFF', '#FFCC33', '#FF45D8'],
        [0.094, 0.651, 1],
        -548.2,
        69.6,
        943.5,
        69.6,
      )
      .s()
      .p(
        'EhDvgXwInnisIqRjoIgCgFIACgCQABAAAAAAQAAgBABAAQAAAAAAABQABAAAAAAIJhDVIIkDBMCZGA16IACACIAAADIgCACIgCAAg',
      )
    this.shape_43.setTransform(-128.1917, 25.9)

    this.shape_44 = new cjs.Shape()
    this.shape_44.graphics
      .lf(
        ['#66FFFF', '#FFCC33', '#FF45D8'],
        [0.094, 0.651, 1],
        -572.1,
        61.1,
        919.6,
        61.1,
      )
      .s()
      .p(
        'EBZUAfhMigAg4TIn8i0IqtjyIgDgFIACgDIADAAIJ8DfII7DKMCfzA4QIACACIAAADIgCACIgCABIgBAAg',
      )
    this.shape_44.setTransform(-104.25, 34.3208)

    this.shape_45 = new cjs.Shape()
    this.shape_45.graphics
      .lf(
        ['#66FFFF', '#FFCC33', '#FF45D8'],
        [0.094, 0.651, 1],
        -594.5,
        53.3,
        897.2,
        53.3,
      )
      .s()
      .p(
        'EBc0AgvMimRg6gIoQi7IrIj7IgDgFIACgCIADAAIKVDnIJTDSMCmCA6dIACACIAAAEIgCABIgCABIgBgBg',
      )
    this.shape_45.setTransform(-81.8625, 42.2)

    this.shape_46 = new cjs.Shape()
    this.shape_46.graphics
      .lf(
        ['#66FFFF', '#FFCC33', '#FF45D8'],
        [0.094, 0.651, 1],
        -615.4,
        45.9,
        876.3,
        45.9,
      )
      .s()
      .p(
        'EBgEAh5MisFg8jIojjCIrikEIgCgFIACgDQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAIKsDwIJnDZMCr3A8gIACACQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABIgCACIgCAAIgBAAg',
      )
    this.shape_46.setTransform(-61.0167, 49.5333)

    this.shape_47 = new cjs.Shape()
    this.shape_47.graphics
      .lf(
        ['#66FFFF', '#FFCC33', '#FF45D8'],
        [0.094, 0.651, 1],
        -634.7,
        39.1,
        857,
        39.1,
      )
      .s()
      .p(
        'EBjFAi9Mixfg+dIo0jHIr5kNIgCgFIACgDQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAILBD4IJ7DgMCxQA+ZIACACIAAAEIgCACIgCAAIgBAAg',
      )
    this.shape_47.setTransform(-41.7125, 56.3333)

    this.shape_48 = new cjs.Shape()
    this.shape_48.graphics
      .lf(
        ['#66FFFF', '#FFCC33', '#FF45D8'],
        [0.094, 0.651, 1],
        -652.4,
        32.9,
        839.3,
        32.9,
      )
      .s()
      .p(
        'EBl2Aj8Mi2chANIpEjNIsOkUIgDgGIACgCQAAgBABAAQAAAAABAAQAAAAABAAQAAAAAAABILWD+IKMDmMC2NBAJIACADIABADIgCACIgDABIgBAAg',
      )
    this.shape_48.setTransform(-23.95, 62.5833)

    this.shape_49 = new cjs.Shape()
    this.shape_49.graphics
      .lf(
        ['#66FFFF', '#FFCC33', '#FF45D8'],
        [0.094, 0.651, 1],
        -668.7,
        27.2,
        823,
        27.2,
      )
      .s()
      .p(
        'EBoYAk1Mi6+hBzIpTjSIsikbIgCgGQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABABILnEFIKcDrMC6vBBvIACADQABAAAAAAQAAABAAAAQAAAAAAABQAAABAAAAIgCACIgDABIgBAAg',
      )
    this.shape_49.setTransform(-7.7417, 68.2833)

    this.shape_50 = new cjs.Shape()
    this.shape_50.graphics
      .lf(
        ['#66FFFF', '#FFCC33', '#FF45D8'],
        [0.094, 0.651, 1],
        -683.3,
        22,
        808.4,
        22,
      )
      .s()
      .p(
        'EBqrAloMi/FhDQIpfjWIs0khIgDgGQAAAAABAAQAAgBAAAAQAAgBABAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAABABQABAAAAAAIL4ELIKrDwMC+1BDMIACACQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABIgCACIgDABIgBgBg',
      )
    this.shape_50.setTransform(6.9333, 73.4583)

    this.shape_51 = new cjs.Shape()
    this.shape_51.graphics
      .lf(
        ['#66FFFF', '#FFCC33', '#FF45D8'],
        [0.094, 0.651, 1],
        -696.5,
        17.4,
        795.2,
        17.4,
      )
      .s()
      .p(
        'EBsuAmXMjCwhEjIprjaItDknIgDgGQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAgBIAEAAIMGERIK4D1MDCgBEeIACACQABABAAAAQAAAAAAABQAAAAAAABQAAAAAAABIgDACIgCABIgBAAg',
      )
    this.shape_51.setTransform(20.0583, 78.0708)

    this.shape_52 = new cjs.Shape()
    this.shape_52.graphics
      .lf(
        ['#66FFFF', '#FFCC33', '#FF45D8'],
        [0.094, 0.651, 1],
        -708.1,
        13.3,
        783.6,
        13.3,
      )
      .s()
      .p(
        'EBuhAnAMjF/hFsIp1jeItRkrIgDgGQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAQAAAAABABIMTEVILED5MDFvBFnIACACQABABAAAAQAAAAAAABQAAAAAAABQAAAAAAABIgDACIgCABIgCAAg',
      )
    this.shape_52.setTransform(31.6583, 82.1333)

    this.shape_53 = new cjs.Shape()
    this.shape_53.graphics
      .lf(
        ['#66FFFF', '#FFCC33', '#FF45D8'],
        [0.094, 0.651, 1],
        -718.1,
        9.8,
        773.6,
        9.8,
      )
      .s()
      .p(
        'EBwGAnjMjIzhGrIp+jhItdkvIgDgHQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQABAAAAAAIMeEZILOD9MDIiBGmIADACQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAIgCADIgCAAIgCAAg',
      )
    this.shape_53.setTransform(41.6833, 85.6625)

    this.shape_54 = new cjs.Shape()
    this.shape_54.graphics
      .lf(
        ['#66FFFF', '#FFCC33', '#FF45D8'],
        [0.094, 0.651, 1],
        -726.6,
        6.8,
        765.1,
        6.8,
      )
      .s()
      .p(
        'EBxbAoBMjLLhHhIqGjkItnkyIgDgHQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQABAAAAAAIMoEdILWEAMDK6BHbIADACQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIgCACIgDABIgBAAg',
      )
    this.shape_54.setTransform(50.1833, 88.6583)

    this.shape_55 = new cjs.Shape()
    this.shape_55.graphics
      .lf(
        ['#66FFFF', '#FFCC33', '#FF45D8'],
        [0.094, 0.651, 1],
        -733.5,
        4.3,
        758.2,
        4.3,
      )
      .s()
      .p(
        'EBygAoZMjNHhIMIqMjmItwk2IgDgGQAAgBABAAQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAAAQABgBAAAAQABAAAAABQABAAABAAIMvEfILeEDMDM2BIGIACACQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAIgDADIgDABIgBgBg',
      )
    this.shape_55.setTransform(57.1333, 91.1083)

    this.shape_56 = new cjs.Shape()
    this.shape_56.graphics
      .lf(
        ['#66FFFF', '#FFCC33', '#FF45D8'],
        [0.094, 0.651, 1],
        -738.9,
        2.4,
        752.8,
        2.4,
      )
      .s()
      .p(
        'EBzWAosMjOnhIuIqRjoIt3k4IgDgGQAAgBABAAQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAAAQABgBAAAAQABAAAAABQABAAABAAIM1EhILjEFMDOXBIoIACACQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAIgDADIgCABIgCgBg',
      )
    this.shape_56.setTransform(62.5333, 93.0083)

    this.shape_57 = new cjs.Shape()
    this.shape_57.graphics
      .lf(
        ['#66FFFF', '#FFCC33', '#FF45D8'],
        [0.094, 0.651, 1],
        -742.8,
        1.1,
        748.9,
        1.1,
      )
      .s()
      .p(
        'EBz9Ao6MjPthJHIqUjpIt7k5IgDgHQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQABAAAAAAIM6EjILnEGMDPbBJBIADACQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABIgCACIgDABIgBAAg',
      )
    this.shape_57.setTransform(66.3833, 94.3583)

    this.shape_58 = new cjs.Shape()
    this.shape_58.graphics
      .lf(
        ['#66FFFF', '#FFCC33', '#FF45D8'],
        [0.094, 0.651, 1],
        -745.1,
        0.3,
        746.6,
        0.3,
      )
      .s()
      .p(
        'EB0UApCMjQWhJVIqXjqIt+k6IgDgHQABAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAIM8EkILpEHMDQFBJPIADACQAAABAAAAQAAAAABABQAAAAAAABQAAABgBAAIgCADIgDAAIgBAAg',
      )
    this.shape_58.setTransform(68.7083, 95.1833)

    this.shape_59 = new cjs.Shape()
    this.shape_59.graphics
      .lf(
        ['#66FFFF', '#FFCC33', '#FF45D8'],
        [0.094, 0.651, 1],
        -745.8,
        0,
        745.9,
        0,
      )
      .s()
      .p(
        'EB0cApFMjo6hR/QgBAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAMDo6BR/QABAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAABABQAAAAgBABQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIgDABIgBAAg',
      )
    this.shape_59.setTransform(69.45, 95.45)

    this.shape_60 = new cjs.Shape()
    this.shape_60.graphics
      .lf(
        ['#66FFFF', '#FFCC33', '#FF45D8'],
        [0.094, 0.651, 1],
        -849.9,
        -36.6,
        641.8,
        -36.6,
      )
      .s()
      .p(
        'EBkLAjVIgigMIiKgwIivg9IjRhJMi/shDfIgDgCQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAMDHZBGKIA/AXIADACIAAAEIgCACIgCAAIgCAAg',
      )
    this.shape_60.setTransform(173.575, 132.1333)

    this.shape_61 = new cjs.Shape()
    this.shape_61.graphics
      .lf(
        ['#66FFFF', '#FFCC33', '#FF45D8'],
        [0.094, 0.651, 1],
        -954,
        -73.3,
        537.7,
        -73.3,
      )
      .s()
      .p(
        'EBT7AdlIgcgJIh0goIiRgyIivg9Migng4iIgCgCIAAgDIACgCIADAAMCnBA6wIA2ATIABABIABADIgCACIgBABIgCgBg',
      )
    this.shape_61.setTransform(277.6958, 168.775)

    this.shape_62 = new cjs.Shape()
    this.shape_62.graphics
      .lf(
        ['#66FFFF', '#FFCC33', '#FF45D8'],
        [0.094, 0.651, 1],
        -1058.2,
        -110,
        433.5,
        -110,
      )
      .s()
      .p(
        'EBDqAX2IgWgIIhcgfIh1goIiNgwMiBhgtmIgCgCIAAgCIABgBIADAAIDzBRMCC3AuDIArAQIACABIAAADIgBACIgBAAIgCAAg',
      )
    this.shape_62.setTransform(381.8125, 205.45)

    this.shape_63 = new cjs.Shape()
    this.shape_63.graphics
      .lf(
        ['#66FFFF', '#FFCC33', '#FF45D8'],
        [0.094, 0.651, 1],
        -1162.3,
        -146.6,
        329.4,
        -146.6,
      )
      .s()
      .p(
        'EAzKASAIhGgWIhZgdIhqgkMhicgiqIgBgBIAAgCIABgBIACAAIC3A6MBjdAjBIAhAMIABABIAAABIgBABIgCABIgQgGg',
      )
    this.shape_63.setTransform(485.95, 242.1125)

    this.shape_64 = new cjs.Shape()
    this.shape_64.graphics
      .lf(
        ['#66FFFF', '#FFCC33', '#FF45D8'],
        [0.094, 0.651, 1],
        -1266.4,
        -183.3,
        225.3,
        -183.3,
      )
      .s()
      .p(
        'EAi/AMTIgugOIg8gSIhIgYMhDXgXtIAAgBIAAgBIAAgBIABAAIB6AjMBEDAX9IAWAIIABABIAAABIgBABIgBAAIgKgDg',
      )
    this.shape_64.setTransform(590.0625, 278.7875)

    this.shape_65 = new cjs.Shape()
    this.shape_65.graphics
      .lf(
        ['#66FFFF', '#FFCC33', '#FF45D8'],
        [0.094, 0.651, 1],
        -1370.5,
        -219.9,
        121.2,
        -219.9,
      )
      .s()
      .p(
        'AS5GmIgFgBQgLgDgMgBIgfgIIgmgMMgkQgMxIgBAAIAAgBIABAAIAAAAIA9AMMAkpAM5IAMAFIAAABIAAAAg',
      )
    this.shape_65.setTransform(694.1875, 315.425)

    this.shape_66 = new cjs.Shape()
    this.shape_66.graphics
      .lf(
        ['#66FFFF', '#FFCC33', '#FF45D8'],
        [0.094, 0.651, 1],
        -1474.7,
        -256.5,
        17,
        -256.5,
      )
      .s()
      .p(
        'ACiBAIlKh0IAAgLIFOB1QAAAAABABQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAgBAAIgCABIgCAAg',
      )
    this.shape_66.setTransform(798.3766, 351.9641)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: []})
        .to({state: [{t: this.shape_28}]}, 50)
        .to({state: [{t: this.shape_29}]}, 1)
        .to({state: [{t: this.shape_30}]}, 1)
        .to({state: [{t: this.shape_31}]}, 1)
        .to({state: [{t: this.shape_32}]}, 1)
        .to({state: [{t: this.shape_33}]}, 1)
        .to({state: [{t: this.shape_34}]}, 1)
        .to({state: [{t: this.shape_35}]}, 1)
        .to({state: [{t: this.shape_36}]}, 1)
        .to({state: [{t: this.shape_37}]}, 1)
        .to({state: [{t: this.shape_38}]}, 1)
        .to({state: [{t: this.shape_39}]}, 1)
        .to({state: [{t: this.shape_40}]}, 1)
        .to({state: [{t: this.shape_41}]}, 1)
        .to({state: [{t: this.shape_42}]}, 1)
        .to({state: [{t: this.shape_43}]}, 1)
        .to({state: [{t: this.shape_44}]}, 1)
        .to({state: [{t: this.shape_45}]}, 1)
        .to({state: [{t: this.shape_46}]}, 1)
        .to({state: [{t: this.shape_47}]}, 1)
        .to({state: [{t: this.shape_48}]}, 1)
        .to({state: [{t: this.shape_49}]}, 1)
        .to({state: [{t: this.shape_50}]}, 1)
        .to({state: [{t: this.shape_51}]}, 1)
        .to({state: [{t: this.shape_52}]}, 1)
        .to({state: [{t: this.shape_53}]}, 1)
        .to({state: [{t: this.shape_54}]}, 1)
        .to({state: [{t: this.shape_55}]}, 1)
        .to({state: [{t: this.shape_56}]}, 1)
        .to({state: [{t: this.shape_57}]}, 1)
        .to({state: [{t: this.shape_58}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 59)
        .to({state: [{t: this.shape_60}]}, 1)
        .to({state: [{t: this.shape_61}]}, 1)
        .to({state: [{t: this.shape_62}]}, 1)
        .to({state: [{t: this.shape_63}]}, 1)
        .to({state: [{t: this.shape_64}]}, 1)
        .to({state: [{t: this.shape_65}]}, 1)
        .to({state: [{t: this.shape_66}]}, 1)
        .to({state: []}, 1)
        .wait(42),
    )

    // Calque_7
    this.shape_67 = new cjs.Shape()
    this.shape_67.graphics
      .lf(['#FFCC33', '#FF45D8'], [0.094, 1], -5, 103.7, 810.6, 103.7)
      .s()
      .p(
        'AgtgHQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAIBdAXIAAAKg',
      )
    this.shape_67.setTransform(-18.6967, 162.1283)

    this.shape_68 = new cjs.Shape()
    this.shape_68.graphics
      .lf(['#FFCC33', '#FF45D8'], [0.094, 1], -28.4, 97.7, 787.2, 97.7)
      .s()
      .p(
        'AEbBKIgTgBIn5iCQgKgCgKgEIgVgJIAAAAIAAAAIAZADQAMABANAEIHsB+IAXALIAAABg',
      )
    this.shape_68.setTransform(4.675, 168.1375)

    this.shape_69 = new cjs.Shape()
    this.shape_69.graphics
      .lf(['#FFCC33', '#FF45D8'], [0.094, 1], -51, 91.8, 764.6, 91.8)
      .s()
      .p(
        'AHYB+IuHjoQgSgEgSgGIgpgOIgBAAIAAgBIABAAIAvAJQAXAEAWAGINwDiIAtARIABAAIAAABIgBAAIAAAAg',
      )
    this.shape_69.setTransform(27.325, 173.975)

    this.shape_70 = new cjs.Shape()
    this.shape_70.graphics
      .lf(['#FFCC33', '#FF45D8'], [0.094, 1], -73, 86.2, 742.6, 86.2)
      .s()
      .p(
        'ALYC9Ig3gLI0IlLIgzgPIg+gSIAAgBIAAAAIAAgBIABAAIBFAPQAgAHAgAIIToFDIBDAWIAAABIAAAAIAAABg',
      )
    this.shape_70.setTransform(49.275, 179.6125)

    this.shape_71 = new cjs.Shape()
    this.shape_71.graphics
      .lf(['#FFCC33', '#FF45D8'], [0.094, 1], -94.2, 80.7, 721.4, 80.7)
      .s()
      .p(
        'AOsD0IhIgQI59mrQgigIgggKIhRgXIgBgBIAAgBIABAAIABgBIBZAVIBUAUIZTGgIBYAcIABAAIAAABIgBABIAAAAIgBAAg',
      )
    this.shape_71.setTransform(70.525, 185.0875)

    this.shape_72 = new cjs.Shape()
    this.shape_72.graphics
      .lf(['#FFCC33', '#FF45D8'], [0.094, 1], -114.8, 75.4, 700.8, 75.4)
      .s()
      .p(
        'AQhEVI/moIIhRgXIhjgcIgBAAIAAgBIAAgBIABAAIBuAaQAzALAzAOIezH7IBtAgIAAABIABABIgBABIgBAAg',
      )
    this.shape_72.setTransform(91.0875, 190.4)

    this.shape_73 = new cjs.Shape()
    this.shape_73.graphics
      .lf(['#FFCC33', '#FF45D8'], [0.094, 1], -134.6, 70.3, 681, 70.3)
      .s()
      .p(
        'AVAFcIhpgYMglDgJiIhfgaIh1ggIgBgBIAAgBIABgBIABAAICCAfIB3AeMAkHAJSICAAlIABABIAAABIgBABIAAAAIgBAAg',
      )
    this.shape_73.setTransform(110.9375, 195.5)

    this.shape_74 = new cjs.Shape()
    this.shape_74.graphics
      .lf(['#FFCC33', '#FF45D8'], [0.094, 1], -153.8, 65.4, 661.8, 65.4)
      .s()
      .p(
        'AX/GOMgsMgLVIhsgdIiGglIgCgBIAAgBIABgBIABgBICVAlQBEAQBEASMApPAKnICTApIABABIABACIgBABIgBAAIgBAAg',
      )
    this.shape_74.setTransform(130.1125, 200.4375)

    this.shape_75 = new cjs.Shape()
    this.shape_75.graphics
      .lf(['#FFCC33', '#FF45D8'], [0.094, 1], -172.3, 60.6, 643.3, 60.6)
      .s()
      .p(
        'A2nlvIh6ghIiXgoIgBgBIAAgCIABgBQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAABICnApICYAmMAuMAL5IClAuIABAAIAAACIgBABIgBABg',
      )
    this.shape_75.setTransform(148.5625, 205.1917)

    this.shape_76 = new cjs.Shape()
    this.shape_76.graphics
      .lf(['#FFCC33', '#FF45D8'], [0.094, 1], -190, 56, 625.6, 56)
      .s()
      .p(
        'AdqHrMg2ngOBIiGgjIimgtIgCgBIAAgCIABgBIACAAIC3AtQBVAVBUAWMAy7ANHIC4AyIABABIAAACIgBABIgBABIAAgBg',
      )
    this.shape_76.setTransform(166.35, 209.775)

    this.shape_77 = new cjs.Shape()
    this.shape_77.graphics
      .lf(['#FFCC33', '#FF45D8'], [0.094, 1], -207.1, 51.6, 608.5, 51.6)
      .s()
      .p(
        'EAgUAIXMg7ggPRIiSgnIi2gxIgBgBIgBgCIABgBIACgBIDJAzIC4AuMA3fAOSIDIA3IABABIABACIgCABIgBABIAAgBg',
      )
    this.shape_77.setTransform(183.4167, 214.1542)

    this.shape_78 = new cjs.Shape()
    this.shape_78.graphics
      .lf(['#FFCC33', '#FF45D8'], [0.094, 1], -223.5, 47.4, 592.1, 47.4)
      .s()
      .p(
        'EAi3AJCMhAMgQgIiegpIjFg0IgBgCIgBgCIABgBQABgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIDZA3IDGAyMA74APaIDYA7IABABIABACIgCACIgBAAIgBAAg',
      )
    this.shape_78.setTransform(199.8, 218.3792)

    this.shape_79 = new cjs.Shape()
    this.shape_79.graphics
      .lf(['#FFCC33', '#FF45D8'], [0.094, 1], -239.2, 43.4, 576.4, 43.4)
      .s()
      .p(
        'EAlUAJqMhEsgRqIiqgsIjSg4IgCgBIAAgCIABgCIACAAIDoA6IDVA2MBDrAReIACABIAAACIgBACIgCAAIAAAAg',
      )
    this.shape_79.setTransform(215.4792, 222.425)

    this.shape_80 = new cjs.Shape()
    this.shape_80.graphics
      .lf(['#FFCC33', '#FF45D8'], [0.094, 1], -254.2, 39.5, 561.4, 39.5)
      .s()
      .p(
        'EghWgIgIi0gvIjgg7IgCgCIAAgCIABgCQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAID3A/IDiA5MBH7ASjIACABIAAADIgCACIgCAAg',
      )
    this.shape_80.setTransform(230.4667, 226.275)

    this.shape_81 = new cjs.Shape()
    this.shape_81.graphics
      .lf(['#FFCC33', '#FF45D8'], [0.094, 1], -268.4, 35.9, 547.2, 35.9)
      .s()
      .p(
        'EAp4AK2MhNGgT0Ii+gzIjtg+IgBgBIgBgCQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIEFBDIDuA8MBL+ATmIABABIABACIgBADIgCAAIgBAAg',
      )
    this.shape_81.setTransform(244.75, 229.95)

    this.shape_82 = new cjs.Shape()
    this.shape_82.graphics
      .lf(['#FFCC33', '#FF45D8'], [0.094, 1], -282, 32.4, 533.6, 32.4)
      .s()
      .p(
        'EAsAALZMhRAgU1IjHg1Ij5hBQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAIgBgCQAAgBAAAAQAAAAABgBQAAAAAAAAQAAAAABgBIACAAIETBGID6BAMBP0AUlIACABIAAACIgCACIgCABIAAAAg',
      )
    this.shape_82.setTransform(258.3292, 233.45)

    this.shape_83 = new cjs.Shape()
    this.shape_83.graphics
      .lf(['#FFCC33', '#FF45D8'], [0.094, 1], -294.9, 29, 520.7, 29)
      .s()
      .p(
        'EAuAAL6MhUsgVyIjRg3IkEhDIgCgCIgBgDQAAAAAAAAQAAgBABAAQAAAAAAAAQAAgBABAAIADAAIEfBJIEFBDMBTdAVgIACACIABADIgCACIgCAAIgBAAg',
      )
    this.shape_83.setTransform(271.225, 236.775)

    this.shape_84 = new cjs.Shape()
    this.shape_84.graphics
      .lf(['#FFCC33', '#FF45D8'], [0.094, 1], -307.1, 25.9, 508.5, 25.9)
      .s()
      .p(
        'EAv6AMaMhYMgWsIjZg5IkQhHIgCgCIgBgCQAAgBAAAAQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAABAAIErBNIEQBFMBW6AWaIACABIABADIgCACIgCABIgBAAg',
      )
    this.shape_84.setTransform(283.425, 239.9133)

    this.shape_85 = new cjs.Shape()
    this.shape_85.graphics
      .lf(['#FFCC33', '#FF45D8'], [0.094, 1], -318.6, 22.9, 497, 22.9)
      .s()
      .p(
        'EgpygKrIjig7IkahJQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAAAQAAABABAAIE2BPIEbBIMBaKAXPIACACIABADIgCACIgDABg',
      )
    this.shape_85.setTransform(294.9133, 242.875)

    this.shape_86 = new cjs.Shape()
    this.shape_86.graphics
      .lf(['#FFCC33', '#FF45D8'], [0.094, 1], -329.4, 20.2, 486.2, 20.2)
      .s()
      .p(
        'EAzZANUMhemgYWIjpg9IkkhMQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQABgBAAAAQAAAAAAAAQAAgBABAAQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAIFBBTIEkBLMBdOAYBQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIABACIgCADIgCABIgBAAg',
      )
    this.shape_86.setTransform(305.7133, 245.65)

    this.shape_87 = new cjs.Shape()
    this.shape_87.graphics
      .lf(['#FFCC33', '#FF45D8'], [0.094, 1], -339.5, 17.5, 476.1, 17.5)
      .s()
      .p(
        'EA0+ANtMhhggZFIjwg/IkthOQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAABAAIADgBIFLBVIEtBOMBgFAYwIADABIAAAEIgCACIgCABIgBgBg',
      )
    this.shape_87.setTransform(315.8175, 248.2542)

    this.shape_88 = new cjs.Shape()
    this.shape_88.graphics
      .lf(['#FFCC33', '#FF45D8'], [0.094, 1], -348.9, 15.1, 466.7, 15.1)
      .s()
      .p(
        'EA2cAOGMhkMgZyIj4hBIk1hQIgCgCQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAIFUBYIE2BPMBivAZcIADACIAAADIgCADIgCAAIgBAAg',
      )
    this.shape_88.setTransform(325.23, 250.6675)

    this.shape_89 = new cjs.Shape()
    this.shape_89.graphics
      .lf(['#FFCC33', '#FF45D8'], [0.094, 1], -357.6, 12.9, 458, 12.9)
      .s()
      .p(
        'EA3zAOcMhmsgabIj+hCIk9hSIgCgCQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABgBQAAAAABABQAAAAABAAIFcBZIE+BSMBlMAaEQAAAAABAAQAAABAAAAQABAAAAAAQAAAAABABIAAADIgCADIgCABIgBgBg',
      )
    this.shape_89.setTransform(333.9383, 252.9133)

    this.shape_90 = new cjs.Shape()
    this.shape_90.graphics
      .lf(['#FFCC33', '#FF45D8'], [0.094, 1], -365.6, 10.8, 450, 10.8)
      .s()
      .p(
        'EA5DAOxMho/gbBIkDhEIlFhTIgCgDQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAIFkBcIFFBTMBndAaqQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAABIAAADIgCADIgCAAIgBAAg',
      )
    this.shape_90.setTransform(341.9425, 254.9883)

    this.shape_91 = new cjs.Shape()
    this.shape_91.graphics
      .lf(['#FFCC33', '#FF45D8'], [0.094, 1], -373, 8.9, 442.6, 8.9)
      .s()
      .p(
        'EA6MAPEMhrGgbkIkIhFIlLhVIgDgDQAAAAAAAAQAAgBgBAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAAAIFsBeIFLBVMBpiAbLQABAAAAAAQAAABABAAQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQABAAAAABQgBAAAAABIgCADIgCAAIgBAAg',
      )
    this.shape_91.setTransform(349.2633, 256.8675)

    this.shape_92 = new cjs.Shape()
    this.shape_92.graphics
      .lf(['#FFCC33', '#FF45D8'], [0.094, 1], -379.6, 7.2, 436, 7.2)
      .s()
      .p(
        'EA7OAPVMhs/gcEIkNhFIlRhXIgDgCQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAIFzBgIFQBWMBrbAbqIACACIABAEIgDADIgCAAIgBAAg',
      )
    this.shape_92.setTransform(355.8883, 258.575)

    this.shape_93 = new cjs.Shape()
    this.shape_93.graphics
      .lf(['#FFCC33', '#FF45D8'], [0.094, 1], -385.5, 5.7, 430.1, 5.7)
      .s()
      .p(
        'EA8JAPlMhusgcgIkRhHIlWhYIgDgCQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAQAAAAABABIF4BhIFWBYMBtFAcGQABAAAAAAQAAAAABAAQAAAAABABQAAAAAAABIABADIgDADIgCABIgBAAg',
      )
    this.shape_93.setTransform(361.8133, 260.0883)

    this.shape_94 = new cjs.Shape()
    this.shape_94.graphics
      .lf(['#FFCC33', '#FF45D8'], [0.094, 1], -390.7, 4.4, 424.9, 4.4)
      .s()
      .p(
        'EA8+APyMhwNgc4IkVhIIlahaQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAQAAAAABAAIF9BjIFbBZMBukAceIADACIAAAEIgCADIgDAAIAAAAg',
      )
    this.shape_94.setTransform(367.0383, 261.4383)

    this.shape_95 = new cjs.Shape()
    this.shape_95.graphics
      .lf(['#FFCC33', '#FF45D8'], [0.094, 1], -395.3, 3.2, 420.3, 3.2)
      .s()
      .p(
        'EA9rAP+MhxggdOIkYhJIlfhaQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAIGBBkIFfBaMBv2AczQAAAAABAAQAAABAAAAQABAAAAAAQAAABABAAIAAAEIgCADIgCABIgBAAg',
      )
    this.shape_95.setTransform(371.5633, 262.6133)

    this.shape_96 = new cjs.Shape()
    this.shape_96.graphics
      .lf(['#FFCC33', '#FF45D8'], [0.094, 1], -399.1, 2.2, 416.5, 2.2)
      .s()
      .p(
        'EA+RAQIMhymgdgIkbhKIlihbQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAABIGGBlIFiBbMBw7AdFIADABIABAEIgDADIgCABIgBAAg',
      )
    this.shape_96.setTransform(375.4133, 263.5883)

    this.shape_97 = new cjs.Shape()
    this.shape_97.graphics
      .lf(['#FFCC33', '#FF45D8'], [0.094, 1], -402.2, 1.4, 413.4, 1.4)
      .s()
      .p(
        'EA+wAQQMhzfgdvIkdhKIllhcQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAABIGJBlIFlBcMBx0AdUQAAAAAAAAQABAAAAAAQAAAAABABQAAAAABABIAAAEIgCACIgDABIgBAAg',
      )
    this.shape_97.setTransform(378.5383, 264.3883)

    this.shape_98 = new cjs.Shape()
    this.shape_98.graphics
      .lf(['#FFCC33', '#FF45D8'], [0.094, 1], -404.7, 0.8, 410.9, 0.8)
      .s()
      .p(
        'EA/JAQWMh0Ngd7IkfhKIlnhcQAAgBgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAIGLBmIFnBdMBygAdfQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAABIABAEIgDADIgCAAIgBAAg',
      )
    this.shape_98.setTransform(380.9883, 265.0383)

    this.shape_99 = new cjs.Shape()
    this.shape_99.graphics
      .lf(['#FFCC33', '#FF45D8'], [0.094, 1], -406.4, 0.3, 409.2, 0.3)
      .s()
      .p(
        'EA/aAQbMh0tgeDIkghLIlohdQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAABIGNBmIFpBdMBy/AdnQABAAAAAAQAAAAABABQAAAAABAAQAAABAAAAIABAEIgDADIgCABIgBAAg',
      )
    this.shape_99.setTransform(382.7133, 265.4883)

    this.shape_100 = new cjs.Shape()
    this.shape_100.graphics
      .lf(['#FFCC33', '#FF45D8'], [0.094, 1], -407.5, 0.1, 408.1, 0.1)
      .s()
      .p(
        'EA/kAQdMh0/geHIkhhLIlqhdQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAIGNBnIFqBdMBzTAdsQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABABIAAAEIgCADIgDAAIgBAAg',
      )
    this.shape_100.setTransform(383.7633, 265.7383)

    this.shape_101 = new cjs.Shape()
    this.shape_101.graphics
      .lf(['#FFCC33', '#FF45D8'], [0.094, 1], -407.8, 0, 407.8, 0)
      .s()
      .p(
        'EA/oAQeMh/RggxQgBgBAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAMB/RAgyQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABIgCAAIgBAAg',
      )
    this.shape_101.setTransform(384.1, 265.825)

    this.shape_102 = new cjs.Shape()
    this.shape_102.graphics
      .lf(['#FFCC33', '#FF45D8'], [0.094, 1], -465.2, -14.8, 350.4, -14.8)
      .s()
      .p(
        'EAzUANTIkLhFIjXg3MhiegZYQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIgBgDQAAAAAAgBQABAAAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAMBpNAbHIChApIBoAbIACACIABADIgDADIgDAAIjWg3g',
      )
    this.shape_102.setTransform(441.5167, 280.605)

    this.shape_103 = new cjs.Shape()
    this.shape_103.graphics
      .lf(['#FFCC33', '#FF45D8'], [0.094, 1], -522.6, -29.5, 293, -29.5)
      .s()
      .p(
        'EAttAL2IiyguIjfg6Ii0gvMhSWgVNIgCgCIAAgDQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIADAAIG+B2MBRAAU3ICGAiIBXAWIACABIAAADIgBACIgCAAIgBAAg',
      )
    this.shape_103.setTransform(498.925, 295.375)

    this.shape_104 = new cjs.Shape()
    this.shape_104.graphics
      .lf(['#FFCC33', '#FF45D8'], [0.094, 1], -580, -44.3, 235.6, -44.3)
      .s()
      .p(
        'EAihAI9IiygvIiQgmMhCPgREIgCgBIAAgCIABgCIACAAIFlBgMBBJAQyIBtAbIBFARIACABIAAADIgBABIgCABIiPgmg',
      )
    this.shape_104.setTransform(556.3167, 310.1417)

    this.shape_105 = new cjs.Shape()
    this.shape_105.graphics
      .lf(['#FFCC33', '#FF45D8'], [0.094, 1], -637.4, -59.1, 178.2, -59.1)
      .s()
      .p(
        'AbyHOIhqgcIhTgXIA4AOIBSAVIA0AMIACABIAAACIgBABIgBABIgBgBgAVyFoIAjAJIBtAcIAYAHgA7ynJIgCgBIAAgCIABgBIACAAIDSA6g',
      )
    this.shape_105.setTransform(613.725, 324.925)

    this.shape_106 = new cjs.Shape()
    this.shape_106.graphics
      .lf(['#FFCC33', '#FF45D8'], [0.094, 1], -694.8, -73.8, 120.8, -73.8)
      .s()
      .p(
        'AS1E7Ig1gPIASAEIAkAIIABABIAAABIgBABIgBAAgARaEiMghbgImIhughMAg7AIfIBJATIBaAaIARAFIgmgKgAy1k3IgBAAIAAgBIABgBIABAAIBFAUg',
      )
    this.shape_106.setTransform(671.1125, 339.6875)

    this.shape_107 = new cjs.Shape()
    this.shape_107.graphics
      .lf(['#FFCC33', '#FF45D8'], [0.094, 1], -752.2, -88.6, 63.4, -88.6)
      .s()
      .p(
        'AJ4CmIgLgDIALACIAAAAIAAABIAAAAIAAABIAAgBgAJmCiIgegHIxlkhIhKgaIRpEiQATAEATAHIAtAPIAYAHIgHgBgAp3ikIAAgBIAAAAIAAgBIAAAAIAQAGg',
      )
    this.shape_107.setTransform(728.525, 354.4625)

    this.shape_108 = new cjs.Shape()
    this.shape_108.graphics
      .lf(['#FFCC33', '#FF45D8'], [0.094, 1], -809.6, -103.4, 6, -103.4)
      .s()
      .p(
        'AA1ATIhvgbIAAgLIBxAdQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABAAAAIgDABIgBgBg',
      )
    this.shape_108.setTransform(785.9967, 369.2842)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: []})
        .to({state: [{t: this.shape_67}]}, 20)
        .to({state: [{t: this.shape_68}]}, 1)
        .to({state: [{t: this.shape_69}]}, 1)
        .to({state: [{t: this.shape_70}]}, 1)
        .to({state: [{t: this.shape_71}]}, 1)
        .to({state: [{t: this.shape_72}]}, 1)
        .to({state: [{t: this.shape_73}]}, 1)
        .to({state: [{t: this.shape_74}]}, 1)
        .to({state: [{t: this.shape_75}]}, 1)
        .to({state: [{t: this.shape_76}]}, 1)
        .to({state: [{t: this.shape_77}]}, 1)
        .to({state: [{t: this.shape_78}]}, 1)
        .to({state: [{t: this.shape_79}]}, 1)
        .to({state: [{t: this.shape_80}]}, 1)
        .to({state: [{t: this.shape_81}]}, 1)
        .to({state: [{t: this.shape_82}]}, 1)
        .to({state: [{t: this.shape_83}]}, 1)
        .to({state: [{t: this.shape_84}]}, 1)
        .to({state: [{t: this.shape_85}]}, 1)
        .to({state: [{t: this.shape_86}]}, 1)
        .to({state: [{t: this.shape_87}]}, 1)
        .to({state: [{t: this.shape_88}]}, 1)
        .to({state: [{t: this.shape_89}]}, 1)
        .to({state: [{t: this.shape_90}]}, 1)
        .to({state: [{t: this.shape_91}]}, 1)
        .to({state: [{t: this.shape_92}]}, 1)
        .to({state: [{t: this.shape_93}]}, 1)
        .to({state: [{t: this.shape_94}]}, 1)
        .to({state: [{t: this.shape_95}]}, 1)
        .to({state: [{t: this.shape_96}]}, 1)
        .to({state: [{t: this.shape_97}]}, 1)
        .to({state: [{t: this.shape_98}]}, 1)
        .to({state: [{t: this.shape_99}]}, 1)
        .to({state: [{t: this.shape_100}]}, 1)
        .to({state: [{t: this.shape_101}]}, 1)
        .to({state: [{t: this.shape_101}]}, 45)
        .to({state: [{t: this.shape_102}]}, 1)
        .to({state: [{t: this.shape_103}]}, 1)
        .to({state: [{t: this.shape_104}]}, 1)
        .to({state: [{t: this.shape_105}]}, 1)
        .to({state: [{t: this.shape_106}]}, 1)
        .to({state: [{t: this.shape_107}]}, 1)
        .to({state: [{t: this.shape_108}]}, 1)
        .to({state: []}, 1)
        .wait(83),
    )

    // ligne
    this.shape_109 = new cjs.Shape()
    this.shape_109.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -1.8, 65.5, 137.9, 65.5)
      .s()
      .p('AgRgPIALAAIAAgDIAYAXIAAAOg')
    this.shape_109.setTransform(-37.125, -161.0125)

    this.shape_110 = new cjs.Shape()
    this.shape_110.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -5.8, 61.8, 133.9, 61.8)
      .s()
      .p('AA6A2IgJgEIhqhmIABAAIAaAPIAEABIBJBHIALASIAAABg')
    this.shape_110.setTransform(-33.125, -157.3)

    this.shape_111 = new cjs.Shape()
    this.shape_111.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -9.8, 58, 129.9, 58)
      .s()
      .p('ABhBcIgRgMIixirIACAAIAAgBIAwAkIB7B3IAWAdIAAAAIAAABg')
    this.shape_111.setTransform(-29.125, -153.45)

    this.shape_112 = new cjs.Shape()
    this.shape_112.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -13.8, 54.1, 125.9, 54.1)
      .s()
      .p('ACJCDIgagUIj4jxIACAAIAAAAIBEA2ICrCnIAiAnIAAABIAAAAIgBAAg')
    this.shape_112.setTransform(-25.125, -149.575)

    this.shape_113 = new cjs.Shape()
    this.shape_113.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -17.8, 50.2, 121.9, 50.2)
      .s()
      .p('ACwCpIgigdIk/k0IADAAIAAgBIBIA+IDrDiIAtAxIAAAAIAAABIgBABIgBgBg')
    this.shape_113.setTransform(-21.125, -145.7)

    this.shape_114 = new cjs.Shape()
    this.shape_114.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -21.8, 46.4, 117.9, 46.4)
      .s()
      .p('ADZDRIgBAAIgrgnImHl5IAEAAIAAgBIBXBOIEgEVIA5A7IABABIgBACIgBAAg')
    this.shape_114.setTransform(-17.1, -141.85)

    this.shape_115 = new cjs.Shape()
    this.shape_115.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -25.8, 42.5, 113.9, 42.5)
      .s()
      .p('AD/D3Ig0gvInNm9IAFAAIAAgBIBmBcIFVFJIBEBFIABACIgBABIgCABIgBgBg')
    this.shape_115.setTransform(-13.1, -138)

    this.shape_116 = new cjs.Shape()
    this.shape_116.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -29.8, 38.6, 109.9, 38.6)
      .s()
      .p('AEnEeIpRo6IAGAAIAAgBIB2BsIHYHMIABABIgBACIgCAAIgBAAg')
    this.shape_116.setTransform(-9.1, -134.125)

    this.shape_117 = new cjs.Shape()
    this.shape_117.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -33.8, 34.8, 105.9, 34.8)
      .s()
      .p('AFPFEIqhqHIAGAAIAAgBICiCWIH8HvIAAABIAAACIgCABIgBgBg')
    this.shape_117.setTransform(-5.1, -130.25)

    this.shape_118 = new cjs.Shape()
    this.shape_118.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -37.8, 30.9, 101.9, 30.9)
      .s()
      .p('AF2FrIrwrUIAHAAIAAgCIC1CpII3IpIABACIgBACIgBABIgCgBg')
    this.shape_118.setTransform(-1.1, -126.4)

    this.shape_119 = new cjs.Shape()
    this.shape_119.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -41.8, 27, 97.9, 27)
      .s()
      .p('AGeGSItAsiIAHAAIAAgCICkCaIKYKGIABACIgBACIgBABIgCgBg')
    this.shape_119.setTransform(2.9, -122.525)

    this.shape_120 = new cjs.Shape()
    this.shape_120.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -45.8, 23.2, 93.9, 23.2)
      .s()
      .p('AHFG4IuPtvIAIAAIAAgCICzCqILYLDIABACIgBACIgBABIgDgBg')
    this.shape_120.setTransform(6.9, -118.65)

    this.shape_121 = new cjs.Shape()
    this.shape_121.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -49.8, 19.3, 89.9, 19.3)
      .s()
      .p(
        'AHsHfIveu8IAJAAIAAgCIPbO6IABACIgBACQgBAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAIgDgBg',
      )
    this.shape_121.setTransform(10.9, -114.8)

    this.shape_122 = new cjs.Shape()
    this.shape_122.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -53.9, 15.5, 85.9, 15.5)
      .s()
      .p(
        'AIUIGIwuwKIAJAAIAAgCIQqQHIACACQAAABAAAAQAAABgBAAQAAAAAAAAQAAABgBAAIgCABIgDgBg',
      )
    this.shape_122.setTransform(14.925, -110.95)

    this.shape_123 = new cjs.Shape()
    this.shape_123.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -57.9, 11.6, 81.9, 11.6)
      .s()
      .p('AI8ItIx+xYIAKAAIAAgCIR5RUIACADIgCADIgDABIgCgBg')
    this.shape_123.setTransform(18.925, -107.075)

    this.shape_124 = new cjs.Shape()
    this.shape_124.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -61.9, 7.7, 77.9, 7.7)
      .s()
      .p(
        'AJjJTIzNykIAKAAIAAgCITJSgIACADQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAIgDABIgDgBg',
      )
    this.shape_124.setTransform(22.925, -103.2)

    this.shape_125 = new cjs.Shape()
    this.shape_125.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -65.9, 3.9, 73.9, 3.9)
      .s()
      .p(
        'AKLJ6I0dzyIALAAIAAgDIUYTuQABABAAAAQAAABAAAAQABABAAAAQAAAAAAABIgCADQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAIgDgBg',
      )
    this.shape_125.setTransform(26.925, -99.35)

    this.shape_126 = new cjs.Shape()
    this.shape_126.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -69.8, 0, 69.9, 0)
      .s()
      .p(
        'AKyKhI1s1AIAMAAIAAgCIVnU7QABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg',
      )
    this.shape_126.setTransform(30.925, -95.475)

    this.shape_127 = new cjs.Shape()
    this.shape_127.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -66.1, 3.6, 73.7, 3.6)
      .s()
      .p(
        'AKNJ8I0hz2IALAAIAAgDIUcTzQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAIgDgCg',
      )
    this.shape_127.setTransform(27.15, -99.125)

    this.shape_128 = new cjs.Shape()
    this.shape_128.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -62.3, 7.3, 77.4, 7.3)
      .s()
      .p(
        'AJnJYIzVyuIAKAAIAAgCITSSpQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABIgBADIgDABIgEgBg',
      )
    this.shape_128.setTransform(23.375, -102.775)

    this.shape_129 = new cjs.Shape()
    this.shape_129.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -58.5, 10.9, 81.2, 10.9)
      .s()
      .p('AJCIzIyKxkIAJAAIAAgCISHRgIABADIgBADIgDABIgDgBg')
    this.shape_129.setTransform(19.575, -106.425)

    this.shape_130 = new cjs.Shape()
    this.shape_130.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -54.7, 14.6, 85, 14.6)
      .s()
      .p('AIdIPIxAwcIAJAAIAAgCIQ9QYIABADIgBADIgEABIgCgBg')
    this.shape_130.setTransform(15.8, -110.075)

    this.shape_131 = new cjs.Shape()
    this.shape_131.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -51, 18.2, 88.8, 18.2)
      .s()
      .p(
        'AH4HqIv1vSIAJAAIAAgCIPxPPIABACIgBADQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAg',
      )
    this.shape_131.setTransform(12.025, -113.725)

    this.shape_132 = new cjs.Shape()
    this.shape_132.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -47.2, 21.9, 92.6, 21.9)
      .s()
      .p('AHSHFIupuJIAIAAIAAgBIOmOGIABACIgBACIgDABIgCgBg')
    this.shape_132.setTransform(8.25, -117.375)

    this.shape_133 = new cjs.Shape()
    this.shape_133.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -43.4, 25.5, 96.4, 25.5)
      .s()
      .p('AGtGhItetAIAHAAIAAgCICqCgIKxKeIABACIgBACIgCABIgCgBg')
    this.shape_133.setTransform(4.45, -121.025)

    this.shape_134 = new cjs.Shape()
    this.shape_134.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -39.6, 29.2, 100.1, 29.2)
      .s()
      .p('AGIF8IsTr3IAGAAIAAgBICcCRIJ1JjIAAACIAAACIgCABIgCgBg')
    this.shape_134.setTransform(0.675, -124.675)

    this.shape_135 = new cjs.Shape()
    this.shape_135.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -35.8, 32.8, 103.9, 32.8)
      .s()
      .p('AFiFXIrIqtIAHAAIAAgBICrCeIIaINIABACIgBABIgCABIgCgBg')
    this.shape_135.setTransform(-3.1, -128.3)

    this.shape_136 = new cjs.Shape()
    this.shape_136.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -32.1, 36.5, 107.7, 36.5)
      .s()
      .p('AE9EzIp9plIAGAAIAAgBIB+B1IGnGYIBVBWIABACIgBABIgCABIgBgBg')
    this.shape_136.setTransform(-6.875, -131.975)

    this.shape_137 = new cjs.Shape()
    this.shape_137.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -28.3, 40.1, 111.5, 40.1)
      .s()
      .p('AEXEPIoxocIAFAAIAAgBIBwBmIF1FnIBKBNIABABIgBACIgBAAIgCAAg')
    this.shape_137.setTransform(-10.65, -135.625)

    this.shape_138 = new cjs.Shape()
    this.shape_138.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -24.5, 43.8, 115.3, 43.8)
      .s()
      .p('ADzDqIgygsIm1mnIAEAAIAAgBIBiBYIFDE3IA/BDIABABIgBABIgBABIAAgBg')
    this.shape_138.setTransform(-14.45, -139.275)

    this.shape_139 = new cjs.Shape()
    this.shape_139.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -20.7, 47.4, 119, 47.4)
      .s()
      .p('ADODGIgBAAIgpgkIlylmIADAAIAAgBIBUBJIEREHIA1A5IAAABIAAABIgBAAg')
    this.shape_139.setTransform(-18.225, -142.925)

    this.shape_140 = new cjs.Shape()
    this.shape_140.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -16.9, 51.1, 122.8, 51.1)
      .s()
      .p('ACoChIgigbIkvkmIAEAAIAAAAIBSBFIDRDLIArAvIABABIgBABIAAAAIgBAAg')
    this.shape_140.setTransform(-22, -146.575)

    this.shape_141 = new cjs.Shape()
    this.shape_141.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -13.2, 54.7, 126.6, 54.7)
      .s()
      .p('ACCB8IgYgSIjtjlIADAAIAAgBIBAA0ICkCeIAfAlIABABIgBAAIAAABIgBgBg')
    this.shape_141.setTransform(-25.775, -150.225)

    this.shape_142 = new cjs.Shape()
    this.shape_142.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -9.4, 58.4, 130.4, 58.4)
      .s()
      .p('ABdBYIgQgLIiqikIACAAIAAAAIAoAdIAHAEIB1ByIAVAbIAAABIgBAAg')
    this.shape_142.setTransform(-29.575, -153.875)

    this.shape_143 = new cjs.Shape()
    this.shape_143.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -5.6, 62, 134.2, 62)
      .s()
      .p('AA3AzIgIgCIhmhjIABAAIAaAOIADABIBGBFIALARIAAAAg')
    this.shape_143.setTransform(-33.35, -157.525)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: []})
        .to({state: [{t: this.shape_109}]}, 40)
        .to({state: [{t: this.shape_110}]}, 1)
        .to({state: [{t: this.shape_111}]}, 1)
        .to({state: [{t: this.shape_112}]}, 1)
        .to({state: [{t: this.shape_113}]}, 1)
        .to({state: [{t: this.shape_114}]}, 1)
        .to({state: [{t: this.shape_115}]}, 1)
        .to({state: [{t: this.shape_116}]}, 1)
        .to({state: [{t: this.shape_117}]}, 1)
        .to({state: [{t: this.shape_118}]}, 1)
        .to({state: [{t: this.shape_119}]}, 1)
        .to({state: [{t: this.shape_120}]}, 1)
        .to({state: [{t: this.shape_121}]}, 1)
        .to({state: [{t: this.shape_122}]}, 1)
        .to({state: [{t: this.shape_123}]}, 1)
        .to({state: [{t: this.shape_124}]}, 1)
        .to({state: [{t: this.shape_125}]}, 1)
        .to({state: [{t: this.shape_126}]}, 1)
        .to({state: [{t: this.shape_126}]}, 60)
        .to({state: [{t: this.shape_127}]}, 1)
        .to({state: [{t: this.shape_128}]}, 1)
        .to({state: [{t: this.shape_129}]}, 1)
        .to({state: [{t: this.shape_130}]}, 1)
        .to({state: [{t: this.shape_131}]}, 1)
        .to({state: [{t: this.shape_132}]}, 1)
        .to({state: [{t: this.shape_133}]}, 1)
        .to({state: [{t: this.shape_134}]}, 1)
        .to({state: [{t: this.shape_135}]}, 1)
        .to({state: [{t: this.shape_136}]}, 1)
        .to({state: [{t: this.shape_137}]}, 1)
        .to({state: [{t: this.shape_138}]}, 1)
        .to({state: [{t: this.shape_139}]}, 1)
        .to({state: [{t: this.shape_140}]}, 1)
        .to({state: [{t: this.shape_141}]}, 1)
        .to({state: [{t: this.shape_142}]}, 1)
        .to({state: [{t: this.shape_143}]}, 1)
        .to({state: [{t: this.shape_109}]}, 1)
        .to({state: []}, 1)
        .wait(54),
    )

    // ligne
    this.shape_144 = new cjs.Shape()
    this.shape_144.graphics
      .lf(['#FE9544', '#F8692A'], [0, 1], -104, -18.8, 1.2, -18.8)
      .s()
      .p('AAFAIIgQgGIAAgKIAUAIIACABIABAEIgDADIgDABIgBgBg')
    this.shape_144.setTransform(66.2833, -125.6417)

    this.shape_145 = new cjs.Shape()
    this.shape_145.graphics
      .lf(['#FE9544', '#F8692A'], [0, 1], -101.3, -17.8, 3.9, -17.8)
      .s()
      .p('AAhASIgRgFIg2geIAUAIIA4AVIABAEIgDACIgCAAIgBAAg')
    this.shape_145.setTransform(63.575, -126.6625)

    this.shape_146 = new cjs.Shape()
    this.shape_146.graphics
      .lf(['#FE9544', '#F8692A'], [0, 1], -98.6, -16.8, 6.7, -16.8)
      .s()
      .p('AA8AcIgPgGIhugxIATAHIBvAqIABAEIgCABIgDABIgBAAg')
    this.shape_146.setTransform(60.8333, -127.6417)

    this.shape_147 = new cjs.Shape()
    this.shape_147.graphics
      .lf(['#FE9544', '#F8692A'], [0, 1], -95.9, -15.8, 9.4, -15.8)
      .s()
      .p('ABYAmIgPgGIiJg5ICcA6IABADIgCACIgCAAIgBAAgAhKgdIgSgIIAcAMIgKgEg')
    this.shape_147.setTransform(58.125, -128.6625)

    this.shape_148 = new cjs.Shape()
    this.shape_148.graphics
      .lf(['#FE9544', '#F8692A'], [0, 1], -93.2, -14.8, 12.1, -14.8)
      .s()
      .p('ABzAvIgOgFIidg/ICuBAIACADIgCACIgBAAIgCgBgAhngmIgQgJIA/AaIgvgRg')
    this.shape_148.setTransform(55.425, -129.6667)

    this.shape_149 = new cjs.Shape()
    this.shape_149.graphics
      .lf(['#FE9544', '#F8692A'], [0, 1], -90.4, -13.8, 14.8, -13.8)
      .s()
      .p('ACPA4IgNgEIi5hJIDJBLIABACIgBABIgDgBgAiCgxIgQgIIBbAkIhLgcg')
    this.shape_149.setTransform(52.675, -130.65)

    this.shape_150 = new cjs.Shape()
    this.shape_150.graphics
      .lf(['#FE9544', '#F8692A'], [0, 1], -87.7, -12.8, 17.5, -12.8)
      .s()
      .p('ACqBDIgMgFIiwhEIC+BGIACADIgBAAIgBAAIgCAAgAifg6IgOgIICbA8IiNg0g')
    this.shape_150.setTransform(49.975, -131.6667)

    this.shape_151 = new cjs.Shape()
    this.shape_151.graphics
      .lf(['#FE9544', '#F8692A'], [0, 1], -85, -11.8, 20.2, -11.8)
      .s()
      .p('ADFBMIgLgFIhrgpIB4AsIACACIgBABIgDgBgAi7hEIgNgIIC7BIIiuhAg')
    this.shape_151.setTransform(47.275, -132.65)

    this.shape_152 = new cjs.Shape()
    this.shape_152.graphics
      .lf(['#FE9544', '#F8692A'], [0, 1], -82.3, -10.8, 23, -10.8)
      .s()
      .p('ADhBVIgLgEIgxgTIA9AXIACABIAAABIgDgCgAjXhNIgMgJICyBEIimg7g')
    this.shape_152.setTransform(44.5375, -133.65)

    this.shape_153 = new cjs.Shape()
    this.shape_153.graphics
      .lf(['#FE9544', '#F8692A'], [0, 1], -79.6, -9.8, 25.7, -9.8)
      .s()
      .p('AD9BfIACABIAAABIgCgCgAjzhXIgLgJIHwC7IALAEInwi2g')
    this.shape_153.setTransform(41.8375, -134.65)

    this.shape_154 = new cjs.Shape()
    this.shape_154.graphics
      .lf(['#FE9544', '#F8692A'], [0, 1], -76.9, -8.8, 28.4, -8.8)
      .s()
      .p('AEYBpIonjKIgKgJIIoDOIAJAFIACABIAAABIgCgCg')
    this.shape_154.setTransform(39.1375, -135.625)

    this.shape_155 = new cjs.Shape()
    this.shape_155.graphics
      .lf(['#FE9544', '#F8692A'], [0, 1], -74.2, -7.8, 31.1, -7.8)
      .s()
      .p('AEyBzIpdjdIgJgKIJfDiIAIAEIACACIAAABIgDgCg')
    this.shape_155.setTransform(36.4375, -136.625)

    this.shape_156 = new cjs.Shape()
    this.shape_156.graphics
      .lf(['#FE9544', '#F8692A'], [0, 1], -71.5, -6.8, 33.8, -6.8)
      .s()
      .p('AFNB+IqVjyIgHgKIKWD2IAIAEIABACIgBABIgCgBg')
    this.shape_156.setTransform(33.725, -137.625)

    this.shape_157 = new cjs.Shape()
    this.shape_157.graphics
      .lf(['#FE9544', '#F8692A'], [0, 1], -68.8, -5.9, 36.5, -5.9)
      .s()
      .p('AFoCIIrMkGIgGgKILNEJIAHAEIABADIgBAAIgBABIgBgBg')
    this.shape_157.setTransform(31.025, -138.5917)

    this.shape_158 = new cjs.Shape()
    this.shape_158.graphics
      .lf(['#FE9544', '#F8692A'], [0, 1], -66.1, -4.9, 39.2, -4.9)
      .s()
      .p('AGCCSIsCkaIgFgKIMEEdQADABADADIABACIgBACIgDgBg')
    this.shape_158.setTransform(28.325, -139.575)

    this.shape_159 = new cjs.Shape()
    this.shape_159.graphics
      .lf(['#FE9544', '#F8692A'], [0, 1], -63.4, -3.9, 41.9, -3.9)
      .s()
      .p('AGdCcIs5kuIgFgKIM8EwIAFAEIACADIgCABIgBABIgCgBg')
    this.shape_159.setTransform(25.625, -140.5417)

    this.shape_160 = new cjs.Shape()
    this.shape_160.graphics
      .lf(['#FE9544', '#F8692A'], [0, 1], -60.7, -2.9, 44.6, -2.9)
      .s()
      .p('AG4CmItxlCIgDgKINzFEIAFADIABAEIgCABIgCABIgBgBg')
    this.shape_160.setTransform(22.925, -141.5375)

    this.shape_161 = new cjs.Shape()
    this.shape_161.graphics
      .lf(['#FE9544', '#F8692A'], [0, 1], -58, -1.9, 47.3, -1.9)
      .s()
      .p('AHSCxIunlWIgCgLIOqFYIAEADIABAEIgCABIgDABIgBAAg')
    this.shape_161.setTransform(20.2333, -142.5167)

    this.shape_162 = new cjs.Shape()
    this.shape_162.graphics
      .lf(['#FE9544', '#F8692A'], [0, 1], -55.3, -1, 50, -1)
      .s()
      .p('AHtC6IvelqIgBgKIPhFrIADADIABAEIgDACIgBABIgCgBg')
    this.shape_162.setTransform(17.525, -143.4875)

    this.shape_163 = new cjs.Shape()
    this.shape_163.graphics
      .lf(['#FE9544', '#F8692A'], [0, 1], -52.6, 0, 52.7, 0)
      .s()
      .p('AIIDFIwVl+IAAgLIQYF/IADADIAAAEIgDACIgCABIgBAAg')
    this.shape_163.setTransform(14.8333, -144.4667)

    this.shape_164 = new cjs.Shape()
    this.shape_164.graphics
      .lf(['#FE9544', '#F8692A'], [0, 1], -56.3, -1.3, 49, -1.3)
      .s()
      .p('AHkC3IvLljIgBgKIPNFkIADADIABADIgDADIgBAAIgBAAg')
    this.shape_164.setTransform(18.5, -143.1375)

    this.shape_165 = new cjs.Shape()
    this.shape_165.graphics
      .lf(['#FE9544', '#F8692A'], [0, 1], -59.9, -2.6, 45.3, -2.6)
      .s()
      .p('AG/CpIt/lHIgEgKIODFJIAFADIABAEIgCABIgCAAIgCAAg')
    this.shape_165.setTransform(22.15, -141.8125)

    this.shape_166 = new cjs.Shape()
    this.shape_166.graphics
      .lf(['#FE9544', '#F8692A'], [0, 1], -63.6, -4, 41.7, -4)
      .s()
      .p('AGbCbIs1ksIgFgKIM4EvIAFADIACADIgCACIgBAAIgCgBg')
    this.shape_166.setTransform(25.825, -140.4917)

    this.shape_167 = new cjs.Shape()
    this.shape_167.graphics
      .lf(['#FE9544', '#F8692A'], [0, 1], -67.2, -5.3, 38, -5.3)
      .s()
      .p('AF3CNIrrkRIgGgJILtEUIAHAEIABACIgBABIgDgBg')
    this.shape_167.setTransform(29.475, -139.15)

    this.shape_168 = new cjs.Shape()
    this.shape_168.graphics
      .lf(['#FE9544', '#F8692A'], [0, 1], -70.9, -6.6, 34.3, -6.6)
      .s()
      .p('AFSCAIqfj2IgIgKIKiD6IAIAEIABACIgBABIgDgBg')
    this.shape_168.setTransform(33.15, -137.825)

    this.shape_169 = new cjs.Shape()
    this.shape_169.graphics
      .lf(['#FE9544', '#F8692A'], [0, 1], -74.6, -8, 30.7, -8)
      .s()
      .p('AEuByIpVjbIgJgJIJWDfIAJAEIACACIAAAAIgDgBg')
    this.shape_169.setTransform(36.8125, -136.475)

    this.shape_170 = new cjs.Shape()
    this.shape_170.graphics
      .lf(['#FE9544', '#F8692A'], [0, 1], -78.1, -9.2, 27.1, -9.2)
      .s()
      .p('AkAhbIgKgJIIMDFIAJAEIoLjAg')
    this.shape_170.setTransform(40.375, -135.225)

    this.shape_171 = new cjs.Shape()
    this.shape_171.graphics
      .lf(['#FE9544', '#F8692A'], [0, 1], -81.9, -10.7, 23.3, -10.7)
      .s()
      .p('ADlBXIgLgFIgggMIAsAQIABACIAAABIgCgCgAjbhPIgMgJIDHBNIi7hEg')
    this.shape_171.setTransform(44.1625, -133.8)

    this.shape_172 = new cjs.Shape()
    this.shape_172.graphics
      .lf(['#FE9544', '#F8692A'], [0, 1], -85.6, -12, 19.6, -12)
      .s()
      .p('AC/BKIgLgFIhqgpIB4AsIABACIgBABIgDgBgAi1hCIgNgIICzBFIimg9g')
    this.shape_172.setTransform(47.85, -132.45)

    this.shape_173 = new cjs.Shape()
    this.shape_173.graphics
      .lf(['#FE9544', '#F8692A'], [0, 1], -89.3, -13.4, 16, -13.4)
      .s()
      .p('ACaA9IgMgFIishDIC7BFIABACIgBACIgDgBgAiPg0IgOgJIB/AyIhxgpg')
    this.shape_173.setTransform(51.525, -131.075)

    this.shape_174 = new cjs.Shape()
    this.shape_174.graphics
      .lf(['#FE9544', '#F8692A'], [0, 1], -93, -14.7, 12.3, -14.7)
      .s()
      .p('AB1AwIgOgFIinhEIC4BFIACADIgCABIgBAAIgCAAgAhpgnIgQgIIA5AWIgpgOg')
    this.shape_174.setTransform(55.225, -129.7167)

    this.shape_175 = new cjs.Shape()
    this.shape_175.graphics
      .lf(['#FE9544', '#F8692A'], [0, 1], -96.7, -16.1, 8.6, -16.1)
      .s()
      .p('ABQAjIgPgGIh8g0ICPA1IABADIgCACIgCAAIgBAAgAhDgaIgRgIIAZALIgIgDg')
    this.shape_175.setTransform(58.9, -128.3875)

    this.shape_176 = new cjs.Shape()
    this.shape_176.graphics
      .lf(['#FE9544', '#F8692A'], [0, 1], -100.4, -17.4, 4.9, -17.4)
      .s()
      .p('AArAWIgRgGIhJglIATAIQAmANAlAQIABADIgDADIgBAAIgBAAg')
    this.shape_176.setTransform(62.6, -127.0125)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: []})
        .to({state: [{t: this.shape_144}]}, 24)
        .to({state: [{t: this.shape_145}]}, 1)
        .to({state: [{t: this.shape_146}]}, 1)
        .to({state: [{t: this.shape_147}]}, 1)
        .to({state: [{t: this.shape_148}]}, 1)
        .to({state: [{t: this.shape_149}]}, 1)
        .to({state: [{t: this.shape_150}]}, 1)
        .to({state: [{t: this.shape_151}]}, 1)
        .to({state: [{t: this.shape_152}]}, 1)
        .to({state: [{t: this.shape_153}]}, 1)
        .to({state: [{t: this.shape_154}]}, 1)
        .to({state: [{t: this.shape_155}]}, 1)
        .to({state: [{t: this.shape_156}]}, 1)
        .to({state: [{t: this.shape_157}]}, 1)
        .to({state: [{t: this.shape_158}]}, 1)
        .to({state: [{t: this.shape_159}]}, 1)
        .to({state: [{t: this.shape_160}]}, 1)
        .to({state: [{t: this.shape_161}]}, 1)
        .to({state: [{t: this.shape_162}]}, 1)
        .to({state: [{t: this.shape_163}]}, 1)
        .to({state: [{t: this.shape_163}]}, 67)
        .to({state: [{t: this.shape_164}]}, 1)
        .to({state: [{t: this.shape_165}]}, 1)
        .to({state: [{t: this.shape_166}]}, 1)
        .to({state: [{t: this.shape_167}]}, 1)
        .to({state: [{t: this.shape_168}]}, 1)
        .to({state: [{t: this.shape_169}]}, 1)
        .to({state: [{t: this.shape_170}]}, 1)
        .to({state: [{t: this.shape_171}]}, 1)
        .to({state: [{t: this.shape_172}]}, 1)
        .to({state: [{t: this.shape_173}]}, 1)
        .to({state: [{t: this.shape_174}]}, 1)
        .to({state: [{t: this.shape_175}]}, 1)
        .to({state: [{t: this.shape_176}]}, 1)
        .to({state: [{t: this.shape_144}]}, 1)
        .to({state: []}, 1)
        .wait(65),
    )

    // ligne
    this.shape_177 = new cjs.Shape()
    this.shape_177.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -105.4, 141.5, 1.1, 141.5)
      .s()
      .p(
        'AgKASIALgfQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAABABAAIACACIABAEIgLAcg',
      )
    this.shape_177.setTransform(66.6958, -123.775)

    this.shape_178 = new cjs.Shape()
    this.shape_178.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -103.5, 136.2, 3.1, 136.2)
      .s()
      .p('AgcBFIAnhsQACgIAEgHIAJgLIADgDIAAAAIAAAFIgDANIgkBhIgRAWg')
    this.shape_178.setTransform(64.7, -118.475)

    this.shape_179 = new cjs.Shape()
    this.shape_179.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -101.5, 130.9, 5, 130.9)
      .s()
      .p(
        'AgvB6IAAgBIgBAAIBEi6QAFgNAGgMIANgYIAEgHIAAAAIAAABIgBAIIgHAWIg9CnIgYAtg',
      )
    this.shape_179.setTransform(62.75, -113.225)

    this.shape_180 = new cjs.Shape()
    this.shape_180.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -99.6, 125.7, 7, 125.7)
      .s()
      .p(
        'AhCCuIAAgBIgBAAIBhkHIAPglIAQgjIAGgLIABAAIAAAAIgDAMIgKAfIhWDsIgiBEIAAAAg',
      )
    this.shape_180.setTransform(60.825, -107.975)

    this.shape_181 = new cjs.Shape()
    this.shape_181.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -97.7, 120.5, 8.9, 120.5)
      .s()
      .p(
        'AhVDiIgBAAIAAAAIAAAAIB9lVIATgxIAUguIAIgPIAAAAIABAAIAAABIgEAOIgOApIhwExIgpBaIgBAAIAAABIAAgBg',
      )
    this.shape_181.setTransform(58.9125, -102.75)

    this.shape_182 = new cjs.Shape()
    this.shape_182.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -95.7, 115.2, 10.8, 115.2)
      .s()
      .p(
        'AhoEXIgBAAIAAgBIgBAAICamiQALgfANgdIAYg6IAJgTIAAgBIABAAIAAABIABAAIgGATQgIAZgJAYIiKF3IgxBxIgBAAg',
      )
    this.shape_182.setTransform(56.975, -97.5125)

    this.shape_183 = new cjs.Shape()
    this.shape_183.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -93.8, 110, 12.7, 110)
      .s()
      .p(
        'Ah8FLIAAgBIgBAAIC3nwQANgkAOgjIAdhGIAKgXIAAAAIABAAIAAAAIABABIgHAWIgUA7IikG8Ig5CHIgBAAIgBABIAAgBg',
      )
    this.shape_183.setTransform(55.05, -92.2625)

    this.shape_184 = new cjs.Shape()
    this.shape_184.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -91.9, 104.8, 14.7, 104.8)
      .s()
      .p(
        'AiPGAIgBAAIAAgBIAAAAIDTo+IAfhTIAhhRIAMgbIAAgBIABAAIABABIAAABIgIAaQgLAhgNAiIi9ICIhBCeIgBAAg',
      )
    this.shape_184.setTransform(53.125, -87.05)

    this.shape_185 = new cjs.Shape()
    this.shape_185.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -89.9, 99.5, 16.6, 99.5)
      .s()
      .p(
        'AijGzIAAAAIgBAAIDwqLIAkhfIAlhcIANggIABgBIABAAIABABIAAABIgKAeIgbBMIjXJIIhJCzIgBABIgBAAIgBgBg',
      )
    this.shape_185.setTransform(51.175, -81.8)

    this.shape_186 = new cjs.Shape()
    this.shape_186.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -88, 94.3, 18.5, 94.3)
      .s()
      .p(
        'Ai2HpIgBgBIAAgBIAAAAIEMrYIAphqIAohpIAPgjIABgBIABAAIABABIAAACIgLAgIgeBWIjxKNIhRDKIgBABIgBAAIgBAAg',
      )
    this.shape_186.setTransform(49.25, -76.5625)

    this.shape_187 = new cjs.Shape()
    this.shape_187.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -86.1, 89, 20.5, 89)
      .s()
      .p(
        'AjJIdIgBgBIAAgBIAAAAIEpsmIAsh1IAth0IAQgnIABgBIABAAIABABIAAABIgMAkIgiBfIkKLTIhZDgIgBABIgCAAg',
      )
    this.shape_187.setTransform(47.325, -71.325)

    this.shape_188 = new cjs.Shape()
    this.shape_188.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -84.1, 83.8, 22.4, 83.8)
      .s()
      .p(
        'AjdJQIAAgBIgBAAIFGtzQAYhBAZhAIAxh/IARgrIABgCIACAAIABABIAAACIgOAnIglBoIkkMYIhhD3IgBABIgCABIgBgCg',
      )
    this.shape_188.setTransform(45.3875, -66.0875)

    this.shape_189 = new cjs.Shape()
    this.shape_189.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -82.2, 78.6, 24.3, 78.6)
      .s()
      .p(
        'AjvKGIgCgCIAAgBIAAAAIFivAIA1iNIA1iLIATguIABgCIACAAIABABIAAACIgPArIgpBxIk+NdIhoENIgCACIAAAAIgBAAg',
      )
    this.shape_189.setTransform(43.4625, -60.85)

    this.shape_190 = new cjs.Shape()
    this.shape_190.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -80.3, 73.3, 26.3, 73.3)
      .s()
      .p(
        'AkEK5IAAgCIAAAAIF/wNIA4iYIA6iXIAUgzIABgBIACAAIABABIAAACIgQAuIgsB6IlYOjIhwEkIgCABIgBABIgCgCg',
      )
    this.shape_190.setTransform(41.5375, -55.6125)

    this.shape_191 = new cjs.Shape()
    this.shape_191.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -78.4, 68.1, 28.2, 68.1)
      .s()
      .p(
        'AkWLvIgCgCIAAgBIAAAAIGbxcIA+ijIA+iiIAVg3IABgCIACAAIACACIAAACIgSAxIgwCEIlxPoIh4E6IgCACIgBAAIgBAAg',
      )
    this.shape_191.setTransform(39.6, -50.375)

    this.shape_192 = new cjs.Shape()
    this.shape_192.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -76.4, 62.8, 30.1, 62.8)
      .s()
      .p(
        'AkrMiIAAgCIAAAAIG4ypIBBivIBCiuIAXg7IABgBIACAAIACABIAAACIgTA1IgzCNImLQuIiBFRIgBABIgCAAIgCgBg',
      )
    this.shape_192.setTransform(37.675, -45.1375)

    this.shape_193 = new cjs.Shape()
    this.shape_193.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -74.5, 57.6, 32.1, 57.6)
      .s()
      .p(
        'Ak8NXIgCgBIAAgCIHUz2IBGi6IBGi6IAYg/IABgCIADAAIABACIABADIgVA4Ig2CVImlR0IiIFnIgCABIgBABIgBgBg',
      )
    this.shape_193.setTransform(35.7375, -39.9)

    this.shape_194 = new cjs.Shape()
    this.shape_194.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -72.6, 52.4, 34, 52.4)
      .s()
      .p(
        'AlQOMIgCgCIAAgCIAAAAIHx1DIBKjGIBKjFIAahDIABgCQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIABACQABAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAIgWA8Ig6CfIpPY2IgCACIgBAAIgBAAg',
      )
    this.shape_194.setTransform(33.8083, -34.6667)

    this.shape_195 = new cjs.Shape()
    this.shape_195.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -70.6, 47.1, 35.9, 47.1)
      .s()
      .p(
        'AllO/QAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIAAAAIIO2RIBOjRIBOjQIAbhHIACgCQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAABIACABIAAADIgXA/Ig9CoIpxaTIgCABIgCABIgCgCg',
      )
    this.shape_195.setTransform(31.8833, -29.425)

    this.shape_196 = new cjs.Shape()
    this.shape_196.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -68.7, 41.9, 37.9, 41.9)
      .s()
      .p(
        'Al2P1IgCgCIAAgDIIq3eIBSjdIBTjcIAchLQAAAAAAAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAIABACIABADIgZBCIhACxIqSbvIgDACIgBAAIgBAAg',
      )
    this.shape_196.setTransform(29.9458, -24.1875)

    this.shape_197 = new cjs.Shape()
    this.shape_197.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -66.8, 36.6, 39.8, 36.6)
      .s()
      .p(
        'AmKQpIgCgCQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAAAIJH4sIBXjnIBWjoIAehPIACgCQAAAAABAAQAAgBAAAAQABAAAAABQABAAAAAAIABABIABADIgaBGIhEC7Iq0dKIgCACIgCABIgBgBg',
      )
    this.shape_197.setTransform(28.0083, -18.9417)

    this.shape_198 = new cjs.Shape()
    this.shape_198.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -64.8, 31.4, 41.7, 31.4)
      .s()
      .p(
        'AmdReIgCgCIAAgDIJk55IBaj0IBbjzIAfhTQAAgBAAAAQAAAAABgBQAAAAAAAAQAAAAABgBIADAAIACACIAAAEIgbBJIhHDDIrWenIgCACIgCAAIgBAAg',
      )
    this.shape_198.setTransform(26.075, -13.725)

    this.shape_199 = new cjs.Shape()
    this.shape_199.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -62.9, 26.2, 43.7, 26.2)
      .s()
      .p(
        'AmwSSIgCgCQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAIKA7HIBfj/IBej/IAhhXIACgCIAEAAIACACIAAADIgcBNIhLDNMgL3AgCIgDACIgCAAIgBAAg',
      )
    this.shape_199.setTransform(24.1375, -8.4792)

    this.shape_200 = new cjs.Shape()
    this.shape_200.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -61, 20.9, 45.6, 20.9)
      .s()
      .p(
        'AnGTEQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAAAIKd8UIBjkKIBjkLIAihbIACgDIADAAIADADIAAADIgeBQIhODWMgMZAheIgCACIgDABIgDgDg',
      )
    this.shape_200.setTransform(22.225, -3.2375)

    this.shape_201 = new cjs.Shape()
    this.shape_201.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -59, 15.7, 47.5, 15.7)
      .s()
      .p(
        'AnWT7IgDgCQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAIK69iIBnkWIBmkWIAkhfIACgDQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAIACADQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAIgfBUIhSDfMgM7Ai6IgCACIgDAAIAAAAg',
      )
    this.shape_201.setTransform(20.2833, 1.9833)

    this.shape_202 = new cjs.Shape()
    this.shape_202.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -57.1, 10.5, 49.4, 10.5)
      .s()
      .p(
        'AnqUwIgDgDQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAILX+vIBrkiIBrkhIAlhjQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAABIACACQABABAAAAQAAAAAAABQAAAAAAABQAAAAAAABIghBXIhVDoMgNcAkWIgDACIgCABIgBAAg',
      )
    this.shape_202.setTransform(18.3583, 7.2333)

    this.shape_203 = new cjs.Shape()
    this.shape_203.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -55.2, 5.2, 51.4, 5.2)
      .s()
      .p(
        'An9VkQgBAAAAAAQAAgBgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBABAAQAAgBAAAAILz/9IBwksIBukuIAnhnIACgDQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAIADADIAAAEIghBaIhZDxMgN+AlyIgDACIgCABIgBAAg',
      )
    this.shape_203.setTransform(16.4083, 12.4583)

    this.shape_204 = new cjs.Shape()
    this.shape_204.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -53.2, 0, 53.3, 0)
      .s()
      .p(
        'AoQWYIgDgDQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAMAQegsmQAAgBABAAQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABABQAAAAABAAIACACIABAEMgQfAsmIgDADIgCABIgBgBg',
      )
    this.shape_204.setTransform(14.4833, 17.7083)

    this.shape_205 = new cjs.Shape()
    this.shape_205.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -55.6, 6.4, 50.9, 6.4)
      .s()
      .p(
        'An5VYIgDgDQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAILt/rIBukqIBukrIAnhmQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAIACADIABADIgiBaIhXDvMgN3AldIgDADIgCAAIgBAAg',
      )
    this.shape_205.setTransform(16.8583, 11.2833)

    this.shape_206 = new cjs.Shape()
    this.shape_206.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -58, 12.9, 48.6, 12.9)
      .s()
      .p(
        'AnkUVQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAILK+MIBpkcIBpkcIAkhhQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAABIADACQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAIggBWIhTDjMgNNAjtIgDACIgDABIgDgDg',
      )
    this.shape_206.setTransform(19.2333, 4.85)

    this.shape_207 = new cjs.Shape()
    this.shape_207.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -60.4, 19.3, 46.2, 19.3)
      .s()
      .p(
        'AnJTXIgDgCQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIKn8tIBkkOIBkkOIAihdIACgCIADAAIADACIABADIgfBSIhPDYMgMkAh8QAAAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAIgCAAIgBAAg',
      )
    this.shape_207.setTransform(21.6, -1.5792)

    this.shape_208 = new cjs.Shape()
    this.shape_208.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -62.7, 25.7, 43.8, 25.7)
      .s()
      .p(
        'AmySXIgCgCQAAgBgBAAQAAgBAAAAQAAAAAAgBQABAAAAAAIKD7OIBfkAIBfkAIAhhXIACgDIADAAIACACIAAAEIgcBNIhLDNMgL6AgLIgDACIgCAAIgBAAg',
      )
    this.shape_208.setTransform(23.9625, -8.0042)

    this.shape_209 = new cjs.Shape()
    this.shape_209.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -65.1, 32.1, 41.5, 32.1)
      .s()
      .p(
        'AmaRXIgCgDQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAIJg5vIBajyIBZjyIAghSQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAABgBIADAAIACACIAAADIgbBJIhHDDIrReZIgCACIgCABIgBAAg',
      )
    this.shape_209.setTransform(26.3375, -14.4292)

    this.shape_210 = new cjs.Shape()
    this.shape_210.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -67.5, 38.6, 39.1, 38.6)
      .s()
      .p(
        'AmFQUIAAgCIAAAAII94QIBVjkIBUjkIAehNIACgCQAAAAABAAQAAgBAAAAQABAAAAABQABAAAAAAIABACIABACIgZBGIhDC2IqocpIgCACIgDAAIgCgCg',
      )
    this.shape_210.setTransform(28.7083, -20.85)

    this.shape_211 = new cjs.Shape()
    this.shape_211.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -69.8, 45, 36.7, 45)
      .s()
      .p(
        'AlrPWIgCgCIAAgCIAAAAIIa2xIBPjWIBQjVIAchJIABgCQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIACACIAAADIgXBAIg/CsIp+a4IgCACIgCAAIgBAAg',
      )
    this.shape_211.setTransform(31.0833, -27.2875)

    this.shape_212 = new cjs.Shape()
    this.shape_212.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -72.2, 51.4, 34.3, 51.4)
      .s()
      .p(
        'AlTOWIgCgCIAAgCIgBAAIH31SIBLjIIBKjHIAahDQAAgBABAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAAAABIACABQAAAAAAABQAAAAABAAQAAABAAAAQAAAAgBABIgWA8Ig6ChIpVZHIgCACIgBAAIgBAAg',
      )
    this.shape_212.setTransform(33.4583, -33.7125)

    this.shape_213 = new cjs.Shape()
    this.shape_213.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -74.6, 57.8, 32, 57.8)
      .s()
      .p(
        'Ak7NVIgCgCIAAgCIgBAAIHUzyIBFi6IBGi5IAYg/IABgBIADAAIABABIABADIgVA4Ig2CVImjRwIiJFmIgBACIgCAAIAAAAg',
      )
    this.shape_213.setTransform(35.825, -40.1292)

    this.shape_214 = new cjs.Shape()
    this.shape_214.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -77, 64.3, 29.6, 64.3)
      .s()
      .p(
        'AkmMTIAAgBIAAAAIGwyUIBAisIBBiqIAWg6IACgCIACAAIACACIAAACIgTA0IgyCKImEQbIh+FKIgCACIgCAAIgCgCg',
      )
    this.shape_214.setTransform(38.2, -46.5625)

    this.shape_215 = new cjs.Shape()
    this.shape_215.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -79.3, 70.7, 27.2, 70.7)
      .s()
      .p(
        'AkOLTIAAgCIAAAAIGNw0IA7ieIA8icIAUg1IACgCIACAAIABACIAAACIgRAvIguB/IlkPGIh1EvIgBABIgCABIgCgCg',
      )
    this.shape_215.setTransform(40.575, -52.9875)

    this.shape_216 = new cjs.Shape()
    this.shape_216.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -81.7, 77.1, 24.9, 77.1)
      .s()
      .p(
        'Aj0KUIgCgBIAAgCIAAAAIFqvVIA2iPIA2iPIATgwIABgBIACAAIABABIAAACIgPArIgpB0IlFNxIhrETIgCABIgBAAIAAAAg',
      )
    this.shape_216.setTransform(42.9375, -59.425)

    this.shape_217 = new cjs.Shape()
    this.shape_217.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -84.1, 83.6, 22.5, 83.6)
      .s()
      .p(
        'AjdJUIgBgBIAAgBIgBAAIFHt3IAxiBIAxiAIARgrIACgCIABAAIABABIAAACIgNAnIgmBpIklMbIhhD4IgCABIgBAAg',
      )
    this.shape_217.setTransform(45.3125, -65.8625)

    this.shape_218 = new cjs.Shape()
    this.shape_218.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -86.4, 90, 20.1, 90)
      .s()
      .p(
        'AjGITIAAgCIgBAAIEksXIArhzIAthyIAPgnIABgBIACAAIABABIAAACIgMAjIghBdIkGLGIhYDdIgBAAIgBABIgBgBg',
      )
    this.shape_218.setTransform(47.675, -72.275)

    this.shape_219 = new cjs.Shape()
    this.shape_219.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -88.8, 96.4, 17.7, 96.4)
      .s()
      .p(
        'AivHTIAAgCIAAAAIEBq4QASgzAUgzIAnhjIAOgiIABgBIABAAIABABIAAABIgLAgIgcBSIjnJwIhODCIgBAAIgBAAIgBAAg',
      )
    this.shape_219.setTransform(50.05, -78.7)

    this.shape_220 = new cjs.Shape()
    this.shape_220.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -91.2, 102.8, 15.4, 102.8)
      .s()
      .p(
        'AiWGTIgBgBIAAgBIAAAAIDdpZIAhhXIAjhWIAMgcIAAgBIABAAIABABIAAABIgJAaQgLAkgNAkIjHIbIhEClIgBABIgBAAIAAAAg',
      )
    this.shape_220.setTransform(52.425, -85.1375)

    this.shape_221 = new cjs.Shape()
    this.shape_221.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -93.5, 109.3, 13, 109.3)
      .s()
      .p(
        'Ah+FTIgBgBIAAgBIgBAAIC7n6IAchJIAdhHIAKgYIABAAIABAAIAAAAIABABIgIAXIgUA7IinHGIg7CKIAAABIgBAAg',
      )
    this.shape_221.setTransform(54.775, -91.5625)

    this.shape_222 = new cjs.Shape()
    this.shape_222.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -95.9, 115.7, 10.6, 115.7)
      .s()
      .p(
        'AhnESIAAAAIAAgBIgBAAICYmbIAWg7IAYg5IAJgTIAAAAIABAAIAAAAIABABIgGASIgQAxIiIFwIgxBvIAAAAg',
      )
    this.shape_222.setTransform(57.15, -97.9875)

    this.shape_223 = new cjs.Shape()
    this.shape_223.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -98.3, 122.1, 8.3, 122.1)
      .s()
      .p(
        'AhPDSIAAAAIAAgBIgBAAIB0k8IASgtIATgrIAHgNIAAgBIABAAIAAABIgEAOIgMAmIhoEbIgnBTIAAAAg',
      )
    this.shape_223.setTransform(59.5125, -104.4125)

    this.shape_224 = new cjs.Shape()
    this.shape_224.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -100.6, 128.6, 5.9, 128.6)
      .s()
      .p(
        'Ag3CRIAAAAIgBAAIBRjdQAFgQAHgPIAPgcIAFgJIAAAAIAAAAIgCAKIgIAbIhIDGIgdA2g',
      )
    this.shape_224.setTransform(61.875, -110.85)

    this.shape_225 = new cjs.Shape()
    this.shape_225.graphics
      .lf(['#FE9544', '#E93A45'], [0, 1], -103, 135, 3.5, 135)
      .s()
      .p('AggBRIAth+IAIgRIAJgOIADgEIAAAAIAAAAIAAAGQgBAHgDAIIgpBxIgTAbg')
    this.shape_225.setTransform(64.25, -117.275)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: []})
        .to({state: [{t: this.shape_177}]}, 78)
        .to({state: [{t: this.shape_178}]}, 1)
        .to({state: [{t: this.shape_179}]}, 1)
        .to({state: [{t: this.shape_180}]}, 1)
        .to({state: [{t: this.shape_181}]}, 1)
        .to({state: [{t: this.shape_182}]}, 1)
        .to({state: [{t: this.shape_183}]}, 1)
        .to({state: [{t: this.shape_184}]}, 1)
        .to({state: [{t: this.shape_185}]}, 1)
        .to({state: [{t: this.shape_186}]}, 1)
        .to({state: [{t: this.shape_187}]}, 1)
        .to({state: [{t: this.shape_188}]}, 1)
        .to({state: [{t: this.shape_189}]}, 1)
        .to({state: [{t: this.shape_190}]}, 1)
        .to({state: [{t: this.shape_191}]}, 1)
        .to({state: [{t: this.shape_192}]}, 1)
        .to({state: [{t: this.shape_193}]}, 1)
        .to({state: [{t: this.shape_194}]}, 1)
        .to({state: [{t: this.shape_195}]}, 1)
        .to({state: [{t: this.shape_196}]}, 1)
        .to({state: [{t: this.shape_197}]}, 1)
        .to({state: [{t: this.shape_198}]}, 1)
        .to({state: [{t: this.shape_199}]}, 1)
        .to({state: [{t: this.shape_200}]}, 1)
        .to({state: [{t: this.shape_201}]}, 1)
        .to({state: [{t: this.shape_202}]}, 1)
        .to({state: [{t: this.shape_203}]}, 1)
        .to({state: [{t: this.shape_204}]}, 1)
        .to({state: [{t: this.shape_204}]}, 46)
        .to({state: [{t: this.shape_205}]}, 1)
        .to({state: [{t: this.shape_206}]}, 1)
        .to({state: [{t: this.shape_207}]}, 1)
        .to({state: [{t: this.shape_208}]}, 1)
        .to({state: [{t: this.shape_209}]}, 1)
        .to({state: [{t: this.shape_210}]}, 1)
        .to({state: [{t: this.shape_211}]}, 1)
        .to({state: [{t: this.shape_212}]}, 1)
        .to({state: [{t: this.shape_213}]}, 1)
        .to({state: [{t: this.shape_214}]}, 1)
        .to({state: [{t: this.shape_215}]}, 1)
        .to({state: [{t: this.shape_216}]}, 1)
        .to({state: [{t: this.shape_217}]}, 1)
        .to({state: [{t: this.shape_218}]}, 1)
        .to({state: [{t: this.shape_219}]}, 1)
        .to({state: [{t: this.shape_220}]}, 1)
        .to({state: [{t: this.shape_221}]}, 1)
        .to({state: [{t: this.shape_222}]}, 1)
        .to({state: [{t: this.shape_223}]}, 1)
        .to({state: [{t: this.shape_224}]}, 1)
        .to({state: [{t: this.shape_225}]}, 1)
        .to({state: [{t: this.shape_177}]}, 1)
        .to({state: []}, 1)
        .wait(16),
    )

    // Calque_5
    this.shape_226 = new cjs.Shape()
    this.shape_226.graphics
      .lf(['#FFCC00', '#33CCFF'], [0.478, 1], -3.7, -146.3, 239.1, -146.3)
      .s()
      .p(
        'AgiAnQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAgBQABAAAAgBIA4hGIAQAAIg+BOQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAIgBAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBgBAAAAg',
      )
    this.shape_226.setTransform(-19.5386, 156.5636)

    this.shape_227 = new cjs.Shape()
    this.shape_227.graphics
      .lf(['#FFCC00', '#33CCFF'], [0.478, 1], -8, -140.7, 234.8, -140.7)
      .s()
      .p('AhPBcIAAgBQACgGAFgFIB8ibIAbgPIABgBIAAABIiGCnIgKAKIgJAEIgFABg')
    this.shape_227.setTransform(-15.275, 151.025)

    this.shape_228 = new cjs.Shape()
    this.shape_228.graphics
      .lf(['#FFCC00', '#33CCFF'], [0.478, 1], -12.3, -135.3, 230.5, -135.3)
      .s()
      .p(
        'Ah6CSIAAgCQAEgJAHgIIDAjuIAngeIADgEIAAAAIAAABIjPECIgQARIgOAKIgHAFIgBAAg',
      )
    this.shape_228.setTransform(-10.9, 145.625)

    this.shape_229 = new cjs.Shape()
    this.shape_229.graphics
      .lf(['#FFCC00', '#33CCFF'], [0.478, 1], -16.7, -129.9, 226.1, -129.9)
      .s()
      .p(
        'AimDJIAAgDQAHgLAJgLIEElDIAzguIAFgGIAAAAIABAAIAAAAIAAABIkZFdIgWAZIgSAQIgLAIIAAABIgBAAg',
      )
    this.shape_229.setTransform(-6.525, 140.2)

    this.shape_230 = new cjs.Shape()
    this.shape_230.graphics
      .lf(['#FFCC00', '#33CCFF'], [0.478, 1], -21.1, -124.5, 221.7, -124.5)
      .s()
      .p(
        'AjRD/IgBgBIAAgBQAKgPAMgOIFHmXIA/g9IAHgJIABgBIAAABIABAAIAAABIljG4IgcAhIgXAWIgNAMg',
      )
    this.shape_230.setTransform(-2.175, 134.775)

    this.shape_231 = new cjs.Shape()
    this.shape_231.graphics
      .lf(['#FFCC00', '#33CCFF'], [0.478, 1], -25.4, -119.1, 217.4, -119.1)
      .s()
      .p(
        'Aj9E1IAAgBIAAgBIAAgBQAMgSAOgRIGMnqIBKhNIAJgMIABAAIABAAIAAABIAAABImsITIgiApIgbAbIgQAQIgBAAIgBAAg',
      )
    this.shape_231.setTransform(2.2, 129.3875)

    this.shape_232 = new cjs.Shape()
    this.shape_232.graphics
      .lf(['#FFCC00', '#33CCFF'], [0.478, 1], -29.8, -113.7, 213, -113.7)
      .s()
      .p(
        'AkpFrIAAgBIAAgBIAAgBQAPgVARgUIHPo/IBWhbIALgPIABAAIABAAIABABIgBABIn1JuIgoAwIgfAhIgUAUIgBAAIgBAAg',
      )
    this.shape_232.setTransform(6.55, 123.9625)

    this.shape_233 = new cjs.Shape()
    this.shape_233.graphics
      .lf(['#FFCC00', '#33CCFF'], [0.478, 1], -34.2, -108.3, 208.6, -108.3)
      .s()
      .p(
        'AlUGhIgBgBIAAAAIABgCQARgYATgXIITqTIBwh8IABgBIABABIABABIgBABIo/LKIguA3IgkAnIgWAXIgBAAIgBAAg',
      )
    this.shape_233.setTransform(10.925, 118.55)

    this.shape_234 = new cjs.Shape()
    this.shape_234.graphics
      .lf(['#FFCC00', '#33CCFF'], [0.478, 1], -38.5, -102.9, 204.3, -102.9)
      .s()
      .p(
        'AmAHXIAAgBIAAAAIAAgCQAUgbAVgaIJXrnIB+iPIABAAIACAAIAAABIAAACIqJMlIg0A+IgoAtIgZAbIgBABIgCgBg',
      )
    this.shape_234.setTransform(15.275, 113.15)

    this.shape_235 = new cjs.Shape()
    this.shape_235.graphics
      .lf(['#FFCC00', '#33CCFF'], [0.478, 1], -42.9, -97.4, 199.9, -97.4)
      .s()
      .p(
        'AmsIOIAAgCIAAAAIAAgCQAXgeAXgdIKcs7ICLihIABAAIACAAIABACIgBABIrSOAIg5BGIgtAzIgcAeIgCABIgCAAg',
      )
    this.shape_235.setTransform(19.65, 107.725)

    this.shape_236 = new cjs.Shape()
    this.shape_236.graphics
      .lf(['#FFCC00', '#33CCFF'], [0.478, 1], -47.2, -92, 195.6, -92)
      .s()
      .p(
        'AnXJEIAAgCIAAAAIAAgCQAZghAaggILfuPICZiyIACgBIACAAIABACIgBABIscPcIhABNIgxA5IgfAiIgBABIgCgBg',
      )
    this.shape_236.setTransform(24, 102.3)

    this.shape_237 = new cjs.Shape()
    this.shape_237.graphics
      .lf(['#FFCC00', '#33CCFF'], [0.478, 1], -51.6, -86.6, 191.2, -86.6)
      .s()
      .p(
        'AoCJ6IgBgCIAAAAIAAgCIA4hHIMjvjICojFIABgBIACABIABACIgBABItlQ2IhGBWIg1A9IgiAnIgBABIgCgBg',
      )
    this.shape_237.setTransform(28.375, 96.9)

    this.shape_238 = new cjs.Shape()
    this.shape_238.graphics
      .lf(['#FFCC00', '#33CCFF'], [0.478, 1], -56, -81.2, 186.8, -81.2)
      .s()
      .p(
        'AouKxIgBgCIAAgBIABgCIA9hNINmw4IC2jWIACgBIACABIABABIgBACIuuSSIhMBdIg7BDIgkAqIgCABIgCAAg',
      )
    this.shape_238.setTransform(32.725, 91.475)

    this.shape_239 = new cjs.Shape()
    this.shape_239.graphics
      .lf(['#FFCC00', '#33CCFF'], [0.478, 1], -60.3, -75.8, 182.5, -75.8)
      .s()
      .p(
        'ApZLnIgBgCIAAAAIAAgDIBChTIOqyMIDEjpIACgBIACABIACACIgBADIv4TsIhSBlIg/BJIgnAtIgCABIgCAAg',
      )
    this.shape_239.setTransform(37.1, 86.05)

    this.shape_240 = new cjs.Shape()
    this.shape_240.graphics
      .lf(['#FFCC00', '#33CCFF'], [0.478, 1], -64.7, -70.4, 178.1, -70.4)
      .s()
      .p(
        'AqFMdIgBgCIAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAQAjgtAkgsIPuzgIDSj7IACgBQAAAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAIABACIAAACIxCVIIhYBsIhDBPIgqAxIgCACIgDgBg',
      )
    this.shape_240.setTransform(41.4438, 80.6667)

    this.shape_241 = new cjs.Shape()
    this.shape_241.graphics
      .lf(['#FFCC00', '#33CCFF'], [0.478, 1], -69.1, -64.9, 173.7, -64.9)
      .s()
      .p(
        'AqxNTIgBgCIAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIBMhfIQy00IDgkNIACgBQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAABIACACIgBADIyLWiIheB0IhIBVIgtA1IgCABIgDgBg',
      )
    this.shape_241.setTransform(45.8188, 75.2417)

    this.shape_242 = new cjs.Shape()
    this.shape_242.graphics
      .lf(['#FFCC00', '#33CCFF'], [0.478, 1], -73.4, -59.5, 169.4, -59.5)
      .s()
      .p(
        'ArcOKIgBgDIAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAIBQhlIR22JIDukeIACgBQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABIAAADIzVX9IhkB7IhMBbIgwA5QAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgDAAg',
      )
    this.shape_242.setTransform(50.1688, 69.8188)

    this.shape_243 = new cjs.Shape()
    this.shape_243.graphics
      .lf(['#FFCC00', '#33CCFF'], [0.478, 1], -77.8, -54.1, 165, -54.1)
      .s()
      .p(
        'AsHPAIgCgDIAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAIBWhrIS63dID7kxIADgBQAAAAAAAAQABAAAAAAQAAAAABABQAAAAABAAIABADIgBADI0eZYIhqCDIhQBgIgzA9IgCACIgDgBg',
      )
    this.shape_243.setTransform(54.5438, 64.4188)

    this.shape_244 = new cjs.Shape()
    this.shape_244.graphics
      .lf(['#FFCC00', '#33CCFF'], [0.478, 1], -82.1, -48.7, 160.7, -48.7)
      .s()
      .p(
        'AszP2IgBgCIAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAIBahxIT+4xIEKlCQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAABAAAAQABAAAAABIgBADI1oa0IhwCKIhVBmIg1BBIgDABIgDgBg',
      )
    this.shape_244.setTransform(58.8938, 58.9938)

    this.shape_245 = new cjs.Shape()
    this.shape_245.graphics
      .lf(['#FFCC00', '#33CCFF'], [0.478, 1], -86.5, -43.3, 156.3, -43.3)
      .s()
      .p(
        'AtfQsIgBgCIAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAIBfh3IVC6FIEXlVQABAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABIACADIgBADI2xcPIh2CSIhZBsIg5BEQAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAIgEgBg',
      )
    this.shape_245.setTransform(63.2688, 53.5688)

    this.shape_246 = new cjs.Shape()
    this.shape_246.graphics
      .lf(['#FFCC00', '#33CCFF'], [0.478, 1], -90.9, -37.9, 151.9, -37.9)
      .s()
      .p(
        'AuKRiIgCgCIAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAIBlh9MAarghAQAAgBAAAAQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAIACADIgBAEI37dqIh8CZIheByIg7BIIgDACQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBg',
      )
    this.shape_246.setTransform(67.6188, 48.1688)

    this.shape_247 = new cjs.Shape()
    this.shape_247.graphics
      .lf(['#FFCC00', '#33CCFF'], [0.478, 1], -95.2, -32.5, 147.6, -32.5)
      .s()
      .p(
        'Au2SZQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQAAAAABgBIBpiCMAb9gimQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABIACACIgBAEI5EfGIiCCgIhjB4Ig+BLIgDACIgEgBg',
      )
    this.shape_247.setTransform(71.9938, 42.75)

    this.shape_248 = new cjs.Shape()
    this.shape_248.graphics
      .lf(['#FFCC00', '#33CCFF'], [0.478, 1], -99.6, -27, 143.2, -27)
      .s()
      .p(
        'AvhTPQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIBviJMAdPgkMQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAIgBAEMgaNAghIiICoIhnB9IhBBPQAAABgBAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgEgBg',
      )
    this.shape_248.setTransform(76.3438, 37.325)

    this.shape_249 = new cjs.Shape()
    this.shape_249.graphics
      .lf(['#FFCC00', '#33CCFF'], [0.478, 1], -104, -21.6, 138.8, -21.6)
      .s()
      .p(
        'AwNUFQgBAAAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABgBIBziPMAegglyQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABABQAAAAABAAQAAAAABABIACADIgCAEMgbXAh8IiOCvIhrCDIhDBTIgEADQAAAAgBgBQgBAAAAAAQgBAAAAAAQgBgBAAAAg',
      )
    this.shape_249.setTransform(80.72, 31.9438)

    this.shape_250 = new cjs.Shape()
    this.shape_250.graphics
      .lf(['#FFCC00', '#33CCFF'], [0.478, 1], -108.3, -16.2, 134.5, -16.2)
      .s()
      .p(
        'Aw4U7QgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAgBIB4iVMAfzgnYQAAgBABAAQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABQAAAAAAABIgBAEMgcgAjXIiUC3IhwCJIhGBXIgEACQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBg',
      )
    this.shape_250.setTransform(85.07, 26.5188)

    this.shape_251 = new cjs.Shape()
    this.shape_251.graphics
      .lf(['#FFCC00', '#33CCFF'], [0.478, 1], -112.7, -10.8, 130.1, -10.8)
      .s()
      .p(
        'AxkVyQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAABAAIB9ibMAhEgo/QAAAAABgBQAAAAAAAAQABgBAAAAQABAAABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABABQAAAAAAAAQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAMgdqAkyIiaC/Ih0CPIhKBaIgDACIgFgBg',
      )
    this.shape_251.setTransform(89.445, 21.095)

    this.shape_252 = new cjs.Shape()
    this.shape_252.graphics
      .lf(['#FFCC00', '#33CCFF'], [0.478, 1], -117.1, -5.4, 125.7, -5.4)
      .s()
      .p(
        'AyQWoQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAgDACgCICCihMAiWgqkQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAgBABAAQABAAAAABQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAABgBAAMgezAmNIigDHIh5CUIhMBeIgEADQgBAAAAgBQgBAAgBAAQAAAAgBAAQAAgBgBAAg',
      )
    this.shape_252.setTransform(93.82, 15.695)

    this.shape_253 = new cjs.Shape()
    this.shape_253.graphics
      .lf(['#FFCC00', '#33CCFF'], [0.478, 1], -121.4, 0, 121.4, 0)
      .s()
      .p(
        'Ay7XeQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAgBMAlvguxQABgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAAAABABQAAAAABAAQAAAAABABQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAMglvAuyQgBABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAIgBAAQAAAAgBAAQAAAAgBgBQgBAAAAAAQgBAAAAgBg',
      )
    this.shape_253.setTransform(98.15, 10.25)

    this.shape_254 = new cjs.Shape()
    this.shape_254.graphics
      .lf(['#FFCC00', '#33CCFF'], [0.478, 1], -141, 24.4, 101.8, 24.4)
      .s()
      .p(
        'Av2TqIgCgEIAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBMAbsgiUIBahvICCigIAfgnQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQABABAAAAQAAAAAAABQAAAAAAABIgBADIhFBXIhjB8Mgc/Aj4IgDACIgEgBg',
      )
    this.shape_254.setTransform(117.82, -14.1812)

    this.shape_255 = new cjs.Shape()
    this.shape_255.graphics
      .lf(['#FFCC00', '#33CCFF'], [0.478, 1], -160.7, 48.9, 82.1, 48.9)
      .s()
      .p(
        'AsyP1IgBgDIgBAAIABgDIWV7rIBIhZIBqiAIAZgfIADgBQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAIABADIgBADIg3BFIhPBlIzsYZIjtEfQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAIgEgBg',
      )
    this.shape_255.setTransform(137.5, -38.6312)

    this.shape_256 = new cjs.Shape()
    this.shape_256.graphics
      .lf(['#FFCC00', '#33CCFF'], [0.478, 1], -180.4, 73.3, 62.4, 73.3)
      .s()
      .p(
        'ApsMAIgBgCIgBAAQgBAAAAgBQAAAAAAAAQABgBAAAAQAAAAAAAAIQ91BIA4hEIBQhfIATgXIACgBIACABIACACIgBACIgpA1Ig8BMIu9SiIi1DYIgCABIgCgBg',
      )
    this.shape_256.setTransform(157.1917, -63.0583)

    this.shape_257 = new cjs.Shape()
    this.shape_257.graphics
      .lf(['#FFCC00', '#33CCFF'], [0.478, 1], -200, 97.8, 42.8, 97.8)
      .s()
      .p(
        'AmnIMIgBgCIgBAAQgBAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAILmuYIAmgtIA3g/IANgPIABgBIACAAIABACIgBABIgaAlIgpA0IqOMrIh9CPIgCABIgBAAg',
      )
    this.shape_257.setTransform(176.8417, -87.525)

    this.shape_258 = new cjs.Shape()
    this.shape_258.graphics
      .lf(['#FFCC00', '#33CCFF'], [0.478, 1], -219.7, 122.2, 23.1, 122.2)
      .s()
      .p(
        'AjjEXIAAgBIgCAAIAAgBIGPntIAVgYIAdgfIAIgHIAAAAIABAAIABABIgBABIgMATIgVAdIlgGzIhFBIIgBAAIgBAAg',
      )
    this.shape_258.setTransform(196.525, -111.975)

    this.shape_259 = new cjs.Shape()
    this.shape_259.graphics
      .lf(['#FFCC00', '#33CCFF'], [0.478, 1], -239.4, 146.8, 3.4, 146.8)
      .s()
      .p(
        'AggAkIA2hEQABgBAAAAQABgBAAAAQABAAAAAAQABgBAAAAQABAAABAAQAAAAABABQAAAAABAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQgBAAAAABIgwA8g',
      )
    this.shape_259.setTransform(216.2386, -136.5636)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: []})
        .to({state: [{t: this.shape_226}]}, 45)
        .to({state: [{t: this.shape_227}]}, 1)
        .to({state: [{t: this.shape_228}]}, 1)
        .to({state: [{t: this.shape_229}]}, 1)
        .to({state: [{t: this.shape_230}]}, 1)
        .to({state: [{t: this.shape_231}]}, 1)
        .to({state: [{t: this.shape_232}]}, 1)
        .to({state: [{t: this.shape_233}]}, 1)
        .to({state: [{t: this.shape_234}]}, 1)
        .to({state: [{t: this.shape_235}]}, 1)
        .to({state: [{t: this.shape_236}]}, 1)
        .to({state: [{t: this.shape_237}]}, 1)
        .to({state: [{t: this.shape_238}]}, 1)
        .to({state: [{t: this.shape_239}]}, 1)
        .to({state: [{t: this.shape_240}]}, 1)
        .to({state: [{t: this.shape_241}]}, 1)
        .to({state: [{t: this.shape_242}]}, 1)
        .to({state: [{t: this.shape_243}]}, 1)
        .to({state: [{t: this.shape_244}]}, 1)
        .to({state: [{t: this.shape_245}]}, 1)
        .to({state: [{t: this.shape_246}]}, 1)
        .to({state: [{t: this.shape_247}]}, 1)
        .to({state: [{t: this.shape_248}]}, 1)
        .to({state: [{t: this.shape_249}]}, 1)
        .to({state: [{t: this.shape_250}]}, 1)
        .to({state: [{t: this.shape_251}]}, 1)
        .to({state: [{t: this.shape_252}]}, 1)
        .to({state: [{t: this.shape_253}]}, 1)
        .to({state: [{t: this.shape_253}]}, 50)
        .to({state: [{t: this.shape_254}]}, 1)
        .to({state: [{t: this.shape_255}]}, 1)
        .to({state: [{t: this.shape_256}]}, 1)
        .to({state: [{t: this.shape_257}]}, 1)
        .to({state: [{t: this.shape_258}]}, 1)
        .to({state: [{t: this.shape_259}]}, 1)
        .to({state: []}, 1)
        .wait(61),
    )

    // Calque_6
    this.shape_260 = new cjs.Shape()
    this.shape_260.graphics
      .lf(['#33CCFF', '#649BFF'], [0.412, 1], -3, 51.1, 78.2, 51.1)
      .s()
      .p(
        'AgcgjQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAAgBABAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQABAAAAABIAwBCIAAAWg',
      )
    this.shape_260.setTransform(221.3345, -135.5655)

    this.shape_261 = new cjs.Shape()
    this.shape_261.graphics
      .lf(['#33CCFF', '#649BFF'], [0.412, 1], -4.4, 49.2, 76.8, 49.2)
      .s()
      .p(
        'AgogzQgDgEAAgDIABAAQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAIAGAAQADACACADIBFBfIADAQIAAABIAAABIgBAAIgCAEg',
      )
    this.shape_261.setTransform(222.75, -133.6583)

    this.shape_262 = new cjs.Shape()
    this.shape_262.graphics
      .lf(['#33CCFF', '#649BFF'], [0.412, 1], -5.8, 47.4, 75.4, 47.4)
      .s()
      .p(
        'Ag1hFIgEgIIAAgBIABAAIAAABIAFgBQADABAEADQAEACADAEIBZB7IAGATIAAACIAAABIgBABIAAgBIgEACg',
      )
    this.shape_262.setTransform(224.125, -131.8)

    this.shape_263 = new cjs.Shape()
    this.shape_263.graphics
      .lf(['#33CCFF', '#649BFF'], [0.412, 1], -7.2, 45.5, 74, 45.5)
      .s()
      .p(
        'ABHBgIgGgBIiDi0QgDgFgCgFIAAAAIABgBIAAAAIAHACIAIAFQAEADAEAGIBtCWIAKAYIAAABIAAABIgBABIAAgBg',
      )
    this.shape_263.setTransform(225.525, -129.95)

    this.shape_264 = new cjs.Shape()
    this.shape_264.graphics
      .lf(['#33CCFF', '#649BFF'], [0.412, 1], -8.6, 43.6, 72.6, 43.6)
      .s()
      .p(
        'ABVB0IgBAAIgHgEIibjWIgHgMIAAAAIABgBIAAAAIABAAIAHAEIAKAHQAFAEAFAHICBCyIANAcIAAACIgBABg',
      )
    this.shape_264.setTransform(226.925, -128.0625)

    this.shape_265 = new cjs.Shape()
    this.shape_265.graphics
      .lf(['#33CCFF', '#649BFF'], [0.412, 1], -10, 41.7, 71.2, 41.7)
      .s()
      .p(
        'ABiCHIgBAAIgJgHIizj3IgIgNIAAgBIABgBIABAAIAAAAIAJAGIAKAIQAHAGAFAIICVDOIAQAgIABACIgBABIgBAAg',
      )
    this.shape_265.setTransform(228.325, -126.175)

    this.shape_266 = new cjs.Shape()
    this.shape_266.graphics
      .lf(['#33CCFF', '#649BFF'], [0.412, 1], -11.3, 39.8, 69.9, 39.8)
      .s()
      .p(
        'ABvCZIgLgJIjMkYIgJgQIAAAAIABgBIABAAIABAAIAKAIIAMAKQAGAHAGAJICqDqIATAkIAAACIAAABIgBAAIgBgBg',
      )
    this.shape_266.setTransform(229.7, -124.25)

    this.shape_267 = new cjs.Shape()
    this.shape_267.graphics
      .lf(['#33CCFF', '#649BFF'], [0.412, 1], -12.7, 37.9, 68.5, 37.9)
      .s()
      .p(
        'AB8CtIgMgNIjkk6QgGgIgEgIIgBgBIABgBIABgBIABABIAMAKIAMAMQAIAIAHAKIC+EGIAWAoIAAABIAAACIgCABIgBgBg',
      )
    this.shape_267.setTransform(231.1, -122.375)

    this.shape_268 = new cjs.Shape()
    this.shape_268.graphics
      .lf(['#33CCFF', '#649BFF'], [0.412, 1], -14.1, 36, 67.1, 36)
      .s()
      .p(
        'ACKDAIgPgPIj8lcIgLgSIgBgBIABgBIABgBIACABIAMAMIAOAOIAQAUIDTEiIAZArIABACIgCACIgBABIgBgBg',
      )
    this.shape_268.setTransform(232.5, -120.475)

    this.shape_269 = new cjs.Shape()
    this.shape_269.graphics
      .lf(['#33CCFF', '#649BFF'], [0.412, 1], -15.5, 34.1, 65.7, 34.1)
      .s()
      .p(
        'ACXDTIgQgSIkUl9IgNgUIgBgBIABgCIACAAIABABIAOAOIAPAPIASAXIDmE+IAdAvIABACIgBACIgCABIgCgBg',
      )
    this.shape_269.setTransform(233.9, -118.5875)

    this.shape_270 = new cjs.Shape()
    this.shape_270.graphics
      .lf(['#33CCFF', '#649BFF'], [0.412, 1], -16.9, 32.2, 64.3, 32.2)
      .s()
      .p(
        'AClDmIgSgVIktmeQgIgLgGgKIAAgCIABgCIABAAIACABIAPAPIAQASIATAZID7FaIAgAzIAAACIAAACIgCABIgCgBg',
      )
    this.shape_270.setTransform(235.275, -116.675)

    this.shape_271 = new cjs.Shape()
    this.shape_271.graphics
      .lf(['#33CCFF', '#649BFF'], [0.412, 1], -18.3, 30.3, 62.9, 30.3)
      .s()
      .p(
        'ACzD5IgVgYIlFm/IgPgXIAAgCIABgCIACAAIABABIAQARIASAUQALANAKAOIEPF2IAjA3IAAACIgBADIgCAAIgBgBg',
      )
    this.shape_271.setTransform(236.675, -114.775)

    this.shape_272 = new cjs.Shape()
    this.shape_272.graphics
      .lf(['#33CCFF', '#649BFF'], [0.412, 1], -19.7, 28.4, 61.5, 28.4)
      .s()
      .p(
        'ADAEMIgWgbIldngIgRgZIAAgCIABgCIACAAIACABIARATIATAVIAWAeIEjGSIAnA7IAAACIgBADIgCAAIgCgBg',
      )
    this.shape_272.setTransform(238.075, -112.8875)

    this.shape_273 = new cjs.Shape()
    this.shape_273.graphics
      .lf(['#33CCFF', '#649BFF'], [0.412, 1], -21.1, 26.6, 60.1, 26.6)
      .s()
      .p(
        'ADOEfImOofIgSgaIAAgDIABgCIACgBIACACIATAWIATAWIAZAhIE3GtIApA/IABADIgBACIgDAAIgBgBg',
      )
    this.shape_273.setTransform(239.475, -111)

    this.shape_274 = new cjs.Shape()
    this.shape_274.graphics
      .lf(['#33CCFF', '#649BFF'], [0.412, 1], -22.5, 24.6, 58.7, 24.6)
      .s()
      .p(
        'ADbEyImnpEIgTgcQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQABgBAAAAQAAAAABAAIACgBIACABIAUAYIAVAZIAZAiIFMHJIAtBDIAAADIgBADIgCABIgDgCg',
      )
    this.shape_274.setTransform(240.8417, -109.0833)

    this.shape_275 = new cjs.Shape()
    this.shape_275.graphics
      .lf(['#33CCFF', '#649BFF'], [0.412, 1], -23.9, 22.8, 57.3, 22.8)
      .s()
      .p(
        'ADpFGInCppIgUgdIgBgDQAAAAAAgBQAAAAAAAAQABAAAAgBQAAAAABAAIACgBQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAAAIAVAaIAWAbIAcAkIFgHlIAvBHIABADQAAABAAAAQAAABAAAAQAAAAgBAAQAAABAAAAIgDABIgCgBg',
      )
    this.shape_275.setTransform(242.2417, -107.2)

    this.shape_276 = new cjs.Shape()
    this.shape_276.graphics
      .lf(['#33CCFF', '#649BFF'], [0.412, 1], -25.3, 20.9, 55.9, 20.9)
      .s()
      .p(
        'AD2FZInbqNIgWgfIgBgDQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAABABIAWAbIAXAdIAdAnIGnJMIABADIgBACIgDABQgBAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAg',
      )
    this.shape_276.setTransform(243.6417, -105.3083)

    this.shape_277 = new cjs.Shape()
    this.shape_277.graphics
      .lf(['#33CCFF', '#649BFF'], [0.412, 1], -26.7, 19, 54.5, 19)
      .s()
      .p(
        'AEEFsIn2qxIgXghIgBgDQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIADgBQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIAYAdIAYAfIAfApIG+JrIABAEIgCADIgDAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAg',
      )
    this.shape_277.setTransform(245.0417, -103.4083)

    this.shape_278 = new cjs.Shape()
    this.shape_278.graphics
      .lf(['#33CCFF', '#649BFF'], [0.412, 1], -28.1, 17.1, 53.1, 17.1)
      .s()
      .p(
        'AERF+IoQrUIgYgiIgBgEQAAAAAAgBQABAAAAAAQAAgBAAAAQAAAAABgBIADgBQAAAAABABQAAAAABAAQAAAAAAABQABAAAAAAIAYAgIAaAgIAgArIHWKMIABADIgCADIgDABIgDgCg',
      )
    this.shape_278.setTransform(246.4167, -101.5)

    this.shape_279 = new cjs.Shape()
    this.shape_279.graphics
      .lf(['#33CCFF', '#649BFF'], [0.412, 1], -29.5, 15.2, 51.7, 15.2)
      .s()
      .p(
        'AEfGSIoqr5IgagkQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAABgBQAAAAAAAAQABAAAAABQABAAAAAAQAAAAABAAQAAAAAAAAQABABAAAAIAaAiIAbAiIAhAuIHuKrIABAEIgCADIgDABIgDgCg',
      )
    this.shape_279.setTransform(247.8167, -99.6083)

    this.shape_280 = new cjs.Shape()
    this.shape_280.graphics
      .lf(['#33CCFF', '#649BFF'], [0.412, 1], -30.9, 13.3, 50.3, 13.3)
      .s()
      .p(
        'AEsGlIpEsdIgbgmQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAABgBQAAAAABAAQAAAAAAABQABAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAIAcAkIAcAkIAjAwIIFLLIABAEIgCADIgEABIgDgCg',
      )
    this.shape_280.setTransform(249.2167, -97.7083)

    this.shape_281 = new cjs.Shape()
    this.shape_281.graphics
      .lf(['#33CCFF', '#649BFF'], [0.412, 1], -32.3, 11.4, 48.9, 11.4)
      .s()
      .p(
        'AE6G4IpftCIgcgnQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAIAcAmIAdAlIAlAzIIcLrQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABAAAAIgEABQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBg',
      )
    this.shape_281.setTransform(250.6188, -95.8312)

    this.shape_282 = new cjs.Shape()
    this.shape_282.graphics
      .lf(['#33CCFF', '#649BFF'], [0.412, 1], -33.6, 9.5, 47.6, 9.5)
      .s()
      .p(
        'AFIHLIp5tmIgdgpQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAABAAQAAABABAAIAeAnIAeAoIAmA1II0MLIABADQgBABAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgEABIgDgCg',
      )
    this.shape_282.setTransform(251.9938, -93.9083)

    this.shape_283 = new cjs.Shape()
    this.shape_283.graphics
      .lf(['#33CCFF', '#649BFF'], [0.412, 1], -35, 7.6, 46.2, 7.6)
      .s()
      .p(
        'AFVHeIqTuKIgegqQgBgBAAAAQAAgBAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBABAAIAEgBQAAAAABAAQAAAAAAAAQABABAAAAQABABAAAAIAfApIAfAqIAoA3IJLMqIACAEQgBABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAQAAAAgBAAIgDgCg',
      )
    this.shape_283.setTransform(253.3938, -92.025)

    this.shape_284 = new cjs.Shape()
    this.shape_284.graphics
      .lf(['#33CCFF', '#649BFF'], [0.412, 1], -36.4, 5.7, 44.8, 5.7)
      .s()
      .p(
        'AFiHxIqsuuIgggsQgBgBAAAAQAAgBAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAABABAAIAgArIAgAsIAqA5IJiNKIACAEQgBABAAABQAAAAAAABQgBAAAAAAQAAABgBAAIgEABIgEgCg',
      )
    this.shape_284.setTransform(254.7938, -90.1312)

    this.shape_285 = new cjs.Shape()
    this.shape_285.graphics
      .lf(['#33CCFF', '#649BFF'], [0.412, 1], -37.8, 3.8, 43.4, 3.8)
      .s()
      .p(
        'AFwIEIrHvSIghguQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBABgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIAhAtIAiAtIArA8IJ6NqQAAABABAAQAAABAAAAQAAABAAAAQABABAAAAQgBABAAAAQAAABAAABQgBAAAAAAQAAABgBAAIgEABQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBg',
      )
    this.shape_285.setTransform(256.1938, -88.2312)

    this.shape_286 = new cjs.Shape()
    this.shape_286.graphics
      .lf(['#33CCFF', '#649BFF'], [0.412, 1], -39.2, 1.9, 42, 1.9)
      .s()
      .p(
        'AF9IXIrhv3IgigvQgCgCABgDQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQAAAAAAABIAjAvIAjAvIAsA+IKSOKQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBgBg',
      )
    this.shape_286.setTransform(257.5688, -86.3312)

    this.shape_287 = new cjs.Shape()
    this.shape_287.graphics
      .lf(['#33CCFF', '#649BFF'], [0.412, 1], -40.6, 0, 40.6, 0)
      .s()
      .p(
        'AGPItQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBIsfxMQAAAAgBgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABAAABgBQAAAAABAAQAAAAABAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAABIMfRMQAAAAABABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABIgEABIgBAAg',
      )
    this.shape_287.setTransform(258.95, -84.45)

    this.shape_288 = new cjs.Shape()
    this.shape_288.graphics
      .lf(['#33CCFF', '#649BFF'], [0.412, 1], -46.9, -8.8, 34.3, -8.8)
      .s()
      .p(
        'AFNHSIhFhdIgrg6Iotr+IgGgMQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAABAAQAAgBABAAQAAAAAAAAQABAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIJUMxIArA7IAiAxQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABIgCADIgFABIgDgCg',
      )
    this.shape_288.setTransform(265.325, -75.6312)

    this.shape_289 = new cjs.Shape()
    this.shape_289.graphics
      .lf(['#33CCFF', '#649BFF'], [0.412, 1], -53.3, -17.6, 27.9, -17.6)
      .s()
      .p(
        'AEPF6Ig4hKIgjgvInFpvIgFgKQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAAAAAABIBkCCIGCIUIAiAxIAcAnIABADQAAABAAAAQAAAAgBABQAAAAAAAAQAAABgBAAIgDABQgBAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBg',
      )
    this.shape_289.setTransform(271.675, -66.8333)

    this.shape_290 = new cjs.Shape()
    this.shape_290.graphics
      .lf(['#33CCFF', '#649BFF'], [0.412, 1], -59.6, -26.4, 21.6, -26.4)
      .s()
      .p(
        'ADSEiQgXgagVgcIgcglIldngIgDgHIABgCIADAAIADABIBOBiIEpGaIAaAlIAVAfIAAACIgBACIgCABIgCgCg',
      )
    this.shape_290.setTransform(278.025, -58.0083)

    this.shape_291 = new cjs.Shape()
    this.shape_291.graphics
      .lf(['#33CCFF', '#649BFF'], [0.412, 1], -66, -35.2, 15.2, -35.2)
      .s()
      .p(
        'ACUDKIgggjIgTgZIj1lSIgDgEIACgCIACAAIACABIA4BBIDREgIASAaIANAWIABABIgBACIgCAAIgBgBg',
      )
    this.shape_291.setTransform(284.375, -49.225)

    this.shape_292 = new cjs.Shape()
    this.shape_292.graphics
      .lf(['#33CCFF', '#649BFF'], [0.412, 1], -72.3, -44, 8.9, -44)
      .s()
      .p(
        'ABWByQgKgHgJgJIgMgOIiNjDIgBgCIABgBIABAAIACABIAjAgIB4CmQAFAIAEAIIAHAMIAAABIgBAAIAAABIgBgBg',
      )
    this.shape_292.setTransform(290.725, -40.425)

    this.shape_293 = new cjs.Shape()
    this.shape_293.graphics
      .lf(['#33CCFF', '#649BFF'], [0.412, 1], -78.7, -52.9, 2.5, -52.9)
      .s()
      .p(
        'AARAbQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBgBAAIglgzIAQAAIAfArQABABAAAAQAAABAAABQABAAAAABQAAAAAAABQgBABAAAAQAAABAAAAQgBABAAAAQAAABgBAAIgEABIgBAAg',
      )
    this.shape_293.setTransform(297.1155, -31.5095)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: []})
        .to({state: [{t: this.shape_260}]}, 72)
        .to({state: [{t: this.shape_261}]}, 1)
        .to({state: [{t: this.shape_262}]}, 1)
        .to({state: [{t: this.shape_263}]}, 1)
        .to({state: [{t: this.shape_264}]}, 1)
        .to({state: [{t: this.shape_265}]}, 1)
        .to({state: [{t: this.shape_266}]}, 1)
        .to({state: [{t: this.shape_267}]}, 1)
        .to({state: [{t: this.shape_268}]}, 1)
        .to({state: [{t: this.shape_269}]}, 1)
        .to({state: [{t: this.shape_270}]}, 1)
        .to({state: [{t: this.shape_271}]}, 1)
        .to({state: [{t: this.shape_272}]}, 1)
        .to({state: [{t: this.shape_273}]}, 1)
        .to({state: [{t: this.shape_274}]}, 1)
        .to({state: [{t: this.shape_275}]}, 1)
        .to({state: [{t: this.shape_276}]}, 1)
        .to({state: [{t: this.shape_277}]}, 1)
        .to({state: [{t: this.shape_278}]}, 1)
        .to({state: [{t: this.shape_279}]}, 1)
        .to({state: [{t: this.shape_280}]}, 1)
        .to({state: [{t: this.shape_281}]}, 1)
        .to({state: [{t: this.shape_282}]}, 1)
        .to({state: [{t: this.shape_283}]}, 1)
        .to({state: [{t: this.shape_284}]}, 1)
        .to({state: [{t: this.shape_285}]}, 1)
        .to({state: [{t: this.shape_286}]}, 1)
        .to({state: [{t: this.shape_287}]}, 1)
        .to({state: [{t: this.shape_287}]}, 29)
        .to({state: [{t: this.shape_288}]}, 1)
        .to({state: [{t: this.shape_289}]}, 1)
        .to({state: [{t: this.shape_290}]}, 1)
        .to({state: [{t: this.shape_291}]}, 1)
        .to({state: [{t: this.shape_292}]}, 1)
        .to({state: [{t: this.shape_293}]}, 1)
        .to({state: []}, 1)
        .wait(55),
    )

    // ligne
    this.shape_294 = new cjs.Shape()
    this.shape_294.graphics
      .lf(['#F8692A', '#4D96B0'], [0, 1], -4.1, 77.1, 188.2, 77.1)
      .s()
      .p(
        'AgmgcQgBgBAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQABAAAAAAIAEABIBJA9IAAANg',
      )
    this.shape_294.setTransform(72.125, -120.6125)

    this.shape_295 = new cjs.Shape()
    this.shape_295.graphics
      .lf(['#F8692A', '#4D96B0'], [0, 1], -7.9, 73.9, 184.4, 73.9)
      .s()
      .p('AhKg7IgEgEIAAgBIAAAAIAEgBQADgBADABIAGAEICKBzIADAJIAAABIgEACg')
    this.shape_295.setTransform(75.95, -117.4)

    this.shape_296 = new cjs.Shape()
    this.shape_296.graphics
      .lf(['#F8692A', '#4D96B0'], [0, 1], -11.8, 70.8, 180.5, 70.8)
      .s()
      .p(
        'AB1BhIgKgCIjai4IgGgGIAAgBIAAAAIAIABQADABAFADIAJAFIDJCqIAIANIABAAIAAAAg',
      )
    this.shape_296.setTransform(79.8, -114.25)

    this.shape_297 = new cjs.Shape()
    this.shape_297.graphics
      .lf(['#F8692A', '#4D96B0'], [0, 1], -15.6, 67.5, 176.7, 67.5)
      .s()
      .p('ACbCBIgOgGIkhjzIgHgGIAAgBIAAgBIABAAIAKAEIALAFIALAIIEKDgIAMAPIAAABg')
    this.shape_297.setTransform(83.625, -111.025)

    this.shape_298 = new cjs.Shape()
    this.shape_298.graphics
      .lf(['#F8692A', '#4D96B0'], [0, 1], -19.5, 64.3, 172.8, 64.3)
      .s()
      .p(
        'ADBCiIgTgLIlnktIgIgIIgBgBIAAgBIABAAIAAgBIABABIAMAGIAOAIQAHAEAHAGIFKEWIAQATIABAAIgBABg',
      )
    this.shape_298.setTransform(87.475, -107.825)

    this.shape_299 = new cjs.Shape()
    this.shape_299.graphics
      .lf(['#F8692A', '#4D96B0'], [0, 1], -23.3, 61.1, 169, 61.1)
      .s()
      .p(
        'ADoDCIgZgPImtloIgKgKIAAAAIAAgBIAAAAIABgBIABAAIAPAJIAQAKIASANIGJFLIAVAXIAAAAIAAABg',
      )
    this.shape_299.setTransform(91.3, -104.6)

    this.shape_300 = new cjs.Shape()
    this.shape_300.graphics
      .lf(['#F8692A', '#4D96B0'], [0, 1], -27.1, 57.9, 165.2, 57.9)
      .s()
      .p(
        'AENDiIgdgTInymjIgMgLIAAAAIAAgBIAAgBIABgBIABABIASALIATANIAUAPIHJGBIAZAZIAAABIAAABIgBABIgBgBg',
      )
    this.shape_300.setTransform(95.125, -101.375)

    this.shape_301 = new cjs.Shape()
    this.shape_301.graphics
      .lf(['#F8692A', '#4D96B0'], [0, 1], -31, 54.7, 161.3, 54.7)
      .s()
      .p(
        'AEzEDIgigYIo3ndIgOgNIgBgBIAAgBIABgBIABAAIABAAIAUAOIAWAPIAWARIIKG4IAdAcIABABIgBACIgBAAIgBAAg',
      )
    this.shape_301.setTransform(98.975, -98.15)

    this.shape_302 = new cjs.Shape()
    this.shape_302.graphics
      .lf(['#F8692A', '#4D96B0'], [0, 1], -34.8, 51.5, 157.5, 51.5)
      .s()
      .p(
        'AFZEjIgmgcIp+oYIgQgNIAAgCIAAgBIAAgBIABgBIACABIAXAQIAZASIAYATIJLHuIAgAgIABABIgBABIgBABIgBgBg',
      )
    this.shape_302.setTransform(102.8, -94.95)

    this.shape_303 = new cjs.Shape()
    this.shape_303.graphics
      .lf(['#F8692A', '#4D96B0'], [0, 1], -38.6, 48.2, 153.7, 48.2)
      .s()
      .p(
        'AF/FDIgrggIrDpTIgRgPIgBgBIAAgBIAAgBIABgBIACABIAaATIAbATIAcAWIKvJGIAAACIAAABIgBABIgCgBg',
      )
    this.shape_303.setTransform(106.625, -91.725)

    this.shape_304 = new cjs.Shape()
    this.shape_304.graphics
      .lf(['#F8692A', '#4D96B0'], [0, 1], -42.5, 45, 149.8, 45)
      .s()
      .p(
        'AGlFkIgwglIsJqNIgTgRIgBgBIAAgBIABgBIABgBIACABIAdAVIAdAWIAfAYILzKAIABABIgBACIgBAAIgCAAg',
      )
    this.shape_304.setTransform(110.475, -88.525)

    this.shape_305 = new cjs.Shape()
    this.shape_305.graphics
      .lf(['#F8692A', '#4D96B0'], [0, 1], -46.3, 41.8, 146, 41.8)
      .s()
      .p(
        'AHMGEIg2gpItPrIIgUgSIgBgBIAAgBIAAgBIACgBIACAAIAfAYIAhAYIAgAbIM5K4IAAACIAAACIgCABIgBgBg',
      )
    this.shape_305.setTransform(114.3, -85.3)

    this.shape_306 = new cjs.Shape()
    this.shape_306.graphics
      .lf(['#F8692A', '#4D96B0'], [0, 1], -50.1, 38.6, 142.2, 38.6)
      .s()
      .p(
        'AHyGkIvQswIgVgTIgBgCIAAAAIABgCIABgBIACABIAiAaIAjAbIAkAdIN8LyIABABIgBACIgCABIgBgBg',
      )
    this.shape_306.setTransform(118.15, -82.075)

    this.shape_307 = new cjs.Shape()
    this.shape_307.graphics
      .lf(['#F8692A', '#4D96B0'], [0, 1], -54, 35.4, 138.3, 35.4)
      .s()
      .p(
        'AIXHFIwZtvIgYgVIgBgCIAAAAIABgCIACgBIACABIAlAcIAmAeIAmAfIPAMrIABABIgBACIgCABIgCAAg',
      )
    this.shape_307.setTransform(121.975, -78.875)

    this.shape_308 = new cjs.Shape()
    this.shape_308.graphics
      .lf(['#F8692A', '#4D96B0'], [0, 1], -57.8, 32.2, 134.5, 32.2)
      .s()
      .p(
        'AI9HlIxjuuIgagWIgBgCIAAgBIABgCIABgBIADABIAnAgIApAfIAoAiIQFNjIABADIgBACIgCABIgCgBg',
      )
    this.shape_308.setTransform(125.8, -75.65)

    this.shape_309 = new cjs.Shape()
    this.shape_309.graphics
      .lf(['#F8692A', '#4D96B0'], [0, 1], -61.6, 29, 130.7, 29)
      .s()
      .p(
        'AJkIFIyvvtIgbgXIgBgCIAAgBIABgCQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIACABIArAiIArAiIAqAkIRJOdIACACIgCACIgCABIgBgBg',
      )
    this.shape_309.setTransform(129.65, -72.45)

    this.shape_310 = new cjs.Shape()
    this.shape_310.graphics
      .lf(['#F8692A', '#4D96B0'], [0, 1], -65.5, 25.7, 126.8, 25.7)
      .s()
      .p(
        'AKJImIz5wsIgcgZIgCgCIAAgBIABgCIACgBIADABIAtAkIAuAkIAuAmISNPXIABACIgBACIgCABIgDAAg',
      )
    this.shape_310.setTransform(133.475, -69.225)

    this.shape_311 = new cjs.Shape()
    this.shape_311.graphics
      .lf(['#F8692A', '#4D96B0'], [0, 1], -69.3, 22.5, 123, 22.5)
      .s()
      .p(
        'AKvJGI1DxrIgfgaIgBgCIAAgBIABgCIACgCIADABIAwAnIAwAnIAxAoITRQQIABACIAAADIgDABIgDgBg',
      )
    this.shape_311.setTransform(137.3, -66.025)

    this.shape_312 = new cjs.Shape()
    this.shape_312.graphics
      .lf(['#F8692A', '#4D96B0'], [0, 1], -73.1, 19.3, 119.2, 19.3)
      .s()
      .p(
        'ALVJmI2OyqIgggbQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAAAIABgDQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIADABIAzApIAzApIAzArIUVRJIABACIgBADQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgDgBg',
      )
    this.shape_312.setTransform(141.15, -62.775)

    this.shape_313 = new cjs.Shape()
    this.shape_313.graphics
      .lf(['#F8692A', '#4D96B0'], [0, 1], -77, 16.1, 115.3, 16.1)
      .s()
      .p(
        'AL7KHI3YzpIgigdQgBAAAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAIABgDQABgBAAAAQAAAAAAAAQABgBAAAAQAAAAABAAIADACIA1ArIA2AsIA2AtIVaSCIABACIgBADIgDACIgDgBg',
      )
    this.shape_313.setTransform(144.975, -59.575)

    this.shape_314 = new cjs.Shape()
    this.shape_314.graphics
      .lf(['#F8692A', '#4D96B0'], [0, 1], -80.8, 12.9, 111.5, 12.9)
      .s()
      .p(
        'AMiKnI4k0oIgkgeQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIABgDQAAAAABAAQAAAAAAgBQAAAAABAAQAAAAAAAAIAEABIA4AuIA4AuIA5AvIWeS7IABADIAAAEIgEABIgCgBg',
      )
    this.shape_314.setTransform(148.8, -56.35)

    this.shape_315 = new cjs.Shape()
    this.shape_315.graphics
      .lf(['#F8692A', '#4D96B0'], [0, 1], -84.6, 9.7, 107.7, 9.7)
      .s()
      .p(
        'ANILII5u1oIglgfQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIABgDQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAIADABIA7AwIA7AyIA7AwIXiT1QAAAAABABQAAAAAAAAQAAAAAAABQABAAAAABIgBADQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgCAAg',
      )
    this.shape_315.setTransform(152.65, -53.15)

    this.shape_316 = new cjs.Shape()
    this.shape_316.graphics
      .lf(['#F8692A', '#4D96B0'], [0, 1], -88.5, 6.4, 103.8, 6.4)
      .s()
      .p(
        'ANuLoI652mIgnghQAAgBgBAAQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAAAAAIAEACIA+AzIA9AzIA+AzIYnUuIABADIgBADQAAABgBAAQAAAAgBAAQAAABAAAAQgBAAAAAAIgDgBg',
      )
    this.shape_316.setTransform(156.475, -49.925)

    this.shape_317 = new cjs.Shape()
    this.shape_317.graphics
      .lf(['#F8692A', '#4D96B0'], [0, 1], -92.3, 3.2, 100, 3.2)
      .s()
      .p(
        'AOTMII8D3lIgogiQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQABAAAAAAIAEABIBAA2IBAA2IBBA1IZrVnQAAABAAAAQABAAAAAAQAAABAAAAQAAAAAAABIgBAEQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgEgBg',
      )
    this.shape_317.setTransform(160.325, -46.725)

    this.shape_318 = new cjs.Shape()
    this.shape_318.graphics
      .lf(['#F8692A', '#4D96B0'], [0, 1], -96.1, 0, 96.2, 0)
      .s()
      .p(
        'AO5MoI935IQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQABgBAAAAIAEACId4ZIQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAIgBAEQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAIgEgBg',
      )
    this.shape_318.setTransform(164.15, -43.5)

    this.shape_319 = new cjs.Shape()
    this.shape_319.graphics
      .lf(['#F8692A', '#4D96B0'], [0, 1], -90.4, 4.8, 101.9, 4.8)
      .s()
      .p(
        'AOAL4I7d3FIgogiQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAIAEACIA/A0IA/A0IA/A1IZJVKQAAAAAAAAQAAABABAAQAAAAAAABQAAAAAAABIgBAEIgDABIgEgBg',
      )
    this.shape_319.setTransform(158.4, -48.325)

    this.shape_320 = new cjs.Shape()
    this.shape_320.graphics
      .lf(['#F8692A', '#4D96B0'], [0, 1], -78.9, 14.5, 113.4, 14.5)
      .s()
      .p(
        'AMPKXI3/0IIgjgeQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAIABgDQAAgBABAAQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABIA3AsIA3AtIA3AuIV7SfQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAAAIgBAEIgDABIgCgBg',
      )
    this.shape_320.setTransform(146.9, -57.975)

    this.shape_321 = new cjs.Shape()
    this.shape_321.graphics
      .lf(['#F8692A', '#4D96B0'], [0, 1], -67.4, 24.1, 124.9, 24.1)
      .s()
      .p(
        'AKcI2I0exLIgegaIgBgCIAAgBIABgCQAAgBAAAAQABAAAAAAQAAgBAAAAQABAAAAAAIADACIAvAlIAuAmIAvAnISwPzIABACIgBADIgCABIgDgBg',
      )
    this.shape_321.setTransform(135.4, -67.625)

    this.shape_322 = new cjs.Shape()
    this.shape_322.graphics
      .lf(['#F8692A', '#4D96B0'], [0, 1], -55.9, 33.8, 136.4, 33.8)
      .s()
      .p(
        'AIrHVIw/uPIgZgVIgBgCIAAgBIABgCIABgBIADABIAmAeIAnAfIAoAgIPiNIIABABIgBACIgBABIgCAAg',
      )
    this.shape_322.setTransform(123.9, -77.25)

    this.shape_323 = new cjs.Shape()
    this.shape_323.graphics
      .lf(['#F8692A', '#4D96B0'], [0, 1], -44.4, 43.4, 147.9, 43.4)
      .s()
      .p(
        'AG4F0IterRIgUgSIgBgBIAAgBIABgBIABgBIACABIAeAWIAfAXIAgAaIMVKcIABABIAAACIgCAAIgCAAg',
      )
    this.shape_323.setTransform(112.375, -86.925)

    this.shape_324 = new cjs.Shape()
    this.shape_324.graphics
      .lf(['#F8692A', '#4D96B0'], [0, 1], -32.9, 53.1, 159.4, 53.1)
      .s()
      .p(
        'AFGETIgkgaIpbn7IgOgMIgBgCIAAgBIABgBIABAAIABAAIAWAQQALAGAMAKIAYASIIqHTIAeAdIABABIAAABIgBABIgCAAg',
      )
    this.shape_324.setTransform(100.875, -96.55)

    this.shape_325 = new cjs.Shape()
    this.shape_325.graphics
      .lf(['#F8692A', '#4D96B0'], [0, 1], -21.4, 62.7, 170.9, 62.7)
      .s()
      .p(
        'ADUCyIgVgNImKlLIgJgJIgBAAIAAgBIABAAIAAgBIABABIAOAHIAPAJQAIAFAHAHIFqEwIATAUIAAABIgBABIgBAAg',
      )
    this.shape_325.setTransform(89.375, -106.2)

    this.shape_326 = new cjs.Shape()
    this.shape_326.graphics
      .lf(['#F8692A', '#4D96B0'], [0, 1], -9.9, 72.4, 182.4, 72.4)
      .s()
      .p('ABbBRIi4ibIgFgFIAAgBIABAAIAAAAIAFAAIAHACIAIAFICqCOIAGALIAAABg')
    this.shape_326.setTransform(77.875, -115.85)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: []})
        .to({state: [{t: this.shape_294}]}, 100)
        .to({state: [{t: this.shape_295}]}, 1)
        .to({state: [{t: this.shape_296}]}, 1)
        .to({state: [{t: this.shape_297}]}, 1)
        .to({state: [{t: this.shape_298}]}, 1)
        .to({state: [{t: this.shape_299}]}, 1)
        .to({state: [{t: this.shape_300}]}, 1)
        .to({state: [{t: this.shape_301}]}, 1)
        .to({state: [{t: this.shape_302}]}, 1)
        .to({state: [{t: this.shape_303}]}, 1)
        .to({state: [{t: this.shape_304}]}, 1)
        .to({state: [{t: this.shape_305}]}, 1)
        .to({state: [{t: this.shape_306}]}, 1)
        .to({state: [{t: this.shape_307}]}, 1)
        .to({state: [{t: this.shape_308}]}, 1)
        .to({state: [{t: this.shape_309}]}, 1)
        .to({state: [{t: this.shape_310}]}, 1)
        .to({state: [{t: this.shape_311}]}, 1)
        .to({state: [{t: this.shape_312}]}, 1)
        .to({state: [{t: this.shape_313}]}, 1)
        .to({state: [{t: this.shape_314}]}, 1)
        .to({state: [{t: this.shape_315}]}, 1)
        .to({state: [{t: this.shape_316}]}, 1)
        .to({state: [{t: this.shape_317}]}, 1)
        .to({state: [{t: this.shape_318}]}, 1)
        .to({state: [{t: this.shape_318}]}, 49)
        .to({state: [{t: this.shape_319}]}, 1)
        .to({state: [{t: this.shape_315}]}, 1)
        .to({state: [{t: this.shape_320}]}, 1)
        .to({state: [{t: this.shape_312}]}, 1)
        .to({state: [{t: this.shape_321}]}, 1)
        .to({state: [{t: this.shape_309}]}, 1)
        .to({state: [{t: this.shape_322}]}, 1)
        .to({state: [{t: this.shape_306}]}, 1)
        .to({state: [{t: this.shape_323}]}, 1)
        .to({state: [{t: this.shape_303}]}, 1)
        .to({state: [{t: this.shape_324}]}, 1)
        .to({state: [{t: this.shape_300}]}, 1)
        .to({state: [{t: this.shape_325}]}, 1)
        .to({state: [{t: this.shape_297}]}, 1)
        .to({state: [{t: this.shape_326}]}, 1)
        .to({state: [{t: this.shape_294}]}, 1)
        .wait(1),
    )

    // ligne
    this.shape_327 = new cjs.Shape()
    this.shape_327.graphics
      .lf(['#E93A45', '#7278AD'], [0, 1], -4.2, 0.9, 201.2, 0.9)
      .s()
      .p('AgYAFIAAgJIAxAAIAAAJg')
    this.shape_327.setTransform(105.875, -29.025)

    this.shape_328 = new cjs.Shape()
    this.shape_328.graphics
      .lf(['#E93A45', '#7278AD'], [0, 1], -9.7, 0.8, 195.7, 0.8)
      .s()
      .p('ABPAGIgBgBIACAAIAAABgAg9AEIgSgIIAAgBIAAABICLABIASAIg')
    this.shape_328.setTransform(111.4, -28.975)

    this.shape_329 = new cjs.Shape()
    this.shape_329.graphics
      .lf(['#E93A45', '#7278AD'], [0, 1], -15.2, 0.8, 190.2, 0.8)
      .s()
      .p('ACGAGIgEgBIAFAAIAAABIAAAAgAhiADIgkgHIAAgBIAAABIDmACIAiAHg')
    this.shape_329.setTransform(116.925, -28.925)

    this.shape_330 = new cjs.Shape()
    this.shape_330.graphics
      .lf(['#E93A45', '#7278AD'], [0, 1], -20.7, 0.7, 184.7, 0.7)
      .s()
      .p(
        'AC9AHIgKgCIALAAIAAABIAAAAIAAABgAiGACIg0gGIE+ADIAvAGgAi9gEIAAgBIADABgAi9gFIAAgBIAAABg',
      )
    this.shape_330.setTransform(122.45, -28.875)

    this.shape_331 = new cjs.Shape()
    this.shape_331.graphics
      .lf(['#E93A45', '#7278AD'], [0, 1], -26.2, 0.7, 179.2, 0.7)
      .s()
      .p(
        'AD0AHIgUgCIAVAAIAAABIAAABIAAAAgAisABIg+gFIGSAEIA4AFgAj0gEIAAgBIAKABgAj0gFIAAgBIAAABg',
      )
    this.shape_331.setTransform(127.95, -28.825)

    this.shape_332 = new cjs.Shape()
    this.shape_332.graphics
      .lf(['#E93A45', '#7278AD'], [0, 1], -31.8, 0.6, 173.6, 0.6)
      .s()
      .p(
        'AErAIIgogEIApABIAAAAIABABIAAAAIAAABIgBAAIAAABgAjQAAIg6gEIHVAEIA4AEgAkrgEIgBgDIAiADg',
      )
    this.shape_332.setTransform(133.475, -28.75)

    this.shape_333 = new cjs.Shape()
    this.shape_333.graphics
      .lf(['#E93A45', '#7278AD'], [0, 1], -37.3, 0.6, 168.1, 0.6)
      .s()
      .p(
        'AFhAIIg+gEIA/AAIABABIAAAAIABABIgBABIAAABgAj1AAIg3gEIIaAFIA1ADgAljgEIAAgDIA3ADg',
      )
    this.shape_333.setTransform(139, -28.7)

    this.shape_334 = new cjs.Shape()
    this.shape_334.graphics
      .lf(['#E93A45', '#7278AD'], [0, 1], -42.8, 0.5, 162.6, 0.5)
      .s()
      .p('AFEAEIBWABIAAAAIABAAIAAABIAAABIAAAAIAAABIgBAAgAmagEIAAgEIBMAFg')
    this.shape_334.setTransform(144.525, -28.65)

    this.shape_335 = new cjs.Shape()
    this.shape_335.graphics
      .lf(['#E93A45', '#7278AD'], [0, 1], -48.3, 0.5, 157.1, 0.5)
      .s()
      .p('AHQAJIh7gGIB7ABIABABIABAAIABACIgBABIgBABIAAAAIgBAAgAnRgEIAAgEIBwAFg')
    this.shape_335.setTransform(150.05, -28.6)

    this.shape_336 = new cjs.Shape()
    this.shape_336.graphics
      .lf(['#E93A45', '#7278AD'], [0, 1], -53.9, 0.4, 151.5, 0.4)
      .s()
      .p(
        'AIHAJIi2gGIC3ACIABAAIAAABIAAAAIABABIgBABIAAABIgBAAIgBAAgAoIgEIgBgFIClAHg',
      )
    this.shape_336.setTransform(155.575, -28.55)

    this.shape_337 = new cjs.Shape()
    this.shape_337.graphics
      .lf(['#E93A45', '#7278AD'], [0, 1], -59.4, 0.4, 146, 0.4)
      .s()
      .p('AF9AEIu9gIIAAgFIC3AFIPIAIIABABIAAAAIABACIgBACIgBABIgBAAg')
    this.shape_337.setTransform(161.075, -28.5)

    this.shape_338 = new cjs.Shape()
    this.shape_338.graphics
      .lf(['#E93A45', '#7278AD'], [0, 1], -64.9, 0.3, 140.5, 0.3)
      .s()
      .p('AGhAFIwYgJIAAgGIDJAGIQkAJIABAAIAAAAIABAAIAAACIAAACIgBAAIAAABIgCABg')
    this.shape_338.setTransform(166.6, -28.45)

    this.shape_339 = new cjs.Shape()
    this.shape_339.graphics
      .lf(['#E93A45', '#7278AD'], [0, 1], -70.4, 0.3, 135, 0.3)
      .s()
      .p(
        'AHFAGIxzgKIAAgGIDbAFIR/AJIABAAIABABIAAABIABAAIAAACIAAABIgBABIgBAAIgBABg',
      )
    this.shape_339.setTransform(172.125, -28.4)

    this.shape_340 = new cjs.Shape()
    this.shape_340.graphics
      .lf(['#E93A45', '#7278AD'], [0, 1], -75.9, 0.2, 129.5, 0.2)
      .s()
      .p('ArlgEIAAgHIXJAPIABABIABAAIABADIgBACIAAABIgBAAIgCABg')
    this.shape_340.setTransform(177.65, -28.35)

    this.shape_341 = new cjs.Shape()
    this.shape_341.graphics
      .lf(['#E93A45', '#7278AD'], [0, 1], -81.5, 0.2, 123.9, 0.2)
      .s()
      .p('AsdgDIAAgIIY3APIACABIAAABIABAAIABACIgBADIgBAAIgBABIgBAAg')
    this.shape_341.setTransform(183.175, -28.325)

    this.shape_342 = new cjs.Shape()
    this.shape_342.graphics
      .lf(['#E93A45', '#7278AD'], [0, 1], -87, 0.1, 118.4, 0.1)
      .s()
      .p('AtUgDIAAgJIalAQIABAAIABABIABABIAAAAIABADIgBACIAAAAIgCABIgBABg')
    this.shape_342.setTransform(188.675, -28.275)

    this.shape_343 = new cjs.Shape()
    this.shape_343.graphics
      .lf(['#E93A45', '#7278AD'], [0, 1], -92.5, 0.1, 112.9, 0.1)
      .s()
      .p('AuLgDIAAgJIcTAQIABAAIACABIAAABIAAAAIABADIgBACIAAABIgBABIgCAAg')
    this.shape_343.setTransform(194.2, -28.225)

    this.shape_344 = new cjs.Shape()
    this.shape_344.graphics
      .lf(['#E93A45', '#7278AD'], [0, 1], -98, 0, 107.4, 0)
      .s()
      .p('AvCgDIAAgKIeBARIABAAIABABIABABIAAAAIABADIgBADIAAAAIgCABIgBABg')
    this.shape_344.setTransform(199.725, -28.175)

    this.shape_345 = new cjs.Shape()
    this.shape_345.graphics
      .lf(['#E93A45', '#7278AD'], [0, 1], -103.5, 0, 101.9, 0)
      .s()
      .p('Av5gDIAAgKIfvARIABAAIABABIABABIAAAAIABADIgBADIAAABIgBABIgCAAg')
    this.shape_345.setTransform(205.25, -28.125)

    this.shape_346 = new cjs.Shape()
    this.shape_346.graphics
      .lf(['#E93A45', '#7278AD'], [0, 1], -111.6, 0, 93.8, 0)
      .s()
      .p('AOlANI9GgQIgIgJIdGARIAJAAIACABIAAAAIABAAIABADIgBADIgBAAIgBABIgCAAg')
    this.shape_346.setTransform(213.325, -28.1)

    this.shape_347 = new cjs.Shape()
    this.shape_347.graphics
      .lf(['#E93A45', '#7278AD'], [0, 1], -119.7, -0.1, 85.7, -0.1)
      .s()
      .p('AtJgDIgPgIIadAQIAQAAIACABIAAAAIABABIABACIgBABIgBABIgBAAIgCABI6dgPg')
    this.shape_347.setTransform(221.425, -28.05)

    this.shape_348 = new cjs.Shape()
    this.shape_348.graphics
      .lf(['#E93A45', '#7278AD'], [0, 1], -127.8, -0.1, 77.6, -0.1)
      .s()
      .p('AMDALI3zgNIgXgIIXzAQIAYAAIACAAIAAABIABAAIABABIgBACIgBAAIgBABIgCAAg')
    this.shape_348.setTransform(229.525, -28.025)

    this.shape_349 = new cjs.Shape()
    this.shape_349.graphics
      .lf(['#E93A45', '#7278AD'], [0, 1], -135.9, -0.1, 69.5, -0.1)
      .s()
      .p('AKyAJI1JgLIgfgHIVKAPIAeAAIACABIACAAIABABIgBABIAAAAIgCAAIgBABIgBgBg')
    this.shape_349.setTransform(237.6, -27.9875)

    this.shape_350 = new cjs.Shape()
    this.shape_350.graphics
      .lf(['#E93A45', '#7278AD'], [0, 1], -144, -0.2, 61.4, -0.2)
      .s()
      .p('AJhAJIyhgKIglgHISgAPIAmAAIACAAIACAAIABABIgBAAIAAAAIgCABIgCAAg')
    this.shape_350.setTransform(245.7, -27.95)

    this.shape_351 = new cjs.Shape()
    this.shape_351.graphics
      .lf(['#E93A45', '#7278AD'], [0, 1], -149.7, -0.2, 55.7, -0.2)
      .s()
      .p('AH6AHIgEAAIAIAAIgEAAgAnQgBIgtgFIENAGIhfAAIiBgBg')
    this.shape_351.setTransform(251.4625, -27.925)

    this.shape_352 = new cjs.Shape()
    this.shape_352.graphics
      .lf(['#E93A45', '#7278AD'], [0, 1], -160.1, -0.3, 45.3, -0.3)
      .s()
      .p(
        'AHAAHIg1gBIhjgCICYABIACAAIABAAIABABIgBAAIAAAAIgBABIgCAAgAmOgCIg1gEID8AFIghAAIimgBg',
      )
    this.shape_352.setTransform(261.85, -27.8)

    this.shape_353 = new cjs.Shape()
    this.shape_353.graphics
      .lf(['#E93A45', '#7278AD'], [0, 1], -168.2, -0.4, 37.2, -0.4)
      .s()
      .p(
        'AFvAGIg9AAIi0gEIDxABIACABIABAAIABABIgBABIAAAAIgBAAIgBABIgBgBgAk2gCIg8gEIC8AFIiAgBg',
      )
    this.shape_353.setTransform(269.95, -27.6875)

    this.shape_354 = new cjs.Shape()
    this.shape_354.graphics
      .lf(['#E93A45', '#7278AD'], [0, 1], -177.2, -0.6, 28.2, -0.6)
      .s()
      .p(
        'AEVAGIhEgBIj+gFIFDABIACABIABAAIAAAAIABACIgBABIAAAAIgCABIgCAAgAjmgDIgzgCIBlADIgygBg',
      )
    this.shape_354.setTransform(278.9, -27.55)

    this.shape_355 = new cjs.Shape()
    this.shape_355.graphics
      .lf(['#E93A45', '#7278AD'], [0, 1], -187.2, -0.7, 18.2, -0.7)
      .s()
      .p('ABkAFIkYgJIATAAIFSADIACABIABAAIAAAAIABACIgBACIAAAAIgCABIgCAAIhMAAg')
    this.shape_355.setTransform(288.975, -27.3625)

    this.shape_356 = new cjs.Shape()
    this.shape_356.graphics
      .lf(['#E93A45', '#7278AD'], [0, 1], -192.5, -0.8, 12.9, -0.8)
      .s()
      .p('AB8AFIhUAAIiogKIBTACICqABIACABIAAAAIABABIABACIgBACIgBAAIgBABIgCAAg')
    this.shape_356.setTransform(294.225, -27.35)

    this.shape_357 = new cjs.Shape()
    this.shape_357.graphics
      .lf(['#E93A45', '#7278AD'], [0, 1], -200.6, -0.9, 4.8, -0.9)
      .s()
      .p('AgvAFIAAgJIBaAAIABAAIACABIABABIAAAAIABACIgBADIAAABIgCABIgCAAg')
    this.shape_357.setTransform(302.3, -27.2375)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: []})
        .to({state: [{t: this.shape_327}]}, 83)
        .to({state: [{t: this.shape_328}]}, 1)
        .to({state: [{t: this.shape_329}]}, 1)
        .to({state: [{t: this.shape_330}]}, 1)
        .to({state: [{t: this.shape_331}]}, 1)
        .to({state: [{t: this.shape_332}]}, 1)
        .to({state: [{t: this.shape_333}]}, 1)
        .to({state: [{t: this.shape_334}]}, 1)
        .to({state: [{t: this.shape_335}]}, 1)
        .to({state: [{t: this.shape_336}]}, 1)
        .to({state: [{t: this.shape_337}]}, 1)
        .to({state: [{t: this.shape_338}]}, 1)
        .to({state: [{t: this.shape_339}]}, 1)
        .to({state: [{t: this.shape_340}]}, 1)
        .to({state: [{t: this.shape_341}]}, 1)
        .to({state: [{t: this.shape_342}]}, 1)
        .to({state: [{t: this.shape_343}]}, 1)
        .to({state: [{t: this.shape_344}]}, 1)
        .to({state: [{t: this.shape_345}]}, 1)
        .to({state: [{t: this.shape_345}]}, 55)
        .to({state: [{t: this.shape_346}]}, 1)
        .to({state: [{t: this.shape_347}]}, 1)
        .to({state: [{t: this.shape_348}]}, 1)
        .to({state: [{t: this.shape_349}]}, 1)
        .to({state: [{t: this.shape_350}]}, 1)
        .to({state: [{t: this.shape_351}]}, 1)
        .to({state: [{t: this.shape_352}]}, 1)
        .to({state: [{t: this.shape_353}]}, 1)
        .to({state: [{t: this.shape_354}]}, 1)
        .to({state: [{t: this.shape_355}]}, 1)
        .to({state: [{t: this.shape_356}]}, 1)
        .to({state: [{t: this.shape_357}]}, 1)
        .to({state: []}, 1)
        .wait(21),
    )

    // ligne
    this.shape_358 = new cjs.Shape()
    this.shape_358.graphics
      .lf(['#F8692A', '#E93A45'], [0, 1], -970.9, -45.4, 2.4, -45.4)
      .s()
      .p('AAKAtIgehZIAKAAIAgBZg')
    this.shape_358.setTransform(100.15, -34.85)

    this.shape_359 = new cjs.Shape()
    this.shape_359.graphics
      .lf(['#F8692A', '#E93A45'], [0, 1], -970.3, -43.8, 3, -43.8)
      .s()
      .p('AAaA9IgLgEIgph0IAAgBIABAAIABAAIABAAIAJAEIApB1g')
    this.shape_359.setTransform(99.6, -36.425)

    this.shape_360 = new cjs.Shape()
    this.shape_360.graphics
      .lf(['#F8692A', '#E93A45'], [0, 1], -969.7, -42.2, 3.6, -42.2)
      .s()
      .p('AAfBNIgMgHIgyiQIAAAAIAAgBIABAAIABAAIABAAIAKAGIAzCSg')
    this.shape_360.setTransform(99.0375, -38)

    this.shape_361 = new cjs.Shape()
    this.shape_361.graphics
      .lf(['#F8692A', '#E93A45'], [0, 1], -969.2, -40.6, 4.1, -40.6)
      .s()
      .p('AAkBcIgMgKIg9isIAAgBIABAAIACAAIABAAIAKAKIA9Ctg')
    this.shape_361.setTransform(98.475, -39.575)

    this.shape_362 = new cjs.Shape()
    this.shape_362.graphics
      .lf(['#F8692A', '#E93A45'], [0, 1], -968.6, -39.1, 4.7, -39.1)
      .s()
      .p('AApBsIgNgNIhHjIIAAgBIAAgBIACAAIABAAIABAAIAMANIBHDKg')
    this.shape_362.setTransform(97.925, -41.15)

    this.shape_363 = new cjs.Shape()
    this.shape_363.graphics
      .lf(['#F8692A', '#E93A45'], [0, 1], -968.1, -37.5, 5.2, -37.5)
      .s()
      .p('AAuB8IgOgRIhQjkIAAgBIABgBIACAAIABABIAMAQIBRDmg')
    this.shape_363.setTransform(97.375, -42.725)

    this.shape_364 = new cjs.Shape()
    this.shape_364.graphics
      .lf(['#F8692A', '#E93A45'], [0, 1], -967.5, -35.9, 5.8, -35.9)
      .s()
      .p('AA0CMIgPgUIhbkBIAAAAIAAgBIACAAIABAAIACAAIANATIBbEDg')
    this.shape_364.setTransform(96.8125, -44.3)

    this.shape_365 = new cjs.Shape()
    this.shape_365.graphics
      .lf(['#F8692A', '#E93A45'], [0, 1], -967, -34.3, 6.3, -34.3)
      .s()
      .p('AA5CbIgQgXIhkkcIAAgBIAAgBIABAAIACAAIABABIAOAWIBlEeg')
    this.shape_365.setTransform(96.2625, -45.8875)

    this.shape_366 = new cjs.Shape()
    this.shape_366.graphics
      .lf(['#F8692A', '#E93A45'], [0, 1], -966.4, -32.7, 6.9, -32.7)
      .s()
      .p('AA+CrIgRgaIhuk4IAAgBIAAgBIACgBIABAAIACABIAOAZIBwE7g')
    this.shape_366.setTransform(95.7125, -47.4625)

    this.shape_367 = new cjs.Shape()
    this.shape_367.graphics
      .lf(['#F8692A', '#E93A45'], [0, 1], -965.9, -31.2, 7.4, -31.2)
      .s()
      .p('ABDC7IgRgeIh4lUIAAgBIAAgBIABgBIACAAIACABIAPAdIB6FXg')
    this.shape_367.setTransform(95.15, -49.0375)

    this.shape_368 = new cjs.Shape()
    this.shape_368.graphics
      .lf(['#F8692A', '#E93A45'], [0, 1], -965.3, -29.6, 8, -29.6)
      .s()
      .p('ABJDLIgTghIiClwIAAgCIAAAAIACgBIACAAIACABIAQAfICDF0g')
    this.shape_368.setTransform(94.5875, -50.6125)

    this.shape_369 = new cjs.Shape()
    this.shape_369.graphics
      .lf(['#F8692A', '#E93A45'], [0, 1], -964.7, -28, 8.6, -28)
      .s()
      .p('ABODaIgTgkIiMmMIAAgCIAAAAIACgBIACAAIABABIARAjICOGPg')
    this.shape_369.setTransform(94.0375, -52.1875)

    this.shape_370 = new cjs.Shape()
    this.shape_370.graphics
      .lf(['#F8692A', '#E93A45'], [0, 1], -964.2, -26.4, 9.1, -26.4)
      .s()
      .p('ABTDqIgUgnIiWmoIAAgCIAAgBIACgBIACAAIACACIASAlICXGsg')
    this.shape_370.setTransform(93.4875, -53.7625)

    this.shape_371 = new cjs.Shape()
    this.shape_371.graphics
      .lf(['#F8692A', '#E93A45'], [0, 1], -963.6, -24.9, 9.7, -24.9)
      .s()
      .p('ABYD6IgVgrIifnEIAAgCIAAgBIACgBIACAAIACACIASApICiHIg')
    this.shape_371.setTransform(92.9375, -55.3375)

    this.shape_372 = new cjs.Shape()
    this.shape_372.graphics
      .lf(['#F8692A', '#E93A45'], [0, 1], -963.1, -23.3, 10.2, -23.3)
      .s()
      .p('ABdEKIgVguIiqngIAAgCIAAgBIACgBIADAAIABABIAUAsICrHlg')
    this.shape_372.setTransform(92.3625, -56.9125)

    this.shape_373 = new cjs.Shape()
    this.shape_373.graphics
      .lf(['#F8692A', '#E93A45'], [0, 1], -962.5, -21.7, 10.8, -21.7)
      .s()
      .p('ABiEZIgWgxIi0n8IAAgCIAAgBIACgBIADAAIACABIAUAwIC2IAg')
    this.shape_373.setTransform(91.8125, -58.4875)

    this.shape_374 = new cjs.Shape()
    this.shape_374.graphics
      .lf(['#F8692A', '#E93A45'], [0, 1], -962, -20.1, 11.3, -20.1)
      .s()
      .p('ABnEpIgXg0Ii9oYIAAgDIAAAAIACgCIADAAIACACIAVAyIC/Idg')
    this.shape_374.setTransform(91.2625, -60.0625)

    this.shape_375 = new cjs.Shape()
    this.shape_375.graphics
      .lf(['#F8692A', '#E93A45'], [0, 1], -961.4, -18.6, 11.9, -18.6)
      .s()
      .p('ABsE5IgXg4IjIo0IAAgDIAAAAIACgCIADAAIACACIAWA2IDKI5g')
    this.shape_375.setTransform(90.7125, -61.6375)

    this.shape_376 = new cjs.Shape()
    this.shape_376.graphics
      .lf(['#F8692A', '#E93A45'], [0, 1], -960.9, -17, 12.4, -17)
      .s()
      .p(
        'AByFJIgZg8IjRpQQAAAAAAgBQgBAAAAAAQAAgBABAAQAAAAAAAAIAAgBIACgBIADAAIACACIAXA4IDUJWg',
      )
    this.shape_376.setTransform(90.15, -63.2125)

    this.shape_377 = new cjs.Shape()
    this.shape_377.graphics
      .lf(['#F8692A', '#E93A45'], [0, 1], -960.3, -15.4, 13, -15.4)
      .s()
      .p('AB3FYIgZg+IjcpsIAAgDIADgCIADAAIACACID1Ktg')
    this.shape_377.setTransform(89.5875, -64.7875)

    this.shape_378 = new cjs.Shape()
    this.shape_378.graphics
      .lf(['#F8692A', '#E93A45'], [0, 1], -959.7, -13.8, 13.6, -13.8)
      .s()
      .p('AB8FoIj/rKIAAgDIACgCIAEAAIACACIEALNg')
    this.shape_378.setTransform(89.0375, -66.3625)

    this.shape_379 = new cjs.Shape()
    this.shape_379.graphics
      .lf(['#F8692A', '#E93A45'], [0, 1], -959.2, -12.3, 14.1, -12.3)
      .s()
      .p('ACBF4IkKrpIAAgEIADgBQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAABIACACIELLsg')
    this.shape_379.setTransform(88.4875, -67.95)

    this.shape_380 = new cjs.Shape()
    this.shape_380.graphics
      .lf(['#F8692A', '#E93A45'], [0, 1], -958.6, -10.7, 14.7, -10.7)
      .s()
      .p(
        'ACHGIIkVsJQAAAAgBgBQAAAAAAgBQAAAAAAAAQABgBAAAAIACgCQABAAAAgBQABAAAAAAQABAAAAAAQAAABABAAIACACIEWMMg',
      )
    this.shape_380.setTransform(87.925, -69.525)

    this.shape_381 = new cjs.Shape()
    this.shape_381.graphics
      .lf(['#F8692A', '#E93A45'], [0, 1], -958.1, -9.1, 15.2, -9.1)
      .s()
      .p(
        'ACMGYIkgsoQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAIAAgBIADgCQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAIADADIEgMrg',
      )
    this.shape_381.setTransform(87.375, -71.1)

    this.shape_382 = new cjs.Shape()
    this.shape_382.graphics
      .lf(['#F8692A', '#E93A45'], [0, 1], -957.5, -7.5, 15.8, -7.5)
      .s()
      .p(
        'ACRGnIkqtHQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAIAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAIACADIEsNKg',
      )
    this.shape_382.setTransform(86.825, -72.675)

    this.shape_383 = new cjs.Shape()
    this.shape_383.graphics
      .lf(['#F8692A', '#E93A45'], [0, 1], -957, -6, 16.3, -6)
      .s()
      .p(
        'ACWG3Ik1tnIAAgDQAAAAAAgBQABAAAAgBQABAAAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABABIACACIE2Nqg',
      )
    this.shape_383.setTransform(86.2625, -74.25)

    this.shape_384 = new cjs.Shape()
    this.shape_384.graphics
      .lf(['#F8692A', '#E93A45'], [0, 1], -956.4, -4.4, 16.9, -4.4)
      .s()
      .p(
        'ACcHHIlBuGQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABABAAAAIADADIFBOJg',
      )
    this.shape_384.setTransform(85.7, -75.825)

    this.shape_385 = new cjs.Shape()
    this.shape_385.graphics
      .lf(['#F8692A', '#E93A45'], [0, 1], -955.9, -2.8, 17.4, -2.8)
      .s()
      .p(
        'ACgHXIlKumQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAAAIADADIFMOpg',
      )
    this.shape_385.setTransform(85.15, -77.4)

    this.shape_386 = new cjs.Shape()
    this.shape_386.graphics
      .lf(['#F8692A', '#E93A45'], [0, 1], -955.1, -0.8, 18.2, -0.8)
      .s()
      .p(
        'ACZHCIk8t8QAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAIADADIE9OAg',
      )
    this.shape_386.setTransform(84.425, -79.425)

    this.shape_387 = new cjs.Shape()
    this.shape_387.graphics
      .lf(['#F8692A', '#E93A45'], [0, 1], -954.4, 1.2, 18.9, 1.2)
      .s()
      .p(
        'ACSGuIkutUQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABgBQAAAAABAAQAAAAAAAAQABgBABAAQAAAAABAAQAAAAABAAQAAAAABABIACACIEvNYg',
      )
    this.shape_387.setTransform(83.7, -81.45)

    this.shape_388 = new cjs.Shape()
    this.shape_388.graphics
      .lf(['#F8692A', '#E93A45'], [0, 1], -953.7, 3.2, 19.6, 3.2)
      .s()
      .p(
        'ACLGaIkgssQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAQABAAABgBQAAAAABAAQAAAAABAAQAAABABAAIACADIEhMvg',
      )
    this.shape_388.setTransform(83, -83.475)

    this.shape_389 = new cjs.Shape()
    this.shape_389.graphics
      .lf(['#F8692A', '#E93A45'], [0, 1], -953, 5.3, 20.3, 5.3)
      .s()
      .p(
        'ACEGGIkRsEQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAIACADIETMHg',
      )
    this.shape_389.setTransform(82.275, -85.5)

    this.shape_390 = new cjs.Shape()
    this.shape_390.graphics
      .lf(['#F8692A', '#E93A45'], [0, 1], -952.3, 7.3, 21, 7.3)
      .s()
      .p(
        'AB8FxIkCraQAAgBAAAAQgBgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAAAIADADIEELeg',
      )
    this.shape_390.setTransform(81.55, -87.525)

    this.shape_391 = new cjs.Shape()
    this.shape_391.graphics
      .lf(['#F8692A', '#E93A45'], [0, 1], -951.5, 9.3, 21.8, 9.3)
      .s()
      .p(
        'AB1FdIj0qyQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAABIADACID1K2g',
      )
    this.shape_391.setTransform(80.825, -89.55)

    this.shape_392 = new cjs.Shape()
    this.shape_392.graphics
      .lf(['#F8692A', '#E93A45'], [0, 1], -950.8, 11.3, 22.5, 11.3)
      .s()
      .p(
        'ABuFJIjmqKQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABABAAAAIADADIDnKNg',
      )
    this.shape_392.setTransform(80.125, -91.575)

    this.shape_393 = new cjs.Shape()
    this.shape_393.graphics
      .lf(['#F8692A', '#E93A45'], [0, 1], -950.1, 13.4, 23.2, 13.4)
      .s()
      .p(
        'ABnE1IjYpiQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQABAAABAAQAAAAABAAQAAAAABAAQAAAAABAAIACADIDZJlg',
      )
    this.shape_393.setTransform(79.4, -93.6)

    this.shape_394 = new cjs.Shape()
    this.shape_394.graphics
      .lf(['#F8692A', '#E93A45'], [0, 1], -949.4, 15.4, 23.9, 15.4)
      .s()
      .p(
        'ABgEgIjJo4QgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAIACADIDLI8g',
      )
    this.shape_394.setTransform(78.675, -95.625)

    this.shape_395 = new cjs.Shape()
    this.shape_395.graphics
      .lf(['#F8692A', '#E93A45'], [0, 1], -948.7, 17.4, 24.6, 17.4)
      .s()
      .p(
        'ABYEMIi6oQQAAgBAAAAQgBgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABAAQAAgBABAAQABAAAAAAQABAAAAAAQABAAAAABIADACIC8IUg',
      )
    this.shape_395.setTransform(77.95, -97.65)

    this.shape_396 = new cjs.Shape()
    this.shape_396.graphics
      .lf(['#F8692A', '#E93A45'], [0, 1], -948, 19.4, 25.3, 19.4)
      .s()
      .p(
        'ABSD4IitnoQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABgBQABAAAAAAQABAAAAAAQABABAAAAIADADICtHrg',
      )
    this.shape_396.setTransform(77.25, -99.675)

    this.shape_397 = new cjs.Shape()
    this.shape_397.graphics
      .lf(['#F8692A', '#E93A45'], [0, 1], -947.2, 21.5, 26.1, 21.5)
      .s()
      .p(
        'ABKDjIiem+QAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAIADADICfHCg',
      )
    this.shape_397.setTransform(76.525, -101.725)

    this.shape_398 = new cjs.Shape()
    this.shape_398.graphics
      .lf(['#F8692A', '#E93A45'], [0, 1], -946.5, 23.5, 26.8, 23.5)
      .s()
      .p(
        'ABDDPIiQmWQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABgBQAAAAABAAQAAAAAAAAQABgBABAAQAAAAABAAQAAAAABAAQAAAAABABIACACICRGag',
      )
    this.shape_398.setTransform(75.8, -103.75)

    this.shape_399 = new cjs.Shape()
    this.shape_399.graphics
      .lf(['#F8692A', '#E93A45'], [0, 1], -945.8, 25.5, 27.5, 25.5)
      .s()
      .p(
        'AA8C7IiBluQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAABABAAIACADICDFxg',
      )
    this.shape_399.setTransform(75.075, -105.775)

    this.shape_400 = new cjs.Shape()
    this.shape_400.graphics
      .lf(['#F8692A', '#E93A45'], [0, 1], -945.1, 27.6, 28.2, 27.6)
      .s()
      .p(
        'AA0CmIhylFQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAAAIADADIB0FIg',
      )
    this.shape_400.setTransform(74.35, -107.8)

    this.shape_401 = new cjs.Shape()
    this.shape_401.graphics
      .lf(['#F8692A', '#E93A45'], [0, 1], -944.4, 29.6, 28.9, 29.6)
      .s()
      .p(
        'AAuCSIhlkcQAAgBAAAAQgBgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAAAIADADIBlEgg',
      )
    this.shape_401.setTransform(73.65, -109.825)

    this.shape_402 = new cjs.Shape()
    this.shape_402.graphics
      .lf(['#F8692A', '#E93A45'], [0, 1], -943.6, 31.6, 29.7, 31.6)
      .s()
      .p(
        'AAmB+IhWj0QAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAABIADACIBXD4g',
      )
    this.shape_402.setTransform(72.925, -111.85)

    this.shape_403 = new cjs.Shape()
    this.shape_403.graphics
      .lf(['#F8692A', '#E93A45'], [0, 1], -942.9, 33.6, 30.4, 33.6)
      .s()
      .p(
        'AAfBqIhIjMQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAQABAAABgBQAAAAABAAQAAAAABAAQAAABABAAIACADIBJDPg',
      )
    this.shape_403.setTransform(72.2, -113.875)

    this.shape_404 = new cjs.Shape()
    this.shape_404.graphics
      .lf(['#F8692A', '#E93A45'], [0, 1], -942.2, 35.7, 31.1, 35.7)
      .s()
      .p(
        'AAYBVIg5ijQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAIACADIA7Cmg',
      )
    this.shape_404.setTransform(71.475, -115.9)

    this.shape_405 = new cjs.Shape()
    this.shape_405.graphics
      .lf(['#F8692A', '#E93A45'], [0, 1], -941.5, 37.7, 31.8, 37.7)
      .s()
      .p(
        'AARBBIgrh6QgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAIACADIAtB+g',
      )
    this.shape_405.setTransform(70.775, -117.925)

    this.shape_406 = new cjs.Shape()
    this.shape_406.graphics
      .lf(['#F8692A', '#E93A45'], [0, 1], -940.8, 39.7, 32.5, 39.7)
      .s()
      .p(
        'AAKAtIgdhSQAAgBAAAAQgBgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABAAQAAgBABAAQABAAAAAAQABAAAAAAQABAAAAABIADACIAdBWg',
      )
    this.shape_406.setTransform(70.05, -119.95)

    this.shape_407 = new cjs.Shape()
    this.shape_407.graphics
      .lf(['#F8692A', '#E93A45'], [0, 1], -940, 41.7, 33.3, 41.7)
      .s()
      .p(
        'AACAZIgOgqQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABABAAAAIADADIAPAtg',
      )
    this.shape_407.setTransform(69.3125, -121.975)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: []})
        .to({state: [{t: this.shape_358}]}, 66)
        .to({state: [{t: this.shape_359}]}, 1)
        .to({state: [{t: this.shape_360}]}, 1)
        .to({state: [{t: this.shape_361}]}, 1)
        .to({state: [{t: this.shape_362}]}, 1)
        .to({state: [{t: this.shape_363}]}, 1)
        .to({state: [{t: this.shape_364}]}, 1)
        .to({state: [{t: this.shape_365}]}, 1)
        .to({state: [{t: this.shape_366}]}, 1)
        .to({state: [{t: this.shape_367}]}, 1)
        .to({state: [{t: this.shape_368}]}, 1)
        .to({state: [{t: this.shape_369}]}, 1)
        .to({state: [{t: this.shape_370}]}, 1)
        .to({state: [{t: this.shape_371}]}, 1)
        .to({state: [{t: this.shape_372}]}, 1)
        .to({state: [{t: this.shape_373}]}, 1)
        .to({state: [{t: this.shape_374}]}, 1)
        .to({state: [{t: this.shape_375}]}, 1)
        .to({state: [{t: this.shape_376}]}, 1)
        .to({state: [{t: this.shape_377}]}, 1)
        .to({state: [{t: this.shape_378}]}, 1)
        .to({state: [{t: this.shape_379}]}, 1)
        .to({state: [{t: this.shape_380}]}, 1)
        .to({state: [{t: this.shape_381}]}, 1)
        .to({state: [{t: this.shape_382}]}, 1)
        .to({state: [{t: this.shape_383}]}, 1)
        .to({state: [{t: this.shape_384}]}, 1)
        .to({state: [{t: this.shape_385}]}, 1)
        .to({state: [{t: this.shape_385}]}, 46)
        .to({state: [{t: this.shape_386}]}, 1)
        .to({state: [{t: this.shape_387}]}, 1)
        .to({state: [{t: this.shape_388}]}, 1)
        .to({state: [{t: this.shape_389}]}, 1)
        .to({state: [{t: this.shape_390}]}, 1)
        .to({state: [{t: this.shape_391}]}, 1)
        .to({state: [{t: this.shape_392}]}, 1)
        .to({state: [{t: this.shape_393}]}, 1)
        .to({state: [{t: this.shape_394}]}, 1)
        .to({state: [{t: this.shape_395}]}, 1)
        .to({state: [{t: this.shape_396}]}, 1)
        .to({state: [{t: this.shape_397}]}, 1)
        .to({state: [{t: this.shape_398}]}, 1)
        .to({state: [{t: this.shape_399}]}, 1)
        .to({state: [{t: this.shape_400}]}, 1)
        .to({state: [{t: this.shape_401}]}, 1)
        .to({state: [{t: this.shape_402}]}, 1)
        .to({state: [{t: this.shape_403}]}, 1)
        .to({state: [{t: this.shape_404}]}, 1)
        .to({state: [{t: this.shape_405}]}, 1)
        .to({state: [{t: this.shape_406}]}, 1)
        .to({state: [{t: this.shape_407}]}, 1)
        .to({state: []}, 1)
        .wait(28),
    )

    // ligne
    this.shape_408 = new cjs.Shape()
    this.shape_408.graphics
      .lf(['#79BE8C', '#E93A45'], [0, 1], -5.4, 50.6, 967.9, 50.6)
      .s()
      .p(
        'AgwAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBIAEAAIAAAAIBlAJIAAAKg',
      )
    this.shape_408.setTransform(-671.1062, -166)

    this.shape_409 = new cjs.Shape()
    this.shape_409.graphics
      .lf(['#79BE8C', '#E93A45'], [0, 1], -26.8, 49.3, 946.5, 49.3)
      .s()
      .p('AiogWQgHAAgGgDIgOgGIAAAAIAQgBIAPABIABAAIFbA2IAMAHIgMADg')
    this.shape_409.setTransform(-656.9, -163.4)

    this.shape_410 = new cjs.Shape()
    this.shape_410.graphics
      .lf(['#79BE8C', '#E93A45'], [0, 1], -48.2, 48.2, 925.1, 48.2)
      .s()
      .p('AE5A5IpYhiIgXgFIgbgJIABgBIAcACIAbADIJTBiIAYAJIAAABg')
    this.shape_410.setTransform(-642.7, -160.975)

    this.shape_411 = new cjs.Shape()
    this.shape_411.graphics
      .lf(['#79BE8C', '#E93A45'], [0, 1], -69.6, 47, 903.7, 47)
      .s()
      .p('AG7BQItRiOQgRgDgQgEIgogLIABgBIAqAEIAnAGIAEAAINGCNIAjALIAAABg')
    this.shape_411.setTransform(-628.5, -158.45)

    this.shape_412 = new cjs.Shape()
    this.shape_412.graphics
      .lf(['#79BE8C', '#E93A45'], [0, 1], -91, 45.7, 882.3, 45.7)
      .s()
      .p('AI+BnIxMi7IgqgIIg1gMIABgCIA3AGIA0AIIRBC5IAuANIAAABg')
    this.shape_412.setTransform(-614.3, -155.925)

    this.shape_413 = new cjs.Shape()
    this.shape_413.graphics
      .lf(['#79BE8C', '#E93A45'], [0, 1], -112.3, 44.5, 861, 44.5)
      .s()
      .p('AK/B+I1EjnQgagEgagGIhCgPIABgCIBFAJIA/AKIU3DlIA7APIAAACg')
    this.shape_413.setTransform(-600.1, -153.375)

    this.shape_414 = new cjs.Shape()
    this.shape_414.graphics
      .lf(['#79BE8C', '#E93A45'], [0, 1], -133.7, 43.3, 839.6, 43.3)
      .s()
      .p('ANBCVI4+kTIg9gLIhPgRIABgDIBSALIBLANIYvERIBGAQIAAACg')
    this.shape_414.setTransform(-585.9, -150.875)

    this.shape_415 = new cjs.Shape()
    this.shape_415.graphics
      .lf(['#79BE8C', '#E93A45'], [0, 1], -155.1, 42.1, 818.2, 42.1)
      .s()
      .p('APDCsI83k/IhHgOIhcgTIABgCIBgANIBXAPIclE9IBSASIAAADg')
    this.shape_415.setTransform(-571.7, -148.35)

    this.shape_416 = new cjs.Shape()
    this.shape_416.graphics
      .lf(['#79BE8C', '#E93A45'], [0, 1], -176.5, 40.8, 796.8, 40.8)
      .s()
      .p('AREDDMggwgFrIhQgQIhpgUIACgEIBsAQIBkARMAgcAFpIBdAUIAAADg')
    this.shape_416.setTransform(-557.5, -145.8)

    this.shape_417 = new cjs.Shape()
    this.shape_417.graphics
      .lf(['#79BE8C', '#E93A45'], [0, 1], -197.9, 39.6, 775.4, 39.6)
      .s()
      .p('ATHDaMgkqgGXIhagRIh2gXIACgEIB6ATIBvASMAkTAGVIBpAWIAAADg')
    this.shape_417.setTransform(-543.3, -143.275)

    this.shape_418 = new cjs.Shape()
    this.shape_418.graphics
      .lf(['#79BE8C', '#E93A45'], [0, 1], -219.3, 38.4, 754, 38.4)
      .s()
      .p('AVJDyMgojgHEIhkgTIiDgZIACgFICHAWIB8AVMAoJAHAIB1AYIAAAEg')
    this.shape_418.setTransform(-529.1, -140.775)

    this.shape_419 = new cjs.Shape()
    this.shape_419.graphics
      .lf(['#79BE8C', '#E93A45'], [0, 1], -240.7, 37.1, 732.6, 37.1)
      .s()
      .p('A1SjoIhtgUIiQgbIACgFICVAYICIAXMAsAAHsICAAaIAAAEg')
    this.shape_419.setTransform(-514.9, -138.225)

    this.shape_420 = new cjs.Shape()
    this.shape_420.graphics
      .lf(['#79BE8C', '#E93A45'], [0, 1], -262.1, 35.9, 711.2, 35.9)
      .s()
      .p('A3Jj8Ih3gXIidgdIACgGICiAbICUAZMAv3AIZICMAbIAAAEg')
    this.shape_420.setTransform(-500.7, -135.7)

    this.shape_421 = new cjs.Shape()
    this.shape_421.graphics
      .lf(['#79BE8C', '#E93A45'], [0, 1], -283.5, 34.7, 689.8, 34.7)
      .s()
      .p('A5AkSIiBgXIiqggIADgGICvAdICgAbMAztAJFICYAdIAAAFg')
    this.shape_421.setTransform(-486.525, -133.175)

    this.shape_422 = new cjs.Shape()
    this.shape_422.graphics
      .lf(['#79BE8C', '#E93A45'], [0, 1], -304.9, 33.5, 668.4, 33.5)
      .s()
      .p('A63knIiLgZIi3giIADgGIC8AfICsAeMA3kAJwICkAfIAAAFg')
    this.shape_422.setTransform(-472.3, -130.65)

    this.shape_423 = new cjs.Shape()
    this.shape_423.graphics
      .lf(['#79BE8C', '#E93A45'], [0, 1], -326.3, 32.3, 647, 32.3)
      .s()
      .p('A8vk8IiTgbIjFgkIAEgHIDJAiIC4AgMA7bAKcICvAhIAAAGg')
    this.shape_423.setTransform(-458.125, -128.125)

    this.shape_424 = new cjs.Shape()
    this.shape_424.graphics
      .lf(['#79BE8C', '#E93A45'], [0, 1], -347.7, 31.1, 625.6, 31.1)
      .s()
      .p('A+mlRIidgdIjSgmIAEgHIDXAkIDDAiMBCNALrIAAAGg')
    this.shape_424.setTransform(-443.925, -125.6)

    this.shape_425 = new cjs.Shape()
    this.shape_425.graphics
      .lf(['#79BE8C', '#E93A45'], [0, 1], -369.1, 29.8, 604.2, 29.8)
      .s()
      .p('EggegFnIimgeIjfgoIAEgHIDkAmIDQAkMBGPAMZIAAAHg')
    this.shape_425.setTransform(-429.725, -123.05)

    this.shape_426 = new cjs.Shape()
    this.shape_426.graphics
      .lf(['#79BE8C', '#E93A45'], [0, 1], -390.5, 28.6, 582.8, 28.6)
      .s()
      .p('EgiVgF7IiwggIjsgrIAEgIIDyApIDbAnMBKSANHIAAAGg')
    this.shape_426.setTransform(-415.525, -120.55)

    this.shape_427 = new cjs.Shape()
    this.shape_427.graphics
      .lf(['#79BE8C', '#E93A45'], [0, 1], -411.9, 27.4, 561.4, 27.4)
      .s()
      .p('EgkMgGQIi6giIj5gtIAEgIID/AsIDoAoMBOUAN0IAAAHg')
    this.shape_427.setTransform(-401.325, -118.025)

    this.shape_428 = new cjs.Shape()
    this.shape_428.graphics
      .lf(['#79BE8C', '#E93A45'], [0, 1], -433.3, 26.1, 540, 26.1)
      .s()
      .p('EgmEgGmIjDgjIkGgvIAFgJIEMAvIDzAqMBSXAOiIAAAIg')
    this.shape_428.setTransform(-387.125, -115.475)

    this.shape_429 = new cjs.Shape()
    this.shape_429.graphics
      .lf(['#79BE8C', '#E93A45'], [0, 1], -454.7, 24.9, 518.6, 24.9)
      .s()
      .p('Egn7gG7IjNglIkTgxIAFgJIEZAxIEAAsMBWZAPQIAAAIg')
    this.shape_429.setTransform(-372.925, -112.95)

    this.shape_430 = new cjs.Shape()
    this.shape_430.graphics
      .lf(['#79BE8C', '#E93A45'], [0, 1], -476.1, 23.7, 497.2, 23.7)
      .s()
      .p('EgpygHPIjXgoIkggyIAFgKIEnAzIEMAvMBabAP9IAAAIg')
    this.shape_430.setTransform(-358.725, -110.45)

    this.shape_431 = new cjs.Shape()
    this.shape_431.graphics
      .lf(['#79BE8C', '#E93A45'], [0, 1], -497.4, 22.5, 475.9, 22.5)
      .s()
      .p('EgrqgHlIjggpIktg1IAFgKIE0A2IEYAyMBeeAQqIAAAJg')
    this.shape_431.setTransform(-344.525, -107.9)

    this.shape_432 = new cjs.Shape()
    this.shape_432.graphics
      .lf(['#79BE8C', '#E93A45'], [0, 1], -518.8, 21.2, 454.5, 21.2)
      .s()
      .p('EgthgH6IjqgqIk6g4IAGgKIFBA4IEkA0MBigARYIAAAJg')
    this.shape_432.setTransform(-330.325, -105.375)

    this.shape_433 = new cjs.Shape()
    this.shape_433.graphics
      .lf(['#79BE8C', '#E93A45'], [0, 1], -540.2, 20, 433.1, 20)
      .s()
      .p('EgvZgIQIjzgrIlHg5IAGgLIFOA6IEwA2MBmjASHIAAAJg')
    this.shape_433.setTransform(-316.125, -102.85)

    this.shape_434 = new cjs.Shape()
    this.shape_434.graphics
      .lf(['#79BE8C', '#E93A45'], [0, 1], -561.6, 18.8, 411.7, 18.8)
      .s()
      .p('EgxQgIkIj9guIlUg8IAGgLIFcA9IE8A4MBqlAS0IAAAKg')
    this.shape_434.setTransform(-301.925, -100.325)

    this.shape_435 = new cjs.Shape()
    this.shape_435.graphics
      .lf(['#79BE8C', '#E93A45'], [0, 1], -583, 17.6, 390.3, 17.6)
      .s()
      .p('Eg8vgKnIAGgMMB5ZAVdIAAAKg')
    this.shape_435.setTransform(-287.725, -97.8)

    this.shape_436 = new cjs.Shape()
    this.shape_436.graphics
      .lf(['#79BE8C', '#E93A45'], [0, 1], -583.3, 18.3, 390, 18.3)
      .s()
      .p('Eg8sgKrIAggPMB45AVrIAAAKg')
    this.shape_436.setTransform(-287.425, -98.5875)

    this.shape_437 = new cjs.Shape()
    this.shape_437.graphics
      .lf(['#79BE8C', '#E93A45'], [0, 1], -600.8, 15.2, 372.5, 15.2)
      .s()
      .p('Eg59gKMIAigOMBzZAUsIgDAJg')
    this.shape_437.setTransform(-269.925, -95.45)

    this.shape_438 = new cjs.Shape()
    this.shape_438.graphics
      .lf(['#79BE8C', '#E93A45'], [0, 1], -618.3, 12.1, 355, 12.1)
      .s()
      .p('Eg3OgJtIAkgOMBt5ATvIgHAIg')
    this.shape_438.setTransform(-252.4, -92.3)

    this.shape_439 = new cjs.Shape()
    this.shape_439.graphics
      .lf(['#79BE8C', '#E93A45'], [0, 1], -635.8, 8.9, 337.5, 8.9)
      .s()
      .p('Eg0fgJPIAlgMMBoaASvIgJAIg')
    this.shape_439.setTransform(-234.9, -89.15)

    this.shape_440 = new cjs.Shape()
    this.shape_440.graphics
      .lf(['#79BE8C', '#E93A45'], [0, 1], -653.3, 5.8, 320, 5.8)
      .s()
      .p('EgxvgIwIAmgMMBi5ARyIgMAHg')
    this.shape_440.setTransform(-217.375, -86)

    this.shape_441 = new cjs.Shape()
    this.shape_441.graphics
      .lf(['#79BE8C', '#E93A45'], [0, 1], -670.8, 2.6, 302.5, 2.6)
      .s()
      .p('EgvAgIRIAogLMBdZAQzIgPAGg')
    this.shape_441.setTransform(-199.875, -82.875)

    this.shape_442 = new cjs.Shape()
    this.shape_442.graphics
      .lf(['#79BE8C', '#E93A45'], [0, 1], -688.3, -0.5, 285, -0.5)
      .s()
      .p('EgsRgHyIApgKMBX6APzIgRAGg')
    this.shape_442.setTransform(-182.375, -79.725)

    this.shape_443 = new cjs.Shape()
    this.shape_443.graphics
      .lf(['#79BE8C', '#E93A45'], [0, 1], -705.9, -3.6, 267.4, -3.6)
      .s()
      .p('EgpigHUIAqgIMBSbAO0IgUAFg')
    this.shape_443.setTransform(-164.85, -76.575)

    this.shape_444 = new cjs.Shape()
    this.shape_444.graphics
      .lf(['#79BE8C', '#E93A45'], [0, 1], -723.4, -6.8, 249.9, -6.8)
      .s()
      .p('EgmzgG1IAsgIMBM7AN2IgXAFg')
    this.shape_444.setTransform(-147.35, -73.425)

    this.shape_445 = new cjs.Shape()
    this.shape_445.graphics
      .lf(['#79BE8C', '#E93A45'], [0, 1], -740.9, -9.9, 232.4, -9.9)
      .s()
      .p('EgkEgGXIAugGMBHbAM3IgbAEg')
    this.shape_445.setTransform(-129.825, -70.3)

    this.shape_446 = new cjs.Shape()
    this.shape_446.graphics
      .lf(['#79BE8C', '#E93A45'], [0, 1], -758.4, -13.1, 214.9, -13.1)
      .s()
      .p('EghVgF3IAwgGMBB7AL5IgeADg')
    this.shape_446.setTransform(-112.325, -67.15)

    this.shape_447 = new cjs.Shape()
    this.shape_447.graphics
      .lf(['#79BE8C', '#E93A45'], [0, 1], -775.9, -16.2, 197.4, -16.2)
      .s()
      .p('A+llZIAwgFMA8cAK6IghACg')
    this.shape_447.setTransform(-94.8, -64)

    this.shape_448 = new cjs.Shape()
    this.shape_448.graphics
      .lf(['#79BE8C', '#E93A45'], [0, 1], -793.4, -19.3, 179.9, -19.3)
      .s()
      .p('A73k6IAygEMA29AJ8IgkABg')
    this.shape_448.setTransform(-77.3, -60.875)

    this.shape_449 = new cjs.Shape()
    this.shape_449.graphics
      .lf(['#79BE8C', '#E93A45'], [0, 1], -810.9, -22.5, 162.4, -22.5)
      .s()
      .p('A5IkbIA0gDMAxdAI9IgnAAg')
    this.shape_449.setTransform(-59.8, -57.725)

    this.shape_450 = new cjs.Shape()
    this.shape_450.graphics
      .lf(['#79BE8C', '#E93A45'], [0, 1], -828.4, -25.6, 144.9, -25.6)
      .s()
      .p('AVwD/MgsIgH8IA1gCMAr8AH/g')
    this.shape_450.setTransform(-42.275, -54.575)

    this.shape_451 = new cjs.Shape()
    this.shape_451.graphics
      .lf(['#79BE8C', '#E93A45'], [0, 1], -845.9, -28.8, 127.4, -28.8)
      .s()
      .p('AS+DfMgmngG9IA3gCMAmcAHAg')
    this.shape_451.setTransform(-24.775, -51.4)

    this.shape_452 = new cjs.Shape()
    this.shape_452.graphics
      .lf(['#79BE8C', '#E93A45'], [0, 1], -863.5, -32, 109.8, -32)
      .s()
      .p('AQLC/MghFgF/IA4AAMAg9AGBg')
    this.shape_452.setTransform(-7.25, -48.225)

    this.shape_453 = new cjs.Shape()
    this.shape_453.graphics
      .lf(['#79BE8C', '#E93A45'], [0, 1], -881, -35.1, 92.3, -35.1)
      .s()
      .p('ANaCgI7llBIA6ABIbdFCg')
    this.shape_453.setTransform(10.25, -45.1)

    this.shape_454 = new cjs.Shape()
    this.shape_454.graphics
      .lf(['#79BE8C', '#E93A45'], [0, 1], -898.5, -38.2, 74.8, -38.2)
      .s()
      .p('AKoCAI2EkCIA7ACIV+EDg')
    this.shape_454.setTransform(27.75, -41.975)

    this.shape_455 = new cjs.Shape()
    this.shape_455.graphics
      .lf(['#79BE8C', '#E93A45'], [0, 1], -916, -41.4, 57.3, -41.4)
      .s()
      .p('AH2BhIwjjEIA9ACIQeDFg')
    this.shape_455.setTransform(45.275, -38.85)

    this.shape_456 = new cjs.Shape()
    this.shape_456.graphics
      .lf(['#79BE8C', '#E93A45'], [0, 1], -933.5, -44.5, 39.8, -44.5)
      .s()
      .p('AFEBBIrCiGIA+AFIK/CGg')
    this.shape_456.setTransform(62.775, -35.725)

    this.shape_457 = new cjs.Shape()
    this.shape_457.graphics
      .lf(['#79BE8C', '#E93A45'], [0, 1], -951, -47.6, 22.3, -47.6)
      .s()
      .p('ACSAiIlghIIA/AFIFfBIg')
    this.shape_457.setTransform(80.3, -32.575)

    this.shape_458 = new cjs.Shape()
    this.shape_458.graphics
      .lf(['#79BE8C', '#E93A45'], [0, 1], -968.5, -50.7, 4.8, -50.7)
      .s()
      .p('AgfACIAAgJIBAAGIAAAJg')
    this.shape_458.setTransform(97.8, -29.4625)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: []})
        .to({state: [{t: this.shape_408}]}, 46)
        .to({state: [{t: this.shape_409}]}, 1)
        .to({state: [{t: this.shape_410}]}, 1)
        .to({state: [{t: this.shape_411}]}, 1)
        .to({state: [{t: this.shape_412}]}, 1)
        .to({state: [{t: this.shape_413}]}, 1)
        .to({state: [{t: this.shape_414}]}, 1)
        .to({state: [{t: this.shape_415}]}, 1)
        .to({state: [{t: this.shape_416}]}, 1)
        .to({state: [{t: this.shape_417}]}, 1)
        .to({state: [{t: this.shape_418}]}, 1)
        .to({state: [{t: this.shape_419}]}, 1)
        .to({state: [{t: this.shape_420}]}, 1)
        .to({state: [{t: this.shape_421}]}, 1)
        .to({state: [{t: this.shape_422}]}, 1)
        .to({state: [{t: this.shape_423}]}, 1)
        .to({state: [{t: this.shape_424}]}, 1)
        .to({state: [{t: this.shape_425}]}, 1)
        .to({state: [{t: this.shape_426}]}, 1)
        .to({state: [{t: this.shape_427}]}, 1)
        .to({state: [{t: this.shape_428}]}, 1)
        .to({state: [{t: this.shape_429}]}, 1)
        .to({state: [{t: this.shape_430}]}, 1)
        .to({state: [{t: this.shape_431}]}, 1)
        .to({state: [{t: this.shape_432}]}, 1)
        .to({state: [{t: this.shape_433}]}, 1)
        .to({state: [{t: this.shape_434}]}, 1)
        .to({state: [{t: this.shape_435}]}, 1)
        .to({state: [{t: this.shape_436}]}, 46)
        .to({state: [{t: this.shape_437}]}, 1)
        .to({state: [{t: this.shape_438}]}, 1)
        .to({state: [{t: this.shape_439}]}, 1)
        .to({state: [{t: this.shape_440}]}, 1)
        .to({state: [{t: this.shape_441}]}, 1)
        .to({state: [{t: this.shape_442}]}, 1)
        .to({state: [{t: this.shape_443}]}, 1)
        .to({state: [{t: this.shape_444}]}, 1)
        .to({state: [{t: this.shape_445}]}, 1)
        .to({state: [{t: this.shape_446}]}, 1)
        .to({state: [{t: this.shape_447}]}, 1)
        .to({state: [{t: this.shape_448}]}, 1)
        .to({state: [{t: this.shape_449}]}, 1)
        .to({state: [{t: this.shape_450}]}, 1)
        .to({state: [{t: this.shape_451}]}, 1)
        .to({state: [{t: this.shape_452}]}, 1)
        .to({state: [{t: this.shape_453}]}, 1)
        .to({state: [{t: this.shape_454}]}, 1)
        .to({state: [{t: this.shape_455}]}, 1)
        .to({state: [{t: this.shape_456}]}, 1)
        .to({state: [{t: this.shape_457}]}, 1)
        .to({state: [{t: this.shape_458}]}, 1)
        .to({state: []}, 1)
        .wait(48),
    )

    // Calque_4
    this.shape_459 = new cjs.Shape()
    this.shape_459.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgeABIA1gOQAAAAABAAQABAAAAAAQABAAAAAAQABAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABgBAAIg4APg',
      )
    this.shape_459.setTransform(-682.9112, -166.0887)

    this.shape_460 = new cjs.Shape()
    this.shape_460.graphics
      .f('#66CCCC')
      .s()
      .p('AhOAQIgBAAIAAgBIABAAIB+gkQAFgBAGAAIAMABIAFACIAEABIAAABIgHACIiIAmg')
    this.shape_460.setTransform(-688.05, -164.525)

    this.shape_461 = new cjs.Shape()
    this.shape_461.graphics
      .f('#66CCCC')
      .s()
      .p('AiAAgIgBAAIAAgCIDIg5QAIgDAKgBIAVgCIAKABIAJAAIABAAIAAABIgNAEIjWA8g')
    this.shape_461.setTransform(-693.05, -163.15)

    this.shape_462 = new cjs.Shape()
    this.shape_462.graphics
      .f('#66CCCC')
      .s()
      .p(
        'Ai0AvIAAgCIABAAIERhOQAMgDANgCIAegGIAQAAIAOgDIABAAIAAABIAAAAIAAABIgSAGIkkBTIgxAEg',
      )
    this.shape_462.setTransform(-698.05, -161.75)

    this.shape_463 = new cjs.Shape()
    this.shape_463.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AjlA+IgBgBIAAAAIAAgBIABgBIFbhjQAPgFAPgDIApgHIAVgCIATgFIABAAIABACIAAAAIgBABIgXAGIl0BrIg/AIIgBAAg',
      )
    this.shape_463.setTransform(-703.075, -160.3)

    this.shape_464 = new cjs.Shape()
    this.shape_464.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AkXBNIgBAAIAAgBIABgBIAAgBIGkh5IAmgJIAxgKIAagFIAagFIABAAIAAABIAAABIgBAAIgcAJInCCBIhQANIgBAAIAAAAg',
      )
    this.shape_464.setTransform(-708.1, -158.8625)

    this.shape_465 = new cjs.Shape()
    this.shape_465.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AlKBcIAAgBIAAAAIAAgCIABAAIHtiOIAsgMIA7gNIAggGIAegHIACAAIAAABIAAABIgBABIgiAKIoRCYIhfASIgBAAIgBAAg',
      )
    this.shape_465.setTransform(-713.1, -157.4125)

    this.shape_466 = new cjs.Shape()
    this.shape_466.graphics
      .f('#66CCCC')
      .s()
      .p(
        'Al7BrIgBgBIAAgBIAAgBIABgBII3ijQAZgHAZgGIBEgRIAmgHIAjgJIABAAIABABIAAACIgBAAIgnAMIpfCuIhwAYIgBAAg',
      )
    this.shape_466.setTransform(-718.125, -155.975)

    this.shape_467 = new cjs.Shape()
    this.shape_467.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AmuB6IgBgBIAAgBIABgBIABgBIKAi5IA5gPIBOgTIArgKIAogKIABAAIABABIAAACIgBABIgtANIqtDFIiAAdIgCAAg',
      )
    this.shape_467.setTransform(-723.1375, -154.525)

    this.shape_468 = new cjs.Shape()
    this.shape_468.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AngCJIgBgBIAAgBIAAgCIACgBILJjNQAggKAggIIBXgWIAwgLIAugMIABAAIACACIgBABIgBABIgyAPIr8DcIiQAiIgCAAg',
      )
    this.shape_468.setTransform(-728.1375, -153.075)

    this.shape_469 = new cjs.Shape()
    this.shape_469.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AoSCYIgBgCIAAAAIAAgCIACgBIMTjjIBGgUIBggZIA2gMIAzgOIACAAIABACIAAACIgCABIg3AQItLDzIifAnIgDAAg',
      )
    this.shape_469.setTransform(-733.1625, -151.625)

    this.shape_470 = new cjs.Shape()
    this.shape_470.graphics
      .f('#66CCCC')
      .s()
      .p(
        'ApECnIgBgCIAAAAIAAgDIACgBINcj4IBNgVIBpgcIA8gPIA4gPIACAAIABACIAAACIgCABIg8ASIuaEKIivAsIgDAAg',
      )
    this.shape_470.setTransform(-738.175, -150.175)

    this.shape_471 = new cjs.Shape()
    this.shape_471.graphics
      .f('#66CCCC')
      .s()
      .p(
        'Ap2C2IgBgCIAAAAIAAgDIACgBIOlkOIBUgXIBzgfIBAgQIA+gRIACAAIABACIAAADIgCABIhCATIvoEhIi/AxIgDAAg',
      )
    this.shape_471.setTransform(-743.175, -148.7125)

    this.shape_472 = new cjs.Shape()
    this.shape_472.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AqoDFIgCgCIAAgBIAAgCIADgCIPvkiIBagaIB8giIBGgSIBDgSIACAAIABACIAAADIgBACIhIAUIw3E3IjPA3IgCAAIgBAAg',
      )
    this.shape_472.setTransform(-748.2, -147.275)

    this.shape_473 = new cjs.Shape()
    this.shape_473.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AraDUIgCgCIAAgBIABgDIACgCIQ4k3IBhgbICFglIBMgUIBIgUIACAAQAAAAABABQAAAAAAAAQAAABABAAQAAAAAAABIAAACIgCACIhNAWIyGFOIjfA8IgBAAIgCAAg',
      )
    this.shape_473.setTransform(-753.2125, -145.825)

    this.shape_474 = new cjs.Shape()
    this.shape_474.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AsMDjIgCgDIAAAAIAAgDIADgCISBlNIBngdICPgoIBRgVIBNgWIADAAIACADIAAADIgCACIhSAYIzVFkIjvBBIgCAAIgBAAg',
      )
    this.shape_474.setTransform(-758.225, -144.375)

    this.shape_475 = new cjs.Shape()
    this.shape_475.graphics
      .f('#66CCCC')
      .s()
      .p(
        'As+DxIgCgCIAAAAIAAgEIADgCITLliIBtgfICYgrIBXgXIBSgXIADAAIACADIAAADIgDACIhXAaI0jF7Ij/BGIgBAAIgCgBg',
      )
    this.shape_475.setTransform(-763.2375, -142.9292)

    this.shape_476 = new cjs.Shape()
    this.shape_476.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AtxEAIgCgCQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBIADgCIUUl4IB0ghICigtIBbgZIBYgZIADAAIADADIgBADIgDADIhcAbI1yGSIkPBLIgBAAIgDgBg',
      )
    this.shape_476.setTransform(-768.25, -141.4792)

    this.shape_477 = new cjs.Shape()
    this.shape_477.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AuiEPIgDgCIAAgBIABgDQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAIVemMIB6gjICrgxIBigaIBcgbIAEABIACADIgBADIgCACIhiAdI7gH5IgBAAIgCgBg',
      )
    this.shape_477.setTransform(-773.2667, -140.025)

    this.shape_478 = new cjs.Shape()
    this.shape_478.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AvVEeQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAAAAAgBIAAgEQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAIWnmiICBglIC0g0IBngcIBigcIADABQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABIgBADIgCADIhoAeI8+IVIgEgBg',
      )
    this.shape_478.setTransform(-778.2792, -138.5833)

    this.shape_479 = new cjs.Shape()
    this.shape_479.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AwGEtIgDgDIAAAAIAAgEQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABgBIXwm3ICIgnIC+g2IBsgeIBngeIAEABQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABIgBAEIgCACIhtAgI+dIwIgBABIgCgBg',
      )
    this.shape_479.setTransform(-783.3, -137.1458)

    this.shape_480 = new cjs.Shape()
    this.shape_480.graphics
      .f('#66CCCC')
      .s()
      .p(
        'Aw5E8QAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIAAgFQAAAAABAAQAAgBABAAQAAAAABgBQAAAAABAAIY6nMICOgqIDHg5IByggIBsgfIAEABQAAAAABABQAAAAABAAQAAABAAAAQAAABABAAIgBAEIgDADIhyAhI/7JMIgDABIgCgBg',
      )
    this.shape_480.setTransform(-788.3083, -135.6958)

    this.shape_481 = new cjs.Shape()
    this.shape_481.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AxrFLQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQABgDADgBIaDnhICVgrIDQg8IB3ghIBygiQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAABABQAAAAABABQAAAAAAABQABAAAAAAIgBAFQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAIh3AjMghaAJpIgCAAIgDgBg',
      )
    this.shape_481.setTransform(-793.325, -134.25)

    this.shape_482 = new cjs.Shape()
    this.shape_482.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AydFaQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBIABgEQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAIbNn3ICbgtIDag/IB9gjIB2gjIAFABQAAAAABABQAAAAABABQAAAAAAABQABAAAAABIgBAEQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAIh9AlMgi4AKDIgCABIgDgBg',
      )
    this.shape_482.setTransform(-798.325, -132.8)

    this.shape_483 = new cjs.Shape()
    this.shape_483.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AzPFpQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAMAmZgLGQABgBAAAAQABAAABAAQAAAAABABQAAAAABAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAMgmZALGIgCABIgDgBg',
      )
    this.shape_483.setTransform(-803.35, -131.35)

    this.shape_484 = new cjs.Shape()
    this.shape_484.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AyMFWQgBgBAAAAQgBgBAAAAQAAgBgBAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAgBQABAAAAgBQABAAAAAAQABAAAAgBICugyIDAg4Iemo1IAEABQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAIAAAFQgBAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAI/DI/IjRA8Ih/AlIgCAAIgDAAg',
      )
    this.shape_484.setTransform(-810.0583, -129.4)

    this.shape_485 = new cjs.Shape()
    this.shape_485.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AxJFCQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAIABgFQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAICkgwIC1g1Ic1oUIAEAAQABAAAAABQABAAAAABQAAAAAAABQABAAAAABIgBAEQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAI9QIeIjFA5Ih5AiIgCAAIgCAAg',
      )
    this.shape_485.setTransform(-816.775, -127.4708)

    this.shape_486 = new cjs.Shape()
    this.shape_486.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AwGEuIgDgCIAAgBIABgEQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAICZgtICqgyIbFn0IAEABQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABIgBAEIgDACI7eH9Ii5A2IhxAgIgBAAIgDgBg',
      )
    this.shape_486.setTransform(-823.4833, -125.525)

    this.shape_487 = new cjs.Shape()
    this.shape_487.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AvDEbIgCgDIAAAAIAAgEQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAICPgrICfguIZVnTIADAAIACADIAAAEIgDACI5sHdIitAxIhpAeIgBAAIgDAAg',
      )
    this.shape_487.setTransform(-830.2, -123.5792)

    this.shape_488 = new cjs.Shape()
    this.shape_488.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AuAEHIgCgCIAAAAQgBgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAAAgBQABAAAAAAQABAAAAgBICFgnICTgrIXlmzIADABQABAAAAAAQAAAAABABQAAAAAAABQAAAAABABIgBACIgDADI36G8IihAuIhiAcIgDgBg',
      )
    this.shape_488.setTransform(-836.9, -121.65)

    this.shape_489 = new cjs.Shape()
    this.shape_489.graphics
      .f('#66CCCC')
      .s()
      .p(
        'As9D0IgCgCIAAgBIAAgDIADgCIB7glICIgoIV0mSIADAAQABAAAAABQAAAAABAAQAAABAAAAQAAAAAAABIAAADQAAAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAI2IGcIiVAqIhbAZIgBAAIgCAAg',
      )
    this.shape_489.setTransform(-843.6208, -119.7125)

    this.shape_490 = new cjs.Shape()
    this.shape_490.graphics
      .f('#66CCCC')
      .s()
      .p(
        'Ar6DgIgCgCIAAAAIAAgDQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAABAAIBwgiIB+gmIUElxIACABIACACIAAADIgCACIjLA+IxLE9IiJAnIhTAXIgBAAIgCgBg',
      )
    this.shape_490.setTransform(-850.325, -117.7667)

    this.shape_491 = new cjs.Shape()
    this.shape_491.graphics
      .f('#66CCCC')
      .s()
      .p(
        'Aq3DNIgCgCIAAgBIAAgDIACgBIBnggIBygiISUlQIACAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAIAAADIgCABIi5A6IvqEhIh9AjIhNAVIgCAAg',
      )
    this.shape_491.setTransform(-857.0458, -115.825)

    this.shape_492 = new cjs.Shape()
    this.shape_492.graphics
      .f('#66CCCC')
      .s()
      .p(
        'Ap0C5IgCgBIAAgBIAAgDIACgBIBcgdIBogfIQjkwIACABQABAAAAAAQAAAAAAABQABAAAAAAQAAAAAAABIAAACIgCABIimA1IuLEFIhxAgIhFATIgCgBg',
      )
    this.shape_492.setTransform(-863.7375, -113.875)

    this.shape_493 = new cjs.Shape()
    this.shape_493.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AoyCmIgBgBIAAgBIAAgCIACgCIBSgbIBdgcIOykOIACAAIACACIgBACIgBACIiTAvIssDpIhlAdIg9AQIgBAAIgCAAg',
      )
    this.shape_493.setTransform(-870.45, -111.95)

    this.shape_494 = new cjs.Shape()
    this.shape_494.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AnuCTIgBgCIgBgBIAAgCIACgBIBIgYQAogNApgLIMAjeIBDgQIACAAIABABIAAACIgCABIiBArIrLDOIhZAZIg2AOIgCAAg',
      )
    this.shape_494.setTransform(-877.175, -110.0125)

    this.shape_495 = new cjs.Shape()
    this.shape_495.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AmrB/IgBgBIgBgBIAAgCIACgBIA9gVIBHgWIKZi/IA5gOIACAAIABACIgBABIgBABIhuAmIpsCyIhNAVIgvAMIgBAAg',
      )
    this.shape_495.setTransform(-883.875, -108.0625)

    this.shape_496 = new cjs.Shape()
    this.shape_496.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AloBrIgBgBIAAgBIAAgBIABgBIAzgSQAdgKAegJIIziiIAvgKIACAAIAAABIAAABIgBABIhbAhIoMCXIhCARIgnAJIgBAAIAAAAg',
      )
    this.shape_496.setTransform(-890.6, -106.125)

    this.shape_497 = new cjs.Shape()
    this.shape_497.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AklBYIgBgBIAAgBIAAgBIABgBIApgQQAXgIAZgHIHMiEIAlgIIABAAIABABIAAABIgBABIhKAcImsB7Ig1AOIgfAHIgBAAg',
      )
    this.shape_497.setTransform(-897.3, -104.2)

    this.shape_498 = new cjs.Shape()
    this.shape_498.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AjiBEIgBAAIAAgBIAAgBIABgBIAfgNQASgHATgFIFlhnIAcgEIABAAIAAABIAAAAIAAAAIg4AYIlMBfIgpAKIgYAFIgBAAg',
      )
    this.shape_498.setTransform(-904.0125, -102.25)

    this.shape_499 = new cjs.Shape()
    this.shape_499.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AifAwIgBAAIAAgBIAAgBIAAAAIAVgKQANgGANgEID+hIIATgCIABAAIAAABIAAAAIAAABIglASIjtBDIgdAHIgRADIAAgBg',
      )
    this.shape_499.setTransform(-910.725, -100.3)

    this.shape_500 = new cjs.Shape()
    this.shape_500.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AhcAeIgBAAIAAgBIAAgBIAAAAIALgHQAHgEAIgDICXgrIAKABIAAABIgTAOIiMAoIgRADIgKAAg',
      )
    this.shape_500.setTransform(-917.45, -98.45)

    this.shape_501 = new cjs.Shape()
    this.shape_501.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgXANQAAgBgBAAQAAAAgBgBQAAAAAAgBQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAIAxgNIAAAMIgtANIgCAAIgDAAg',
      )
    this.shape_501.setTransform(-924.1638, -96.5113)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: []})
        .to({state: [{t: this.shape_459}]}, 20)
        .to({state: [{t: this.shape_460}]}, 1)
        .to({state: [{t: this.shape_461}]}, 1)
        .to({state: [{t: this.shape_462}]}, 1)
        .to({state: [{t: this.shape_463}]}, 1)
        .to({state: [{t: this.shape_464}]}, 1)
        .to({state: [{t: this.shape_465}]}, 1)
        .to({state: [{t: this.shape_466}]}, 1)
        .to({state: [{t: this.shape_467}]}, 1)
        .to({state: [{t: this.shape_468}]}, 1)
        .to({state: [{t: this.shape_469}]}, 1)
        .to({state: [{t: this.shape_470}]}, 1)
        .to({state: [{t: this.shape_471}]}, 1)
        .to({state: [{t: this.shape_472}]}, 1)
        .to({state: [{t: this.shape_473}]}, 1)
        .to({state: [{t: this.shape_474}]}, 1)
        .to({state: [{t: this.shape_475}]}, 1)
        .to({state: [{t: this.shape_476}]}, 1)
        .to({state: [{t: this.shape_477}]}, 1)
        .to({state: [{t: this.shape_478}]}, 1)
        .to({state: [{t: this.shape_479}]}, 1)
        .to({state: [{t: this.shape_480}]}, 1)
        .to({state: [{t: this.shape_481}]}, 1)
        .to({state: [{t: this.shape_482}]}, 1)
        .to({state: [{t: this.shape_483}]}, 1)
        .to({state: [{t: this.shape_483}]}, 60)
        .to({state: [{t: this.shape_484}]}, 1)
        .to({state: [{t: this.shape_485}]}, 1)
        .to({state: [{t: this.shape_486}]}, 1)
        .to({state: [{t: this.shape_487}]}, 1)
        .to({state: [{t: this.shape_488}]}, 1)
        .to({state: [{t: this.shape_489}]}, 1)
        .to({state: [{t: this.shape_490}]}, 1)
        .to({state: [{t: this.shape_491}]}, 1)
        .to({state: [{t: this.shape_492}]}, 1)
        .to({state: [{t: this.shape_493}]}, 1)
        .to({state: [{t: this.shape_494}]}, 1)
        .to({state: [{t: this.shape_495}]}, 1)
        .to({state: [{t: this.shape_496}]}, 1)
        .to({state: [{t: this.shape_497}]}, 1)
        .to({state: [{t: this.shape_498}]}, 1)
        .to({state: [{t: this.shape_499}]}, 1)
        .to({state: [{t: this.shape_500}]}, 1)
        .to({state: [{t: this.shape_501}]}, 1)
        .to({state: []}, 1)
        .wait(67),
    )

    // Calque_2
    this.shape_502 = new cjs.Shape()
    this.shape_502.graphics
      .lf(['#66CCCC', '#FFA902'], [0.478, 1], -994.9, 16.4, 3, 16.4)
      .s()
      .p(
        'AgdgEIA1gCQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIg1ACg',
      )
    this.shape_502.setTransform(67.7376, -125.6126)

    this.shape_503 = new cjs.Shape()
    this.shape_503.graphics
      .lf(['#66CCCC', '#FFA902'], [0.478, 1], -965.6, 15.4, 32.3, 15.4)
      .s()
      .p('Ak/AFIgBAAIAAgBIH7gPQAdgCAdABQAOABANADIAoACIAJABIAAAAIgcADIn/APg')
    this.shape_503.setTransform(38.425, -124.62)

    this.shape_504 = new cjs.Shape()
    this.shape_504.graphics
      .lf(['#66CCCC', '#FFA902'], [0.478, 1], -936.4, 14.4, 61.4, 14.4)
      .s()
      .p(
        'ApjAQIgBgBIAAgBIABAAIO/gfQA4gCA4AAIA0ACIBSACIASgBIAAABIABAAIgBABIAAAAIg1ADIvIAfg',
      )
    this.shape_504.setTransform(9.275, -123.675)

    this.shape_505 = new cjs.Shape()
    this.shape_505.graphics
      .lf(['#66CCCC', '#FFA902'], [0.478, 1], -907.3, 13.5, 90.6, 13.5)
      .s()
      .p(
        'AuHAaIAAgBIAAAAIAAgBIAAAAIWEguQBTgCBTgBIBNABIB9gBIAbAAIAAAAIABABIgBABIAAAAIhPADI2PAuIkxABIAAgBg',
      )
    this.shape_505.setTransform(-19.9, -122.75)

    this.shape_506 = new cjs.Shape()
    this.shape_506.graphics
      .lf(['#66CCCC', '#FFA902'], [0.478, 1], -878.1, 12.5, 119.8, 12.5)
      .s()
      .p(
        'AyrAkIAAgBIAAAAIAAgBIABgBIdIg8IDdgGIBmAAICmgCIAkgBIABABIAAABIAAABIgBAAIhnAFI9ZA8ImVAFIgBgBg',
      )
    this.shape_506.setTransform(-49.075, -121.775)

    this.shape_507 = new cjs.Shape()
    this.shape_507.graphics
      .lf(['#66CCCC', '#FFA902'], [0.478, 1], -848.9, 11.6, 148.9, 11.6)
      .s()
      .p(
        'A3PAvIAAgCIAAAAIAAgBIABgBMAkNgBLQCJgFCKgDIB/gBIDPgEIAugBIACAAIAAACIAAABIgCABIh/AFMgkiABMIn6AIIgCAAg',
      )
    this.shape_507.setTransform(-78.225, -120.8125)

    this.shape_508 = new cjs.Shape()
    this.shape_508.graphics
      .lf(['#66CCCC', '#FFA902'], [0.478, 1], -819.7, 10.6, 178.1, 10.6)
      .s()
      .p(
        'A7yA4IgBgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAIABgBMArRgBaQClgGCkgFICYgCID6gFIA3gCIACABIAAACIAAACIgCAAIiYAGMgrrABbIpgAMIgBgBg',
      )
    this.shape_508.setTransform(-107.4083, -119.85)

    this.shape_509 = new cjs.Shape()
    this.shape_509.graphics
      .lf(['#66CCCC', '#FFA902'], [0.478, 1], -790.6, 9.6, 207.3, 9.6)
      .s()
      .p(
        'EggWABDIgBgCIAAAAIABgCIACgBMAyVgBpIF/gMICxgDIEkgHIBAgCIACABIABACIgBACIgBAAIiyAHMgy0ABqIrEARIgCgBg',
      )
    this.shape_509.setTransform(-136.5833, -118.875)

    this.shape_510 = new cjs.Shape()
    this.shape_510.graphics
      .lf(['#66CCCC', '#FFA902'], [0.478, 1], -761.4, 8.7, 236.4, 8.7)
      .s()
      .p(
        'Egk6ABNIgBgCIAAAAIABgCIACgBMA5agB4QDbgIDagGIDKgEIFOgJIBKgCIACABIABACIgBACIgCABIjLAHMg58AB6IsqAUIgCgBg',
      )
    this.shape_510.setTransform(-165.7333, -117.9083)

    this.shape_511 = new cjs.Shape()
    this.shape_511.graphics
      .lf(['#66CCCC', '#FFA902'], [0.478, 1], -732.2, 7.7, 265.6, 7.7)
      .s()
      .p(
        'EgpeABXIgBgCIABgCIADgBMBAegCIIHsgPIDjgFIF3gLIBTgCIADABIABACIgBACIgCACIjkAIMhBFACIIuPAYIgDgBg',
      )
    this.shape_511.setTransform(-194.925, -116.975)

    this.shape_512 = new cjs.Shape()
    this.shape_512.graphics
      .lf(['#66CCCC', '#FFA902'], [0.478, 1], -703.1, 6.8, 294.8, 6.8)
      .s()
      .p(
        'EguBABiQgBgBAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIABgCQAAgBABAAQAAAAAAgBQABAAAAAAQAAAAABAAMBHjgCWIIigRID8gGIGhgMIBdgDQAAgBAAAAQABAAAAABQAAAAABAAQAAAAAAABIACACQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAgBABIgCABIj8AJMhIOACXIv1AdQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAAAAAAAg',
      )
    this.shape_512.setTransform(-224.075, -116.0062)

    this.shape_513 = new cjs.Shape()
    this.shape_513.graphics
      .lf(['#66CCCC', '#FFA902'], [0.478, 1], -673.9, 5.8, 323.9, 5.8)
      .s()
      .p(
        'EgylABsQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAAAIABgDIACgBMBOogCmIJYgSIEVgIIHMgOIBlgDQABAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAIACADQAAABgBAAQAAAAAAABQAAAAAAAAQgBABAAAAIgDABIkVAKMhPWACmIxaAhIgDgBg',
      )
    this.shape_513.setTransform(-253.25, -115.0312)

    this.shape_514 = new cjs.Shape()
    this.shape_514.graphics
      .lf(['#66CCCC', '#FFA902'], [0.478, 1], -644.7, 4.8, 353.1, 4.8)
      .s()
      .p(
        'Eg3JAB2QAAgBAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAMBVtgC0IKNgUIEugJIH2gQIBvgDQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAAAQAAABAAAAIgBADIgDACIkuAKMhWgAC2Iy/AkQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAgBAAg',
      )
    this.shape_514.setTransform(-282.4312, -114.075)

    this.shape_515 = new cjs.Shape()
    this.shape_515.graphics
      .lf(['#66CCCC', '#FFA902'], [0.478, 1], -615.6, 3.9, 382.3, 3.9)
      .s()
      .p(
        'Eg7tACAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAMBcygDDILDgXIFHgJIIfgRIB5gEQABgBAAAAQABAAAAABQAAAAABAAQAAAAABABIABADQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIlHALMhyMADuQgBAAAAgBQgBAAAAAAQAAAAgBAAQAAgBgBAAg',
      )
    this.shape_515.setTransform(-311.5812, -113.1062)

    this.shape_516 = new cjs.Shape()
    this.shape_516.graphics
      .lf(['#66CCCC', '#FFA902'], [0.478, 1], -586.4, 2.9, 411.5, 2.9)
      .s()
      .p(
        'EhAQACKQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAMBj2gDSIL6gYIFggLIJJgTICCgEQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAIABAEQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAIlgAMMh66AEBQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBg',
      )
    this.shape_516.setTransform(-340.755, -112.1312)

    this.shape_517 = new cjs.Shape()
    this.shape_517.graphics
      .lf(['#66CCCC', '#FFA902'], [0.478, 1], -557.2, 1.9, 440.6, 1.9)
      .s()
      .p(
        'EhE0ACVQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAAAgBIAAAAQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAABAAMBq6gDhIMwgaIF5gMIJzgVICLgEQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAIACAEQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgDACIl6ANMiDoAETQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg',
      )
    this.shape_517.setTransform(-369.93, -111.1562)

    this.shape_518 = new cjs.Shape()
    this.shape_518.graphics
      .lf(['#66CCCC', '#FFA902'], [0.478, 1], -528.1, 1, 469.8, 1)
      .s()
      .p(
        'EhJYACfQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAAAgBQAAgBAAAAQAAgBAAgBQABAAAAgBQAAAAABAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAMBx/gDwINmgcIGSgNIKdgWICUgFQABgBABAAQAAAAABABQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQABABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAABIgEACImSANMiMXAEnQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAg',
      )
    this.shape_518.setTransform(-399.08, -110.205)

    this.shape_519 = new cjs.Shape()
    this.shape_519.graphics
      .lf(['#66CCCC', '#FFA902'], [0.478, 1], -498.9, 0, 499, 0)
      .s()
      .p(
        'EhN8ACpQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQgBgBABgBQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABAAAAgBQABAAABAAMCbvgFIQABAAAAAAQABAAAAABQABAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAABABAAQAAABgBABQAAAAAAABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAgBAAMibvAFIIAAAAQgBAAAAAAQgBAAAAgBQgBAAgBAAQAAgBgBAAg',
      )
    this.shape_519.setTransform(-428.275, -109.25)

    this.shape_520 = new cjs.Shape()
    this.shape_520.graphics
      .lf(['#66CCCC', '#FFA902'], [0.478, 1], -543.8, 1.5, 454, 1.5)
      .s()
      .p(
        'EhG6ACZQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAMB3lgD8IJRgTIEQgJIHIgPIBfgDQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAABIgCAEIgDACIkRAJMiJdAEgQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBg',
      )
    this.shape_520.setTransform(-383.33, -110.73)

    this.shape_521 = new cjs.Shape()
    this.shape_521.graphics
      .lf(['#66CCCC', '#FFA902'], [0.478, 1], -588.8, 3, 409.1, 3)
      .s()
      .p(
        'Eg/4ACKQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAMBrwgDjIIWgRID2gHIGZgNIBWgDQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAIABAEQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAIj2AJMh71AECQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAAAg',
      )
    this.shape_521.setTransform(-338.3562, -112.2062)

    this.shape_522 = new cjs.Shape()
    this.shape_522.graphics
      .lf(['#66CCCC', '#FFA902'], [0.478, 1], -633.7, 4.5, 364.1, 4.5)
      .s()
      .p(
        'Eg43AB6QAAgBAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAMBf7gDKIHbgPIDbgGIFsgLIBMgCQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAABIgBADIgDABIjbAIMhggADLItuAZQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAgBAAg',
      )
    this.shape_522.setTransform(-293.4312, -113.7062)

    this.shape_523 = new cjs.Shape()
    this.shape_523.graphics
      .lf(['#66CCCC', '#FFA902'], [0.478, 1], -678.7, 5.9, 319.2, 5.9)
      .s()
      .p(
        'Egx1ABqQgBAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAgBIADgBMBUGgCxIGggNIDAgEIE+gKIBDgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAABIACADQAAAAAAABQAAAAgBAAQAAAAAAABQAAAAgBAAIgCACIjAAHMhUnACxIsAAVQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAg',
      )
    this.shape_523.setTransform(-248.4812, -115.1812)

    this.shape_524 = new cjs.Shape()
    this.shape_524.graphics
      .lf(['#66CCCC', '#FFA902'], [0.478, 1], -723.6, 7.4, 274.2, 7.4)
      .s()
      .p(
        'Egq0ABaIgBgCIAAAAIABgDIADgBMBIRgCXIFlgLIClgEIEQgHIA4gBQABAAAAAAQABAAAAAAQAAAAAAAAQABAAAAABIABACIgBACIgCACIilAGMhItACYIqSAQIgDgBg',
      )
    this.shape_524.setTransform(-203.55, -116.6812)

    this.shape_525 = new cjs.Shape()
    this.shape_525.graphics
      .lf(['#66CCCC', '#FFA902'], [0.478, 1], -768.6, 8.9, 229.3, 8.9)
      .s()
      .p(
        'EgjzABKIAAgBQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIACgCMA8dgB/QCVgECVgEICJgCIDjgGIAvgBIACABIABACIgBADIgCAAIiKAGMg8zAB/IokALIgDgBg',
      )
    this.shape_525.setTransform(-158.5833, -118.15)

    this.shape_526 = new cjs.Shape()
    this.shape_526.graphics
      .lf(['#66CCCC', '#FFA902'], [0.478, 1], -813.5, 10.4, 184.3, 10.4)
      .s()
      .p(
        'A8xA7IgBgCIAAAAIABgCIABgBMAwogBlIDwgHIBuAAIC0gDIAmgCIACABIAAACIAAACIgCAAIhuAEMgw6ABnIm3AHIgCgBg',
      )
    this.shape_526.setTransform(-113.65, -119.65)

    this.shape_527 = new cjs.Shape()
    this.shape_527.graphics
      .lf(['#66CCCC', '#FFA902'], [0.478, 1], -858.5, 11.9, 139.4, 11.9)
      .s()
      .p(
        'A1wArIAAgBIAAgCIACAAMAkygBNQBagDBagBQAqgBAqABICHgBIAcgBIACABIAAABIAAABIgCABIhUADMglAABNIlJADIgCgBg',
      )
    this.shape_527.setTransform(-68.7, -121.125)

    this.shape_528 = new cjs.Shape()
    this.shape_528.graphics
      .lf(['#66CCCC', '#FFA902'], [0.478, 1], -903.4, 13.4, 94.5, 13.4)
      .s()
      .p(
        'AutAcIgBgBIAAAAIAAgBIAAgBIY+gzQA9gDA9AAIA4ACIBaAAIASAAIABABIAAAAIAAABIgBABIg5ADI5GAzg',
      )
    this.shape_528.setTransform(-23.775, -122.625)

    this.shape_529 = new cjs.Shape()
    this.shape_529.graphics
      .lf(['#66CCCC', '#FFA902'], [0.478, 1], -948.4, 14.8, 49.5, 14.8)
      .s()
      .p(
        'AnsAMIgBgBIAAgBIABAAINIgbQAggBAfABQAPABAPACIArADIAJAAIAAAAIABAAIgBABIAAAAIgfACItNAbg',
      )
    this.shape_529.setTransform(21.2, -124.07)

    this.shape_530 = new cjs.Shape()
    this.shape_530.graphics
      .lf(['#66CCCC', '#FFA902'], [0.478, 1], -993.4, 16.3, 4.4, 16.3)
      .s()
      .p(
        'AgsgEIBTgDQAAAAABAAQAAABABAAQABAAAAAAQABABAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIhTADg',
      )
    this.shape_530.setTransform(66.2626, -125.5626)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: []})
        .to({state: [{t: this.shape_502}]}, 84)
        .to({state: [{t: this.shape_503}]}, 1)
        .to({state: [{t: this.shape_504}]}, 1)
        .to({state: [{t: this.shape_505}]}, 1)
        .to({state: [{t: this.shape_506}]}, 1)
        .to({state: [{t: this.shape_507}]}, 1)
        .to({state: [{t: this.shape_508}]}, 1)
        .to({state: [{t: this.shape_509}]}, 1)
        .to({state: [{t: this.shape_510}]}, 1)
        .to({state: [{t: this.shape_511}]}, 1)
        .to({state: [{t: this.shape_512}]}, 1)
        .to({state: [{t: this.shape_513}]}, 1)
        .to({state: [{t: this.shape_514}]}, 1)
        .to({state: [{t: this.shape_515}]}, 1)
        .to({state: [{t: this.shape_516}]}, 1)
        .to({state: [{t: this.shape_517}]}, 1)
        .to({state: [{t: this.shape_518}]}, 1)
        .to({state: [{t: this.shape_519}]}, 1)
        .to({state: [{t: this.shape_519}]}, 36)
        .to({state: [{t: this.shape_520}]}, 1)
        .to({state: [{t: this.shape_521}]}, 1)
        .to({state: [{t: this.shape_522}]}, 1)
        .to({state: [{t: this.shape_523}]}, 1)
        .to({state: [{t: this.shape_524}]}, 1)
        .to({state: [{t: this.shape_525}]}, 1)
        .to({state: [{t: this.shape_526}]}, 1)
        .to({state: [{t: this.shape_527}]}, 1)
        .to({state: [{t: this.shape_528}]}, 1)
        .to({state: [{t: this.shape_529}]}, 1)
        .to({state: [{t: this.shape_530}]}, 1)
        .to({state: []}, 1)
        .wait(41),
    )

    // Calque_3
    this.shape_531 = new cjs.Shape()
    this.shape_531.graphics
      .lf(['#66CCCC', '#FFA902'], [0.478, 1], 40.9, 36.6, 1219.3, 36.6)
      .s()
      .p(
        'AgRAFQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAIApACIAAALg',
      )
    this.shape_531.setTransform(-924.3376, -90.1501)

    this.shape_532 = new cjs.Shape()
    this.shape_532.graphics
      .lf(['#66CCCC', '#FAA708'], [0.478, 1], 19.9, 35.5, 1198.4, 35.5)
      .s()
      .p('AiYgBIgvgEIgigFIAAgBQAZgCAaAAQASgBASABIFQAPIAsAIIAAABIguAEg')
    this.shape_532.setTransform(-903.35, -89.0625)

    this.shape_533 = new cjs.Shape()
    this.shape_533.graphics
      .lf(['#66CCCC', '#F5A60E'], [0.478, 1], -1.1, 34.5, 1177.4, 34.5)
      .s()
      .p(
        'AkfgHIhYgGIhEgGIAAgBIAAgBIAAAAIBlAAQAhAAAjACIJ3AdIBXAKIAAAAIAAABIhcACg',
      )
    this.shape_533.setTransform(-882.35, -88.0583)

    this.shape_534 = new cjs.Shape()
    this.shape_534.graphics
      .lf(['#66CCCC', '#F0A414'], [0.478, 1], -22.1, 33.6, 1156.4, 33.6)
      .s()
      .p(
        'AIEAfIuqgsIiDgIIhjgIIgBAAIAAgCIABAAICWADQAxABAyACIOeAsICCAMIABAAIAAABg',
      )
    this.shape_534.setTransform(-861.375, -87.125)

    this.shape_535 = new cjs.Shape()
    this.shape_535.graphics
      .lf(['#66CCCC', '#ECA21A'], [0.478, 1], -43, 32.6, 1135.4, 32.6)
      .s()
      .p(
        'AKnAnIzTg6IitgKIiEgJIgBgBIAAgBIAAgBIABAAIDHAGQBAABBDADITEA6ICuANIABABIAAABIgBAAg',
      )
    this.shape_535.setTransform(-840.4, -86.125)

    this.shape_536 = new cjs.Shape()
    this.shape_536.graphics
      .lf(['#66CCCC', '#E7A11F'], [0.478, 1], -64, 31.6, 1114.4, 31.6)
      .s()
      .p(
        'ANLAuI3+hIIjYgMIikgLIgBAAIAAgBIAAgBIAAgBIABAAID5AIICiAHIXsBIIDYAPIABABIAAABIAAAAIgBABg',
      )
    this.shape_536.setTransform(-819.4, -85.1)

    this.shape_537 = new cjs.Shape()
    this.shape_537.graphics
      .lf(['#66CCCC', '#E29F25'], [0.478, 1], -85, 30.6, 1093.4, 30.6)
      .s()
      .p(
        'AUCA/IkTgII8phXIkBgOIjGgMIgBgBIAAAAIAAgBIAAgBIABAAIEqAKQBhADBhAFIcTBWIEEARIABABIAAABIAAABIgBAAg',
      )
    this.shape_537.setTransform(-798.425, -84.1125)

    this.shape_538 = new cjs.Shape()
    this.shape_538.graphics
      .lf(['#66CCCC', '#DD9D2B'], [0.478, 1], -106, 29.6, 1072.5, 29.6)
      .s()
      .p(
        'ASSA+MghTgBlIksgQIjmgNIgBgBIAAgBIAAgBIAAgBIABAAIFcAOQBxADBwAGMAg6ABkIEwATIAAAAIABABIgBABIAAABg',
      )
    this.shape_538.setTransform(-777.45, -83.1)

    this.shape_539 = new cjs.Shape()
    this.shape_539.graphics
      .lf(['#66CCCC', '#D89B31'], [0.478, 1], -127, 28.5, 1051.5, 28.5)
      .s()
      .p(
        'AU2BGMgl9gB0IlWgRIkIgPIgBgBIAAgBIAAgBIAAgBQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIGNAPQB/AFCCAGMAlhABzIFaAVIACAAIAAABIAAACIgCAAg',
      )
    this.shape_539.setTransform(-756.45, -82.0833)

    this.shape_540 = new cjs.Shape()
    this.shape_540.graphics
      .lf(['#66CCCC', '#D39A37'], [0.478, 1], -148, 27.5, 1030.5, 27.5)
      .s()
      .p(
        'AXaBOMgqogCCImAgUIkogQIgBgBIgBgBIAAgBIABgBIABgBIG+ATIEhAMMAqIACBIGGAXIABAAIABACIgBABIgBABg',
      )
    this.shape_540.setTransform(-735.475, -81.075)

    this.shape_541 = new cjs.Shape()
    this.shape_541.graphics
      .lf(['#66CCCC', '#CE983D'], [0.478, 1], -169, 26.5, 1009.5, 26.5)
      .s()
      .p(
        'AZ+BWMgvTgCQImqgWIlJgSIgBgBIgBgBIAAgBIABgBIABgBIHwAVQCgAGCgAIMAuwACPIGwAZIACAAIABACIgBABIgCABg',
      )
    this.shape_541.setTransform(-714.475, -80.075)

    this.shape_542 = new cjs.Shape()
    this.shape_542.graphics
      .lf(['#66CCCC', '#CA9643'], [0.478, 1], -189.9, 25.5, 988.5, 25.5)
      .s()
      .p(
        'AciBeMgz+gCfInVgXIlogUIgCAAIAAgCIAAgBIABgBIABgBIIhAXQCwAHCwAJMAzWACdIHcAaIABABIABACIgBABIgBABg',
      )
    this.shape_542.setTransform(-693.5, -79.075)

    this.shape_543 = new cjs.Shape()
    this.shape_543.graphics
      .lf(['#66CCCC', '#C59549'], [0.478, 1], -210.9, 24.5, 967.5, 24.5)
      .s()
      .p(
        'AfFBmMg4ngCuIn/gZImKgVIgCgBIAAgBIAAgBIABgCIABgBIJTAaIF/ASMA39ACrIIIAcIABABIABACIgBABIgBABg',
      )
    this.shape_543.setTransform(-672.525, -78.05)

    this.shape_544 = new cjs.Shape()
    this.shape_544.graphics
      .lf(['#66CCCC', '#C0934F'], [0.478, 1], -231.9, 23.5, 946.6, 23.5)
      .s()
      .p(
        'EAhpABuMg9SgC8IopgbImqgWIgDgBIAAgCIAAgBIABgCQAAAAAAAAQABAAAAgBQAAAAAAAAQABAAAAABIKDAcIGfATMA8kAC5II0AeIACABIAAACIAAACIgCABg',
      )
    this.shape_544.setTransform(-651.55, -77.0583)

    this.shape_545 = new cjs.Shape()
    this.shape_545.graphics
      .lf(['#66CCCC', '#BB9155'], [0.478, 1], -252.9, 22.5, 925.6, 22.5)
      .s()
      .p(
        'EAkNAB2MhB9gDLIpTgdInLgYIgDgBIAAgBIAAgBIABgCIACgBIK1AfIG/AUMBKpADoIACABIABACIgBACIgCABg',
      )
    this.shape_545.setTransform(-630.55, -76.05)

    this.shape_546 = new cjs.Shape()
    this.shape_546.graphics
      .lf(['#66CCCC', '#B6905A'], [0.478, 1], -273.9, 21.5, 904.6, 21.5)
      .s()
      .p(
        'EAmxAB9MhGogDYIp9gfInsgZIgCgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBIAAAAIABgDQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAILmAhIHeAWMBP8AD4IACABIABACIgBACIgDABg',
      )
    this.shape_546.setTransform(-609.5812, -75.0333)

    this.shape_547 = new cjs.Shape()
    this.shape_547.graphics
      .lf(['#66CCCC', '#B18E60'], [0.478, 1], -294.9, 20.5, 883.6, 20.5)
      .s()
      .p(
        'Egh+gBhIqngiIoMgaIgDgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBIAAAAIABgDIADgBIMXAkIH/AYMBVNAEIIACABQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAAAIgCACQAAABAAAAQgBAAAAAAQAAABAAAAQgBAAAAAAg',
      )
    this.shape_547.setTransform(-588.5812, -74.025)

    this.shape_548 = new cjs.Shape()
    this.shape_548.graphics
      .lf(['#66CCCC', '#AC8C66'], [0.478, 1], -315.8, 19.5, 862.6, 19.5)
      .s()
      .p(
        'EAr4ACNMhP8gD1IrSgjIotgcIgCgBQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAAAABgBIAAAAIABgDQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAINIAnIIeAZMBagAEYIADABIABACIgBADIgDABg',
      )
    this.shape_548.setTransform(-567.6062, -73.0312)

    this.shape_549 = new cjs.Shape()
    this.shape_549.graphics
      .lf(['#66CCCC', '#A78B6C'], [0.478, 1], -336.8, 18.5, 841.6, 18.5)
      .s()
      .p(
        'EgmLgBuIr8gmIpOgdIgCgBQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAAAAIABgDQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAABAAIN6ApII9AbMBfzAEoIACABIABADIgBACIgDABg',
      )
    this.shape_549.setTransform(-546.6312, -72.0083)

    this.shape_550 = new cjs.Shape()
    this.shape_550.graphics
      .lf(['#66CCCC', '#A38972'], [0.478, 1], -357.8, 17.5, 820.7, 17.5)
      .s()
      .p(
        'EgoRgB1IsngnIpugfIgDgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBABAAQAAAAABABIOrArIJdAdMBlFAE3QAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIABADIgBACIgDACg',
      )
    this.shape_550.setTransform(-525.6562, -71.0062)

    this.shape_551 = new cjs.Shape()
    this.shape_551.graphics
      .lf(['#66CCCC', '#9E8778'], [0.478, 1], -378.8, 16.5, 799.7, 16.5)
      .s()
      .p(
        'EgqYgB7ItRgpIqPggIgDgCQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBABAAQAAAAABABIPdAuIJ8AeMBqXAFHQAAAAABAAQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAAAABABQAAAAAAABQAAAAAAABIgBADIgDABg',
      )
    this.shape_551.setTransform(-504.6562, -70.0062)

    this.shape_552 = new cjs.Shape()
    this.shape_552.graphics
      .lf(['#66CCCC', '#99867E'], [0.478, 1], -399.8, 15.5, 778.7, 15.5)
      .s()
      .p(
        'EgsfgCCIt7grIqvghIgEgCQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAQAAgBABAAIADgBIQOAxIKcAgMBvqAFXQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABIgCADIgDABg',
      )
    this.shape_552.setTransform(-483.6812, -69)

    this.shape_553 = new cjs.Shape()
    this.shape_553.graphics
      .lf(['#66CCCC', '#948484'], [0.478, 1], -420.8, 14.4, 757.7, 14.4)
      .s()
      .p(
        'EgumgCIIulguIrQgjQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAIRAAzIK8AhMB07AFoQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABIgCADQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAg',
      )
    this.shape_553.setTransform(-462.6812, -67.9812)

    this.shape_554 = new cjs.Shape()
    this.shape_554.graphics
      .lf(['#66CCCC', '#8F828A'], [0.478, 1], -441.7, 13.4, 736.7, 13.4)
      .s()
      .p(
        'EgwtgCPIvPgvIrwgkIgEgCQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAIRxA2ILbAjMB6OAF4QAAAAABAAQAAAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQABAAAAABIgCADQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAg',
      )
    this.shape_554.setTransform(-441.7062, -66.975)

    this.shape_555 = new cjs.Shape()
    this.shape_555.graphics
      .lf(['#66CCCC', '#8A8090'], [0.478, 1], -462.7, 12.4, 715.7, 12.4)
      .s()
      .p(
        'Egy0gCVIv5gxIsRgmIgEgCQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAISiA5IL7AkMB/gAGIQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAg',
      )
    this.shape_555.setTransform(-420.7312, -65.98)

    this.shape_556 = new cjs.Shape()
    this.shape_556.graphics
      .lf(['#66CCCC', '#857F95'], [0.478, 1], -483.7, 11.4, 694.7, 11.4)
      .s()
      .p(
        'Eg07gCcIwjgzIsygnQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAITUA7IMbAmMCEyAGYQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABIgCAEQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAg',
      )
    this.shape_556.setTransform(-399.73, -64.9562)

    this.shape_557 = new cjs.Shape()
    this.shape_557.graphics
      .lf(['#66CCCC', '#817D9B'], [0.478, 1], -504.7, 10.4, 673.8, 10.4)
      .s()
      .p(
        'Eg3BgCiIxNg1ItTgpQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABABIUFA9IM6AoMCKFAGnQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABgBAAg',
      )
    this.shape_557.setTransform(-378.755, -63.955)

    this.shape_558 = new cjs.Shape()
    this.shape_558.graphics
      .lf(['#66CCCC', '#7C7BA1'], [0.478, 1], -525.7, 9.4, 652.8, 9.4)
      .s()
      .p(
        'Eg5IgCpIx4g3ItzgqIgEgCQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAQAAgBAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAIU3BAINZApMCPXAG4QABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABIgCAEQgBAAAAABQAAAAgBAAQAAABgBAAQgBAAAAAAg',
      )
    this.shape_558.setTransform(-357.78, -62.93)

    this.shape_559 = new cjs.Shape()
    this.shape_559.graphics
      .lf(['#66CCCC', '#777AA7'], [0.478, 1], -546.7, 8.4, 631.8, 8.4)
      .s()
      .p(
        'Eg7PgCvIyig5IuUgrQAAgBgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBgBgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQABgBAAgBQAAAAAAgBQABAAAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABAAABAAIVnBDIN6AqMCUpAHIQAAAAABAAQABAAAAABQABAAAAAAQAAABABAAQAAAAABABQAAAAAAABQABAAAAABQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAg',
      )
    this.shape_559.setTransform(-336.78, -61.955)

    this.shape_560 = new cjs.Shape()
    this.shape_560.graphics
      .lf(['#66CCCC', '#7278AD'], [0.478, 1], -567.6, 7.4, 610.8, 7.4)
      .s()
      .p(
        'EBfXAErMi+tgJJQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBgBAAAAQABgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAAAAABAAMC+tAJJQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABQABABAAAAQgBABAAAAQAAABAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBABgBAAQAAAAgBAAQAAAAgBAAIAAAAg',
      )
    this.shape_560.setTransform(-315.825, -60.95)

    this.shape_561 = new cjs.Shape()
    this.shape_561.graphics
      .lf(['#66CCCC', '#7278AD'], [0.478, 1], 40.9, 36.6, 1219.3, 36.6)
      .s()
      .p(
        'AgRAFQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAIApACIAAALg',
      )
    this.shape_561.setTransform(-924.3376, -90.1501)

    this.shape_562 = new cjs.Shape()
    this.shape_562.graphics
      .lf(['#66CCCC', '#7D7CA0'], [0.478, 1], -5.9, 34.3, 1172.5, 34.3)
      .s()
      .p(
        'Ak+gJQgygCgwgEIhLgGIAAAAIAAgCIAAAAIBwABQAlAAAmABIK7AiIBhAKIAAAAIAAAAIhmABg',
      )
    this.shape_562.setTransform(-877.525, -87.85)

    this.shape_563 = new cjs.Shape()
    this.shape_563.graphics
      .lf(['#66CCCC', '#888093'], [0.478, 1], -52.7, 32.1, 1125.7, 32.1)
      .s()
      .p(
        'ALyArI1chCIjCgLIiSgJIgBAAIAAgCIAAAAIABgBIDeAHQBIACBJADIVNBAIDCAPIAAABIgBABg',
      )
    this.shape_563.setTransform(-830.7, -85.65)

    this.shape_564 = new cjs.Shape()
    this.shape_564.graphics
      .lf(['#66CCCC', '#938386'], [0.478, 1], -99.5, 29.9, 1078.9, 29.9)
      .s()
      .p(
        'ARgA8I/3hhIkfgPIjcgNIgBgBIAAgBIAAgBIAAgBIABAAIFMAMQBrAEBtAFIfgBgIEhATIABAAIAAABIAAACIgBAAg',
      )
    this.shape_564.setTransform(-783.9, -83.4)

    this.shape_565 = new cjs.Shape()
    this.shape_565.graphics
      .lf(['#66CCCC', '#9D8778'], [0.478, 1], -146.4, 27.6, 1032.1, 27.6)
      .s()
      .p(
        'AXNBOMgqRgCBIl9gUIklgQIgBgBIgBgBIAAgBIABgBIABgBIG7ATQCOAFCQAHMApxAB/IGDAXIABABIABABIgBABIgBABg',
      )
    this.shape_565.setTransform(-737.075, -81.175)

    this.shape_566 = new cjs.Shape()
    this.shape_566.graphics
      .lf(['#66CCCC', '#A88B6B'], [0.478, 1], -193.2, 25.4, 985.3, 25.4)
      .s()
      .p(
        'Ac7BfMg0rgChIncgYIltgTIgCgBIgBgCIAAAAIABgCIACgBIIoAYQCyAHCzAJMA0DACfIHjAbIACABIABACIgBABIgCABg',
      )
    this.shape_566.setTransform(-690.275, -78.925)

    this.shape_567 = new cjs.Shape()
    this.shape_567.graphics
      .lf(['#66CCCC', '#B38F5E'], [0.478, 1], -240, 23.1, 938.5, 23.1)
      .s()
      .p(
        'EAioABxMg/FgDBIo5gdIm3gWIgCgBIgBgCIAAgBIABgCIACgBIKXAeIGrATMA+WAC/IJDAfIACABIABACIgBACIgCABg',
      )
    this.shape_567.setTransform(-643.475, -76.675)

    this.shape_568 = new cjs.Shape()
    this.shape_568.graphics
      .lf(['#66CCCC', '#BE9251'], [0.478, 1], -286.8, 20.9, 891.7, 20.9)
      .s()
      .p(
        'EAoWACCMhJggDhIqXggIoAgaIgCgBQAAgBgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAAAAIABgDQAAAAABAAQAAAAAAgBQABAAAAAAQAAAAABABIMEAjIHyAXMBTMAEBQAAAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAIABACIgBADIgCABg',
      )
    this.shape_568.setTransform(-596.6562, -74.4083)

    this.shape_569 = new cjs.Shape()
    this.shape_569.graphics
      .lf(['#66CCCC', '#C99644'], [0.478, 1], -333.6, 18.6, 844.9, 18.6)
      .s()
      .p(
        'Egl2gBtIr1glIpJgdIgDgCQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIAAgBIABgDQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAABINzAoII4AbMBe/AElQAAAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAIABADIgBACIgDACg',
      )
    this.shape_569.setTransform(-549.8562, -72.1583)

    this.shape_570 = new cjs.Shape()
    this.shape_570.graphics
      .lf(['#66CCCC', '#D49A37'], [0.478, 1], -380.4, 16.4, 798.1, 16.4)
      .s()
      .p(
        'EgqjgB8ItTgpIqSggIgDgCQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBABAAQAAAAABABIPgAuIJ/AeMBqxAFJQABAAAAAAQAAAAABAAQAAAAAAAAQABABAAAAIABADIgBADQAAAAgBABQAAAAgBAAQAAAAAAAAQgBABAAAAg',
      )
    this.shape_570.setTransform(-503.0562, -69.9062)

    this.shape_571 = new cjs.Shape()
    this.shape_571.graphics
      .lf(['#66CCCC', '#DE9E29'], [0.478, 1], -427.2, 14.1, 751.2, 14.1)
      .s()
      .p(
        'EgvQgCKIuxguIrbgkQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAIRPA0ILFAhMB2kAFtIADABQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABIgBADQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAg',
      )
    this.shape_571.setTransform(-456.2312, -67.6812)

    this.shape_572 = new cjs.Shape()
    this.shape_572.graphics
      .lf(['#66CCCC', '#E9A11C'], [0.478, 1], -474, 11.9, 704.4, 11.9)
      .s()
      .p(
        'Egz8gCZIwQgyIsjgnIgEgBQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAIS9A5IMMAlMCCWAGRQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAg',
      )
    this.shape_572.setTransform(-409.43, -65.4312)

    this.shape_573 = new cjs.Shape()
    this.shape_573.graphics
      .lf(['#66CCCC', '#F4A50F'], [0.478, 1], -520.8, 9.6, 657.6, 9.6)
      .s()
      .p(
        'Eg4pgCnIxug3ItsgqIgEgCQAAAAgBgBQAAAAAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABAAIUrA/INSApMCOJAG0QABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQgBAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAg',
      )
    this.shape_573.setTransform(-362.605, -63.18)

    this.shape_574 = new cjs.Shape()
    this.shape_574.graphics
      .lf(['#66CCCC', '#FFA902'], [0.478, 1], -567.6, 7.4, 610.8, 7.4)
      .s()
      .p(
        'EBfXAErMi+tgJJQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBgBAAAAQABgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAAAAABAAMC+tAJJQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABQABABAAAAQgBABAAAAQAAABAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBABgBAAQAAAAgBAAQAAAAgBAAIAAAAg',
      )
    this.shape_574.setTransform(-315.825, -60.95)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: []})
        .to({state: [{t: this.shape_531}]}, 50)
        .to({state: [{t: this.shape_532}]}, 1)
        .to({state: [{t: this.shape_533}]}, 1)
        .to({state: [{t: this.shape_534}]}, 1)
        .to({state: [{t: this.shape_535}]}, 1)
        .to({state: [{t: this.shape_536}]}, 1)
        .to({state: [{t: this.shape_537}]}, 1)
        .to({state: [{t: this.shape_538}]}, 1)
        .to({state: [{t: this.shape_539}]}, 1)
        .to({state: [{t: this.shape_540}]}, 1)
        .to({state: [{t: this.shape_541}]}, 1)
        .to({state: [{t: this.shape_542}]}, 1)
        .to({state: [{t: this.shape_543}]}, 1)
        .to({state: [{t: this.shape_544}]}, 1)
        .to({state: [{t: this.shape_545}]}, 1)
        .to({state: [{t: this.shape_546}]}, 1)
        .to({state: [{t: this.shape_547}]}, 1)
        .to({state: [{t: this.shape_548}]}, 1)
        .to({state: [{t: this.shape_549}]}, 1)
        .to({state: [{t: this.shape_550}]}, 1)
        .to({state: [{t: this.shape_551}]}, 1)
        .to({state: [{t: this.shape_552}]}, 1)
        .to({state: [{t: this.shape_553}]}, 1)
        .to({state: [{t: this.shape_554}]}, 1)
        .to({state: [{t: this.shape_555}]}, 1)
        .to({state: [{t: this.shape_556}]}, 1)
        .to({state: [{t: this.shape_557}]}, 1)
        .to({state: [{t: this.shape_558}]}, 1)
        .to({state: [{t: this.shape_559}]}, 1)
        .to({state: [{t: this.shape_560}]}, 1)
        .to({state: [{t: this.shape_561}]}, 44)
        .to({state: [{t: this.shape_562}]}, 1)
        .to({state: [{t: this.shape_563}]}, 1)
        .to({state: [{t: this.shape_564}]}, 1)
        .to({state: [{t: this.shape_565}]}, 1)
        .to({state: [{t: this.shape_566}]}, 1)
        .to({state: [{t: this.shape_567}]}, 1)
        .to({state: [{t: this.shape_568}]}, 1)
        .to({state: [{t: this.shape_569}]}, 1)
        .to({state: [{t: this.shape_570}]}, 1)
        .to({state: [{t: this.shape_571}]}, 1)
        .to({state: [{t: this.shape_572}]}, 1)
        .to({state: [{t: this.shape_573}]}, 1)
        .to({state: [{t: this.shape_574}]}, 1)
        .to({state: []}, 1)
        .wait(53),
    )

    // ligne
    this.shape_575 = new cjs.Shape()
    this.shape_575.graphics
      .lf(['#F8692A', '#8CAA38'], [0, 1], -4.2, -1.1, 388.7, -1.1)
      .s()
      .p('AgkgDIgCgBIBNAAIAAAJIg1AAg')
    this.shape_575.setTransform(71.625, -126.225)

    this.shape_576 = new cjs.Shape()
    this.shape_576.graphics
      .lf(['#F8692A', '#8CAA38'], [0, 1], -8.5, -2.6, 384.4, -2.6)
      .s()
      .p('AAoAGIAVAFIAWAJgAhSgTIBMAAIABAKIAtAPIh6gZg')
    this.shape_576.setTransform(75.95, -124.75)

    this.shape_577 = new cjs.Shape()
    this.shape_577.graphics
      .lf(['#F8692A', '#8CAA38'], [0, 1], -15.6, -4.1, 377.3, -4.1)
      .s()
      .p('AAkAFIBhAUIAUAJgAiYghIBIAAIACAKIByAcIi8gmg')
    this.shape_577.setTransform(82.975, -123.3)

    this.shape_578 = new cjs.Shape()
    this.shape_578.graphics
      .lf(['#F8692A', '#8CAA38'], [0, 1], -22.6, -5.5, 370.3, -5.5)
      .s()
      .p('AAOAAIC+AoIATAJgAjegwIBEAAIADAKIClAmIjsgwg')
    this.shape_578.setTransform(90.025, -121.825)

    this.shape_579 = new cjs.Shape()
    this.shape_579.graphics
      .lf(['#F8692A', '#8CAA38'], [0, 1], -29.6, -7, 363.3, -7)
      .s()
      .p('AgKgEIEeA6IARAKgAkkg/IBAAAIAFAKIDVAxIkag7g')
    this.shape_579.setTransform(97.05, -120.35)

    this.shape_580 = new cjs.Shape()
    this.shape_580.graphics
      .lf(['#F8692A', '#8CAA38'], [0, 1], -36.7, -8.5, 356.2, -8.5)
      .s()
      .p('AAtAHIEuA+IAQAKgAlqhNIA9gBIAFALIC2ApIj4gzg')
    this.shape_580.setTransform(104.075, -118.875)

    this.shape_581 = new cjs.Shape()
    this.shape_581.graphics
      .lf(['#F8692A', '#8CAA38'], [0, 1], -43.7, -10, 349.2, -10)
      .s()
      .p('ACaAeQCFAaCEAbIAOAKgAmwhcIA5AAIAHAKICBAdIjBgng')
    this.shape_581.setTransform(111.1, -117.4)

    this.shape_582 = new cjs.Shape()
    this.shape_582.graphics
      .lf(['#F8692A', '#8CAA38'], [0, 1], -50.7, -11.4, 342.2, -11.4)
      .s()
      .p('AChAfQClAhClAiIANAKgAn3hrIA3AAIAHAKICJAfIjHgpg')
    this.shape_582.setTransform(118.125, -115.925)

    this.shape_583 = new cjs.Shape()
    this.shape_583.graphics
      .lf(['#F8692A', '#8CAA38'], [0, 1], -57.7, -12.9, 335.2, -12.9)
      .s()
      .p('ACVAdQDPApDPArIALAJgAo9h6IA0AAIAHAKIB9AcIi4gmg')
    this.shape_583.setTransform(125.15, -114.45)

    this.shape_584 = new cjs.Shape()
    this.shape_584.graphics
      .lf(['#F8692A', '#8CAA38'], [0, 1], -64.8, -14.4, 328.1, -14.4)
      .s()
      .p('AEIA1QC5AkC5AnIAKAJgAqDiIIAvAAIAJAKIA8ANIh0gXg')
    this.shape_584.setTransform(132.2, -112.975)

    this.shape_585 = new cjs.Shape()
    this.shape_585.graphics
      .lf(['#F8692A', '#8CAA38'], [0, 1], -71.8, -15.8, 321.1, -15.8)
      .s()
      .p('AEHA1QDdArDdAuIAJAKgArJiXIAsAAIAKAKIA0AMIhqgWg')
    this.shape_585.setTransform(139.225, -111.525)

    this.shape_586 = new cjs.Shape()
    this.shape_586.graphics
      .lf(['#F8692A', '#8CAA38'], [0, 1], -78.8, -17.3, 314.1, -17.3)
      .s()
      .p('AD8AyQEHA1EGA2IAHAJgAsPimIApAAIAKAKIAcAGIhPgQg')
    this.shape_586.setTransform(146.225, -110.05)

    this.shape_587 = new cjs.Shape()
    this.shape_587.graphics
      .lf(['#F8692A', '#8CAA38'], [0, 1], -85.9, -18.8, 307, -18.8)
      .s()
      .p('AEVA4QEeA5EdA7IAHAJgAtWi0IAmAAIAMAKIAgAHIhSgRg')
    this.shape_587.setTransform(153.275, -108.575)

    this.shape_588 = new cjs.Shape()
    this.shape_588.graphics
      .lf(['#F8692A', '#8CAA38'], [0, 1], -92.9, -20.3, 300, -20.3)
      .s()
      .p('AHgBiQDcArDcAtIAFAKgAucjCIAjgBIAMAKIALACIg6gLg')
    this.shape_588.setTransform(160.275, -107.1)

    this.shape_589 = new cjs.Shape()
    this.shape_589.graphics
      .lf(['#F8692A', '#8CAA38'], [0, 1], -99.9, -21.7, 293, -21.7)
      .s()
      .p('Au1jIIgBAAIeWGRIADAJgAvijRIAfgBIANAKIgsgJg')
    this.shape_589.setTransform(167.3, -105.65)

    this.shape_590 = new cjs.Shape()
    this.shape_590.graphics
      .lf(['#F8692A', '#8CAA38'], [0, 1], -106.9, -23.2, 286, -23.2)
      .s()
      .p('Av+jWIgCgCMAgnAGwIACAJgAwojgIAbAAIANAIIgogIg')
    this.shape_590.setTransform(174.35, -104.175)

    this.shape_591 = new cjs.Shape()
    this.shape_591.graphics
      .lf(['#F8692A', '#8CAA38'], [0, 1], -114, -24.7, 278.9, -24.7)
      .s()
      .p('AxHjlIgDgCMAi5AHNIAAAKgAxujuIAYgBIAMAIIgkgHg')
    this.shape_591.setTransform(181.375, -102.7)

    this.shape_592 = new cjs.Shape()
    this.shape_592.graphics
      .lf(['#F8692A', '#8CAA38'], [0, 1], -121, -26.1, 271.9, -26.1)
      .s()
      .p('AyQj0IgFgCMAlLAHrIgBAKgAy1j9IAVgBIALAIIgggHg')
    this.shape_592.setTransform(188.45, -101.225)

    this.shape_593 = new cjs.Shape()
    this.shape_593.graphics
      .lf(['#F8692A', '#8CAA38'], [0, 1], -128.1, -27.6, 264.8, -27.6)
      .s()
      .p('AzakDIgHgDMAneAIJIgCAKgAz8kMIARAAIAKAGIgbgGg')
    this.shape_593.setTransform(195.55, -99.75)

    this.shape_594 = new cjs.Shape()
    this.shape_594.graphics
      .lf(['#F8692A', '#8CAA38'], [0, 1], -135.2, -29.1, 257.7, -29.1)
      .s()
      .p('A0ikRIgJgFMApvAIoIgEAKgA1DkbIAOAAIAKAFIgYgFg')
    this.shape_594.setTransform(202.625, -98.275)

    this.shape_595 = new cjs.Shape()
    this.shape_595.graphics
      .lf(['#F8692A', '#8CAA38'], [0, 1], -142.3, -30.6, 250.6, -30.6)
      .s()
      .p('A1skgIgLgGMAsCAJHIgFAJgA2KkpIALAAIAIADIgTgDg')
    this.shape_595.setTransform(209.725, -96.8)

    this.shape_596 = new cjs.Shape()
    this.shape_596.graphics
      .lf(['#F8692A', '#8CAA38'], [0, 1], -149.4, -32, 243.5, -32)
      .s()
      .p('A22kvIgPgHMAuWAJmIgGAJgA3Rk4IAHAAIAFACIgMgCg')
    this.shape_596.setTransform(216.85, -95.325)

    this.shape_597 = new cjs.Shape()
    this.shape_597.graphics
      .lf(['#F8692A', '#8CAA38'], [0, 1], -156.5, -33.5, 236.4, -33.5)
      .s()
      .p('A3+k9IgTgIMAwpAKDIgHAKgA4XlHIADAAIADACIgGgCg')
    this.shape_597.setTransform(223.925, -93.875)

    this.shape_598 = new cjs.Shape()
    this.shape_598.graphics
      .lf(['#F8692A', '#8CAA38'], [0, 1], -163.6, -34.9, 229.3, -34.9)
      .s()
      .p('A5IlMIgWgJIAAgBMAy9AKjIgJAKg')
    this.shape_598.setTransform(231.0125, -92.4125)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: []})
        .to({state: [{t: this.shape_575}]}, 30)
        .to({state: [{t: this.shape_576}]}, 1)
        .to({state: [{t: this.shape_577}]}, 1)
        .to({state: [{t: this.shape_578}]}, 1)
        .to({state: [{t: this.shape_579}]}, 1)
        .to({state: [{t: this.shape_580}]}, 1)
        .to({state: [{t: this.shape_581}]}, 1)
        .to({state: [{t: this.shape_582}]}, 1)
        .to({state: [{t: this.shape_583}]}, 1)
        .to({state: [{t: this.shape_584}]}, 1)
        .to({state: [{t: this.shape_585}]}, 1)
        .to({state: [{t: this.shape_586}]}, 1)
        .to({state: [{t: this.shape_587}]}, 1)
        .to({state: [{t: this.shape_588}]}, 1)
        .to({state: [{t: this.shape_589}]}, 1)
        .to({state: [{t: this.shape_590}]}, 1)
        .to({state: [{t: this.shape_591}]}, 1)
        .to({state: [{t: this.shape_592}]}, 1)
        .to({state: [{t: this.shape_593}]}, 1)
        .to({state: [{t: this.shape_594}]}, 1)
        .to({state: [{t: this.shape_595}]}, 1)
        .to({state: [{t: this.shape_596}]}, 1)
        .to({state: [{t: this.shape_597}]}, 1)
        .to({state: [{t: this.shape_598}]}, 1)
        .to({state: []}, 69)
        .wait(68),
    )

    // ligne
    this.shape_599 = new cjs.Shape()
    this.shape_599.graphics
      .lf(['#F8692A', '#7278AD'], [0, 1], -233.4, -46.9, 6.1, -46.9)
      .s()
      .p('AA8AZIgaAAIhegmIAAgLIB5AxIgBAAg')
    this.shape_599.setTransform(300.6, -30.225)

    this.shape_600 = new cjs.Shape()
    this.shape_600.graphics
      .lf(['#F8692A', '#7278AD'], [0, 1], -228.1, -44.9, 11.4, -44.9)
      .s()
      .p('ABpAtIgjgHIiohFIgHgNIAAAAIDUBYIAAAAIgBACgAhqgsIAAAAIAAAAIABAAg')
    this.shape_600.setTransform(295.325, -32.3)

    this.shape_601 = new cjs.Shape()
    this.shape_601.graphics
      .lf(['#F8692A', '#7278AD'], [0, 1], -223, -42.8, 16.5, -42.8)
      .s()
      .p('ACZBAIABAAIAAABgABnAzIjvhjIgQgQIEwB+IAAABIABABgAiZhAIABAAIAAAAg')
    this.shape_601.setTransform(290.2, -34.375)

    this.shape_602 = new cjs.Shape()
    this.shape_602.graphics
      .lf(['#F8692A', '#7278AD'], [0, 1], -217.8, -40.7, 21.7, -40.7)
      .s()
      .p(
        'ADFBSIAFACIAAABgACJBAIk5iBIgVgRIGJCjIABABgAjIhTIAAgBIAAAAIAAAAIgBAAIAAgBIABAAIADADg',
      )
    this.shape_602.setTransform(285.075, -36.45)

    this.shape_603 = new cjs.Shape()
    this.shape_603.graphics
      .lf(['#F8692A', '#7278AD'], [0, 1], -212.8, -38.6, 26.7, -38.6)
      .s()
      .p(
        'ADyBlIgCgBIAKAEIAAACgACqBOImCigIgagSIHiDIgAj4hmIAAgBIgBAAIAAgBIAAAAIAAgBIABAAIAGAFg',
      )
    this.shape_603.setTransform(280.025, -38.55)

    this.shape_604 = new cjs.Shape()
    this.shape_604.graphics
      .lf(['#F8692A', '#7278AD'], [0, 1], -207.7, -36.6, 31.8, -36.6)
      .s()
      .p(
        'AEfB4IgDgBIgKgFIAYAIIgBADgADLBaInKi9IgfgUIIwDpgAkoh6IAAgBIAAgBIgBAAIAAgBIABAAIAKAGg',
      )
    this.shape_604.setTransform(274.925, -40.6)

    this.shape_605 = new cjs.Shape()
    this.shape_605.graphics
      .lf(['#F8692A', '#7278AD'], [0, 1], -202.6, -34.5, 36.9, -34.5)
      .s()
      .p(
        'AFMCLIgEgCIgOgGIAgAMIgBACgADsBoIoSjcIgigUIKCELgAlXiOIgBAAIgBgBIAAAAIAAgBIAAAAIAAAAIACAAIAPAIg',
      )
    this.shape_605.setTransform(269.85, -42.7)

    this.shape_606 = new cjs.Shape()
    this.shape_606.graphics
      .lf(['#F8692A', '#7278AD'], [0, 1], -197.5, -32.4, 42, -32.4)
      .s()
      .p(
        'AF5CeIgFgCIgmgQIA8AWIgBAEgAENB0Ipbj5IgigTIK+EkgAmIiiIAAAAIgBAAIAAgBIAAgBIAAAAIAAAAIAAAAIAAgBIABAAIABAAIAXANg',
      )
    this.shape_606.setTransform(264.775, -44.775)

    this.shape_607 = new cjs.Shape()
    this.shape_607.graphics
      .lf(['#F8692A', '#7278AD'], [0, 1], -192.4, -30.3, 47.1, -30.3)
      .s()
      .p(
        'AGmCxIgFgCIhBgbIBaAiIgCAEgAl2iWIgjgTICsBJgAm3i1IgBAAIAAgBIgBAAIAAgBIAAAAIAAgBIAAAAIABAAIAAgBIABABIAeAPg',
      )
    this.shape_607.setTransform(259.675, -46.875)

    this.shape_608 = new cjs.Shape()
    this.shape_608.graphics
      .lf(['#F8692A', '#7278AD'], [0, 1], -187.4, -28.2, 52.1, -28.2)
      .s()
      .p(
        'AHSDEIgFgDIhngrICFAzIgDAFgAmdinIgbgOIB8A1gAnojJIAAAAIAAAAIgBgBIAAAAIAAgCIAAAAIAAAAIAAAAIAAgBIABAAIABAAIAvAYg',
      )
    this.shape_608.setTransform(254.6, -48.925)

    this.shape_609 = new cjs.Shape()
    this.shape_609.graphics
      .lf(['#F8692A', '#7278AD'], [0, 1], -182.3, -26.1, 57.2, -26.1)
      .s()
      .p(
        'AH/DXIgGgDIiIg5ICpBCIgCAFgAoXjcIgBgBIAAAAIgBAAIAAgBIAAgBIAAAAIAAgBIABgBIABAAIABAAIA9Aeg',
      )
    this.shape_609.setTransform(249.525, -51.025)

    this.shape_610 = new cjs.Shape()
    this.shape_610.graphics
      .lf(['#F8692A', '#7278AD'], [0, 1], -177.2, -24.1, 62.3, -24.1)
      .s()
      .p(
        'AIsDqIgHgEIihhDIDGBNIgDAGgApHjwIAAAAIgBAAIAAgBIgBAAIAAgDIAAAAIABgBIAAAAIABAAIABAAIBNAlg',
      )
    this.shape_610.setTransform(244.425, -53.1)

    this.shape_611 = new cjs.Shape()
    this.shape_611.graphics
      .lf(['#F8692A', '#7278AD'], [0, 1], -172.1, -22, 67.4, -22)
      .s()
      .p(
        'AJZD9IgIgEIzIn9IgBAAIgBgBIAAAAIAAgCIAAAAIAAgBIABgBIABAAIABAAIBiAuIPHGQIDHBPIgDAGg',
      )
    this.shape_611.setTransform(239.375, -55.175)

    this.shape_612 = new cjs.Shape()
    this.shape_612.graphics
      .lf(['#F8692A', '#7278AD'], [0, 1], -167, -19.9, 72.5, -19.9)
      .s()
      .p(
        'AKGEQIgJgEI0kokIAAAAIgBAAIgBgBIAAgCIAAAAIABgBIAAAAIABgBIABABIBrAwIQQGuIDVBVIgEAHg',
      )
    this.shape_612.setTransform(234.275, -57.25)

    this.shape_613 = new cjs.Shape()
    this.shape_613.graphics
      .lf(['#F8692A', '#7278AD'], [0, 1], -161.9, -17.8, 77.6, -17.8)
      .s()
      .p(
        'AKzEjIgKgEI1/pKIgBAAIgCgBIAAgDIAAgBIABgBIABAAIABAAIABAAIByA0IU9IoIgEAHg',
      )
    this.shape_613.setTransform(229.1875, -59.35)

    this.shape_614 = new cjs.Shape()
    this.shape_614.graphics
      .lf(['#F8692A', '#7278AD'], [0, 1], -156.9, -15.8, 82.6, -15.8)
      .s()
      .p(
        'ALgE2IgLgFI3cpvIAAgBIgBAAIgBgBIAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIAAAAIABgBIAAAAIACAAIABAAIB7A3IShHrIDzBhIgEAIg',
      )
    this.shape_614.setTransform(224.125, -61.4)

    this.shape_615 = new cjs.Shape()
    this.shape_615.graphics
      .lf(['#F8692A', '#7278AD'], [0, 1], -151.8, -13.7, 87.7, -13.7)
      .s()
      .p(
        'AMNFJIgMgFI43qWIgBgBIgCgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIAAAAIAAAAIABgBIABAAIABgBIABABICDA5IXsJxIgFAIg',
      )
    this.shape_615.setTransform(219.025, -63.5)

    this.shape_616 = new cjs.Shape()
    this.shape_616.graphics
      .lf(['#F8692A', '#7278AD'], [0, 1], -146.7, -11.6, 92.8, -11.6)
      .s()
      .p(
        'AM5FcIgMgFI6Uq9IAAAAIgBgBIgBgBIAAgDIAAgBIABAAIAAgBIACAAIABAAIbPLSIgFAJg',
      )
    this.shape_616.setTransform(213.9625, -65.575)

    this.shape_617 = new cjs.Shape()
    this.shape_617.graphics
      .lf(['#F8692A', '#7278AD'], [0, 1], -141.6, -9.5, 97.9, -9.5)
      .s()
      .p(
        'ANmFvIgNgGI7vriIgBgBIgBAAIgBgBIAAgBIAAgDIAAAAIABgBIABgBIABAAIACAAIcuL6IgFAJg',
      )
    this.shape_617.setTransform(208.8625, -67.675)

    this.shape_618 = new cjs.Shape()
    this.shape_618.graphics
      .lf(['#F8692A', '#7278AD'], [0, 1], -136.5, -7.4, 103, -7.4)
      .s()
      .p(
        'AOTGCIgNgGI9MsJIgBgBIgBAAIAAgBIgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBIAAAAIAAgBIABgBIABAAIACAAIABAAIeOMhIgGAKg',
      )
    this.shape_618.setTransform(203.775, -69.725)

    this.shape_619 = new cjs.Shape()
    this.shape_619.graphics
      .lf(['#F8692A', '#7278AD'], [0, 1], -131.5, -5.3, 108, -5.3)
      .s()
      .p(
        'APBGVIgQgGI+nswIgBAAIgCgBIAAgBQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAAAIABgBIABgBIACAAIACAAIftNJIgGAKg',
      )
    this.shape_619.setTransform(198.7, -71.825)

    this.shape_620 = new cjs.Shape()
    this.shape_620.graphics
      .lf(['#F8692A', '#7278AD'], [0, 1], -126.4, -3.3, 113.1, -3.3)
      .s()
      .p(
        'APtGnIgPgFMggEgNWIgBAAIgBgBIgBgBIAAgBIAAgEIAAgBIABAAIABgBIACAAIACAAMAhNANxIgGAKg',
      )
    this.shape_620.setTransform(193.6125, -73.9)

    this.shape_621 = new cjs.Shape()
    this.shape_621.graphics
      .lf(['#F8692A', '#7278AD'], [0, 1], -121.3, -1.2, 118.2, -1.2)
      .s()
      .p(
        'AQaG7IgRgHMghggN8IAAgBIgBgBIgBgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBIABAAIAAgBIABgBIACAAIACAAMAitAOYIgHALg',
      )
    this.shape_621.setTransform(188.55, -75.975)

    this.shape_622 = new cjs.Shape()
    this.shape_622.graphics
      .lf(['#F8692A', '#7278AD'], [0, 1], -116.2, 0.9, 123.3, 0.9)
      .s()
      .p(
        'AyFncIgBAAIgBgBIgBgBIgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgCIABgBIABAAIACgBIACABMAkMAO/IgHAMg',
      )
    this.shape_622.setTransform(183.4375, -78.05)

    this.shape_623 = new cjs.Shape()
    this.shape_623.graphics
      .lf(['#F8692A', '#7278AD'], [0, 1], -119.7, 0, 119.8, 0)
      .s()
      .p(
        'AStHvIgaAAMgk8gPTIgBAAIAAgBIgBgBIgBgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBIABgBIABgBIAAAAIACgBIACABMAlUAPcIgBAAg',
      )
    this.shape_623.setTransform(186.95, -77.2)

    this.shape_624 = new cjs.Shape()
    this.shape_624.graphics
      .lf(['#F8692A', '#7278AD'], [0, 1], -113.6, 2.5, 125.9, 2.5)
      .s()
      .p(
        'AuYlzIgagLIgmgPIgZgLIh7gzIgBgBIAAAAIgBgBIgBgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBIABgBIABgBIAAAAIACgBIACABIAaAKIAlAQIA0AVIBNAgIAzAVIfmNFIgBAAIgYABg',
      )
    this.shape_624.setTransform(180.85, -79.7)

    this.shape_625 = new cjs.Shape()
    this.shape_625.graphics
      .lf(['#F8692A', '#7278AD'], [0, 1], -107.5, 5, 132, 5)
      .s()
      .p(
        'AQyG9IgWAAI+DscIgYgKIgkgPIgYgKIh0gwIgBgBIAAAAIgBgBIgBgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBIABgBIABgBIAAAAIACAAIACAAIAYAKIAkAPIAxATIBIAeIAxAUId5MaIgBAAg',
      )
    this.shape_625.setTransform(174.725, -82.2)

    this.shape_626 = new cjs.Shape()
    this.shape_626.graphics
      .lf(['#F8692A', '#7278AD'], [0, 1], -101.4, 7.5, 138.1, 7.5)
      .s()
      .p(
        'As2lLIgXgJIghgOIgXgKIhtguIgBAAIAAgBIgBgBIgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgBIABAAIAAgBIACAAIACAAIAXAJIAhAOIAuASIBFAdIAtATIcNLsIgBAAIgVAAg',
      )
    this.shape_626.setTransform(168.625, -84.7)

    this.shape_627 = new cjs.Shape()
    this.shape_627.graphics
      .lf(['#F8692A', '#7278AD'], [0, 1], -95.3, 10, 144.2, 10)
      .s()
      .p(
        'AO4GKIgUAAI6orAIgWgJIgggOIgVgJIhmgrIgBgBIgBAAIAAgBIgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBIABgBIAAAAIABgBIACAAIABAAIAWAJIAgANIAqARIBBAbIArARIagLAIgBAAg',
      )
    this.shape_627.setTransform(162.525, -87.225)

    this.shape_628 = new cjs.Shape()
    this.shape_628.graphics
      .lf(['#F8692A', '#7278AD'], [0, 1], -89.2, 12.5, 150.3, 12.5)
      .s()
      .p(
        'ArTkjIgUgIIgegNIgUgIIhfgpIgBAAIgBAAIAAgCIgBAAIAAgDIABgBIAAAAIABgBIACAAIABAAIAUAIIAeAMIAoARIA8AYIAoAQIY0KUIgUAAg',
      )
    this.shape_628.setTransform(156.4125, -89.7)

    this.shape_629 = new cjs.Shape()
    this.shape_629.graphics
      .lf(['#F8692A', '#7278AD'], [0, 1], -83.1, 15, 156.4, 15)
      .s()
      .p(
        'AM+FYIgSAAI3OpmIgTgIIgbgMIgTgIIhYgmIgBAAIgBgBIAAAAIgBgBIAAgDIABAAIAAgBIABAAIABgBIACABIASAHIAcALIAlAPIA4AXIAmAPIXHJnIgBAAg',
      )
    this.shape_629.setTransform(150.3125, -92.225)

    this.shape_630 = new cjs.Shape()
    this.shape_630.graphics
      .lf(['#F8692A', '#7278AD'], [0, 1], -77, 17.5, 162.5, 17.5)
      .s()
      .p(
        'Apwj6IgSgHIgZgLIgSgIIhRgjIgBgBIAAAAIgBgBIAAAAIAAgDIAAAAIABgBIAAAAIACgBIABABIARAGIAaALIAiANIA0AVIAjAOIVaI6IgRABg',
      )
    this.shape_630.setTransform(144.1875, -94.725)

    this.shape_631 = new cjs.Shape()
    this.shape_631.graphics
      .lf(['#F8692A', '#7278AD'], [0, 1], -70.9, 20, 168.6, 20)
      .s()
      .p(
        'Ao/jmIgQgHIgYgKIgQgHIhKghIgBAAIAAgBIgBgBIAAgCIAAgBIABAAIAAAAIABAAIACAAIAPAGIAYAJIAgAMIAvATIAgAOIR+HcIBwAxIgQAAg',
      )
    this.shape_631.setTransform(138.0875, -97.2)

    this.shape_632 = new cjs.Shape()
    this.shape_632.graphics
      .lf(['#F8692A', '#7278AD'], [0, 1], -64.8, 22.5, 174.7, 22.5)
      .s()
      .p(
        'AoOjSIgPgGIgVgJIgPgHIhDgeIgBAAIAAgBIgBAAIAAgBIAAgCIAAAAIABgBIAAAAIABAAIABAAIAPAFIAVAJIAdALIAsARIAdAMIQbGzIBmAuIgOAAg',
      )
    this.shape_632.setTransform(131.9875, -99.725)

    this.shape_633 = new cjs.Shape()
    this.shape_633.graphics
      .lf(['#F8692A', '#7278AD'], [0, 1], -58.7, 25, 180.8, 25)
      .s()
      .p(
        'Andi+IgNgFIgTgJIgNgGIg+gbIAAgBIgBAAIAAAAIAAgBIAAgCIAAAAIAAgBIABAAIABAAIABAAIANAFIATAHIAaAKIAoAQIAbALIO4GKIBbAqIgMAAg',
      )
    this.shape_633.setTransform(125.8625, -102.225)

    this.shape_634 = new cjs.Shape()
    this.shape_634.graphics
      .lf(['#F8692A', '#7278AD'], [0, 1], -52.6, 27.6, 186.9, 27.6)
      .s()
      .p(
        'AmripIgMgGIgSgIIgLgEIg3gZIAAgBIgBAAIAAAAIAAgBIAAgBIAAgBIAAgBIABAAIABAAIAAAAIAMAFIASAGIAXAJIAjAOIAYAJINWFiIBRAmIAAAAIgLAAg',
      )
    this.shape_634.setTransform(119.7625, -104.75)

    this.shape_635 = new cjs.Shape()
    this.shape_635.graphics
      .lf(['#F8692A', '#7278AD'], [0, 1], -46.5, 30, 193, 30)
      .s()
      .p(
        'Al6iWIgLgEIgPgHIgKgFIgwgWIAAAAIgBgBIAAAAIAAAAIAAgCIAAAAIAAAAIABgBIAAAAIABAAIAKAEIAQAFIAUAIIAfAMIAWAJILzE4IBHAiIAAAAIgKABg',
      )
    this.shape_635.setTransform(113.6625, -107.225)

    this.shape_636 = new cjs.Shape()
    this.shape_636.graphics
      .lf(['#F8692A', '#7278AD'], [0, 1], -40.3, 32.5, 199.2, 32.5)
      .s()
      .p(
        'AFxCfIq6khIgJgEIgNgGIgJgEIgpgUIAAAAIgBAAIAAgCIAAAAIABAAIAAgBIABAAIAJADIANAFIASAHIAbAKIATAHIKQEQIA9AeIgIABg',
      )
    this.shape_636.setTransform(107.5375, -109.725)

    this.shape_637 = new cjs.Shape()
    this.shape_637.graphics
      .lf(['#F8692A', '#7278AD'], [0, 1], -34.2, 35.1, 205.3, 35.1)
      .s()
      .p(
        'AE6CIIpRj2IgIgCIgLgGIgIgDIgigRIAAgBIgBAAIAAAAIAAgBIAAgBIABAAIAAgBIABABIAHACIAMADIAPAGIAWAJIAQAGIIuDmIAzAbIgHAAg',
      )
    this.shape_637.setTransform(101.4375, -112.25)

    this.shape_638 = new cjs.Shape()
    this.shape_638.graphics
      .lf(['#F8692A', '#7278AD'], [0, 1], -28.1, 37.5, 211.4, 37.5)
      .s()
      .p(
        'AECBxInojLIgHgCIgJgFIgGgDIgbgOIgBgBIAAgBIABAAIABAAIAGABIAJADIAMAEIATAHIANAFIHLC+IApAWIgGABg',
      )
    this.shape_638.setTransform(95.325, -114.725)

    this.shape_639 = new cjs.Shape()
    this.shape_639.graphics
      .lf(['#F8692A', '#7278AD'], [0, 1], -22, 40.1, 217.5, 40.1)
      .s()
      .p(
        'ADLBaImAifIgFgCIgHgEIgFgDIgUgLIgBAAIAAgCIABAAIAFABIAHACIAJADIAPAFIAKADIFpCWIAfATIgEAAg',
      )
    this.shape_639.setTransform(89.225, -117.25)

    this.shape_640 = new cjs.Shape()
    this.shape_640.graphics
      .lf(['#F8692A', '#7278AD'], [0, 1], -15.9, 42.6, 223.6, 42.6)
      .s()
      .p(
        'ACTBCIkXhzIgDgCIgGgCIgDgCIgNgKIgBAAIAAAAIABgBIADABIAFABIAHACIAKACIAIADIEGBtIAVAOIgDABg',
      )
    this.shape_640.setTransform(83.125, -119.75)

    this.shape_641 = new cjs.Shape()
    this.shape_641.graphics
      .lf(['#F8692A', '#7278AD'], [0, 1], -9.8, 45, 229.7, 45)
      .s()
      .p(
        'AhQgdIgCgBIgCgBIgEgCIgCgBIgHgHIAAAAIABAAIABgBIAEAAIADABIAHABIAEACIClBDIAKALIgBABIgFABg',
      )
    this.shape_641.setTransform(77, -122.2)

    this.shape_642 = new cjs.Shape()
    this.shape_642.graphics
      .lf(['#F8692A', '#7278AD'], [0, 1], -3.7, 47.6, 235.8, 47.6)
      .s()
      .p(
        'AgggIIgBgBIgBAAIgBgBIAAgBQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAIAAgBIABgBIABgBIACAAIACAAIBCAbIAAAKg',
      )
    this.shape_642.setTransform(70.875, -124.7625)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: []})
        .to({state: [{t: this.shape_599}]}, 30)
        .to({state: [{t: this.shape_600}]}, 1)
        .to({state: [{t: this.shape_601}]}, 1)
        .to({state: [{t: this.shape_602}]}, 1)
        .to({state: [{t: this.shape_603}]}, 1)
        .to({state: [{t: this.shape_604}]}, 1)
        .to({state: [{t: this.shape_605}]}, 1)
        .to({state: [{t: this.shape_606}]}, 1)
        .to({state: [{t: this.shape_607}]}, 1)
        .to({state: [{t: this.shape_608}]}, 1)
        .to({state: [{t: this.shape_609}]}, 1)
        .to({state: [{t: this.shape_610}]}, 1)
        .to({state: [{t: this.shape_611}]}, 1)
        .to({state: [{t: this.shape_612}]}, 1)
        .to({state: [{t: this.shape_613}]}, 1)
        .to({state: [{t: this.shape_614}]}, 1)
        .to({state: [{t: this.shape_615}]}, 1)
        .to({state: [{t: this.shape_616}]}, 1)
        .to({state: [{t: this.shape_617}]}, 1)
        .to({state: [{t: this.shape_618}]}, 1)
        .to({state: [{t: this.shape_619}]}, 1)
        .to({state: [{t: this.shape_620}]}, 1)
        .to({state: [{t: this.shape_621}]}, 1)
        .to({state: [{t: this.shape_622}]}, 1)
        .to({state: [{t: this.shape_623}]}, 49)
        .to({state: [{t: this.shape_624}]}, 1)
        .to({state: [{t: this.shape_625}]}, 1)
        .to({state: [{t: this.shape_626}]}, 1)
        .to({state: [{t: this.shape_627}]}, 1)
        .to({state: [{t: this.shape_628}]}, 1)
        .to({state: [{t: this.shape_629}]}, 1)
        .to({state: [{t: this.shape_630}]}, 1)
        .to({state: [{t: this.shape_631}]}, 1)
        .to({state: [{t: this.shape_632}]}, 1)
        .to({state: [{t: this.shape_633}]}, 1)
        .to({state: [{t: this.shape_634}]}, 1)
        .to({state: [{t: this.shape_635}]}, 1)
        .to({state: [{t: this.shape_636}]}, 1)
        .to({state: [{t: this.shape_637}]}, 1)
        .to({state: [{t: this.shape_638}]}, 1)
        .to({state: [{t: this.shape_639}]}, 1)
        .to({state: [{t: this.shape_640}]}, 1)
        .to({state: [{t: this.shape_641}]}, 1)
        .to({state: [{t: this.shape_642}]}, 1)
        .to({state: []}, 1)
        .wait(68),
    )

    // ligne
    this.shape_643 = new cjs.Shape()
    this.shape_643.graphics
      .lf(['#79BE8C', '#FE9544'], [0, 1], -5, -17.8, 793.7, 196.2)
      .s()
      .p('AhYgOIgEgCIAAgEIACgEQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAICzAoIgDAJg')
    this.shape_643.setTransform(-667.1875, -164.8333)

    this.shape_644 = new cjs.Shape()
    this.shape_644.graphics
      .lf(['#79BE8C', '#FE9544'], [0, 1], -34.5, -15.7, 765.9, 185.7)
      .s()
      .p('Aj7gNIgNgCIgHgEIgBAAIAAgBQAGgCAGgBQAGgBAHABIICAmIAGAEIAAABIgLAFg')
    this.shape_644.setTransform(-649.125, -164.8583)

    this.shape_645 = new cjs.Shape()
    this.shape_645.graphics
      .lf(['#79BE8C', '#FE9544'], [0, 1], -64, -13.7, 738, 175.1)
      .s()
      .p('AmfgMIgWgCIgPgEIgBAAIAAgBIAWgDQALgBAMAAINRAmIAOADIAAACIgXAEg')
    this.shape_645.setTransform(-631, -164.9083)

    this.shape_646 = new cjs.Shape()
    this.shape_646.graphics
      .lf(['#79BE8C', '#FE9544'], [0, 1], -93.6, -11.6, 710.1, 164.6)
      .s()
      .p('ApCgMIgfgCIgXgDIgCAAIAAgCQAQgCARgBQAPgBAQABIShAkIAUADIAAACIggAEg')
    this.shape_646.setTransform(-612.9, -164.9333)

    this.shape_647 = new cjs.Shape()
    this.shape_647.graphics
      .lf(['#79BE8C', '#FE9544'], [0, 1], -123.1, -9.6, 682.2, 154)
      .s()
      .p('ArmgLIgogCIgfgDIgCAAIABgDQAVgCAWAAIAoAAIXvAiIAcADIAAADIgqAEg')
    this.shape_647.setTransform(-594.8, -164.9625)

    this.shape_648 = new cjs.Shape()
    this.shape_648.graphics
      .lf(['#79BE8C', '#FE9544'], [0, 1], -152.6, -7.5, 654.4, 143.6)
      .s()
      .p('AuJgKIgygCIgmgDIgDAAIABgEIA1gBIAygBIc/AiIAjADIAAADIg1ADg')
    this.shape_648.setTransform(-576.7, -165)

    this.shape_649 = new cjs.Shape()
    this.shape_649.graphics
      .lf(['#79BE8C', '#FE9544'], [0, 1], -182.2, -5.5, 626.5, 133)
      .s()
      .p('AwtgKIg7gBIgtgDIgFAAIACgEIA/gCIA7AAMAi5AAjIAAADIg/ADg')
    this.shape_649.setTransform(-558.575, -165.0375)

    this.shape_650 = new cjs.Shape()
    this.shape_650.graphics
      .lf(['#79BE8C', '#FE9544'], [0, 1], -211.7, -3.4, 598.6, 122.5)
      .s()
      .p('AzQgJIhEgBIg1gDIgGAAIADgFQAkgBAlAAIBEAAMAoPAAhIAAAEIhKADg')
    this.shape_650.setTransform(-540.475, -165.0625)

    this.shape_651 = new cjs.Shape()
    this.shape_651.graphics
      .lf(['#79BE8C', '#FE9544'], [0, 1], -241.3, -1.4, 570.7, 111.9)
      .s()
      .p('A10gIIhNgBIg8gDIgHAAIADgGIBTgBIBOAAMAtlAAgIAAAFIhUACg')
    this.shape_651.setTransform(-522.375, -165.1)

    this.shape_652 = new cjs.Shape()
    this.shape_652.graphics
      .lf(['#79BE8C', '#FE9544'], [0, 1], -270.8, 0.7, 542.8, 101.4)
      .s()
      .p('A4XgIIhXgBIhEgCIgHAAIADgGIBegBIBWAAMAy8AAeIAAAFIheADg')
    this.shape_652.setTransform(-504.275, -165.1125)

    this.shape_653 = new cjs.Shape()
    this.shape_653.graphics
      .lf(['#79BE8C', '#FE9544'], [0, 1], -300.4, 2.7, 514.9, 90.8)
      .s()
      .p('A67gHIhggCIhLgBIgIAAIADgHIBogBIBgAAMA4SAAdIAAAGIhoACg')
    this.shape_653.setTransform(-486.175, -165.15)

    this.shape_654 = new cjs.Shape()
    this.shape_654.graphics
      .lf(['#79BE8C', '#FE9544'], [0, 1], -329.9, 4.9, 487.1, 80.4)
      .s()
      .p('A9egFIhpgCIhTgBIgJAAIAEgIIBygBIBpAAMA9oAAcIAAAGg')
    this.shape_654.setTransform(-468.075, -165.25)

    this.shape_655 = new cjs.Shape()
    this.shape_655.graphics
      .lf(['#79BE8C', '#FE9544'], [0, 1], -359.4, 6.9, 459.2, 69.9)
      .s()
      .p('EggCgAFIhygBIhbgBIgKAAIAFgJIB8AAIByAAMBDAAAaIAAAHg')
    this.shape_655.setTransform(-449.95, -165.3)

    this.shape_656 = new cjs.Shape()
    this.shape_656.graphics
      .lf(['#79BE8C', '#FE9544'], [0, 1], -389, 9, 431.3, 59.3)
      .s()
      .p('EgimgAEIh7gCIhhgBIgMAAIAFgJICHAAIB7AAMBIVAAZIAAAIg')
    this.shape_656.setTransform(-431.85, -165.3)

    this.shape_657 = new cjs.Shape()
    this.shape_657.graphics
      .lf(['#79BE8C', '#FE9544'], [0, 1], -418.5, 11, 403.4, 48.7)
      .s()
      .p('EglJgADIiFgCIhpAAIgMAAIAGgKICQAAICFAAMBNrAAXIAAAIg')
    this.shape_657.setTransform(-413.75, -165.325)

    this.shape_658 = new cjs.Shape()
    this.shape_658.graphics
      .lf(['#79BE8C', '#FE9544'], [0, 1], -448, 13, 375.6, 38.2)
      .s()
      .p('EgntgADIiNgBIhxAAIgNAAIAGgLICaABICOAAMBTCAAVIAAAJg')
    this.shape_658.setTransform(-395.65, -165.35)

    this.shape_659 = new cjs.Shape()
    this.shape_659.graphics
      .lf(['#79BE8C', '#FE9544'], [0, 1], -477.5, 15.1, 347.7, 27.7)
      .s()
      .p('EgqQgACIiXgBIh5AAIgNAAIAGgMIClABICXAAMBYZAAUIAAAJg')
    this.shape_659.setTransform(-377.525, -165.4)

    this.shape_660 = new cjs.Shape()
    this.shape_660.graphics
      .lf(['#79BE8C', '#FE9544'], [0, 1], -507.1, 17.1, 319.8, 17.1)
      .s()
      .p('EgxigACIAGgMMBi/AATIAAAKg')
    this.shape_660.setTransform(-359.425, -165.425)

    this.shape_661 = new cjs.Shape()
    this.shape_661.graphics
      .lf(['#79BE8C', '#FE9544'], [0, 1], -470.7, 14.8, 354.2, 30.1)
      .s()
      .p('AWZAKMg7FgAKIpUgCIAFgLIOMACIL0ADMBB8AANIAAAKg')
    this.shape_661.setTransform(-382.075, -165.45)

    this.shape_662 = new cjs.Shape()
    this.shape_662.graphics
      .lf(['#79BE8C', '#FE9544'], [0, 1], -434.2, 12.5, 388.6, 43)
      .s()
      .p('AUrALMg2kgALIomgCIAFgLINFADIK7ADMA86AAMIAAAIg')
    this.shape_662.setTransform(-404.7, -165.5)

    this.shape_663 = new cjs.Shape()
    this.shape_663.graphics
      .lf(['#79BE8C', '#FE9544'], [0, 1], -397.9, 10.1, 423, 55.9)
      .s()
      .p('AS9ALMgyDgALIn4gCIAFgKIMAACIKAACMA33AAMIAAAIg')
    this.shape_663.setTransform(-427.35, -165.5)

    this.shape_664 = new cjs.Shape()
    this.shape_664.graphics
      .lf(['#79BE8C', '#FE9544'], [0, 1], -361.4, 7.7, 457.4, 68.8)
      .s()
      .p('ARQALMgtigALInLgCIAFgJIK6ABIJHACMAy1AANIAAAHg')
    this.shape_664.setTransform(-450, -165.525)

    this.shape_665 = new cjs.Shape()
    this.shape_665.graphics
      .lf(['#79BE8C', '#FE9544'], [0, 1], -325, 5.3, 491.8, 81.7)
      .s()
      .p('APjAKQ0kgG0dgEImdgCIAEgIIJ1ABIIMABMAtyAANIAAAGg')
    this.shape_665.setTransform(-472.65, -165.55)

    this.shape_666 = new cjs.Shape()
    this.shape_666.graphics
      .lf(['#79BE8C', '#FE9544'], [0, 1], -288.6, 2.9, 526.2, 94.6)
      .s()
      .p('A2rAAIlvgCIAEgHIIvAAIHTABMAovAAMIAAAFIumABQyUgGyMgEg')
    this.shape_666.setTransform(-495.275, -165.55)

    this.shape_667 = new cjs.Shape()
    this.shape_667.graphics
      .lf(['#79BE8C', '#FE9544'], [0, 1], -252.2, 0.5, 560.6, 107.5)
      .s()
      .p('Az3AAIlBgDIADgGIHpAAIGZABMAjsAALIAAAFIsxACQwFgHv6gDg')
    this.shape_667.setTransform(-517.925, -165.525)

    this.shape_668 = new cjs.Shape()
    this.shape_668.graphics
      .lf(['#79BE8C', '#FE9544'], [0, 1], -215.8, -1.8, 595, 120.4)
      .s()
      .p('AxEAAIkTgDIADgFIGkgBIFfABIepALIAAAFIq+ACQt0gHtqgDg')
    this.shape_668.setTransform(-540.575, -165.55)

    this.shape_669 = new cjs.Shape()
    this.shape_669.graphics
      .lf(['#79BE8C', '#FE9544'], [0, 1], -179.4, -4.3, 629.4, 133.3)
      .s()
      .p('AuRAAIjkgDIABgFIFfgBQCSAACTABIZnAKIAAAEIpKAEQrlgIrZgCg')
    this.shape_669.setTransform(-563.2, -165.5333)

    this.shape_670 = new cjs.Shape()
    this.shape_670.graphics
      .lf(['#79BE8C', '#FE9544'], [0, 1], -142.9, -6.6, 663.8, 146.2)
      .s()
      .p('ArdAAIi3gDIABgEQCNgBCMAAQB2gBB2ABIUjAKIAAADInWAFQpVgIpHgCg')
    this.shape_670.setTransform(-585.85, -165.5583)

    this.shape_671 = new cjs.Shape()
    this.shape_671.graphics
      .lf(['#79BE8C', '#FE9544'], [0, 1], -106.5, -9, 698.2, 159.1)
      .s()
      .p('AopAAIiKgEIACgCIDSgCQBZgBBZABIPhAKIAAACIliAGQnGgIm1gCg')
    this.shape_671.setTransform(-608.5, -165.5583)

    this.shape_672 = new cjs.Shape()
    this.shape_672.graphics
      .lf(['#79BE8C', '#FE9544'], [0, 1], -70.1, -11.4, 732.6, 172)
      .s()
      .p('Al2AAIhbgEIAAgBICOgDIB3AAIKfAKIAAABIjvAHQk1gJklgBg')
    this.shape_672.setTransform(-631.15, -165.5625)

    this.shape_673 = new cjs.Shape()
    this.shape_673.graphics
      .lf(['#79BE8C', '#FE9544'], [0, 1], -33.7, -13.8, 767, 184.9)
      .s()
      .p('AjCAAIgugEIAAgBQAkgCAkgBQAegBAgABIFbAJIAAABIh6AHQingIiSgBg')
    this.shape_673.setTransform(-653.775, -165.5833)

    this.shape_674 = new cjs.Shape()
    this.shape_674.graphics
      .lf(['#79BE8C', '#FE9544'], [0, 1], 2.7, -16.2, 801.4, 197.8)
      .s()
      .p(
        'AgPAAIAAgEIACgEQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAIAZAJIgHAIQgWgJgCAAg',
      )
    this.shape_674.setTransform(-676.4375, -165.5833)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: []})
        .to({state: [{t: this.shape_643}]}, 64)
        .to({state: [{t: this.shape_644}]}, 1)
        .to({state: [{t: this.shape_645}]}, 1)
        .to({state: [{t: this.shape_646}]}, 1)
        .to({state: [{t: this.shape_647}]}, 1)
        .to({state: [{t: this.shape_648}]}, 1)
        .to({state: [{t: this.shape_649}]}, 1)
        .to({state: [{t: this.shape_650}]}, 1)
        .to({state: [{t: this.shape_651}]}, 1)
        .to({state: [{t: this.shape_652}]}, 1)
        .to({state: [{t: this.shape_653}]}, 1)
        .to({state: [{t: this.shape_654}]}, 1)
        .to({state: [{t: this.shape_655}]}, 1)
        .to({state: [{t: this.shape_656}]}, 1)
        .to({state: [{t: this.shape_657}]}, 1)
        .to({state: [{t: this.shape_658}]}, 1)
        .to({state: [{t: this.shape_659}]}, 1)
        .to({state: [{t: this.shape_660}]}, 1)
        .to({state: [{t: this.shape_660}]}, 50)
        .to({state: [{t: this.shape_661}]}, 1)
        .to({state: [{t: this.shape_662}]}, 1)
        .to({state: [{t: this.shape_663}]}, 1)
        .to({state: [{t: this.shape_664}]}, 1)
        .to({state: [{t: this.shape_665}]}, 1)
        .to({state: [{t: this.shape_666}]}, 1)
        .to({state: [{t: this.shape_667}]}, 1)
        .to({state: [{t: this.shape_668}]}, 1)
        .to({state: [{t: this.shape_669}]}, 1)
        .to({state: [{t: this.shape_670}]}, 1)
        .to({state: [{t: this.shape_671}]}, 1)
        .to({state: [{t: this.shape_672}]}, 1)
        .to({state: [{t: this.shape_673}]}, 1)
        .to({state: [{t: this.shape_674}]}, 1)
        .to({state: []}, 1)
        .wait(44),
    )

    // Calque_12 (mask)
    var mask = new cjs.Shape()
    mask._off = true
    var mask_graphics_0 = new cjs.Graphics().p('EgC2AsOMAAAhYbIFtAAMAAABYbg')
    var mask_graphics_1 = new cjs.Graphics().p('EgHUAsOMAAAhYbIOpAAMAAABYbg')
    var mask_graphics_2 = new cjs.Graphics().p('EgLyAsOMAAAhYbIXlAAMAAABYbg')
    var mask_graphics_3 = new cjs.Graphics().p('EgQQAsOMAAAhYbMAghAAAMAAABYbg')
    var mask_graphics_4 = new cjs.Graphics().p('EgUtAsOMAAAhYbMApbAAAMAAABYbg')
    var mask_graphics_5 = new cjs.Graphics().p('EgZLAsOMAAAhYbMAyXAAAMAAABYbg')
    var mask_graphics_6 = new cjs.Graphics().p('EgdpAsOMAAAhYbMA7TAAAMAAABYbg')
    var mask_graphics_7 = new cjs.Graphics().p('EgiGAsOMAAAhYbMBEOAAAMAAABYbg')
    var mask_graphics_8 = new cjs.Graphics().p('EgmlAsOMAAAhYbMBNLAAAMAAABYbg')
    var mask_graphics_9 = new cjs.Graphics().p('EgrCAsOMAAAhYbMBWFAAAMAAABYbg')
    var mask_graphics_10 = new cjs.Graphics().p('EgvgAsOMAAAhYbMBfBAAAMAAABYbg')
    var mask_graphics_11 = new cjs.Graphics().p('Egz+AsOMAAAhYbMBn9AAAMAAABYbg')
    var mask_graphics_12 = new cjs.Graphics().p('Eg4bAsOMAAAhYbMBw3AAAMAAABYbg')
    var mask_graphics_13 = new cjs.Graphics().p('Eg85AsOMAAAhYbMB5zAAAMAAABYbg')
    var mask_graphics_14 = new cjs.Graphics().p('EhBXAsOMAAAhYbMCCvAAAMAAABYbg')
    var mask_graphics_15 = new cjs.Graphics().p('EhF1AsOMAAAhYbMCLqAAAMAAABYbg')
    var mask_graphics_16 = new cjs.Graphics().p('EhHDAsOMAAAhYbMCOHAAAMAAABYbg')
    var mask_graphics_17 = new cjs.Graphics().p('EhIRAsOMAAAhYbMCQjAAAMAAABYbg')
    var mask_graphics_18 = new cjs.Graphics().p('EhJfAsOMAAAhYbMCS/AAAMAAABYbg')
    var mask_graphics_19 = new cjs.Graphics().p('EhKtAsOMAAAhYbMCVbAAAMAAABYbg')
    var mask_graphics_20 = new cjs.Graphics().p('EhL7AsOMAAAhYbMCX3AAAMAAABYbg')
    var mask_graphics_21 = new cjs.Graphics().p('EhNJAsOMAAAhYbMCaTAAAMAAABYbg')
    var mask_graphics_22 = new cjs.Graphics().p('EhOXAsOMAAAhYbMCcvAAAMAAABYbg')
    var mask_graphics_23 = new cjs.Graphics().p('EhPlAsOMAAAhYbMCfLAAAMAAABYbg')
    var mask_graphics_24 = new cjs.Graphics().p('EhQzAsOMAAAhYbMChnAAAMAAABYbg')
    var mask_graphics_25 = new cjs.Graphics().p('EhSCAsOMAAAhYbMCkEAAAMAAABYbg')
    var mask_graphics_26 = new cjs.Graphics().p('EhTQAsOMAAAhYbMCmhAAAMAAABYbg')
    var mask_graphics_27 = new cjs.Graphics().p('EhUeAsOMAAAhYbMCo9AAAMAAABYbg')
    var mask_graphics_28 = new cjs.Graphics().p('EhVsAsOMAAAhYbMCrZAAAMAAABYbg')
    var mask_graphics_29 = new cjs.Graphics().p('EhW6AsOMAAAhYbMCt1AAAMAAABYbg')
    var mask_graphics_30 = new cjs.Graphics().p('EhYIAsOMAAAhYbMCwRAAAMAAABYbg')
    var mask_graphics_31 = new cjs.Graphics().p('EhZWAsOMAAAhYbMCytAAAMAAABYbg')
    var mask_graphics_32 = new cjs.Graphics().p('EhakAsOMAAAhYbMC1JAAAMAAABYbg')
    var mask_graphics_33 = new cjs.Graphics().p('EhbyAsOMAAAhYbMC3lAAAMAAABYbg')
    var mask_graphics_34 = new cjs.Graphics().p('EhdAAsOMAAAhYbMC6BAAAMAAABYbg')
    var mask_graphics_35 = new cjs.Graphics().p('EhdKAsOMAAAhYbMC6VAAAMAAABYbg')
    var mask_graphics_36 = new cjs.Graphics().p('EhdUAsOMAAAhYbMC6pAAAMAAABYbg')
    var mask_graphics_37 = new cjs.Graphics().p('EhdeAsOMAAAhYbMC69AAAMAAABYbg')
    var mask_graphics_38 = new cjs.Graphics().p('EhdoAsOMAAAhYbMC7QAAAMAAABYbg')
    var mask_graphics_39 = new cjs.Graphics().p('EhdxAsOMAAAhYbMC7jAAAMAAABYbg')
    var mask_graphics_40 = new cjs.Graphics().p('Ehd7AsOMAAAhYbMC73AAAMAAABYbg')
    var mask_graphics_41 = new cjs.Graphics().p('EheFAsOMAAAhYbMC8LAAAMAAABYbg')
    var mask_graphics_42 = new cjs.Graphics().p('EhePAsOMAAAhYbMC8fAAAMAAABYbg')
    var mask_graphics_43 = new cjs.Graphics().p('EheYAsOMAAAhYbMC8xAAAMAAABYbg')
    var mask_graphics_44 = new cjs.Graphics().p('EheiAsOMAAAhYbMC9FAAAMAAABYbg')
    var mask_graphics_45 = new cjs.Graphics().p('EhesAsOMAAAhYbMC9ZAAAMAAABYbg')
    var mask_graphics_46 = new cjs.Graphics().p('Ehe2AsOMAAAhYbMC9tAAAMAAABYbg')
    var mask_graphics_47 = new cjs.Graphics().p('EhfAAsOMAAAhYbMC+BAAAMAAABYbg')
    var mask_graphics_48 = new cjs.Graphics().p('EhfJAsOMAAAhYbMC+TAAAMAAABYbg')
    var mask_graphics_49 = new cjs.Graphics().p('EhfTAsOMAAAhYbMC+nAAAMAAABYbg')
    var mask_graphics_50 = new cjs.Graphics().p('EhfdAsOMAAAhYbMC+7AAAMAAABYbg')
    var mask_graphics_51 = new cjs.Graphics().p('EhfnAsOMAAAhYbMC/PAAAMAAABYbg')
    var mask_graphics_52 = new cjs.Graphics().p('EhfxAsOMAAAhYbMC/jAAAMAAABYbg')
    var mask_graphics_53 = new cjs.Graphics().p('Ehf6AsOMAAAhYbMC/1AAAMAAABYbg')
    var mask_graphics_54 = new cjs.Graphics().p('EhgEAsOMAAAhYbMDAJAAAMAAABYbg')
    var mask_graphics_55 = new cjs.Graphics().p('EhgOAsOMAAAhYbMDAdAAAMAAABYbg')
    var mask_graphics_56 = new cjs.Graphics().p('EhgYAsOMAAAhYbMDAxAAAMAAABYbg')
    var mask_graphics_57 = new cjs.Graphics().p('EhgiAsOMAAAhYbMDBEAAAMAAABYbg')
    var mask_graphics_58 = new cjs.Graphics().p('EhgrAsOMAAAhYbMDBXAAAMAAABYbg')
    var mask_graphics_59 = new cjs.Graphics().p('Ehg1AsOMAAAhYbMDBrAAAMAAABYbg')
    var mask_graphics_60 = new cjs.Graphics().p('EhhOAsOMAAAhYbMDCcAAAMAAABYbg')
    var mask_graphics_61 = new cjs.Graphics().p('EhhmAsOMAAAhYbMDDNAAAMAAABYbg')
    var mask_graphics_62 = new cjs.Graphics().p('Ehh/AsOMAAAhYbMDD/AAAMAAABYbg')
    var mask_graphics_63 = new cjs.Graphics().p('EhiXAsOMAAAhYbMDEvAAAMAAABYbg')
    var mask_graphics_64 = new cjs.Graphics().p('EhiwAsOMAAAhYbMDFhAAAMAAABYbg')
    var mask_graphics_65 = new cjs.Graphics().p('EhjIAsOMAAAhYbMDGRAAAMAAABYbg')
    var mask_graphics_66 = new cjs.Graphics().p('EhjhAsOMAAAhYbMDHDAAAMAAABYbg')
    var mask_graphics_67 = new cjs.Graphics().p('Ehj6AsOMAAAhYbMDH0AAAMAAABYbg')
    var mask_graphics_68 = new cjs.Graphics().p('EhkSAsOMAAAhYbMDIlAAAMAAABYbg')
    var mask_graphics_69 = new cjs.Graphics().p('EhkrAsOMAAAhYbMDJWAAAMAAABYbg')
    var mask_graphics_70 = new cjs.Graphics().p('EhlDAsOMAAAhYbMDKHAAAMAAABYbg')
    var mask_graphics_71 = new cjs.Graphics().p('EhlcAsOMAAAhYbMDK5AAAMAAABYbg')
    var mask_graphics_72 = new cjs.Graphics().p('Ehl0AsOMAAAhYbMDLpAAAMAAABYbg')
    var mask_graphics_73 = new cjs.Graphics().p('EhmNAsOMAAAhYbMDMbAAAMAAABYbg')
    var mask_graphics_74 = new cjs.Graphics().p('EhmlAsOMAAAhYbMDNLAAAMAAABYbg')
    var mask_graphics_75 = new cjs.Graphics().p('Ehm+AsOMAAAhYbMDN9AAAMAAABYbg')
    var mask_graphics_76 = new cjs.Graphics().p('EhnXAsOMAAAhYbMDOvAAAMAAABYbg')
    var mask_graphics_77 = new cjs.Graphics().p('EhnvAsOMAAAhYbMDPfAAAMAAABYbg')
    var mask_graphics_78 = new cjs.Graphics().p('EhoIAsOMAAAhYbMDQQAAAMAAABYbg')
    var mask_graphics_79 = new cjs.Graphics().p('EhoiAsOMAAAhYbMDRFAAAMAAABYbg')
    var mask_graphics_80 = new cjs.Graphics().p('Eho9AsOMAAAhYbMDR7AAAMAAABYbg')
    var mask_graphics_81 = new cjs.Graphics().p('EhpYAsOMAAAhYbMDSxAAAMAAABYbg')
    var mask_graphics_82 = new cjs.Graphics().p('EhpzAsOMAAAhYbMDTmAAAMAAABYbg')
    var mask_graphics_83 = new cjs.Graphics().p('EhqNAsOMAAAhYbMDUbAAAMAAABYbg')
    var mask_graphics_84 = new cjs.Graphics().p('EhqoAsOMAAAhYbMDVRAAAMAAABYbg')
    var mask_graphics_85 = new cjs.Graphics().p('EhrDAsOMAAAhYbMDWHAAAMAAABYbg')
    var mask_graphics_86 = new cjs.Graphics().p('EhreAsOMAAAhYbMDW8AAAMAAABYbg')
    var mask_graphics_87 = new cjs.Graphics().p('Ehr4AsOMAAAhYbMDXxAAAMAAABYbg')
    var mask_graphics_88 = new cjs.Graphics().p('EhsTAsOMAAAhYbMDYnAAAMAAABYbg')
    var mask_graphics_89 = new cjs.Graphics().p('EhsuAsOMAAAhYbMDZdAAAMAAABYbg')
    var mask_graphics_90 = new cjs.Graphics().p('EhtJAsOMAAAhYbMDaTAAAMAAABYbg')
    var mask_graphics_91 = new cjs.Graphics().p('EhtjAsOMAAAhYbMDbHAAAMAAABYbg')
    var mask_graphics_92 = new cjs.Graphics().p('Eht+AsOMAAAhYbMDb9AAAMAAABYbg')
    var mask_graphics_93 = new cjs.Graphics().p('EhuZAsOMAAAhYbMDczAAAMAAABYbg')
    var mask_graphics_94 = new cjs.Graphics().p('Ehu0AsOMAAAhYbMDdpAAAMAAABYbg')
    var mask_graphics_95 = new cjs.Graphics().p('EhqtAsOMAAAhYbMDVbAAAMAAABYbg')
    var mask_graphics_96 = new cjs.Graphics().p('EhmmAsOMAAAhYbMDNNAAAMAAABYbg')
    var mask_graphics_97 = new cjs.Graphics().p('EhifAsOMAAAhYbMDE/AAAMAAABYbg')
    var mask_graphics_98 = new cjs.Graphics().p('EheYAsOMAAAhYbMC8xAAAMAAABYbg')
    var mask_graphics_99 = new cjs.Graphics().p('EhaRAsOMAAAhYbMC0jAAAMAAABYbg')
    var mask_graphics_100 = new cjs.Graphics().p(
      'EhWKAsOMAAAhYbMCsVAAAMAAABYbg',
    )
    var mask_graphics_101 = new cjs.Graphics().p(
      'EhSDAsOMAAAhYbMCkHAAAMAAABYbg',
    )
    var mask_graphics_102 = new cjs.Graphics().p(
      'EhN8AsOMAAAhYbMCb5AAAMAAABYbg',
    )
    var mask_graphics_103 = new cjs.Graphics().p(
      'EhJ1AsOMAAAhYbMCTrAAAMAAABYbg',
    )
    var mask_graphics_104 = new cjs.Graphics().p(
      'EhFvAsOMAAAhYbMCLeAAAMAAABYbg',
    )
    var mask_graphics_105 = new cjs.Graphics().p(
      'EhBnAsOMAAAhYbMCDPAAAMAAABYbg',
    )
    var mask_graphics_106 = new cjs.Graphics().p(
      'Eg9hAsOMAAAhYbMB7CAAAMAAABYbg',
    )
    var mask_graphics_107 = new cjs.Graphics().p(
      'Eg5ZAsOMAAAhYbMByzAAAMAAABYbg',
    )
    var mask_graphics_108 = new cjs.Graphics().p(
      'Eg1TAsOMAAAhYbMBqmAAAMAAABYbg',
    )
    var mask_graphics_109 = new cjs.Graphics().p(
      'EgxMAsOMAAAhYbMBiZAAAMAAABYbg',
    )
    var mask_graphics_110 = new cjs.Graphics().p(
      'EgtFAsOMAAAhYbMBaLAAAMAAABYbg',
    )
    var mask_graphics_111 = new cjs.Graphics().p(
      'Ego+AsOMAAAhYbMBR9AAAMAAABYbg',
    )
    var mask_graphics_112 = new cjs.Graphics().p(
      'EgnDAsOMAAAhYbMBOHAAAMAAABYbg',
    )
    var mask_graphics_113 = new cjs.Graphics().p(
      'EglJAsOMAAAhYbMBKTAAAMAAABYbg',
    )
    var mask_graphics_114 = new cjs.Graphics().p(
      'EgjOAsOMAAAhYbMBGdAAAMAAABYbg',
    )
    var mask_graphics_115 = new cjs.Graphics().p(
      'EghUAsOMAAAhYbMBCpAAAMAAABYbg',
    )
    var mask_graphics_116 = new cjs.Graphics().p(
      'EgfaAsOMAAAhYbMA+1AAAMAAABYbg',
    )
    var mask_graphics_117 = new cjs.Graphics().p(
      'EgdfAsOMAAAhYbMA6/AAAMAAABYbg',
    )
    var mask_graphics_118 = new cjs.Graphics().p(
      'EgblAsOMAAAhYbMA3LAAAMAAABYbg',
    )
    var mask_graphics_119 = new cjs.Graphics().p(
      'EgZrAsOMAAAhYbMAzXAAAMAAABYbg',
    )
    var mask_graphics_120 = new cjs.Graphics().p(
      'EgXwAsOMAAAhYbMAvhAAAMAAABYbg',
    )
    var mask_graphics_121 = new cjs.Graphics().p(
      'EgV2AsOMAAAhYbMArtAAAMAAABYbg',
    )
    var mask_graphics_122 = new cjs.Graphics().p(
      'EgT7AsOMAAAhYbMAn4AAAMAAABYbg',
    )
    var mask_graphics_123 = new cjs.Graphics().p(
      'EgSBAsOMAAAhYbMAkDAAAMAAABYbg',
    )
    var mask_graphics_124 = new cjs.Graphics().p(
      'EgQHAsOMAAAhYbMAgPAAAMAAABYbg',
    )
    var mask_graphics_125 = new cjs.Graphics().p('EgOMAsOMAAAhYbIcZAAMAAABYbg')
    var mask_graphics_126 = new cjs.Graphics().p('EgNUAsOMAAAhYbIapAAMAAABYbg')
    var mask_graphics_127 = new cjs.Graphics().p('EgMcAsOMAAAhYbIY5AAMAAABYbg')
    var mask_graphics_128 = new cjs.Graphics().p('EgLkAsOMAAAhYbIXJAAMAAABYbg')
    var mask_graphics_129 = new cjs.Graphics().p('EgKsAsOMAAAhYbIVZAAMAAABYbg')
    var mask_graphics_130 = new cjs.Graphics().p('EgJ0AsOMAAAhYbITpAAMAAABYbg')
    var mask_graphics_131 = new cjs.Graphics().p('EgI8AsOMAAAhYbIR5AAMAAABYbg')
    var mask_graphics_132 = new cjs.Graphics().p('EgIDAsOMAAAhYbIQIAAMAAABYbg')
    var mask_graphics_133 = new cjs.Graphics().p('EgHMAsOMAAAhYbIOZAAMAAABYbg')
    var mask_graphics_134 = new cjs.Graphics().p('EgGUAsOMAAAhYbIMoAAMAAABYbg')
    var mask_graphics_135 = new cjs.Graphics().p('EgFbAsOMAAAhYbIK3AAMAAABYbg')
    var mask_graphics_136 = new cjs.Graphics().p('EgEkAsOMAAAhYbIJIAAMAAABYbg')
    var mask_graphics_137 = new cjs.Graphics().p('EgDrAsOMAAAhYbIHXAAMAAABYbg')
    var mask_graphics_138 = new cjs.Graphics().p('EgCzAsOMAAAhYbIFnAAMAAABYbg')
    var mask_graphics_139 = new cjs.Graphics().p('EgB7AsOMAAAhYbID3AAMAAABYbg')
    var mask_graphics_140 = new cjs.Graphics().p('EgBDAsOMAAAhYbICHAAMAAABYbg')

    this.timeline.addTween(
      cjs.Tween.get(mask)
        .to({graphics: mask_graphics_0, x: -913.55, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_1, x: -884.975, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_2, x: -856.4, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_3, x: -827.825, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_4, x: -799.275, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_5, x: -770.7, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_6, x: -742.125, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_7, x: -713.55, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_8, x: -685, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_9, x: -656.425, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_10, x: -627.85, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_11, x: -599.275, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_12, x: -570.725, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_13, x: -542.15, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_14, x: -513.575, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_15, x: -485, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_16, x: -477.2, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_17, x: -469.375, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_18, x: -461.575, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_19, x: -453.775, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_20, x: -445.95, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_21, x: -438.15, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_22, x: -430.35, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_23, x: -422.525, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_24, x: -414.725, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_25, x: -406.95, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_26, x: -399.15, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_27, x: -391.325, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_28, x: -383.525, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_29, x: -375.725, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_30, x: -367.9, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_31, x: -360.1, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_32, x: -352.3, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_33, x: -344.475, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_34, x: -336.675, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_35, x: -335.7, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_36, x: -334.725, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_37, x: -333.75, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_38, x: -332.75, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_39, x: -331.775, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_40, x: -330.8, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_41, x: -329.825, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_42, x: -328.85, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_43, x: -327.875, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_44, x: -326.875, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_45, x: -325.9, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_46, x: -324.925, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_47, x: -323.95, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_48, x: -322.975, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_49, x: -322, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_50, x: -321, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_51, x: -320.025, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_52, x: -319.05, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_53, x: -318.075, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_54, x: -317.1, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_55, x: -316.125, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_56, x: -315.125, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_57, x: -314.15, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_58, x: -313.175, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_59, x: -312.2, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_60, x: -309.75, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_61, x: -307.3, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_62, x: -304.825, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_63, x: -302.375, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_64, x: -299.925, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_65, x: -297.475, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_66, x: -295.025, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_67, x: -292.55, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_68, x: -290.1, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_69, x: -287.65, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_70, x: -285.2, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_71, x: -282.725, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_72, x: -280.275, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_73, x: -277.825, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_74, x: -275.375, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_75, x: -272.925, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_76, x: -270.45, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_77, x: -268, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_78, x: -265.55, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_79, x: -262.875, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_80, x: -260.2, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_81, x: -257.525, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_82, x: -254.85, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_83, x: -252.175, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_84, x: -249.5, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_85, x: -246.825, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_86, x: -244.15, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_87, x: -241.5, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_88, x: -238.825, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_89, x: -236.15, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_90, x: -233.475, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_91, x: -230.8, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_92, x: -228.125, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_93, x: -225.45, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_94, x: -222.775, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_95, x: -196.475, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_96, x: -170.175, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_97, x: -143.9, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_98, x: -117.6, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_99, x: -91.3, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_100, x: -65, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_101, x: -38.7, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_102, x: -12.425, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_103, x: 13.925, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_104, x: 40.2, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_105, x: 66.5, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_106, x: 92.8, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_107, x: 119.1, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_108, x: 145.4, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_109, x: 171.675, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_110, x: 197.975, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_111, x: 224.275, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_112, x: 236.525, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_113, x: 248.75, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_114, x: 261, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_115, x: 273.25, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_116, x: 285.475, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_117, x: 297.725, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_118, x: 310, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_119, x: 322.225, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_120, x: 334.475, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_121, x: 346.7, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_122, x: 358.95, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_123, x: 371.2, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_124, x: 383.425, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_125, x: 395.675, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_126, x: 401.275, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_127, x: 406.9, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_128, x: 412.5, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_129, x: 418.125, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_130, x: 423.725, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_131, x: 429.325, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_132, x: 434.95, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_133, x: 440.575, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_134, x: 446.2, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_135, x: 451.8, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_136, x: 457.4, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_137, x: 463.025, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_138, x: 468.625, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_139, x: 474.25, y: -14.875})
        .wait(1)
        .to({graphics: mask_graphics_140, x: 479.85, y: -14.875})
        .wait(1)
        .to({graphics: null, x: 0, y: 0})
        .wait(49),
    )

    // lignes
    this.shape_675 = new cjs.Shape()
    this.shape_675.graphics
      .f()
      .s('#FFFFFF')
      .ss(1, 1, 1)
      .p('AAHADIgNgF')
    this.shape_675.setTransform(82.0375, 114.775)

    this.shape_676 = new cjs.Shape()
    this.shape_676.graphics
      .lf(['#66CCCC', '#FFA902'], [0.478, 1], -526.9, 17.7, 311.6, 17.7)
      .s()
      .p('EAyvAZjMhlzgy5IAGgMMBmDAzFg')
    this.shape_676.setTransform(-349.575, -3.475)

    this.shape_677 = new cjs.Shape()
    this.shape_677.graphics
      .lf(['#79BE8C', '#FFA902'], [0, 1], -4.7, 147.4, 833.8, 147.4)
      .s()
      .p(
        'AgsAPIgCgEQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBIBbgYIhYAhQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAAAgBg',
      )
    this.shape_677.setTransform(-871.8625, -133.225)

    this.shape_678 = new cjs.Shape()
    this.shape_678.graphics
      .lf(['#FFA902', '#4D96B0'], [0, 1], -156.5, 0, 142.6, 0)
      .s()
      .p(
        'A2AJuIgRgJIAWAAIQQnHIb2sKIAAgBIABAAIADAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgBABI7qMHIgPgGIAPAGIwYHKgAlcCkg',
      )
    this.shape_678.setTransform(117.7, 98.6753)

    this.shape_679 = new cjs.Shape()
    this.shape_679.graphics
      .lf(['#4D96B0', '#CCA57F'], [0, 1], -67.4, 0.6, 74.5, 0.6)
      .s()
      .p(
        'AqcHjQAAAAABAAQAAAAABgBQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBAAAAAAQgBgBAAAAIgDAAIUwu9IAPACIgJAKI0yO6IgCABg',
      )
    this.shape_679.setTransform(326.9125, -10.925)

    this.shape_680 = new cjs.Shape()
    this.shape_680.graphics
      .f('#FFA902')
      .s()
      .p(
        'AAAAJIgDgDQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAAAQABAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAIACAAIABgEIAAACIACAEIABAAIACADIAAAEIgEACIgBAAIgBAAgAABgIIAAAAIAAABIAAgBg',
      )
    this.shape_680.setTransform(67.1021, -125.4792)

    var maskedShapeInstanceList = [
      this.shape_675,
      this.shape_676,
      this.shape_677,
      this.shape_678,
      this.shape_679,
      this.shape_680,
    ]

    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask
    }

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {t: this.shape_680},
            {t: this.shape_679},
            {t: this.shape_678},
            {t: this.shape_677},
            {t: this.shape_676},
            {t: this.shape_675},
          ],
        })
        .to({state: []}, 141)
        .wait(49),
    )

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-927.3, -168.5, 1742.6, 539.8)
  ;(lib.ital = function(mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f('#4D96B0')
      .s()
      .p('AgMA1IAAgjIglhGIAeAAIATArIAVgrIAdAAIglBGIAAAjg')
    this.shape.setTransform(38.475, 13.75)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f('#4D96B0')
      .s()
      .p('AgdA1IAAhpIAaAAIAABWIAhAAIAAATg')
    this.shape_1.setTransform(30.125, 13.75)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f('#4D96B0')
      .s()
      .p('AAaA1IgGgUIgnAAIgHAUIgbAAIAnhpIAdAAIAnBpgAgMAOIAZAAIgNgmg')
    this.shape_2.setTransform(20.675, 13.775)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f('#4D96B0')
      .s()
      .p('AgMA1IAAhUIgdAAIAAgVIBTAAIAAAVIgdAAIAABUg')
    this.shape_3.setTransform(10.75, 13.75)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f('#4D96B0')
      .s()
      .p('AgMA1IAAhpIAZAAIAABpg')
    this.shape_4.setTransform(4.175, 13.75)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {t: this.shape_4},
            {t: this.shape_3},
            {t: this.shape_2},
            {t: this.shape_1},
            {t: this.shape},
          ],
        })
        .wait(1),
    )

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(
    lib.ital,
    new cjs.Rectangle(0, 0, 45.6, 30.5),
    null,
  )
  ;(lib.ire = function(mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f('#F8692A')
      .s()
      .p(
        'AguA1IAAhpIAnAAQAQAAANAGQAMAHAHAMQAGAMAAAPQAAAPgGAMQgHANgMAGQgNAHgQAAgAgVAeIAMAAQAOAAAIgIQAJgIAAgOQAAgOgJgHQgIgJgOABIgMAAg',
      )
    this.shape.setTransform(59.25, 13.75)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f('#F8692A')
      .s()
      .p('AAVA1IgqhAIAABAIgZAAIAAhpIAZAAIAqBBIAAhBIAaAAIAABpg')
    this.shape_1.setTransform(47.9, 13.75)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f('#F8692A')
      .s()
      .p('AAaA1IgGgUIgnAAIgHAUIgbAAIAnhpIAdAAIAnBpgAgMAOIAZAAIgNgmg')
    this.shape_2.setTransform(36.725, 13.775)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f('#F8692A')
      .s()
      .p('AgdA1IAAhpIAaAAIAABWIAhAAIAAATg')
    this.shape_3.setTransform(27.975, 13.75)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f('#F8692A')
      .s()
      .p('AggA1IAAhpIBBAAIAAAVIgoAAIAAAVIAjAAIAAATIgjAAIAAAYIAoAAIAAAUg')
    this.shape_4.setTransform(20.2, 13.75)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f('#F8692A')
      .s()
      .p(
        'AANA1IgWgoIgGAAIAAAoIgZAAIAAhpIAqAAQANAAAJAFQAIADAFAIQAEAIAAAJQAAAMgGAHQgHAIgMAEIAZApgAgPgDIAPAAQAIgBADgDQAEgEAAgGQAAgHgEgDQgDgEgIABIgPAAg',
      )
    this.shape_5.setTransform(11.275, 13.75)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f('#F8692A')
      .s()
      .p('AgMA1IAAhpIAZAAIAABpg')
    this.shape_6.setTransform(4.025, 13.75)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {t: this.shape_6},
            {t: this.shape_5},
            {t: this.shape_4},
            {t: this.shape_3},
            {t: this.shape_2},
            {t: this.shape_1},
            {t: this.shape},
          ],
        })
        .wait(1),
    )

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-0.2, 0, 66.8, 30.5)
  ;(lib.germany = function(mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f('#7278AD')
      .s()
      .p('AgMA1IAAgjIglhGIAeAAIATArIAVgrIAdAAIglBGIAAAjg')
    this.shape.setTransform(91.825, 20.5)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f('#7278AD')
      .s()
      .p('AAVA1IgphAIAABAIgaAAIAAhpIAaAAIApBBIAAhBIAaAAIAABpg')
    this.shape_1.setTransform(81.05, 20.5)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f('#7278AD')
      .s()
      .p('AAaA1IgGgUIgnAAIgHAUIgbAAIAnhpIAdAAIAnBpgAgMAOIAZAAIgNgmg')
    this.shape_2.setTransform(69.875, 20.525)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f('#7278AD')
      .s()
      .p('AAiA1IAAhBIgXBBIgVAAIgXhBIAABBIgZAAIAAhpIAeAAIAcBJIAdhJIAfAAIAABpg')
    this.shape_3.setTransform(57.5, 20.525)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f('#7278AD')
      .s()
      .p(
        'AANA1IgWgoIgGAAIAAAoIgZAAIAAhpIAqAAQANAAAJAFQAIADAFAIQAEAIAAAJQAAAMgGAHQgHAIgMAEIAZApgAgPgDIAPAAQAIgBADgDQAEgEAAgGQAAgHgEgDQgDgEgIABIgPAAg',
      )
    this.shape_4.setTransform(45.925, 20.5)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f('#7278AD')
      .s()
      .p('AggA1IAAhpIBBAAIAAAVIgnAAIAAAVIAjAAIAAATIgjAAIAAAYIAnAAIAAAUg')
    this.shape_5.setTransform(37, 20.5)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgZAvQgMgGgHgNQgHgNAAgPQAAgPAHgMQAHgMALgIQAMgGAPAAQAUAAANAJQANALADAQIgbAAQgDgGgFgDQgGgDgIAAQgLAAgHAIQgHAIAAANQAAAPAHAIQAIAIANAAQAJAAAHgFQAHgFADgJIgfAAIAAgRIA1AAIAAAYQgDAJgHAIQgHAIgKAFQgKAFgNAAQgPAAgMgHg',
      )
    this.shape_6.setTransform(27.075, 20.5)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {t: this.shape_6},
            {t: this.shape_5},
            {t: this.shape_4},
            {t: this.shape_3},
            {t: this.shape_2},
            {t: this.shape_1},
            {t: this.shape},
          ],
        })
        .wait(1),
    )

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(
    lib.germany,
    new cjs.Rectangle(19.3, 6.8, 79.60000000000001, 30.400000000000002),
    null,
  )
  ;(lib.fr = function(mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f('#E93A45')
      .s()
      .p('AggA1IAAhpIBBAAIAAAVIgoAAIAAAVIAjAAIAAATIgjAAIAAAYIAoAAIAAAUg')
    this.shape.setTransform(57.75, 13.75)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgaAvQgLgGgHgNQgGgNAAgPQAAgPAGgMQAHgMALgIQAMgGAPAAQAUAAANAKQANALAEATIgbAAQgDgIgGgEQgGgEgJAAQgKAAgHAIQgHAIAAANQAAAOAHAIQAHAIAKAAQAJAAAGgEQAGgFADgGIAbAAQgEARgNALQgNALgUAAQgPAAgMgHg',
      )
    this.shape_1.setTransform(47.775, 13.75)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f('#E93A45')
      .s()
      .p('AAVA1IgphAIAABAIgaAAIAAhpIAaAAIApBBIAAhBIAaAAIAABpg')
    this.shape_2.setTransform(36.4, 13.75)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f('#E93A45')
      .s()
      .p('AAaA1IgGgUIgnAAIgHAUIgbAAIAnhpIAdAAIAnBpgAgMAOIAZAAIgNgmg')
    this.shape_3.setTransform(25.225, 13.775)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f('#E93A45')
      .s()
      .p(
        'AANA1IgWgoIgGAAIAAAoIgZAAIAAhpIAqAAQANAAAJAFQAIADAFAIQAEAIAAAJQAAAMgGAHQgHAIgMAEIAZApgAgPgDIAPAAQAIgBADgDQAEgEAAgGQAAgHgEgDQgDgEgIABIgPAAg',
      )
    this.shape_4.setTransform(15.025, 13.75)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f('#E93A45')
      .s()
      .p('AghA1IAAhpIBEAAIAAAVIgrAAIAAAWIAhAAIAAATIghAAIAAArg')
    this.shape_5.setTransform(6.15, 13.75)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {t: this.shape_5},
            {t: this.shape_4},
            {t: this.shape_3},
            {t: this.shape_2},
            {t: this.shape_1},
            {t: this.shape},
          ],
        })
        .wait(1),
    )

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-0.2, 0, 64, 30.5)
  ;(lib.copiecerclesviolet = function(mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])

    // Calque_5
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgLALQgEgEAAgHQAAgGAEgEQAGgFAFAAQAHAAAFAFQAEAEAAAGQAAAHgEAEQgFAFgHAAQgFAAgGgFg',
      )
    this.shape.setTransform(27.1, 5.9)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgLAMQgGgEABgIQgBgHAGgEQAFgFAGAAQAHAAAFAFQAGAEAAAHQAAAIgGAEQgFAFgHAAQgGAAgFgFg',
      )
    this.shape_1.setTransform(27.1, 5.9)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgMANQgGgFABgIQgBgHAGgFQAGgFAGAAQAIAAAFAFQAGAFAAAHQAAAIgGAFQgFAFgIAAQgGAAgGgFg',
      )
    this.shape_2.setTransform(27.1, 5.9)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgNAOQgFgGgBgIQABgIAFgFQAHgFAGAAQAIAAAFAFQAHAFAAAIQAAAIgHAGQgFAFgIAAQgGAAgHgFg',
      )
    this.shape_3.setTransform(27.1, 5.9)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgOAOQgFgGgBgIQABgIAFgGQAHgFAHAAQAIAAAGAFQAHAGAAAIQAAAIgHAGQgGAGgIAAQgHAAgHgGg',
      )
    this.shape_4.setTransform(27.1, 5.9)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgOAPQgHgFAAgKQAAgIAHgGQAHgGAHAAQAJAAAGAGQAHAGAAAIQAAAKgHAFQgGAGgJAAQgHAAgHgGg',
      )
    this.shape_5.setTransform(27.075, 5.85)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgPAQQgHgGAAgKQAAgIAHgGQAHgHAIAAQAJAAAHAHQAHAGAAAIQAAAKgHAGQgHAGgJAAQgIAAgHgGg',
      )
    this.shape_6.setTransform(27.075, 5.85)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgPAQQgIgGAAgKQAAgJAIgGQAHgHAIAAQAJAAAIAHQAHAGAAAJQAAAKgHAGQgIAHgJAAQgIAAgHgHg',
      )
    this.shape_7.setTransform(27.075, 5.85)

    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgQARQgIgGAAgLQAAgJAIgHQAIgHAIAAQAKAAAIAHQAHAHAAAJQAAALgHAGQgIAHgKAAQgIAAgIgHg',
      )
    this.shape_8.setTransform(27.075, 5.85)

    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgPARQgIgHAAgKQAAgJAIgHQAHgGAIAAQAKAAAHAGQAHAHAAAJQAAAKgHAHQgHAGgKAAQgIAAgHgGg',
      )
    this.shape_9.setTransform(27.075, 5.875)

    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgPAQQgHgGAAgKQAAgJAHgGQAHgGAIAAQAJAAAHAGQAHAGAAAJQAAAKgHAGQgHAGgJAAQgIAAgHgGg',
      )
    this.shape_10.setTransform(27.1, 5.875)

    this.shape_11 = new cjs.Shape()
    this.shape_11.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgOAPQgHgGAAgJQAAgIAHgGQAGgGAIAAQAJAAAGAGQAHAGAAAIQAAAJgHAGQgGAGgJAAQgIAAgGgGg',
      )
    this.shape_11.setTransform(27.1, 5.875)

    this.shape_12 = new cjs.Shape()
    this.shape_12.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgOAPQgGgGAAgJQAAgIAGgGQAHgGAHABQAIgBAHAGQAGAGAAAIQAAAJgGAGQgHAFgIAAQgHAAgHgFg',
      )
    this.shape_12.setTransform(27.1, 5.9)

    this.shape_13 = new cjs.Shape()
    this.shape_13.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgNAOQgGgFAAgJQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAJgGAFQgGAGgIAAQgHAAgGgGg',
      )
    this.shape_13.setTransform(27.075, 5.875)

    this.shape_14 = new cjs.Shape()
    this.shape_14.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgMAOQgGgGAAgIQAAgHAGgFQAGgGAGAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgGAAgGgFg',
      )
    this.shape_14.setTransform(27.075, 5.875)

    this.shape_15 = new cjs.Shape()
    this.shape_15.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgMANQgGgFABgIQgBgHAGgFQAGgFAGAAQAHAAAGAFQAGAFAAAHQAAAIgGAFQgGAFgHAAQgGAAgGgFg',
      )
    this.shape_15.setTransform(27.1, 5.875)

    this.shape_16 = new cjs.Shape()
    this.shape_16.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgLAMQgGgEABgIQgBgGAGgFQAFgFAGAAQAHAAAFAFQAGAFAAAGQAAAIgGAEQgFAFgHAAQgGAAgFgFg',
      )
    this.shape_16.setTransform(27.1, 5.9)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [{t: this.shape, p: {scaleX: 1, scaleY: 1, x: 27.1, y: 5.9}}],
        })
        .to({state: [{t: this.shape_1}]}, 1)
        .to({state: [{t: this.shape_2}]}, 1)
        .to({state: [{t: this.shape_3}]}, 1)
        .to({state: [{t: this.shape_4}]}, 1)
        .to({state: [{t: this.shape_5}]}, 1)
        .to({state: [{t: this.shape_6}]}, 1)
        .to({state: [{t: this.shape_7}]}, 1)
        .to({state: [{t: this.shape_8}]}, 1)
        .to(
          {
            state: [
              {
                t: this.shape,
                p: {scaleX: 1.5625, scaleY: 1.5625, x: 27.0938, y: 5.8688},
              },
            ],
          },
          1,
        )
        .to({state: [{t: this.shape_8}]}, 1)
        .to({state: [{t: this.shape_9}]}, 1)
        .to({state: [{t: this.shape_10}]}, 1)
        .to({state: [{t: this.shape_11}]}, 1)
        .to({state: [{t: this.shape_12}]}, 1)
        .to({state: [{t: this.shape_13}]}, 1)
        .to({state: [{t: this.shape_14}]}, 1)
        .to({state: [{t: this.shape_15}]}, 1)
        .to({state: [{t: this.shape_16}]}, 1)
        .to(
          {
            state: [
              {t: this.shape, p: {scaleX: 1, scaleY: 1, x: 27.1, y: 5.9}},
            ],
          },
          1,
        )
        .wait(1),
    )

    // Calque_4
    this.shape_17 = new cjs.Shape()
    this.shape_17.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgPAPQgHgFAAgKQAAgIAHgHQAHgGAIAAQAJAAAHAGQAHAHAAAIQAAAKgHAFQgHAHgJAAQgIAAgHgHg',
      )
    this.shape_17.setTransform(9.275, 22.7)

    this.shape_18 = new cjs.Shape()
    this.shape_18.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgNAOQgIgFABgJQgBgIAIgGQAGgGAHAAQAJAAAGAGQAHAGAAAIQAAAJgHAFQgGAHgJAAQgHAAgGgHg',
      )
    this.shape_18.setTransform(9.25, 22.7)

    this.shape_19 = new cjs.Shape()
    this.shape_19.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHABQAIgBAGAGQAGAGAAAHQAAAIgGAGQgGAFgIABQgHgBgGgFg',
      )
    this.shape_19.setTransform(9.275, 22.7)

    this.shape_20 = new cjs.Shape()
    this.shape_20.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgMANQgGgFAAgIQAAgHAGgGQAGgEAGAAQAHAAAHAEQAFAGAAAHQAAAIgFAFQgHAFgHABQgGgBgGgFg',
      )
    this.shape_20.setTransform(9.25, 22.7)

    this.shape_21 = new cjs.Shape()
    this.shape_21.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgLAMQgGgFAAgHQAAgGAGgGQAFgEAGAAQAHAAAFAEQAGAGAAAGQAAAHgGAFQgFAFgHAAQgGAAgFgFg',
      )
    this.shape_21.setTransform(9.275, 22.7)

    this.shape_22 = new cjs.Shape()
    this.shape_22.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgLAMQgEgFgBgHQABgFAEgGQAFgEAGAAQAGAAAGAEQAEAGAAAFQAAAHgEAFQgGAEgGAAQgGAAgFgEg',
      )
    this.shape_22.setTransform(9.25, 22.7)

    this.shape_23 = new cjs.Shape()
    this.shape_23.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgKALQgEgEAAgHQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAHgFAEQgEADgGAAQgFAAgFgDg',
      )
    this.shape_23.setTransform(9.275, 22.7)

    this.shape_24 = new cjs.Shape()
    this.shape_24.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgJAKQgEgEAAgGQAAgFAEgEQAFgDAEgBQAGABAEADQAEAEAAAFQAAAGgEAEQgEADgGAAQgEAAgFgDg',
      )
    this.shape_24.setTransform(9.25, 22.7)

    this.shape_25 = new cjs.Shape()
    this.shape_25.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgIAJQgEgDAAgGQAAgEAEgEQAEgDAEAAQAFAAAEADQAEAEAAAEQAAAGgEADQgEADgFAAQgEAAgEgDg',
      )
    this.shape_25.setTransform(9.275, 22.7)

    this.shape_26 = new cjs.Shape()
    this.shape_26.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgHAIQgDgDgBgFQABgDADgEQADgDAEAAQAEAAAEADQAEAEAAADQAAAFgEADQgEADgEAAQgEAAgDgDg',
      )
    this.shape_26.setTransform(9.25, 22.7)

    this.shape_27 = new cjs.Shape()
    this.shape_27.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgIAJQgDgDAAgGQAAgEADgEQAEgDAEAAQAFAAAEADQAEAEAAAEQAAAGgEADQgEADgFAAQgEAAgEgDg',
      )
    this.shape_27.setTransform(9.25, 22.7)

    this.shape_28 = new cjs.Shape()
    this.shape_28.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgJAKQgEgEAAgGQAAgEAEgEQAEgEAFAAQAFAAAEAEQAFAEAAAEQAAAGgFAEQgEADgFAAQgFAAgEgDg',
      )
    this.shape_28.setTransform(9.275, 22.7)

    this.shape_29 = new cjs.Shape()
    this.shape_29.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgKALQgFgEAAgHQAAgGAFgEQAFgEAFgBQAGABAFAEQAFAEAAAGQAAAHgFAEQgFAFgGgBQgFABgFgFg',
      )
    this.shape_29.setTransform(9.25, 22.7)

    this.shape_30 = new cjs.Shape()
    this.shape_30.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgLAMQgFgFAAgHQAAgGAFgFQAFgEAGAAQAHAAAFAEQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg',
      )
    this.shape_30.setTransform(9.275, 22.7)

    this.shape_31 = new cjs.Shape()
    this.shape_31.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgMAMQgFgEAAgIQAAgGAFgGQAGgFAGABQAHgBAGAFQAFAGAAAGQAAAIgFAEQgGAFgHABQgGgBgGgFg',
      )
    this.shape_31.setTransform(9.275, 22.7)

    this.shape_32 = new cjs.Shape()
    this.shape_32.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgMANQgGgFAAgIQAAgHAGgGQAFgEAHAAQAHAAAGAEQAGAGAAAHQAAAIgGAFQgGAFgHABQgHgBgFgFg',
      )
    this.shape_32.setTransform(9.275, 22.7)

    this.shape_33 = new cjs.Shape()
    this.shape_33.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgNAOQgGgGgBgIQABgHAGgHQAHgFAGAAQAIAAAHAFQAFAHABAHQgBAIgFAGQgHAGgIAAQgGAAgHgGg',
      )
    this.shape_33.setTransform(9.25, 22.7)

    this.shape_34 = new cjs.Shape()
    this.shape_34.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgOAOQgHgFAAgJQAAgIAHgGQAHgGAHAAQAIAAAHAGQAHAGAAAIQAAAJgHAFQgHAHgIAAQgHAAgHgHg',
      )
    this.shape_34.setTransform(9.275, 22.7)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape_17}]})
        .to({state: [{t: this.shape_18}]}, 1)
        .to({state: [{t: this.shape_19}]}, 1)
        .to({state: [{t: this.shape_20}]}, 1)
        .to({state: [{t: this.shape_21}]}, 1)
        .to({state: [{t: this.shape_22}]}, 1)
        .to({state: [{t: this.shape_23, p: {x: 9.275}}]}, 1)
        .to({state: [{t: this.shape_24}]}, 1)
        .to({state: [{t: this.shape_25}]}, 1)
        .to({state: [{t: this.shape_26}]}, 1)
        .to({state: [{t: this.shape_27}]}, 1)
        .to({state: [{t: this.shape_28}]}, 1)
        .to({state: [{t: this.shape_23, p: {x: 9.25}}]}, 1)
        .to({state: [{t: this.shape_29}]}, 1)
        .to({state: [{t: this.shape_30}]}, 1)
        .to({state: [{t: this.shape_31}]}, 1)
        .to({state: [{t: this.shape_32}]}, 1)
        .to({state: [{t: this.shape_33}]}, 1)
        .to({state: [{t: this.shape_34}]}, 1)
        .to({state: [{t: this.shape_17}]}, 1)
        .wait(1),
    )

    // Calque_3
    this.shape_35 = new cjs.Shape()
    this.shape_35.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgVAWQgKgJAAgNQAAgMAKgKQAJgJAMAAQANAAAKAJQAJAKAAAMQAAANgJAJQgKAKgNAAQgMAAgJgKg',
      )
    this.shape_35.setTransform(28.25, 18.775)

    this.shape_36 = new cjs.Shape()
    this.shape_36.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgVAWQgJgJAAgNQAAgMAJgJQAJgJAMAAQANAAAJAJQAJAJAAAMQAAANgJAJQgJAJgNAAQgMAAgJgJg',
      )
    this.shape_36.setTransform(28.25, 18.775)

    this.shape_37 = new cjs.Shape()
    this.shape_37.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgUAVQgJgIAAgNQAAgLAJgJQAJgJALAAQAMAAAKAJQAIAJAAALQAAANgIAIQgKAJgMAAQgLAAgJgJg',
      )
    this.shape_37.setTransform(28.25, 18.775)

    this.shape_38 = new cjs.Shape()
    this.shape_38.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgUAUQgJgIAAgMQAAgLAJgJQAJgIALAAQAMAAAJAIQAIAJABALQgBAMgIAIQgJAJgMAAQgLAAgJgJg',
      )
    this.shape_38.setTransform(28.25, 18.775)

    this.shape_39 = new cjs.Shape()
    this.shape_39.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgTAUQgJgIAAgMQAAgLAJgIQAIgIALAAQALAAAJAIQAJAIAAALQAAAMgJAIQgJAIgLAAQgLAAgIgIg',
      )
    this.shape_39.setTransform(28.25, 18.775)

    this.shape_40 = new cjs.Shape()
    this.shape_40.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgTATQgHgHgBgMQABgKAHgIQAJgIAKAAQALAAAJAIQAHAIAAAKQAAAMgHAHQgJAIgLAAQgKAAgJgIg',
      )
    this.shape_40.setTransform(28.25, 18.775)

    this.shape_41 = new cjs.Shape()
    this.shape_41.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgSATQgIgIAAgLQAAgKAIgIQAIgHAKAAQAKAAAJAHQAIAIgBAKQABALgIAIQgJAHgKAAQgKAAgIgHg',
      )
    this.shape_41.setTransform(28.25, 18.775)

    this.shape_42 = new cjs.Shape()
    this.shape_42.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgRASQgIgHAAgLQAAgKAIgHQAHgIAKAAQAKAAAIAIQAIAHAAAKQAAALgIAHQgIAIgKAAQgKAAgHgIg',
      )
    this.shape_42.setTransform(28.25, 18.775)

    this.shape_43 = new cjs.Shape()
    this.shape_43.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgRARQgHgGAAgLQAAgJAHgHQAIgIAJAAQAKAAAHAIQAIAHAAAJQAAALgIAGQgHAIgKAAQgJAAgIgIg',
      )
    this.shape_43.setTransform(28.25, 18.775)

    this.shape_44 = new cjs.Shape()
    this.shape_44.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg',
      )
    this.shape_44.setTransform(28.25, 18.775)

    this.shape_45 = new cjs.Shape()
    this.shape_45.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgRASQgIgHABgLQgBgJAIgIQAHgHAKAAQAKAAAIAHQAHAIAAAJQAAALgHAHQgIAHgKAAQgKAAgHgHg',
      )
    this.shape_45.setTransform(28.25, 18.775)

    this.shape_46 = new cjs.Shape()
    this.shape_46.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgSASQgHgHgBgLQABgKAHgIQAIgHAKAAQALAAAHAHQAIAIAAAKQAAALgIAHQgHAIgLAAQgKAAgIgIg',
      )
    this.shape_46.setTransform(28.25, 18.775)

    this.shape_47 = new cjs.Shape()
    this.shape_47.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgSATQgIgIAAgLQAAgKAIgIQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgKAAgIgIg',
      )
    this.shape_47.setTransform(28.25, 18.775)

    this.shape_48 = new cjs.Shape()
    this.shape_48.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgTAUQgIgIAAgMQAAgKAIgJQAJgIAKAAQALAAAJAIQAIAJAAAKQAAAMgIAIQgJAIgLAAQgKAAgJgIg',
      )
    this.shape_48.setTransform(28.25, 18.775)

    this.shape_49 = new cjs.Shape()
    this.shape_49.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgUAUQgIgIAAgMQAAgLAIgIQAJgJALAAQAMAAAJAJQAIAIAAALQAAAMgIAIQgJAJgMAAQgLAAgJgJg',
      )
    this.shape_49.setTransform(28.25, 18.775)

    this.shape_50 = new cjs.Shape()
    this.shape_50.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgUAVQgJgJAAgMQAAgLAJgJQAJgIALAAQAMAAAJAIQAJAJAAALQAAAMgJAJQgJAIgMAAQgLAAgJgIg',
      )
    this.shape_50.setTransform(28.25, 18.775)

    this.shape_51 = new cjs.Shape()
    this.shape_51.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgUAVQgKgIAAgNQAAgMAKgJQAJgIALAAQAMAAAKAIQAIAJABAMQgBANgIAIQgKAJgMAAQgLAAgJgJg',
      )
    this.shape_51.setTransform(28.25, 18.775)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape_35}]})
        .to({state: [{t: this.shape_36}]}, 1)
        .to({state: [{t: this.shape_37}]}, 1)
        .to({state: [{t: this.shape_38}]}, 1)
        .to({state: [{t: this.shape_39}]}, 1)
        .to({state: [{t: this.shape_40}]}, 1)
        .to({state: [{t: this.shape_41}]}, 1)
        .to({state: [{t: this.shape_42}]}, 1)
        .to({state: [{t: this.shape_43}]}, 1)
        .to({state: [{t: this.shape_44}]}, 1)
        .to({state: [{t: this.shape_43}]}, 1)
        .to({state: [{t: this.shape_45}]}, 1)
        .to({state: [{t: this.shape_46}]}, 1)
        .to({state: [{t: this.shape_47}]}, 1)
        .to({state: [{t: this.shape_48}]}, 1)
        .to({state: [{t: this.shape_49}]}, 1)
        .to({state: [{t: this.shape_50}]}, 1)
        .to({state: [{t: this.shape_51}]}, 1)
        .to({state: [{t: this.shape_36}]}, 1)
        .to({state: [{t: this.shape_35}]}, 1)
        .wait(1),
    )

    // Calque_2
    this.shape_52 = new cjs.Shape()
    this.shape_52.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgPAPQgHgFAAgKQAAgIAHgHQAHgGAIAAQAJAAAHAGQAHAHAAAIQAAAKgHAFQgHAHgJAAQgIAAgHgHg',
      )
    this.shape_52.setTransform(3.975, 9.8)

    this.shape_53 = new cjs.Shape()
    this.shape_53.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgPAQQgIgGAAgKQAAgJAIgGQAHgHAIAAQAJAAAHAHQAIAGAAAJQAAAKgIAGQgHAHgJAAQgIAAgHgHg',
      )
    this.shape_53.setTransform(3.975, 9.8)

    this.shape_54 = new cjs.Shape()
    this.shape_54.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgQARQgIgHAAgKQAAgJAIgIQAHgGAJAAQAKAAAHAGQAIAIAAAJQAAAKgIAHQgHAHgKAAQgJAAgHgHg',
      )
    this.shape_54.setTransform(3.975, 9.8)

    this.shape_55 = new cjs.Shape()
    this.shape_55.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgRARQgIgGAAgLQAAgKAIgHQAIgHAJAAQAKAAAIAHQAIAHAAAKQAAALgIAGQgIAIgKAAQgJAAgIgIg',
      )
    this.shape_55.setTransform(3.975, 9.8)

    this.shape_56 = new cjs.Shape()
    this.shape_56.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgSASQgIgGAAgMQAAgKAIgIQAJgHAJAAQAKAAAIAHQAJAIAAAKQAAAMgJAGQgIAIgKAAQgJAAgJgIg',
      )
    this.shape_56.setTransform(3.975, 9.8)

    this.shape_57 = new cjs.Shape()
    this.shape_57.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgSATQgJgIAAgLQAAgLAJgIQAIgHAKAAQALAAAIAHQAJAIAAALQAAALgJAIQgIAIgLAAQgKAAgIgIg',
      )
    this.shape_57.setTransform(3.975, 9.825)

    this.shape_58 = new cjs.Shape()
    this.shape_58.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgTAUQgJgIAAgMQAAgLAJgIQAJgIAKAAQALAAAJAIQAJAIAAALQAAAMgJAIQgJAIgLAAQgKAAgJgIg',
      )
    this.shape_58.setTransform(3.975, 9.825)

    this.shape_59 = new cjs.Shape()
    this.shape_59.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgUAUQgJgIAAgMQAAgLAJgJQAKgIAKAAQALAAAJAIQAKAJAAALQAAAMgKAIQgJAJgLAAQgKAAgKgJg',
      )
    this.shape_59.setTransform(3.975, 9.825)

    this.shape_60 = new cjs.Shape()
    this.shape_60.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgVAVQgJgIAAgNQAAgMAJgJQAKgIALAAQAMAAAJAIQAKAJAAAMQAAANgKAIQgJAJgMAAQgLAAgKgJg',
      )
    this.shape_60.setTransform(3.975, 9.825)

    this.shape_61 = new cjs.Shape()
    this.shape_61.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgVAWQgKgJAAgNQAAgMAKgJQAKgJALAAQAMAAAKAJQAKAJAAAMQAAANgKAJQgKAJgMAAQgLAAgKgJg',
      )
    this.shape_61.setTransform(3.975, 9.825)

    this.shape_62 = new cjs.Shape()
    this.shape_62.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgUAVQgJgJAAgMQAAgMAJgIQAJgIALAAQAMAAAJAIQAJAIAAAMQAAAMgJAJQgJAIgMAAQgLAAgJgIg',
      )
    this.shape_62.setTransform(3.975, 9.8)

    this.shape_63 = new cjs.Shape()
    this.shape_63.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgTATQgIgHAAgMQAAgLAIgIQAJgHAKAAQALAAAIAHQAJAIAAALQAAAMgJAHQgIAIgLAAQgKAAgJgIg',
      )
    this.shape_63.setTransform(3.975, 9.825)

    this.shape_64 = new cjs.Shape()
    this.shape_64.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgSATQgIgIAAgLQAAgKAIgIQAJgHAJAAQALAAAIAHQAIAIAAAKQAAALgIAIQgIAHgLAAQgJAAgJgHg',
      )
    this.shape_64.setTransform(3.975, 9.825)

    this.shape_65 = new cjs.Shape()
    this.shape_65.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgRASQgIgHAAgLQAAgKAIgIQAIgGAJAAQAKAAAIAGQAIAIAAAKQAAALgIAHQgIAHgKAAQgJAAgIgHg',
      )
    this.shape_65.setTransform(3.975, 9.8)

    this.shape_66 = new cjs.Shape()
    this.shape_66.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgRARQgHgGAAgLQAAgKAHgHQAIgHAJABQAKgBAIAHQAHAHAAAKQAAALgHAGQgIAIgKgBQgJABgIgIg',
      )
    this.shape_66.setTransform(3.975, 9.8)

    this.shape_67 = new cjs.Shape()
    this.shape_67.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgQARQgIgHAAgKQAAgJAIgHQAIgHAIAAQAJAAAIAHQAIAHAAAJQAAAKgIAHQgIAHgJAAQgIAAgIgHg',
      )
    this.shape_67.setTransform(3.975, 9.825)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape_52}]})
        .to({state: [{t: this.shape_53}]}, 1)
        .to({state: [{t: this.shape_54}]}, 1)
        .to({state: [{t: this.shape_55}]}, 1)
        .to({state: [{t: this.shape_56}]}, 1)
        .to({state: [{t: this.shape_57}]}, 1)
        .to({state: [{t: this.shape_58}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_60}]}, 1)
        .to({state: [{t: this.shape_61}]}, 1)
        .to({state: [{t: this.shape_60}]}, 1)
        .to({state: [{t: this.shape_62}]}, 1)
        .to({state: [{t: this.shape_58}]}, 1)
        .to({state: [{t: this.shape_63}]}, 1)
        .to({state: [{t: this.shape_64}]}, 1)
        .to({state: [{t: this.shape_65}]}, 1)
        .to({state: [{t: this.shape_66}]}, 1)
        .to({state: [{t: this.shape_67}]}, 1)
        .to({state: [{t: this.shape_53}]}, 1)
        .to({state: [{t: this.shape_52}]}, 1)
        .wait(1),
    )

    // Calque_1
    this.shape_68 = new cjs.Shape()
    this.shape_68.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgwBKQgWgVAAgeQAAgdAWgWQAVgUAdgBQAeABAVAUQAVAWAAAdQAAAegVAVQgVAWgegBQgdABgVgWgAhFhDQgEgFAAgGQAAgIAEgEQAGgEAGgBQAHABAFAEQAEAEAAAIQAAAGgEAFQgFAFgHAAQgGAAgGgFg',
      )
    this.shape_68.setTransform(17.15, 9.55)

    this.timeline.addTween(cjs.Tween.get(this.shape_68).wait(20))

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(0.8, 0, 30.7, 24.9)
  ;(lib.copiecerclesvertpomme = function(mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])

    // Calque_5
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgKAMQgFgFgBgHQABgGAFgFQAEgEAGAAQAGAAAFAEQAGAFgBAGQABAHgGAFQgFAEgGAAQgGAAgEgEg',
      )
    this.shape.setTransform(14.55, 1.6)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgLANQgGgGAAgHQAAgHAGgEQAFgFAGgBQAHABAGAFQAFAEAAAHQAAAHgFAGQgGAEgHAAQgGAAgFgEg',
      )
    this.shape_1.setTransform(14.55, 1.6)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgMAOQgHgGAAgIQAAgHAHgFQAFgGAHAAQAHAAAHAGQAFAFAAAHQAAAIgFAGQgHAEgHAAQgHAAgFgEg',
      )
    this.shape_2.setTransform(14.55, 1.6)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgOAPQgGgHAAgIQAAgIAGgFQAHgGAHAAQAIAAAGAGQAHAFAAAIQAAAIgHAHQgGAFgIAAQgHAAgHgFg',
      )
    this.shape_3.setTransform(14.575, 1.6)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgPAPQgGgGAAgJQAAgJAGgFQAHgHAIABQAJgBAGAHQAHAFAAAJQAAAJgHAGQgGAGgJABQgIgBgHgGg',
      )
    this.shape_4.setTransform(14.575, 1.6)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgPAQQgIgGABgKQgBgJAIgGQAGgGAJAAQAJAAAHAGQAIAGAAAJQAAAKgIAGQgHAGgJABQgJgBgGgGg',
      )
    this.shape_5.setTransform(14.55, 1.6)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgQARQgIgGAAgLQAAgKAIgGQAHgHAJAAQAKAAAHAHQAIAGAAAKQAAALgIAGQgHAHgKAAQgJAAgHgHg',
      )
    this.shape_6.setTransform(14.55, 1.6)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgRASQgIgHAAgLQAAgLAIgGQAHgIAKAAQALAAAHAIQAIAGAAALQAAALgIAHQgHAHgLAAQgKAAgHgHg',
      )
    this.shape_7.setTransform(14.575, 1.6)

    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgSATQgJgIAAgLQAAgLAJgHQAIgIAKAAQALAAAIAIQAJAHAAALQAAALgJAIQgIAHgLAAQgKAAgIgHg',
      )
    this.shape_8.setTransform(14.575, 1.6)

    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgTAUQgJgIAAgMQAAgMAJgHQAIgIALAAQAMAAAIAIQAJAHAAAMQAAAMgJAIQgIAIgMAAQgLAAgIgIg',
      )
    this.shape_9.setTransform(14.575, 1.6)

    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgSATQgJgIAAgLQAAgLAJgHQAIgIAKAAQALAAAIAIQAJAHAAALQAAALgJAIQgIAIgLAAQgKAAgIgIg',
      )
    this.shape_10.setTransform(14.575, 1.6)

    this.shape_11 = new cjs.Shape()
    this.shape_11.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgSASQgIgHAAgLQAAgKAIgIQAIgGAKgBQALABAHAGQAJAIAAAKQAAALgJAHQgHAIgLgBQgKABgIgIg',
      )
    this.shape_11.setTransform(14.575, 1.6)

    this.shape_12 = new cjs.Shape()
    this.shape_12.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgRARQgHgGAAgLQAAgKAHgHQAIgGAJAAQAKAAAIAGQAHAHAAAKQAAALgHAGQgIAIgKgBQgJABgIgIg',
      )
    this.shape_12.setTransform(14.575, 1.6)

    this.shape_13 = new cjs.Shape()
    this.shape_13.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgQAQQgHgGAAgKQAAgJAHgHQAHgGAJAAQAKAAAHAGQAHAHAAAJQAAAKgHAGQgHAHgKAAQgJAAgHgHg',
      )
    this.shape_13.setTransform(14.575, 1.6)

    this.shape_14 = new cjs.Shape()
    this.shape_14.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgPAQQgHgHAAgJQAAgJAHgFQAHgHAIAAQAJAAAHAHQAHAFAAAJQAAAJgHAHQgHAGgJAAQgIAAgHgGg',
      )
    this.shape_14.setTransform(14.575, 1.6)

    this.shape_15 = new cjs.Shape()
    this.shape_15.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAIAAAHAGQAHAGAAAIQAAAJgHAGQgHAGgIAAQgIAAgGgGg',
      )
    this.shape_15.setTransform(14.55, 1.6)

    this.shape_16 = new cjs.Shape()
    this.shape_16.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgNAOQgGgGAAgIQAAgHAGgGQAGgFAHgBQAIABAGAFQAHAGgBAHQABAIgHAGQgGAGgIgBQgHABgGgGg',
      )
    this.shape_16.setTransform(14.55, 1.6)

    this.shape_17 = new cjs.Shape()
    this.shape_17.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgMANQgGgFAAgIQAAgHAGgFQAGgFAGgBQAHABAHAFQAFAFAAAHQAAAIgFAFQgHAGgHgBQgGABgGgGg',
      )
    this.shape_17.setTransform(14.55, 1.6)

    this.shape_18 = new cjs.Shape()
    this.shape_18.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgLANQgGgGAAgHQAAgHAGgEQAFgFAGAAQAHAAAGAFQAFAEAAAHQAAAHgFAGQgGAEgHAAQgGAAgFgEg',
      )
    this.shape_18.setTransform(14.55, 1.6)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape}]})
        .to({state: [{t: this.shape_1}]}, 1)
        .to({state: [{t: this.shape_2}]}, 1)
        .to({state: [{t: this.shape_3}]}, 1)
        .to({state: [{t: this.shape_4}]}, 1)
        .to({state: [{t: this.shape_5}]}, 1)
        .to({state: [{t: this.shape_6}]}, 1)
        .to({state: [{t: this.shape_7}]}, 1)
        .to({state: [{t: this.shape_8}]}, 1)
        .to({state: [{t: this.shape_9}]}, 1)
        .to({state: [{t: this.shape_10}]}, 1)
        .to({state: [{t: this.shape_11}]}, 1)
        .to({state: [{t: this.shape_12}]}, 1)
        .to({state: [{t: this.shape_13}]}, 1)
        .to({state: [{t: this.shape_14}]}, 1)
        .to({state: [{t: this.shape_15}]}, 1)
        .to({state: [{t: this.shape_16}]}, 1)
        .to({state: [{t: this.shape_17}]}, 1)
        .to({state: [{t: this.shape_18}]}, 1)
        .to({state: [{t: this.shape}]}, 1)
        .wait(1),
    )

    // Calque_4
    this.shape_19 = new cjs.Shape()
    this.shape_19.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgPAPQgHgFAAgKQAAgJAHgGQAHgGAIAAQAJAAAHAGQAHAGAAAJQAAAKgHAFQgHAHgJAAQgIAAgHgHg',
      )
    this.shape_19.setTransform(24.375, 23.95)

    this.shape_20 = new cjs.Shape()
    this.shape_20.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgPAQQgIgGAAgKQAAgJAIgGQAHgHAIAAQAJAAAHAHQAIAGAAAJQAAAKgIAGQgHAHgJAAQgIAAgHgHg',
      )
    this.shape_20.setTransform(24.375, 23.95)

    this.shape_21 = new cjs.Shape()
    this.shape_21.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgQARQgIgGAAgLQAAgKAIgGQAHgHAJAAQAKAAAHAHQAIAGAAAKQAAALgIAGQgHAHgKAAQgJAAgHgHg',
      )
    this.shape_21.setTransform(24.375, 23.95)

    this.shape_22 = new cjs.Shape()
    this.shape_22.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgRASQgIgIAAgKQAAgKAIgHQAIgHAJAAQAKAAAIAHQAIAHAAAKQAAAKgIAIQgIAHgKAAQgJAAgIgHg',
      )
    this.shape_22.setTransform(24.375, 23.95)

    this.shape_23 = new cjs.Shape()
    this.shape_23.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgSASQgIgHAAgLQAAgKAIgIQAJgHAJAAQAKAAAJAHQAIAIAAAKQAAALgIAHQgJAIgKAAQgJAAgJgIg',
      )
    this.shape_23.setTransform(24.375, 23.95)

    this.shape_24 = new cjs.Shape()
    this.shape_24.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgSATQgJgHAAgMQAAgKAJgIQAIgIAKAAQALAAAIAIQAJAIAAAKQAAAMgJAHQgIAIgLAAQgKAAgIgIg',
      )
    this.shape_24.setTransform(24.375, 23.925)

    this.shape_25 = new cjs.Shape()
    this.shape_25.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgTAUQgJgIAAgMQAAgLAJgIQAJgIAKAAQALAAAJAIQAJAIAAALQAAAMgJAIQgJAIgLAAQgKAAgJgIg',
      )
    this.shape_25.setTransform(24.375, 23.925)

    this.shape_26 = new cjs.Shape()
    this.shape_26.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgUAUQgJgIAAgMQAAgLAJgJQAKgIAKAAQALAAAKAIQAJAJAAALQAAAMgJAIQgKAJgLAAQgKAAgKgJg',
      )
    this.shape_26.setTransform(24.375, 23.925)

    this.shape_27 = new cjs.Shape()
    this.shape_27.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgVAVQgJgIAAgNQAAgMAJgJQAKgIALAAQAMAAAKAIQAJAJAAAMQAAANgJAIQgKAJgMAAQgLAAgKgJg',
      )
    this.shape_27.setTransform(24.375, 23.925)

    this.shape_28 = new cjs.Shape()
    this.shape_28.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgVAWQgKgJAAgNQAAgMAKgJQAKgJALAAQAMAAAKAJQAKAJAAAMQAAANgKAJQgKAJgMAAQgLAAgKgJg',
      )
    this.shape_28.setTransform(24.375, 23.925)

    this.shape_29 = new cjs.Shape()
    this.shape_29.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgUAVQgJgJAAgMQAAgMAJgIQAJgIALAAQAMAAAJAIQAJAIAAAMQAAAMgJAJQgJAIgMAAQgLAAgJgIg',
      )
    this.shape_29.setTransform(24.375, 23.95)

    this.shape_30 = new cjs.Shape()
    this.shape_30.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgTATQgIgHAAgMQAAgLAIgIQAJgHAKAAQALAAAJAHQAIAIAAALQAAAMgIAHQgJAIgLAAQgKAAgJgIg',
      )
    this.shape_30.setTransform(24.375, 23.925)

    this.shape_31 = new cjs.Shape()
    this.shape_31.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgSATQgIgIAAgLQAAgKAIgIQAJgIAJABQALgBAIAIQAIAIAAAKQAAALgIAIQgIAHgLABQgJgBgJgHg',
      )
    this.shape_31.setTransform(24.375, 23.95)

    this.shape_32 = new cjs.Shape()
    this.shape_32.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgRASQgIgHAAgLQAAgKAIgHQAIgIAJABQAKgBAIAIQAIAHAAAKQAAALgIAHQgIAIgKgBQgJABgIgIg',
      )
    this.shape_32.setTransform(24.375, 23.95)

    this.shape_33 = new cjs.Shape()
    this.shape_33.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgRASQgHgIAAgKQAAgJAHgIQAIgGAJAAQAKAAAIAGQAHAIAAAJQAAAKgHAIQgIAGgKAAQgJAAgIgGg',
      )
    this.shape_33.setTransform(24.375, 23.95)

    this.shape_34 = new cjs.Shape()
    this.shape_34.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgQARQgIgHAAgKQAAgJAIgHQAIgHAIAAQAJAAAIAHQAIAHAAAJQAAAKgIAHQgIAHgJAAQgIAAgIgHg',
      )
    this.shape_34.setTransform(24.375, 23.925)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape_19}]})
        .to({state: [{t: this.shape_20}]}, 1)
        .to({state: [{t: this.shape_21}]}, 1)
        .to({state: [{t: this.shape_22}]}, 1)
        .to({state: [{t: this.shape_23}]}, 1)
        .to({state: [{t: this.shape_24}]}, 1)
        .to({state: [{t: this.shape_25}]}, 1)
        .to({state: [{t: this.shape_26}]}, 1)
        .to({state: [{t: this.shape_27}]}, 1)
        .to({state: [{t: this.shape_28}]}, 1)
        .to({state: [{t: this.shape_27}]}, 1)
        .to({state: [{t: this.shape_29}]}, 1)
        .to({state: [{t: this.shape_25}]}, 1)
        .to({state: [{t: this.shape_30}]}, 1)
        .to({state: [{t: this.shape_31}]}, 1)
        .to({state: [{t: this.shape_32}]}, 1)
        .to({state: [{t: this.shape_33}]}, 1)
        .to({state: [{t: this.shape_34}]}, 1)
        .to({state: [{t: this.shape_20}]}, 1)
        .to({state: [{t: this.shape_19}]}, 1)
        .wait(1),
    )

    // Calque_3
    this.shape_35 = new cjs.Shape()
    this.shape_35.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgPAPQgHgFAAgKQAAgIAHgHQAHgGAIAAQAJAAAHAGQAHAHAAAIQAAAKgHAFQgHAHgJAAQgIAAgHgHg',
      )
    this.shape_35.setTransform(30.475, 7.85)

    this.shape_36 = new cjs.Shape()
    this.shape_36.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgOAOQgGgFgBgJQABgIAGgGQAHgGAIAAQAHAAAHAGQAGAGAAAIQAAAJgGAFQgHAHgHAAQgIAAgHgHg',
      )
    this.shape_36.setTransform(30.45, 7.85)

    this.shape_37 = new cjs.Shape()
    this.shape_37.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgNANQgGgEAAgJQAAgHAGgGQAGgGAHABQAIgBAGAGQAGAGAAAHQAAAJgGAEQgGAHgIAAQgHAAgGgHg',
      )
    this.shape_37.setTransform(30.475, 7.85)

    this.shape_38 = new cjs.Shape()
    this.shape_38.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgMANQgGgFAAgIQAAgHAGgGQAGgEAHAAQAGAAAGAEQAGAGAAAHQAAAIgGAFQgGAFgGABQgHgBgGgFg',
      )
    this.shape_38.setTransform(30.45, 7.85)

    this.shape_39 = new cjs.Shape()
    this.shape_39.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgLAMQgGgFAAgHQAAgGAGgGQAFgEAGAAQAHAAAFAEQAGAGAAAGQAAAHgGAFQgFAFgHAAQgGAAgFgFg',
      )
    this.shape_39.setTransform(30.475, 7.85)

    this.shape_40 = new cjs.Shape()
    this.shape_40.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgKALQgGgEAAgHQAAgGAGgFQAFgEAFAAQAHAAAEAEQAFAFABAGQgBAHgFAEQgEAFgHAAQgFAAgFgFg',
      )
    this.shape_40.setTransform(30.45, 7.85)

    this.shape_41 = new cjs.Shape()
    this.shape_41.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGgBQgFABgFgFg',
      )
    this.shape_41.setTransform(30.475, 7.85)

    this.shape_42 = new cjs.Shape()
    this.shape_42.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgIAKQgFgFAAgFQAAgFAFgEQAEgDAEgBQAGABAEADQAEAEAAAFQAAAFgEAFQgEADgGAAQgEAAgEgDg',
      )
    this.shape_42.setTransform(30.45, 7.85)

    this.shape_43 = new cjs.Shape()
    this.shape_43.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgIAJQgEgEAAgFQAAgFAEgDQAEgDAEAAQAFAAAEADQAEADAAAFQAAAFgEAEQgEADgFAAQgEAAgEgDg',
      )
    this.shape_43.setTransform(30.475, 7.85)

    this.shape_44 = new cjs.Shape()
    this.shape_44.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgHAIQgDgDAAgFQAAgEADgDQAEgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgEgDg',
      )
    this.shape_44.setTransform(30.45, 7.85)

    this.shape_45 = new cjs.Shape()
    this.shape_45.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgIAJQgEgEAAgFQAAgFAEgDQAEgDAEAAQAFAAAEADQAEADgBAFQABAFgEAEQgEADgFAAQgEAAgEgDg',
      )
    this.shape_45.setTransform(30.45, 7.85)

    this.shape_46 = new cjs.Shape()
    this.shape_46.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgJAJQgEgDAAgGQAAgFAEgDQAEgEAFAAQAFAAAEAEQAFADAAAFQAAAGgFADQgEAEgFAAQgFAAgEgEg',
      )
    this.shape_46.setTransform(30.475, 7.85)

    this.shape_47 = new cjs.Shape()
    this.shape_47.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgJAKQgFgEAAgGQAAgFAFgEQAFgFAEAAQAGAAAFAFQAEAEAAAFQAAAGgEAEQgFAFgGgBQgEABgFgFg',
      )
    this.shape_47.setTransform(30.45, 7.85)

    this.shape_48 = new cjs.Shape()
    this.shape_48.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgKALQgFgEAAgHQAAgGAFgEQAFgEAFgBQAGABAFAEQAFAEAAAGQAAAHgFAEQgFAEgGAAQgFAAgFgEg',
      )
    this.shape_48.setTransform(30.45, 7.85)

    this.shape_49 = new cjs.Shape()
    this.shape_49.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgLAMQgFgFAAgHQAAgGAFgFQAFgEAGAAQAHAAAFAEQAFAFAAAGQAAAHgFAFQgFAEgHABQgGgBgFgEg',
      )
    this.shape_49.setTransform(30.475, 7.85)

    this.shape_50 = new cjs.Shape()
    this.shape_50.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgMAMQgFgEAAgIQAAgGAFgGQAGgFAGABQAHgBAGAFQAFAGAAAGQAAAIgFAEQgGAFgHABQgGgBgGgFg',
      )
    this.shape_50.setTransform(30.475, 7.85)

    this.shape_51 = new cjs.Shape()
    this.shape_51.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgMANQgGgFAAgIQAAgHAGgGQAFgEAHAAQAHAAAGAEQAGAGAAAHQAAAIgGAFQgGAFgHABQgHgBgFgFg',
      )
    this.shape_51.setTransform(30.475, 7.85)

    this.shape_52 = new cjs.Shape()
    this.shape_52.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgNAOQgHgGABgIQgBgHAHgHQAGgFAIAAQAHAAAGAFQAHAHgBAHQABAIgHAGQgGAGgHAAQgIAAgGgGg',
      )
    this.shape_52.setTransform(30.45, 7.85)

    this.shape_53 = new cjs.Shape()
    this.shape_53.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgOAOQgHgFAAgJQAAgIAHgGQAHgGAHAAQAIAAAHAGQAHAGAAAIQAAAJgHAFQgHAHgIAAQgHAAgHgHg',
      )
    this.shape_53.setTransform(30.475, 7.85)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape_35}]})
        .to({state: [{t: this.shape_36}]}, 1)
        .to({state: [{t: this.shape_37}]}, 1)
        .to({state: [{t: this.shape_38}]}, 1)
        .to({state: [{t: this.shape_39}]}, 1)
        .to({state: [{t: this.shape_40}]}, 1)
        .to({state: [{t: this.shape_41}]}, 1)
        .to({state: [{t: this.shape_42}]}, 1)
        .to({state: [{t: this.shape_43}]}, 1)
        .to({state: [{t: this.shape_44}]}, 1)
        .to({state: [{t: this.shape_45}]}, 1)
        .to({state: [{t: this.shape_46}]}, 1)
        .to({state: [{t: this.shape_47}]}, 1)
        .to({state: [{t: this.shape_48}]}, 1)
        .to({state: [{t: this.shape_49}]}, 1)
        .to({state: [{t: this.shape_50}]}, 1)
        .to({state: [{t: this.shape_51}]}, 1)
        .to({state: [{t: this.shape_52}]}, 1)
        .to({state: [{t: this.shape_53}]}, 1)
        .to({state: [{t: this.shape_35}]}, 1)
        .wait(1),
    )

    // Calque_2
    this.shape_54 = new cjs.Shape()
    this.shape_54.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgYAZQgKgLAAgOQAAgNAKgLQALgKANAAQAOAAALAKQAKALAAANQAAAOgKALQgLAKgOAAQgNAAgLgKg',
      )
    this.shape_54.setTransform(3.475, 7.8)

    this.shape_55 = new cjs.Shape()
    this.shape_55.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgWAXQgKgJAAgOQAAgNAKgJQAKgKAMAAQANAAAKAKQAKAJAAANQAAAOgKAJQgKAKgNAAQgMAAgKgKg',
      )
    this.shape_55.setTransform(3.475, 7.8)

    this.shape_56 = new cjs.Shape()
    this.shape_56.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgVAWQgJgJAAgNQAAgMAJgJQAJgJAMAAQANAAAJAJQAJAJAAAMQAAANgJAJQgJAJgNAAQgMAAgJgJg',
      )
    this.shape_56.setTransform(3.475, 7.8)

    this.shape_57 = new cjs.Shape()
    this.shape_57.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgUAUQgIgIAAgMQAAgLAIgJQAJgIALAAQAMAAAJAIQAIAJAAALQAAAMgIAIQgJAJgMAAQgLAAgJgJg',
      )
    this.shape_57.setTransform(3.475, 7.8)

    this.shape_58 = new cjs.Shape()
    this.shape_58.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgSATQgIgIAAgLQAAgKAIgJQAIgHAKAAQALAAAIAHQAIAJAAAKQAAALgIAIQgIAIgLAAQgKAAgIgIg',
      )
    this.shape_58.setTransform(3.475, 7.8)

    this.shape_59 = new cjs.Shape()
    this.shape_59.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgRASQgHgIgBgKQABgKAHgHQAIgIAJAAQALAAAHAIQAIAHAAAKQAAAKgIAIQgHAHgLAAQgJAAgIgHg',
      )
    this.shape_59.setTransform(3.45, 7.8)

    this.shape_60 = new cjs.Shape()
    this.shape_60.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgQAQQgHgGAAgKQAAgJAHgHQAIgGAIAAQAJAAAIAGQAGAHAAAJQAAAKgGAGQgIAIgJAAQgIAAgIgIg',
      )
    this.shape_60.setTransform(3.45, 7.8)

    this.shape_61 = new cjs.Shape()
    this.shape_61.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgOAPQgHgGAAgJQAAgHAHgIQAHgFAHAAQAIAAAIAFQAFAIAAAHQAAAJgFAGQgIAHgIAAQgHAAgHgHg',
      )
    this.shape_61.setTransform(3.45, 7.8)

    this.shape_62 = new cjs.Shape()
    this.shape_62.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgNAOQgGgFABgJQgBgHAGgGQAGgFAHgBQAIABAGAFQAFAGABAHQgBAJgFAFQgGAGgIgBQgHABgGgGg',
      )
    this.shape_62.setTransform(3.45, 7.8)

    this.shape_63 = new cjs.Shape()
    this.shape_63.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgMANQgEgGAAgHQAAgGAEgFQAGgGAGAAQAHAAAFAGQAGAFAAAGQAAAHgGAGQgFAEgHAAQgGAAgGgEg',
      )
    this.shape_63.setTransform(3.45, 7.8)

    this.shape_64 = new cjs.Shape()
    this.shape_64.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgNAOQgFgGAAgIQAAgHAFgGQAHgFAGgBQAIABAGAFQAFAGABAHQgBAIgFAGQgGAFgIAAQgGAAgHgFg',
      )
    this.shape_64.setTransform(3.45, 7.8)

    this.shape_65 = new cjs.Shape()
    this.shape_65.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgOAPQgGgGAAgJQAAgHAGgHQAHgGAHAAQAJAAAGAGQAGAHAAAHQAAAJgGAGQgGAGgJAAQgHAAgHgGg',
      )
    this.shape_65.setTransform(3.45, 7.8)

    this.shape_66 = new cjs.Shape()
    this.shape_66.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgPAQQgHgGAAgKQAAgJAHgHQAHgGAIAAQAJAAAIAGQAGAHAAAJQAAAKgGAGQgIAHgJAAQgIAAgHgHg',
      )
    this.shape_66.setTransform(3.45, 7.8)

    this.shape_67 = new cjs.Shape()
    this.shape_67.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgQARQgIgGAAgLQAAgJAIgIQAHgGAJgBQAKABAIAGQAGAIABAJQgBALgGAGQgIAIgKAAQgJAAgHgIg',
      )
    this.shape_67.setTransform(3.45, 7.8)

    this.shape_68 = new cjs.Shape()
    this.shape_68.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgSASQgHgHAAgLQAAgKAHgIQAIgHAKAAQALAAAIAHQAHAIAAAKQAAALgHAHQgIAIgLAAQgKAAgIgIg',
      )
    this.shape_68.setTransform(3.475, 7.825)

    this.shape_69 = new cjs.Shape()
    this.shape_69.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgTATQgIgHAAgMQAAgLAIgIQAJgIAKAAQALAAAJAIQAIAIAAALQAAAMgIAHQgJAJgLAAQgKAAgJgJg',
      )
    this.shape_69.setTransform(3.475, 7.8)

    this.shape_70 = new cjs.Shape()
    this.shape_70.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgUAVQgJgJAAgMQAAgLAJgJQAJgIALAAQAMAAAJAIQAJAJAAALQAAAMgJAJQgJAJgMgBQgLABgJgJg',
      )
    this.shape_70.setTransform(3.475, 7.8)

    this.shape_71 = new cjs.Shape()
    this.shape_71.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgVAWQgKgJAAgNQAAgMAKgJQAJgJAMAAQANAAAJAJQAKAJAAAMQAAANgKAJQgJAKgNAAQgMAAgJgKg',
      )
    this.shape_71.setTransform(3.475, 7.8)

    this.shape_72 = new cjs.Shape()
    this.shape_72.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgXAYQgJgKAAgOQAAgNAJgJQAKgKANAAQANAAAKAKQAKAJAAANQAAAOgKAKQgKAJgNAAQgNAAgKgJg',
      )
    this.shape_72.setTransform(3.475, 7.8)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape_54}]})
        .to({state: [{t: this.shape_55}]}, 1)
        .to({state: [{t: this.shape_56}]}, 1)
        .to({state: [{t: this.shape_57}]}, 1)
        .to({state: [{t: this.shape_58}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_60}]}, 1)
        .to({state: [{t: this.shape_61}]}, 1)
        .to({state: [{t: this.shape_62}]}, 1)
        .to({state: [{t: this.shape_63}]}, 1)
        .to({state: [{t: this.shape_64}]}, 1)
        .to({state: [{t: this.shape_65}]}, 1)
        .to({state: [{t: this.shape_66}]}, 1)
        .to({state: [{t: this.shape_67}]}, 1)
        .to({state: [{t: this.shape_68}]}, 1)
        .to({state: [{t: this.shape_69}]}, 1)
        .to({state: [{t: this.shape_70}]}, 1)
        .to({state: [{t: this.shape_71}]}, 1)
        .to({state: [{t: this.shape_72}]}, 1)
        .to({state: [{t: this.shape_54}]}, 1)
        .wait(1),
    )

    // Calque_1
    this.shape_73 = new cjs.Shape()
    this.shape_73.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgXAzQgWgVAAgeQAAgdAWgWQAVgUAdgBQAeABAVAUQAVAWAAAdQAAAegVAVQgVAWgegBQgdABgVgWgAhdA+QgGgFAAgGQAAgIAGgEQAEgEAHAAQAGAAAFAEQAGAEAAAIQAAAGgGAFQgFAFgGAAQgHAAgEgFg',
      )
    this.shape_73.setTransform(14.65, 11.85)

    this.timeline.addTween(cjs.Tween.get(this.shape_73).wait(20))

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(0, -1.2, 32.8, 28.2)
  ;(lib.copiecerclesvert = function(mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])

    // Calque_5
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgLALQgEgEAAgHQAAgGAEgEQAGgFAFAAQAGAAAGAFQAEAEAAAGQAAAHgEAEQgGAFgGAAQgFAAgGgFg',
      )
    this.shape.setTransform(-15.3, 12.9)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgMAMQgFgEAAgIQAAgGAFgGQAGgEAGAAQAHAAAGAEQAFAGAAAGQAAAIgFAEQgGAGgHAAQgGAAgGgGg',
      )
    this.shape_1.setTransform(-15.3, 12.9)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgNANQgGgEAAgJQAAgHAGgGQAGgFAHAAQAIAAAGAFQAGAGAAAHQAAAJgGAEQgGAGgIAAQgHAAgGgGg',
      )
    this.shape_2.setTransform(-15.325, 12.9)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgOAPQgGgGAAgJQAAgIAGgGQAHgGAHABQAJgBAGAGQAGAGAAAIQAAAJgGAGQgGAFgJAAQgHAAgHgFg',
      )
    this.shape_3.setTransform(-15.325, 12.9)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgPAQQgHgGAAgKQAAgIAHgHQAHgGAIAAQAJAAAHAGQAHAHAAAIQAAAKgHAGQgHAGgJAAQgIAAgHgGg',
      )
    this.shape_4.setTransform(-15.325, 12.9)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgQARQgIgGAAgLQAAgJAIgHQAHgHAJAAQAKAAAHAHQAIAHAAAJQAAALgIAGQgHAHgKAAQgJAAgHgHg',
      )
    this.shape_5.setTransform(-15.325, 12.9)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgRASQgIgHAAgLQAAgKAIgHQAIgHAJgBQAKABAIAHQAIAHAAAKQAAALgIAHQgIAIgKAAQgJAAgIgIg',
      )
    this.shape_6.setTransform(-15.325, 12.9)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgSATQgJgIAAgLQAAgLAJgHQAIgIAKAAQALAAAIAIQAJAHAAALQAAALgJAIQgIAIgLAAQgKAAgIgIg',
      )
    this.shape_7.setTransform(-15.325, 12.9)

    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgTAUQgJgHAAgNQAAgMAJgHQAJgIAKAAQAMAAAIAIQAKAHgBAMQABANgKAHQgIAJgMgBQgKABgJgJg',
      )
    this.shape_8.setTransform(-15.35, 12.9)

    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgUAVQgKgIAAgNQAAgMAKgJQAJgIALAAQANAAAIAIQAKAJAAAMQAAANgKAIQgIAJgNAAQgLAAgJgJg',
      )
    this.shape_9.setTransform(-15.35, 12.9)

    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgSATQgJgHAAgMQAAgLAJgHQAIgIAKAAQAMAAAHAIQAJAHAAALQAAAMgJAHQgHAIgMAAQgKAAgIgIg',
      )
    this.shape_10.setTransform(-15.35, 12.9)

    this.shape_11 = new cjs.Shape()
    this.shape_11.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgSATQgIgIAAgLQAAgKAIgHQAJgIAJAAQALAAAHAIQAJAHAAAKQAAALgJAIQgHAHgLAAQgJAAgJgHg',
      )
    this.shape_11.setTransform(-15.325, 12.9)

    this.shape_12 = new cjs.Shape()
    this.shape_12.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgRASQgHgIAAgKQAAgJAHgHQAIgIAJAAQAKAAAHAIQAIAHAAAJQAAAKgIAIQgHAGgKABQgJgBgIgGg',
      )
    this.shape_12.setTransform(-15.325, 12.9)

    this.shape_13 = new cjs.Shape()
    this.shape_13.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgPARQgIgHAAgKQAAgJAIgGQAHgHAIAAQAKAAAHAHQAHAGAAAJQAAAKgHAHQgHAGgKAAQgIAAgHgGg',
      )
    this.shape_13.setTransform(-15.325, 12.9)

    this.shape_14 = new cjs.Shape()
    this.shape_14.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgOAQQgHgHAAgJQAAgIAHgHQAGgFAIgBQAJABAHAFQAGAHAAAIQAAAJgGAHQgHAFgJAAQgIAAgGgFg',
      )
    this.shape_14.setTransform(-15.325, 12.9)

    this.shape_15 = new cjs.Shape()
    this.shape_15.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgNAOQgHgFAAgJQAAgIAHgGQAGgFAHAAQAIAAAHAFQAGAGAAAIQAAAJgGAFQgHAGgIAAQgHAAgGgGg',
      )
    this.shape_15.setTransform(-15.325, 12.9)

    this.shape_16 = new cjs.Shape()
    this.shape_16.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgNANQgFgFgBgIQABgHAFgGQAGgFAHAAQAIAAAFAFQAGAGABAHQgBAIgGAFQgFAGgIAAQgHAAgGgGg',
      )
    this.shape_16.setTransform(-15.3, 12.9)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape}]})
        .to({state: [{t: this.shape_1}]}, 1)
        .to({state: [{t: this.shape_2}]}, 1)
        .to({state: [{t: this.shape_3}]}, 1)
        .to({state: [{t: this.shape_4}]}, 1)
        .to({state: [{t: this.shape_5}]}, 1)
        .to({state: [{t: this.shape_6}]}, 1)
        .to({state: [{t: this.shape_7}]}, 1)
        .to({state: [{t: this.shape_8}]}, 1)
        .to({state: [{t: this.shape_9}]}, 1)
        .to({state: [{t: this.shape_8}]}, 1)
        .to({state: [{t: this.shape_10}]}, 1)
        .to({state: [{t: this.shape_11}]}, 1)
        .to({state: [{t: this.shape_12}]}, 1)
        .to({state: [{t: this.shape_13}]}, 1)
        .to({state: [{t: this.shape_14}]}, 1)
        .to({state: [{t: this.shape_15}]}, 1)
        .to({state: [{t: this.shape_16}]}, 1)
        .to({state: [{t: this.shape_1}]}, 1)
        .to({state: [{t: this.shape}]}, 1)
        .wait(1),
    )

    // Calque_4
    this.shape_17 = new cjs.Shape()
    this.shape_17.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgPAPQgHgFAAgKQAAgIAHgHQAHgGAIAAQAJAAAHAGQAHAHAAAIQAAAKgHAFQgHAHgJAAQgIAAgHgHg',
      )
    this.shape_17.setTransform(-40.425, 11)

    this.shape_18 = new cjs.Shape()
    this.shape_18.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgOAOQgGgFAAgJQAAgIAGgGQAHgGAHAAQAJAAAGAGQAHAGgBAIQABAJgHAFQgGAHgJAAQgHAAgHgHg',
      )
    this.shape_18.setTransform(-40.45, 11)

    this.shape_19 = new cjs.Shape()
    this.shape_19.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHABQAIgBAGAGQAGAGAAAHQAAAIgGAGQgGAFgIABQgHgBgGgFg',
      )
    this.shape_19.setTransform(-40.425, 11)

    this.shape_20 = new cjs.Shape()
    this.shape_20.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgMANQgGgFAAgIQAAgHAGgGQAGgEAGAAQAIAAAGAEQAFAGAAAHQAAAIgFAFQgGAFgIABQgGgBgGgFg',
      )
    this.shape_20.setTransform(-40.45, 11)

    this.shape_21 = new cjs.Shape()
    this.shape_21.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgLAMQgGgFAAgHQAAgGAGgGQAFgEAGAAQAHAAAFAEQAGAGAAAGQAAAHgGAFQgFAFgHAAQgGAAgFgFg',
      )
    this.shape_21.setTransform(-40.425, 11)

    this.shape_22 = new cjs.Shape()
    this.shape_22.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgKALQgGgEAAgHQAAgFAGgGQAEgEAGAAQAGAAAFAEQAGAGAAAFQAAAHgGAEQgFAFgGAAQgGAAgEgFg',
      )
    this.shape_22.setTransform(-40.45, 11)

    this.shape_23 = new cjs.Shape()
    this.shape_23.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgKALQgEgEAAgHQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAHgFAEQgEADgGAAQgFAAgFgDg',
      )
    this.shape_23.setTransform(-40.425, 11)

    this.shape_24 = new cjs.Shape()
    this.shape_24.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgJAKQgEgEAAgGQAAgFAEgEQAEgDAFgBQAFABAFADQAEAEAAAFQAAAGgEAEQgFADgFAAQgFAAgEgDg',
      )
    this.shape_24.setTransform(-40.45, 11)

    this.shape_25 = new cjs.Shape()
    this.shape_25.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgIAJQgEgDAAgGQAAgEAEgEQAEgDAEAAQAFAAAEADQAEAEAAAEQAAAGgEADQgEADgFAAQgEAAgEgDg',
      )
    this.shape_25.setTransform(-40.425, 11)

    this.shape_26 = new cjs.Shape()
    this.shape_26.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgHAIQgEgDABgFQgBgDAEgEQADgDAEAAQAEAAAEADQAEAEgBADQABAFgEADQgEADgEAAQgEAAgDgDg',
      )
    this.shape_26.setTransform(-40.45, 11)

    this.shape_27 = new cjs.Shape()
    this.shape_27.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgIAJQgEgDABgGQgBgEAEgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAGgDADQgEADgFAAQgEAAgEgDg',
      )
    this.shape_27.setTransform(-40.45, 11)

    this.shape_28 = new cjs.Shape()
    this.shape_28.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgJAKQgEgEAAgGQAAgEAEgEQAEgEAFAAQAFAAAEAEQAFAEAAAEQAAAGgFAEQgEADgFAAQgFAAgEgDg',
      )
    this.shape_28.setTransform(-40.425, 11)

    this.shape_29 = new cjs.Shape()
    this.shape_29.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgJALQgFgEAAgHQAAgFAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAFQAAAHgFAEQgEADgGAAQgFAAgEgDg',
      )
    this.shape_29.setTransform(-40.45, 11)

    this.shape_30 = new cjs.Shape()
    this.shape_30.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgKALQgFgEAAgHQAAgGAFgEQAFgEAFgBQAGABAFAEQAFAEAAAGQAAAHgFAEQgFAFgGgBQgFABgFgFg',
      )
    this.shape_30.setTransform(-40.45, 11)

    this.shape_31 = new cjs.Shape()
    this.shape_31.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgLAMQgFgFAAgHQAAgGAFgFQAFgEAGAAQAHAAAFAEQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg',
      )
    this.shape_31.setTransform(-40.425, 11)

    this.shape_32 = new cjs.Shape()
    this.shape_32.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgMAMQgFgEAAgIQAAgGAFgGQAGgFAGABQAHgBAGAFQAFAGAAAGQAAAIgFAEQgGAFgHABQgGgBgGgFg',
      )
    this.shape_32.setTransform(-40.425, 11)

    this.shape_33 = new cjs.Shape()
    this.shape_33.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgMANQgGgFAAgIQAAgHAGgGQAFgEAHAAQAHAAAGAEQAGAGAAAHQAAAIgGAFQgGAFgHABQgHgBgFgFg',
      )
    this.shape_33.setTransform(-40.425, 11)

    this.shape_34 = new cjs.Shape()
    this.shape_34.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgNAOQgGgGAAgIQAAgHAGgHQAHgFAGAAQAIAAAHAFQAFAHAAAHQAAAIgFAGQgHAGgIAAQgGAAgHgGg',
      )
    this.shape_34.setTransform(-40.45, 11)

    this.shape_35 = new cjs.Shape()
    this.shape_35.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgOAOQgHgFAAgJQAAgIAHgGQAHgGAHAAQAIAAAHAGQAHAGAAAIQAAAJgHAFQgHAHgIAAQgHAAgHgHg',
      )
    this.shape_35.setTransform(-40.425, 11)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape_17}]})
        .to({state: [{t: this.shape_18}]}, 1)
        .to({state: [{t: this.shape_19}]}, 1)
        .to({state: [{t: this.shape_20}]}, 1)
        .to({state: [{t: this.shape_21}]}, 1)
        .to({state: [{t: this.shape_22}]}, 1)
        .to({state: [{t: this.shape_23}]}, 1)
        .to({state: [{t: this.shape_24}]}, 1)
        .to({state: [{t: this.shape_25}]}, 1)
        .to({state: [{t: this.shape_26}]}, 1)
        .to({state: [{t: this.shape_27}]}, 1)
        .to({state: [{t: this.shape_28}]}, 1)
        .to({state: [{t: this.shape_29}]}, 1)
        .to({state: [{t: this.shape_30}]}, 1)
        .to({state: [{t: this.shape_31}]}, 1)
        .to({state: [{t: this.shape_32}]}, 1)
        .to({state: [{t: this.shape_33}]}, 1)
        .to({state: [{t: this.shape_34}]}, 1)
        .to({state: [{t: this.shape_35}]}, 1)
        .to({state: [{t: this.shape_17}]}, 1)
        .wait(1),
    )

    // Calque_3
    this.shape_36 = new cjs.Shape()
    this.shape_36.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgLAMQgFgFAAgHQAAgGAFgFQAGgEAFAAQAHAAAFAEQAFAFAAAGQAAAHgFAFQgFAFgHAAQgFAAgGgFg',
      )
    this.shape_36.setTransform(-26.475, 24.95)

    this.shape_37 = new cjs.Shape()
    this.shape_37.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgMANQgGgFAAgIQAAgHAGgGQAGgEAGAAQAIAAAGAEQAFAGAAAHQAAAIgFAFQgGAGgIAAQgGAAgGgGg',
      )
    this.shape_37.setTransform(-26.475, 24.95)

    this.shape_38 = new cjs.Shape()
    this.shape_38.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgNAOQgHgGAAgIQAAgIAHgGQAGgFAHAAQAIAAAHAFQAGAGAAAIQAAAIgGAGQgHAGgIAAQgHAAgGgGg',
      )
    this.shape_38.setTransform(-26.475, 24.975)

    this.shape_39 = new cjs.Shape()
    this.shape_39.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgPAQQgHgGAAgKQAAgIAHgHQAHgGAIAAQAJAAAHAGQAHAHAAAIQAAAKgHAGQgHAGgJAAQgIAAgHgGg',
      )
    this.shape_39.setTransform(-26.45, 24.95)

    this.shape_40 = new cjs.Shape()
    this.shape_40.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgQASQgIgIAAgKQAAgJAIgHQAHgHAJAAQAKAAAIAHQAHAHAAAJQAAAKgHAIQgIAGgKAAQgJAAgHgGg',
      )
    this.shape_40.setTransform(-26.45, 24.95)

    this.shape_41 = new cjs.Shape()
    this.shape_41.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgRASQgJgHAAgLQAAgKAJgIQAIgHAKAAQAKAAAIAHQAIAIAAAKQAAALgIAHQgIAIgKAAQgKAAgIgIg',
      )
    this.shape_41.setTransform(-26.475, 24.975)

    this.shape_42 = new cjs.Shape()
    this.shape_42.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgSAUQgKgIAAgMQAAgLAKgIQAIgIALAAQAKAAAJAIQAJAIAAALQAAAMgJAIQgJAIgKAAQgLAAgIgIg',
      )
    this.shape_42.setTransform(-26.475, 24.975)

    this.shape_43 = new cjs.Shape()
    this.shape_43.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgUAVQgKgIAAgMQAAgMAKgKQAJgHAMgBQALABAJAHQAKAKgBAMQABAMgKAIQgJAJgLgBQgMABgJgJg',
      )
    this.shape_43.setTransform(-26.45, 24.95)

    this.shape_44 = new cjs.Shape()
    this.shape_44.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgVAWQgLgJAAgNQAAgMALgKQAJgIANAAQALAAAKAIQALAKgBAMQABANgLAJQgKAJgLAAQgNAAgJgJg',
      )
    this.shape_44.setTransform(-26.45, 24.975)

    this.shape_45 = new cjs.Shape()
    this.shape_45.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgXAYQgLgKABgOQgBgNALgKQALgJANAAQANAAAKAJQALAKgBANQABAOgLAKQgKAJgNAAQgNAAgLgJg',
      )
    this.shape_45.setTransform(-26.45, 24.975)

    this.shape_46 = new cjs.Shape()
    this.shape_46.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgVAXQgLgKAAgNQAAgNALgJQAKgJAMAAQAMAAAKAJQAKAJAAANQAAANgKAKQgKAJgMAAQgMAAgKgJg',
      )
    this.shape_46.setTransform(-26.475, 24.975)

    this.shape_47 = new cjs.Shape()
    this.shape_47.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgUAVQgKgIAAgNQAAgMAKgJQAJgIAMAAQALAAAJAIQAKAJAAAMQAAANgKAIQgJAJgLAAQgMAAgJgJg',
      )
    this.shape_47.setTransform(-26.45, 24.975)

    this.shape_48 = new cjs.Shape()
    this.shape_48.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgTAUQgJgIAAgMQAAgLAJgJQAJgHALAAQALAAAJAHQAIAJAAALQAAAMgIAIQgJAIgLAAQgLAAgJgIg',
      )
    this.shape_48.setTransform(-26.475, 24.975)

    this.shape_49 = new cjs.Shape()
    this.shape_49.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgSATQgJgHABgLQgBgLAJgIQAJgHAKAAQAJAAAJAHQAJAIAAALQAAALgJAHQgJAIgJAAQgKAAgJgIg',
      )
    this.shape_49.setTransform(-26.45, 24.95)

    this.shape_50 = new cjs.Shape()
    this.shape_50.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgQASQgJgHAAgLQAAgKAJgHQAHgHAKAAQAJAAAIAHQAIAHAAAKQAAALgIAHQgIAHgJAAQgKAAgHgHg',
      )
    this.shape_50.setTransform(-26.45, 24.975)

    this.shape_51 = new cjs.Shape()
    this.shape_51.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgPARQgIgHAAgKQAAgJAIgHQAHgGAIAAQAKAAAHAGQAHAHAAAJQAAAKgHAHQgHAGgKAAQgIAAgHgGg',
      )
    this.shape_51.setTransform(-26.475, 24.975)

    this.shape_52 = new cjs.Shape()
    this.shape_52.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgOAPQgIgFAAgKQAAgIAIgHQAGgFAIgBQAJABAGAFQAIAHgBAIQABAKgIAFQgGAHgJgBQgIABgGgHg',
      )
    this.shape_52.setTransform(-26.45, 24.95)

    this.shape_53 = new cjs.Shape()
    this.shape_53.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgNAOQgHgFAAgJQAAgHAHgHQAGgFAHAAQAIAAAHAFQAGAHAAAHQAAAJgGAFQgHAGgIAAQgHAAgGgGg',
      )
    this.shape_53.setTransform(-26.475, 24.95)

    this.shape_54 = new cjs.Shape()
    this.shape_54.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgMANQgGgFAAgIQAAgGAGgGQAGgFAGAAQAHAAAGAFQAGAGAAAGQAAAIgGAFQgGAFgHAAQgGAAgGgFg',
      )
    this.shape_54.setTransform(-26.45, 24.95)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape_36}]})
        .to({state: [{t: this.shape_37}]}, 1)
        .to({state: [{t: this.shape_38}]}, 1)
        .to({state: [{t: this.shape_39}]}, 1)
        .to({state: [{t: this.shape_40}]}, 1)
        .to({state: [{t: this.shape_41}]}, 1)
        .to({state: [{t: this.shape_42}]}, 1)
        .to({state: [{t: this.shape_43}]}, 1)
        .to({state: [{t: this.shape_44}]}, 1)
        .to({state: [{t: this.shape_45}]}, 1)
        .to({state: [{t: this.shape_46}]}, 1)
        .to({state: [{t: this.shape_47}]}, 1)
        .to({state: [{t: this.shape_48}]}, 1)
        .to({state: [{t: this.shape_49}]}, 1)
        .to({state: [{t: this.shape_50}]}, 1)
        .to({state: [{t: this.shape_51}]}, 1)
        .to({state: [{t: this.shape_52}]}, 1)
        .to({state: [{t: this.shape_53}]}, 1)
        .to({state: [{t: this.shape_54}]}, 1)
        .to({state: [{t: this.shape_36}]}, 1)
        .wait(1),
    )

    // Calque_2
    this.shape_55 = new cjs.Shape()
    this.shape_55.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgPAPQgHgFAAgKQAAgJAHgGQAHgGAIAAQAJAAAHAGQAHAGAAAJQAAAKgHAFQgHAHgJAAQgIAAgHgHg',
      )
    this.shape_55.setTransform(-16.425, 4.6)

    this.shape_56 = new cjs.Shape()
    this.shape_56.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgOAOQgGgFgBgJQABgIAGgGQAHgGAIAAQAHAAAHAGQAGAGAAAIQAAAJgGAFQgHAHgHAAQgIAAgHgHg',
      )
    this.shape_56.setTransform(-16.45, 4.6)

    this.shape_57 = new cjs.Shape()
    this.shape_57.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgNAOQgGgGAAgIQAAgIAGgFQAGgGAHAAQAIAAAGAGQAGAFAAAIQAAAIgGAGQgGAFgIABQgHgBgGgFg',
      )
    this.shape_57.setTransform(-16.425, 4.6)

    this.shape_58 = new cjs.Shape()
    this.shape_58.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgMANQgGgFAAgIQAAgHAGgGQAGgEAHAAQAGAAAGAEQAGAGAAAHQAAAIgGAFQgGAGgGAAQgHAAgGgGg',
      )
    this.shape_58.setTransform(-16.45, 4.6)

    this.shape_59 = new cjs.Shape()
    this.shape_59.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgLAMQgGgEAAgIQAAgGAGgGQAFgEAGAAQAHAAAFAEQAGAGAAAGQAAAIgGAEQgFAFgHAAQgGAAgFgFg',
      )
    this.shape_59.setTransform(-16.425, 4.6)

    this.shape_60 = new cjs.Shape()
    this.shape_60.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgLAMQgEgFAAgHQAAgFAEgGQAGgEAFAAQAHAAAEAEQAFAGABAFQgBAHgFAFQgEAEgHAAQgFAAgGgEg',
      )
    this.shape_60.setTransform(-16.45, 4.6)

    this.shape_61 = new cjs.Shape()
    this.shape_61.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgKALQgEgFAAgGQAAgFAEgFQAFgEAFAAQAGAAAEAEQAFAFAAAFQAAAGgFAFQgEADgGAAQgFAAgFgDg',
      )
    this.shape_61.setTransform(-16.425, 4.6)

    this.shape_62 = new cjs.Shape()
    this.shape_62.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgIAKQgFgEAAgGQAAgFAFgEQAEgDAEgBQAGABAEADQAEAEAAAFQAAAGgEAEQgEADgGAAQgEAAgEgDg',
      )
    this.shape_62.setTransform(-16.45, 4.6)

    this.shape_63 = new cjs.Shape()
    this.shape_63.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgIAJQgEgDAAgGQAAgEAEgEQAEgDAEAAQAFAAAEADQAEAEAAAEQAAAGgEADQgEADgFAAQgEAAgEgDg',
      )
    this.shape_63.setTransform(-16.425, 4.6)

    this.shape_64 = new cjs.Shape()
    this.shape_64.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgHAIQgEgDAAgFQAAgEAEgDQAEgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgEgDg',
      )
    this.shape_64.setTransform(-16.45, 4.6)

    this.shape_65 = new cjs.Shape()
    this.shape_65.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgIAJQgEgDAAgGQAAgEAEgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAGgDADQgEADgFAAQgEAAgEgDg',
      )
    this.shape_65.setTransform(-16.45, 4.6)

    this.shape_66 = new cjs.Shape()
    this.shape_66.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgJAKQgEgEAAgGQAAgEAEgEQAEgEAFAAQAFAAAEAEQAFAEAAAEQAAAGgFAEQgEADgFAAQgFAAgEgDg',
      )
    this.shape_66.setTransform(-16.425, 4.6)

    this.shape_67 = new cjs.Shape()
    this.shape_67.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgJALQgFgFAAgGQAAgFAFgFQAFgEAEAAQAGAAAFAEQAEAFAAAFQAAAGgEAFQgFADgGAAQgEAAgFgDg',
      )
    this.shape_67.setTransform(-16.45, 4.6)

    this.shape_68 = new cjs.Shape()
    this.shape_68.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgKALQgFgEAAgHQAAgFAFgFQAFgEAFAAQAHAAAEAEQAFAFAAAFQAAAHgFAEQgEAFgHgBQgFABgFgFg',
      )
    this.shape_68.setTransform(-16.45, 4.6)

    this.shape_69 = new cjs.Shape()
    this.shape_69.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgLAMQgFgEAAgIQAAgGAFgFQAFgFAGABQAHgBAFAFQAFAFAAAGQAAAIgFAEQgFAFgHgBQgGABgFgFg',
      )
    this.shape_69.setTransform(-16.425, 4.6)

    this.shape_70 = new cjs.Shape()
    this.shape_70.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgMAMQgFgEAAgIQAAgGAFgGQAGgFAGABQAHgBAGAFQAFAGAAAGQAAAIgFAEQgGAFgHABQgGgBgGgFg',
      )
    this.shape_70.setTransform(-16.425, 4.6)

    this.shape_71 = new cjs.Shape()
    this.shape_71.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgMANQgGgFAAgIQAAgHAGgGQAFgEAHAAQAHAAAGAEQAGAGAAAHQAAAIgGAFQgGAGgHAAQgHAAgFgGg',
      )
    this.shape_71.setTransform(-16.425, 4.6)

    this.shape_72 = new cjs.Shape()
    this.shape_72.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgNAOQgHgGAAgIQAAgIAHgGQAGgFAIAAQAHAAAGAFQAHAGgBAIQABAIgHAGQgGAGgHAAQgIAAgGgGg',
      )
    this.shape_72.setTransform(-16.45, 4.6)

    this.shape_73 = new cjs.Shape()
    this.shape_73.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgOAOQgHgFAAgJQAAgIAHgGQAHgGAHAAQAIAAAHAGQAHAGAAAIQAAAJgHAFQgHAHgIAAQgHAAgHgHg',
      )
    this.shape_73.setTransform(-16.425, 4.6)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape_55}]})
        .to({state: [{t: this.shape_56}]}, 1)
        .to({state: [{t: this.shape_57}]}, 1)
        .to({state: [{t: this.shape_58}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_60}]}, 1)
        .to({state: [{t: this.shape_61}]}, 1)
        .to({state: [{t: this.shape_62}]}, 1)
        .to({state: [{t: this.shape_63}]}, 1)
        .to({state: [{t: this.shape_64}]}, 1)
        .to({state: [{t: this.shape_65}]}, 1)
        .to({state: [{t: this.shape_66}]}, 1)
        .to({state: [{t: this.shape_67}]}, 1)
        .to({state: [{t: this.shape_68}]}, 1)
        .to({state: [{t: this.shape_69}]}, 1)
        .to({state: [{t: this.shape_70}]}, 1)
        .to({state: [{t: this.shape_71}]}, 1)
        .to({state: [{t: this.shape_72}]}, 1)
        .to({state: [{t: this.shape_73}]}, 1)
        .to({state: [{t: this.shape_55}]}, 1)
        .wait(1),
    )

    // Calque_1
    this.shape_74 = new cjs.Shape()
    this.shape_74.graphics
      .f('#0091B3')
      .s()
      .p(
        'AhTBQQgFgFAAgHQAAgHAFgFQAFgEAGAAQAHAAAFAEQAFAFAAAHQAAAHgFAFQgFAEgHAAQgGAAgFgEgAgiAnQgVgUAAgdQAAgfAVgVQAVgVAeAAQAdAAAWAVQAVAVAAAfQAAAdgVAUQgWAWgdAAQgeAAgVgWg',
      )
    this.shape_74.setTransform(-29.2, 12)

    this.timeline.addTween(cjs.Tween.get(this.shape_74).wait(20))

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(
    -42.7,
    2.4,
    30.500000000000004,
    25.900000000000002,
  )
  ;(lib.copiecerclesrouge = function(mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])

    // Calque_5
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgPAPQgHgFAAgKQAAgJAHgGQAHgGAIAAQAJAAAHAGQAHAGAAAJQAAAKgHAFQgHAHgJAAQgIAAgHgHg',
      )
    this.shape.setTransform(25.775, 1)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgQAQQgGgGAAgKQAAgJAGgGQAIgHAIAAQAJAAAHAHQAIAGAAAJQAAAKgIAGQgHAGgJAAQgIAAgIgGg',
      )
    this.shape_1.setTransform(25.8, 1)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgQAQQgHgGAAgKQAAgJAHgHQAIgGAIgBQAJABAIAGQAHAHAAAJQAAAKgHAGQgIAIgJgBQgIABgIgIg',
      )
    this.shape_2.setTransform(25.775, 1)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgRARQgHgGAAgLQAAgKAHgGQAIgHAJAAQAJAAAIAHQAIAGAAAKQAAALgIAGQgIAHgJAAQgJAAgIgHg',
      )
    this.shape_3.setTransform(25.8, 1)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgRASQgIgHAAgLQAAgKAIgHQAIgHAJAAQAKAAAIAHQAIAHAAAKQAAALgIAHQgIAHgKAAQgJAAgIgHg',
      )
    this.shape_4.setTransform(25.775, 1)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgSASQgHgHgBgLQABgKAHgIQAIgGAKAAQAKAAAIAGQAJAIgBAKQABALgJAHQgIAIgKgBQgKABgIgIg',
      )
    this.shape_5.setTransform(25.8, 1)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgSATQgIgIAAgLQAAgLAIgIQAJgGAKAAQAKAAAIAGQAIAIAAALQAAALgIAIQgIAHgKABQgKgBgJgHg',
      )
    this.shape_6.setTransform(25.775, 1)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgSATQgJgHAAgMQAAgLAJgIQAIgHAKAAQALAAAIAHQAJAIAAALQAAAMgJAHQgIAIgLAAQgKAAgIgIg',
      )
    this.shape_7.setTransform(25.8, 1)

    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgTAUQgJgIAAgMQAAgLAJgJQAJgHALAAQAKAAAJAHQAJAJAAALQAAAMgJAIQgJAIgKAAQgLAAgJgIg',
      )
    this.shape_8.setTransform(25.775, 1)

    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgTAUQgJgIAAgMQAAgLAJgJQAJgHAKAAQALAAAJAHQAJAJAAALQAAAMgJAIQgJAIgLAAQgKAAgJgIg',
      )
    this.shape_9.setTransform(25.8, 1)

    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgSATQgJgIAAgLQAAgLAJgIQAIgGAKAAQAKAAAJAGQAIAIAAALQAAALgIAIQgJAHgKABQgKgBgIgHg',
      )
    this.shape_10.setTransform(25.8, 1)

    this.shape_11 = new cjs.Shape()
    this.shape_11.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgRASQgJgGAAgMQAAgKAJgIQAIgHAKAAQAKAAAIAHQAIAIAAAKQAAAMgIAGQgIAIgKAAQgKAAgIgIg',
      )
    this.shape_11.setTransform(25.775, 1)

    this.shape_12 = new cjs.Shape()
    this.shape_12.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgRASQgIgHAAgLQAAgKAIgIQAIgGAJAAQAKAAAIAGQAIAIAAAKQAAALgIAHQgIAHgKAAQgJAAgIgHg',
      )
    this.shape_12.setTransform(25.8, 1.025)

    this.shape_13 = new cjs.Shape()
    this.shape_13.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgRASQgIgIAAgKQAAgJAIgIQAIgGAJAAQAKAAAHAGQAJAIAAAJQAAAKgJAIQgHAGgKAAQgJAAgIgGg',
      )
    this.shape_13.setTransform(25.8, 1)

    this.shape_14 = new cjs.Shape()
    this.shape_14.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgQARQgIgGAAgLQAAgKAIgGQAHgHAJAAQAKAAAHAHQAIAGAAAKQAAALgIAGQgHAHgKAAQgJAAgHgHg',
      )
    this.shape_14.setTransform(25.775, 1)

    this.shape_15 = new cjs.Shape()
    this.shape_15.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgPAQQgHgGAAgKQAAgJAHgGQAHgHAIAAQAJAAAHAHQAHAGAAAJQAAAKgHAGQgHAGgJAAQgIAAgHgGg',
      )
    this.shape_15.setTransform(25.775, 1)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape, p: {scaleX: 1, scaleY: 1, x: 25.775}}]})
        .to({state: [{t: this.shape_1}]}, 1)
        .to({state: [{t: this.shape_2}]}, 1)
        .to({state: [{t: this.shape_3}]}, 1)
        .to({state: [{t: this.shape_4}]}, 1)
        .to({state: [{t: this.shape_5}]}, 1)
        .to({state: [{t: this.shape_6}]}, 1)
        .to({state: [{t: this.shape_7}]}, 1)
        .to({state: [{t: this.shape_8}]}, 1)
        .to(
          {state: [{t: this.shape, p: {scaleX: 1.3, scaleY: 1.3, x: 25.8072}}]},
          1,
        )
        .to({state: [{t: this.shape_9}]}, 1)
        .to({state: [{t: this.shape_7}]}, 1)
        .to({state: [{t: this.shape_10}]}, 1)
        .to({state: [{t: this.shape_11}]}, 1)
        .to({state: [{t: this.shape_12}]}, 1)
        .to({state: [{t: this.shape_13}]}, 1)
        .to({state: [{t: this.shape_14}]}, 1)
        .to({state: [{t: this.shape_2}]}, 1)
        .to({state: [{t: this.shape_15}]}, 1)
        .to({state: [{t: this.shape, p: {scaleX: 1, scaleY: 1, x: 25.775}}]}, 1)
        .wait(1),
    )

    // Calque_4
    this.shape_16 = new cjs.Shape()
    this.shape_16.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgVAWQgKgJAAgNQAAgMAKgKQAJgJAMAAQANAAAKAJQAJAKAAAMQAAANgJAJQgKAKgNAAQgMAAgJgKg',
      )
    this.shape_16.setTransform(9.6, 0.825)

    this.shape_17 = new cjs.Shape()
    this.shape_17.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgUAVQgJgIAAgNQAAgMAJgIQAJgJALAAQANAAAJAJQAIAIAAAMQAAANgIAIQgJAJgNAAQgLAAgJgJg',
      )
    this.shape_17.setTransform(9.6, 0.825)

    this.shape_18 = new cjs.Shape()
    this.shape_18.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgTAUQgIgIAAgMQAAgLAIgIQAJgIAKAAQAMAAAIAIQAJAIgBALQABAMgJAIQgIAIgMAAQgKAAgJgIg',
      )
    this.shape_18.setTransform(9.6, 0.825)

    this.shape_19 = new cjs.Shape()
    this.shape_19.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgSATQgHgIgBgLQABgKAHgIQAIgHAKAAQALAAAIAHQAHAIAAAKQAAALgHAIQgIAHgLAAQgKAAgIgHg',
      )
    this.shape_19.setTransform(9.6, 0.825)

    this.shape_20 = new cjs.Shape()
    this.shape_20.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgRARQgHgHAAgKQAAgJAHgIQAIgHAJAAQAKAAAHAHQAIAIAAAJQAAAKgIAHQgHAIgKAAQgJAAgIgIg',
      )
    this.shape_20.setTransform(9.6, 0.825)

    this.shape_21 = new cjs.Shape()
    this.shape_21.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgPAQQgHgGAAgKQAAgJAHgGQAGgHAJAAQAJAAAIAHQAGAGAAAJQAAAKgGAGQgIAHgJAAQgJAAgGgHg',
      )
    this.shape_21.setTransform(9.6, 0.825)

    this.shape_22 = new cjs.Shape()
    this.shape_22.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAIAAAHAGQAHAGAAAIQAAAJgHAGQgHAGgIAAQgIAAgGgGg',
      )
    this.shape_22.setTransform(9.6, 0.825)

    this.shape_23 = new cjs.Shape()
    this.shape_23.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgMAOQgHgGABgIQgBgHAHgGQAFgFAHAAQAIAAAGAFQAGAGgBAHQABAIgGAGQgGAFgIAAQgHAAgFgFg',
      )
    this.shape_23.setTransform(9.6, 0.825)

    this.shape_24 = new cjs.Shape()
    this.shape_24.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgLAMQgGgFAAgHQAAgGAGgGQAFgFAGAAQAHAAAGAFQAFAGAAAGQAAAHgFAFQgGAGgHAAQgGAAgFgGg',
      )
    this.shape_24.setTransform(9.6, 0.825)

    this.shape_25 = new cjs.Shape()
    this.shape_25.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgKALQgFgEAAgHQAAgGAFgEQAFgFAFAAQAGAAAFAFQAFAEAAAGQAAAHgFAEQgFAFgGAAQgFAAgFgFg',
      )
    this.shape_25.setTransform(9.6, 0.825)

    this.shape_26 = new cjs.Shape()
    this.shape_26.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgLAMQgFgFgBgHQABgGAFgFQAFgFAGAAQAHAAAGAFQAEAFAAAGQAAAHgEAFQgGAFgHAAQgGAAgFgFg',
      )
    this.shape_26.setTransform(9.6, 0.825)

    this.shape_27 = new cjs.Shape()
    this.shape_27.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg',
      )
    this.shape_27.setTransform(9.6, 0.825)

    this.shape_28 = new cjs.Shape()
    this.shape_28.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgNAPQgHgGAAgJQAAgIAHgGQAFgGAIAAQAIAAAHAGQAGAGAAAIQAAAJgGAGQgHAGgIAAQgIAAgFgGg',
      )
    this.shape_28.setTransform(9.6, 0.825)

    this.shape_29 = new cjs.Shape()
    this.shape_29.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgPAQQgGgHAAgJQAAgIAGgHQAHgGAIAAQAJAAAHAGQAHAHAAAIQAAAJgHAHQgHAGgJAAQgIAAgHgGg',
      )
    this.shape_29.setTransform(9.6, 0.825)

    this.shape_30 = new cjs.Shape()
    this.shape_30.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgQARQgHgHAAgKQAAgJAHgHQAIgHAIAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgIAAgIgHg',
      )
    this.shape_30.setTransform(9.6, 0.825)

    this.shape_31 = new cjs.Shape()
    this.shape_31.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgRASQgIgHAAgLQAAgKAIgHQAHgHAKAAQAKAAAIAHQAHAHAAAKQAAALgHAHQgIAHgKAAQgKAAgHgHg',
      )
    this.shape_31.setTransform(9.6, 0.825)

    this.shape_32 = new cjs.Shape()
    this.shape_32.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgSATQgIgIAAgLQAAgKAIgIQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgKAAgIgIg',
      )
    this.shape_32.setTransform(9.6, 0.825)

    this.shape_33 = new cjs.Shape()
    this.shape_33.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgTAUQgJgIAAgMQAAgLAJgIQAJgJAKAAQAMAAAIAJQAJAIAAALQAAAMgJAIQgIAJgMAAQgKAAgJgJg',
      )
    this.shape_33.setTransform(9.6, 0.825)

    this.shape_34 = new cjs.Shape()
    this.shape_34.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgUAVQgKgIABgNQgBgMAKgJQAIgIAMAAQANAAAJAIQAIAJABAMQgBANgIAIQgJAJgNAAQgMAAgIgJg',
      )
    this.shape_34.setTransform(9.6, 0.825)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape_16}]})
        .to({state: [{t: this.shape_17}]}, 1)
        .to({state: [{t: this.shape_18}]}, 1)
        .to({state: [{t: this.shape_19}]}, 1)
        .to({state: [{t: this.shape_20}]}, 1)
        .to({state: [{t: this.shape_21}]}, 1)
        .to({state: [{t: this.shape_22}]}, 1)
        .to({state: [{t: this.shape_23}]}, 1)
        .to({state: [{t: this.shape_24}]}, 1)
        .to({state: [{t: this.shape_25}]}, 1)
        .to({state: [{t: this.shape_26}]}, 1)
        .to({state: [{t: this.shape_27}]}, 1)
        .to({state: [{t: this.shape_28}]}, 1)
        .to({state: [{t: this.shape_29}]}, 1)
        .to({state: [{t: this.shape_30}]}, 1)
        .to({state: [{t: this.shape_31}]}, 1)
        .to({state: [{t: this.shape_32}]}, 1)
        .to({state: [{t: this.shape_33}]}, 1)
        .to({state: [{t: this.shape_34}]}, 1)
        .to({state: [{t: this.shape_16}]}, 1)
        .wait(1),
    )

    // Calque_3
    this.shape_35 = new cjs.Shape()
    this.shape_35.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgLALQgEgEAAgHQAAgGAEgEQAFgFAGAAQAGAAAGAFQAEAEAAAGQAAAHgEAEQgGAFgGAAQgGAAgFgFg',
      )
    this.shape_35.setTransform(6.65, 15.8)

    this.shape_36 = new cjs.Shape()
    this.shape_36.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgLAMQgGgFAAgHQAAgHAGgEQAFgGAGAAQAHAAAGAGQAFAEAAAHQAAAHgFAFQgGAGgHgBQgGABgFgGg',
      )
    this.shape_36.setTransform(6.65, 15.8)

    this.shape_37 = new cjs.Shape()
    this.shape_37.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAHAAAGAFQAGAGAAAHQAAAIgGAFQgGAGgHAAQgHAAgGgGg',
      )
    this.shape_37.setTransform(6.675, 15.825)

    this.shape_38 = new cjs.Shape()
    this.shape_38.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgNAPQgHgGAAgJQAAgIAHgFQAGgGAHAAQAIAAAGAGQAGAFABAIQgBAJgGAGQgGAFgIAAQgHAAgGgFg',
      )
    this.shape_38.setTransform(6.65, 15.8)

    this.shape_39 = new cjs.Shape()
    this.shape_39.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgOAPQgHgGAAgJQAAgIAHgGQAGgGAIAAQAJAAAGAGQAHAGAAAIQAAAJgHAGQgGAGgJAAQgIAAgGgGg',
      )
    this.shape_39.setTransform(6.65, 15.825)

    this.shape_40 = new cjs.Shape()
    this.shape_40.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgPAQQgHgGAAgKQAAgJAHgGQAHgHAIAAQAJAAAHAHQAHAGAAAJQAAAKgHAGQgHAHgJAAQgIAAgHgHg',
      )
    this.shape_40.setTransform(6.675, 15.825)

    this.shape_41 = new cjs.Shape()
    this.shape_41.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgQARQgIgHAAgKQAAgKAIgGQAHgHAJAAQAKAAAHAHQAIAGAAAKQAAAKgIAHQgHAHgKAAQgJAAgHgHg',
      )
    this.shape_41.setTransform(6.675, 15.85)

    this.shape_42 = new cjs.Shape()
    this.shape_42.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgRASQgIgHAAgLQAAgKAIgHQAIgHAJAAQALAAAHAHQAIAHAAAKQAAALgIAHQgHAHgLAAQgJAAgIgHg',
      )
    this.shape_42.setTransform(6.65, 15.825)

    this.shape_43 = new cjs.Shape()
    this.shape_43.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgSATQgIgHAAgMQAAgLAIgHQAIgIAKABQALgBAIAIQAIAHAAALQAAAMgIAHQgIAIgLAAQgKAAgIgIg',
      )
    this.shape_43.setTransform(6.675, 15.85)

    this.shape_44 = new cjs.Shape()
    this.shape_44.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgTAUQgJgIAAgMQAAgMAJgHQAJgIAKAAQALAAAJAIQAJAHAAAMQAAAMgJAIQgJAIgLAAQgKAAgJgIg',
      )
    this.shape_44.setTransform(6.675, 15.85)

    this.shape_45 = new cjs.Shape()
    this.shape_45.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgSATQgJgHAAgMQAAgLAJgHQAJgIAJAAQALAAAJAIQAHAHAAALQAAAMgHAHQgJAIgLAAQgJAAgJgIg',
      )
    this.shape_45.setTransform(6.65, 15.825)

    this.shape_46 = new cjs.Shape()
    this.shape_46.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgSASQgHgHAAgLQAAgLAHgGQAJgIAJABQAKgBAIAIQAIAGAAALQAAALgIAHQgIAIgKgBQgJABgJgIg',
      )
    this.shape_46.setTransform(6.675, 15.85)

    this.shape_47 = new cjs.Shape()
    this.shape_47.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgRASQgHgHAAgLQAAgKAHgGQAJgHAIAAQAKAAAIAHQAHAGAAAKQAAALgHAHQgIAGgKAAQgIAAgJgGg',
      )
    this.shape_47.setTransform(6.65, 15.825)

    this.shape_48 = new cjs.Shape()
    this.shape_48.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgQARQgHgHAAgKQAAgJAHgHQAIgGAIAAQAJAAAIAGQAHAHAAAJQAAAKgHAHQgIAGgJAAQgIAAgIgGg',
      )
    this.shape_48.setTransform(6.675, 15.825)

    this.shape_49 = new cjs.Shape()
    this.shape_49.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgPAPQgHgFAAgKQAAgJAHgGQAHgGAIAAQAJAAAHAGQAHAGAAAJQAAAKgHAFQgHAHgJAAQgIAAgHgHg',
      )
    this.shape_49.setTransform(6.675, 15.85)

    this.shape_50 = new cjs.Shape()
    this.shape_50.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgOAPQgGgGgBgJQABgIAGgGQAHgGAHAAQAJAAAGAGQAGAGABAIQgBAJgGAGQgGAGgJAAQgHAAgHgGg',
      )
    this.shape_50.setTransform(6.65, 15.825)

    this.shape_51 = new cjs.Shape()
    this.shape_51.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgNAOQgGgGAAgIQAAgIAGgFQAGgGAHAAQAIAAAGAGQAGAFAAAIQAAAIgGAGQgGAGgIAAQgHAAgGgGg',
      )
    this.shape_51.setTransform(6.675, 15.825)

    this.shape_52 = new cjs.Shape()
    this.shape_52.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgMAOQgGgGAAgIQAAgHAGgFQAFgFAHgBQAHABAHAFQAFAFAAAHQAAAIgFAGQgHAEgHAAQgHAAgFgEg',
      )
    this.shape_52.setTransform(6.65, 15.8)

    this.shape_53 = new cjs.Shape()
    this.shape_53.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgMAMQgFgFAAgHQAAgHAFgFQAGgEAGAAQAHAAAFAEQAGAFAAAHQAAAHgGAFQgFAFgHAAQgGAAgGgFg',
      )
    this.shape_53.setTransform(6.675, 15.825)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape_35}]})
        .to({state: [{t: this.shape_36}]}, 1)
        .to({state: [{t: this.shape_37}]}, 1)
        .to({state: [{t: this.shape_38}]}, 1)
        .to({state: [{t: this.shape_39}]}, 1)
        .to({state: [{t: this.shape_40}]}, 1)
        .to({state: [{t: this.shape_41}]}, 1)
        .to({state: [{t: this.shape_42}]}, 1)
        .to({state: [{t: this.shape_43}]}, 1)
        .to({state: [{t: this.shape_44}]}, 1)
        .to({state: [{t: this.shape_45}]}, 1)
        .to({state: [{t: this.shape_46}]}, 1)
        .to({state: [{t: this.shape_47}]}, 1)
        .to({state: [{t: this.shape_48}]}, 1)
        .to({state: [{t: this.shape_49}]}, 1)
        .to({state: [{t: this.shape_50}]}, 1)
        .to({state: [{t: this.shape_51}]}, 1)
        .to({state: [{t: this.shape_52}]}, 1)
        .to({state: [{t: this.shape_53}]}, 1)
        .to({state: [{t: this.shape_35}]}, 1)
        .wait(1),
    )

    // Calque_2
    this.shape_54 = new cjs.Shape()
    this.shape_54.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgKAMQgGgFAAgHQAAgGAGgFQAEgEAGAAQAGAAAFAEQAGAFAAAGQAAAHgGAFQgFAEgGAAQgGAAgEgEg',
      )
    this.shape_54.setTransform(11.75, 22.85)

    this.shape_55 = new cjs.Shape()
    this.shape_55.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgKALQgFgFAAgGQAAgGAFgEQAFgEAFAAQAGAAAFAEQAEAEABAGQgBAGgEAFQgFAEgGAAQgFAAgFgEg',
      )
    this.shape_55.setTransform(11.75, 22.85)

    this.shape_56 = new cjs.Shape()
    this.shape_56.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgJAKQgEgEgBgGQABgFAEgFQAEgDAFAAQAFAAAFADQAFAFAAAFQAAAGgFAEQgFAEgFAAQgFAAgEgEg',
      )
    this.shape_56.setTransform(11.75, 22.85)

    this.shape_57 = new cjs.Shape()
    this.shape_57.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgIAJQgFgDAAgGQAAgFAFgEQAEgDAEAAQAGAAAEADQAEAEAAAFQAAAGgEADQgEAFgGAAQgEAAgEgFg',
      )
    this.shape_57.setTransform(11.725, 22.85)

    this.shape_58 = new cjs.Shape()
    this.shape_58.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgIAJQgEgDAAgGQAAgFAEgDQAEgDAEAAQAFAAAEADQAEADAAAFQAAAGgEADQgEADgFABQgEgBgEgDg',
      )
    this.shape_58.setTransform(11.725, 22.85)

    this.shape_59 = new cjs.Shape()
    this.shape_59.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgIAIQgDgDAAgFQAAgEADgEQAEgDAEAAQAEAAAEADQAEAEAAAEQAAAFgEADQgEAEgEAAQgEAAgEgEg',
      )
    this.shape_59.setTransform(11.75, 22.85)

    this.shape_60 = new cjs.Shape()
    this.shape_60.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgHAHQgDgDAAgEQAAgDADgEQADgCAEgBQAEABAEACQADAEAAADQAAAEgDADQgEADgEABQgEgBgDgDg',
      )
    this.shape_60.setTransform(11.75, 22.85)

    this.shape_61 = new cjs.Shape()
    this.shape_61.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg',
      )
    this.shape_61.setTransform(11.725, 22.85)

    this.shape_62 = new cjs.Shape()
    this.shape_62.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgFAGQgDgCAAgEQAAgDADgCQACgDADAAQAEAAACADQADACAAADQAAAEgDACQgCADgEAAQgDAAgCgDg',
      )
    this.shape_62.setTransform(11.725, 22.85)

    this.shape_63 = new cjs.Shape()
    this.shape_63.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgFAFQgCgCAAgDQAAgDACgCQADgCACAAQADAAADACQACACAAADQAAADgCACQgDADgDAAQgCAAgDgDg',
      )
    this.shape_63.setTransform(11.725, 22.85)

    this.shape_64 = new cjs.Shape()
    this.shape_64.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgGAGQgDgCAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDACQgDADgEAAQgDAAgDgDg',
      )
    this.shape_64.setTransform(11.725, 22.85)

    this.shape_65 = new cjs.Shape()
    this.shape_65.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgGAHQgEgDAAgEQAAgDAEgDQADgEADAAQAEAAAEAEQADADAAADQAAAEgDADQgEADgEABQgDgBgDgDg',
      )
    this.shape_65.setTransform(11.725, 22.85)

    this.shape_66 = new cjs.Shape()
    this.shape_66.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgHAIQgEgDABgFQgBgEAEgDQADgDAEAAQAEAAAEADQAEADgBAEQABAFgEADQgEADgEAAQgEAAgDgDg',
      )
    this.shape_66.setTransform(11.75, 22.85)

    this.shape_67 = new cjs.Shape()
    this.shape_67.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgIAIQgDgDAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEADQgDAEgFAAQgEAAgEgEg',
      )
    this.shape_67.setTransform(11.75, 22.85)

    this.shape_68 = new cjs.Shape()
    this.shape_68.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgIAJQgEgDAAgGQAAgFAEgEQAEgDAEAAQAFAAAEADQAEAEAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg',
      )
    this.shape_68.setTransform(11.725, 22.85)

    this.shape_69 = new cjs.Shape()
    this.shape_69.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgJAJQgEgDAAgGQAAgFAEgEQAFgDAEAAQAGAAADADQAFAEAAAFQAAAGgFADQgDAFgGAAQgEAAgFgFg',
      )
    this.shape_69.setTransform(11.75, 22.85)

    this.shape_70 = new cjs.Shape()
    this.shape_70.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgJALQgFgFAAgGQAAgFAFgFQAEgDAFAAQAGAAAEADQAFAFAAAFQAAAGgFAFQgEADgGAAQgFAAgEgDg',
      )
    this.shape_70.setTransform(11.75, 22.85)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape_54}]})
        .to({state: [{t: this.shape_55}]}, 1)
        .to({state: [{t: this.shape_56}]}, 1)
        .to({state: [{t: this.shape_57}]}, 1)
        .to({state: [{t: this.shape_58}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_60}]}, 1)
        .to({state: [{t: this.shape_61}]}, 1)
        .to({state: [{t: this.shape_62}]}, 1)
        .to({state: [{t: this.shape_63}]}, 1)
        .to({state: [{t: this.shape_62}]}, 1)
        .to({state: [{t: this.shape_64}]}, 1)
        .to({state: [{t: this.shape_65}]}, 1)
        .to({state: [{t: this.shape_66}]}, 1)
        .to({state: [{t: this.shape_67}]}, 1)
        .to({state: [{t: this.shape_68}]}, 1)
        .to({state: [{t: this.shape_69}]}, 1)
        .to({state: [{t: this.shape_70}]}, 1)
        .to({state: [{t: this.shape_55}]}, 1)
        .to({state: [{t: this.shape_54}]}, 1)
        .wait(1),
    )

    // Calque_1
    this.shape_71 = new cjs.Shape()
    this.shape_71.graphics
      .f('#E93A45')
      .s()
      .p(
        'AAeBjQgHgGAAgJQAAgKAHgGQAHgGAJAAQAJAAAGAGQAIAGAAAKQAAAJgIAGQgGAHgJAAQgJAAgHgHgAgyASQgWgUAAgeQAAgeAWgWQAVgVAdAAQAeAAAVAVQAVAWAAAeQAAAegVAUQgVAVgeAAQgdAAgVgVg',
      )
    this.shape_71.setTransform(17.35, 15.175)

    this.timeline.addTween(cjs.Tween.get(this.shape_71).wait(20))

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(3.8, -2.3, 25, 28.1)
  ;(lib.copiecerclesorange = function(mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])

    // Calque_5
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgLAMQgEgFAAgHQAAgGAEgFQAGgEAFAAQAHAAAFAEQAEAFAAAGQAAAHgEAFQgFAEgHAAQgFAAgGgEg',
      )
    this.shape.setTransform(24.4, 1.6)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgKALQgEgFAAgGQAAgGAEgEQAFgEAFAAQAGAAAFAEQAFAEgBAGQABAGgFAFQgFAEgGAAQgFAAgFgEg',
      )
    this.shape_1.setTransform(24.4, 1.6)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgJAKQgEgEgBgGQABgFAEgEQAEgEAFAAQAGAAAFAEQADAEAAAFQAAAGgDAEQgFAEgGAAQgFAAgEgEg',
      )
    this.shape_2.setTransform(24.4, 1.6)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgJAJQgEgDAAgGQAAgFAEgEQAEgDAFAAQAFAAAEADQAFAEAAAFQAAAGgFADQgEAFgFAAQgFAAgEgFg',
      )
    this.shape_3.setTransform(24.425, 1.6)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgIAJQgEgDAAgGQAAgFAEgDQAEgDAEAAQAFAAAEADQAEADAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg',
      )
    this.shape_4.setTransform(24.425, 1.6)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgHAIQgEgDAAgFQAAgEAEgDQADgDAEgBQAFABAEADQADADAAAEQAAAFgDADQgEADgFABQgEgBgDgDg',
      )
    this.shape_5.setTransform(24.4, 1.6)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgGAIQgEgEAAgEQAAgEAEgDQADgDADAAQAEAAAEADQADADAAAEQAAAEgDAEQgEACgEAAQgDAAgDgCg',
      )
    this.shape_6.setTransform(24.4, 1.6)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgGAHQgDgDAAgEQAAgEADgCQADgDADAAQAEAAADADQADACAAAEQAAAEgDADQgDADgEAAQgDAAgDgDg',
      )
    this.shape_7.setTransform(24.425, 1.6)

    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgFAGQgDgCAAgEQAAgDADgCQACgDADAAQAEAAACADQADACAAADQAAAEgDACQgCADgEAAQgDAAgCgDg',
      )
    this.shape_8.setTransform(24.425, 1.6)

    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgGAHQgDgDAAgEQAAgDADgCQADgEADAAQAEAAADAEQADACAAADQAAAEgDADQgDACgEAAQgDAAgDgCg',
      )
    this.shape_9.setTransform(24.425, 1.6)

    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgHAHQgDgDAAgEQAAgEADgDQAEgDADAAQAEAAADADQAEADAAAEQAAAEgEADQgDADgEAAQgDAAgEgDg',
      )
    this.shape_10.setTransform(24.425, 1.6)

    this.shape_11 = new cjs.Shape()
    this.shape_11.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgHAIQgEgDAAgFQAAgEAEgDQADgDAEAAQAEAAAEADQADADABAEQgBAFgDADQgEADgEAAQgEAAgDgDg',
      )
    this.shape_11.setTransform(24.4, 1.6)

    this.shape_12 = new cjs.Shape()
    this.shape_12.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgIAJQgDgDAAgGQAAgEADgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAGgDADQgEADgFAAQgEAAgEgDg',
      )
    this.shape_12.setTransform(24.425, 1.6)

    this.shape_13 = new cjs.Shape()
    this.shape_13.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg',
      )
    this.shape_13.setTransform(24.425, 1.6)

    this.shape_14 = new cjs.Shape()
    this.shape_14.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgIAKQgFgEAAgGQAAgFAFgEQAEgDAEAAQAGAAAEADQAEAEAAAFQAAAGgEAEQgEADgGABQgEgBgEgDg',
      )
    this.shape_14.setTransform(24.4, 1.6)

    this.shape_15 = new cjs.Shape()
    this.shape_15.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgKAKQgEgEAAgGQAAgGAEgEQAFgDAFAAQAGAAAFADQAEAEAAAGQAAAGgEAEQgFAFgGAAQgFAAgFgFg',
      )
    this.shape_15.setTransform(24.4, 1.6)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape, p: {scaleX: 1, scaleY: 1}}]})
        .to({state: [{t: this.shape_1}]}, 1)
        .to({state: [{t: this.shape_2}]}, 1)
        .to({state: [{t: this.shape_3}]}, 1)
        .to({state: [{t: this.shape_4}]}, 1)
        .to({state: [{t: this.shape_5}]}, 1)
        .to({state: [{t: this.shape_6}]}, 1)
        .to({state: [{t: this.shape_7}]}, 1)
        .to({state: [{t: this.shape_8}]}, 1)
        .to({state: [{t: this.shape, p: {scaleX: 0.5, scaleY: 0.5}}]}, 1)
        .to({state: [{t: this.shape_8}]}, 1)
        .to({state: [{t: this.shape_9}]}, 1)
        .to({state: [{t: this.shape_10}]}, 1)
        .to({state: [{t: this.shape_11}]}, 1)
        .to({state: [{t: this.shape_12}]}, 1)
        .to({state: [{t: this.shape_13}]}, 1)
        .to({state: [{t: this.shape_14}]}, 1)
        .to({state: [{t: this.shape_15}]}, 1)
        .to({state: [{t: this.shape_1}]}, 1)
        .to({state: [{t: this.shape, p: {scaleX: 1, scaleY: 1}}]}, 1)
        .wait(1),
    )

    // Calque_4
    this.shape_16 = new cjs.Shape()
    this.shape_16.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgKALQgGgEAAgHQAAgGAGgEQAFgFAFAAQAHAAAEAFQAFAEABAGQgBAHgFAEQgEAFgHAAQgFAAgFgFg',
      )
    this.shape_16.setTransform(1.2, 13.9)

    this.shape_17 = new cjs.Shape()
    this.shape_17.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgMAMQgFgEAAgIQAAgGAFgFQAGgGAGAAQAHAAAFAGQAGAFAAAGQAAAIgGAEQgFAGgHAAQgGAAgGgGg',
      )
    this.shape_17.setTransform(1.2, 13.9)

    this.shape_18 = new cjs.Shape()
    this.shape_18.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgNAOQgFgFAAgJQAAgHAFgGQAHgFAGAAQAIAAAGAFQAFAGAAAHQAAAJgFAFQgGAFgIAAQgGAAgHgFg',
      )
    this.shape_18.setTransform(1.2, 13.9)

    this.shape_19 = new cjs.Shape()
    this.shape_19.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgOAPQgGgGAAgJQAAgIAGgGQAHgFAHAAQAIAAAHAFQAGAGAAAIQAAAJgGAGQgHAFgIAAQgHAAgHgFg',
      )
    this.shape_19.setTransform(1.25, 13.925)

    this.shape_20 = new cjs.Shape()
    this.shape_20.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgPAQQgGgGAAgKQAAgIAGgHQAHgGAIAAQAJAAAGAGQAIAHAAAIQAAAKgIAGQgGAGgJAAQgIAAgHgGg',
      )
    this.shape_20.setTransform(1.25, 13.925)

    this.shape_21 = new cjs.Shape()
    this.shape_21.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgPARQgIgHAAgKQAAgKAIgFQAGgIAJABQAKgBAHAIQAHAFAAAKQAAAKgHAHQgHAGgKAAQgJAAgGgGg',
      )
    this.shape_21.setTransform(1.25, 13.95)

    this.shape_22 = new cjs.Shape()
    this.shape_22.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgRASQgHgHAAgLQAAgKAHgGQAIgIAJAAQAKAAAIAIQAHAGAAAKQAAALgHAHQgIAHgKAAQgJAAgIgHg',
      )
    this.shape_22.setTransform(1.25, 13.95)

    this.shape_23 = new cjs.Shape()
    this.shape_23.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgSATQgIgIAAgLQAAgLAIgHQAIgHAKAAQAKAAAIAHQAJAHAAALQAAALgJAIQgIAHgKAAQgKAAgIgHg',
      )
    this.shape_23.setTransform(1.3, 13.975)

    this.shape_24 = new cjs.Shape()
    this.shape_24.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgTAUQgIgIAAgMQAAgLAIgIQAJgIAKAAQALAAAJAIQAIAIAAALQAAAMgIAIQgJAIgLAAQgKAAgJgIg',
      )
    this.shape_24.setTransform(1.3, 13.975)

    this.shape_25 = new cjs.Shape()
    this.shape_25.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgUAVQgJgIAAgNQAAgMAJgIQAJgIALAAQALAAAKAIQAJAIAAAMQAAANgJAIQgKAIgLAAQgLAAgJgIg',
      )
    this.shape_25.setTransform(1.3, 13.975)

    this.shape_26 = new cjs.Shape()
    this.shape_26.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgSAUQgIgJAAgKQAAgMAIgHQAIgIAKABQALgBAIAIQAIAHAAAMQAAAKgIAJQgIAGgLAAQgKAAgIgGg',
      )
    this.shape_26.setTransform(1.275, 13.95)

    this.shape_27 = new cjs.Shape()
    this.shape_27.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgRASQgIgHAAgLQAAgKAIgHQAIgHAJAAQAKAAAIAHQAIAHAAAKQAAALgIAHQgIAHgKAAQgJAAgIgHg',
      )
    this.shape_27.setTransform(1.275, 13.975)

    this.shape_28 = new cjs.Shape()
    this.shape_28.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgQARQgIgGABgLQgBgJAIgHQAIgHAIAAQAKAAAHAHQAIAHgBAJQABALgIAGQgHAHgKAAQgIAAgIgHg',
      )
    this.shape_28.setTransform(1.25, 13.95)

    this.shape_29 = new cjs.Shape()
    this.shape_29.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgPAQQgHgGAAgKQAAgJAHgGQAHgGAIgBQAJABAHAGQAHAGAAAJQAAAKgHAGQgHAHgJgBQgIABgHgHg',
      )
    this.shape_29.setTransform(1.275, 13.95)

    this.shape_30 = new cjs.Shape()
    this.shape_30.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgOAPQgHgGAAgJQAAgIAHgGQAGgGAIAAQAJAAAGAGQAHAGAAAIQAAAJgHAGQgGAGgJAAQgIAAgGgGg',
      )
    this.shape_30.setTransform(1.25, 13.925)

    this.shape_31 = new cjs.Shape()
    this.shape_31.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgNAPQgHgGAAgJQAAgIAHgFQAGgGAHAAQAIAAAGAGQAHAFAAAIQAAAJgHAGQgGAFgIAAQgHAAgGgFg',
      )
    this.shape_31.setTransform(1.225, 13.9)

    this.shape_32 = new cjs.Shape()
    this.shape_32.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAHAAAGAGQAGAFAAAHQAAAIgGAFQgGAGgHAAQgHAAgFgGg',
      )
    this.shape_32.setTransform(1.225, 13.925)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape_16}]})
        .to({state: [{t: this.shape_17}]}, 1)
        .to({state: [{t: this.shape_18}]}, 1)
        .to({state: [{t: this.shape_19}]}, 1)
        .to({state: [{t: this.shape_20}]}, 1)
        .to({state: [{t: this.shape_21}]}, 1)
        .to({state: [{t: this.shape_22}]}, 1)
        .to({state: [{t: this.shape_23}]}, 1)
        .to({state: [{t: this.shape_24}]}, 1)
        .to({state: [{t: this.shape_25}]}, 1)
        .to({state: [{t: this.shape_24}]}, 1)
        .to({state: [{t: this.shape_26}]}, 1)
        .to({state: [{t: this.shape_27}]}, 1)
        .to({state: [{t: this.shape_28}]}, 1)
        .to({state: [{t: this.shape_29}]}, 1)
        .to({state: [{t: this.shape_30}]}, 1)
        .to({state: [{t: this.shape_31}]}, 1)
        .to({state: [{t: this.shape_32}]}, 1)
        .to({state: [{t: this.shape_17}]}, 1)
        .to({state: [{t: this.shape_16}]}, 1)
        .wait(1),
    )

    // Calque_3
    this.shape_33 = new cjs.Shape()
    this.shape_33.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgWAWQgJgJAAgNQAAgMAJgKQAKgJAMAAQANAAAJAJQAKAKAAAMQAAANgKAJQgJAKgNAAQgMAAgKgKg',
      )
    this.shape_33.setTransform(7.3, 0.825)

    this.shape_34 = new cjs.Shape()
    this.shape_34.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgXAXQgKgJABgOQgBgNAKgKQALgJAMAAQANAAAKAJQAKAKAAANQAAAOgKAJQgKAKgNAAQgMAAgLgKg',
      )
    this.shape_34.setTransform(7.3, 0.825)

    this.shape_35 = new cjs.Shape()
    this.shape_35.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgXAYQgLgKAAgOQAAgNALgLQAKgKANAAQAOAAAKAKQALALAAANQAAAOgLAKQgKALgOAAQgNAAgKgLg',
      )
    this.shape_35.setTransform(7.3, 0.825)

    this.shape_36 = new cjs.Shape()
    this.shape_36.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgZAZQgKgKAAgPQAAgOAKgLQALgKAOAAQAPAAAKAKQALALAAAOQAAAPgLAKQgKALgPAAQgOAAgLgLg',
      )
    this.shape_36.setTransform(7.325, 0.85)

    this.shape_37 = new cjs.Shape()
    this.shape_37.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgaAaQgLgKAAgQQAAgPALgLQAMgKAOAAQAPAAALAKQAMALAAAPQAAAQgMAKQgLALgPAAQgOAAgMgLg',
      )
    this.shape_37.setTransform(7.325, 0.85)

    this.shape_38 = new cjs.Shape()
    this.shape_38.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgaAbQgMgLAAgPQAAgQAMgMQALgLAPAAQAQAAAMALQALAMAAAQQAAAPgLALQgMAMgQAAQgPAAgLgMg',
      )
    this.shape_38.setTransform(7.3, 0.825)

    this.shape_39 = new cjs.Shape()
    this.shape_39.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgcAcQgLgLgBgQQABgRALgMQAMgLAQAAQAQAAANALQAMAMgBARQABAQgMALQgNAMgQAAQgQAAgMgMg',
      )
    this.shape_39.setTransform(7.3, 0.825)

    this.shape_40 = new cjs.Shape()
    this.shape_40.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgdAdQgMgMAAgRQAAgQAMgNQANgMAQAAQARAAAMAMQANANAAAQQAAARgNAMQgMANgRAAQgQAAgNgNg',
      )
    this.shape_40.setTransform(7.325, 0.85)

    this.shape_41 = new cjs.Shape()
    this.shape_41.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgeAeQgMgMAAgSQAAgRAMgNQANgMARAAQASAAAMAMQANANAAARQAAASgNAMQgMANgSAAQgRAAgNgNg',
      )
    this.shape_41.setTransform(7.325, 0.85)

    this.shape_42 = new cjs.Shape()
    this.shape_42.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgfAfQgNgNAAgSQAAgRANgOQAOgNARAAQASAAANANQAOAOAAARQAAASgOANQgNAOgSAAQgRAAgOgOg',
      )
    this.shape_42.setTransform(7.325, 0.85)

    this.shape_43 = new cjs.Shape()
    this.shape_43.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgcAcQgMgLAAgRQAAgQAMgMQAMgMAQAAQARAAAMAMQAMAMAAAQQAAARgMALQgMAMgRAAQgQAAgMgMg',
      )
    this.shape_43.setTransform(7.325, 0.85)

    this.shape_44 = new cjs.Shape()
    this.shape_44.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgbAbQgMgLAAgQQAAgPAMgMQAMgLAPAAQAQAAAMALQAMAMAAAPQAAAQgMALQgMAMgQAAQgPAAgMgMg',
      )
    this.shape_44.setTransform(7.325, 0.85)

    this.shape_45 = new cjs.Shape()
    this.shape_45.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgaAbQgLgLAAgQQAAgPALgLQALgLAPAAQAQAAALALQALALAAAPQAAAQgLALQgLALgQAAQgPAAgLgLg',
      )
    this.shape_45.setTransform(7.325, 0.85)

    this.shape_46 = new cjs.Shape()
    this.shape_46.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgZAaQgLgLAAgPQAAgOALgLQALgLAOAAQAPAAALALQALALAAAOQAAAPgLALQgLALgPAAQgOAAgLgLg',
      )
    this.shape_46.setTransform(7.3, 0.825)

    this.shape_47 = new cjs.Shape()
    this.shape_47.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgYAZQgLgKAAgPQAAgOALgKQALgLANAAQAOAAALALQALAKAAAOQAAAPgLAKQgLALgOAAQgNAAgLgLg',
      )
    this.shape_47.setTransform(7.3, 0.825)

    this.shape_48 = new cjs.Shape()
    this.shape_48.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgXAYQgLgKABgOQgBgNALgLQAKgJANAAQAOAAAKAJQAKALAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg',
      )
    this.shape_48.setTransform(7.3, 0.825)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape_33}]})
        .to({state: [{t: this.shape_34}]}, 1)
        .to({state: [{t: this.shape_35}]}, 1)
        .to({state: [{t: this.shape_36}]}, 1)
        .to({state: [{t: this.shape_37}]}, 1)
        .to({state: [{t: this.shape_38}]}, 1)
        .to({state: [{t: this.shape_39}]}, 1)
        .to({state: [{t: this.shape_40}]}, 1)
        .to({state: [{t: this.shape_41}]}, 1)
        .to({state: [{t: this.shape_42}]}, 1)
        .to({state: [{t: this.shape_41}]}, 1)
        .to({state: [{t: this.shape_40}]}, 1)
        .to({state: [{t: this.shape_43}]}, 1)
        .to({state: [{t: this.shape_44}]}, 1)
        .to({state: [{t: this.shape_45}]}, 1)
        .to({state: [{t: this.shape_46}]}, 1)
        .to({state: [{t: this.shape_47}]}, 1)
        .to({state: [{t: this.shape_48}]}, 1)
        .to({state: [{t: this.shape_34}]}, 1)
        .to({state: [{t: this.shape_33}]}, 1)
        .wait(1),
    )

    // Calque_2
    this.shape_49 = new cjs.Shape()
    this.shape_49.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgWAWQgJgJAAgNQAAgMAJgKQAKgJAMAAQANAAAKAJQAJAKAAAMQAAANgJAJQgKAKgNAAQgMAAgKgKg',
      )
    this.shape_49.setTransform(29.25, 19.875)

    this.shape_50 = new cjs.Shape()
    this.shape_50.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgVAVQgIgJAAgMQAAgMAIgIQAKgJALAAQANAAAIAJQAJAIAAAMQAAAMgJAJQgIAJgNAAQgLAAgKgJg',
      )
    this.shape_50.setTransform(29.25, 19.85)

    this.shape_51 = new cjs.Shape()
    this.shape_51.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgTAUQgJgIAAgMQAAgLAJgIQAIgIALAAQAMAAAIAIQAJAIAAALQAAAMgJAIQgIAIgMAAQgLAAgIgIg',
      )
    this.shape_51.setTransform(29.25, 19.875)

    this.shape_52 = new cjs.Shape()
    this.shape_52.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgSASQgIgHABgLQgBgKAIgIQAIgHAKgBQALABAIAHQAHAIAAAKQAAALgHAHQgIAJgLgBQgKABgIgJg',
      )
    this.shape_52.setTransform(29.25, 19.85)

    this.shape_53 = new cjs.Shape()
    this.shape_53.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgQARQgIgHAAgKQAAgJAIgIQAHgHAJAAQAKAAAHAHQAIAIAAAJQAAAKgIAHQgHAIgKAAQgJAAgHgIg',
      )
    this.shape_53.setTransform(29.25, 19.875)

    this.shape_54 = new cjs.Shape()
    this.shape_54.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgPAQQgHgHAAgJQAAgIAHgIQAGgGAJAAQAJAAAHAGQAHAIAAAIQAAAJgHAHQgHAHgJAAQgJAAgGgHg',
      )
    this.shape_54.setTransform(29.25, 19.85)

    this.shape_55 = new cjs.Shape()
    this.shape_55.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgOAPQgGgGgBgJQABgIAGgGQAGgGAIAAQAJAAAGAGQAGAGABAIQgBAJgGAGQgGAGgJAAQgIAAgGgGg',
      )
    this.shape_55.setTransform(29.25, 19.875)

    this.shape_56 = new cjs.Shape()
    this.shape_56.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgNAOQgGgGAAgIQAAgHAGgGQAGgFAHAAQAIAAAGAFQAFAGABAHQgBAIgFAGQgGAFgIAAQgHAAgGgFg',
      )
    this.shape_56.setTransform(29.25, 19.85)

    this.shape_57 = new cjs.Shape()
    this.shape_57.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgMAMQgFgFAAgHQAAgGAFgGQAGgFAGAAQAHAAAGAFQAFAGAAAGQAAAHgFAFQgGAGgHAAQgGAAgGgGg',
      )
    this.shape_57.setTransform(29.25, 19.875)

    this.shape_58 = new cjs.Shape()
    this.shape_58.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgLALQgEgFAAgGQAAgGAEgEQAGgFAFAAQAGAAAFAFQAFAEAAAGQAAAGgFAFQgFAFgGAAQgFAAgGgFg',
      )
    this.shape_58.setTransform(29.25, 19.85)

    this.shape_59 = new cjs.Shape()
    this.shape_59.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgMAMQgEgFAAgHQAAgGAEgFQAGgGAGAAQAHAAAFAGQAGAFgBAGQABAHgGAFQgFAFgHABQgGgBgGgFg',
      )
    this.shape_59.setTransform(29.25, 19.85)

    this.shape_60 = new cjs.Shape()
    this.shape_60.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgGgFg',
      )
    this.shape_60.setTransform(29.25, 19.85)

    this.shape_61 = new cjs.Shape()
    this.shape_61.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgOAOQgGgGAAgIQAAgIAGgGQAGgGAIAAQAJAAAFAGQAHAGAAAIQAAAIgHAGQgFAHgJAAQgIAAgGgHg',
      )
    this.shape_61.setTransform(29.25, 19.875)

    this.shape_62 = new cjs.Shape()
    this.shape_62.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgPAPQgGgGgBgJQABgIAGgHQAHgGAIAAQAJAAAGAGQAIAHAAAIQAAAJgIAGQgGAHgJAAQgIAAgHgHg',
      )
    this.shape_62.setTransform(29.25, 19.875)

    this.shape_63 = new cjs.Shape()
    this.shape_63.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgQARQgHgHAAgKQAAgJAHgHQAIgHAIAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgIAAgIgHg',
      )
    this.shape_63.setTransform(29.25, 19.875)

    this.shape_64 = new cjs.Shape()
    this.shape_64.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgRASQgIgHABgLQgBgKAIgHQAIgIAJAAQAKAAAIAIQAIAHgBAKQABALgIAHQgIAHgKABQgJgBgIgHg',
      )
    this.shape_64.setTransform(29.25, 19.85)

    this.shape_65 = new cjs.Shape()
    this.shape_65.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgSATQgIgIAAgLQAAgKAIgIQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgKAAgIgIg',
      )
    this.shape_65.setTransform(29.25, 19.85)

    this.shape_66 = new cjs.Shape()
    this.shape_66.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgUAUQgIgIAAgMQAAgLAIgJQAKgIAKAAQAMAAAIAIQAJAJAAALQAAAMgJAIQgIAJgMAAQgKAAgKgJg',
      )
    this.shape_66.setTransform(29.25, 19.875)

    this.shape_67 = new cjs.Shape()
    this.shape_67.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgVAVQgJgIAAgNQAAgMAJgJQAKgIALAAQAMAAAKAIQAJAJAAAMQAAANgJAIQgKAJgMAAQgLAAgKgJg',
      )
    this.shape_67.setTransform(29.25, 19.875)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape_49}]})
        .to({state: [{t: this.shape_50}]}, 1)
        .to({state: [{t: this.shape_51}]}, 1)
        .to({state: [{t: this.shape_52}]}, 1)
        .to({state: [{t: this.shape_53}]}, 1)
        .to({state: [{t: this.shape_54}]}, 1)
        .to({state: [{t: this.shape_55}]}, 1)
        .to({state: [{t: this.shape_56}]}, 1)
        .to({state: [{t: this.shape_57}]}, 1)
        .to({state: [{t: this.shape_58}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_60}]}, 1)
        .to({state: [{t: this.shape_61}]}, 1)
        .to({state: [{t: this.shape_62}]}, 1)
        .to({state: [{t: this.shape_63}]}, 1)
        .to({state: [{t: this.shape_64}]}, 1)
        .to({state: [{t: this.shape_65}]}, 1)
        .to({state: [{t: this.shape_66}]}, 1)
        .to({state: [{t: this.shape_67}]}, 1)
        .to({state: [{t: this.shape_49}]}, 1)
        .wait(1),
    )

    // Calque_1
    this.shape_68 = new cjs.Shape()
    this.shape_68.graphics
      .f('#FFA902')
      .s()
      .p(
        'AgLBpQgFgFgBgHQABgHAFgEQAEgFAHAAQAFAAAFAFQAGAEgBAHQABAHgGAFQgFAEgFAAQgHAAgEgEgAgyAOQgWgUAAgeQAAgeAWgVQAVgVAdAAQAeAAAVAVQAVAVAAAeQAAAegVAUQgVAWgeAAQgdAAgVgWg',
      )
    this.shape_68.setTransform(17.35, 15.525)

    this.timeline.addTween(cjs.Tween.get(this.shape_68).wait(20))

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-1.7, -3.6, 34.2, 30.1)
  ;(lib.copiecerclesjaune = function(mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])

    // Calque_4
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f('#FE9544')
      .s()
      .p(
        'AgLALQgEgEAAgHQAAgGAEgEQAGgFAFAAQAGAAAGAFQAEAEAAAGQAAAHgEAEQgGAFgGAAQgFAAgGgFg',
      )
    this.shape.setTransform(24.3, 2.75)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f('#FE9544')
      .s()
      .p(
        'AgLAMQgGgEABgIQgBgGAGgFQAFgFAGAAQAHAAAFAFQAGAFgBAGQABAIgGAEQgFAFgHAAQgGAAgFgFg',
      )
    this.shape_1.setTransform(24.3, 2.75)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f('#FE9544')
      .s()
      .p(
        'AgMAMQgFgFAAgHQAAgHAFgEQAGgGAGAAQAHAAAGAGQAFAEAAAHQAAAHgFAFQgGAGgHAAQgGAAgGgGg',
      )
    this.shape_2.setTransform(24.3, 2.75)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f('#FE9544')
      .s()
      .p(
        'AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAEgIAAQgHAAgGgEg',
      )
    this.shape_3.setTransform(24.3, 2.75)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f('#FE9544')
      .s()
      .p(
        'AgNAOQgGgFAAgJQAAgIAGgFQAGgFAHAAQAIAAAGAFQAGAFAAAIQAAAJgGAFQgGAGgIgBQgHABgGgGg',
      )
    this.shape_4.setTransform(24.3, 2.75)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f('#FE9544')
      .s()
      .p(
        'AgOAPQgGgGAAgJQAAgIAGgGQAHgFAHAAQAIAAAGAFQAHAGAAAIQAAAJgHAGQgGAFgIAAQgHAAgHgFg',
      )
    this.shape_5.setTransform(24.325, 2.75)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f('#FE9544')
      .s()
      .p(
        'AgOAPQgGgGgBgJQABgIAGgGQAGgGAIAAQAJAAAGAGQAGAGABAIQgBAJgGAGQgGAGgJAAQgIAAgGgGg',
      )
    this.shape_6.setTransform(24.3, 2.75)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f('#FE9544')
      .s()
      .p(
        'AgPAQQgGgHAAgJQAAgIAGgHQAHgFAIAAQAJAAAGAFQAHAHAAAIQAAAJgHAHQgGAFgJAAQgIAAgHgFg',
      )
    this.shape_7.setTransform(24.325, 2.75)

    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f('#FE9544')
      .s()
      .p(
        'AgPAQQgHgGAAgKQAAgJAHgGQAHgHAIABQAJgBAHAHQAHAGAAAJQAAAKgHAGQgHAHgJAAQgIAAgHgHg',
      )
    this.shape_8.setTransform(24.325, 2.75)

    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics
      .f('#FE9544')
      .s()
      .p(
        'AgQARQgHgHAAgKQAAgKAHgGQAHgHAJAAQAKAAAHAHQAHAGAAAKQAAAKgHAHQgHAHgKAAQgJAAgHgHg',
      )
    this.shape_9.setTransform(24.325, 2.75)

    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics
      .f('#FE9544')
      .s()
      .p(
        'AgRASQgHgIAAgKQAAgJAHgIQAIgGAJAAQAKAAAHAGQAIAIAAAJQAAAKgIAIQgHAGgKAAQgJAAgIgGg',
      )
    this.shape_10.setTransform(24.325, 2.75)

    this.shape_11 = new cjs.Shape()
    this.shape_11.graphics
      .f('#FE9544')
      .s()
      .p(
        'AgQASQgIgIAAgKQAAgJAIgIQAHgGAJgBQAKABAHAGQAIAIAAAJQAAAKgIAIQgHAHgKAAQgJAAgHgHg',
      )
    this.shape_11.setTransform(24.3, 2.75)

    this.shape_12 = new cjs.Shape()
    this.shape_12.graphics
      .f('#FE9544')
      .s()
      .p(
        'AgQAQQgGgGAAgKQAAgJAGgHQAIgGAIAAQAJAAAHAGQAHAHAAAJQAAAKgHAGQgHAHgJAAQgIAAgIgHg',
      )
    this.shape_12.setTransform(24.325, 2.775)

    this.shape_13 = new cjs.Shape()
    this.shape_13.graphics
      .f('#FE9544')
      .s()
      .p(
        'AgPAQQgHgHAAgJQAAgJAHgGQAHgGAIAAQAJAAAHAGQAHAGAAAJQAAAJgHAHQgHAGgJAAQgIAAgHgGg',
      )
    this.shape_13.setTransform(24.325, 2.75)

    this.shape_14 = new cjs.Shape()
    this.shape_14.graphics
      .f('#FE9544')
      .s()
      .p(
        'AgOAPQgGgGAAgJQAAgIAGgGQAHgFAHAAQAIAAAHAFQAGAGAAAIQAAAJgGAGQgHAGgIgBQgHABgHgGg',
      )
    this.shape_14.setTransform(24.325, 2.75)

    this.shape_15 = new cjs.Shape()
    this.shape_15.graphics
      .f('#FE9544')
      .s()
      .p(
        'AgNAOQgGgFgBgJQABgIAGgFQAGgGAHAAQAIAAAGAGQAGAFABAIQgBAJgGAFQgGAGgIAAQgHAAgGgGg',
      )
    this.shape_15.setTransform(24.3, 2.75)

    this.shape_16 = new cjs.Shape()
    this.shape_16.graphics
      .f('#FE9544')
      .s()
      .p(
        'AgNAOQgFgGgBgIQABgIAFgEQAGgGAHAAQAIAAAFAGQAGAEABAIQgBAIgGAGQgFAFgIAAQgHAAgGgFg',
      )
    this.shape_16.setTransform(24.3, 2.75)

    this.shape_17 = new cjs.Shape()
    this.shape_17.graphics
      .f('#FE9544')
      .s()
      .p(
        'AgMANQgGgFAAgIQAAgHAGgFQAFgFAHAAQAHAAAGAFQAGAFAAAHQAAAIgGAFQgGAFgHAAQgHAAgFgFg',
      )
    this.shape_17.setTransform(24.325, 2.775)

    this.shape_18 = new cjs.Shape()
    this.shape_18.graphics
      .f('#FE9544')
      .s()
      .p(
        'AgLAMQgFgEAAgIQAAgGAFgFQAFgEAGgBQAHABAFAEQAFAFAAAGQAAAIgFAEQgFAEgHABQgGgBgFgEg',
      )
    this.shape_18.setTransform(24.325, 2.75)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [{t: this.shape, p: {scaleX: 1, scaleY: 1, x: 24.3, y: 2.75}}],
        })
        .to({state: [{t: this.shape_1}]}, 1)
        .to({state: [{t: this.shape_2}]}, 1)
        .to({state: [{t: this.shape_3}]}, 1)
        .to({state: [{t: this.shape_4}]}, 1)
        .to({state: [{t: this.shape_5}]}, 1)
        .to({state: [{t: this.shape_6}]}, 1)
        .to({state: [{t: this.shape_7}]}, 1)
        .to({state: [{t: this.shape_8}]}, 1)
        .to({state: [{t: this.shape_9}]}, 1)
        .to({state: [{t: this.shape_10}]}, 1)
        .to(
          {
            state: [
              {
                t: this.shape,
                p: {scaleX: 1.5625, scaleY: 1.5625, x: 24.3188, y: 2.7469},
              },
            ],
          },
          1,
        )
        .to({state: [{t: this.shape_11}]}, 1)
        .to({state: [{t: this.shape_9}]}, 1)
        .to({state: [{t: this.shape_12}]}, 1)
        .to({state: [{t: this.shape_13}]}, 1)
        .to({state: [{t: this.shape_7}]}, 1)
        .to({state: [{t: this.shape_14}]}, 1)
        .to({state: [{t: this.shape_15}]}, 1)
        .to({state: [{t: this.shape_16}]}, 1)
        .to({state: [{t: this.shape_17}]}, 1)
        .to({state: [{t: this.shape_2}]}, 1)
        .to({state: [{t: this.shape_18}]}, 1)
        .to(
          {
            state: [
              {t: this.shape, p: {scaleX: 1, scaleY: 1, x: 24.3, y: 2.75}},
            ],
          },
          1,
        )
        .wait(1),
    )

    // Calque_3
    this.shape_19 = new cjs.Shape()
    this.shape_19.graphics
      .f('#FE9544')
      .s()
      .p(
        'AgPAQQgHgHAAgJQAAgJAHgGQAHgGAIAAQAJAAAHAGQAHAGAAAJQAAAJgHAHQgHAGgJAAQgIAAgHgGg',
      )
    this.shape_19.setTransform(4.125, 10.85)

    this.shape_20 = new cjs.Shape()
    this.shape_20.graphics
      .f('#FE9544')
      .s()
      .p(
        'AgOAPQgHgGAAgJQAAgIAHgHQAHgFAHAAQAIAAAHAFQAHAHAAAIQAAAJgHAGQgHAGgIAAQgHAAgHgGg',
      )
    this.shape_20.setTransform(4.125, 10.85)

    this.shape_21 = new cjs.Shape()
    this.shape_21.graphics
      .f('#FE9544')
      .s()
      .p(
        'AgNAOQgHgFAAgJQAAgHAHgHQAGgFAHAAQAIAAAGAFQAHAHAAAHQAAAJgHAFQgGAGgIAAQgHAAgGgGg',
      )
    this.shape_21.setTransform(4.125, 10.85)

    this.shape_22 = new cjs.Shape()
    this.shape_22.graphics
      .f('#FE9544')
      .s()
      .p(
        'AgNAOQgGgGAAgIQAAgIAGgFQAGgFAHAAQAIAAAGAFQAGAFAAAIQAAAIgGAGQgGAFgIAAQgHAAgGgFg',
      )
    this.shape_22.setTransform(4.125, 10.85)

    this.shape_23 = new cjs.Shape()
    this.shape_23.graphics
      .f('#FE9544')
      .s()
      .p(
        'AgMAMQgGgFAAgHQAAgHAGgFQAGgFAGAAQAHAAAGAFQAGAFAAAHQAAAHgGAFQgGAGgHAAQgGAAgGgGg',
      )
    this.shape_23.setTransform(4.125, 10.85)

    this.shape_24 = new cjs.Shape()
    this.shape_24.graphics
      .f('#FE9544')
      .s()
      .p(
        'AgLAMQgGgFAAgHQAAgHAGgEQAFgFAGAAQAHAAAFAFQAGAEAAAHQAAAHgGAFQgFAFgHAAQgGAAgFgFg',
      )
    this.shape_24.setTransform(4.125, 10.85)

    this.shape_25 = new cjs.Shape()
    this.shape_25.graphics
      .f('#FE9544')
      .s()
      .p(
        'AgKALQgFgEAAgHQAAgGAFgEQAFgFAFAAQAGAAAFAFQAFAEAAAGQAAAHgFAEQgFAFgGAAQgFAAgFgFg',
      )
    this.shape_25.setTransform(4.125, 10.85)

    this.shape_26 = new cjs.Shape()
    this.shape_26.graphics
      .f('#FE9544')
      .s()
      .p(
        'AgKAKQgEgEAAgGQAAgFAEgFQAFgEAFAAQAGAAAFAEQAEAFAAAFQAAAGgEAEQgFAFgGAAQgFAAgFgFg',
      )
    this.shape_26.setTransform(4.125, 10.85)

    this.shape_27 = new cjs.Shape()
    this.shape_27.graphics
      .f('#FE9544')
      .s()
      .p(
        'AgJAJQgEgDAAgGQAAgFAEgEQAFgEAEAAQAFAAAFAEQAEAEAAAFQAAAGgEADQgFAFgFAAQgEAAgFgFg',
      )
    this.shape_27.setTransform(4.125, 10.85)

    this.shape_28 = new cjs.Shape()
    this.shape_28.graphics
      .f('#FE9544')
      .s()
      .p(
        'AgIAJQgEgEAAgFQAAgFAEgEQAEgDAEAAQAFAAAEADQAEAEAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg',
      )
    this.shape_28.setTransform(4.125, 10.85)

    this.shape_29 = new cjs.Shape()
    this.shape_29.graphics
      .f('#FE9544')
      .s()
      .p(
        'AgHAIQgEgDAAgFQAAgFAEgDQADgDAEAAQAFAAADADQAEADAAAFQAAAFgEADQgDAEgFAAQgEAAgDgEg',
      )
    this.shape_29.setTransform(4.125, 10.85)

    this.shape_30 = new cjs.Shape()
    this.shape_30.graphics
      .f('#FE9544')
      .s()
      .p(
        'AgHAIQgDgDAAgFQAAgEADgDQAEgDADAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgDAAgEgDg',
      )
    this.shape_30.setTransform(4.125, 10.85)

    this.shape_31 = new cjs.Shape()
    this.shape_31.graphics
      .f('#FE9544')
      .s()
      .p(
        'AgJAKQgFgEAAgGQAAgGAFgDQAEgEAFgBQAGABAEAEQAFADAAAGQAAAGgFAEQgEAFgGAAQgFAAgEgFg',
      )
    this.shape_31.setTransform(4.125, 10.85)

    this.shape_32 = new cjs.Shape()
    this.shape_32.graphics
      .f('#FE9544')
      .s()
      .p(
        'AgKALQgFgFAAgGQAAgGAFgEQAFgFAFAAQAGAAAFAFQAFAEAAAGQAAAGgFAFQgFAEgGABQgFgBgFgEg',
      )
    this.shape_32.setTransform(4.125, 10.85)

    this.shape_33 = new cjs.Shape()
    this.shape_33.graphics
      .f('#FE9544')
      .s()
      .p(
        'AgLALQgFgEAAgHQAAgGAFgFQAGgEAFgBQAHABAFAEQAFAFAAAGQAAAHgFAEQgFAGgHAAQgFAAgGgGg',
      )
    this.shape_33.setTransform(4.15, 10.85)

    this.shape_34 = new cjs.Shape()
    this.shape_34.graphics
      .f('#FE9544')
      .s()
      .p(
        'AgLAMQgGgEAAgIQAAgHAGgEQAFgGAGAAQAHAAAFAGQAGAEAAAHQAAAIgGAEQgFAFgHAAQgGAAgFgFg',
      )
    this.shape_34.setTransform(4.125, 10.85)

    this.shape_35 = new cjs.Shape()
    this.shape_35.graphics
      .f('#FE9544')
      .s()
      .p(
        'AgMANQgGgFAAgIQAAgHAGgFQAGgGAGABQAHgBAGAGQAGAFAAAHQAAAIgGAFQgGAFgHAAQgGAAgGgFg',
      )
    this.shape_35.setTransform(4.125, 10.85)

    this.shape_36 = new cjs.Shape()
    this.shape_36.graphics
      .f('#FE9544')
      .s()
      .p(
        'AgNANQgGgFAAgIQAAgIAGgFQAGgFAHAAQAIAAAGAFQAGAFAAAIQAAAIgGAFQgGAGgIAAQgHAAgGgGg',
      )
    this.shape_36.setTransform(4.125, 10.875)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape_19}]})
        .to({state: [{t: this.shape_20}]}, 1)
        .to({state: [{t: this.shape_21}]}, 1)
        .to({state: [{t: this.shape_22}]}, 1)
        .to({state: [{t: this.shape_23}]}, 1)
        .to({state: [{t: this.shape_24}]}, 1)
        .to({state: [{t: this.shape_25}]}, 1)
        .to({state: [{t: this.shape_26}]}, 1)
        .to({state: [{t: this.shape_27, p: {y: 10.85}}]}, 1)
        .to({state: [{t: this.shape_28}]}, 1)
        .to({state: [{t: this.shape_29}]}, 1)
        .to({state: [{t: this.shape_30}]}, 1)
        .to({state: [{t: this.shape_29}]}, 1)
        .to({state: [{t: this.shape_28}]}, 1)
        .to({state: [{t: this.shape_27, p: {y: 10.875}}]}, 1)
        .to({state: [{t: this.shape_31}]}, 1)
        .to({state: [{t: this.shape_32}]}, 1)
        .to({state: [{t: this.shape_33}]}, 1)
        .to({state: [{t: this.shape_34}]}, 1)
        .to({state: [{t: this.shape_35}]}, 1)
        .to({state: [{t: this.shape_36}]}, 1)
        .to({state: [{t: this.shape_21}]}, 1)
        .to({state: [{t: this.shape_20}]}, 1)
        .to({state: [{t: this.shape_19}]}, 1)
        .wait(1),
    )

    // Calque_2
    this.shape_37 = new cjs.Shape()
    this.shape_37.graphics
      .f('#FE9544')
      .s()
      .p(
        'AgWAWQgJgJAAgNQAAgMAJgKQAKgJAMAAQANAAAJAJQAKAKAAAMQAAANgKAJQgJAKgNAAQgMAAgKgKg',
      )
    this.shape_37.setTransform(17.2, 25.725)

    this.shape_38 = new cjs.Shape()
    this.shape_38.graphics
      .f('#FE9544')
      .s()
      .p(
        'AgWAXQgKgJAAgOQAAgNAKgJQAJgKANAAQANAAAKAKQAKAJAAANQAAAOgKAJQgKAKgNAAQgNAAgJgKg',
      )
    this.shape_38.setTransform(17.2, 25.725)

    this.shape_39 = new cjs.Shape()
    this.shape_39.graphics
      .f('#FE9544')
      .s()
      .p(
        'AgXAXQgKgJAAgOQAAgNAKgKQAKgJANAAQAOAAAKAJQAKAKAAANQAAAOgKAJQgKAKgOAAQgNAAgKgKg',
      )
    this.shape_39.setTransform(17.225, 25.75)

    this.shape_40 = new cjs.Shape()
    this.shape_40.graphics
      .f('#FE9544')
      .s()
      .p(
        'AgYAYQgKgJAAgOQAAgOAKgLQALgJANAAQAOAAALAJQAKALAAAOQAAAOgKAJQgLAKgOAAQgNAAgLgKg',
      )
    this.shape_40.setTransform(17.225, 25.75)

    this.shape_41 = new cjs.Shape()
    this.shape_41.graphics
      .f('#FE9544')
      .s()
      .p(
        'AgYAZQgLgKAAgOQAAgOALgLQAKgKAOAAQAPAAAKAKQALALAAAOQAAAOgLAKQgKALgPAAQgOAAgKgLg',
      )
    this.shape_41.setTransform(17.225, 25.75)

    this.shape_42 = new cjs.Shape()
    this.shape_42.graphics
      .f('#FE9544')
      .s()
      .p(
        'AgZAaQgLgLAAgOQAAgPALgLQALgLAOABQAPgBALALQALALAAAPQAAAOgLALQgLALgPAAQgOAAgLgLg',
      )
    this.shape_42.setTransform(17.225, 25.75)

    this.shape_43 = new cjs.Shape()
    this.shape_43.graphics
      .f('#FE9544')
      .s()
      .p(
        'AgaAaQgLgKAAgQQAAgOALgMQALgLAPAAQAPAAALALQAMAMAAAOQAAAQgMAKQgLALgPAAQgPAAgLgLg',
      )
    this.shape_43.setTransform(17.275, 25.8)

    this.shape_44 = new cjs.Shape()
    this.shape_44.graphics
      .f('#FE9544')
      .s()
      .p(
        'AgaAbQgMgLAAgQQAAgPAMgMQALgLAPABQAPgBAMALQAMAMAAAPQAAAQgMALQgMAMgPgBQgPABgLgMg',
      )
    this.shape_44.setTransform(17.275, 25.8)

    this.shape_45 = new cjs.Shape()
    this.shape_45.graphics
      .f('#FE9544')
      .s()
      .p(
        'AgbAbQgMgLAAgQQAAgPAMgMQAMgLAPAAQAQAAAMALQAMAMAAAPQAAAQgMALQgMANgQAAQgPAAgMgNg',
      )
    this.shape_45.setTransform(17.275, 25.8)

    this.shape_46 = new cjs.Shape()
    this.shape_46.graphics
      .f('#FE9544')
      .s()
      .p(
        'AgcAcQgMgLAAgRQAAgQAMgMQAMgLAQAAQAQAAANALQAMAMAAAQQAAARgMALQgNANgQAAQgQAAgMgNg',
      )
    this.shape_46.setTransform(17.275, 25.8)

    this.shape_47 = new cjs.Shape()
    this.shape_47.graphics
      .f('#FE9544')
      .s()
      .p(
        'AgdAdQgLgMgBgRQABgQALgNQANgLAQAAQARAAAMALQAMANAAAQQAAARgMAMQgMAMgRAAQgQAAgNgMg',
      )
    this.shape_47.setTransform(17.3, 25.825)

    this.shape_48 = new cjs.Shape()
    this.shape_48.graphics
      .f('#FE9544')
      .s()
      .p(
        'AgdAeQgNgMABgSQgBgQANgNQANgMAQAAQARAAANAMQAMANAAAQQAAASgMAMQgNAMgRAAQgQAAgNgMg',
      )
    this.shape_48.setTransform(17.3, 25.825)

    this.shape_49 = new cjs.Shape()
    this.shape_49.graphics
      .f('#FE9544')
      .s()
      .p(
        'AgdAdQgLgMgBgRQABgQALgNQANgLAQAAQAQAAANALQAMANAAAQQAAARgMAMQgNAMgQAAQgQAAgNgMg',
      )
    this.shape_49.setTransform(17.3, 25.825)

    this.shape_50 = new cjs.Shape()
    this.shape_50.graphics
      .f('#FE9544')
      .s()
      .p(
        'AgbAcQgMgMAAgQQAAgPAMgNQAMgLAPABQAQgBAMALQAMANAAAPQAAAQgMAMQgMAMgQAAQgPAAgMgMg',
      )
    this.shape_50.setTransform(17.275, 25.8)

    this.shape_51 = new cjs.Shape()
    this.shape_51.graphics
      .f('#FE9544')
      .s()
      .p(
        'AgbAbQgLgLAAgQQAAgPALgMQAMgLAPAAQAQAAALALQAMAMAAAPQAAAQgMALQgLAMgQAAQgPAAgMgMg',
      )
    this.shape_51.setTransform(17.25, 25.775)

    this.shape_52 = new cjs.Shape()
    this.shape_52.graphics
      .f('#FE9544')
      .s()
      .p(
        'AgaAbQgLgLAAgQQAAgOALgMQAMgLAOAAQAQAAALALQALAMAAAOQAAAQgLALQgLALgQAAQgOAAgMgLg',
      )
    this.shape_52.setTransform(17.25, 25.775)

    this.shape_53 = new cjs.Shape()
    this.shape_53.graphics
      .f('#FE9544')
      .s()
      .p(
        'AgZAaQgLgKAAgQQAAgOALgMQALgKAOAAQAPAAALAKQALAMAAAOQAAAQgLAKQgLALgPAAQgOAAgLgLg',
      )
    this.shape_53.setTransform(17.275, 25.8)

    this.shape_54 = new cjs.Shape()
    this.shape_54.graphics
      .f('#FE9544')
      .s()
      .p(
        'AgZAZQgKgKgBgPQABgOAKgLQALgKAOAAQAOAAALAKQAMALgBAOQABAPgMAKQgLALgOAAQgOAAgLgLg',
      )
    this.shape_54.setTransform(17.25, 25.775)

    this.shape_55 = new cjs.Shape()
    this.shape_55.graphics
      .f('#FE9544')
      .s()
      .p(
        'AgYAZQgLgKAAgPQAAgOALgKQALgKANAAQAOAAALAKQAKAKAAAOQAAAPgKAKQgLAKgOAAQgNAAgLgKg',
      )
    this.shape_55.setTransform(17.25, 25.775)

    this.shape_56 = new cjs.Shape()
    this.shape_56.graphics
      .f('#FE9544')
      .s()
      .p(
        'AgXAYQgLgJAAgOQAAgOALgKQAKgLANABQAOgBAKALQALAKAAAOQAAAOgLAJQgKALgOgBQgNABgKgLg',
      )
    this.shape_56.setTransform(17.225, 25.75)

    this.shape_57 = new cjs.Shape()
    this.shape_57.graphics
      .f('#FE9544')
      .s()
      .p(
        'AgWAXQgKgJAAgOQAAgMAKgKQAJgKANAAQANAAAKAKQAKAKAAAMQAAAOgKAJQgKAKgNAAQgNAAgJgKg',
      )
    this.shape_57.setTransform(17.2, 25.725)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape_37}]})
        .to({state: [{t: this.shape_38}]}, 1)
        .to({state: [{t: this.shape_39}]}, 1)
        .to({state: [{t: this.shape_40}]}, 1)
        .to({state: [{t: this.shape_41}]}, 1)
        .to({state: [{t: this.shape_42}]}, 1)
        .to({state: [{t: this.shape_43}]}, 1)
        .to({state: [{t: this.shape_44}]}, 1)
        .to({state: [{t: this.shape_45}]}, 1)
        .to({state: [{t: this.shape_46}]}, 1)
        .to({state: [{t: this.shape_47}]}, 1)
        .to({state: [{t: this.shape_48}]}, 1)
        .to({state: [{t: this.shape_49}]}, 1)
        .to({state: [{t: this.shape_46}]}, 1)
        .to({state: [{t: this.shape_50}]}, 1)
        .to({state: [{t: this.shape_51}]}, 1)
        .to({state: [{t: this.shape_52}]}, 1)
        .to({state: [{t: this.shape_53}]}, 1)
        .to({state: [{t: this.shape_54}]}, 1)
        .to({state: [{t: this.shape_55}]}, 1)
        .to({state: [{t: this.shape_56}]}, 1)
        .to({state: [{t: this.shape_39}]}, 1)
        .to({state: [{t: this.shape_57}]}, 1)
        .to({state: [{t: this.shape_37}]}, 1)
        .wait(1),
    )

    // Calque_1
    this.shape_58 = new cjs.Shape()
    this.shape_58.graphics
      .f('#FE9544')
      .s()
      .p(
        'AhaBhQgFgFAAgHQAAgHAFgEQAFgFAHAAQAGAAAFAFQAFAEAAAHQAAAHgFAFQgFAEgGAAQgHAAgFgEgAgbA5QgVgVAAgeQAAgdAVgWQAVgVAdAAQAeAAAVAVQAWAWAAAdQAAAegWAVQgVAVgeAAQgdAAgVgVgAgvhJQgFgEAAgHQAAgHAFgFQAFgEAGAAQAHAAAFAEQAFAFAAAHQAAAHgFAEQgFAFgHAAQgGAAgFgFg',
      )
    this.shape_58.setTransform(15.025, 11.275)

    this.timeline.addTween(cjs.Tween.get(this.shape_58).wait(24))

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(1.9, 0.3, 25, 29.8)
  ;(lib.copiecerclesazur = function(mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])

    // Calque_5
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgPAPQgHgFAAgKQAAgIAHgHQAHgGAIAAQAJAAAHAGQAHAHAAAIQAAAKgHAFQgHAHgJAAQgIAAgHgHg',
      )
    this.shape.setTransform(5.825, 6.5)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgOAOQgGgFAAgJQAAgIAGgGQAHgGAHAAQAIAAAHAGQAGAGAAAIQAAAJgGAFQgHAHgIAAQgHAAgHgHg',
      )
    this.shape_1.setTransform(5.825, 6.5)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHABQAIgBAGAGQAGAGAAAHQAAAIgGAGQgGAFgIABQgHgBgGgFg',
      )
    this.shape_2.setTransform(5.825, 6.5)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgMANQgGgFAAgIQAAgHAGgGQAGgEAGAAQAHAAAGAEQAGAGAAAHQAAAIgGAFQgGAFgHABQgGgBgGgFg',
      )
    this.shape_3.setTransform(5.825, 6.5)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgLAMQgGgFAAgHQAAgGAGgGQAFgEAGAAQAHAAAFAEQAGAGAAAGQAAAHgGAFQgFAFgHAAQgGAAgFgFg',
      )
    this.shape_4.setTransform(5.825, 6.5)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgKAMQgFgFAAgHQAAgFAFgGQAFgEAFAAQAGAAAFAEQAFAGAAAFQAAAHgFAFQgFAEgGAAQgFAAgFgEg',
      )
    this.shape_5.setTransform(5.825, 6.5)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgJALQgFgEAAgHQAAgFAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAFQAAAHgFAEQgEADgGAAQgFAAgEgDg',
      )
    this.shape_6.setTransform(5.825, 6.5)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgJAKQgEgEAAgGQAAgFAEgEQAFgDAEgBQAFABAFADQAEAEAAAFQAAAGgEAEQgFADgFAAQgEAAgFgDg',
      )
    this.shape_7.setTransform(5.825, 6.5)

    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgIAJQgEgDAAgGQAAgEAEgEQAEgDAEAAQAFAAAEADQAEAEAAAEQAAAGgEADQgEADgFAAQgEAAgEgDg',
      )
    this.shape_8.setTransform(5.825, 6.5)

    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgIAJQgDgDAAgGQAAgEADgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAGgDADQgEADgFAAQgEAAgEgDg',
      )
    this.shape_9.setTransform(5.825, 6.5)

    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgIAKQgFgEAAgGQAAgEAFgEQAEgEAEAAQAFAAAEAEQAFAEAAAEQAAAGgFAEQgEADgFAAQgEAAgEgDg',
      )
    this.shape_10.setTransform(5.825, 6.5)

    this.shape_11 = new cjs.Shape()
    this.shape_11.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgKALQgFgEAAgHQAAgGAFgEQAFgEAFgBQAGABAFAEQAFAEAAAGQAAAHgFAEQgFAFgGgBQgFABgFgFg',
      )
    this.shape_11.setTransform(5.825, 6.5)

    this.shape_12 = new cjs.Shape()
    this.shape_12.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgLAMQgFgFAAgHQAAgGAFgFQAGgEAFAAQAGAAAGAEQAFAFAAAGQAAAHgFAFQgGAFgGAAQgFAAgGgFg',
      )
    this.shape_12.setTransform(5.85, 6.5)

    this.shape_13 = new cjs.Shape()
    this.shape_13.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgMAMQgFgEAAgIQAAgGAFgGQAGgFAGABQAHgBAGAFQAFAGAAAGQAAAIgFAEQgGAFgHABQgGgBgGgFg',
      )
    this.shape_13.setTransform(5.825, 6.5)

    this.shape_14 = new cjs.Shape()
    this.shape_14.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgNAOQgGgGAAgIQAAgHAGgHQAGgFAHAAQAIAAAGAFQAGAHAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg',
      )
    this.shape_14.setTransform(5.825, 6.5)

    this.shape_15 = new cjs.Shape()
    this.shape_15.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgOAOQgHgFAAgJQAAgIAHgGQAHgGAHAAQAIAAAHAGQAHAGAAAIQAAAJgHAFQgHAHgIAAQgHAAgHgHg',
      )
    this.shape_15.setTransform(5.825, 6.5)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape, p: {scaleX: 1, scaleY: 1, x: 5.825}}]})
        .to({state: [{t: this.shape_1}]}, 1)
        .to({state: [{t: this.shape_2}]}, 1)
        .to({state: [{t: this.shape_3}]}, 1)
        .to({state: [{t: this.shape_4}]}, 1)
        .to({state: [{t: this.shape_5}]}, 1)
        .to({state: [{t: this.shape_6}]}, 1)
        .to({state: [{t: this.shape_7}]}, 1)
        .to({state: [{t: this.shape_8}]}, 1)
        .to(
          {state: [{t: this.shape, p: {scaleX: 0.5, scaleY: 0.5, x: 5.8125}}]},
          1,
        )
        .to({state: [{t: this.shape_9}]}, 1)
        .to({state: [{t: this.shape_10}]}, 1)
        .to({state: [{t: this.shape_6}]}, 1)
        .to({state: [{t: this.shape_11}]}, 1)
        .to({state: [{t: this.shape_12}]}, 1)
        .to({state: [{t: this.shape_13}]}, 1)
        .to({state: [{t: this.shape_3}]}, 1)
        .to({state: [{t: this.shape_14}]}, 1)
        .to({state: [{t: this.shape_15}]}, 1)
        .to({state: [{t: this.shape, p: {scaleX: 1, scaleY: 1, x: 5.825}}]}, 1)
        .wait(1),
    )

    // Calque_4
    this.shape_16 = new cjs.Shape()
    this.shape_16.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgPAPQgHgFAAgKQAAgJAHgGQAHgGAIAAQAJAAAHAGQAHAGAAAJQAAAKgHAFQgHAHgJAAQgIAAgHgHg',
      )
    this.shape_16.setTransform(-3.125, 24.85)

    this.shape_17 = new cjs.Shape()
    this.shape_17.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgQAQQgGgGgBgKQABgJAGgGQAIgHAIAAQAJAAAHAHQAIAGAAAJQAAAKgIAGQgHAGgJAAQgIAAgIgGg',
      )
    this.shape_17.setTransform(-3.1, 24.85)

    this.shape_18 = new cjs.Shape()
    this.shape_18.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgQAQQgHgGAAgKQAAgJAHgHQAIgGAIgBQAJABAIAGQAHAHAAAJQAAAKgHAGQgIAIgJgBQgIABgIgIg',
      )
    this.shape_18.setTransform(-3.125, 24.85)

    this.shape_19 = new cjs.Shape()
    this.shape_19.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgRARQgHgGAAgLQAAgKAHgGQAIgHAJAAQAJAAAIAHQAIAGAAAKQAAALgIAGQgIAHgJAAQgJAAgIgHg',
      )
    this.shape_19.setTransform(-3.1, 24.85)

    this.shape_20 = new cjs.Shape()
    this.shape_20.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgRASQgIgHAAgLQAAgKAIgHQAIgHAJAAQAKAAAIAHQAIAHAAAKQAAALgIAHQgIAHgKAAQgJAAgIgHg',
      )
    this.shape_20.setTransform(-3.125, 24.85)

    this.shape_21 = new cjs.Shape()
    this.shape_21.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgSASQgIgHAAgLQAAgKAIgIQAJgGAJAAQAKAAAIAGQAJAIgBAKQABALgJAHQgIAIgKgBQgJABgJgIg',
      )
    this.shape_21.setTransform(-3.1, 24.85)

    this.shape_22 = new cjs.Shape()
    this.shape_22.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgSATQgIgIAAgLQAAgLAIgIQAJgGAJAAQALAAAIAGQAIAIAAALQAAALgIAIQgIAHgLABQgJgBgJgHg',
      )
    this.shape_22.setTransform(-3.125, 24.85)

    this.shape_23 = new cjs.Shape()
    this.shape_23.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgSATQgJgHAAgMQAAgLAJgIQAIgHAKAAQALAAAIAHQAJAIAAALQAAAMgJAHQgIAIgLAAQgKAAgIgIg',
      )
    this.shape_23.setTransform(-3.1, 24.85)

    this.shape_24 = new cjs.Shape()
    this.shape_24.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgTAUQgJgIAAgMQAAgLAJgJQAJgHAKAAQALAAAJAHQAJAJAAALQAAAMgJAIQgJAIgLAAQgKAAgJgIg',
      )
    this.shape_24.setTransform(-3.125, 24.85)

    this.shape_25 = new cjs.Shape()
    this.shape_25.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgTAUQgKgHABgNQgBgMAKgIQAIgIALAAQALAAAJAIQAJAIAAAMQAAANgJAHQgJAJgLAAQgLAAgIgJg',
      )
    this.shape_25.setTransform(-3.1, 24.85)

    this.shape_26 = new cjs.Shape()
    this.shape_26.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgSATQgIgIgBgLQABgLAIgIQAJgGAJAAQAKAAAJAGQAIAIAAALQAAALgIAIQgJAHgKABQgJgBgJgHg',
      )
    this.shape_26.setTransform(-3.1, 24.85)

    this.shape_27 = new cjs.Shape()
    this.shape_27.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgRASQgJgGAAgMQAAgKAJgIQAIgHAJAAQALAAAIAHQAIAIAAAKQAAAMgIAGQgIAIgLAAQgJAAgIgIg',
      )
    this.shape_27.setTransform(-3.125, 24.85)

    this.shape_28 = new cjs.Shape()
    this.shape_28.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgRASQgIgHAAgLQAAgKAIgIQAIgGAJAAQAKAAAIAGQAIAIAAAKQAAALgIAHQgIAHgKAAQgJAAgIgHg',
      )
    this.shape_28.setTransform(-3.1, 24.875)

    this.shape_29 = new cjs.Shape()
    this.shape_29.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgRASQgIgIAAgKQAAgJAIgIQAIgGAJAAQAJAAAIAGQAJAIAAAJQAAAKgJAIQgIAGgJAAQgJAAgIgGg',
      )
    this.shape_29.setTransform(-3.1, 24.85)

    this.shape_30 = new cjs.Shape()
    this.shape_30.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgQARQgIgGAAgLQAAgKAIgGQAHgHAJAAQAKAAAHAHQAIAGAAAKQAAALgIAGQgHAHgKAAQgJAAgHgHg',
      )
    this.shape_30.setTransform(-3.125, 24.85)

    this.shape_31 = new cjs.Shape()
    this.shape_31.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgPAQQgHgGAAgKQAAgJAHgGQAHgHAIAAQAJAAAHAHQAHAGAAAJQAAAKgHAGQgHAGgJAAQgIAAgHgGg',
      )
    this.shape_31.setTransform(-3.125, 24.85)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape_16}]})
        .to({state: [{t: this.shape_17}]}, 1)
        .to({state: [{t: this.shape_18}]}, 1)
        .to({state: [{t: this.shape_19}]}, 1)
        .to({state: [{t: this.shape_20}]}, 1)
        .to({state: [{t: this.shape_21}]}, 1)
        .to({state: [{t: this.shape_22}]}, 1)
        .to({state: [{t: this.shape_23}]}, 1)
        .to({state: [{t: this.shape_24, p: {x: -3.125}}]}, 1)
        .to({state: [{t: this.shape_25}]}, 1)
        .to({state: [{t: this.shape_24, p: {x: -3.1}}]}, 1)
        .to({state: [{t: this.shape_23}]}, 1)
        .to({state: [{t: this.shape_26}]}, 1)
        .to({state: [{t: this.shape_27}]}, 1)
        .to({state: [{t: this.shape_28}]}, 1)
        .to({state: [{t: this.shape_29}]}, 1)
        .to({state: [{t: this.shape_30}]}, 1)
        .to({state: [{t: this.shape_18}]}, 1)
        .to({state: [{t: this.shape_31}]}, 1)
        .to({state: [{t: this.shape_16}]}, 1)
        .wait(1),
    )

    // Calque_3
    this.shape_32 = new cjs.Shape()
    this.shape_32.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgLALQgEgEAAgHQAAgGAEgEQAGgFAFAAQAHAAAFAFQAEAEAAAGQAAAHgEAEQgFAFgHAAQgFAAgGgFg',
      )
    this.shape_32.setTransform(5.95, 16.35)

    this.shape_33 = new cjs.Shape()
    this.shape_33.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgKALQgEgEAAgHQAAgFAEgFQAFgEAFAAQAGAAAFAEQAFAFgBAFQABAHgFAEQgFAEgGAAQgFAAgFgEg',
      )
    this.shape_33.setTransform(5.95, 16.35)

    this.shape_34 = new cjs.Shape()
    this.shape_34.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgKAKQgEgEAAgGQAAgFAEgEQAFgEAFAAQAGAAAEAEQAFAEgBAFQABAGgFAEQgEAEgGAAQgFAAgFgEg',
      )
    this.shape_34.setTransform(5.95, 16.35)

    this.shape_35 = new cjs.Shape()
    this.shape_35.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgIAJQgFgDAAgGQAAgFAFgEQAEgDAEAAQAGAAAEADQAEAEAAAFQAAAGgEADQgEAFgGAAQgEAAgEgFg',
      )
    this.shape_35.setTransform(5.925, 16.35)

    this.shape_36 = new cjs.Shape()
    this.shape_36.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEABQAFgBAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg',
      )
    this.shape_36.setTransform(5.925, 16.35)

    this.shape_37 = new cjs.Shape()
    this.shape_37.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgHAIQgEgDAAgFQAAgEAEgEQADgCAEAAQAEAAAEACQAEAEAAAEQAAAFgEADQgEADgEAAQgEAAgDgDg',
      )
    this.shape_37.setTransform(5.95, 16.35)

    this.shape_38 = new cjs.Shape()
    this.shape_38.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgHAIQgDgDAAgFQAAgEADgDQADgCAEAAQAEAAADACQAEADAAAEQAAAFgEADQgDACgEAAQgEAAgDgCg',
      )
    this.shape_38.setTransform(5.95, 16.35)

    this.shape_39 = new cjs.Shape()
    this.shape_39.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgGAHQgDgDAAgEQAAgEADgCQADgDADAAQAEAAADADQADACAAAEQAAAEgDADQgDADgEAAQgDAAgDgDg',
      )
    this.shape_39.setTransform(5.925, 16.35)

    this.shape_40 = new cjs.Shape()
    this.shape_40.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgFAGQgDgCAAgEQAAgDADgDQACgCADAAQAEAAACACQADADAAADQAAAEgDACQgCADgEAAQgDAAgCgDg',
      )
    this.shape_40.setTransform(5.925, 16.35)

    this.shape_41 = new cjs.Shape()
    this.shape_41.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgFAGQgCgCAAgEQAAgDACgCQADgCACAAQADAAADACQACACAAADQAAAEgCACQgDACgDAAQgCAAgDgCg',
      )
    this.shape_41.setTransform(5.925, 16.35)

    this.shape_42 = new cjs.Shape()
    this.shape_42.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgGAHQgDgDAAgEQAAgDADgDQADgCADgBQAEABADACQADADAAADQAAAEgDADQgDACgEAAQgDAAgDgCg',
      )
    this.shape_42.setTransform(5.925, 16.35)

    this.shape_43 = new cjs.Shape()
    this.shape_43.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgGAIQgEgDAAgFQAAgDAEgEQADgDADABQAEgBAEADQADAEAAADQAAAFgDADQgEACgEAAQgDAAgDgCg',
      )
    this.shape_43.setTransform(5.925, 16.35)

    this.shape_44 = new cjs.Shape()
    this.shape_44.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgHAIQgEgDAAgFQAAgEAEgDQADgDAEAAQAEAAAEADQADADABAEQgBAFgDADQgEADgEAAQgEAAgDgDg',
      )
    this.shape_44.setTransform(5.95, 16.35)

    this.shape_45 = new cjs.Shape()
    this.shape_45.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgHAIQgFgDAAgFQAAgEAFgEQADgDAEAAQAFAAAEADQAEAEgBAEQABAFgEADQgEAEgFAAQgEAAgDgEg',
      )
    this.shape_45.setTransform(5.95, 16.35)

    this.shape_46 = new cjs.Shape()
    this.shape_46.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgIAJQgEgEAAgFQAAgFAEgEQAEgDAEAAQAFAAAEADQAEAEAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg',
      )
    this.shape_46.setTransform(5.925, 16.35)

    this.shape_47 = new cjs.Shape()
    this.shape_47.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgJAJQgEgDAAgGQAAgFAEgEQAFgEAEABQAGgBAEAEQAEAEAAAFQAAAGgEADQgEAFgGAAQgEAAgFgFg',
      )
    this.shape_47.setTransform(5.95, 16.35)

    this.shape_48 = new cjs.Shape()
    this.shape_48.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgKAKQgEgEAAgGQAAgGAEgDQAFgEAFAAQAGAAAFAEQAEADAAAGQAAAGgEAEQgFAFgGAAQgFAAgFgFg',
      )
    this.shape_48.setTransform(5.95, 16.35)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape_32}]})
        .to({state: [{t: this.shape_33}]}, 1)
        .to({state: [{t: this.shape_34}]}, 1)
        .to({state: [{t: this.shape_35}]}, 1)
        .to({state: [{t: this.shape_36}]}, 1)
        .to({state: [{t: this.shape_37}]}, 1)
        .to({state: [{t: this.shape_38}]}, 1)
        .to({state: [{t: this.shape_39}]}, 1)
        .to({state: [{t: this.shape_40}]}, 1)
        .to({state: [{t: this.shape_41}]}, 1)
        .to({state: [{t: this.shape_40}]}, 1)
        .to({state: [{t: this.shape_42}]}, 1)
        .to({state: [{t: this.shape_43}]}, 1)
        .to({state: [{t: this.shape_44}]}, 1)
        .to({state: [{t: this.shape_45}]}, 1)
        .to({state: [{t: this.shape_46}]}, 1)
        .to({state: [{t: this.shape_47}]}, 1)
        .to({state: [{t: this.shape_48}]}, 1)
        .to({state: [{t: this.shape_33}]}, 1)
        .to({state: [{t: this.shape_32}]}, 1)
        .wait(1),
    )

    // Calque_2
    this.shape_49 = new cjs.Shape()
    this.shape_49.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgVAWQgKgJAAgNQAAgMAKgKQAJgJAMAAQANAAAKAJQAJAKAAAMQAAANgJAJQgKAKgNAAQgMAAgJgKg',
      )
    this.shape_49.setTransform(-17.4, 19.475)

    this.shape_50 = new cjs.Shape()
    this.shape_50.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgWAXQgKgJAAgOQAAgNAKgJQAKgKAMAAQAOAAAJAKQAKAJAAANQAAAOgKAJQgJAKgOAAQgMAAgKgKg',
      )
    this.shape_50.setTransform(-17.4, 19.475)

    this.shape_51 = new cjs.Shape()
    this.shape_51.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgWAYQgLgKAAgOQAAgNALgKQAJgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgJgKg',
      )
    this.shape_51.setTransform(-17.4, 19.5)

    this.shape_52 = new cjs.Shape()
    this.shape_52.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgYAYQgJgKgBgOQABgNAJgLQALgJANAAQAOAAALAJQAKALgBANQABAOgKAKQgLAKgOAAQgNAAgLgKg',
      )
    this.shape_52.setTransform(-17.4, 19.475)

    this.shape_53 = new cjs.Shape()
    this.shape_53.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgYAZQgLgKAAgPQAAgOALgKQALgKANAAQAPAAAKAKQAKAKAAAOQAAAPgKAKQgKAKgPAAQgNAAgLgKg',
      )
    this.shape_53.setTransform(-17.4, 19.475)

    this.shape_54 = new cjs.Shape()
    this.shape_54.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgZAZQgKgKgBgPQABgOAKgLQAMgKANAAQAPAAAKAKQAMALgBAOQABAPgMAKQgKALgPAAQgNAAgMgLg',
      )
    this.shape_54.setTransform(-17.4, 19.5)

    this.shape_55 = new cjs.Shape()
    this.shape_55.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgZAaQgMgLAAgPQAAgOAMgMQALgKAOAAQAQAAAKAKQALAMAAAOQAAAPgLALQgKALgQAAQgOAAgLgLg',
      )
    this.shape_55.setTransform(-17.4, 19.5)

    this.shape_56 = new cjs.Shape()
    this.shape_56.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgaAbQgLgLAAgPQAAgQALgLQAMgLAOAAQAQAAALALQALALAAAQQAAAPgLALQgLALgQAAQgOAAgMgLg',
      )
    this.shape_56.setTransform(-17.4, 19.475)

    this.shape_57 = new cjs.Shape()
    this.shape_57.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgbAbQgLgLAAgQQAAgPALgMQANgKAOAAQAQAAALAKQAMAMAAAPQAAAQgMALQgLALgQAAQgOAAgNgLg',
      )
    this.shape_57.setTransform(-17.4, 19.5)

    this.shape_58 = new cjs.Shape()
    this.shape_58.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgbAcQgMgMAAgQQAAgPAMgNQAMgLAPABQAQgBAMALQAMANAAAPQAAAQgMAMQgMAMgQAAQgPAAgMgMg',
      )
    this.shape_58.setTransform(-17.4, 19.5)

    this.shape_59 = new cjs.Shape()
    this.shape_59.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgaAbQgLgLAAgQQAAgPALgMQAMgKAOAAQAQAAALAKQAMAMgBAPQABAQgMALQgLALgQAAQgOAAgMgLg',
      )
    this.shape_59.setTransform(-17.4, 19.5)

    this.shape_60 = new cjs.Shape()
    this.shape_60.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgaAaQgLgLAAgPQAAgOALgMQAMgKAOAAQAPAAALAKQALAMAAAOQAAAPgLALQgLALgPAAQgOAAgMgLg',
      )
    this.shape_60.setTransform(-17.4, 19.5)

    this.shape_61 = new cjs.Shape()
    this.shape_61.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgZAZQgLgKAAgPQAAgOALgMQALgKAOAAQAPAAALAKQALAMAAAOQAAAPgLAKQgLAMgPgBQgOABgLgMg',
      )
    this.shape_61.setTransform(-17.4, 19.5)

    this.shape_62 = new cjs.Shape()
    this.shape_62.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgYAZQgLgKAAgPQAAgOALgLQALgJANgBQAPABAKAJQALALAAAOQAAAPgLAKQgKAKgPAAQgNAAgLgKg',
      )
    this.shape_62.setTransform(-17.4, 19.5)

    this.shape_63 = new cjs.Shape()
    this.shape_63.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgYAZQgKgKAAgPQAAgNAKgLQALgKANAAQAOAAALAKQAKALAAANQAAAPgKAKQgLAKgOAAQgNAAgLgKg',
      )
    this.shape_63.setTransform(-17.4, 19.475)

    this.shape_64 = new cjs.Shape()
    this.shape_64.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgXAYQgLgKAAgOQAAgNALgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg',
      )
    this.shape_64.setTransform(-17.4, 19.475)

    this.shape_65 = new cjs.Shape()
    this.shape_65.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgWAXQgLgJAAgOQAAgNALgKQAJgJANAAQAOAAAKAJQAKAKAAANQAAAOgKAJQgKAKgOAAQgNAAgJgKg',
      )
    this.shape_65.setTransform(-17.4, 19.475)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape_49}]})
        .to({state: [{t: this.shape_50}]}, 1)
        .to({state: [{t: this.shape_51}]}, 1)
        .to({state: [{t: this.shape_52}]}, 1)
        .to({state: [{t: this.shape_53}]}, 1)
        .to({state: [{t: this.shape_54}]}, 1)
        .to({state: [{t: this.shape_55}]}, 1)
        .to({state: [{t: this.shape_56}]}, 1)
        .to({state: [{t: this.shape_57}]}, 1)
        .to({state: [{t: this.shape_58}]}, 1)
        .to({state: [{t: this.shape_57}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_60}]}, 1)
        .to({state: [{t: this.shape_61}]}, 1)
        .to({state: [{t: this.shape_62}]}, 1)
        .to({state: [{t: this.shape_63}]}, 1)
        .to({state: [{t: this.shape_64}]}, 1)
        .to({state: [{t: this.shape_65}]}, 1)
        .to({state: [{t: this.shape_50}]}, 1)
        .to({state: [{t: this.shape_49}]}, 1)
        .wait(1),
    )

    // Calque_1
    this.shape_66 = new cjs.Shape()
    this.shape_66.graphics
      .f('#4D96B0')
      .s()
      .p(
        'AgTAzQgUgVgBgeQABgdAUgWQAVgUAeAAQAeAAAVAUQAWAWgBAdQABAegWAVQgVAWgeAAQgeAAgVgWgAhigJQgGgFAAgHQAAgHAGgFQAFgEAGAAQAHAAAEAEQAFAFABAHQgBAHgFAFQgEAEgHAAQgGAAgFgEg',
      )
    this.shape_66.setTransform(-9.35, 11.55)

    this.timeline.addTween(cjs.Tween.get(this.shape_66).wait(20))

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-21.4, 4.3, 29.5, 23.4)
  ;(lib.cerclesorange = function(mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])

    // Calque_4
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f('#F8692A')
      .s()
      .p(
        'AgPAQQgHgHAAgJQAAgJAHgGQAHgGAIAAQAJAAAHAGQAHAGAAAJQAAAJgHAHQgHAGgJAAQgIAAgHgGg',
      )
    this.shape.setTransform(20.075, 23.55)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f('#F8692A')
      .s()
      .p(
        'AgPAQQgIgGAAgKQAAgJAIgHQAHgGAIAAQAJAAAHAGQAIAHAAAJQAAAKgIAGQgHAHgJAAQgIAAgHgHg',
      )
    this.shape_1.setTransform(20.075, 23.55)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f('#F8692A')
      .s()
      .p(
        'AgQARQgHgHgBgKQABgJAHgHQAIgHAIAAQAKAAAHAHQAIAHAAAJQAAAKgIAHQgHAHgKAAQgIAAgIgHg',
      )
    this.shape_2.setTransform(20.1, 23.525)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f('#F8692A')
      .s()
      .p(
        'AgRARQgHgHAAgKQAAgKAHgHQAIgHAJAAQAKAAAIAHQAHAHAAAKQAAAKgHAHQgIAIgKAAQgJAAgIgIg',
      )
    this.shape_3.setTransform(20.075, 23.55)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f('#F8692A')
      .s()
      .p(
        'AgRASQgIgHAAgLQAAgKAIgIQAIgGAJgBQAKABAIAGQAIAIAAAKQAAALgIAHQgIAHgKABQgJgBgIgHg',
      )
    this.shape_4.setTransform(20.075, 23.55)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f('#F8692A')
      .s()
      .p(
        'AgSATQgIgIAAgLQAAgKAIgIQAJgHAKAAQAKAAAIAHQAIAIAAAKQAAALgIAIQgIAHgKAAQgKAAgJgHg',
      )
    this.shape_5.setTransform(20.1, 23.525)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f('#F8692A')
      .s()
      .p(
        'AgSATQgJgHAAgMQAAgLAJgHQAIgIALAAQAKAAAIAIQAJAHAAALQAAAMgJAHQgIAIgKAAQgLAAgIgIg',
      )
    this.shape_6.setTransform(20.1, 23.525)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f('#F8692A')
      .s()
      .p(
        'AgTAUQgJgIAAgMQAAgLAJgIQAJgIALAAQAKAAAJAIQAJAIAAALQAAAMgJAIQgJAIgKAAQgLAAgJgIg',
      )
    this.shape_7.setTransform(20.075, 23.55)

    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f('#F8692A')
      .s()
      .p(
        'AgUAVQgJgJABgMQgBgLAJgJQAKgIALAAQALAAAJAIQAIAJAAALQAAAMgIAJQgJAIgLAAQgLAAgKgIg',
      )
    this.shape_8.setTransform(20.1, 23.525)

    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics
      .f('#F8692A')
      .s()
      .p(
        'AgTAUQgJgIAAgMQAAgLAJgIQAIgIAMAAQAKAAAJAIQAJAIAAALQAAAMgJAIQgJAIgKAAQgMAAgIgIg',
      )
    this.shape_9.setTransform(20.1, 23.525)

    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics
      .f('#F8692A')
      .s()
      .p(
        'AgTAUQgIgIAAgMQAAgLAIgIQAJgHALAAQAKAAAIAHQAJAIAAALQAAAMgJAIQgIAHgKAAQgLAAgJgHg',
      )
    this.shape_10.setTransform(20.1, 23.525)

    this.shape_11 = new cjs.Shape()
    this.shape_11.graphics
      .f('#F8692A')
      .s()
      .p(
        'AgSATQgJgHABgMQgBgKAJgIQAIgIALAAQAKAAAIAIQAJAIAAAKQAAAMgJAHQgIAIgKAAQgLAAgIgIg',
      )
    this.shape_11.setTransform(20.1, 23.525)

    this.shape_12 = new cjs.Shape()
    this.shape_12.graphics
      .f('#F8692A')
      .s()
      .p(
        'AgRASQgJgHABgLQgBgKAJgIQAHgHALAAQAJAAAJAHQAHAIABAKQgBALgHAHQgJAIgJAAQgLAAgHgIg',
      )
    this.shape_12.setTransform(20.1, 23.55)

    this.shape_13 = new cjs.Shape()
    this.shape_13.graphics
      .f('#F8692A')
      .s()
      .p(
        'AgRARQgIgHAAgKQAAgKAIgHQAIgHAJAAQAKAAAIAHQAIAHAAAKQAAAKgIAHQgIAIgKAAQgJAAgIgIg',
      )
    this.shape_13.setTransform(20.075, 23.55)

    this.shape_14 = new cjs.Shape()
    this.shape_14.graphics
      .f('#F8692A')
      .s()
      .p(
        'AgQARQgIgHAAgKQAAgJAIgIQAHgGAJgBQAKABAIAGQAHAIAAAJQAAAKgHAHQgIAHgKABQgJgBgHgHg',
      )
    this.shape_14.setTransform(20.075, 23.55)

    this.shape_15 = new cjs.Shape()
    this.shape_15.graphics
      .f('#F8692A')
      .s()
      .p(
        'AgQAQQgHgGAAgKQAAgJAHgHQAIgHAIABQAJgBAIAHQAHAHAAAJQAAAKgHAGQgIAIgJAAQgIAAgIgIg',
      )
    this.shape_15.setTransform(20.075, 23.55)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {t: this.shape, p: {scaleX: 1, scaleY: 1, x: 20.075, y: 23.55}},
          ],
        })
        .to({state: [{t: this.shape_1}]}, 1)
        .to({state: [{t: this.shape_2}]}, 1)
        .to({state: [{t: this.shape_3}]}, 1)
        .to({state: [{t: this.shape_4}]}, 1)
        .to({state: [{t: this.shape_5}]}, 1)
        .to({state: [{t: this.shape_6}]}, 1)
        .to({state: [{t: this.shape_7}]}, 1)
        .to({state: [{t: this.shape_8}]}, 1)
        .to(
          {
            state: [
              {
                t: this.shape,
                p: {scaleX: 1.35, scaleY: 1.35, x: 20.1011, y: 23.5423},
              },
            ],
          },
          1,
        )
        .to({state: [{t: this.shape_8}]}, 1)
        .to({state: [{t: this.shape_9}]}, 1)
        .to({state: [{t: this.shape_10}]}, 1)
        .to({state: [{t: this.shape_11}]}, 1)
        .to({state: [{t: this.shape_12}]}, 1)
        .to({state: [{t: this.shape_13}]}, 1)
        .to({state: [{t: this.shape_14}]}, 1)
        .to({state: [{t: this.shape_15}]}, 1)
        .to({state: [{t: this.shape_1}]}, 1)
        .to(
          {
            state: [
              {t: this.shape, p: {scaleX: 1, scaleY: 1, x: 20.075, y: 23.55}},
            ],
          },
          1,
        )
        .wait(1),
    )

    // Calque_3
    this.shape_16 = new cjs.Shape()
    this.shape_16.graphics
      .f('#F8692A')
      .s()
      .p(
        'AgVAWQgKgJAAgNQAAgMAKgKQAJgJAMAAQANAAAKAJQAJAKAAAMQAAANgJAJQgKAKgNAAQgMAAgJgKg',
      )
    this.shape_16.setTransform(3.2, 7.775)

    this.shape_17 = new cjs.Shape()
    this.shape_17.graphics
      .f('#F8692A')
      .s()
      .p(
        'AgUAVQgJgIAAgMQAAgMAJgKQAJgIALAAQAMAAAJAIQAJAKAAAMQAAAMgJAIQgJAJgMAAQgLAAgJgJg',
      )
    this.shape_17.setTransform(3.2, 7.75)

    this.shape_18 = new cjs.Shape()
    this.shape_18.graphics
      .f('#F8692A')
      .s()
      .p(
        'AgTAUQgIgIAAgMQAAgLAIgIQAJgIAKAAQALAAAJAIQAIAIAAALQAAAMgIAIQgJAIgLAAQgKAAgJgIg',
      )
    this.shape_18.setTransform(3.2, 7.775)

    this.shape_19 = new cjs.Shape()
    this.shape_19.graphics
      .f('#F8692A')
      .s()
      .p(
        'AgRATQgJgIAAgKQAAgLAJgIQAHgIAKABQALgBAIAIQAHAIAAALQAAAKgHAIQgIAHgLABQgKgBgHgHg',
      )
    this.shape_19.setTransform(3.2, 7.75)

    this.shape_20 = new cjs.Shape()
    this.shape_20.graphics
      .f('#F8692A')
      .s()
      .p(
        'AgRARQgHgHAAgKQAAgJAHgIQAIgHAJAAQAKAAAHAHQAIAIAAAJQAAAKgIAHQgHAIgKAAQgJAAgIgIg',
      )
    this.shape_20.setTransform(3.2, 7.775)

    this.shape_21 = new cjs.Shape()
    this.shape_21.graphics
      .f('#F8692A')
      .s()
      .p(
        'AgPAQQgHgHAAgJQAAgJAHgGQAGgHAJAAQAJAAAIAHQAGAGAAAJQAAAJgGAHQgIAHgJAAQgJAAgGgHg',
      )
    this.shape_21.setTransform(3.2, 7.75)

    this.shape_22 = new cjs.Shape()
    this.shape_22.graphics
      .f('#F8692A')
      .s()
      .p(
        'AgOAPQgHgGABgJQgBgIAHgGQAGgGAIAAQAJAAAGAGQAHAGgBAIQABAJgHAGQgGAGgJAAQgIAAgGgGg',
      )
    this.shape_22.setTransform(3.2, 7.775)

    this.shape_23 = new cjs.Shape()
    this.shape_23.graphics
      .f('#F8692A')
      .s()
      .p(
        'AgMANQgHgFABgIQgBgHAHgGQAFgGAHAAQAIAAAGAGQAGAGgBAHQABAIgGAFQgGAHgIAAQgHAAgFgHg',
      )
    this.shape_23.setTransform(3.2, 7.75)

    this.shape_24 = new cjs.Shape()
    this.shape_24.graphics
      .f('#F8692A')
      .s()
      .p(
        'AgLAMQgGgFAAgHQAAgGAGgGQAFgFAGAAQAHAAAFAFQAGAGAAAGQAAAHgGAFQgFAGgHAAQgGAAgFgGg',
      )
    this.shape_24.setTransform(3.2, 7.775)

    this.shape_25 = new cjs.Shape()
    this.shape_25.graphics
      .f('#F8692A')
      .s()
      .p(
        'AgKALQgFgEAAgHQAAgFAFgGQAFgEAFAAQAGAAAFAEQAFAGAAAFQAAAHgFAEQgFAFgGAAQgFAAgFgFg',
      )
    this.shape_25.setTransform(3.2, 7.75)

    this.shape_26 = new cjs.Shape()
    this.shape_26.graphics
      .f('#F8692A')
      .s()
      .p(
        'AgLAMQgFgFgBgHQABgGAFgGQAFgEAGAAQAHAAAFAEQAGAGgBAGQABAHgGAFQgFAGgHAAQgGAAgFgGg',
      )
    this.shape_26.setTransform(3.2, 7.75)

    this.shape_27 = new cjs.Shape()
    this.shape_27.graphics
      .f('#F8692A')
      .s()
      .p(
        'AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg',
      )
    this.shape_27.setTransform(3.2, 7.75)

    this.shape_28 = new cjs.Shape()
    this.shape_28.graphics
      .f('#F8692A')
      .s()
      .p(
        'AgOAOQgGgGAAgIQAAgIAGgGQAHgGAHAAQAJAAAGAGQAGAGAAAIQAAAIgGAGQgGAHgJAAQgHAAgHgHg',
      )
    this.shape_28.setTransform(3.2, 7.775)

    this.shape_29 = new cjs.Shape()
    this.shape_29.graphics
      .f('#F8692A')
      .s()
      .p(
        'AgPAPQgGgGAAgJQAAgIAGgHQAHgGAIAAQAJAAAHAGQAHAHAAAIQAAAJgHAGQgHAHgJAAQgIAAgHgHg',
      )
    this.shape_29.setTransform(3.2, 7.775)

    this.shape_30 = new cjs.Shape()
    this.shape_30.graphics
      .f('#F8692A')
      .s()
      .p(
        'AgQARQgHgHAAgKQAAgJAHgHQAIgHAIAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgIAAgIgHg',
      )
    this.shape_30.setTransform(3.2, 7.775)

    this.shape_31 = new cjs.Shape()
    this.shape_31.graphics
      .f('#F8692A')
      .s()
      .p(
        'AgRASQgIgIAAgJQAAgKAIgIQAHgHAKAAQAKAAAIAHQAHAIABAKQgBAJgHAIQgIAIgKgBQgKABgHgIg',
      )
    this.shape_31.setTransform(3.2, 7.75)

    this.shape_32 = new cjs.Shape()
    this.shape_32.graphics
      .f('#F8692A')
      .s()
      .p(
        'AgSATQgIgIAAgKQAAgLAIgIQAIgIAKAAQALAAAIAIQAIAIAAALQAAAKgIAIQgIAIgLAAQgKAAgIgIg',
      )
    this.shape_32.setTransform(3.2, 7.75)

    this.shape_33 = new cjs.Shape()
    this.shape_33.graphics
      .f('#F8692A')
      .s()
      .p(
        'AgTAUQgJgIAAgMQAAgLAJgJQAJgIAKAAQALAAAJAIQAJAJAAALQAAAMgJAIQgJAJgLAAQgKAAgJgJg',
      )
    this.shape_33.setTransform(3.2, 7.775)

    this.shape_34 = new cjs.Shape()
    this.shape_34.graphics
      .f('#F8692A')
      .s()
      .p(
        'AgUAVQgJgIAAgNQAAgMAJgJQAIgIAMAAQAMAAAJAIQAJAJAAAMQAAANgJAIQgJAJgMAAQgMAAgIgJg',
      )
    this.shape_34.setTransform(3.2, 7.775)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape_16}]})
        .to({state: [{t: this.shape_17}]}, 1)
        .to({state: [{t: this.shape_18}]}, 1)
        .to({state: [{t: this.shape_19}]}, 1)
        .to({state: [{t: this.shape_20}]}, 1)
        .to({state: [{t: this.shape_21}]}, 1)
        .to({state: [{t: this.shape_22}]}, 1)
        .to({state: [{t: this.shape_23}]}, 1)
        .to({state: [{t: this.shape_24}]}, 1)
        .to({state: [{t: this.shape_25}]}, 1)
        .to({state: [{t: this.shape_26}]}, 1)
        .to({state: [{t: this.shape_27}]}, 1)
        .to({state: [{t: this.shape_28}]}, 1)
        .to({state: [{t: this.shape_29}]}, 1)
        .to({state: [{t: this.shape_30}]}, 1)
        .to({state: [{t: this.shape_31}]}, 1)
        .to({state: [{t: this.shape_32}]}, 1)
        .to({state: [{t: this.shape_33}]}, 1)
        .to({state: [{t: this.shape_34}]}, 1)
        .to({state: [{t: this.shape_16}]}, 1)
        .wait(1),
    )

    // Calque_2
    this.shape_35 = new cjs.Shape()
    this.shape_35.graphics
      .f('#F8692A')
      .s()
      .p(
        'AgPAQQgHgHAAgJQAAgJAHgGQAHgGAIAAQAJAAAHAGQAHAGAAAJQAAAJgHAHQgHAGgJAAQgIAAgHgGg',
      )
    this.shape_35.setTransform(30.175, 10.5)

    this.shape_36 = new cjs.Shape()
    this.shape_36.graphics
      .f('#F8692A')
      .s()
      .p(
        'AgPAQQgIgGAAgKQAAgJAIgHQAHgGAIAAQAJAAAHAGQAIAHAAAJQAAAKgIAGQgHAHgJAAQgIAAgHgHg',
      )
    this.shape_36.setTransform(30.175, 10.5)

    this.shape_37 = new cjs.Shape()
    this.shape_37.graphics
      .f('#F8692A')
      .s()
      .p(
        'AgQAQQgIgGAAgKQAAgJAIgHQAIgHAIAAQAJAAAIAHQAIAHAAAJQAAAKgIAGQgIAIgJAAQgIAAgIgIg',
      )
    this.shape_37.setTransform(30.175, 10.525)

    this.shape_38 = new cjs.Shape()
    this.shape_38.graphics
      .f('#F8692A')
      .s()
      .p(
        'AgRARQgHgHAAgKQAAgKAHgHQAIgHAJAAQAKAAAIAHQAHAHAAAKQAAAKgHAHQgIAIgKAAQgJAAgIgIg',
      )
    this.shape_38.setTransform(30.175, 10.5)

    this.shape_39 = new cjs.Shape()
    this.shape_39.graphics
      .f('#F8692A')
      .s()
      .p(
        'AgRASQgIgHAAgLQAAgKAIgIQAIgGAJgBQAKABAIAGQAIAIAAAKQAAALgIAHQgIAHgKABQgJgBgIgHg',
      )
    this.shape_39.setTransform(30.175, 10.5)

    this.shape_40 = new cjs.Shape()
    this.shape_40.graphics
      .f('#F8692A')
      .s()
      .p(
        'AgSASQgIgHAAgLQAAgKAIgIQAJgHAJAAQAKAAAJAHQAIAIAAAKQAAALgIAHQgJAIgKAAQgJAAgJgIg',
      )
    this.shape_40.setTransform(30.175, 10.525)

    this.shape_41 = new cjs.Shape()
    this.shape_41.graphics
      .f('#F8692A')
      .s()
      .p(
        'AgSATQgJgHAAgMQAAgLAJgIQAIgHAKAAQALAAAIAHQAJAIAAALQAAAMgJAHQgIAIgLAAQgKAAgIgIg',
      )
    this.shape_41.setTransform(30.175, 10.525)

    this.shape_42 = new cjs.Shape()
    this.shape_42.graphics
      .f('#F8692A')
      .s()
      .p(
        'AgTAUQgJgIAAgMQAAgLAJgIQAJgIAKAAQALAAAJAIQAJAIAAALQAAAMgJAIQgJAIgLAAQgKAAgJgIg',
      )
    this.shape_42.setTransform(30.175, 10.5)

    this.shape_43 = new cjs.Shape()
    this.shape_43.graphics
      .f('#F8692A')
      .s()
      .p(
        'AgUAUQgJgIAAgMQAAgLAJgJQAKgIAKAAQALAAAKAIQAJAJAAALQAAAMgJAIQgKAJgLAAQgKAAgKgJg',
      )
    this.shape_43.setTransform(30.175, 10.525)

    this.shape_44 = new cjs.Shape()
    this.shape_44.graphics
      .f('#F8692A')
      .s()
      .p(
        'AgUAVQgKgIAAgNQAAgMAKgJQAJgIALAAQAMAAAJAIQAKAJAAAMQAAANgKAIQgJAJgMAAQgLAAgJgJg',
      )
    this.shape_44.setTransform(30.175, 10.525)

    this.shape_45 = new cjs.Shape()
    this.shape_45.graphics
      .f('#F8692A')
      .s()
      .p(
        'AgTAUQgJgIAAgMQAAgLAJgJQAJgHAKAAQALAAAJAHQAJAJAAALQAAAMgJAIQgJAIgLAAQgKAAgJgIg',
      )
    this.shape_45.setTransform(30.175, 10.525)

    this.shape_46 = new cjs.Shape()
    this.shape_46.graphics
      .f('#F8692A')
      .s()
      .p(
        'AgTATQgIgHAAgMQAAgLAIgIQAJgHAKAAQALAAAJAHQAIAIAAALQAAAMgIAHQgJAIgLAAQgKAAgJgIg',
      )
    this.shape_46.setTransform(30.175, 10.525)

    this.shape_47 = new cjs.Shape()
    this.shape_47.graphics
      .f('#F8692A')
      .s()
      .p(
        'AgSATQgJgIAAgLQAAgLAJgIQAIgHAKAAQALAAAIAHQAJAIAAALQAAALgJAIQgIAIgLAAQgKAAgIgIg',
      )
    this.shape_47.setTransform(30.175, 10.525)

    this.shape_48 = new cjs.Shape()
    this.shape_48.graphics
      .f('#F8692A')
      .s()
      .p(
        'AgRASQgJgHAAgLQAAgKAJgIQAIgHAJAAQAKAAAJAHQAIAIAAAKQAAALgIAHQgJAIgKAAQgJAAgIgIg',
      )
    this.shape_48.setTransform(30.175, 10.525)

    this.shape_49 = new cjs.Shape()
    this.shape_49.graphics
      .f('#F8692A')
      .s()
      .p(
        'AgRARQgIgGAAgLQAAgKAIgHQAIgHAJAAQAKAAAIAHQAIAHAAAKQAAALgIAGQgIAIgKAAQgJAAgIgIg',
      )
    this.shape_49.setTransform(30.175, 10.5)

    this.shape_50 = new cjs.Shape()
    this.shape_50.graphics
      .f('#F8692A')
      .s()
      .p(
        'AgQARQgIgHAAgKQAAgJAIgIQAHgGAJgBQAKABAHAGQAIAIAAAJQAAAKgIAHQgHAHgKABQgJgBgHgHg',
      )
    this.shape_50.setTransform(30.175, 10.5)

    this.shape_51 = new cjs.Shape()
    this.shape_51.graphics
      .f('#F8692A')
      .s()
      .p(
        'AgQAQQgHgGAAgKQAAgJAHgHQAIgHAIABQAJgBAIAHQAHAHAAAJQAAAKgHAGQgIAIgJAAQgIAAgIgIg',
      )
    this.shape_51.setTransform(30.175, 10.5)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape_35}]})
        .to({state: [{t: this.shape_36}]}, 1)
        .to({state: [{t: this.shape_37}]}, 1)
        .to({state: [{t: this.shape_38}]}, 1)
        .to({state: [{t: this.shape_39}]}, 1)
        .to({state: [{t: this.shape_40}]}, 1)
        .to({state: [{t: this.shape_41}]}, 1)
        .to({state: [{t: this.shape_42}]}, 1)
        .to({state: [{t: this.shape_43}]}, 1)
        .to({state: [{t: this.shape_44}]}, 1)
        .to({state: [{t: this.shape_43}]}, 1)
        .to({state: [{t: this.shape_45}]}, 1)
        .to({state: [{t: this.shape_46}]}, 1)
        .to({state: [{t: this.shape_47}]}, 1)
        .to({state: [{t: this.shape_48}]}, 1)
        .to({state: [{t: this.shape_49}]}, 1)
        .to({state: [{t: this.shape_50}]}, 1)
        .to({state: [{t: this.shape_51}]}, 1)
        .to({state: [{t: this.shape_36}]}, 1)
        .to({state: [{t: this.shape_35}]}, 1)
        .wait(1),
    )

    // Calque_1
    this.shape_52 = new cjs.Shape()
    this.shape_52.graphics
      .f('#F8692A')
      .s()
      .p(
        'AhVBgQgFgFAAgGQAAgIAFgEQAFgFAGABQAHgBAFAFQAFAEAAAIQAAAGgFAFQgFAFgHgBQgGABgFgFgAggBFQgVgVAAgeQAAgdAVgWQAWgUAdgBQAeABAUAUQAWAWAAAdQAAAegWAVQgUAWgegBQgdABgWgWgAgbhIQgFgFAAgGQAAgIAFgEQAFgEAHgBQAGABAFAEQAEAEAAAIQAAAGgEAFQgFAFgGAAQgHAAgFgFg',
      )
    this.shape_52.setTransform(15.5, 10.05)

    this.timeline.addTween(cjs.Tween.get(this.shape_52).wait(20))

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(0, 0, 33.3, 26.5)
  ;(lib.cachegris = function(mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f('#252A2D')
      .s()
      .p('AnBByIAAjjIODAAIAADjg')
    this.shape.setTransform(44.975, 11.375)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(
    lib.cachegris,
    new cjs.Rectangle(0, 0, 90, 22.8),
    null,
  )
  ;(lib.btn1 = function(mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f('#FFFFFF')
      .s()
      .p('AoLIMIAAwXIQXAAIAAQXg')
    this.shape.setTransform(52.4, 52.4)
    this.shape._off = true

    this.timeline.addTween(
      cjs.Tween.get(this.shape)
        .wait(3)
        .to({_off: false}, 0)
        .wait(1),
    )

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(0, 0, 104.8, 104.8)
  ;(lib.warsaw = function(mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])

    // timeline functions:
    this.frame_0 = function() {
      this.stop()
    }
    this.frame_9 = function() {
      this.stop()
    }

    // actions tween:
    this.timeline.addTween(
      cjs.Tween.get(this)
        .call(this.frame_0)
        .wait(9)
        .call(this.frame_9)
        .wait(36),
    )

    // Calque_3
    this.instance = new lib.pol()
    this.instance.setTransform(21.5, 78.55, 1, 1, 180, 0, 0, 32.8, 15.2)
    this.instance.alpha = 0
    this.instance._off = true

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(1)
        .to({_off: false}, 0)
        .to({alpha: 1}, 8)
        .to({alpha: 0}, 35, cjs.Ease.get(0.98))
        .wait(1),
    )

    // Calque_1
    this.instance_1 = new lib.copiecerclesvert()
    this.instance_1.setTransform(16.65, 14.85, 1.15, 1.15, 0, 0, 0, -28.2, 15.3)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(1)
        .to(
          {regX: -28.1, scaleX: 1.4547, scaleY: 1.4547, x: 16.75},
          8,
          cjs.Ease.get(1),
        )
        .to(
          {regX: -28.2, scaleX: 1.15, scaleY: 1.15, x: 16.65},
          35,
          cjs.Ease.get(1),
        )
        .wait(1),
    )

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-13.5, -3.9, 70, 97.7)
  ;(lib.usa = function(mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])

    // timeline functions:
    this.frame_0 = function() {
      this.stop()
    }
    this.frame_9 = function() {
      this.stop()
    }

    // actions tween:
    this.timeline.addTween(
      cjs.Tween.get(this)
        .call(this.frame_0)
        .wait(9)
        .call(this.frame_9)
        .wait(36),
    )

    // Calque_1
    this.instance = new lib.copiecerclesvertpomme()
    this.instance.setTransform(18.7, 14.7, 1.15, 1.15, 0, 0, 0, 16.2, 12.8)

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(1)
        .to(
          {regX: 16.1, scaleX: 1.4547, scaleY: 1.4547, x: 18.6},
          8,
          cjs.Ease.get(1),
        )
        .to(
          {regX: 16.2, scaleX: 1.15, scaleY: 1.15, x: 18.7},
          35,
          cjs.Ease.get(1),
        )
        .wait(1),
    )

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-4.8, -3.9, 47.699999999999996, 38.1)
  ;(lib.paris = function(mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])

    // timeline functions:
    this.frame_0 = function() {
      this.stop()
    }
    this.frame_9 = function() {
      this.stop()
    }

    // actions tween:
    this.timeline.addTween(
      cjs.Tween.get(this)
        .call(this.frame_0)
        .wait(9)
        .call(this.frame_9)
        .wait(36),
    )

    // Calque_3
    this.instance = new lib.fr()
    this.instance.setTransform(16.65, 65.95, 1, 1, 0, 0, 0, 31.8, 15.2)
    this.instance.alpha = 0
    this.instance._off = true
    new cjs.ButtonHelper(this.instance, 0, 1, 1)

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(1)
        .to({_off: false}, 0)
        .to({alpha: 1}, 8)
        .to({alpha: 0}, 35)
        .wait(1),
    )

    // Calque_1
    this.instance_1 = new lib.copiecerclesrouge()
    this.instance_1.setTransform(12.9, 17.4, 1.15, 1.15, 0, 0, 0, 16.2, 12.8)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(1)
        .to(
          {scaleX: 1.3225, scaleY: 1.3225, x: 12.85, y: 17.45},
          8,
          cjs.Ease.get(1),
        )
        .to({scaleX: 1.15, scaleY: 1.15, x: 12.9, y: 17.4}, 35, cjs.Ease.get(1))
        .wait(1),
    )

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-15.4, -2.6, 64, 83.8)
  ;(lib.munich = function(mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])

    // timeline functions:
    this.frame_0 = function() {
      this.stop()
    }
    this.frame_9 = function() {
      this.stop()
    }

    // actions tween:
    this.timeline.addTween(
      cjs.Tween.get(this)
        .call(this.frame_0)
        .wait(9)
        .call(this.frame_9)
        .wait(38),
    )

    // Calque_2
    this.instance = new lib.germany()
    this.instance.setTransform(15.85, -30.85, 1, 1, 0, 0, 0, 54.6, 20.5)
    this.instance.alpha = 0
    this.instance._off = true

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(1)
        .to({_off: false}, 0)
        .to({alpha: 1}, 8, cjs.Ease.get(0.99))
        .to({alpha: 0}, 37, cjs.Ease.get(1))
        .wait(1),
    )

    // Calque_1
    this.instance_1 = new lib.copiecerclesviolet()
    this.instance_1.setTransform(16.7, 14.7, 1.15, 1.15, 0, 0, 0, 16.2, 12.8)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(1)
        .to(
          {regX: 16.1, scaleX: 1.4547, scaleY: 1.4547, x: 16.6},
          8,
          cjs.Ease.get(1),
        )
        .to(
          {regX: 16.2, scaleX: 1.15, scaleY: 1.15, x: 16.7},
          37,
          cjs.Ease.get(1),
        )
        .wait(1),
    )

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-19.4, -44.6, 79.6, 76.9)
  ;(lib.milan = function(mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])

    // timeline functions:
    this.frame_0 = function() {
      this.stop()
    }
    this.frame_9 = function() {
      this.stop()
    }

    // actions tween:
    this.timeline.addTween(
      cjs.Tween.get(this)
        .call(this.frame_0)
        .wait(9)
        .call(this.frame_9)
        .wait(41),
    )

    // Calque_3
    this.instance = new lib.ital()
    this.instance.setTransform(18.95, -30.15, 1, 1, 0, 0, 0, 22.8, 15.2)
    this.instance.alpha = 0
    this.instance._off = true

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(1)
        .to({_off: false}, 0)
        .to({alpha: 1}, 8)
        .to({alpha: 0}, 40, cjs.Ease.get(1))
        .wait(1),
    )

    // Calque_1
    this.instance_1 = new lib.copiecerclesazur()
    this.instance_1.setTransform(16.45, 13.1, 1.15, 1.15, 0, 0, 0, -6.3, 15.7)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(1)
        .to(
          {regY: 15.6, scaleX: 1.4547, scaleY: 1.4547, y: 13.05},
          8,
          cjs.Ease.get(1),
        )
        .to(
          {regY: 15.7, scaleX: 1.15, scaleY: 1.15, y: 13.1},
          40,
          cjs.Ease.get(1),
        )
        .wait(1),
    )

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-4.3, -45.3, 46, 75)
  ;(lib.madrid = function(mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])

    // timeline functions:
    this.frame_0 = function() {
      this.stop()
    }
    this.frame_9 = function() {
      this.stop()
    }

    // actions tween:
    this.timeline.addTween(
      cjs.Tween.get(this)
        .call(this.frame_0)
        .wait(9)
        .call(this.frame_9)
        .wait(36),
    )

    // Calque_3
    this.instance = new lib.spain()
    this.instance.setTransform(22.5, -30.6, 1, 1, 0, 0, 0, 24.5, 15.2)
    this.instance.alpha = 0
    this.instance._off = true

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(1)
        .to({_off: false}, 0)
        .to({alpha: 1}, 8)
        .to({alpha: 0}, 35)
        .wait(1),
    )

    // Calque_1
    this.instance_1 = new lib.copiecerclesorange()
    this.instance_1.setTransform(19.15, 17.4, 1.15, 1.15, 0, 0, 0, 16.2, 12.8)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(1)
        .to(
          {regX: 16.1, scaleX: 1.4547, scaleY: 1.4547, x: 19.05},
          8,
          cjs.Ease.get(1),
        )
        .to(
          {regX: 16.2, scaleX: 1.15, scaleY: 1.15, x: 19.15},
          35,
          cjs.Ease.get(1),
        )
        .wait(1),
    )

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-5, -45.8, 52.3, 83.1)
  ;(lib.london = function(mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])

    // timeline functions:
    this.frame_0 = function() {
      this.stop()
    }
    this.frame_9 = function() {
      this.stop()
    }

    // actions tween:
    this.timeline.addTween(
      cjs.Tween.get(this)
        .call(this.frame_0)
        .wait(9)
        .call(this.frame_9)
        .wait(36),
    )

    // Calque_3
    this.instance = new lib.uk()
    this.instance.setTransform(22.65, -32.85, 1, 1, 0, 0, 0, 12.5, 15.2)
    this.instance.alpha = 0
    this.instance._off = true

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(1)
        .to({_off: false}, 0)
        .to({alpha: 1}, 8)
        .to({alpha: 0}, 35, cjs.Ease.get(1))
        .wait(1),
    )

    // Calque_1
    this.instance_1 = new lib.cerclesorange()
    this.instance_1.setTransform(18.65, 14.7, 1.15, 1.15, 0, 0, 0, 16.2, 12.8)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(1)
        .to({scaleX: 1.4375, scaleY: 1.4375}, 8, cjs.Ease.get(1))
        .to({scaleX: 1.15, scaleY: 1.15}, 35, cjs.Ease.get(1))
        .wait(1),
    )

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-4.6, -48, 46.6, 81.3)
  ;(lib.dublin = function(mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])

    // timeline functions:
    this.frame_0 = function() {
      this.stop()
    }
    this.frame_9 = function() {
      this.stop()
    }

    // actions tween:
    this.timeline.addTween(
      cjs.Tween.get(this)
        .call(this.frame_0)
        .wait(9)
        .call(this.frame_9)
        .wait(36),
    )

    // Calque_3
    this.instance = new lib.ire()
    this.instance.setTransform(22.6, -28.15, 1, 1, 0, 0, 0, 33.2, 15.2)
    this.instance.alpha = 0
    this.instance._off = true

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(1)
        .to({_off: false}, 0)
        .to({alpha: 1}, 8)
        .to({alpha: 0}, 35)
        .wait(1),
    )

    // Calque_1
    this.instance_1 = new lib.copiecerclesjaune()
    this.instance_1.setTransform(16.5, 13.4, 1.15, 1.15, 0, 0, 0, 16.2, 12.8)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(1)
        .to({scaleX: 1.4375, scaleY: 1.4375}, 8, cjs.Ease.get(0.98))
        .to({scaleX: 1.15, scaleY: 1.15}, 35, cjs.Ease.get(1))
        .wait(1),
    )

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-10.8, -43.3, 66.8, 79.9)
  ;(lib.copiecerclesviolet2 = function(mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])

    // timeline functions:
    this.frame_0 = function() {
      this.stop()
    }
    this.frame_9 = function() {
      this.stop()
    }

    // actions tween:
    this.timeline.addTween(
      cjs.Tween.get(this)
        .call(this.frame_0)
        .wait(9)
        .call(this.frame_9)
        .wait(36),
    )

    // Calque_3
    this.instance = new lib.tcheq()
    this.instance.setTransform(-0.55, -23.9, 1, 1, 0, 0, 0, 60.9, 15.2)
    this.instance.alpha = 0
    this.instance._off = true

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(1)
        .to({_off: false}, 0)
        .to({alpha: 1}, 8)
        .to({alpha: 0}, 35, cjs.Ease.get(1))
        .wait(1),
    )

    // Calque_1
    this.instance_1 = new lib.prague()
    this.instance_1.setTransform(-4.4, 12.9, 1, 1, 0, 0, 0, 13.5, 10.5)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(1)
        .to(
          {regX: 13.4, regY: 10.6, scaleX: 1.3914, scaleY: 1.3914, y: 13},
          8,
          cjs.Ease.get(1),
        )
        .to(
          {regX: 13.5, regY: 10.5, scaleX: 1, scaleY: 1, y: 12.9},
          35,
          cjs.Ease.get(1),
        )
        .wait(1),
    )

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-61.6, -39.1, 122.1, 66.7)

  // stage content:
  ;(lib.carte1 = function(mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])

    this.actionFrames = [0]
    this.isSingleFrame = false
    // timeline functions:
    this.frame_0 = function() {
      if (this.isSingleFrame) {
        return
      }
      if (this.totalFrames == 1) {
        this.isSingleFrame = true
      }
      //this.button_1.addEventListener("click", fl_MouseClickHandler.bind(this));

      //function fl_MouseClickHandler()
      //{
      //alert("L’utilisateur a cliqué sur la souris");
      //}

      this.button_1.addEventListener(
        'mouseover',
        fl_MouseOverHandler.bind(this),
      )

      function fl_MouseOverHandler() {
        this.dublin.gotoAndPlay(1)
      }

      this.button_1.addEventListener('mouseout', fl_MouseOutHandler.bind(this))

      function fl_MouseOutHandler() {
        this.dublin.gotoAndPlay(10)
      }

      this.button_2.addEventListener(
        'mouseover',
        f2_MouseOverHandler.bind(this),
      )

      function f2_MouseOverHandler() {
        this.london.gotoAndPlay(1)
      }

      this.button_2.addEventListener('mouseout', f2_MouseOutHandler.bind(this))

      function f2_MouseOutHandler() {
        this.london.gotoAndPlay(10)
      }

      this.button_3.addEventListener(
        'mouseover',
        f3_MouseOverHandler.bind(this),
      )

      function f3_MouseOverHandler() {
        this.paris.gotoAndPlay(1)
      }

      this.button_3.addEventListener('mouseout', f3_MouseOutHandler.bind(this))

      function f3_MouseOutHandler() {
        this.paris.gotoAndPlay(10)
      }

      this.button_4.addEventListener(
        'mouseover',
        f4_MouseOverHandler.bind(this),
      )

      function f4_MouseOverHandler() {
        this.milan.gotoAndPlay(1)
      }

      this.button_4.addEventListener('mouseout', f4_MouseOutHandler.bind(this))

      function f4_MouseOutHandler() {
        this.milan.gotoAndPlay(10)
      }

      this.button_5.addEventListener(
        'mouseover',
        f5_MouseOverHandler.bind(this),
      )

      function f5_MouseOverHandler() {
        this.munich.gotoAndPlay(1)
      }

      this.button_5.addEventListener('mouseout', f5_MouseOutHandler.bind(this))

      function f5_MouseOutHandler() {
        this.munich.gotoAndPlay(10)
      }

      this.button_6.addEventListener(
        'mouseover',
        f6_MouseOverHandler.bind(this),
      )

      function f6_MouseOverHandler() {
        this.prague.gotoAndPlay(1)
      }

      this.button_6.addEventListener('mouseout', f6_MouseOutHandler.bind(this))

      function f6_MouseOutHandler() {
        this.prague.gotoAndPlay(10)
      }

      this.button_7.addEventListener(
        'mouseover',
        f7_MouseOverHandler.bind(this),
      )

      function f7_MouseOverHandler() {
        this.warsaw.gotoAndPlay(1)
      }

      this.button_7.addEventListener('mouseout', f7_MouseOutHandler.bind(this))

      function f7_MouseOutHandler() {
        this.warsaw.gotoAndPlay(10)
      }

      this.button_8.addEventListener(
        'mouseover',
        f8_MouseOverHandler.bind(this),
      )

      function f8_MouseOverHandler() {
        this.madrid.gotoAndPlay(1)
      }

      this.button_8.addEventListener('mouseout', f8_MouseOutHandler.bind(this))

      function f8_MouseOutHandler() {
        this.madrid.gotoAndPlay(10)
      }

      this.button_9.addEventListener(
        'mouseover',
        f9_MouseOverHandler.bind(this),
      )

      function f9_MouseOverHandler() {
        this.usa.gotoAndPlay(1)
      }

      this.button_9.addEventListener('mouseout', f9_MouseOutHandler.bind(this))

      function f9_MouseOutHandler() {
        this.usa.gotoAndPlay(10)
      }
    }

    // actions tween:
    this.timeline.addTween(
      cjs.Tween.get(this)
        .call(this.frame_0)
        .wait(1),
    )

    // boutons
    this.button_9 = new lib.btn1()
    this.button_9.name = 'button_9'
    this.button_9.setTransform(
      376.3,
      267.75,
      1.0602,
      1.0602,
      0,
      0,
      0,
      52.5,
      52.5,
    )
    new cjs.ButtonHelper(this.button_9, 0, 1, 2, false, new lib.btn1(), 3)

    this.button_7 = new lib.btn1()
    this.button_7.name = 'button_7'
    this.button_7.setTransform(
      1331.25,
      282.75,
      1.0602,
      1.0602,
      0,
      0,
      0,
      52.5,
      52.6,
    )
    new cjs.ButtonHelper(this.button_7, 0, 1, 2, false, new lib.btn1(), 3)

    this.button_6 = new lib.btn1()
    this.button_6.name = 'button_6'
    this.button_6.setTransform(
      1526.2,
      403.6,
      1.0602,
      1.0602,
      0,
      0,
      0,
      52.6,
      52.4,
    )
    new cjs.ButtonHelper(this.button_6, 0, 1, 2, false, new lib.btn1(), 3)

    this.button_8 = new lib.btn1()
    this.button_8.name = 'button_8'
    this.button_8.setTransform(
      1078.85,
      622,
      1.0602,
      1.0602,
      0,
      0,
      0,
      52.5,
      52.5,
    )
    new cjs.ButtonHelper(this.button_8, 0, 1, 2, false, new lib.btn1(), 3)

    this.button_4 = new lib.btn1()
    this.button_4.name = 'button_4'
    this.button_4.setTransform(
      1374.6,
      512.1,
      1.0602,
      1.0602,
      0,
      0,
      0,
      52.5,
      52.5,
    )
    new cjs.ButtonHelper(this.button_4, 0, 1, 2, false, new lib.btn1(), 3)

    this.button_5 = new lib.btn1()
    this.button_5.name = 'button_5'
    this.button_5.setTransform(
      1412.85,
      397.65,
      1.0602,
      1.0602,
      0,
      0,
      0,
      52.5,
      52.5,
    )
    new cjs.ButtonHelper(this.button_5, 0, 1, 2, false, new lib.btn1(), 3)

    this.button_3 = new lib.btn1()
    this.button_3.name = 'button_3'
    this.button_3.setTransform(
      1206.45,
      447.45,
      1.0602,
      1.0602,
      0,
      0,
      0,
      52.4,
      52.5,
    )
    new cjs.ButtonHelper(this.button_3, 0, 1, 2, false, new lib.btn1(), 3)

    this.button_2 = new lib.btn1()
    this.button_2.name = 'button_2'
    this.button_2.setTransform(
      1174.15,
      322.3,
      1.0602,
      1.0602,
      0,
      0,
      0,
      52.5,
      52.5,
    )
    new cjs.ButtonHelper(this.button_2, 0, 1, 2, false, new lib.btn1(), 3)

    this.button_1 = new lib.btn1()
    this.button_1.name = 'button_1'
    this.button_1.setTransform(
      1059.95,
      277.15,
      1.0602,
      1.0602,
      0,
      0,
      0,
      52.4,
      52.5,
    )
    new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.btn1(), 3)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {t: this.button_1},
            {t: this.button_2},
            {t: this.button_3},
            {t: this.button_5},
            {t: this.button_4},
            {t: this.button_8},
            {t: this.button_6},
            {t: this.button_7},
            {t: this.button_9},
          ],
        })
        .wait(1),
    )

    // villes
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f('#66CCCC')
      .s()
      .p('AAnBOIgKgcIg6AAIgJAcIgpAAIA6ibIArAAIA6CbgAgTAVIAnAAIgUg5g')
    this.shape.setTransform(137.275, 331.025)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgnBEQgRgNgBgXIAoAAQABAJAGAFQAFAFAHAAQAIAAAEgEQAEgEAAgHQAAgGgEgEQgEgEgFgCIgPgGIgZgKQgJgEgHgKQgHgJAAgPQAAgOAHgKQAHgLANgFQANgGAQAAQAZAAAQANQAPAMACAWIgpAAQgBgIgFgEQgEgFgHAAQgHAAgEAEQgEADAAAHQAAAGAEAEQADAEAGACIAPAGQAPAFAKAFQAJAEAHAKQAHAKAAAPQAAAMgGALQgHAKgMAHQgMAGgSAAQgZAAgSgNg',
      )
    this.shape_1.setTransform(122.225, 330.925)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgiBIQgOgHgIgQQgIgPAAgXIAAhZIAlAAIAABZQAAAQAHAJQAHAHANABQANgBAHgHQAHgJAAgQIAAhZIAmAAIAABZQAAAXgIAPQgJAPgPAIQgPAIgSAAQgTAAgPgIg',
      )
    this.shape_2.setTransform(107.575, 331.05)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f('#FFA902')
      .s()
      .p(
        'AhGBPIAAidIA8AAQAYAAATAKQASAKAKASQAKASAAAWQAAAXgKASQgKASgSAKQgTAKgYAAgAggAtIASAAQAWAAAMgMQAMgMAAgVQAAgVgMgLQgMgMgWAAIgSAAg',
      )
    this.shape_3.setTransform(1117.025, 596.825)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f('#FFA902')
      .s()
      .p('AgSBPIAAidIAlAAIAACdg')
    this.shape_4.setTransform(1105.25, 596.825)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f('#FFA902')
      .s()
      .p(
        'AATBPIggg8IgJAAIAAA8IgnAAIAAidIBAAAQAUAAAMAHQANAGAGALQAHAMAAAOQAAARgJALQgKAMgSAFIAmA+gAgWgGIAWAAQAMAAAFgFQAGgFAAgKQAAgJgGgFQgFgGgMAAIgWAAg',
      )
    this.shape_5.setTransform(1095, 596.825)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f('#FFA902')
      .s()
      .p(
        'AhGBPIAAidIA8AAQAYAAATAKQASAKAKASQAKASAAAWQAAAXgKASQgKASgSAKQgTAKgYAAgAggAtIASAAQAWAAAMgMQAMgMAAgVQAAgVgMgLQgMgMgWAAIgSAAg',
      )
    this.shape_6.setTransform(1079.725, 596.825)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f('#FFA902')
      .s()
      .p('AAnBOIgKgcIg6AAIgJAcIgpAAIA6ibIArAAIA6CbgAgTAVIAnAAIgUg5g')
    this.shape_7.setTransform(1063.075, 596.875)

    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f('#FFA902')
      .s()
      .p('AAzBOIAAhgIgiBgIghAAIghhhIAABhIgnAAIAAibIAvAAIApBsIArhsIAtAAIAACbg')
    this.shape_8.setTransform(1044.6, 596.875)

    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics
      .f('#5490AF')
      .s()
      .p('AAgBPIg/hgIAABgIgmAAIAAidIAmAAIA/BhIAAhhIAmAAIAACdg')
    this.shape_9.setTransform(1400.9, 474.625)

    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics
      .f('#5490AF')
      .s()
      .p('AAnBOIgKgcIg6AAIgJAcIgpAAIA6ibIArAAIA6CbgAgTAVIAnAAIgUg5g')
    this.shape_10.setTransform(1384.275, 474.675)

    this.shape_11 = new cjs.Shape()
    this.shape_11.graphics
      .f('#5490AF')
      .s()
      .p('AgsBPIAAidIAmAAIAACAIAyAAIAAAdg')
    this.shape_11.setTransform(1371.3, 474.625)

    this.shape_12 = new cjs.Shape()
    this.shape_12.graphics
      .f('#5490AF')
      .s()
      .p('AgSBPIAAidIAlAAIAACdg')
    this.shape_12.setTransform(1362.2, 474.625)

    this.shape_13 = new cjs.Shape()
    this.shape_13.graphics
      .f('#5490AF')
      .s()
      .p('AAzBOIAAhgIgiBgIghAAIgihhIAABhIgmAAIAAibIAvAAIApBsIArhsIAuAAIAACbg')
    this.shape_13.setTransform(1348.7, 474.675)

    this.shape_14 = new cjs.Shape()
    this.shape_14.graphics
      .f('#0091B3')
      .s()
      .p('AgSBPIAAh+IgrAAIAAgfIB7AAIAAAfIgrAAIAAB+g')
    this.shape_14.setTransform(1392.35, 259.075)

    this.shape_15 = new cjs.Shape()
    this.shape_15.graphics
      .f('#0091B3')
      .s()
      .p('AAeBPIAAhCIg7AAIAABCIgmAAIAAidIAmAAIAAA9IA7AAIAAg9IAmAAIAACdg')
    this.shape_15.setTransform(1377.7, 259.075)

    this.shape_16 = new cjs.Shape()
    this.shape_16.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgnBGQgRgKgKgSQgJgTAAgXQAAgWAJgTQAKgSARgKQASgKAWAAQAeAAATAQQAUAPAGAbIgoAAQgFgLgJgGQgKgGgMAAQgQAAgKAMQgLAMABAUQgBAUALANQAKAMAQAAQAMAAAKgHQAJgGAFgKIAoAAQgGAagUAQQgTAQgeAAQgWAAgSgKg',
      )
    this.shape_16.setTransform(1361.1, 259.075)

    this.shape_17 = new cjs.Shape()
    this.shape_17.graphics
      .f('#0091B3')
      .s()
      .p('AgSBPIAAidIAlAAIAACdg')
    this.shape_17.setTransform(1349.25, 259.075)

    this.shape_18 = new cjs.Shape()
    this.shape_18.graphics
      .f('#0091B3')
      .s()
      .p(
        'AATBPIggg8IgJAAIAAA8IgnAAIAAidIBBAAQASAAANAHQANAGAGALQAHAMAAAOQAAARgJALQgKAMgSAFIAlA+gAgWgGIAWAAQALAAAGgFQAFgFABgKQgBgJgFgFQgGgGgLAAIgWAAg',
      )
    this.shape_18.setTransform(1339, 259.075)

    this.shape_19 = new cjs.Shape()
    this.shape_19.graphics
      .f('#0091B3')
      .s()
      .p('AgSBPIAAh+IgrAAIAAgfIB7AAIAAAfIgrAAIAAB+g')
    this.shape_19.setTransform(1324.85, 259.075)

    this.shape_20 = new cjs.Shape()
    this.shape_20.graphics
      .f('#0091B3')
      .s()
      .p(
        'AgnBEQgRgNgBgXIAoAAQABAJAGAFQAFAFAHAAQAIAAAEgEQAEgEAAgHQAAgGgEgEQgEgEgFgCIgPgGIgZgKQgJgEgHgKQgHgJAAgPQAAgOAHgKQAHgLANgFQANgGAQAAQAZAAAQANQAPAMACAWIgpAAQgBgIgFgEQgEgFgHAAQgHAAgEAEQgEADAAAHQAAAGAEAEQADAEAGACIAPAGQAPAFAKAFQAJAEAHAKQAHAKAAAPQAAAMgGALQgHAKgMAHQgMAGgSAAQgZAAgSgNg',
      )
    this.shape_20.setTransform(1311.425, 259.025)

    this.shape_21 = new cjs.Shape()
    this.shape_21.graphics
      .f('#0091B3')
      .s()
      .p('AAnBOIgKgcIg6AAIgJAcIgpAAIA6ibIArAAIA6CbgAgTAVIAnAAIgUg5g')
    this.shape_21.setTransform(1296.425, 259.125)

    this.shape_22 = new cjs.Shape()
    this.shape_22.graphics
      .f('#0091B3')
      .s()
      .p('AAnBOIgKgcIg6AAIgJAcIgpAAIA6ibIArAAIA6CbgAgTAVIAnAAIgUg5g')
    this.shape_22.setTransform(1279.975, 259.125)

    this.shape_23 = new cjs.Shape()
    this.shape_23.graphics
      .f('#0091B3')
      .s()
      .p('AAyBOIAAhgIgiBgIgfAAIgjhhIAABhIglAAIAAibIAuAAIAqBsIAphsIAvAAIAACbg')
    this.shape_23.setTransform(1261.55, 259.125)

    this.shape_24 = new cjs.Shape()
    this.shape_24.graphics
      .f('#CCA57F')
      .s()
      .p('AgwBPIAAidIBhAAIAAAfIg7AAIAAAhIA1AAIAAAbIg1AAIAAAjIA7AAIAAAfg')
    this.shape_24.setTransform(1555.9, 371.475)

    this.shape_25 = new cjs.Shape()
    this.shape_25.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgiBIQgOgHgIgQQgIgPAAgXIAAhZIAlAAIAABZQAAAQAHAJQAHAHANABQANgBAHgHQAHgJAAgQIAAhZIAmAAIAABZQAAAXgIAPQgJAPgPAIQgPAIgSAAQgTAAgPgIg',
      )
    this.shape_25.setTransform(1541.775, 371.55)

    this.shape_26 = new cjs.Shape()
    this.shape_26.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AgmBGQgSgKgKgSQgKgTABgXQgBgWAKgTQAKgSASgKQARgKAXAAQAdAAAUAOQASAPAFAYIgoAAQgEgIgIgFQgJgFgLAAQgRAAgLAMQgLAMAAAUQAAAWALAMQAMAMAVAAQANAAAKgHQALgHADgOIguAAIAAgbIBOAAIAAAlQgEAOgKAMQgJALgQAIQgPAHgUAAQgWAAgSgKg',
      )
    this.shape_26.setTransform(1525.55, 371.475)

    this.shape_27 = new cjs.Shape()
    this.shape_27.graphics
      .f('#CCA57F')
      .s()
      .p('AAnBOIgKgcIg6AAIgJAcIgpAAIA6ibIArAAIA6CbgAgTAVIAnAAIgUg5g')
    this.shape_27.setTransform(1508.725, 371.525)

    this.shape_28 = new cjs.Shape()
    this.shape_28.graphics
      .f('#CCA57F')
      .s()
      .p(
        'AAUBPIghg8IgJAAIAAA8IgmAAIAAidIBAAAQASAAANAHQANAGAHALQAGAMAAAOQAAARgKALQgJAMgSAFIAlA+gAgWgGIAWAAQALAAAGgFQAFgFAAgKQAAgJgFgFQgGgGgLAAIgWAAg',
      )
    this.shape_28.setTransform(1493.55, 371.475)

    this.shape_29 = new cjs.Shape()
    this.shape_29.graphics
      .f('#CCA57F')
      .s()
      .p(
        'Ag7BPIAAidIA9AAQAcAAAPAOQAPAOAAAYQAAAOgHAMQgHAKgNAHQgMAHgTAAIgXAAIAAA3gAgVgGIAUAAQAWAAAAgUQAAgVgWAAIgUAAg',
      )
    this.shape_29.setTransform(1479.475, 371.475)

    this.shape_30 = new cjs.Shape()
    this.shape_30.graphics
      .f('#7278AD')
      .s()
      .p('AAeBPIAAhCIg7AAIAABCIgmAAIAAidIAmAAIAAA9IA7AAIAAg9IAmAAIAACdg')
    this.shape_30.setTransform(1454.45, 399.125)

    this.shape_31 = new cjs.Shape()
    this.shape_31.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgnBGQgRgKgKgSQgJgTAAgXQAAgWAJgTQAKgSARgKQARgKAXAAQAeAAATAQQAUAPAGAbIgoAAQgFgLgJgGQgKgGgMAAQgQAAgKAMQgLAMAAAUQAAAUALANQAKAMAQAAQAMAAAKgHQAJgGAFgKIAoAAQgGAagUAQQgTAQgeAAQgXAAgRgKg',
      )
    this.shape_31.setTransform(1437.85, 399.125)

    this.shape_32 = new cjs.Shape()
    this.shape_32.graphics
      .f('#7278AD')
      .s()
      .p('AgSBPIAAidIAlAAIAACdg')
    this.shape_32.setTransform(1426, 399.125)

    this.shape_33 = new cjs.Shape()
    this.shape_33.graphics
      .f('#7278AD')
      .s()
      .p('AAgBPIg/hgIAABgIgmAAIAAidIAmAAIA/BhIAAhhIAmAAIAACdg')
    this.shape_33.setTransform(1414.35, 399.125)

    this.shape_34 = new cjs.Shape()
    this.shape_34.graphics
      .f('#7278AD')
      .s()
      .p(
        'AgiBIQgOgIgIgPQgIgPAAgXIAAhaIAlAAIAABaQAAAQAHAJQAHAIANAAQANAAAHgIQAHgJAAgQIAAhaIAmAAIAABaQAAAXgIAPQgJAPgPAIQgPAHgSABQgTgBgPgHg',
      )
    this.shape_34.setTransform(1398.125, 399.2)

    this.shape_35 = new cjs.Shape()
    this.shape_35.graphics
      .f('#7278AD')
      .s()
      .p('AAyBOIAAhgIgiBgIgfAAIgihhIAABhIgnAAIAAibIAvAAIApBsIAqhsIAuAAIAACbg')
    this.shape_35.setTransform(1380.05, 399.175)

    this.shape_36 = new cjs.Shape()
    this.shape_36.graphics
      .f('#E93A45')
      .s()
      .p(
        'AgnBEQgRgNgBgXIAoAAQABAJAGAFQAFAFAHAAQAIAAAEgEQAEgEAAgHQAAgGgEgEQgEgEgFgCIgPgGIgZgKQgJgEgHgKQgHgJAAgPQAAgOAHgKQAHgLANgFQANgGAQAAQAZAAAQANQAPAMACAWIgpAAQgBgIgFgEQgEgFgHAAQgHAAgEAEQgEADAAAHQAAAGAEAEQADAEAGACIAPAGQAPAFAKAFQAJAEAHAKQAHAKAAAPQAAAMgGALQgHAKgMAHQgMAGgSAAQgZAAgSgNg',
      )
    this.shape_36.setTransform(1236.575, 462.125)

    this.shape_37 = new cjs.Shape()
    this.shape_37.graphics
      .f('#E93A45')
      .s()
      .p('AgSBPIAAidIAlAAIAACdg')
    this.shape_37.setTransform(1226.5, 462.175)

    this.shape_38 = new cjs.Shape()
    this.shape_38.graphics
      .f('#E93A45')
      .s()
      .p(
        'AAUBPIgig8IgJAAIAAA8IgmAAIAAidIBAAAQAUAAANAHQAMAGAHALQAGAMAAAOQAAARgKALQgJAMgSAFIAmA+gAgXgGIAYAAQALAAAFgFQAGgFgBgKQABgJgGgFQgFgGgLAAIgYAAg',
      )
    this.shape_38.setTransform(1216.2, 462.175)

    this.shape_39 = new cjs.Shape()
    this.shape_39.graphics
      .f('#E93A45')
      .s()
      .p('AAnBOIgKgcIg6AAIgJAcIgpAAIA6ibIArAAIA6CbgAgTAVIAnAAIgUg5g')
    this.shape_39.setTransform(1200.475, 462.225)

    this.shape_40 = new cjs.Shape()
    this.shape_40.graphics
      .f('#E93A45')
      .s()
      .p(
        'Ag7BPIAAidIA9AAQAcAAAPAOQAPAOAAAYQAAAOgHAMQgHAKgNAHQgMAHgTAAIgXAAIAAA3gAgVgGIAUAAQAWAAAAgUQAAgVgWAAIgUAAg',
      )
    this.shape_40.setTransform(1185.725, 462.175)

    this.shape_41 = new cjs.Shape()
    this.shape_41.graphics
      .f('#F8692A')
      .s()
      .p('AAgBPIg/hgIAABgIgmAAIAAidIAmAAIA/BhIAAhhIAmAAIAACdg')
    this.shape_41.setTransform(1216.2, 293.875)

    this.shape_42 = new cjs.Shape()
    this.shape_42.graphics
      .f('#F8692A')
      .s()
      .p(
        'AgoBGQgRgKgLgSQgLgTAAgXQAAgWALgTQALgSARgKQATgLAVAAQAWAAASALQATAKAKASQALATAAAWQAAAXgLATQgLASgSAKQgSALgWAAQgVAAgTgLgAgcggQgMAMAAAUQAAAVAMAMQAKAMASAAQASAAALgMQALgMAAgVQAAgUgLgMQgLgMgSAAQgSAAgKAMg',
      )
    this.shape_42.setTransform(1199.2, 293.825)

    this.shape_43 = new cjs.Shape()
    this.shape_43.graphics
      .f('#F8692A')
      .s()
      .p(
        'AhGBPIAAidIA8AAQAYAAATAKQASAKAKASQAKASAAAWQAAAXgKASQgKASgSAKQgTAKgYAAgAggAtIASAAQAWAAAMgMQAMgMAAgVQAAgVgMgLQgMgMgWAAIgSAAg',
      )
    this.shape_43.setTransform(1182.625, 293.875)

    this.shape_44 = new cjs.Shape()
    this.shape_44.graphics
      .f('#F8692A')
      .s()
      .p('AAgBPIg/hgIAABgIgmAAIAAidIAmAAIA/BhIAAhhIAmAAIAACdg')
    this.shape_44.setTransform(1165.8, 293.875)

    this.shape_45 = new cjs.Shape()
    this.shape_45.graphics
      .f('#F8692A')
      .s()
      .p(
        'AgoBGQgSgKgKgSQgLgTAAgXQAAgWALgTQAKgSASgKQATgLAVAAQAWAAASALQASAKALASQALATAAAWQAAAXgLATQgLASgSAKQgSALgWAAQgVAAgTgLgAgcggQgMAMAAAUQAAAVAMAMQAKAMASAAQASAAALgMQALgMAAgVQAAgUgLgMQgLgMgSAAQgSAAgKAMg',
      )
    this.shape_45.setTransform(1148.8, 293.825)

    this.shape_46 = new cjs.Shape()
    this.shape_46.graphics
      .f('#F8692A')
      .s()
      .p('AgsBPIAAidIAnAAIAACAIAxAAIAAAdg')
    this.shape_46.setTransform(1135.15, 293.875)

    this.shape_47 = new cjs.Shape()
    this.shape_47.graphics
      .f('#FE9544')
      .s()
      .p('AAgBPIg/hgIAABgIgmAAIAAidIAmAAIA/BhIAAhhIAmAAIAACdg')
    this.shape_47.setTransform(1097.3, 260.175)

    this.shape_48 = new cjs.Shape()
    this.shape_48.graphics
      .f('#FE9544')
      .s()
      .p('AgSBPIAAidIAlAAIAACdg')
    this.shape_48.setTransform(1085.65, 260.175)

    this.shape_49 = new cjs.Shape()
    this.shape_49.graphics
      .f('#FE9544')
      .s()
      .p('AgrBPIAAidIAlAAIAACAIAzAAIAAAdg')
    this.shape_49.setTransform(1077.6, 260.175)

    this.shape_50 = new cjs.Shape()
    this.shape_50.graphics
      .f('#FE9544')
      .s()
      .p(
        'Ag+BPIAAidIBHAAQAYAAANALQANAKAAAUQAAAOgHAJQgIAKgMADQAOACAIALQAJAKAAAOQAAAUgOALQgNAMgZAAgAgYAwIAbAAQAVAAAAgSQAAgIgGgFQgFgFgLAAIgaAAgAgYgNIAYAAQAUAAAAgRQAAgRgUAAIgYAAg',
      )
    this.shape_50.setTransform(1064.725, 260.175)

    this.shape_51 = new cjs.Shape()
    this.shape_51.graphics
      .f('#FE9544')
      .s()
      .p(
        'AgiBIQgOgIgIgPQgIgPAAgXIAAhaIAlAAIAABaQAAAQAHAIQAHAJANAAQANAAAHgJQAHgIAAgQIAAhaIAmAAIAABaQAAAXgIAPQgJAPgPAIQgPAHgSAAQgTAAgPgHg',
      )
    this.shape_51.setTransform(1049.225, 260.25)

    this.shape_52 = new cjs.Shape()
    this.shape_52.graphics
      .f('#FE9544')
      .s()
      .p(
        'AhGBPIAAidIA8AAQAYAAATAKQASAKAKASQAKASAAAWQAAAXgKASQgKASgSAKQgTAKgYAAgAggAtIASAAQAWAAAMgMQAMgMAAgVQAAgVgMgLQgMgMgWAAIgSAAg',
      )
    this.shape_52.setTransform(1033.675, 260.175)

    this.shape_53 = new cjs.Shape()
    this.shape_53.graphics
      .f('#66CCCC')
      .s()
      .p('AAnBOIgKgcIg6AAIgJAcIgpAAIA6ibIArAAIA6CbgAgTAVIAnAAIgUg5g')
    this.shape_53.setTransform(393.525, 254.575)

    this.shape_54 = new cjs.Shape()
    this.shape_54.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgnBEQgRgNgBgXIAoAAQABAJAGAFQAFAFAHAAQAIAAAEgEQAEgEAAgHQAAgGgEgEQgEgEgFgCIgPgGIgZgKQgJgEgHgKQgHgJAAgPQAAgOAHgKQAHgLANgFQANgGAQAAQAZAAAQANQAPAMACAWIgpAAQgBgIgFgEQgEgFgHAAQgHAAgEAEQgEADAAAHQAAAGAEAEQADAEAGACIAPAGQAPAFAKAFQAJAEAHAKQAHAKAAAPQAAAMgGALQgHAKgMAHQgMAGgSAAQgZAAgSgNg',
      )
    this.shape_54.setTransform(378.475, 254.475)

    this.shape_55 = new cjs.Shape()
    this.shape_55.graphics
      .f('#66CCCC')
      .s()
      .p(
        'AgiBIQgOgIgIgPQgIgQAAgVIAAhaIAlAAIAABaQAAAPAHAIQAHAJANgBQANABAHgJQAHgIAAgPIAAhaIAmAAIAABaQAAAVgIAQQgJAPgPAIQgPAHgSAAQgTAAgPgHg',
      )
    this.shape_55.setTransform(363.825, 254.6)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {t: this.shape_55},
            {t: this.shape_54},
            {t: this.shape_53},
            {t: this.shape_52},
            {t: this.shape_51},
            {t: this.shape_50},
            {t: this.shape_49},
            {t: this.shape_48},
            {t: this.shape_47},
            {t: this.shape_46},
            {t: this.shape_45},
            {t: this.shape_44},
            {t: this.shape_43},
            {t: this.shape_42},
            {t: this.shape_41},
            {t: this.shape_40},
            {t: this.shape_39},
            {t: this.shape_38},
            {t: this.shape_37},
            {t: this.shape_36},
            {t: this.shape_35},
            {t: this.shape_34},
            {t: this.shape_33},
            {t: this.shape_32},
            {t: this.shape_31},
            {t: this.shape_30},
            {t: this.shape_29},
            {t: this.shape_28},
            {t: this.shape_27},
            {t: this.shape_26},
            {t: this.shape_25},
            {t: this.shape_24},
            {t: this.shape_23},
            {t: this.shape_22},
            {t: this.shape_21},
            {t: this.shape_20},
            {t: this.shape_19},
            {t: this.shape_18},
            {t: this.shape_17},
            {t: this.shape_16},
            {t: this.shape_15},
            {t: this.shape_14},
            {t: this.shape_13},
            {t: this.shape_12},
            {t: this.shape_11},
            {t: this.shape_10},
            {t: this.shape_9},
            {t: this.shape_8},
            {t: this.shape_7},
            {t: this.shape_6},
            {t: this.shape_5},
            {t: this.shape_4},
            {t: this.shape_3},
            {t: this.shape_2},
            {t: this.shape_1},
            {t: this.shape},
          ],
        })
        .wait(1),
    )

    // caches gris
    this.instance = new lib.cachegris()
    this.instance.setTransform(1325.25, 258.5, 1.6908, 1, 0, 0, 0, 45, 11.3)

    this.instance_1 = new lib.cachegris()
    this.instance_1.setTransform(1180.8, 294.35, 1, 1, 0, 0, 0, 45, 11.3)

    this.instance_2 = new lib.cachegris()
    this.instance_2.setTransform(1066.25, 260, 1, 1, 0, 0, 0, 45, 11.3)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {t: this.instance_2},
            {t: this.instance_1},
            {t: this.instance},
          ],
        })
        .wait(1),
    )

    // points
    this.usa = new lib.usa()
    this.usa.name = 'usa'
    this.usa.setTransform(117.45, 360, 1.0602, 1.0602, 180, 0, 0, 18.9, 15.1)

    this.usa_1 = new lib.usa()
    this.usa_1.name = 'usa_1'
    this.usa_1.setTransform(377.3, 285.55, 1.0602, 1.0602, 0, 0, 0, 18.9, 15.1)

    this.madrid = new lib.madrid()
    this.madrid.name = 'madrid'
    this.madrid.setTransform(1074.8, 630.3, 1.0602, 1.0602, 0, 0, 0, 18.9, 16.6)

    this.warsaw = new lib.warsaw()
    this.warsaw.name = 'warsaw'
    this.warsaw.setTransform(1330.9, 307.7, 1.0602, 1.0602, 180, 0, 0, 16.8, 15)

    this.munich = new lib.munich()
    this.munich.name = 'munich'
    this.munich.setTransform(
      1413.4,
      430.65,
      1.0602,
      1.0602,
      0,
      0,
      0,
      17.2,
      14.3,
    )

    this.milan = new lib.milan()
    this.milan.name = 'milan'
    this.milan.setTransform(
      1374.65,
      504.85,
      1.0602,
      1.0602,
      0,
      0,
      0,
      16.6,
      13.2,
    )

    this.paris = new lib.paris()
    this.paris.name = 'paris'
    this.paris.setTransform(1206.45, 429.6, 1.0602, 1.0602, 0, 0, 0, 13.3, 16.3)

    this.london = new lib.london()
    this.london.name = 'london'
    this.london.setTransform(
      1170.75,
      328.4,
      1.0602,
      1.0602,
      0,
      0,
      0,
      18.7,
      14.9,
    )

    this.dublin = new lib.dublin()
    this.dublin.name = 'dublin'
    this.dublin.setTransform(
      1056.35,
      290.45,
      1.0602,
      1.0602,
      0,
      0,
      0,
      13.9,
      16.1,
    )

    this.prague = new lib.copiecerclesviolet2()
    this.prague.name = 'prague'
    this.prague.setTransform(1515.5, 400.15, 1.2193, 1.2193, 0, 0, 0, -4.3, 13)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {t: this.prague},
            {t: this.dublin},
            {t: this.london},
            {t: this.paris},
            {t: this.milan},
            {t: this.munich},
            {t: this.warsaw},
            {t: this.madrid},
            {t: this.usa_1},
            {t: this.usa},
          ],
        })
        .wait(1),
    )

    // lignes
    this.instance_3 = new lib.lignes()
    this.instance_3.setTransform(
      1193.2,
      542.2,
      1.0602,
      1.0602,
      0,
      0,
      0,
      88.8,
      76.5,
    )
    this.instance_3.alpha = 0.5703

    this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1))

    // Calque_3
    this.instance_4 = new lib.cartissa()
    this.instance_4.setTransform(0, -137)

    this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1))

    this._renderFirstFrame()
  }).prototype = p = new lib.AnMovieClip()
  p.nominalBounds = new cjs.Rectangle(922.5, 823, 997.5, 960)
  // library properties:
  lib.properties = {
    id: '75E0C7C39499C6409F115355863EC003',
    width: 1845,
    height: 1920,
    fps: 24,
    color: '#FFFFFF',
    opacity: 1.0,
    manifest: [
      {src: require('./carte1_atlas_P_1.png'), id: 'carte1_atlas_P_1'},
    ],
    preloads: [],
  }

  // bootstrap callback support:
  ;(lib.Stage = function(canvas) {
    createjs.Stage.call(this, canvas)
  }).prototype = p = new createjs.Stage()

  p.setAutoPlay = function(autoPlay) {
    this.tickEnabled = autoPlay
  }
  p.play = function() {
    this.tickEnabled = true
    this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())
  }
  p.stop = function(ms) {
    if (ms) this.seek(ms)
    this.tickEnabled = false
  }
  p.seek = function(ms) {
    this.tickEnabled = true
    this.getChildAt(0).gotoAndStop((lib.properties.fps * ms) / 1000)
  }
  p.getDuration = function() {
    return (this.getChildAt(0).totalFrames / lib.properties.fps) * 1000
  }

  p.getTimelinePosition = function() {
    return (this.getChildAt(0).currentFrame / lib.properties.fps) * 1000
  }

  an.bootcompsLoaded = an.bootcompsLoaded || []
  if (!an.bootstrapListeners) {
    an.bootstrapListeners = []
  }

  an.bootstrapCallback = function(fnCallback) {
    an.bootstrapListeners.push(fnCallback)
    if (an.bootcompsLoaded.length > 0) {
      for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
        fnCallback(an.bootcompsLoaded[i])
      }
    }
  }

  an.compositions = an.compositions || {}
  an.compositions['75E0C7C39499C6409F115355863EC003'] = {
    getStage: function() {
      return exportRoot.stage
    },
    getLibrary: function() {
      return lib
    },
    getSpriteSheet: function() {
      return ss
    },
    getImages: function() {
      return img
    },
  }

  an.compositionLoaded = function(id) {
    an.bootcompsLoaded.push(id)
    for (var j = 0; j < an.bootstrapListeners.length; j++) {
      an.bootstrapListeners[j](id)
    }
  }

  an.getComposition = function(id) {
    return an.compositions[id]
  }

  an.makeResponsive = function(
    isResp,
    respDim,
    isScale,
    scaleType,
    domContainers,
  ) {
    var lastW,
      lastH,
      lastS = 1
    window.addEventListener('resize', resizeCanvas)
    resizeCanvas()
    function resizeCanvas() {
      var w = lib.properties.width,
        h = lib.properties.height
      var iw = window.innerWidth,
        ih = window.innerHeight
      var pRatio = window.devicePixelRatio || 1,
        xRatio = iw / w,
        yRatio = ih / h,
        sRatio = 1
      if (isResp) {
        if (
          (respDim == 'width' && lastW == iw) ||
          (respDim == 'height' && lastH == ih)
        ) {
          sRatio = lastS
        } else if (!isScale) {
          if (iw < w || ih < h) sRatio = Math.min(xRatio, yRatio)
        } else if (scaleType == 1) {
          sRatio = Math.min(xRatio, yRatio)
        } else if (scaleType == 2) {
          sRatio = Math.max(xRatio, yRatio)
        }
      }
      domContainers[0].width = w * pRatio * sRatio
      domContainers[0].height = h * pRatio * sRatio
      domContainers.forEach(function(container) {
        container.style.width = w * sRatio + 'px'
        container.style.height = h * sRatio + 'px'
      })
      stage.scaleX = pRatio * sRatio
      stage.scaleY = pRatio * sRatio
      lastW = iw
      lastH = ih
      lastS = sRatio
      stage.tickOnUpdate = false
      stage.update()
      stage.tickOnUpdate = true
    }
  }
  an.handleSoundStreamOnTick = function(event) {
    if (!event.paused) {
      var stageChild = stage.getChildAt(0)
      if (!stageChild.paused) {
        stageChild.syncStreamSounds()
      }
    }
  }
})(window.createjs, (window.AdobeAn = window.AdobeAn || {}))
