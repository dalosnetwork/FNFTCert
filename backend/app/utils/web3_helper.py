import os
import json
from dotenv import load_dotenv
from web3 import Web3

load_dotenv()

RPC_URL = os.getenv("RPC_URL")
PRIVATE_KEY = os.getenv("PRIVATE_KEY")
ROUTER_CONTRACT_ADDRESS = os.getenv("ROUTER_CONTRACT_ADDRESS")

w3 = Web3(Web3.HTTPProvider(RPC_URL))
account = w3.eth.account.from_key(PRIVATE_KEY)

def get_contract():
    with open("app/contracts/FNFTABI.json") as f:
        abi = json.load(f)
    return w3.eth.contract(address=Web3.to_checksum_address(ROUTER_CONTRACT_ADDRESS), abi=abi)

def send_transaction(contract, function_name: str, message: str):
    nonce = w3.eth.get_transaction_count(account.address)
    txn = getattr(contract.functions, function_name)(message).build_transaction({
        'from': account.address,
        'nonce': nonce,
        'gas': 200000,
        'gasPrice': w3.to_wei('5', 'gwei')
    })
    signed_txn = w3.eth.account.sign_transaction(txn, private_key=PRIVATE_KEY)
    tx_hash = w3.eth.send_raw_transaction(signed_txn.rawTransaction)
    receipt = w3.eth.wait_for_transaction_receipt(tx_hash)
    return tx_hash, receipt
