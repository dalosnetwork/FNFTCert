// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "../interfaces/IERC721.sol";
import "../interfaces/IERC20.sol";
import "../interfaces/IStorage.sol";

contract Vault {
    address public owner;
    address NFT;
    address Storage;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    function redeemAll(uint256 _tokenID, address _tokenAddress) external onlyOwner() {
        IStorage _storage = IStorage(Storage);
        uint256 tokenID = _storage.getTokenNFTPair(_tokenAddress);
        require(tokenID == _tokenID, "Token ID does not match");

        IERC721 _erc721 = IERC721(NFT);
        require(_erc721.ownerOf(_tokenID) == address(this), "Vault does not own the NFT");

        IERC20 _erc20 = IERC20(_tokenAddress);
        uint256 sender_balance = _erc20.balanceOf(msg.sender);
        uint256 sender_allowance = _erc20.allowance(msg.sender, address(this));
        uint256 totalSupply = _erc20.totalSupply();

        require(sender_balance == totalSupply, "Insufficient balance");
        require(sender_allowance >= totalSupply, "Insufficient allowance");
        require(_erc20.transferFrom(msg.sender, address(this), totalSupply), "Transfer failed");

        _erc721.safeTransferFrom(address(this), msg.sender, _tokenID);
        _erc20.transferFrom(msg.sender, address(0), sender_balance);

        _storage.setPair(address(0), _tokenID);
    }

    function setNFT(address _nft) external onlyOwner() {
        require(_nft != address(0), "NFT address is the zero address");
        NFT = _nft;
    }

    function getNFT() external view returns (address) {
        return NFT;
    }

    function setStorage(address _storage) external onlyOwner() {
        require(Storage != address(0), "Storage address is the zero address");
        Storage = _storage;
    }

    function getStorage() external view returns (address) {
        return Storage;
    }

    function transferOwnership(address newOwner) external onlyOwner() {
        require(newOwner != address(0), "New owner is the zero address");
        owner = newOwner;
    }
}