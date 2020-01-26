const SimpleStoragePermissioned = artifacts.require("./SimpleStoragePermissioned.sol");

module.exports = async (deployer) => {
    await deployer.deploy(SimpleStoragePermissioned);
}