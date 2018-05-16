const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./server/db');

const routes = require('./server/routes');

const port = 4200;
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', routes());
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
})

app.listen(port, function () {
    console.log("Server is running on port no." + port);
})