const htm = require('express').Router();
const path = require('path');

//show note taker page 
htm.get('/notes', (req, res) =>{
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

//show landing page 
htm.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);


module.exports = htm;
