// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

interface Contract {
    function attempt() external;
}

contract MyWin {
    function Win(address contractAddress) external {
        Contract(contractAddress).attempt();
    }
}
