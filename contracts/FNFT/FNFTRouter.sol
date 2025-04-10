// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract FNFTRouter {
    address owner;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    function createFNFT(uint256 _tokenID, string memory _name, string memory _symbol, string memory _totalSupply) external onlyOwner returns (address) {
        // nftyi al, token ver
    }

    function mergeFNFTs(address _token1Address, uint256 _token1Amount, address _token2Address, uint256 _token2Amount, bool _isSBT) external onlyOwner returns (address) {
        // merge fnft, yeni nft yap ver
    }

    function transferOwnership(address newOwner) external onlyOwner {
        require(newOwner != address(0), "New owner is the zero address");
        owner = newOwner;
    }

    function getOwner() external view returns (address) {
        return owner;
    }
}