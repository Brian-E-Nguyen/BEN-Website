const express = require('express');
const path = require('path')
const app = express();
const PORT = 3000;

// Middleware
app.set('view engine', 'ejs');
app.set('view engine', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render('home.ejs')
});

app.listen(PORT, () => {
    console.log(`SERVER STARTED ON PORT ${PORT}`);
});