// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract CertificateERC721 is ERC721URIStorage {
    address public owner;
    uint256 public tokenIdCounter;

    constructor(string memory name, string memory symbol) ERC721(name, symbol) {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    function mint(address to, string memory tokenURI) external onlyOwner() {
        _mint(to, tokenIdCounter);
        _setTokenURI(tokenIdCounter, tokenURI);
        tokenIdCounter++;
    }

    function transferOwnership(address newOwner) external onlyOwner() {
        require(newOwner != address(0), "New owner is the zero address");
        owner = newOwner;
    }
}