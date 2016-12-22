const express = require('express');
const path = require('path');
const port = process.env.PORT || 8081;
const app = express();
const DIST_DIR = path.resolve(__dirname, "dist");

app.use(express.static(DIST_DIR));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(DIST_DIR, 'index.html'))
});

app.listen(port);
console.log('Server started');
