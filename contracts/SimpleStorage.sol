pragma solidity >= 0.4.0 < 0.7.0;

contract SimpleStoragePermissioned {

    mapping(uint => string) store;
    mapping(uint => address) storageRegistry;
    uint registryIndex;

    modifier isOwner(uint _registryIndex) {
        require(msg.sender == storageRegistry[_registryIndex], "Address is not permitted to access this storage!");
        _;
    }

    constructor() public {
        put("Hello World!");
    }

    function put(string memory _value) public returns (uint _registryIndex) {
        store[registryIndex] = _value;
        storageRegistry[registryIndex] = msg.sender;
        _registryIndex = registryIndex;
        registryIndex++;
    }

    function get(uint _registryIndex) public view isOwner(_registryIndex) returns (string memory _value) {
        return(store[_registryIndex]);
    }
}