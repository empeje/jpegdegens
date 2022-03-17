pragma solidity ^0.8.0;

import "hardhat/console.sol";


contract A {
    uint a;

    function setA(uint _a) public {
        a = _a;
    }

    function getA() public view returns (uint) {
        return a;
    }
}

contract B {
    uint8 c;
    uint b;
    uint8 d;
    address ContractA;

    constructor(address _A) {
        ContractA = _A;
        b = 4;
        c = 0x45;
        d = 0xF5;
    }

    function setB(uint _b) public {
        b = _b;
        ContractA.delegatecall(
            abi.encodeWithSignature("setA(uint256)", _b + 1)
        );
    }

    function getB() public view returns (uint) {
        return b;
    }
}
