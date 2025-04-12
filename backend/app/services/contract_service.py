from app.utils.web3_helper import get_contract, send_transaction
import os

def merge(addresses: list[str], amounts: list[int], isSBT: bool, NFTName: str, NFTDescription: str, imageLink: str, externalLink: str) -> str:
    contract = get_contract()
    tx_hash, tx_receipt = send_transaction(contract, "mergeFNFTs", addresses, amounts, isSBT, NFTName, NFTDescription, imageLink, externalLink)
    return f"Transaction Hash: {tx_hash.hex()}, Transaction Receipt: {tx_receipt}"