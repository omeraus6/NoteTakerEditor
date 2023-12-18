const tips = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
//const uuid = require('../helpers/uuid');
const termData = require('../db/db.json');
const fs = require('fs');
const path = require('path')



// GET Route for retrieving all the tips
tips.get('/notes', (req, res) => {
 // res.sendFile(path.join(__dirname, '../db/db.json'));


  console.info(`${req.method} request received for tips`);
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  //res.sendFile(path.join(__dirname, '../db/db.json'));
  //res.json(termData.slice(1));
 // fs.readFile("db/db.json","utf8", (err, data) => {
    // if (err) throw err;
     //  var notes = JSON.parse(data);
   // res.json(notes);});


});

// POST Route for a new UX/UI tip
tips.post('/notes', (req, res) => {
  //let db = fs.readFileSync('db/db.json');
    //db = JSON.parse(db);
    //res.json(db);
    // creating body for note
    //let userNote = {
     // title: req.body.title,
     // text: req.body.text,
      // creating unique id for each note
      //id: uniqid(),
   // };
    // pushing created note to be written in the db.json file
    //db.push(userNote);
    //fs.writeFileSync('db/db.json', JSON.stringify(db));
    //res.json(db);



  console.info(`${req.method} request received to add a tip`);
  console.log(req.body);

  const { title, text } = req.body;

  if (req.body) {
    const newTip = {
      title,
      text,
      //tip_id: uuid(),
    };

    readAndAppend(newTip, './db/db.json');
    res.json(`Tip added successfully`);
 } else {
    res.error('Error in adding tip');
 }
});

module.exports = tips;

