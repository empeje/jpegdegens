pragma solidity ^0.8.0;

contract TestGas {
    uint a;
    uint b;
    uint c;

    function test1() public {
        a++;
    }

    function test2() public {
        b++;
        b++;
    }

    function test3() public {
        c++;
        c++;
        c++;
    }

    function test4() public {
        c = a + b;
    }

    function test5() public {
        test4();
        b = a + c;
    }
}