const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('HIIIII')
});

app.listen(PORT, () => {
    console.log(`SERVER STARTED ON PORT ${PORT}`);
});