const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hey, girl... you did it!')
});

app.get('/tea', (req, res) => {
  res.set('X-awesome-header', 'catcatcat');
  res.status(418);
  res.send('tea is awesome');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
