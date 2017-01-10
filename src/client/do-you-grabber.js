import request from 'superagent'
import getSample from 'lodash.sample'

// search for do you!! cloudcasts
let url = 'https://api.mixcloud.com/search/?q=do+you+breakfast+show&type=cloudcast&limit=100'

export default function grab() {
  return new Promise((resolve, reject) => {
    request.get(url, (err, res) => {
      if(err) throw err
      
      let result = JSON.parse(res.text)
      let randomUrl = getSample(result.data).url
      resolve(randomUrl)
    })
  })
}
