const express = require('express');
const app = express();
const morgan = require('morgan');
const port = process.env.PORT || 3000;

const path = require('path');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static('assets'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/dist/bundle.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/bundle.js'));
})

app.listen(port, () => console.log('server started'));