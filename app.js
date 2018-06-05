const express = require('express');
const bodyParser = require('body-parser');
const handleBars = require('express-handlebars').create({defaultLayout: 'main'});

const app = express();

//Configuration Setup
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.engine('handlebars', handleBars.engine);
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 8080);

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



app.listen(8080, () => {
  console.log('Server is Running!')
})
