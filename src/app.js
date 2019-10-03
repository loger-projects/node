import http from 'http'

const host='127.0.0.1'
const port = 3030

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.write('oke')
  res.end()
})

server.listen(port, host, () => {})
