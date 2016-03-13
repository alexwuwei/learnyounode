var http = require('http');
var mapping = require('through2-map');
var port = process.argv[2];

var upperCase = mapping(function(chunk) {
  return chunk.toString().toUpperCase();
});

var server = http.createServer(function(req, res) {
  if (req.method === 'POST') {
    req.pipe(upperCase).pipe(res);
  }
});
server.listen(port);
