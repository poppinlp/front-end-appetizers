var exec = require('child_process').exec,
    cmd = 'gitbook build -o book --config config.json',
    cb = function (err, stdout, stderr) {
        if (err) {
            console.log('Error: ' + err);
        } else {
            console.log(stdout);
            console.log(stderr);
        }
    }

exec(cmd, cb);
