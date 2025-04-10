// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MergedSBT is ERC721 {
    constructor(string memory name_, string memory symbol_) ERC721(name_, symbol_) {}

    function mint(address to, uint256 tokenId) public onlyOwner {
        _safeMint(to, tokenId);
    }

    function _transfer(address from, address to, uint256 tokenId) internal pure override {
        revert("Soulbound: transfer disabled");
    }

    function approve(address to, uint256 tokenId) public pure override {
        revert("Soulbound: approval disabled");
    }

    function setApprovalForAll(address operator, bool approved) public pure override {
        revert("Soulbound: approvalForAll disabled");
    }
}
