const nodemailer = require('nodemailer');


module.exports.home = (req, res) => {
    res.render('main/home.ejs')
}
module.exports.about = (req, res) => {
    res.render('main/about.ejs', {title: 'BEN | About Me'})
}
module.exports.portfolio = (req, res) => {
    res.render('main/portfolio.ejs', {title: 'BEN | Portfolio'})
}
module.exports.resume = (req, res) => {
    res.render('main/resume.ejs', {title: 'BEN | Resume'})
}
module.exports.photography = (req, res) => {
    res.render('main/photography.ejs', {title: 'BEN | Photography'})
}
module.exports.contact = (req, res) => {
    res.render('main/contact.ejs', {title: 'BEN | Contact'})
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