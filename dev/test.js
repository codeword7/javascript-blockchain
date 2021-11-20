const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();
// const previousBlockHash = '87765DA6CCF0668238C1D27C35692E11';
// const currentBlockData = [{ amount: 10, sender: 'B4CEE9C0E5CD571', recipient: '3A3F6E462D48E9', }, { amount: 100, sender: 'B4CEE9C0E5CD571', recipient: '3A3F6E462D48E9', }, { amount: 50, sender: 'B4CEE9C0E5CD571', recipient: '3A3F6E462D48E9', }];
// const nonce = 100;
// console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData));
const bc1 = {
    "chain": [
        {
            "index": 1,
            "timestamp": 1637327726555,
            "transactions": [],
            "nonce": 100,
            "hash": "0",
            "previousBlockHash": "0"
        },
        {
            "index": 2,
            "timestamp": 1637327841436,
            "transactions": [],
            "nonce": 18140,
            "hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
            "previousBlockHash": "0"
        },
        {
            "index": 3,
            "timestamp": 1637327980567,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "378724df92f742218c17514eb0d29a22",
                    "transactionId": "ffe29fbe1a424993be5b530aa27e90dd"
                },
                {
                    "amount": 10,
                    "sender": "B4CEE9C0E5CD571",
                    "recipient": "3A3F6E462D48E9",
                    "transactionId": "d3eee9c35c6649948cc1b56dc4be35a6"
                },
                {
                    "amount": 20,
                    "sender": "B4CEE9C0E5CD571",
                    "recipient": "3A3F6E462D48E9",
                    "transactionId": "66236237df6041daabeb6ad523545378"
                },
                {
                    "amount": 30,
                    "sender": "B4CEE9C0E5CD571",
                    "recipient": "3A3F6E462D48E9",
                    "transactionId": "113d70f617a4453e80627309882f711f"
                }
            ],
            "nonce": 42233,
            "hash": "000007d1244b44c8b086604efedb08f06d70aeef8bf5cfc224c515a9ee35d864",
            "previousBlockHash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
        },
        {
            "index": 4,
            "timestamp": 1637328029868,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "378724df92f742218c17514eb0d29a22",
                    "transactionId": "d20c08bc79da41fe823c1dbe898a78d8"
                },
                {
                    "amount": 30,
                    "sender": "B4CEE9C0E5CD571",
                    "recipient": "3A3F6E462D48E9",
                    "transactionId": "6e2d220aab7943e5a6d26fbf9cafcd2f"
                },
                {
                    "amount": 20,
                    "sender": "B4CEE9C0E5CD571",
                    "recipient": "3A3F6E462D48E9",
                    "transactionId": "3a0bd37887cb4d47a47e913f95881b93"
                }
            ],
            "nonce": 73651,
            "hash": "0000f8f0c09499849513c0cd804c3f9bca70bb7c7a83742ce9f22400c73dc299",
            "previousBlockHash": "000007d1244b44c8b086604efedb08f06d70aeef8bf5cfc224c515a9ee35d864"
        }
    ],
    "pendingTransactions": [
        {
            "amount": 12.5,
            "sender": "00",
            "recipient": "378724df92f742218c17514eb0d29a22",
            "transactionId": "42027cc9bbdc4b0484e8e3803a152688"
        }
    ],
    "currentNodeUrl": "http://localhost:3001",
    "networkNodes": []
};

console.log('VALID:', bitcoin.chainIsValid(bc1.chain));