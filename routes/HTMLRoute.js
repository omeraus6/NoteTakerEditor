const htm = require('express').Router();
const path = require('path');


htm.get('/notes', (req, res) =>{
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

htm.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);


module.exports = htm;
