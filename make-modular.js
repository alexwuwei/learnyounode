var modLib = require(__dirname + '/mod-lib.js');

var dirname = process.argv[2];
var ext = process.argv[3];

modLib(dirname, ext, function(err, files){
  for (var i = 0; i < files.length; i++) {
    console.log(files[i]);
  }
});
