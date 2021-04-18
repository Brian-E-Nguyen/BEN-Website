if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const CONFIG = require('./config.json');
const express = require('express');
const ejsMate = require('ejs-mate');
const nodemailer = require('nodemailer');
const path = require('path');
const app = express();
const PORT = process.env.PORT || CONFIG.localPort;

// Middleware
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + "/public"));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.render('main/home.ejs')
});

app.get('/about-me', (req, res) => {
    res.render('main/about.ejs', {title: 'BEN | About Me'})
});

app.get('/portfolio', (req, res) => {
    res.render('main/portfolio.ejs', {title: 'BEN | Portfolio'})
});

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

app.get('/resume', (req, res) => {
    res.render('main/resume.ejs', {title: 'BEN | Resume'})
});

app.get('/photography', (req, res) => {
    res.render('main/photography.ejs', {title: 'BEN | Photography'})
});

app.get('/contact', (req, res) => {
    res.render('main/contact.ejs', {title: 'BEN | Contact'})
});

app.post('/contact', (req, res) => {
    console.log(req.body);
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'Oath2',
            user: process.env.EMAIL_ADDRESS,
            pass: process.env.EMAIL_PASSWORD
        }
    });
    const mailOptions = {
        from: req.body.email,
        to: process.env.EMAIL_ADDRESS,
        subject: `Message from ${req.body.firstName + ' ' + req.body.lastName}`,
        text: req.body.email + '\n' + req.body.message
    }
    transporter.sendMail(mailOptions, (err, info) => {
        if(err) {
            console.log(err);
            res.send('error')
        }
        else {
            console.log('Email sent: ' + info.response);
            res.send('success')
        }
    })
})

app.all('*', (req, res) => {
    res.render('error.ejs', {title: 'Error!'})
});

app.listen(PORT, () => {
    console.log(`SERVER STARTED ON PORT ${PORT}`);
});