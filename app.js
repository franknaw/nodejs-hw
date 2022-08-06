const express = require('express');
const app = express();
const port = process.env.PORT || 1337;

app.use('/', express.static(__dirname + '/html'));
app.get('/', function (req, res) {
    res.render('index.html');
});

app.listen(port, () => {
    console.log('Listening on port: ' + port);
});
