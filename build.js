var exec = require('child_process').exec,
    path= require('path'),
    cmd = 'gitbook build -o book --config book.json ' + path.normalize('./src'),
    cb = function (err, stdout, stderr) {
        if (err) {
            console.log('Error: ' + err);
        } else {
            console.log(stdout);
            console.log(stderr);
        }
    }

exec(cmd, cb);
