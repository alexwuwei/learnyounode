var fs = require('fs');
var directory = process.argv[2];
var extension = process.argv[3];
var path = RegExp('\\.' + extension + '$');

file = fs.readdir(directory, function(err, files) {
  for (var i = 0; i < files.length; i++) {
    if (path.test(files[i])) {
      console.log(files[i]);
    }
  }
});
