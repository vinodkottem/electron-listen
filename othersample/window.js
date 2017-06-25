$(function () {
var electron = require('electron')
var display = electron.screen.getPrimaryDisplay()  // http://electron.atom.io/docs/api/screen
var constraints = {
  video: {
    width: {
      ideal: display.size.width
    },
    height: {
      ideal: display.size.height
    }
  }
}
// https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
  var video = document.querySelector('video')
  video.srcObject = stream
}).catch(function (error) {
  console.error(error)
})

})
