// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

interface IStorage {
    function getTokenNFTPair(address _tokenAddress) external view returns (uint256);
    function getCleanList(address _userAddress) external view returns (bool);
}