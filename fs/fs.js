const fs = require('fs');
const path = require('path');

fs.appendFile(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    '\n append file',
    err => {
        if (err) throw err;
        
        console.log('file has been appended..')

        fs.readFile(
            path.join(__dirname, 'notes', 'mynotes.txt'),
            'utf8',
            (err, data) => {
                if (err) throw err;

                console.log('file has been reading');
                console.log(data)

                fs.rename(
                    path.join(__dirname, 'notes', 'mynotes.txt'),
                    path.join(__dirname, 'notes', 'notes.txt'),
                    err => {
                        if (err) throw err;

                        console.log('file has been renamed');

                        fs.unlink(
                            path.join(__dirname, 'notes', 'notes.txt'),
                            err => {
                                if (err) throw err;

                                console.log('file has been deleted..')
                            }
                        )
                    }
                )
            }
        )
    }
)
    