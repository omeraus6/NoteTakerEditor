const api = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');
const fs = require('fs');



// GET Route to select all notes in db.json 
api.get('/notes', (req, res) => {
 
  console.info(`${req.method} request received for note`);
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));

});

// POST Route to add new record to db.json
api.post('/notes', (req, res) => {

  console.info(`${req.method} request received to add a Notes`);
  console.log(req.body);

  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      id: uuid(),
    };

    readAndAppend(newNote, './db/db.json');
    res.json(`Note added successfully`);
 } else {
    res.error('Error in adding Note');
 }


});

api.delete('/notes/:id', (req, res) => {
  // reading notes form db.json
  let db = JSON.parse(fs.readFileSync('./db/db.json'));
  // removing note with id
  let deleteNotes = db.filter(item => item.id !== req.params.id);
  // Rewriting note to db.json
  fs.writeFileSync('./db/db.json', JSON.stringify(deleteNotes));
  res.json(deleteNotes);
  
});

module.exports = api;

