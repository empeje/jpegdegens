pragma solidity ^0.8.0;

contract Hero {
    // Randomly generated hero
    enum Class { Mage, Healer, Barbarian }

    mapping(address => uint[]) addressToHeroes;

    function getHeroes() public view returns (uint[] memory) {
        return addressToHeroes[msg.sender];
    }

    function createHero(Class class) public payable {
        // it should be payable
        require(msg.value >= 0.05 ether, "Please send moar money");
    }
}