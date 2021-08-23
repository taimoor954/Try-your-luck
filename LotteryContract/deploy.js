const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "guess quantum chat daring feed large gain nerve lift obtain shaft nurse",
  "https://rinkeby.infura.io/v3/7c52dc2c578c40f090f4af7a7ffb4875" //GOT THIS FROM INFURA
);

const web3 = new Web3(provider);

const deploy = async () => {
  console.log();
  const accounts = await web3.eth.getAccounts();
  // const gasPrice = web3.eth.gasPrice.toNumber() * 1.50;
  console.log(accounts);
  const deployedContract = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
    })
    .send({ gas: "3000000", from: accounts[0] , gasPrice:"100000"});

  console.log("interface", interface);
  console.log('deployed at', deployedContract.options.address);

};

deploy();

//confimed deploymemt of contract on https://rinkeby.etherscan.io/address/0x08F62E8aaFF291A427Af7036e3477c26158B4E19
