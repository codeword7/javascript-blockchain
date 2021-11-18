const express = require('express');
const Blockchain = require('./blockchain');

const app = express();
app.use(express.json());

const bitcoin = new Blockchain();

app.post('/transaction', (req, res) => {
    const blockIndex = bitcoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient);
    res.json({ note: `Transaction will be added in block ${blockIndex}.` });
});

app.get('/mine', (req, res) => {

});

app.get('/blockchain', (req, res) => {
    res.send(bitcoin);
});

app.listen(3000, () => {
    console.log('Listening on on port 3000');
});