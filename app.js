if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const express = require('express');
const ejsMate = require('ejs-mate');
const nodemailer = require('nodemailer');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

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
    res.render('main/about.ejs')
});

app.get('/portfolio', (req, res) => {
    res.render('main/portfolio.ejs')
});

// Projects
app.get('/yelpcamp', (req, res) => {
    res.render('projects/yelpcamp.ejs')
});

app.get('/personal-website', (req, res) => {
    res.render('projects/personal-website.ejs')
});

app.get('/kraken-bracket', (req, res) => {
    res.render('projects/kraken-bracket.ejs')
});

app.get('/ee-381', (req, res) => {
    res.render('projects/ee-381.ejs')
});

app.get('/simd', (req, res) => {
    res.render('projects/simd.ejs')
});

app.get('/resume', (req, res) => {
    res.render('main/resume.ejs')
});

app.get('/photography', (req, res) => {
    res.render('main/photography.ejs')
});

app.get('/contact', (req, res) => {
    res.render('main/contact.ejs')
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
    res.render('error.ejs')
});

app.listen(PORT, () => {
    console.log(`SERVER STARTED ON PORT ${PORT}`);
});