addEventListener('message', function (e) {
  console.log(e)
  postMessage('You said: ' + e.data);
  self.close();
}, false);