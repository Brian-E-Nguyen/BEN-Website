const express = require('express');
const ejsMate = require('ejs-mate');
const path = require('path')
const app = express();
const PORT = 3000;

// Middleware
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + "/public"));

// Routes
app.get('/', (req, res) => {
    res.render('main/home.ejs')
});

app.get('/about-me', (req, res) => {
    res.render('main/about.ejs')
});

app.get('/portfolio', (req, res) => {
    res.render('main/portfolio.ejs')
});

app.get('/yelpcamp', (req, res) => {
    res.render('projects/yelpcamp.ejs')
});

app.get('/resume', (req, res) => {
    res.render('main/resume.ejs')
});

app.get('/photography', (req, res) => {
    res.render('main/photography.ejs')
});

app.all('*', (req, res) => {
    res.render('error.ejs')
});

app.listen(PORT, () => {
    console.log(`SERVER STARTED ON PORT ${PORT}`);
});