const path = require("path"); //use path so it work fine in unix or windows
const fs = require("fs");
const solc = require("solc");

console.log(__dirname);
const lotteryPath = path.resolve(__dirname, "Contracts", "Lottery.sol");
const source = fs.readFileSync(lotteryPath, "utf-8");



module.exports =  solc.compile(source, 1).contracts[':Lottery']; //contract name, number of contract to deploy
