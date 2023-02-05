// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

interface Contract {
    event Winner(address);

    function attempt() external;
}

contract Caller {
    function makeAttempt(address dest) public {
        Contract(dest).attempt();
    }
}