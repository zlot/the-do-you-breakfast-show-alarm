import insertWidget from './mixcloud-widget'

let music = (() => {

  let hasHadFirstPlay = false
  let widget

  return {
    load: url => {
      widget = insertWidget(url)
    },

    play: () => {
      if(!widget) {
        console.error('Mixcloud has not been set! Please call load() with url to the cloudcast.')
        return
      }

      widget.ready.then(() => {
        if(!hasHadFirstPlay) {
          widget.events.play.on(onPlay)

          function onPlay() {
            seekTo.call(this, 17) // magic number, explain
            widget.events.play.off(onPlay)
          }
          function seekTo(seconds) {
            widget.seek(seconds)
          }
          hasHadFirstPlay = true
        }

        widget.play()
      })
    },

    pause: () => {
      if(!widget) {
        console.error('Mixcloud has not been set! Please call set() with url to cloudcast.')
        return
      }

      widget.pause()
    }
  }

})()

export { music }
