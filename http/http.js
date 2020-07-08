const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    console.log(req.url)
  if (req.method === 'GET') {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})

    switch (req.url) {
        case '/':
            fs.readFile(
                path.join(__dirname, 'views', 'index.html'),
                'utf-8',
                (err, content) => {
                    if (err) throw err

                    res.end(content)
                }
            )
            break
        case '/favicon.ico':
            res.writeHead(200, {'Content-Type': 'image/x-icon'} )
            res.end()
            console.log('favicon requested')
            break
        case '/about':
            fs.readFile(
                path.join(__dirname, 'views', 'about.html'),
                'utf-8',
                (err, content) => {
                    if (err) throw err

                    res.end(content)
                }
            )
            break
        case '/api/users':
            res.writeHead(200, {'Content-Type': 'text/json'})

            const users = [
                {name: 'Pasha', age:20},
                {name: 'Vasya', age: 22}
            ]

            res.end(JSON.stringify(users))
            break
    }

   
} else if (req.method === 'POST') {
    const body = []
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf8'
    })

    req.on('data', data => {
      body.push(Buffer.from(data))
    })

    req.on('end', () => {
      const message = body.toString().split('=')[1]

      res.end(`
        <h1>Ваше сообщение: ${message}</h1>
      `)
    })
  }
})

server.listen(3000, () => {
  console.log('Server is running...')
}) 