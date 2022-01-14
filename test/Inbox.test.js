const { equal } = require('assert');
const assert = require('assert');
const { Console } = require('console');
const ganache = require('ganache-cli');
const { before } = require('mocha');
const { beforeEach } = require('mocha');
const { linkBytecode } = require('solc');
//Web3 Constructor
const Web3 = require('Web3'); 
//Web3 Instance 
const web3 = new Web3(ganache.provider()); 

let accounts;
let inbox;
beforeEach(async () => {
    //Get a list of all accounts
    accounts = await web3.eth.getAccounts();

    //Use one of the account to deploy the contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hola que tal']  })
    .send({ from: accounts[0], gas: '1000000' });
});

describe('Inbox', () => {
    it('deploys a contract', () => {
        console.log(accounts);
    });
});
