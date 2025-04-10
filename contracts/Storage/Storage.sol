// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract Storage {
    address owner;

    mapping(address => uint256) tokenNFTPair; // token address - tokenID
    mapping(address => bool) cleanList; // userAddress - is clean

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    modifier onlyClean() {
        require(cleanList[msg.sender], "Not a clean user");
        _;
    }

    function setTokenNFTPair(address _tokenAddress, uint256 _tokenID) external onlyClean {
        tokenNFTPair[_tokenAddress] = _tokenID;
    }

    function getTokenNFTPair(address _tokenAddress) external view returns (uint256) {
        return tokenNFTPair[_tokenAddress];
    }

    function setCleanList(address _userAddress, bool _isClean) external onlyOwner {
        cleanList[_userAddress] = _isClean;
    }

    function getCleanList(address _userAddress) external view returns (bool) {
        return cleanList[_userAddress];
    }

    function transferOwnership(address _newOwner) external onlyOwner {
        require(_newOwner != address(0), "New owner is the zero address");
        owner = _newOwner;
    }
}