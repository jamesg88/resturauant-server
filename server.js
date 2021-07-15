const express = require("express");
const path = require('path'); //a node native module
const {Restaurant, Menu, Item} = require('./models/index');

const app = express();
const port = 3000;

//New Code 
app.use(express.static(path.join(__dirname, 'public')))



app.get('/item', async (req, res) => {
    const allItems = await Item.findAll();
    res.json(allItems);
})
app.get('/flipcoin', async (req, res) => {
    const coinflip = !Math.floor(Math.random() * 2) ? 'Heads' : 'Tails'
    res.send(coinflip);
})
app.get('/item/:id', async (req, res) => {
    const allItems = await Item.findByPk(req.params.id, {include:Menu });
    res.json(allItems);
})
app.get('/restaurant', async (req, res) => {
    const item = await Restaurant.findAll();
    res.json(item);
});
app.get('/restaurant/:id', async (req, res) => {
    const item = await Restaurant.findByPk(req.params.id, {include:Menu });
    res.json(item);
});
app.get('/menu/:id', async (req, res) => {
    const menu = await Menu.findByPk(req.params.id, {include:Item });
    res.json(menu);
});

app.get('/menu', async (req, res) => {
    const menu = await Menu.findAll();
    res.json(menu);
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});


//New Code - Brought in at 1504 - 7.15
app.use(express.static(path.join(__dirname, 'public')))

