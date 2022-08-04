const express = require('express');
const app = express();

app.use('/', express.static(__dirname + '/html'));
app.get('/', function (req, res) {
    res.render('index.html');
});

app.listen(8080, () => {
    console.log('Listening on port 8080');
});

