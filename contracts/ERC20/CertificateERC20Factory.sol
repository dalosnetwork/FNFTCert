// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "./CertificateERC20.sol";

contract CertificateERC20Factory{
    address owner;
    mapping(address => bool) public cleanList;
    
    event TokenCreated(address indexed tokenAddress, string name, string symbol, uint256 totalSupply, address indexed owner);

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

    function createERC20(string memory name, string memory symbol, uint256 totalSupply, address _owner) external onlyCleanList() returns (address) {
        CertificateERC20 newToken = new ERC20(name, symbol, totalSupply, _owner);

        emit TokenCreated(address(newToken), name, symbol, totalSupply, _owner);
        
        return address(newToken);
    }

    function updateCleanList(address _address, bool status) external onlyOwner {
        cleanList[_address] = status;
    }

    function transferOwnership(address newOwner) external onlyOwner {
        require(newOwner != address(0), "New owner is the zero address");
        owner = newOwner;
    }

    function getOwner() external view returns (address) {
        return owner;
    }
}