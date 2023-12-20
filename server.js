const express = require('express');
const api = require('./routes/index.js');


const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static('public'));

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', api);


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
