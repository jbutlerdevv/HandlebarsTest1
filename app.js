const express = require('express');
const bodyParser = require('body-parser');
const handleBars = require('express-handlebars').create({defaultLayout: 'main'});
const sqlite3 = require('sqlite3').verbose();

//Database Connection
// open database in memory
const db = new sqlite3.Database('./testdb.sqlite3', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to database.');
});
// close the database connection
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});



const app = express();

//Configuration Setup
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: false}));
app.engine('handlebars', handleBars.engine);
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 8080);


//Routes
app.get('/', (req, res) => {
  res.render('home')
})
app.get('/home', (req, res) => {
  res.render('home')
})
app.get('/beer-wine', (req, res) => {
  res.render('beer-wine')
})
app.get('/create', (req, res) => {
  res.render('create')
}) 
app.get('/liquor', (req, res) => {
  res.render('liquor')
})
app.get('/misc', (req, res) => {
  res.render('misc')
})

//POST request
app.post('/', (req, res, next) => {
    console.log(results);
})













//Listen On...
app.listen(8080, () => {
  console.log('Server is Running!')
})
