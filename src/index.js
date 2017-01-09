import grab from './do-you-grabber'
import { music } from './music'


grab().then(url => {

  music.load(url)
  music.play()

})
