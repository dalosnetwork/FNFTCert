// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

library MergedNFTMetadataLib {
    struct AttributePair {
        address addr;
        uint256 value;
    }

    function generateMetadata(
        string memory nftName,
        string memory nftDescription,
        string memory imageUrl,
        string memory externalUrl,
        AttributePair[] memory pairs
    ) internal pure returns (string memory) {
        uint256 totalGram = 0;
        for (uint256 i = 0; i < pairs.length; i++) {
            totalGram += pairs[i].value;
        }

        bytes memory jsonStart = abi.encodePacked(
            '{',
                '"name":"', nftName, '",',
                '"description":"', nftDescription, '",',
                '"image":"', imageUrl, '",',
                '"external_url":"', externalUrl, '",',
                '"attributes":[',
                    '{',
                        '"total_gram":"', uintToString(totalGram), '"',
                    '}'
        );

        for (uint256 i = 0; i < pairs.length; i++) {
            jsonStart = abi.encodePacked(
                jsonStart,
                ',{',
                    '"address', uintToString(i + 1), '":"', toChecksumString(pairs[i].addr), '",',
                    '"value":"', uintToString(pairs[i].value), '"',
                '}'
            );
        }

        bytes memory jsonEnd = abi.encodePacked(']}');
        return string(abi.encodePacked(jsonStart, jsonEnd));
    }

    function uintToString(uint256 value) internal pure returns (string memory) {
        if (value == 0) return "0";
        uint256 temp = value;
        uint256 digits;
        while (temp != 0) {
            digits++;
            temp /= 10;
        }
        bytes memory buffer = new bytes(digits);
        while (value != 0) {
            digits -= 1;
            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));
            value /= 10;
        }
        return string(buffer);
    }

    function toChecksumString(address account) internal pure returns (string memory) {
        bytes20 data = bytes20(account);
        bytes memory characters = "0123456789abcdef";
        bytes memory result = new bytes(42);
        result[0] = '0';
        result[1] = 'x';
        for (uint256 i = 0; i < 20; i++) {
            result[2 + i * 2] = characters[uint8(data[i] >> 4)];
            result[3 + i * 2] = characters[uint8(data[i] & 0x0f)];
        }
        return string(result);
    }
}
