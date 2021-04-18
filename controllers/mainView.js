const nodemailer = require('nodemailer');
const CONFIG = require('../config.json');

module.exports.home = (req, res) => {
    res.render(CONFIG.main.home.route, {title: CONFIG.main.home.title})
}
module.exports.about = (req, res) => {
    res.render(CONFIG.main.about.route, {title: CONFIG.main.about.title})
}
module.exports.portfolio = (req, res) => {
    res.render(CONFIG.main.portfolio.route, {title: CONFIG.main.portfolio.title})
}
module.exports.resume = (req, res) => {
    res.render(CONFIG.main.resume.route, {title: CONFIG.main.resume.title})
}
module.exports.photography = (req, res) => {
    res.render(CONFIG.main.photography.route, {title: CONFIG.main.photography.title})
}
module.exports.contact = (req, res) => {
    res.render(CONFIG.main.contact.route, {title: CONFIG.main.contact.title})
}
module.exports.contactFormPost = (req, res) => {
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
}