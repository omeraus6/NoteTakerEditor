const htm = require('express').Router();
const path = require('path');
const { readFromFile } = require('../helpers/fsUtils');
const termData = require('../db/db.json');
const fs = require('fs');
const { json } = require('express');





htm.get('/notes', (req, res) =>{
  res.sendFile(path.join(__dirname, '../public/notes.html'));
  //readFromFile('./db/db.json').then((data) => res.json(JSON.stringify(data)));
  //res.send(path.join(__dirname, '../db/db.json'));
  //res.json(JSON.stringify(data));
  //res.json(termData.slice(1));

});

htm.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);


module.exports = htm;
