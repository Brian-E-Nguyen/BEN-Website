if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const CONFIG = require('./config.json');
const express = require('express');
const ejsMate = require('ejs-mate');
const path = require('path');
const app = express();
const mainView = require('./controllers/mainView')
const PORT = process.env.PORT || CONFIG.localPort;

// Middleware
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + "/public"));
app.use(express.json());

// Routes
app.get('/', mainView.home);

app.get('/about-me', mainView.about);

app.get('/portfolio', mainView.portfolio);

// Projects
app.get('/yelpcamp', (req, res) => {
    res.render('projects/yelpcamp.ejs', {title: 'BEN | YelpCamp'})
});

app.get('/personal-website', (req, res) => {
    res.render('projects/personal-website.ejs', {title: 'BEN | My Website'})
});

app.get('/kraken-bracket', (req, res) => {
    res.render('projects/kraken-bracket.ejs', {title: 'BEN | Kraken Bracket'})
});

app.get('/ee-381', (req, res) => {
    res.render('projects/ee-381.ejs', {title: 'BEN | EE-381'})
});

app.get('/simd', (req, res) => {
    res.render('projects/simd.ejs', {title: 'BEN | SIMD'})
});

app.get('/resume', mainView.resume);

app.get('/photography', mainView.photography);

app.get('/contact', mainView.contact);

app.post('/contact', mainView.contactFormPost)

app.all('*', (req, res) => {
    res.render('error.ejs', {title: 'Error!'})
});

app.listen(PORT, () => {
    console.log(`SERVER STARTED ON PORT ${PORT}`);
});