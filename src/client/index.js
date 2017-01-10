import grab from './do-you-grabber'
import { music } from './music'


grab().then(url => {
  music.load(url)
  music.play()
})

let socket = io()

socket.on('hotword', function(msg) {
  console.log('Hotword activated!');
  document.querySelector('h1').textContent = 'Hotword activated! shutting down in 3 seconds...';
  document.querySelector('iframe').remove()
  setTimeout(function() {
    closeWindow();
  }, 3000);
});

function closeWindow() {
  // Nightmare is monitoring for this class to shutdown window.
  document.body.classList.add('close');
}
