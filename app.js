const express = require('express');
const ejsMate = require('ejs-mate');
const path = require('path')
const app = express();
const PORT = 3000;

// Middleware
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => {
    res.render('main/home.ejs')
});

app.listen(PORT, () => {
    console.log(`SERVER STARTED ON PORT ${PORT}`);
});