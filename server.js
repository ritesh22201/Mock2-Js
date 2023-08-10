const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
require('dotenv').config();
const cors = require('cors');
const middlewares = jsonServer.defaults()

server.use(cors());
server.use(middlewares);
server.use(router);

server.listen(process.env.port, () => {
  console.log(`JSON Server is running at port ${process.env.port}`);
})

