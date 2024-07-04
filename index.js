const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");
const app = express();
const fs = require('fs');


app.get('/', (req, res, next) => {
    const data = fs.readFileSync(__dirname + '/counter1.txt', 'utf8');
    res.send(`<h1>Hello World!</h1>
                <a href="/about.html">About</a><br/> 
                <p>Счетчик</p>${data}`);

    next();
},

    (req, res) => {
        const data = fs.readFileSync(__dirname + '/counter1.txt', 'utf8');
        fs.writeFileSync(__dirname + '/counter1.txt', (parseInt(data) + 1).toString());
    });

app.get('/about.html', (req, res, next) => {
    const data = fs.readFileSync(__dirname + '/counter2.txt', 'utf8');
    res.send(`<h1>About</h1>
            <a href="/">Main</a><br/> 
            <p>Счетчик</p>${data}`);
    next();
},

    (req, res) => {
        const data = fs.readFileSync(__dirname + '/counter2.txt', 'utf8');
        fs.writeFileSync(__dirname + '/counter2.txt', (parseInt(data) + 1).toString());
    });

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});