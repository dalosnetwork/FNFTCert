// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

interface IStorage {
    function getTokenNFTPair(address _tokenAddress) external view returns (uint256);
    function getNftTokenPair(uint256 _tokenID) external view returns (address);
    function getCleanList(address _userAddress) external view returns (bool);
    function setPair(address _tokenAddress, uint256 _tokenID) external;
}