const express = require('express');

const app = express();
port = 3003;

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Listening on localhost:${port}`);
})