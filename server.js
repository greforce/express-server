const express = require('express');
const cors = require('cors');
const myip = require('my-local-ip');

const app = express();
app.use(cors());

app.get('/apitest', (req, res) => {
  res.status(500);
  res.send('here is very simple reply from simple server!');
});

app.listen(8888);
console.log('server is running!')
console.log('local ip4', myip());
