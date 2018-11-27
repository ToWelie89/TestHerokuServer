console.log('start')

var io = require('socket.io')(80);

io.on('connection', function (socket) {
  socket.emit('kekistan', { msg: 'testtttttttttt' });
});