function socketService(server) {
  const { Server } = require('socket.io')
  const io = new Server(server)

  io.on('connection', (socket) => {
    console.log('a user connected')

    socket.on('chat-msg', (msg) => {
      console.log(msg)
      if (socket.topic) {
        io.in(socket.topic).emit('new-msg', msg)
        return
      }
      io.emit('new-msg', msg)
    })

    socket.on('chat-topic', (topic) => {
      if (socket.topic) socket.topic = null
      socket.topic = topic
      console.log('socket:', socket)
      socket.join(topic)
    })
    socket.on('disconnect', () => {
      console.log('user disconnected')
    })
  })
}

module.exports = socketService
