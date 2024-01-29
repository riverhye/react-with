const http = require('http');
const express = require('express');
const app = express();
const PORT = 8000;
const server = http.createServer(app);
const session = require('express-session');

const cors = require('cors');
app.use(cors({ origin: true, credentials: true }));

// 로그인 세션
app.use(
  session({
    secret: 'secretKey',
    resave: false,
    saveUninitialized: true,
  })
);

app.use('/static', express.static('static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const router = require('./routes');
app.use('/', router);

// app.get('*', function (req, res) {
//   res.send('404');
// });

server.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
