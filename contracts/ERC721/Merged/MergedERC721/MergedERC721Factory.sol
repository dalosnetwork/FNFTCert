// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "./MergedERC721.sol";

contract MergedERC721Factory {
    address owner;
    
    mapping(address => bool) public cleanList;

    event MergedNFTCreated(address indexed newToken, string name, string symbol);

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    modifier onlyCleanList() {
        require(cleanList[msg.sender], "Not in the clean list");
        _;
    }

    function createERC721(string memory name, string memory symbol) external onlyCleanList returns (address) {
        CertificateERC721 newToken = new ERC721(name, symbol);

        emit MergedNFTCreated(address(newToken), name, symbol);

        return address(newToken);
    }

    function updateCleanList(address _address, bool _status) external onlyOwner {
        cleanList[_address] = _status;
    }

    function transferOwnership(address newOwner) external onlyOwner {
        require(newOwner != address(0), "New owner is the zero address");
        owner = newOwner;
    }

    function getOwner() external view returns (address) {
        return owner;
    }
}