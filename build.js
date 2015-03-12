var exec = require('child_process').exec,
    sep = require('path').sep,
    cmd = 'gitbook build -o book --config book.json .' + sep + 'src',
    cb = function (err, stdout, stderr) {
        if (err) {
            console.log('Error: ' + err);
        } else {
            console.log(stdout);
            console.log(stderr);
        }
    }

exec(cmd, cb);
