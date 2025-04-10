// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "./CertificateERC721.sol";

contract CertificateERC721Factory {
    address owner;
    
    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    function createERC721(string memory name, string memory symbol) external onlyOwner returns (address) {
        CertificateERC721 newToken = new ERC721(name, symbol);
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