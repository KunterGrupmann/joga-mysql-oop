const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

const articleControllerClass = require('./controllers/articles');
const articleController = new articleControllerClass()

const articleRoutes = require('./routes/articles');
app.use('/', articleRoutes);

app.listen(3000, function() {
    console.log('App listening on port 3000!');
});