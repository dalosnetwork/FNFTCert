// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

interface IERC20Factory {
    function createERC20(string memory name, string memory symbol, uint256 totalSupply, address _owner) external returns (address);
}
