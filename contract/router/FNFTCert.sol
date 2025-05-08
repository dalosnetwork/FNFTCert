// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

import "../interface/IERC721.sol";
import "../interface/IVault.sol";
import "../interface/IERC20Factory.sol";
import "../interface/IERC20.sol";

contract FNFTCert {
    address owner;
    address erc721Address;
    address vaultAddress;
    address erc20FactoryAddress;

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    event Redeemed(address indexed user, uint256 tokenID);
    event CertCreated(string metadataURI);
    event FNFTCreated(uint256 tokenID, string tokenName, string tokenSymbol, uint256 totalSupply);

    function create_new_cert(string calldata metadataURI) public onlyOwner returns (bool) {
        IERC721 _erc721 = IERC721(erc721Address);
        _erc721.mint(msg.sender, metadataURI);

        emit CertCreated(metadataURI);

        return true;
    }

    function create_new_fnft(uint256 _tokenID, string memory _tokenName, string memory _tokenSymbol, uint256 _totalSupply) public onlyOwner() returns (bool) {
        IVault _vault = IVault(vaultAddress);
        require(_vault.deposit(_tokenID, msg.sender), "Deposit failed"); // NFT deposit to vault

        IERC20Factory _erc20Factory = IERC20Factory(erc20FactoryAddress);
        address _erc20Address = _erc20Factory.createToken(_tokenName, _tokenSymbol, _totalSupply, msg.sender); // Create new ERC20 token

        _vault.addNFTreferToken(_tokenID, _erc20Address);
        _vault.addTokenreferNFT(_erc20Address, _tokenID);

        emit FNFTCreated(_tokenID, _tokenName, _tokenSymbol, _totalSupply);

        return true;
    }

    function redeem_all_nft_with_fnft(address _erc20Address) public returns (bool, uint256) {
        IVault _vault = IVault(vaultAddress);
        uint256 _tokenID = _vault.getTokenreferNFT(_erc20Address);

        IERC20 _erc20 = IERC20(_erc20Address);
        uint256 _totalSupply = _erc20.totalSupply();
        require(_erc20.balanceOf(msg.sender) == _totalSupply, "Not enough FNFT balance"); // Check FNFT balance
        require(_erc20.allowance(msg.sender, address(this)) == _totalSupply, "Not enough FNFT allowance"); // Check FNFT allowance

        require(_erc20.transferFrom(msg.sender, address(0x0), _totalSupply), "Token burn failed"); // Transfer FNFT to contract

        require(_vault.redeemAll(_tokenID, msg.sender), "NFT redeem failed"); // Redeem NFT from vault

        emit Redeemed(msg.sender, _tokenID);

        return (true, _tokenID);
    }

    function getERC20Address() public view returns (address) {
        return erc20FactoryAddress;
    }

    function setERC20Address(address newErc20Address) public onlyOwner {
        erc20FactoryAddress = newErc20Address;
    }

    function getERC721Address() public view returns (address) {
        return erc721Address;
    }

    function setERC721Address(address newErc721Address) public onlyOwner {
        erc721Address = newErc721Address;
    }

    function getOwner() public view returns (address) {
        return owner;
    }

    function setOwner(address newOwner) public onlyOwner {
        owner = newOwner;
    }
}