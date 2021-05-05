if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const CONFIG = require('./config.json');
const express = require('express');
const ejsMate = require('ejs-mate');
const path = require('path');
const helmet = require('helmet');
const app = express();
const mainView = require('./controllers/mainView');
const projectView = require('./controllers/projectView');
const errorView = require('./controllers/errorView');
const privacyView = require('./controllers/privacyView');
const PORT = process.env.PORT || CONFIG.localPort;

// Middleware
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + "/public"));
app.use(express.json());

// Security
app.use(
    helmet.contentSecurityPolicy({
        directives: {
            defaultSrc: [],
            scriptSrc: ["'unsafe-inline'", "'unsafe-eval'", "'self'", ...CONFIG.scriptSrcUrls],
            styleSrc: ["'self'", "'unsafe-inline'", ...CONFIG.styleSrcUrls],
            connectSrc: ["'self'", ...CONFIG.connectSrcUrls],
            imgSrc: [
                "'self'",
                "blob:",
                "data:",
                ...CONFIG.imgSrcUrls
            ],
            fontSrc: ["'self'", ...CONFIG.fontSrcUrls],
        }
    })
);

// Main Views
app.get('/', mainView.home);
app.get('/about-me', mainView.about);
app.get('/portfolio', mainView.portfolio);
app.get('/resume', mainView.resume);
app.get('/photography', mainView.photography);
app.get('/contact', mainView.contact);
app.post('/contact', mainView.contactFormPost)

// Project Views
app.get('/yelpcamp', projectView.yelpcamp);
app.get('/personal-website', projectView.personalwebsite);
app.get('/kraken-bracket', projectView.krakenbracket);
app.get('/ee-381', projectView.ee381);
app.get('/simd', projectView.simd);

// Error Views
app.get('/privacy-policy', privacyView.privacy);
app.all('*', errorView.error);

app.listen(PORT, () => {
    console.log(`SERVER STARTED ON PORT ${PORT}`);
});