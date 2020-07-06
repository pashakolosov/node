const fs = require('fs');
const path = require('path');

fs.mkdir(
    path.join(__dirname, 'kek'),
    err => {
        if (err) throw err;
        
        console.log('mkdir');

        fs.write(
            path.join(__dirname, 'kek', 'kek.txt'),
            'hello Kek',
            err => {
                if (err) throw err;

                console.log('write');

                fs.appendFile(
                    path.join(__dirname, 'kek', 'kek.txt'),
                    '\n append kek',
                    err => {
                        if (err) throw err;

                        console.log('append');

                        fs.readFile(
                            path.join(__dirname, 'kek', 'kek.txt'),
                            err,
                            data => {
                                if (err) throw err;

                                console.log('read');
                                console.log('data')

                                fs.rename(
                                    path.join(__dirname, 'kek', 'kek.txt'),
                                    path.join(__dirname, 'kek', 'renamed.txt'),
                                    err => {
                                        if (err) throw err;

                                        console.log('renamed')

                                        console.log()
                                    }
                                )
                            }
                        )
                    }
                )
            }
        )
    }
)