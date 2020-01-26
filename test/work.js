let SimpleStoragePermissioned = artifacts.require("./SimpleStoragePermissioned.sol")

require('chai')
    .use(require('chai-as-promised'))
    .use(require('chai-bn')(web3.utils.BN))
    .should()

contract("SimpleStoragePermissioned", async accounts => {
    let instance = await SimpleStoragePermissioned.deployed()
    //accounts[0] is constructing account
    //accounts[1] is alternative account
    it('The 0th storage is Hello World!', async () => {
        let value = await instance.get(0, {from: accounts[0]})
        console.log("0th storage value: ", value)
        value.should.equal("Hello World!")
    })
    it('You can put shit in the 1st storage', async () => {
        let value = await instance.get(1, {from: accounts[0]})
        console.log("1st storage value before put: ", value)
        
        await instance.put("Fuck shit dick", {from: accounts[0]})
        value = await instance.get(1, {from: accounts[0]})
        console.log("1st storage value after put: ", value)
    })
    
})