from web3 import Web3
import json
from app.config import settings

web3 = Web3(Web3.HTTPProvider(settings.blockchain_rpc_url))
contract_address = settings.contract_address

with open('app/contracts/abi/FNFTCertABI.json') as f:
    abi = json.load(f)

contract = web3.eth.contract(address=contract_address, abi=abi)

def create_new_certificate_onchain(metadata: dict):
    wallet_address = settings.wallet_address
    private_key = settings.wallet_private_key

    nonce = web3.eth.get_transaction_count(wallet_address)
    txn = contract.functions.create_new_cert(json.dumps(metadata)).build_transaction({
        'from': wallet_address,
        'nonce': nonce,
        'gas': 2000000,
        'gasPrice': web3.to_wei('5', 'gwei')
    })

    signed_txn = web3.eth.account.sign_transaction(txn, private_key=private_key)
    tx_hash = web3.eth.send_raw_transaction(signed_txn.rawTransaction)
    return web3.to_hex(tx_hash)

def create_new_fnft_onchain(nft_id: int, token_name: str, token_symbol: str, total_supply: int):
    wallet_address = settings.wallet_address
    private_key = settings.wallet_private_key

    nonce = web3.eth.get_transaction_count(wallet_address)
    txn = contract.functions.create_new_fnft(nft_id, token_name, token_symbol, total_supply).build_transaction({
        'from': wallet_address,
        'nonce': nonce,
        'gas': 2000000,
        'gasPrice': web3.to_wei('5', 'gwei')
    })

    signed_txn = web3.eth.account.sign_transaction(txn, private_key=private_key)
    tx_hash = web3.eth.send_raw_transaction(signed_txn.rawTransaction)
    return web3.to_hex(tx_hash)

def redeem_all_nft_with_fnft_onchain(erc20_address: str):
    wallet_address = settings.wallet_address
    private_key = settings.wallet_private_key

    nonce = web3.eth.get_transaction_count(wallet_address)
    txn = contract.functions.redeem_all_nft_with_fnft(erc20_address).build_transaction({
        'from': wallet_address,
        'nonce': nonce,
        'gas': 2000000,
        'gasPrice': web3.to_wei('5', 'gwei')
    })

    signed_txn = web3.eth.account.sign_transaction(txn, private_key=private_key)
    tx_hash = web3.eth.send_raw_transaction(signed_txn.rawTransaction)
    receipt = web3.eth.wait_for_transaction_receipt(tx_hash)

    event_signature_hash = web3.keccak(text="Redeemed(address,uint256)").hex()
    token_id = None

    for log in receipt.logs:
        if log["topics"][0].hex() == event_signature_hash:
            token_id = int(log["data"], 16)

    return {
        "tx_hash": web3.to_hex(tx_hash),
        "token_id": token_id
    }


