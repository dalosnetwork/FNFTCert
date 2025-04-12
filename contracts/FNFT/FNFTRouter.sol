// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "../interfaces/IStorage.sol";
import "../interfaces/IERC721.sol";
import "../interfaces/IERC20Factory.sol";
import "../interfaces/IERC20.sol";
import "../utils/library/MergedNFTMetadataLib.sol";

contract FNFTRouter {
    using MergedNFTMetadataLib for *;

    address owner;

    address NFT;
    address Vault;
    address ERC20Factory;
    address Storage;
    address MergedNFT;
    address MergedSBT;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    function createFNFT(uint256 _tokenID, string memory _name, string memory _symbol, uint256 _totalSupply) external onlyOwner returns (address) {
        // Check pair
        IStorage storageContract = IStorage(Storage);
        require(storageContract.getNftTokenPair(_tokenID) == address(0), "Token ID already has ERC20 pair");

        // Transfer NFT to vault contract
        IERC721 erc721Contract = IERC721(NFT);
        require(erc721Contract.ownerOf(_tokenID) == msg.sender, "You are not the owner of this NFT");
        erc721Contract.safeTransferFrom(msg.sender, Vault, _tokenID);

        // Create ERC20 token
        IERC20Factory erc20Factory = IERC20Factory(ERC20Factory);
        address erc20TokenAddress = address(erc20Factory.createERC20(_name, _symbol, _totalSupply, msg.sender));

        // Set storage
        storageContract.setPair(erc20TokenAddress, _tokenID);

        return erc20TokenAddress;
    }

    function mergeFNFTs(address[] memory _tokenAddresses, uint256[] memory _amounts, bool _isSBT, string memory _NFTName, string memory _NFTDescrtiption, string memory _imageLink, string memory _externalLink) external onlyOwner {
        require(_tokenAddresses.length == _amounts.length, "Token addresses and amounts length mismatch");
        require(_tokenAddresses.length > 0, "No token addresses provided");

        // Generate metadata
        MergedNFTMetadataLib.AttributePair[] memory attrs = new MergedNFTMetadataLib.AttributePair[](_tokenAddresses.length);

        for (uint256 index = 0; index < _tokenAddresses.length; index++) {
            IERC20 erc20Contract = IERC20(_tokenAddresses[index]);
            require(erc20Contract.balanceOf(msg.sender) >= _amounts[index], "Insufficient balance");
            require(erc20Contract.allowance(msg.sender, address(this)) >= _amounts[index], "Insufficient allowance");
            erc20Contract.transferFrom(msg.sender, address(0), _amounts[index]); // Burn the tokens

            attrs[index] = MergedNFTMetadataLib.AttributePair({
                addr: _tokenAddresses[index],
                value: _amounts[index]
            });
        }

        string memory tokenURI = MergedNFTMetadataLib.generateMetadata(
            _NFTName,
            _NFTDescrtiption,
            _imageLink,
            _externalLink,
            attrs
        );

        // Create new NFT/SBT
        if (_isSBT) {
            // Mint SBT
            IERC721 sbtContract = IERC721(MergedSBT);
            sbtContract.mint(msg.sender, tokenURI);
        } else {
            // Mint NFT
            IERC721 erc721Contract = IERC721(MergedNFT);
            erc721Contract.mint(msg.sender, tokenURI);
        }
    }

    function setMergedNFT(address _mergedNFT) external onlyOwner {
        require(_mergedNFT != address(0), "Merged NFT address is the zero address");
        MergedNFT = _mergedNFT;
    }

    function getMergedNFT() external view returns (address) {
        return MergedNFT;
    }

    function setStorage(address _storage) external onlyOwner {
        require(_storage != address(0), "Storage address is the zero address");
        Storage = _storage;
    }

    function getStorage() external view returns (address) {
        return Storage;
    }

    function setNFT(address _nft) external onlyOwner {
        require(_nft != address(0), "NFT address is the zero address");
        NFT = _nft;
    }

    function getNFT() external view returns (address) {
        return NFT;
    }

    function setVault(address _vault) external onlyOwner {
        require(_vault != address(0), "Vault address is the zero address");
        Vault = _vault;
    }

    function getVault() external view returns (address) {
        return Vault;
    }

    function setERC20Factory(address _erc20Factory) external onlyOwner {
        require(_erc20Factory != address(0), "ERC20Factory address is the zero address");
        ERC20Factory = _erc20Factory;
    }

    function getERC20Factory() external view returns (address) {
        return ERC20Factory;
    }

    function transferOwnership(address newOwner) external onlyOwner {
        require(newOwner != address(0), "New owner is the zero address");
        owner = newOwner;
    }

    function getOwner() external view returns (address) {
        return owner;
    }
}