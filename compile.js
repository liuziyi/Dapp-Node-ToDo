const path = require('path');
const fs = require('fs');
const solc = require('solc');

const todoPath = path.resolve(__dirname, 'contracts', 'ToDo.sol');
const source = fs.readFileSync(todoPath, 'utf8');

// solc.compile(<source code>, <no. of contracts to compile>);
// console.log(solc.compile(source, 1));

module.exports = solc.compile(source, 1).contracts[':ToDo'];
