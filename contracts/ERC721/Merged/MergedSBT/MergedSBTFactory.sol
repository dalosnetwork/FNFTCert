// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "./MergedSBT.sol";

contract MErgedSBTFactory {
    address owner;
    
    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    function createSBT(string memory name, string memory symbol) external onlyOwner returns (address) {
        MergedSBT newToken = new ERC721(name, symbol);
        return address(newToken);
    }

    function transferOwnership(address newOwner) external onlyOwner {
        require(newOwner != address(0), "New owner is the zero address");
        owner = newOwner;
    }

    function getOwner() external view returns (address) {
        return owner;
    }
}