# Dapp, Custom Node: ToDo

- Links
  - [Ethereum and Solidity: The Complete Developer's Guide (Section 2), Udemy](https://www.udemy.com/ethereum-and-solidity-the-complete-developers-guide/learn/v4/content)

## 1. Truffle, Node
  - Truffle

  ![](images/1-truffle-node/truffle.png)

  - Node

  ![](images/1-truffle-node/node.png)

## 2. Boilerplate
  - Issues

  ![](images/2-boilerplate/issues.png)

## 3. Project Directory Structure

  ![](images/3-proj/proj.png)

## 4. Compile
  - The deploy and testing process requires a compiled contract
  - Compiling solidity

  ![](images/4-compile/solidity-compiler.png)

  - Install solc
  - Output of solc.compile(source, 1)
    - bytecode

    ![](images/4-compile/bytecode.png)

    - ABI (Communication layer between solidity and JS)

    ![](images/4-compile/interface.png)

## 5. Test
  - Testing setup

  ![](images/5-test/testing-setup.png)

  - Web3
    - Versions

    ![](images/5-test/web3-versions.png)

    - Connecting web3 to ganache
      - The provider is the communication layer between the web3 lib and some specific ethereum network e.g. ganache.provider()

    ![](images/5-test/web3-ganache.png)

  - Ganache
    - Accounts
      - Use web3 to access the list of accounts that are created automatically by ganache. These accounts are by default unlocked

    ![](images/5-test/ganache-accounts.png)

  - Mocha
    - Mocha Functions

    ![](images/5-test/mocha-fns.png)

    - Mocha Flow

    ![](images/5-test/mocha-flow.png)

    - package.json

    ```javascript
    scripts: {
      "test": "mocha"
    }
    ```
    - Web3 with contracts (web3.eth.contracts)
      - Used for deploying new contracts or interacting with existing contracts that exist on the blockchain already

      ![](images/5-test/web3-contract-code.png)

      ![](images/5-test/web3-contract.png)

## 6. Deploy
  - Deploying to a test network (Rinkeby) using infura
    - Unlike the local network, the test network does not have any unlocked accounts included in the provider. For test networks, the provider needs to have an account that it's going to use as a source of ether for the deployment. The account mnemonic can be used to unlock the accounts and use the ethers within it to deploy a contract.
    - To deploy to the Rinkeby network, need to connect to a node that exists on the network to deploy the contract.

  ![](images/6-deploy/web3-infura.png)

  - Truffle hdwallet provider: use it to connect to the Rinkeby network hosted through infura and unlock an account to use.

  - Output
    - Attempting to deploy from account 0x813755d5e161452191E926100734005E7Eca734e
    - Contract deployed to 0x18C375a93B5858809D27E8c7326520f8e037604f

  ![](images/6-deploy/output.png)

  - Etherscan
    - rinkeby.etherscan.io
