// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "./CertificateERC20.sol";

contract CertificateERC20Factory{
    address owner;
    
    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    function createERC20(string memory name, string memory symbol, uint256 totalSupply) external onlyOwner returns (address) {
        CertificateERC20 newToken = new ERC20(name, symbol, totalSupply);
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