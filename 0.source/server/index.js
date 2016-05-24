const express = require('express');
const app = express();

const env = {
  port : 3000
};

const wwwPath = __dirname + '/../../www/';
app.use('/', express.static(wwwPath));

app.listen(3000, () => {
  console.log(`server is running at port ${env.port}`);
});
