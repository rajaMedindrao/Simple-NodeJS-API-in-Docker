const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/:string', (req, res) => {
    res.send("Reversed String: " + req.params.string.split("").reverse().join("") + "\n")
});

app.post('/', (req,res) => {
    res.send("Reversed String: " + req.body.string.split("").reverse().join("") + "\n")
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});