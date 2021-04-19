const nodemailer = require('nodemailer');
const CONFIG = require('../config.json');

const main = CONFIG.main;

module.exports.home = (req, res) => {
    res.render(main.home.route, {title: main.home.title})
}
module.exports.about = (req, res) => {
    res.render(main.about.route, {title: main.about.title})
}
module.exports.portfolio = (req, res) => {
    res.render(main.portfolio.route, {title: main.portfolio.title})
}
module.exports.resume = (req, res) => {
    res.render(main.resume.route, {title: main.resume.title})
}
module.exports.photography = (req, res) => {
    res.render(main.photography.route, {title: main.photography.title})
}
module.exports.contact = (req, res) => {
    res.render(main.contact.route, {title: main.contact.title})
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
            res.send('error')
        }
        else {
            res.send('success')
        }
    })
}