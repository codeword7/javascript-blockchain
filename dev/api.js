const express = require('express');
const { v4: uuidv4 } = require('uuid');
const Blockchain = require('./blockchain');

const app = express();
app.use(express.json());

const bitcoin = new Blockchain();

const nodeAddress = uuidv4().split('-').join('');

app.post('/transaction', (req, res) => {
    const blockIndex = bitcoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient);
    res.json({ note: `Transaction will be added in block ${blockIndex}.` });
});

app.get('/mine', (req, res) => {
    bitcoin.createNewTransaction(12.5, "00", nodeAddress);
    const lastBlock = bitcoin.getLastBlock();
    const previousBlockHash = lastBlock.hash;
    const currentBlockData = { transactions: bitcoin.pendingTransactions, index: lastBlock.index + 1 };
    const nonce = bitcoin.proofOfWork(previousBlockHash, currentBlockData);
    const blockHash = bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce);
    const newBlock = bitcoin.createNewBlock(nonce, previousBlockHash, blockHash);
    res.json({ note: "New block mined successfully", block: newBlock });
});

app.get('/blockchain', (req, res) => {
    res.send(bitcoin);
});

app.listen(3000, () => {
    console.log('Listening on on port 3000');
});