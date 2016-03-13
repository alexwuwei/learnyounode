var net = require('net');

function doTime(n) { return n < 10 ? '0' + n : n }

var server = net.createServer(function(socket) {
  d = new Date();
  s = d.getFullYear() + '-'
    + doTime(d.getMonth() + 1) + '-'
    + doTime(d.getDate()) + ' '
    + doTime(d.getHours()) + ':'
    + doTime(d.getMinutes()) + '\n';
  socket.end(s);
});
server.listen(process.argv[2]);
