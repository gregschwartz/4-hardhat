// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

interface Contract {
    function attempt() external;
}

contract Caller {
    constructor(address dest) {
        Contract(dest).attempt();
    }
}