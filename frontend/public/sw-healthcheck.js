self.addEventListener('message', (event) => {
  if (event.data === 'ping') {
    event.ports[0].postMessage('pong')
  }
})
