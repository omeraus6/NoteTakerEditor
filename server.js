const express = require('express');
const api = require('./routes/indexRoute.js');

//const htm = require('./routes/HTMLRoute.js');
//const api = require('./routes/ApiRoute.js');


const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static('public'));

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', api);
//app.use('/api', api);




app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
