// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CertificateERC20 is ERC20 {
    constructor(string memory name, string memory symbol, uint256 initialSupply, address _owner) ERC20(name, symbol) {
        _mint(_owner, initialSupply * 10 ** decimals());
    }
}