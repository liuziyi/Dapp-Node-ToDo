const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile');

let accounts;
let todo;

beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();

  // Use one of those accounts to deploy
  // the contract
  todo = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Task 1'] })
    .send({ from: accounts[0], gas: '1000000' });
});

describe('ToDo', () => {
  it('deploys a contract', () => {
    // console.log(todo)
    // Check to see if the contract was successfully deployed
    // The ok method makes an assertion that whatever we're passing into the function is a value that exists.
    // If todo.options.address is null or undefined, the test will fail
    // todo.options.address: the address of the deployed contract
    assert.ok(todo.options.address);
  });

  it('has a default task title', async () => {
    // todo: the instance of the contract that exists on the blockchain
    const taskTitle = await todo.methods.taskTitle().call();
  });

  it('can change the task title', async () => {
      await todo.methods.setTask('Task 2').send({ from: accounts[0] });
      const taskTitle = await todo.methods.taskTitle().call();
      assert.equal(taskTitle, 'Task 2');
  });

});
