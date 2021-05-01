const fetch = require('node-fetch');
const express = require('express');
const cors = require ('cors');
const app = express();

app.use(cors());

const port = 4000;

app.get('/games/:pagenumber', (req, res) => {
    fetch(`https://api.rawg.io/api/games?key=71dd6ebf64e741a8901130bd575a6dcb&page_size=5&page=${req.params.pagenumber}`)
    .then(res => res.json())
    .then(data => res.json(data)); 
})

app.get('/game/:id', (req, res) => {
    fetch(`https://api.rawg.io/api/games/${req.params.id}?key=71dd6ebf64e741a8901130bd575a6dcb`)
    .then(res => res.json())
    .then(data => res.json(data)); 
})

app.listen(port, () => {
    console.log(`Server on : ${port}`);
});
