const express = require('express');
const app = express();
const server = require('http');
const httpProxy = require('http-proxy');
const appServer = server.createServer(app);
const apiProxy = httpProxy.createProxyServer(app);

const wsProxy = httpProxy.createProxyServer({
    target: process.env.WEBSOCKET_HOST || 'http://localhost:6000', ws: true,
});

apiProxy.on('error', (err, req, res) => {
  console.log(err);
  // res.statusCode(500).send('Internal Server Error :(');		     
  res.send({
    error: err,
  })
  // res.status(500).send('Internal Server Error :(');
});		

wsProxy.on('error', (err, req, socket) => {
    console.log(err);
    console.log('web socket failed');
    socket.end();
})

const authHost = process.env.AUTH_HOST || "http://localhost:3001";
console.log(`Auth end proxies to: ${authHost}`)
app.all("/auth*", (req, res) => {
  apiProxy.web(req, res, {target: authHost});
})

// const messengerHost = process.env.MESSANGER_HOST || 'http://localhost:5000';
// console.log(`Messanger end proxies to: ${messengerHost}`);
// app.all('/messages*', (req, res) => {
//   apiProxy.web(req, res, { target: messengerHost });
// });

const websocketHost = process.env.WEBSOCKET_HOST || 'http://localhost:6000/websocket';
console.log(`WebSocket end proxies to: ${websocketHost}`);
app.all('/websocket*', (req, res) => {
  console.log('incoming ws');
  apiProxy.web(req, res, { target: websocketHost });
});

appServer.on('upgrade', (req, socket, head) => {
    console.log('upgrade ws here');
    wsProxy.ws(req, socket, head);
  });


const fronEndHost = process.env.FRONT_END_HOST || 'http://localhost:3000';
console.log(`Front end proxies to: ${fronEndHost}`);
app.all('/*', (req, res) => {
// for frontend
apiProxy.web(req, res, { target: fronEndHost });
});

const userHost = process.env.USER_HOST || 'http://localhost:3002';
console.log(`User end proxies to: ${userHost}`);
app.all('/profile/*', (req, res) => {
  apiProxy.web(req, res, { target: userHost });
});

appServer.listen(4001);
console.log('Gateway started');