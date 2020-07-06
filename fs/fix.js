const fs = require('fs');
const path = require('path');

fs.mkdir(
    path.join(__dirname, 'new'),
    err => {
        if (err) throw err;

        console.log('mkdir');

        fs.writeFile(
            path.join(__dirname, 'new', 'kek.txt'),
            'hello kek',
            err => {
                if (err) throw err;

                console.log('write');

                fs.appendFile(
                    path.join(__dirname, 'new', 'kek.txt'),
                    'append file kek',
                    err => {
                        if (err) throw err;

                        console.log('append');

                        fs.readFile(
                            path.join(__dirname, 'new', 'kek.txt'),
                            'utf8',
                            (err, data) => {
                                if (err) throw err;

                                console.log(data);

                                fs.rename(
                                    path.join(__dirname, 'new', 'kek.txt'),
                                    path.join(__dirname, 'new', 'rename.txt'),
                                    err => {
                                        if (err) throw err;

                                        console.log('rename');
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