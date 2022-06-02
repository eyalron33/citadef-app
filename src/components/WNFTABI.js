global.wnft = {
  "address": "0xB66D666Ea4b1197D0e31be5C00D5117a3d0A7ed2",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "symbol",
          "type": "string"
        },
        {
          "internalType": "contract IMinting",
          "name": "newMintingContract",
          "type": "address"
        },
        {
          "internalType": "contract Resolver",
          "name": "ensResolver",
          "type": "address"
        },
        {
          "internalType": "contract ENS",
          "name": "ens",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "ensNode",
          "type": "bytes32"
        },
        {
          "internalType": "contract AggregatorV3Interface",
          "name": "newPriceFeed",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "field",
          "type": "string"
        }
      ],
      "name": "CollectionOnchainMetadataFieldAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "newContract",
          "type": "address"
        }
      ],
      "name": "ContractSwitch",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "field",
          "type": "string"
        },
        {
          "components": [
            {
              "internalType": "address",
              "name": "SCaddress",
              "type": "address"
            },
            {
              "internalType": "bytes4",
              "name": "SCinterface",
              "type": "bytes4"
            }
          ],
          "indexed": false,
          "internalType": "struct WNFT.SC",
          "name": "fieldSc",
          "type": "tuple"
        }
      ],
      "name": "TokenOnchainMetadataFieldAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "ENSNodeID",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "ENSRegistar",
      "outputs": [
        {
          "internalType": "contract ENS",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "ENSResolver",
      "outputs": [
        {
          "internalType": "contract Resolver",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "i",
          "type": "uint256"
        }
      ],
      "name": "NthToken",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "fieldName",
          "type": "string"
        }
      ],
      "name": "addCollectionOnchainMetadataField",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "SCinterface",
          "type": "bytes4"
        },
        {
          "internalType": "address",
          "name": "SCaddress",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "fieldName",
          "type": "string"
        }
      ],
      "name": "addTokenOnchainMetadataField",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "amount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "canMint",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "collectionMetadataFieldNamesCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "fieldName",
          "type": "string"
        }
      ],
      "name": "collectionOnchainMetadata",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "contractSwitched",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "ensContenthash",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getCollectionMetadataField",
      "outputs": [
        {
          "internalType": "string[]",
          "name": "",
          "type": "string[]"
        },
        {
          "internalType": "string[]",
          "name": "",
          "type": "string[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getTokenMetadataField",
      "outputs": [
        {
          "internalType": "string[]",
          "name": "",
          "type": "string[]"
        },
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        },
        {
          "internalType": "bytes4[]",
          "name": "",
          "type": "bytes4[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "uri",
          "type": "string"
        }
      ],
      "name": "mintWithTokenURI",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "mintingContract",
      "outputs": [
        {
          "internalType": "contract IMinting",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "fieldName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "fieldValue",
          "type": "string"
        }
      ],
      "name": "setCollectionOnchainMetadata",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newContract",
          "type": "address"
        }
      ],
      "name": "setContractSwitched",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "hash",
          "type": "bytes"
        }
      ],
      "name": "setENSContenthash",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "ensNode",
          "type": "bytes32"
        }
      ],
      "name": "setENSNodeID",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract ENS",
          "name": "ensRegistar",
          "type": "address"
        }
      ],
      "name": "setENSRegistar",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract Resolver",
          "name": "ensResolver",
          "type": "address"
        }
      ],
      "name": "setENSResolver",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract IMinting",
          "name": "newContract",
          "type": "address"
        }
      ],
      "name": "setMintingContract",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "field",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "value",
          "type": "string"
        }
      ],
      "name": "setTokenOnchainMetadataString",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "field",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "setTokenOnchainMetadataUint",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenPriceInTenthOfCent",
          "type": "uint256"
        }
      ],
      "name": "setTokenPrice",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "uri",
          "type": "string"
        }
      ],
      "name": "setTokenURI",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "uri",
          "type": "string"
        }
      ],
      "name": "setWnftUri",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenExists",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "field",
          "type": "string"
        }
      ],
      "name": "tokenOnchainMetadataString",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "field",
          "type": "string"
        }
      ],
      "name": "tokenOnchainMetadataUint",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "tokensMetadataFieldNamesCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferENSName",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "wnftPriceInUSDPOW8",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "wnftUri",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "transactionHash": "0x70dcc6cbc17f6c03f9c9dd211d5dd42e0f8ceb8a8adb1ba9a1cce3d16557ad6d",
  "receipt": {
    "to": null,
    "from": "0x552A25B4AeDd3098f02Af155fb0eE8097626447b",
    "contractAddress": "0xB66D666Ea4b1197D0e31be5C00D5117a3d0A7ed2",
    "transactionIndex": 0,
    "gasUsed": "3824032",
    "logsBloom": "0x00000020000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000001000000000000000000000000000000000000020000000000000000000800000000000000000000000000000000400000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000800000",
    "blockHash": "0x83dff75c050c2b220236a2a31117ee0b18d4b4686671d237c4da17f87ef143f2",
    "transactionHash": "0x70dcc6cbc17f6c03f9c9dd211d5dd42e0f8ceb8a8adb1ba9a1cce3d16557ad6d",
    "logs": [
      {
        "transactionIndex": 0,
        "blockNumber": 6764255,
        "transactionHash": "0x70dcc6cbc17f6c03f9c9dd211d5dd42e0f8ceb8a8adb1ba9a1cce3d16557ad6d",
        "address": "0xB66D666Ea4b1197D0e31be5C00D5117a3d0A7ed2",
        "topics": [
          "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0",
          "0x0000000000000000000000000000000000000000000000000000000000000000",
          "0x000000000000000000000000552a25b4aedd3098f02af155fb0ee8097626447b"
        ],
        "data": "0x",
        "logIndex": 0,
        "blockHash": "0x83dff75c050c2b220236a2a31117ee0b18d4b4686671d237c4da17f87ef143f2"
      }
    ],
    "blockNumber": 6764255,
    "cumulativeGasUsed": "3824032",
    "status": 1,
    "byzantium": true
  },
  "args": [
    "Citadel",
    "CIT",
    "0x690A2afe4f0A7D84509dBe4657bC63dF9E339F46",
    "0x4B1488B7a6B320d2D721406204aBc3eeAa9AD329",
    "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
    "0x18b7e70c27aa3a4fd844e78c153b49a03233f5588351c1fc26cff3486469b379",
    "0xbA97C2102c8C813B562c436abbE036F3F28A2d79"
  ],
  "numDeployments": 3,
  "solcInputHash": "5948a60dd337f5c446d6f8704b40f94f",
  "metadata": "{\"compiler\":{\"version\":\"0.8.0+commit.c7dfd78e\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"symbol\",\"type\":\"string\"},{\"internalType\":\"contract IMinting\",\"name\":\"newMintingContract\",\"type\":\"address\"},{\"internalType\":\"contract Resolver\",\"name\":\"ensResolver\",\"type\":\"address\"},{\"internalType\":\"contract ENS\",\"name\":\"ens\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"ensNode\",\"type\":\"bytes32\"},{\"internalType\":\"contract AggregatorV3Interface\",\"name\":\"newPriceFeed\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"field\",\"type\":\"string\"}],\"name\":\"CollectionOnchainMetadataFieldAdded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"newContract\",\"type\":\"address\"}],\"name\":\"ContractSwitch\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"field\",\"type\":\"string\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"SCaddress\",\"type\":\"address\"},{\"internalType\":\"bytes4\",\"name\":\"SCinterface\",\"type\":\"bytes4\"}],\"indexed\":false,\"internalType\":\"struct WNFT.SC\",\"name\":\"fieldSc\",\"type\":\"tuple\"}],\"name\":\"TokenOnchainMetadataFieldAdded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"ENSNodeID\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"ENSRegistar\",\"outputs\":[{\"internalType\":\"contract ENS\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"ENSResolver\",\"outputs\":[{\"internalType\":\"contract Resolver\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"i\",\"type\":\"uint256\"}],\"name\":\"NthToken\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"fieldName\",\"type\":\"string\"}],\"name\":\"addCollectionOnchainMetadataField\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"SCinterface\",\"type\":\"bytes4\"},{\"internalType\":\"address\",\"name\":\"SCaddress\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"fieldName\",\"type\":\"string\"}],\"name\":\"addTokenOnchainMetadataField\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"amount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"canMint\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"collectionMetadataFieldNamesCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"fieldName\",\"type\":\"string\"}],\"name\":\"collectionOnchainMetadata\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"contractSwitched\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"ensContenthash\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getCollectionMetadataField\",\"outputs\":[{\"internalType\":\"string[]\",\"name\":\"\",\"type\":\"string[]\"},{\"internalType\":\"string[]\",\"name\":\"\",\"type\":\"string[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getTokenMetadataField\",\"outputs\":[{\"internalType\":\"string[]\",\"name\":\"\",\"type\":\"string[]\"},{\"internalType\":\"address[]\",\"name\":\"\",\"type\":\"address[]\"},{\"internalType\":\"bytes4[]\",\"name\":\"\",\"type\":\"bytes4[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"uri\",\"type\":\"string\"}],\"name\":\"mintWithTokenURI\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"mintingContract\",\"outputs\":[{\"internalType\":\"contract IMinting\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"_data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"fieldName\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"fieldValue\",\"type\":\"string\"}],\"name\":\"setCollectionOnchainMetadata\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newContract\",\"type\":\"address\"}],\"name\":\"setContractSwitched\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"hash\",\"type\":\"bytes\"}],\"name\":\"setENSContenthash\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"ensNode\",\"type\":\"bytes32\"}],\"name\":\"setENSNodeID\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract ENS\",\"name\":\"ensRegistar\",\"type\":\"address\"}],\"name\":\"setENSRegistar\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract Resolver\",\"name\":\"ensResolver\",\"type\":\"address\"}],\"name\":\"setENSResolver\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IMinting\",\"name\":\"newContract\",\"type\":\"address\"}],\"name\":\"setMintingContract\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"field\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"value\",\"type\":\"string\"}],\"name\":\"setTokenOnchainMetadataString\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"field\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"setTokenOnchainMetadataUint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenPriceInTenthOfCent\",\"type\":\"uint256\"}],\"name\":\"setTokenPrice\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"uri\",\"type\":\"string\"}],\"name\":\"setTokenURI\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"uri\",\"type\":\"string\"}],\"name\":\"setWnftUri\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenExists\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"field\",\"type\":\"string\"}],\"name\":\"tokenOnchainMetadataString\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"field\",\"type\":\"string\"}],\"name\":\"tokenOnchainMetadataUint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"tokensMetadataFieldNamesCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferENSName\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"wnftPriceInUSDPOW8\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"wnftUri\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"approve(address,uint256)\":{\"details\":\"See {IERC721-approve}.\"},\"balanceOf(address)\":{\"details\":\"See {IERC721-balanceOf}.\"},\"getApproved(uint256)\":{\"details\":\"See {IERC721-getApproved}.\"},\"isApprovedForAll(address,address)\":{\"details\":\"See {IERC721-isApprovedForAll}.\"},\"name()\":{\"details\":\"See {IERC721Metadata-name}.\"},\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"ownerOf(uint256)\":{\"details\":\"See {IERC721-ownerOf}.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.\"},\"safeTransferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"safeTransferFrom(address,address,uint256,bytes)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"setApprovalForAll(address,bool)\":{\"details\":\"See {IERC721-setApprovalForAll}.\"},\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}.\"},\"symbol()\":{\"details\":\"See {IERC721Metadata-symbol}.\"},\"tokenURI(uint256)\":{\"details\":\"See {IERC721Metadata-tokenURI}.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-transferFrom}.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/WNFT.sol\":\"WNFT\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":1},\"remappings\":[]},\"sources\":{\"@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity ^0.8.0;\\n\\ninterface AggregatorV3Interface {\\n  function decimals() external view returns (uint8);\\n\\n  function description() external view returns (string memory);\\n\\n  function version() external view returns (uint256);\\n\\n  // getRoundData and latestRoundData should both raise \\\"No data present\\\"\\n  // if they do not have data to report, instead of returning unset values\\n  // which could be misinterpreted as actual reported values.\\n  function getRoundData(uint80 _roundId)\\n    external\\n    view\\n    returns (\\n      uint80 roundId,\\n      int256 answer,\\n      uint256 startedAt,\\n      uint256 updatedAt,\\n      uint80 answeredInRound\\n    );\\n\\n  function latestRoundData()\\n    external\\n    view\\n    returns (\\n      uint80 roundId,\\n      int256 answer,\\n      uint256 startedAt,\\n      uint256 updatedAt,\\n      uint80 answeredInRound\\n    );\\n}\\n\",\"keccak256\":\"0xf2b6c9adb3552254df1445b73563cf014434ff5e78663e9b961b6c059506ceb5\",\"license\":\"MIT\"},\"@ensdomains/ens/contracts/ENS.sol\":{\"content\":\"pragma solidity >=0.4.24;\\n\\ninterface ENS {\\n\\n    // Logged when the owner of a node assigns a new owner to a subnode.\\n    event NewOwner(bytes32 indexed node, bytes32 indexed label, address owner);\\n\\n    // Logged when the owner of a node transfers ownership to a new account.\\n    event Transfer(bytes32 indexed node, address owner);\\n\\n    // Logged when the resolver for a node changes.\\n    event NewResolver(bytes32 indexed node, address resolver);\\n\\n    // Logged when the TTL of a node changes\\n    event NewTTL(bytes32 indexed node, uint64 ttl);\\n\\n    // Logged when an operator is added or removed.\\n    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);\\n\\n    function setRecord(bytes32 node, address owner, address resolver, uint64 ttl) external;\\n    function setSubnodeRecord(bytes32 node, bytes32 label, address owner, address resolver, uint64 ttl) external;\\n    function setSubnodeOwner(bytes32 node, bytes32 label, address owner) external returns(bytes32);\\n    function setResolver(bytes32 node, address resolver) external;\\n    function setOwner(bytes32 node, address owner) external;\\n    function setTTL(bytes32 node, uint64 ttl) external;\\n    function setApprovalForAll(address operator, bool approved) external;\\n    function owner(bytes32 node) external view returns (address);\\n    function resolver(bytes32 node) external view returns (address);\\n    function ttl(bytes32 node) external view returns (uint64);\\n    function recordExists(bytes32 node) external view returns (bool);\\n    function isApprovedForAll(address owner, address operator) external view returns (bool);\\n}\\n\",\"keccak256\":\"0x10b88673d8c180cd62523be4fec7607c65594eb4f0c561fa0fbc0784422b4871\"},\"@ensdomains/resolver/contracts/Resolver.sol\":{\"content\":\"pragma solidity >=0.4.25;\\npragma experimental ABIEncoderV2;\\n\\n/**\\n * A generic resolver interface which includes all the functions including the ones deprecated\\n */\\ninterface Resolver{\\n    event AddrChanged(bytes32 indexed node, address a);\\n    event AddressChanged(bytes32 indexed node, uint coinType, bytes newAddress);\\n    event NameChanged(bytes32 indexed node, string name);\\n    event ABIChanged(bytes32 indexed node, uint256 indexed contentType);\\n    event PubkeyChanged(bytes32 indexed node, bytes32 x, bytes32 y);\\n    event TextChanged(bytes32 indexed node, string indexed indexedKey, string key);\\n    event ContenthashChanged(bytes32 indexed node, bytes hash);\\n    /* Deprecated events */\\n    event ContentChanged(bytes32 indexed node, bytes32 hash);\\n\\n    function ABI(bytes32 node, uint256 contentTypes) external view returns (uint256, bytes memory);\\n    function addr(bytes32 node) external view returns (address);\\n    function addr(bytes32 node, uint coinType) external view returns(bytes memory);\\n    function contenthash(bytes32 node) external view returns (bytes memory);\\n    function dnsrr(bytes32 node) external view returns (bytes memory);\\n    function name(bytes32 node) external view returns (string memory);\\n    function pubkey(bytes32 node) external view returns (bytes32 x, bytes32 y);\\n    function text(bytes32 node, string calldata key) external view returns (string memory);\\n    function interfaceImplementer(bytes32 node, bytes4 interfaceID) external view returns (address);\\n    function setABI(bytes32 node, uint256 contentType, bytes calldata data) external;\\n    function setAddr(bytes32 node, address addr) external;\\n    function setAddr(bytes32 node, uint coinType, bytes calldata a) external;\\n    function setContenthash(bytes32 node, bytes calldata hash) external;\\n    function setDnsrr(bytes32 node, bytes calldata data) external;\\n    function setName(bytes32 node, string calldata _name) external;\\n    function setPubkey(bytes32 node, bytes32 x, bytes32 y) external;\\n    function setText(bytes32 node, string calldata key, string calldata value) external;\\n    function setInterface(bytes32 node, bytes4 interfaceID, address implementer) external;\\n    function supportsInterface(bytes4 interfaceID) external pure returns (bool);\\n    function multicall(bytes[] calldata data) external returns(bytes[] memory results);\\n\\n    /* Deprecated functions */\\n    function content(bytes32 node) external view returns (bytes32);\\n    function multihash(bytes32 node) external view returns (bytes memory);\\n    function setContent(bytes32 node, bytes32 hash) external;\\n    function setMultihash(bytes32 node, bytes calldata hash) external;\\n}\\n\",\"keccak256\":\"0xb992c6a78066be42d7e9b54d0e385e87267d7e229099ed6c857c9d9ace43995d\"},\"@openzeppelin/contracts/access/Ownable.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (access/Ownable.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\\"../utils/Context.sol\\\";\\n\\n/**\\n * @dev Contract module which provides a basic access control mechanism, where\\n * there is an account (an owner) that can be granted exclusive access to\\n * specific functions.\\n *\\n * By default, the owner account will be the one that deploys the contract. This\\n * can later be changed with {transferOwnership}.\\n *\\n * This module is used through inheritance. It will make available the modifier\\n * `onlyOwner`, which can be applied to your functions to restrict their use to\\n * the owner.\\n */\\nabstract contract Ownable is Context {\\n    address private _owner;\\n\\n    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);\\n\\n    /**\\n     * @dev Initializes the contract setting the deployer as the initial owner.\\n     */\\n    constructor() {\\n        _transferOwnership(_msgSender());\\n    }\\n\\n    /**\\n     * @dev Returns the address of the current owner.\\n     */\\n    function owner() public view virtual returns (address) {\\n        return _owner;\\n    }\\n\\n    /**\\n     * @dev Throws if called by any account other than the owner.\\n     */\\n    modifier onlyOwner() {\\n        require(owner() == _msgSender(), \\\"Ownable: caller is not the owner\\\");\\n        _;\\n    }\\n\\n    /**\\n     * @dev Leaves the contract without owner. It will not be possible to call\\n     * `onlyOwner` functions anymore. Can only be called by the current owner.\\n     *\\n     * NOTE: Renouncing ownership will leave the contract without an owner,\\n     * thereby removing any functionality that is only available to the owner.\\n     */\\n    function renounceOwnership() public virtual onlyOwner {\\n        _transferOwnership(address(0));\\n    }\\n\\n    /**\\n     * @dev Transfers ownership of the contract to a new account (`newOwner`).\\n     * Can only be called by the current owner.\\n     */\\n    function transferOwnership(address newOwner) public virtual onlyOwner {\\n        require(newOwner != address(0), \\\"Ownable: new owner is the zero address\\\");\\n        _transferOwnership(newOwner);\\n    }\\n\\n    /**\\n     * @dev Transfers ownership of the contract to a new account (`newOwner`).\\n     * Internal function without access restriction.\\n     */\\n    function _transferOwnership(address newOwner) internal virtual {\\n        address oldOwner = _owner;\\n        _owner = newOwner;\\n        emit OwnershipTransferred(oldOwner, newOwner);\\n    }\\n}\\n\",\"keccak256\":\"0x24e0364e503a9bbde94c715d26573a76f14cd2a202d45f96f52134ab806b67b9\",\"license\":\"MIT\"},\"@openzeppelin/contracts/token/ERC721/ERC721.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (token/ERC721/ERC721.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\\"./IERC721.sol\\\";\\nimport \\\"./IERC721Receiver.sol\\\";\\nimport \\\"./extensions/IERC721Metadata.sol\\\";\\nimport \\\"../../utils/Address.sol\\\";\\nimport \\\"../../utils/Context.sol\\\";\\nimport \\\"../../utils/Strings.sol\\\";\\nimport \\\"../../utils/introspection/ERC165.sol\\\";\\n\\n/**\\n * @dev Implementation of https://eips.ethereum.org/EIPS/eip-721[ERC721] Non-Fungible Token Standard, including\\n * the Metadata extension, but not including the Enumerable extension, which is available separately as\\n * {ERC721Enumerable}.\\n */\\ncontract ERC721 is Context, ERC165, IERC721, IERC721Metadata {\\n    using Address for address;\\n    using Strings for uint256;\\n\\n    // Token name\\n    string private _name;\\n\\n    // Token symbol\\n    string private _symbol;\\n\\n    // Mapping from token ID to owner address\\n    mapping(uint256 => address) private _owners;\\n\\n    // Mapping owner address to token count\\n    mapping(address => uint256) private _balances;\\n\\n    // Mapping from token ID to approved address\\n    mapping(uint256 => address) private _tokenApprovals;\\n\\n    // Mapping from owner to operator approvals\\n    mapping(address => mapping(address => bool)) private _operatorApprovals;\\n\\n    /**\\n     * @dev Initializes the contract by setting a `name` and a `symbol` to the token collection.\\n     */\\n    constructor(string memory name_, string memory symbol_) {\\n        _name = name_;\\n        _symbol = symbol_;\\n    }\\n\\n    /**\\n     * @dev See {IERC165-supportsInterface}.\\n     */\\n    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC165, IERC165) returns (bool) {\\n        return\\n            interfaceId == type(IERC721).interfaceId ||\\n            interfaceId == type(IERC721Metadata).interfaceId ||\\n            super.supportsInterface(interfaceId);\\n    }\\n\\n    /**\\n     * @dev See {IERC721-balanceOf}.\\n     */\\n    function balanceOf(address owner) public view virtual override returns (uint256) {\\n        require(owner != address(0), \\\"ERC721: balance query for the zero address\\\");\\n        return _balances[owner];\\n    }\\n\\n    /**\\n     * @dev See {IERC721-ownerOf}.\\n     */\\n    function ownerOf(uint256 tokenId) public view virtual override returns (address) {\\n        address owner = _owners[tokenId];\\n        require(owner != address(0), \\\"ERC721: owner query for nonexistent token\\\");\\n        return owner;\\n    }\\n\\n    /**\\n     * @dev See {IERC721Metadata-name}.\\n     */\\n    function name() public view virtual override returns (string memory) {\\n        return _name;\\n    }\\n\\n    /**\\n     * @dev See {IERC721Metadata-symbol}.\\n     */\\n    function symbol() public view virtual override returns (string memory) {\\n        return _symbol;\\n    }\\n\\n    /**\\n     * @dev See {IERC721Metadata-tokenURI}.\\n     */\\n    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {\\n        require(_exists(tokenId), \\\"ERC721Metadata: URI query for nonexistent token\\\");\\n\\n        string memory baseURI = _baseURI();\\n        return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, tokenId.toString())) : \\\"\\\";\\n    }\\n\\n    /**\\n     * @dev Base URI for computing {tokenURI}. If set, the resulting URI for each\\n     * token will be the concatenation of the `baseURI` and the `tokenId`. Empty\\n     * by default, can be overriden in child contracts.\\n     */\\n    function _baseURI() internal view virtual returns (string memory) {\\n        return \\\"\\\";\\n    }\\n\\n    /**\\n     * @dev See {IERC721-approve}.\\n     */\\n    function approve(address to, uint256 tokenId) public virtual override {\\n        address owner = ERC721.ownerOf(tokenId);\\n        require(to != owner, \\\"ERC721: approval to current owner\\\");\\n\\n        require(\\n            _msgSender() == owner || isApprovedForAll(owner, _msgSender()),\\n            \\\"ERC721: approve caller is not owner nor approved for all\\\"\\n        );\\n\\n        _approve(to, tokenId);\\n    }\\n\\n    /**\\n     * @dev See {IERC721-getApproved}.\\n     */\\n    function getApproved(uint256 tokenId) public view virtual override returns (address) {\\n        require(_exists(tokenId), \\\"ERC721: approved query for nonexistent token\\\");\\n\\n        return _tokenApprovals[tokenId];\\n    }\\n\\n    /**\\n     * @dev See {IERC721-setApprovalForAll}.\\n     */\\n    function setApprovalForAll(address operator, bool approved) public virtual override {\\n        _setApprovalForAll(_msgSender(), operator, approved);\\n    }\\n\\n    /**\\n     * @dev See {IERC721-isApprovedForAll}.\\n     */\\n    function isApprovedForAll(address owner, address operator) public view virtual override returns (bool) {\\n        return _operatorApprovals[owner][operator];\\n    }\\n\\n    /**\\n     * @dev See {IERC721-transferFrom}.\\n     */\\n    function transferFrom(\\n        address from,\\n        address to,\\n        uint256 tokenId\\n    ) public virtual override {\\n        //solhint-disable-next-line max-line-length\\n        require(_isApprovedOrOwner(_msgSender(), tokenId), \\\"ERC721: transfer caller is not owner nor approved\\\");\\n\\n        _transfer(from, to, tokenId);\\n    }\\n\\n    /**\\n     * @dev See {IERC721-safeTransferFrom}.\\n     */\\n    function safeTransferFrom(\\n        address from,\\n        address to,\\n        uint256 tokenId\\n    ) public virtual override {\\n        safeTransferFrom(from, to, tokenId, \\\"\\\");\\n    }\\n\\n    /**\\n     * @dev See {IERC721-safeTransferFrom}.\\n     */\\n    function safeTransferFrom(\\n        address from,\\n        address to,\\n        uint256 tokenId,\\n        bytes memory _data\\n    ) public virtual override {\\n        require(_isApprovedOrOwner(_msgSender(), tokenId), \\\"ERC721: transfer caller is not owner nor approved\\\");\\n        _safeTransfer(from, to, tokenId, _data);\\n    }\\n\\n    /**\\n     * @dev Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients\\n     * are aware of the ERC721 protocol to prevent tokens from being forever locked.\\n     *\\n     * `_data` is additional data, it has no specified format and it is sent in call to `to`.\\n     *\\n     * This internal function is equivalent to {safeTransferFrom}, and can be used to e.g.\\n     * implement alternative mechanisms to perform token transfer, such as signature-based.\\n     *\\n     * Requirements:\\n     *\\n     * - `from` cannot be the zero address.\\n     * - `to` cannot be the zero address.\\n     * - `tokenId` token must exist and be owned by `from`.\\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function _safeTransfer(\\n        address from,\\n        address to,\\n        uint256 tokenId,\\n        bytes memory _data\\n    ) internal virtual {\\n        _transfer(from, to, tokenId);\\n        require(_checkOnERC721Received(from, to, tokenId, _data), \\\"ERC721: transfer to non ERC721Receiver implementer\\\");\\n    }\\n\\n    /**\\n     * @dev Returns whether `tokenId` exists.\\n     *\\n     * Tokens can be managed by their owner or approved accounts via {approve} or {setApprovalForAll}.\\n     *\\n     * Tokens start existing when they are minted (`_mint`),\\n     * and stop existing when they are burned (`_burn`).\\n     */\\n    function _exists(uint256 tokenId) internal view virtual returns (bool) {\\n        return _owners[tokenId] != address(0);\\n    }\\n\\n    /**\\n     * @dev Returns whether `spender` is allowed to manage `tokenId`.\\n     *\\n     * Requirements:\\n     *\\n     * - `tokenId` must exist.\\n     */\\n    function _isApprovedOrOwner(address spender, uint256 tokenId) internal view virtual returns (bool) {\\n        require(_exists(tokenId), \\\"ERC721: operator query for nonexistent token\\\");\\n        address owner = ERC721.ownerOf(tokenId);\\n        return (spender == owner || getApproved(tokenId) == spender || isApprovedForAll(owner, spender));\\n    }\\n\\n    /**\\n     * @dev Safely mints `tokenId` and transfers it to `to`.\\n     *\\n     * Requirements:\\n     *\\n     * - `tokenId` must not exist.\\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function _safeMint(address to, uint256 tokenId) internal virtual {\\n        _safeMint(to, tokenId, \\\"\\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-ERC721-_safeMint-address-uint256-}[`_safeMint`], with an additional `data` parameter which is\\n     * forwarded in {IERC721Receiver-onERC721Received} to contract recipients.\\n     */\\n    function _safeMint(\\n        address to,\\n        uint256 tokenId,\\n        bytes memory _data\\n    ) internal virtual {\\n        _mint(to, tokenId);\\n        require(\\n            _checkOnERC721Received(address(0), to, tokenId, _data),\\n            \\\"ERC721: transfer to non ERC721Receiver implementer\\\"\\n        );\\n    }\\n\\n    /**\\n     * @dev Mints `tokenId` and transfers it to `to`.\\n     *\\n     * WARNING: Usage of this method is discouraged, use {_safeMint} whenever possible\\n     *\\n     * Requirements:\\n     *\\n     * - `tokenId` must not exist.\\n     * - `to` cannot be the zero address.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function _mint(address to, uint256 tokenId) internal virtual {\\n        require(to != address(0), \\\"ERC721: mint to the zero address\\\");\\n        require(!_exists(tokenId), \\\"ERC721: token already minted\\\");\\n\\n        _beforeTokenTransfer(address(0), to, tokenId);\\n\\n        _balances[to] += 1;\\n        _owners[tokenId] = to;\\n\\n        emit Transfer(address(0), to, tokenId);\\n    }\\n\\n    /**\\n     * @dev Destroys `tokenId`.\\n     * The approval is cleared when the token is burned.\\n     *\\n     * Requirements:\\n     *\\n     * - `tokenId` must exist.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function _burn(uint256 tokenId) internal virtual {\\n        address owner = ERC721.ownerOf(tokenId);\\n\\n        _beforeTokenTransfer(owner, address(0), tokenId);\\n\\n        // Clear approvals\\n        _approve(address(0), tokenId);\\n\\n        _balances[owner] -= 1;\\n        delete _owners[tokenId];\\n\\n        emit Transfer(owner, address(0), tokenId);\\n    }\\n\\n    /**\\n     * @dev Transfers `tokenId` from `from` to `to`.\\n     *  As opposed to {transferFrom}, this imposes no restrictions on msg.sender.\\n     *\\n     * Requirements:\\n     *\\n     * - `to` cannot be the zero address.\\n     * - `tokenId` token must be owned by `from`.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function _transfer(\\n        address from,\\n        address to,\\n        uint256 tokenId\\n    ) internal virtual {\\n        require(ERC721.ownerOf(tokenId) == from, \\\"ERC721: transfer of token that is not own\\\");\\n        require(to != address(0), \\\"ERC721: transfer to the zero address\\\");\\n\\n        _beforeTokenTransfer(from, to, tokenId);\\n\\n        // Clear approvals from the previous owner\\n        _approve(address(0), tokenId);\\n\\n        _balances[from] -= 1;\\n        _balances[to] += 1;\\n        _owners[tokenId] = to;\\n\\n        emit Transfer(from, to, tokenId);\\n    }\\n\\n    /**\\n     * @dev Approve `to` to operate on `tokenId`\\n     *\\n     * Emits a {Approval} event.\\n     */\\n    function _approve(address to, uint256 tokenId) internal virtual {\\n        _tokenApprovals[tokenId] = to;\\n        emit Approval(ERC721.ownerOf(tokenId), to, tokenId);\\n    }\\n\\n    /**\\n     * @dev Approve `operator` to operate on all of `owner` tokens\\n     *\\n     * Emits a {ApprovalForAll} event.\\n     */\\n    function _setApprovalForAll(\\n        address owner,\\n        address operator,\\n        bool approved\\n    ) internal virtual {\\n        require(owner != operator, \\\"ERC721: approve to caller\\\");\\n        _operatorApprovals[owner][operator] = approved;\\n        emit ApprovalForAll(owner, operator, approved);\\n    }\\n\\n    /**\\n     * @dev Internal function to invoke {IERC721Receiver-onERC721Received} on a target address.\\n     * The call is not executed if the target address is not a contract.\\n     *\\n     * @param from address representing the previous owner of the given token ID\\n     * @param to target address that will receive the tokens\\n     * @param tokenId uint256 ID of the token to be transferred\\n     * @param _data bytes optional data to send along with the call\\n     * @return bool whether the call correctly returned the expected magic value\\n     */\\n    function _checkOnERC721Received(\\n        address from,\\n        address to,\\n        uint256 tokenId,\\n        bytes memory _data\\n    ) private returns (bool) {\\n        if (to.isContract()) {\\n            try IERC721Receiver(to).onERC721Received(_msgSender(), from, tokenId, _data) returns (bytes4 retval) {\\n                return retval == IERC721Receiver.onERC721Received.selector;\\n            } catch (bytes memory reason) {\\n                if (reason.length == 0) {\\n                    revert(\\\"ERC721: transfer to non ERC721Receiver implementer\\\");\\n                } else {\\n                    assembly {\\n                        revert(add(32, reason), mload(reason))\\n                    }\\n                }\\n            }\\n        } else {\\n            return true;\\n        }\\n    }\\n\\n    /**\\n     * @dev Hook that is called before any token transfer. This includes minting\\n     * and burning.\\n     *\\n     * Calling conditions:\\n     *\\n     * - When `from` and `to` are both non-zero, ``from``'s `tokenId` will be\\n     * transferred to `to`.\\n     * - When `from` is zero, `tokenId` will be minted for `to`.\\n     * - When `to` is zero, ``from``'s `tokenId` will be burned.\\n     * - `from` and `to` are never both zero.\\n     *\\n     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\\n     */\\n    function _beforeTokenTransfer(\\n        address from,\\n        address to,\\n        uint256 tokenId\\n    ) internal virtual {}\\n}\\n\",\"keccak256\":\"0x81c02855bc239e16ec09eee000a8bec691424c715188d6d881037e69c45414c4\",\"license\":\"MIT\"},\"@openzeppelin/contracts/token/ERC721/IERC721.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (token/ERC721/IERC721.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\\"../../utils/introspection/IERC165.sol\\\";\\n\\n/**\\n * @dev Required interface of an ERC721 compliant contract.\\n */\\ninterface IERC721 is IERC165 {\\n    /**\\n     * @dev Emitted when `tokenId` token is transferred from `from` to `to`.\\n     */\\n    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);\\n\\n    /**\\n     * @dev Emitted when `owner` enables `approved` to manage the `tokenId` token.\\n     */\\n    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);\\n\\n    /**\\n     * @dev Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets.\\n     */\\n    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);\\n\\n    /**\\n     * @dev Returns the number of tokens in ``owner``'s account.\\n     */\\n    function balanceOf(address owner) external view returns (uint256 balance);\\n\\n    /**\\n     * @dev Returns the owner of the `tokenId` token.\\n     *\\n     * Requirements:\\n     *\\n     * - `tokenId` must exist.\\n     */\\n    function ownerOf(uint256 tokenId) external view returns (address owner);\\n\\n    /**\\n     * @dev Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients\\n     * are aware of the ERC721 protocol to prevent tokens from being forever locked.\\n     *\\n     * Requirements:\\n     *\\n     * - `from` cannot be the zero address.\\n     * - `to` cannot be the zero address.\\n     * - `tokenId` token must exist and be owned by `from`.\\n     * - If the caller is not `from`, it must be have been allowed to move this token by either {approve} or {setApprovalForAll}.\\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function safeTransferFrom(\\n        address from,\\n        address to,\\n        uint256 tokenId\\n    ) external;\\n\\n    /**\\n     * @dev Transfers `tokenId` token from `from` to `to`.\\n     *\\n     * WARNING: Usage of this method is discouraged, use {safeTransferFrom} whenever possible.\\n     *\\n     * Requirements:\\n     *\\n     * - `from` cannot be the zero address.\\n     * - `to` cannot be the zero address.\\n     * - `tokenId` token must be owned by `from`.\\n     * - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function transferFrom(\\n        address from,\\n        address to,\\n        uint256 tokenId\\n    ) external;\\n\\n    /**\\n     * @dev Gives permission to `to` to transfer `tokenId` token to another account.\\n     * The approval is cleared when the token is transferred.\\n     *\\n     * Only a single account can be approved at a time, so approving the zero address clears previous approvals.\\n     *\\n     * Requirements:\\n     *\\n     * - The caller must own the token or be an approved operator.\\n     * - `tokenId` must exist.\\n     *\\n     * Emits an {Approval} event.\\n     */\\n    function approve(address to, uint256 tokenId) external;\\n\\n    /**\\n     * @dev Returns the account approved for `tokenId` token.\\n     *\\n     * Requirements:\\n     *\\n     * - `tokenId` must exist.\\n     */\\n    function getApproved(uint256 tokenId) external view returns (address operator);\\n\\n    /**\\n     * @dev Approve or remove `operator` as an operator for the caller.\\n     * Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller.\\n     *\\n     * Requirements:\\n     *\\n     * - The `operator` cannot be the caller.\\n     *\\n     * Emits an {ApprovalForAll} event.\\n     */\\n    function setApprovalForAll(address operator, bool _approved) external;\\n\\n    /**\\n     * @dev Returns if the `operator` is allowed to manage all of the assets of `owner`.\\n     *\\n     * See {setApprovalForAll}\\n     */\\n    function isApprovedForAll(address owner, address operator) external view returns (bool);\\n\\n    /**\\n     * @dev Safely transfers `tokenId` token from `from` to `to`.\\n     *\\n     * Requirements:\\n     *\\n     * - `from` cannot be the zero address.\\n     * - `to` cannot be the zero address.\\n     * - `tokenId` token must exist and be owned by `from`.\\n     * - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.\\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function safeTransferFrom(\\n        address from,\\n        address to,\\n        uint256 tokenId,\\n        bytes calldata data\\n    ) external;\\n}\\n\",\"keccak256\":\"0x516a22876c1fab47f49b1bc22b4614491cd05338af8bd2e7b382da090a079990\",\"license\":\"MIT\"},\"@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (token/ERC721/IERC721Receiver.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @title ERC721 token receiver interface\\n * @dev Interface for any contract that wants to support safeTransfers\\n * from ERC721 asset contracts.\\n */\\ninterface IERC721Receiver {\\n    /**\\n     * @dev Whenever an {IERC721} `tokenId` token is transferred to this contract via {IERC721-safeTransferFrom}\\n     * by `operator` from `from`, this function is called.\\n     *\\n     * It must return its Solidity selector to confirm the token transfer.\\n     * If any other value is returned or the interface is not implemented by the recipient, the transfer will be reverted.\\n     *\\n     * The selector can be obtained in Solidity with `IERC721.onERC721Received.selector`.\\n     */\\n    function onERC721Received(\\n        address operator,\\n        address from,\\n        uint256 tokenId,\\n        bytes calldata data\\n    ) external returns (bytes4);\\n}\\n\",\"keccak256\":\"0xd5fa74b4fb323776fa4a8158800fec9d5ac0fec0d6dd046dd93798632ada265f\",\"license\":\"MIT\"},\"@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (token/ERC721/extensions/ERC721URIStorage.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\\"../ERC721.sol\\\";\\n\\n/**\\n * @dev ERC721 token with storage based token URI management.\\n */\\nabstract contract ERC721URIStorage is ERC721 {\\n    using Strings for uint256;\\n\\n    // Optional mapping for token URIs\\n    mapping(uint256 => string) private _tokenURIs;\\n\\n    /**\\n     * @dev See {IERC721Metadata-tokenURI}.\\n     */\\n    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {\\n        require(_exists(tokenId), \\\"ERC721URIStorage: URI query for nonexistent token\\\");\\n\\n        string memory _tokenURI = _tokenURIs[tokenId];\\n        string memory base = _baseURI();\\n\\n        // If there is no base URI, return the token URI.\\n        if (bytes(base).length == 0) {\\n            return _tokenURI;\\n        }\\n        // If both are set, concatenate the baseURI and tokenURI (via abi.encodePacked).\\n        if (bytes(_tokenURI).length > 0) {\\n            return string(abi.encodePacked(base, _tokenURI));\\n        }\\n\\n        return super.tokenURI(tokenId);\\n    }\\n\\n    /**\\n     * @dev Sets `_tokenURI` as the tokenURI of `tokenId`.\\n     *\\n     * Requirements:\\n     *\\n     * - `tokenId` must exist.\\n     */\\n    function _setTokenURI(uint256 tokenId, string memory _tokenURI) internal virtual {\\n        require(_exists(tokenId), \\\"ERC721URIStorage: URI set of nonexistent token\\\");\\n        _tokenURIs[tokenId] = _tokenURI;\\n    }\\n\\n    /**\\n     * @dev Destroys `tokenId`.\\n     * The approval is cleared when the token is burned.\\n     *\\n     * Requirements:\\n     *\\n     * - `tokenId` must exist.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function _burn(uint256 tokenId) internal virtual override {\\n        super._burn(tokenId);\\n\\n        if (bytes(_tokenURIs[tokenId]).length != 0) {\\n            delete _tokenURIs[tokenId];\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0x1cbe42915bc66227970fe99bc0f783eb1de30f2b48f984af01ad45edb9658698\",\"license\":\"MIT\"},\"@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (token/ERC721/extensions/IERC721Metadata.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\\"../IERC721.sol\\\";\\n\\n/**\\n * @title ERC-721 Non-Fungible Token Standard, optional metadata extension\\n * @dev See https://eips.ethereum.org/EIPS/eip-721\\n */\\ninterface IERC721Metadata is IERC721 {\\n    /**\\n     * @dev Returns the token collection name.\\n     */\\n    function name() external view returns (string memory);\\n\\n    /**\\n     * @dev Returns the token collection symbol.\\n     */\\n    function symbol() external view returns (string memory);\\n\\n    /**\\n     * @dev Returns the Uniform Resource Identifier (URI) for `tokenId` token.\\n     */\\n    function tokenURI(uint256 tokenId) external view returns (string memory);\\n}\\n\",\"keccak256\":\"0x75b829ff2f26c14355d1cba20e16fe7b29ca58eb5fef665ede48bc0f9c6c74b9\",\"license\":\"MIT\"},\"@openzeppelin/contracts/utils/Address.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (utils/Address.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Collection of functions related to the address type\\n */\\nlibrary Address {\\n    /**\\n     * @dev Returns true if `account` is a contract.\\n     *\\n     * [IMPORTANT]\\n     * ====\\n     * It is unsafe to assume that an address for which this function returns\\n     * false is an externally-owned account (EOA) and not a contract.\\n     *\\n     * Among others, `isContract` will return false for the following\\n     * types of addresses:\\n     *\\n     *  - an externally-owned account\\n     *  - a contract in construction\\n     *  - an address where a contract will be created\\n     *  - an address where a contract lived, but was destroyed\\n     * ====\\n     */\\n    function isContract(address account) internal view returns (bool) {\\n        // This method relies on extcodesize, which returns 0 for contracts in\\n        // construction, since the code is only stored at the end of the\\n        // constructor execution.\\n\\n        uint256 size;\\n        assembly {\\n            size := extcodesize(account)\\n        }\\n        return size > 0;\\n    }\\n\\n    /**\\n     * @dev Replacement for Solidity's `transfer`: sends `amount` wei to\\n     * `recipient`, forwarding all available gas and reverting on errors.\\n     *\\n     * https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost\\n     * of certain opcodes, possibly making contracts go over the 2300 gas limit\\n     * imposed by `transfer`, making them unable to receive funds via\\n     * `transfer`. {sendValue} removes this limitation.\\n     *\\n     * https://diligence.consensys.net/posts/2019/09/stop-using-soliditys-transfer-now/[Learn more].\\n     *\\n     * IMPORTANT: because control is transferred to `recipient`, care must be\\n     * taken to not create reentrancy vulnerabilities. Consider using\\n     * {ReentrancyGuard} or the\\n     * https://solidity.readthedocs.io/en/v0.5.11/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern].\\n     */\\n    function sendValue(address payable recipient, uint256 amount) internal {\\n        require(address(this).balance >= amount, \\\"Address: insufficient balance\\\");\\n\\n        (bool success, ) = recipient.call{value: amount}(\\\"\\\");\\n        require(success, \\\"Address: unable to send value, recipient may have reverted\\\");\\n    }\\n\\n    /**\\n     * @dev Performs a Solidity function call using a low level `call`. A\\n     * plain `call` is an unsafe replacement for a function call: use this\\n     * function instead.\\n     *\\n     * If `target` reverts with a revert reason, it is bubbled up by this\\n     * function (like regular Solidity function calls).\\n     *\\n     * Returns the raw returned data. To convert to the expected return value,\\n     * use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].\\n     *\\n     * Requirements:\\n     *\\n     * - `target` must be a contract.\\n     * - calling `target` with `data` must not revert.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCall(address target, bytes memory data) internal returns (bytes memory) {\\n        return functionCall(target, data, \\\"Address: low-level call failed\\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`], but with\\n     * `errorMessage` as a fallback revert reason when `target` reverts.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCall(\\n        address target,\\n        bytes memory data,\\n        string memory errorMessage\\n    ) internal returns (bytes memory) {\\n        return functionCallWithValue(target, data, 0, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but also transferring `value` wei to `target`.\\n     *\\n     * Requirements:\\n     *\\n     * - the calling contract must have an ETH balance of at least `value`.\\n     * - the called Solidity function must be `payable`.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCallWithValue(\\n        address target,\\n        bytes memory data,\\n        uint256 value\\n    ) internal returns (bytes memory) {\\n        return functionCallWithValue(target, data, value, \\\"Address: low-level call with value failed\\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCallWithValue-address-bytes-uint256-}[`functionCallWithValue`], but\\n     * with `errorMessage` as a fallback revert reason when `target` reverts.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCallWithValue(\\n        address target,\\n        bytes memory data,\\n        uint256 value,\\n        string memory errorMessage\\n    ) internal returns (bytes memory) {\\n        require(address(this).balance >= value, \\\"Address: insufficient balance for call\\\");\\n        require(isContract(target), \\\"Address: call to non-contract\\\");\\n\\n        (bool success, bytes memory returndata) = target.call{value: value}(data);\\n        return verifyCallResult(success, returndata, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but performing a static call.\\n     *\\n     * _Available since v3.3._\\n     */\\n    function functionStaticCall(address target, bytes memory data) internal view returns (bytes memory) {\\n        return functionStaticCall(target, data, \\\"Address: low-level static call failed\\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\\n     * but performing a static call.\\n     *\\n     * _Available since v3.3._\\n     */\\n    function functionStaticCall(\\n        address target,\\n        bytes memory data,\\n        string memory errorMessage\\n    ) internal view returns (bytes memory) {\\n        require(isContract(target), \\\"Address: static call to non-contract\\\");\\n\\n        (bool success, bytes memory returndata) = target.staticcall(data);\\n        return verifyCallResult(success, returndata, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but performing a delegate call.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function functionDelegateCall(address target, bytes memory data) internal returns (bytes memory) {\\n        return functionDelegateCall(target, data, \\\"Address: low-level delegate call failed\\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\\n     * but performing a delegate call.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function functionDelegateCall(\\n        address target,\\n        bytes memory data,\\n        string memory errorMessage\\n    ) internal returns (bytes memory) {\\n        require(isContract(target), \\\"Address: delegate call to non-contract\\\");\\n\\n        (bool success, bytes memory returndata) = target.delegatecall(data);\\n        return verifyCallResult(success, returndata, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Tool to verifies that a low level call was successful, and revert if it wasn't, either by bubbling the\\n     * revert reason using the provided one.\\n     *\\n     * _Available since v4.3._\\n     */\\n    function verifyCallResult(\\n        bool success,\\n        bytes memory returndata,\\n        string memory errorMessage\\n    ) internal pure returns (bytes memory) {\\n        if (success) {\\n            return returndata;\\n        } else {\\n            // Look for revert reason and bubble it up if present\\n            if (returndata.length > 0) {\\n                // The easiest way to bubble the revert reason is using memory via assembly\\n\\n                assembly {\\n                    let returndata_size := mload(returndata)\\n                    revert(add(32, returndata), returndata_size)\\n                }\\n            } else {\\n                revert(errorMessage);\\n            }\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0x51b758a8815ecc9596c66c37d56b1d33883a444631a3f916b9fe65cb863ef7c4\",\"license\":\"MIT\"},\"@openzeppelin/contracts/utils/Context.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (utils/Context.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Provides information about the current execution context, including the\\n * sender of the transaction and its data. While these are generally available\\n * via msg.sender and msg.data, they should not be accessed in such a direct\\n * manner, since when dealing with meta-transactions the account sending and\\n * paying for execution may not be the actual sender (as far as an application\\n * is concerned).\\n *\\n * This contract is only required for intermediate, library-like contracts.\\n */\\nabstract contract Context {\\n    function _msgSender() internal view virtual returns (address) {\\n        return msg.sender;\\n    }\\n\\n    function _msgData() internal view virtual returns (bytes calldata) {\\n        return msg.data;\\n    }\\n}\\n\",\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\"},\"@openzeppelin/contracts/utils/Strings.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (utils/Strings.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev String operations.\\n */\\nlibrary Strings {\\n    bytes16 private constant _HEX_SYMBOLS = \\\"0123456789abcdef\\\";\\n\\n    /**\\n     * @dev Converts a `uint256` to its ASCII `string` decimal representation.\\n     */\\n    function toString(uint256 value) internal pure returns (string memory) {\\n        // Inspired by OraclizeAPI's implementation - MIT licence\\n        // https://github.com/oraclize/ethereum-api/blob/b42146b063c7d6ee1358846c198246239e9360e8/oraclizeAPI_0.4.25.sol\\n\\n        if (value == 0) {\\n            return \\\"0\\\";\\n        }\\n        uint256 temp = value;\\n        uint256 digits;\\n        while (temp != 0) {\\n            digits++;\\n            temp /= 10;\\n        }\\n        bytes memory buffer = new bytes(digits);\\n        while (value != 0) {\\n            digits -= 1;\\n            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));\\n            value /= 10;\\n        }\\n        return string(buffer);\\n    }\\n\\n    /**\\n     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation.\\n     */\\n    function toHexString(uint256 value) internal pure returns (string memory) {\\n        if (value == 0) {\\n            return \\\"0x00\\\";\\n        }\\n        uint256 temp = value;\\n        uint256 length = 0;\\n        while (temp != 0) {\\n            length++;\\n            temp >>= 8;\\n        }\\n        return toHexString(value, length);\\n    }\\n\\n    /**\\n     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation with fixed length.\\n     */\\n    function toHexString(uint256 value, uint256 length) internal pure returns (string memory) {\\n        bytes memory buffer = new bytes(2 * length + 2);\\n        buffer[0] = \\\"0\\\";\\n        buffer[1] = \\\"x\\\";\\n        for (uint256 i = 2 * length + 1; i > 1; --i) {\\n            buffer[i] = _HEX_SYMBOLS[value & 0xf];\\n            value >>= 4;\\n        }\\n        require(value == 0, \\\"Strings: hex length insufficient\\\");\\n        return string(buffer);\\n    }\\n}\\n\",\"keccak256\":\"0x32c202bd28995dd20c4347b7c6467a6d3241c74c8ad3edcbb610cd9205916c45\",\"license\":\"MIT\"},\"@openzeppelin/contracts/utils/introspection/ERC165.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/ERC165.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\\"./IERC165.sol\\\";\\n\\n/**\\n * @dev Implementation of the {IERC165} interface.\\n *\\n * Contracts that want to implement ERC165 should inherit from this contract and override {supportsInterface} to check\\n * for the additional interface id that will be supported. For example:\\n *\\n * ```solidity\\n * function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\\n *     return interfaceId == type(MyInterface).interfaceId || super.supportsInterface(interfaceId);\\n * }\\n * ```\\n *\\n * Alternatively, {ERC165Storage} provides an easier to use but more expensive implementation.\\n */\\nabstract contract ERC165 is IERC165 {\\n    /**\\n     * @dev See {IERC165-supportsInterface}.\\n     */\\n    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\\n        return interfaceId == type(IERC165).interfaceId;\\n    }\\n}\\n\",\"keccak256\":\"0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b\",\"license\":\"MIT\"},\"@openzeppelin/contracts/utils/introspection/IERC165.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/IERC165.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Interface of the ERC165 standard, as defined in the\\n * https://eips.ethereum.org/EIPS/eip-165[EIP].\\n *\\n * Implementers can declare support of contract interfaces, which can then be\\n * queried by others ({ERC165Checker}).\\n *\\n * For an implementation, see {ERC165}.\\n */\\ninterface IERC165 {\\n    /**\\n     * @dev Returns true if this contract implements the interface defined by\\n     * `interfaceId`. See the corresponding\\n     * https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]\\n     * to learn more about how these ids are created.\\n     *\\n     * This function call must use less than 30 000 gas.\\n     */\\n    function supportsInterface(bytes4 interfaceId) external view returns (bool);\\n}\\n\",\"keccak256\":\"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1\",\"license\":\"MIT\"},\"contracts/WNFT.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity ^0.8.0;\\npragma experimental ABIEncoderV2;\\n\\nimport \\\"@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol\\\";\\nimport \\\"@openzeppelin/contracts/utils/introspection/IERC165.sol\\\";\\nimport \\\"@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol\\\";\\nimport \\\"@openzeppelin/contracts/access/Ownable.sol\\\";\\nimport \\\"@ensdomains/ens/contracts/ENS.sol\\\";\\nimport \\\"@ensdomains/resolver/contracts/Resolver.sol\\\";\\n\\nimport \\\"./minting/IMinting.sol\\\";\\nimport \\\"./onchainData/IonchainTokensData.sol\\\";\\n\\n/*\\n* @title WNFT website Non-Fungible Token Standard basic implementation\\n* @dev WNFT basic implementation\\n*/\\ncontract WNFT is Ownable, ERC721URIStorage {\\n\\n    struct SC {\\n        address SCaddress;\\n        bytes4 SCinterface;\\n    }\\n\\n    Resolver private _ensResolver;\\n    ENS private _ens;\\n\\n    // ens node\\n    bytes32 private _ensNodeID;\\n\\n    AggregatorV3Interface private _priceFeed;\\n\\n    uint256 public wnftPriceInUSDPOW8 = 1*(10**8);\\n\\n    // for iterating all tokens\\n    uint[] private _keys;\\n    uint public amount = 0;\\n\\n    // address(0) if this contract is still maintained, otherwise it means the owners recommend user to switch\\n    // to a new contract\\n    address private _contractSwitched;\\n\\n    // address of a contract that says if minting is allowed or not\\n    IMinting private _mintingContract;\\n\\n    // mapping of onchain metadata fields for the whole WNFT collection.\\n    mapping(string=>string) private _collectionOnchainMetadata;\\n\\n    // mapping of allowed fields in collection\\n    mapping(string => bool) private _collectionMetadataFields;\\n\\n    // array of possilbe field names of token metadata\\n    string[] private _collectionMetadataFieldNames;\\n    uint public collectionMetadataFieldNamesCount = 0;\\n\\n    // mapping of allowed fields in token\\n    mapping(string => SC) private _tokensMetadataFields;\\n\\n    // array of possilbe field names of token metadata\\n    string[] private _tokensMetadataFieldNames;\\n    uint public tokensMetadataFieldNamesCount = 0;\\n\\n    mapping(bytes4 => bool) private _onchainMetadataInterface;\\n\\n    // true if the field (string) is set for the  WNFT token id (uint256) \\n    // mapping(uint256 => mapping(string=>bool)) private _tokens_onchain_metadata;\\n\\n    // URI for metadata for the whole WNFT collection\\n    // offchain per collection info\\n    string private _wnftUri;\\n\\n    // emitted when WNFT contract owners add a new field of metadata for tokens\\n    // when new field is allowed and defined for all tokens \\n    event TokenOnchainMetadataFieldAdded(string field, SC fieldSc);\\n\\n    // emitted when WNFT contract owners add a new field of onchain metadata field for the WNFT collection\\n    // when new field of meta data allowed/defined for the collection\\n    event CollectionOnchainMetadataFieldAdded(string field);\\n\\n    // emitted when owner switches from this contract to another\\n    event ContractSwitch(address newContract);\\n\\n        // check if the onchain field interface equals a given interface.\\n    // If not it implies that either token field is undefined or the interface of the field\\n    // doesn't equal the interface of the function being called.\\n    modifier tokenOnchainFieldAllowed(string memory field, bytes4 SCinterface) {\\n        require(_tokensMetadataFields[field].SCinterface ==  SCinterface, \\\"WNFT: Token metadata error\\\");\\n        _;\\n    }\\n\\n    // check if the onchain field is defined for the WNFT collection\\n    // checks that owner of contract allows and defined the field\\n    modifier collectionOnchainFieldAllowed(string memory fieldName) {\\n        require(_collectionMetadataFields[fieldName] == true, \\\"WNFT: Collection metadata error\\\");\\n        _;\\n    }\\n\\n    // if minting is allowed for specific token\\n    modifier canMintMod(address to, uint256 tokenId) {\\n        require (_mintingContract.canMint(to, tokenId), \\\"WNFT: Not allowed\\\");\\n        _;\\n    }\\n\\n    // if minting is allowed for specific token\\n    modifier onlyTokenOwner(uint256 tokenId) {\\n        require(super._isApprovedOrOwner(msg.sender, tokenId), \\\"WNFT: Owner only\\\");\\n        _;\\n    }\\n\\n    modifier enoughFunds(uint value) {\\n        require( value - (wnftPriceInUSDPOW8 * 10**18/uint(_getLatestPrice())) < 10, \\\"Wei dont match\\\");\\n        _;\\n    }\\n\\n    // metadata of the whole WNFT collection\\n\\n    /*\\n     * @dev Constructor function\\n     */\\n    constructor (string memory name, string memory symbol, IMinting newMintingContract, Resolver ensResolver, ENS ens, bytes32 ensNode, AggregatorV3Interface newPriceFeed) ERC721(name, symbol) Ownable() {\\n\\n        _mintingContract = newMintingContract;\\n        _ensResolver = ensResolver;\\n        _ens = ens;\\n        _ensNodeID = ensNode;\\n        _priceFeed = newPriceFeed;\\n\\n        _onchainMetadataInterface[0x661f2816]  = true; \\n        _onchainMetadataInterface[0x2421c19b]  = true;\\n    }\\n\\n    /*\\n     * @dev Sets the token URI for a given token\\n     * Reverts if the token ID does not exist\\n     * @param tokenId uint256 ID of the token to set its URI\\n     * @param uri string URI to assign\\n     */\\n    function setTokenURI(uint256 tokenId, string calldata uri) external onlyTokenOwner(tokenId) {\\n        super._setTokenURI(tokenId, uri);\\n    }\\n\\n    /*\\n     * @dev Sets the URI for the WNFT collection\\n     * @param uri string URI to assign\\n     */\\n    function setWnftUri(string calldata uri) external onlyOwner {\\n        _wnftUri = uri;\\n    }\\n\\n     /*\\n     * @dev Function to add more onchain metadata fields for the tokens\\n     * the field_rules_sc points to a smart contract with Interface valid_data(tokenID, value) function\\n     * WNFT contract owners first add fields (name, weight etc.), with a connection to a smart contract that \\n     * sets the validity rules for those fields. Then users can use setTokenMetadata function to set \\n     * values for the fields.\\n     * @param @SCinterface The address of the interface to process the field type\\n     * @param @SCaddress The address of the interface to process the field type\\n     * @param @field The name of the field where the data will be stored.\\n     */\\n    function addTokenOnchainMetadataField(bytes4 SCinterface, address SCaddress, string memory fieldName) external onlyOwner {\\n        // TODO: check that field is not defined yet \\n\\n         if(_tokensMetadataFields[fieldName].SCaddress==address(0)){\\n            _tokensMetadataFieldNames.push(fieldName);\\n            tokensMetadataFieldNamesCount++;\\n        }\\n\\n        // check SCinterface is valid\\n        require(_onchainMetadataInterface[SCinterface], \\\"SCInterface not valid\\\");\\n\\n        // verify interface of the smart contract\\n        //IERC165 _SCaddress = IERC165(SCaddress);\\n        require(IERC165(SCaddress).supportsInterface(SCinterface), \\\"SCInterface not supported\\\");\\n\\n        // set _tokensMetadataFields of the field   \\n        _tokensMetadataFields[fieldName].SCinterface = SCinterface;\\n        _tokensMetadataFields[fieldName].SCaddress = SCaddress;\\n        \\n        emit TokenOnchainMetadataFieldAdded(fieldName, _tokensMetadataFields[fieldName]);\\n    }\\n\\n     // four functions to set token onchain metadata\\n    function setTokenOnchainMetadataString(uint256 tokenId, string calldata field, string calldata value) external tokenOnchainFieldAllowed(field, 0x661f2816) onlyTokenOwner(tokenId) {\\n\\n        IonchainTokenDataString(_tokensMetadataFields[field].SCaddress).setData(tokenId, value);\\n    }\\n\\n    function setTokenOnchainMetadataUint(uint256 tokenId, string calldata field, uint value) external tokenOnchainFieldAllowed(field, 0x2421c19b) onlyTokenOwner(tokenId) {\\n\\n        IonchainTokenDataUint(_tokensMetadataFields[field].SCaddress).setData(tokenId, value);\\n    }\\n\\n     /*\\n     * @dev Function to add fields for collection onchain metadata\\n     * @param @fieldName The address that will receive the minted tokens.\\n     * will also emit event of CollectionOnchainMetadataFieldAdded with field name\\n     */\\n    function addCollectionOnchainMetadataField(string memory fieldName) external onlyOwner {\\n\\n        _collectionMetadataFields[fieldName] = true;\\n       \\n        emit CollectionOnchainMetadataFieldAdded(fieldName);\\n    }\\n\\n    /*\\n     * @dev Function to set onchain metadata for collection for specific field\\n     * @param @fieldName The field name to set\\n     * @param @fieldValue The field value to set\\n     */\\n    function setCollectionOnchainMetadata(string calldata fieldName, string calldata fieldValue) external onlyOwner {  \\n        //vCollectionOnchainFieldAllowed(fieldName);\\n        if(_collectionMetadataFields[fieldName]!=true){\\n            _collectionMetadataFieldNames.push(fieldName);\\n            collectionMetadataFieldNamesCount++;\\n        }\\n        _collectionOnchainMetadata[fieldName] = fieldValue;\\n    }\\n\\n    /*\\n     * @dev Function to set a minting contract\\n     * @param @newContract The new min\\n     */\\n    function setMintingContract(IMinting newContract) external onlyOwner {\\n        _mintingContract = newContract;\\n    }\\n\\n    /*\\n     * @dev Function to set contract switched flag\\n     * @param @newContract The address of the new contract\\n     * will also emit event of ContractSwitch with newContract\\n     */\\n    function setContractSwitched(address newContract) external onlyOwner {\\n        _contractSwitched = newContract;\\n        emit ContractSwitch(newContract);\\n    }\\n\\n    /*\\n     * @dev Function to set ens content hash\\n     * @param @hash new content hash for ens\\n     */\\n    function setENSContenthash(bytes calldata hash) external onlyOwner {\\n        _ensResolver.setContenthash(_ensNodeID, hash);\\n    }\\n\\n    /*\\n     * @dev Function to set the ens resolver\\n     * @param @ensResolver ens resolver to set in the contract\\n     */\\n    function setENSResolver(Resolver ensResolver) external onlyOwner {\\n        _ensResolver = ensResolver;\\n    }\\n\\n\\n    function setENSRegistar(ENS ensRegistar) external onlyOwner {\\n        _ens = ensRegistar;\\n    }\\n\\n    /*\\n     * @dev function to trasnfer ens name ownership\\n     * @param @newOwner The new owner for the ens name\\n     */\\n    function transferENSName(address newOwner) external onlyOwner {\\n        // TODO: safe transfer\\n        _ens.setOwner(_ensNodeID, newOwner);\\n    }\\n\\n    /*\\n     * @dev Function to setEnsNode\\n     * @param @ensNode The ens node to be controled\\n     */\\n    function setENSNodeID(bytes32 ensNode) external onlyOwner {\\n        _ensNodeID = ensNode;\\n    }\\n\\n    /*\\n    * @dev Function to set the minting token price\\n    * @param @tokenPrice The USD value of the token price for minting\\n    */\\n    function setTokenPrice(uint256 tokenPriceInTenthOfCent) external onlyOwner {\\n        wnftPriceInUSDPOW8 = tokenPriceInTenthOfCent*(10**5);\\n    }\\n    \\n\\n    /*\\n    * @dev Function to mint tokens\\n    * @param @to The address that will receive the minted tokens.\\n    * @param @tokenId The token id to mint.\\n    */\\n    function mint(address to, uint256 tokenId) external payable canMintMod(to, tokenId)  {\\n        _doMint(to, tokenId);\\n    }\\n\\n    /*\\n     * @dev Function to mint tokens and set their URI in one action\\n     * @param @to The address that will receive the minted tokens.\\n     * @param @tokenId The token id to mint.\\n     * @param @uri string URI to assign\\n     */\\n    function mintWithTokenURI(address to, uint256 tokenId, string calldata uri) external payable canMintMod(to, tokenId) {\\n        \\n       _doMint(to, tokenId);\\n        // set token URI\\n        super._setTokenURI(tokenId, uri);\\n    }\\n\\n    /*\\n     * @dev Returns the URI of the WNFT collection\\n     * @return {string} WNFT uri for offchain meta data\\n     * May return an empty string.\\n     */\\n    function wnftUri() external view returns (string memory) { \\n        return _wnftUri;\\n    }\\n   \\n\\n    function tokenOnchainMetadataString(uint256 tokenId, string memory field) external view tokenOnchainFieldAllowed(field, 0x661f2816) returns (string memory) {\\n\\n        return IonchainTokenDataString(_tokensMetadataFields[field].SCaddress).getData(tokenId);\\n    }\\n\\n    function tokenOnchainMetadataUint(uint256 tokenId, string memory field) external view tokenOnchainFieldAllowed(field, 0x2421c19b) returns (uint) {\\n        return IonchainTokenDataUint(_tokensMetadataFields[field].SCaddress).getData(tokenId);\\n    }\\n\\n    /*\\n     * @dev Function to get the collectionOnchainMetadata for specific field\\n     * @param @fieldName The field name to get data for\\n     * @return {string} Value of the collection onchain metadata for specific field\\n     */\\n    function collectionOnchainMetadata(string memory fieldName) public view  returns (string memory) {\\n        return _collectionOnchainMetadata[fieldName];\\n    }\\n\\n    /*\\n     * @dev Function to get the minting contract\\n     * @return {IMinting} The minting contract\\n     */\\n    function mintingContract() external view returns (IMinting) {\\n         return _mintingContract;\\n    }\\n\\n\\n    function ensContenthash() public view returns (bytes memory){\\n        return _ensResolver.contenthash(_ensNodeID);\\n    }\\n   \\n   \\n    /*\\n     * @dev get the contract switched flag\\n     * @return {address} The contract switch address\\n     */\\n    function contractSwitched() external view returns (address) {\\n        return _contractSwitched;\\n    }\\n\\n    /*\\n     * @dev Function to get ens resolver\\n     * @return {Resolver} the current resolver defined\\n     */\\n    function ENSResolver() external view returns (Resolver) {\\n        return _ensResolver; \\n    }\\n\\n    /*\\n    * @dev Function will return the ens registar contract\\n    * @return {ENS} ens registar contract returned\\n    */\\n    function ENSRegistar() external view returns (ENS) {\\n        return _ens;\\n    }\\n\\n    /*\\n    * @dev Function will return the ens node id\\n    * @return {bytes32} ens node id returned\\n    */\\n    function ENSNodeID() external view returns (bytes32) {\\n        return _ensNodeID;\\n    }\\n\\n     /*\\n     * @dev Function to check minting a token\\n     * @param @to The address that will receive the minted tokens.\\n     * @param @tokenId The token id to mint.\\n     * @return {bool} A boolean that indicates if the operation was successful.\\n     */\\n    function canMint(address to, uint256 tokenId) external view  returns (bool) {\\n        \\n        // check if taken\\n        return ((!super._exists(tokenId)) && _mintingContract.canMint(to, tokenId));\\n       \\n    }\\n\\n\\n     /*\\n     * @dev Function to get token by incremental counter index\\n     * @param @i uint The index using incremental token id\\n     * @return {uint} tokenId of real tokenId\\n     */\\n    function NthToken(uint i) external view returns (uint) {\\n        require(i < amount, \\\"Token doesn't exist\\\");\\n        return _keys[i];\\n    }\\n\\n\\n    //return Array of structure\\n    function getCollectionMetadataField() public view returns (string[] memory, string[] memory){\\n        string[]  memory id = new string[](collectionMetadataFieldNamesCount);\\n        string[]  memory vals = new string[](collectionMetadataFieldNamesCount);\\n        for (uint i = 0; i < collectionMetadataFieldNamesCount; i++) {\\n            id[i] = _collectionMetadataFieldNames[i];\\n            vals[i] = collectionOnchainMetadata(_collectionMetadataFieldNames[i]);\\n        }\\n        return (id, vals);\\n    }\\n\\n\\n    //return Array of structure\\n    function getTokenMetadataField() public view returns (string[] memory, address[] memory, bytes4[] memory){\\n        string[]  memory id = new string[](tokensMetadataFieldNamesCount);\\n        address[] memory scAddresses = new address[](tokensMetadataFieldNamesCount);\\n        bytes4[] memory scInterfaces = new bytes4[](tokensMetadataFieldNamesCount);\\n        for (uint i = 0; i < tokensMetadataFieldNamesCount; i++) {\\n            id[i] = _tokensMetadataFieldNames[i];\\n            scAddresses[i] = _tokensMetadataFields[_tokensMetadataFieldNames[i]].SCaddress;\\n            scInterfaces[i] = _tokensMetadataFields[_tokensMetadataFieldNames[i]].SCinterface;\\n        }\\n        return (id, scAddresses, scInterfaces);\\n    }\\n\\n\\n    function tokenExists(uint256 tokenId) public view returns (bool){\\n        return super._exists(tokenId);\\n    }\\n    \\n\\n    /*\\n     * @dev function to do internal minting\\n     * @notice function is not checking balance or other things\\n     * @param @to who to mint for\\n     * @param @tokenId tokenId\\n     */\\n    function _doMint(address to, uint256 tokenId) internal {\\n        _mint(to, tokenId);\\n        // add to tokens index\\n        _keys.push(tokenId);\\n        amount =  amount + 1;\\n        _mintingContract.afterMint(to, tokenId);\\n    }\\n\\n    /*\\n     * @dev Function to get token by incremental counter index\\n     * @return {int} latest ETH/USD price from oracle\\n     */\\n    function _getLatestPrice() internal view returns (int) {\\n        (\\n            ,\\n            int price,\\n            ,\\n            ,\\n        ) = _priceFeed.latestRoundData();\\n        // for ETH / USD price is scaled up by 10 ** 8\\n        return price;\\n    }\\n\\n\\n    \\n\\n}\\n\",\"keccak256\":\"0x74ca822222ac187dbd9b7388f9e6f20cd2ca7b2612e7291c3e453c077069e227\",\"license\":\"MIT\"},\"contracts/minting/IMinting.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity >=0.8.0;\\n\\n\\ninterface IMinting{\\n\\n    /**\\n     * @dev checks if an address can mint a specific token.\\n     * @param  @to   The minting address.\\n     * @param  @tokenId The minting token id.\\n     * @return {bool} true if the address can mint the token, false otherwise.\\n     */\\n    function canMint(address to, uint256 tokenId) external view returns (bool);\\n\\n    /**\\n     * @dev performs cleanup operations after an address minted a token.\\n     * When implementing this function take good care of who can call it, e.g., the\\n     * WNFT contract, the minting address (using delegateCall), etc.\\n     * @param  @to   The minting address.\\n     * @param  @tokenId The minting token id.\\n     */\\n    function afterMint(address to, uint256 tokenId) external returns (bool);\\n}\\n\",\"keccak256\":\"0x8e79779b80ebb670b81aa448e99633314d02b3be40b5aefe6c87f4cd577b30d1\",\"license\":\"MIT\"},\"contracts/onchainData/IonchainTokensData.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity >=0.8.0;\\n\\n\\nimport \\\"@openzeppelin/contracts/utils/introspection/IERC165.sol\\\";\\n\\n/*\\n * Collection of interfaces for functions that handle onchain metadata for tokens.\\n * Each function handles a different type of metadata, e.g. string, int, bool etc.\\n */\\n\\n// TODO: add function to modify and get address of WNFT contract\\n\\ninterface IonchainTokenDataString is IERC165 {\\n    /*\\n     * @dev Checks if onchain metdata data is valid for a given token id \\n     * @param  @tokenId uint256 tokenId     id of the token\\n     * @param  @value string  calldata      value of the metadata\\n     * @param  @data bytes[] memory         any extra data needed to make the decision\\n     * @return {bool}         true if metadata is valid, false otherwise\\n     */\\n    function validData(uint256 tokenId, string calldata value) external view returns (bool);\\n\\n    /*\\n     * @dev sets onchain data for a given token id \\n     * @param  @tokenId uint256 tokenId     id of the token\\n     * @param  @value string  calldata      value of the metadata\\n     * @param  @data bytes[] memory         any extra data needed to make the decision\\n     */\\n    function setData(uint256 tokenId, string calldata value) external;\\n\\n    /*\\n     * @dev gets onchain data for a given token id \\n     * @param  @tokenId uint256 tokenId     id of the token\\n     * @return {string}                     returns the metadata if it exists\\n     */\\n    function getData(uint256 tokenId) external view returns (string memory);\\n\\n}\\n\\ninterface IonchainTokenDataUint is IERC165 {\\n    /*\\n     * @dev Checks if onchain metdata data is valid for a given token id \\n     * @param  @tokenId uint256 tokenId     id of the token\\n     * @param  @value uint  value      value of the metadata\\n     * @param  @data bytes[] memory         any extra data needed to make the decision\\n     * @return {bool}         true if metadata is valid, false otherwise\\n     */\\n    function validData(uint256 tokenId, uint value) external view returns (bool);\\n\\n    /*\\n     * @dev sets onchain data for a given token id \\n     * @param  @tokenId uint256 tokenId     id of the token\\n     * @param  @value uint  calldata      value of the metadata\\n     * @param  @data bytes[] memory         any extra data needed to make the decision\\n     */\\n    function setData(uint256 tokenId, uint value) external;\\n\\n    /*\\n     * @dev gets onchain data for a given token id \\n     * @return {uint}         returns the metadata if it exists\\n     */\\n    function getData(uint256 tokenId) external view returns (uint);\\n}\\n\",\"keccak256\":\"0x63234dec7f410b09293666378378d9979be975c8b1de0558187d81c1132e3c92\",\"license\":\"MIT\"}},\"version\":1}",
  "bytecode": "0x60806040526305f5e100600c556000600e55600060145560006017553480156200002857600080fd5b5060405162004380380380620043808339810160408190526200004b91620002f9565b8686620000616200005b62000154565b62000158565b815162000076906001906020850190620001a8565b5080516200008c906002906020840190620001a8565b5050601080546001600160a01b039788166001600160a01b0319918216179091556008805496881696821696909617909555506009805493861693851693909317909255600a55600b8054919093169116179055505060186020527f6228800dfe0249fc967b6cb2a2c550d6e690167d7385d6136702accf87e81d0c805460ff199081166001908117909255632421c19b60e01b6000527f08478aae71a92be5b9d15bd4d1fc3b9e9dd87c459ef3c6f1e2e6aa1d123b1ab6805490911690911790556200042d565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b828054620001b690620003c1565b90600052602060002090601f016020900481019282620001da576000855562000225565b82601f10620001f557805160ff191683800117855562000225565b8280016001018555821562000225579182015b828111156200022557825182559160200191906001019062000208565b506200023392915062000237565b5090565b5b8082111562000233576000815560010162000238565b600082601f8301126200025f578081fd5b81516001600160401b03808211156200027c576200027c620003fe565b6040516020601f8401601f1916820181018381118382101715620002a457620002a4620003fe565b6040528382528584018101871015620002bb578485fd5b8492505b83831015620002de5785830181015182840182015291820191620002bf565b83831115620002ef57848185840101525b5095945050505050565b600080600080600080600060e0888a03121562000314578283fd5b87516001600160401b03808211156200032b578485fd5b620003398b838c016200024e565b985060208a01519150808211156200034f578485fd5b506200035e8a828b016200024e565b9650506040880151620003718162000414565b6060890151909550620003848162000414565b6080890151909450620003978162000414565b60a089015160c08a01519194509250620003b18162000414565b8091505092959891949750929550565b600281046001821680620003d657607f821691505b60208210811415620003f857634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146200042a57600080fd5b50565b613f43806200043d6000396000f3fe60806040526004361061024e5760003560e01c8062923f9e1461025357806301ffc9a71461028957806302f4cb01146102a95780630465cc5b146102cb57806305466a3a146102ed57806306fdde031461030d578063081812fc1461032f578063095ea7b31461035c5780630d5e34a41461037c578063104433341461039c578063162094c4146103bc57806322feb99d146103dc57806323b872dd146103f157806333e12992146104115780633adf2afd146104315780633cc215d01461045157806340c10f191461046657806342842e0e14610479578063436c61341461049957806350bb4e7f146104b9578063517f2fff146104cc57806351b02e65146104ec57806353c3ee1d1461050c5780635c69882e1461052c5780636352211e1461054157806367109485146105615780636a61e5fc1461058157806370a08231146105a1578063715018a6146105c157806378d51b2a146105d6578063797a4646146105eb5780638340ca2f146106005780638a62851c146106155780638da5cb5b146106395780638e2a82401461064e5780638e6181971461066357806395d89b4114610686578063a22cb4651461069b578063a32065dd146106bb578063aa8c217c146106db578063b7d0039a146106f0578063b83a491614610710578063b88d4fde14610730578063c56e137514610750578063c87b56dd14610770578063ccf6c7a614610790578063d2f6f67d146107b0578063d5413d4e146107c5578063e8143500146107e5578063e985e9c5146107fa578063f2fde38b1461081a578063f969f8fa1461083a575b600080fd5b34801561025f57600080fd5b5061027361026e366004613057565b61085a565b6040516102809190613651565b60405180910390f35b34801561029557600080fd5b506102736102a436600461306f565b61086d565b3480156102b557600080fd5b506102c96102c436600461318a565b6108ad565b005b3480156102d757600080fd5b506102e06109ac565b604051610280919061365c565b3480156102f957600080fd5b506102c9610308366004613106565b6109b2565b34801561031957600080fd5b50610322610a5c565b60405161028091906136ab565b34801561033b57600080fd5b5061034f61034a366004613057565b610aee565b6040516102809190613522565b34801561036857600080fd5b506102c9610377366004612fb7565b610b31565b34801561038857600080fd5b50610273610397366004612fb7565b610bc9565b3480156103a857600080fd5b506102c96103b7366004612e7a565b610c65565b3480156103c857600080fd5b506102c96103d7366004613230565b610cc6565b3480156103e857600080fd5b50610322610d33565b3480156103fd57600080fd5b506102c961040c366004612ece565b610d42565b34801561041d57600080fd5b5061032261042c36600461333f565b610d7a565b34801561043d57600080fd5b506102c961044c3660046130a7565b610e87565b34801561045d57600080fd5b5061034f611101565b6102c9610474366004612fb7565b611110565b34801561048557600080fd5b506102c9610494366004612ece565b6111bc565b3480156104a557600080fd5b506102c96104b43660046131e6565b6111d7565b6102c96104c7366004612fe2565b611281565b3480156104d857600080fd5b506102c96104e7366004613279565b61136d565b3480156104f857600080fd5b506102c9610507366004612e7a565b6114b2565b34801561051857600080fd5b506102c9610527366004613106565b61153c565b34801561053857600080fd5b506102e0611587565b34801561054d57600080fd5b5061034f61055c366004613057565b61158d565b34801561056d57600080fd5b506102e061057c366004613057565b6115c2565b34801561058d57600080fd5b506102c961059c366004613057565b611618565b3480156105ad57600080fd5b506102e06105bc366004612e7a565b61166a565b3480156105cd57600080fd5b506102c96116ae565b3480156105e257600080fd5b5061034f6116f9565b3480156105f757600080fd5b50610322611708565b34801561060c57600080fd5b506102e0611794565b34801561062157600080fd5b5061062a61179a565b6040516102809392919061358c565b34801561064557600080fd5b5061034f611adf565b34801561065a57600080fd5b506102e0611aee565b34801561066f57600080fd5b50610678611af4565b60405161028092919061362c565b34801561069257600080fd5b50610322611da7565b3480156106a757600080fd5b506102c96106b6366004612f8a565b611db6565b3480156106c757600080fd5b506102c96106d6366004612e7a565b611dcc565b3480156106e757600080fd5b506102e0611e2d565b3480156106fc57600080fd5b506102c961070b366004612e7a565b611e33565b34801561071c57600080fd5b506102c961072b3660046132ef565b611ed3565b34801561073c57600080fd5b506102c961074b366004612f0e565b612015565b34801561075c57600080fd5b506102c961076b366004612e7a565b61204e565b34801561077c57600080fd5b5061032261078b366004613057565b6120af565b34801561079c57600080fd5b506102e06107ab36600461333f565b6121d0565b3480156107bc57600080fd5b5061034f6122d0565b3480156107d157600080fd5b506103226107e03660046131e6565b6122df565b3480156107f157600080fd5b5061034f61238f565b34801561080657600080fd5b50610273610815366004612e96565b61239e565b34801561082657600080fd5b506102c9610835366004612e7a565b6123cc565b34801561084657600080fd5b506102c9610855366004613057565b61243d565b600061086582612481565b90505b919050565b60006001600160e01b031982166380ac58cd60e01b148061089e57506001600160e01b03198216635b5e139f60e01b145b8061086557506108658261249e565b6108b56124b7565b6001600160a01b03166108c6611adf565b6001600160a01b0316146108f55760405162461bcd60e51b81526004016108ec90613b87565b60405180910390fd5b6012848460405161090792919061342c565b9081526040519081900360200190205460ff1615156001146109775760138054600181018255600091909152610960907f66de8ffda797e3de9c05e8fc57b3bf0ec28a930d40b0d285d93c06501cf6a090018585612c9a565b506014805490600061097183613e43565b91905055505b81816011868660405161098b92919061342c565b9081526040519081900360200190206109a5929091612c9a565b5050505050565b60175481565b6109ba6124b7565b6001600160a01b03166109cb611adf565b6001600160a01b0316146109f15760405162461bcd60e51b81526004016108ec90613b87565b600854600a54604051631827356f60e11b81526001600160a01b039092169163304e6ade91610a26918690869060040161367c565b600060405180830381600087803b158015610a4057600080fd5b505af1158015610a54573d6000803e3d6000fd5b505050505050565b606060018054610a6b90613e08565b80601f0160208091040260200160405190810160405280929190818152602001828054610a9790613e08565b8015610ae45780601f10610ab957610100808354040283529160200191610ae4565b820191906000526020600020905b815481529060010190602001808311610ac757829003601f168201915b5050505050905090565b6000610af982612481565b610b155760405162461bcd60e51b81526004016108ec90613b07565b506000908152600560205260409020546001600160a01b031690565b6000610b3c8261158d565b9050806001600160a01b0316836001600160a01b03161415610b705760405162461bcd60e51b81526004016108ec90613c54565b806001600160a01b0316610b826124b7565b6001600160a01b03161480610b9e5750610b9e816108156124b7565b610bba5760405162461bcd60e51b81526004016108ec90613915565b610bc483836124bb565b505050565b6000610bd482612481565b158015610c5e57506010546040516303578d2960e21b81526001600160a01b0390911690630d5e34a490610c0e9086908690600401613573565b60206040518083038186803b158015610c2657600080fd5b505afa158015610c3a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c5e919061303b565b9392505050565b610c6d6124b7565b6001600160a01b0316610c7e611adf565b6001600160a01b031614610ca45760405162461bcd60e51b81526004016108ec90613b87565b600880546001600160a01b0319166001600160a01b0392909216919091179055565b82610cd13382612529565b610ced5760405162461bcd60e51b81526004016108ec90613ce6565b610d2d8484848080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506125a692505050565b50505050565b606060198054610a6b90613e08565b610d53610d4d6124b7565b82612529565b610d6f5760405162461bcd60e51b81526004016108ec90613c95565b610bc48383836125ea565b60608163661f281660e01b806001600160e01b031916601583604051610da0919061343c565b908152604051908190036020019020546001600160e01b0319600160a01b90910460e01b1614610de25760405162461bcd60e51b81526004016108ec90613b53565b601584604051610df2919061343c565b90815260405190819003602001812054630178fe3f60e01b82526001600160a01b031690630178fe3f90610e2a90889060040161365c565b60006040518083038186803b158015610e4257600080fd5b505afa158015610e56573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610e7e9190810190613145565b95945050505050565b610e8f6124b7565b6001600160a01b0316610ea0611adf565b6001600160a01b031614610ec65760405162461bcd60e51b81526004016108ec90613b87565b60006001600160a01b0316601582604051610ee1919061343c565b908152604051908190036020019020546001600160a01b03161415610f5a57601680546001810182556000919091528151610f43917fd833147d7dc355ba459fc788f669e58cfaf9dc25ddcd0702e87d69c7b512428901906020840190612d1e565b5060178054906000610f5483613e43565b91905055505b6001600160e01b0319831660009081526018602052604090205460ff16610f935760405162461bcd60e51b81526004016108ec9061389a565b6040516301ffc9a760e01b81526001600160a01b038316906301ffc9a790610fbf908690600401613696565b60206040518083038186803b158015610fd757600080fd5b505afa158015610feb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061100f919061303b565b61102b5760405162461bcd60e51b81526004016108ec90613a4e565b8260158260405161103c919061343c565b908152602001604051809103902060000160146101000a81548163ffffffff021916908360e01c021790555081601582604051611079919061343c565b90815260405190819003602001812080546001600160a01b03939093166001600160a01b0319909316929092179091557fed191672d914fd4c7315cd8610c6a1ef2f19fca4fae39377968c17dd31ee942a9082906015906110db90839061343c565b9081526040519081900360200181206110f492916136be565b60405180910390a1505050565b6008546001600160a01b031690565b6010546040516303578d2960e21b8152839183916001600160a01b0390911690630d5e34a4906111469085908590600401613573565b60206040518083038186803b15801561115e57600080fd5b505afa158015611172573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611196919061303b565b6111b25760405162461bcd60e51b81526004016108ec9061372a565b610d2d8484612705565b610bc483838360405180602001604052806000815250612015565b6111df6124b7565b6001600160a01b03166111f0611adf565b6001600160a01b0316146112165760405162461bcd60e51b81526004016108ec90613b87565b6001601282604051611228919061343c565b908152604051908190036020018120805492151560ff19909316929092179091557f0ee953d1e47780ff965cc98c8abb0e3182736081fed7d2d055d4757a66fc3ef9906112769083906136ab565b60405180910390a150565b6010546040516303578d2960e21b8152859185916001600160a01b0390911690630d5e34a4906112b79085908590600401613573565b60206040518083038186803b1580156112cf57600080fd5b505afa1580156112e3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611307919061303b565b6113235760405162461bcd60e51b81526004016108ec9061372a565b61132d8686612705565b610a548585858080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506125a692505050565b83838080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505060405163330f940b60e11b92508291506015906113bf90859061343c565b908152604051908190036020019020546001600160e01b0319600160a01b90910460e01b16146114015760405162461bcd60e51b81526004016108ec90613b53565b8661140c3382612529565b6114285760405162461bcd60e51b81526004016108ec90613ce6565b6015878760405161143a92919061342c565b90815260405190819003602001812054630c2b16d760e11b82526001600160a01b0316906318562dae90611476908b908990899060040161367c565b600060405180830381600087803b15801561149057600080fd5b505af11580156114a4573d6000803e3d6000fd5b505050505050505050505050565b6114ba6124b7565b6001600160a01b03166114cb611adf565b6001600160a01b0316146114f15760405162461bcd60e51b81526004016108ec90613b87565b600f80546001600160a01b0319166001600160a01b0383161790556040517fcf326d247ceccf2f5ab5e1088e66f8585d355c833cfb3452f54cd93aec3b7a4a90611276908390613522565b6115446124b7565b6001600160a01b0316611555611adf565b6001600160a01b03161461157b5760405162461bcd60e51b81526004016108ec90613b87565b610bc460198383612c9a565b600c5481565b6000818152600360205260408120546001600160a01b0316806108655760405162461bcd60e51b81526004016108ec906139b7565b6000600e5482106115e55760405162461bcd60e51b81526004016108ec906136fd565b600d828154811061160657634e487b7160e01b600052603260045260246000fd5b90600052602060002001549050919050565b6116206124b7565b6001600160a01b0316611631611adf565b6001600160a01b0316146116575760405162461bcd60e51b81526004016108ec90613b87565b61166481620186a0613da6565b600c5550565b60006001600160a01b0382166116925760405162461bcd60e51b81526004016108ec9061396d565b506001600160a01b031660009081526004602052604090205490565b6116b66124b7565b6001600160a01b03166116c7611adf565b6001600160a01b0316146116ed5760405162461bcd60e51b81526004016108ec90613b87565b6116f760006127d8565b565b6009546001600160a01b031690565b600854600a5460405163bc1c58d160e01b81526060926001600160a01b03169163bc1c58d19161173b919060040161365c565b60006040518083038186803b15801561175357600080fd5b505afa158015611767573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261178f9190810190613145565b905090565b600a5490565b606080606060006017546001600160401b038111156117c957634e487b7160e01b600052604160045260246000fd5b6040519080825280602002602001820160405280156117fc57816020015b60608152602001906001900390816117e75790505b50905060006017546001600160401b0381111561182957634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015611852578160200160208202803683370190505b50905060006017546001600160401b0381111561187f57634e487b7160e01b600052604160045260246000fd5b6040519080825280602002602001820160405280156118a8578160200160208202803683370190505b50905060005b601754811015611ad257601681815481106118d957634e487b7160e01b600052603260045260246000fd5b9060005260206000200180546118ee90613e08565b80601f016020809104026020016040519081016040528092919081815260200182805461191a90613e08565b80156119675780601f1061193c57610100808354040283529160200191611967565b820191906000526020600020905b81548152906001019060200180831161194a57829003601f168201915b505050505084828151811061198c57634e487b7160e01b600052603260045260246000fd5b60200260200101819052506015601682815481106119ba57634e487b7160e01b600052603260045260246000fd5b906000526020600020016040516119d19190613487565b9081526040519081900360200190205483516001600160a01b0390911690849083908110611a0f57634e487b7160e01b600052603260045260246000fd5b60200260200101906001600160a01b031690816001600160a01b031681525050601560168281548110611a5257634e487b7160e01b600052603260045260246000fd5b90600052602060002001604051611a699190613487565b908152604051908190036020019020548251600160a01b90910460e01b90839083908110611aa757634e487b7160e01b600052603260045260246000fd5b6001600160e01b03199092166020928302919091019091015280611aca81613e43565b9150506118ae565b5091945092509050909192565b6000546001600160a01b031690565b60145481565b60608060006014546001600160401b03811115611b2157634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015611b5457816020015b6060815260200190600190039081611b3f5790505b50905060006014546001600160401b03811115611b8157634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015611bb457816020015b6060815260200190600190039081611b9f5790505b50905060005b601454811015611d9d5760138181548110611be557634e487b7160e01b600052603260045260246000fd5b906000526020600020018054611bfa90613e08565b80601f0160208091040260200160405190810160405280929190818152602001828054611c2690613e08565b8015611c735780601f10611c4857610100808354040283529160200191611c73565b820191906000526020600020905b815481529060010190602001808311611c5657829003601f168201915b5050505050838281518110611c9857634e487b7160e01b600052603260045260246000fd5b6020026020010181905250611d5f60138281548110611cc757634e487b7160e01b600052603260045260246000fd5b906000526020600020018054611cdc90613e08565b80601f0160208091040260200160405190810160405280929190818152602001828054611d0890613e08565b8015611d555780601f10611d2a57610100808354040283529160200191611d55565b820191906000526020600020905b815481529060010190602001808311611d3857829003601f168201915b50505050506122df565b828281518110611d7f57634e487b7160e01b600052603260045260246000fd5b60200260200101819052508080611d9590613e43565b915050611bba565b5090925090509091565b606060028054610a6b90613e08565b611dc8611dc16124b7565b8383612828565b5050565b611dd46124b7565b6001600160a01b0316611de5611adf565b6001600160a01b031614611e0b5760405162461bcd60e51b81526004016108ec90613b87565b600980546001600160a01b0319166001600160a01b0392909216919091179055565b600e5481565b611e3b6124b7565b6001600160a01b0316611e4c611adf565b6001600160a01b031614611e725760405162461bcd60e51b81526004016108ec90613b87565b600954600a54604051635b0fc9c360e01b81526001600160a01b0390921691635b0fc9c391611ea5918590600401613665565b600060405180830381600087803b158015611ebf57600080fd5b505af11580156109a5573d6000803e3d6000fd5b82828080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604051632421c19b60e01b9250829150601590611f2590859061343c565b908152604051908190036020019020546001600160e01b0319600160a01b90910460e01b1614611f675760405162461bcd60e51b81526004016108ec90613b53565b85611f723382612529565b611f8e5760405162461bcd60e51b81526004016108ec90613ce6565b60158686604051611fa092919061342c565b90815260405190819003602001812054634848b1a560e01b82526001600160a01b031690634848b1a590611fda908a908890600401613d10565b600060405180830381600087803b158015611ff457600080fd5b505af1158015612008573d6000803e3d6000fd5b5050505050505050505050565b6120266120206124b7565b83612529565b6120425760405162461bcd60e51b81526004016108ec90613c95565b610d2d848484846128cb565b6120566124b7565b6001600160a01b0316612067611adf565b6001600160a01b03161461208d5760405162461bcd60e51b81526004016108ec90613b87565b601080546001600160a01b0319166001600160a01b0392909216919091179055565b60606120ba82612481565b6120d65760405162461bcd60e51b81526004016108ec90613ab6565b600082815260076020526040812080546120ef90613e08565b80601f016020809104026020016040519081016040528092919081815260200182805461211b90613e08565b80156121685780601f1061213d57610100808354040283529160200191612168565b820191906000526020600020905b81548152906001019060200180831161214b57829003601f168201915b5050505050905060006121796128fe565b905080516000141561218d57509050610868565b8151156121bf5780826040516020016121a7929190613458565b60405160208183030381529060405292505050610868565b6121c884612910565b949350505050565b600081632421c19b60e01b806001600160e01b0319166015836040516121f6919061343c565b908152604051908190036020019020546001600160e01b0319600160a01b90910460e01b16146122385760405162461bcd60e51b81526004016108ec90613b53565b601584604051612248919061343c565b90815260405190819003602001812054630178fe3f60e01b82526001600160a01b031690630178fe3f9061228090889060040161365c565b60206040518083038186803b15801561229857600080fd5b505afa1580156122ac573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e7e9190613218565b6010546001600160a01b031690565b60606011826040516122f1919061343c565b9081526020016040518091039020805461230a90613e08565b80601f016020809104026020016040519081016040528092919081815260200182805461233690613e08565b80156123835780601f1061235857610100808354040283529160200191612383565b820191906000526020600020905b81548152906001019060200180831161236657829003601f168201915b50505050509050919050565b600f546001600160a01b031690565b6001600160a01b03918216600090815260066020908152604080832093909416825291909152205460ff1690565b6123d46124b7565b6001600160a01b03166123e5611adf565b6001600160a01b03161461240b5760405162461bcd60e51b81526004016108ec90613b87565b6001600160a01b0381166124315760405162461bcd60e51b81526004016108ec906137a7565b61243a816127d8565b50565b6124456124b7565b6001600160a01b0316612456611adf565b6001600160a01b03161461247c5760405162461bcd60e51b81526004016108ec90613b87565b600a55565b6000908152600360205260409020546001600160a01b0316151590565b6001600160e01b031981166301ffc9a760e01b14919050565b3390565b600081815260056020526040902080546001600160a01b0319166001600160a01b03841690811790915581906124f08261158d565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600061253482612481565b6125505760405162461bcd60e51b81526004016108ec906138c9565b600061255b8361158d565b9050806001600160a01b0316846001600160a01b031614806125965750836001600160a01b031661258b84610aee565b6001600160a01b0316145b806121c857506121c8818561239e565b6125af82612481565b6125cb5760405162461bcd60e51b81526004016108ec90613a00565b60008281526007602090815260409091208251610bc492840190612d1e565b826001600160a01b03166125fd8261158d565b6001600160a01b0316146126235760405162461bcd60e51b81526004016108ec90613bbc565b6001600160a01b0382166126495760405162461bcd60e51b81526004016108ec90613823565b612654838383610bc4565b61265f6000826124bb565b6001600160a01b0383166000908152600460205260408120805460019290612688908490613dc5565b90915550506001600160a01b03821660009081526004602052604081208054600192906126b6908490613d7a565b909155505060008181526003602052604080822080546001600160a01b0319166001600160a01b038681169182179092559151849391871691600080516020613eee83398151915291a4505050565b61270f8282612992565b600d8054600181810183556000929092527fd7b6990105719101dabeb77144f2a3385c8033acd3af97e9423a695e81ad1eb501829055600e5461275191613d7a565b600e5560105460405163228bea5360e21b81526001600160a01b0390911690638a2fa94c906127869085908590600401613573565b602060405180830381600087803b1580156127a057600080fd5b505af11580156127b4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bc4919061303b565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b816001600160a01b0316836001600160a01b0316141561285a5760405162461bcd60e51b81526004016108ec90613867565b6001600160a01b0383811660008181526006602090815260408083209487168084529490915290819020805460ff1916851515179055517f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31906128be908590613651565b60405180910390a3505050565b6128d68484846125ea565b6128e284848484612a5f565b610d2d5760405162461bcd60e51b81526004016108ec90613755565b60408051602081019091526000815290565b606061291b82612481565b6129375760405162461bcd60e51b81526004016108ec90613c05565b60006129416128fe565b905060008151116129615760405180602001604052806000815250610c5e565b8061296b84612b7a565b60405160200161297c929190613458565b6040516020818303038152906040529392505050565b6001600160a01b0382166129b85760405162461bcd60e51b81526004016108ec90613a81565b6129c181612481565b156129de5760405162461bcd60e51b81526004016108ec906137ed565b6129ea60008383610bc4565b6001600160a01b0382166000908152600460205260408120805460019290612a13908490613d7a565b909155505060008181526003602052604080822080546001600160a01b0319166001600160a01b0386169081179091559051839290600080516020613eee833981519152908290a45050565b6000612a73846001600160a01b0316612c94565b15612b6f57836001600160a01b031663150b7a02612a8f6124b7565b8786866040518563ffffffff1660e01b8152600401612ab19493929190613536565b602060405180830381600087803b158015612acb57600080fd5b505af1925050508015612afb575060408051601f3d908101601f19168201909252612af89181019061308b565b60015b612b55573d808015612b29576040519150601f19603f3d011682016040523d82523d6000602084013e612b2e565b606091505b508051612b4d5760405162461bcd60e51b81526004016108ec90613755565b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490506121c8565b506001949350505050565b606081612b9f57506040805180820190915260018152600360fc1b6020820152610868565b8160005b8115612bc95780612bb381613e43565b9150612bc29050600a83613d92565b9150612ba3565b6000816001600160401b03811115612bf157634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015612c1b576020820181803683370190505b5090505b84156121c857612c30600183613dc5565b9150612c3d600a86613e5e565b612c48906030613d7a565b60f81b818381518110612c6b57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350612c8d600a86613d92565b9450612c1f565b3b151590565b828054612ca690613e08565b90600052602060002090601f016020900481019282612cc85760008555612d0e565b82601f10612ce15782800160ff19823516178555612d0e565b82800160010185558215612d0e579182015b82811115612d0e578235825591602001919060010190612cf3565b50612d1a929150612d92565b5090565b828054612d2a90613e08565b90600052602060002090601f016020900481019282612d4c5760008555612d0e565b82601f10612d6557805160ff1916838001178555612d0e565b82800160010185558215612d0e579182015b82811115612d0e578251825591602001919060010190612d77565b5b80821115612d1a5760008155600101612d93565b6000612dba612db584613d47565b613d1e565b9050828152838383011115612dce57600080fd5b828260208301376000602084830101529392505050565b6000612df3612db584613d47565b9050828152838383011115612e0757600080fd5b610c5e836020830184613ddc565b60008083601f840112612e26578182fd5b5081356001600160401b03811115612e3c578182fd5b602083019150836020828501011115612e5457600080fd5b9250929050565b600082601f830112612e6b578081fd5b610c5e83833560208501612da7565b600060208284031215612e8b578081fd5b8135610c5e81613eb4565b60008060408385031215612ea8578081fd5b8235612eb381613eb4565b91506020830135612ec381613eb4565b809150509250929050565b600080600060608486031215612ee2578081fd5b8335612eed81613eb4565b92506020840135612efd81613eb4565b929592945050506040919091013590565b60008060008060808587031215612f23578081fd5b8435612f2e81613eb4565b93506020850135612f3e81613eb4565b92506040850135915060608501356001600160401b03811115612f5f578182fd5b8501601f81018713612f6f578182fd5b612f7e87823560208401612da7565b91505092959194509250565b60008060408385031215612f9c578182fd5b8235612fa781613eb4565b91506020830135612ec381613ec9565b60008060408385031215612fc9578182fd5b8235612fd481613eb4565b946020939093013593505050565b60008060008060608587031215612ff7578182fd5b843561300281613eb4565b93506020850135925060408501356001600160401b03811115613023578283fd5b61302f87828801612e15565b95989497509550505050565b60006020828403121561304c578081fd5b8151610c5e81613ec9565b600060208284031215613068578081fd5b5035919050565b600060208284031215613080578081fd5b8135610c5e81613ed7565b60006020828403121561309c578081fd5b8151610c5e81613ed7565b6000806000606084860312156130bb578081fd5b83356130c681613ed7565b925060208401356130d681613eb4565b915060408401356001600160401b038111156130f0578182fd5b6130fc86828701612e5b565b9150509250925092565b60008060208385031215613118578182fd5b82356001600160401b0381111561312d578283fd5b61313985828601612e15565b90969095509350505050565b600060208284031215613156578081fd5b81516001600160401b0381111561316b578182fd5b8201601f8101841361317b578182fd5b6121c884825160208401612de5565b6000806000806040858703121561319f578182fd5b84356001600160401b03808211156131b5578384fd5b6131c188838901612e15565b909650945060208701359150808211156131d9578384fd5b5061302f87828801612e15565b6000602082840312156131f7578081fd5b81356001600160401b0381111561320c578182fd5b6121c884828501612e5b565b600060208284031215613229578081fd5b5051919050565b600080600060408486031215613244578081fd5b8335925060208401356001600160401b03811115613260578182fd5b61326c86828701612e15565b9497909650939450505050565b600080600080600060608688031215613290578283fd5b8535945060208601356001600160401b03808211156132ad578485fd5b6132b989838a01612e15565b909650945060408801359150808211156132d1578283fd5b506132de88828901612e15565b969995985093965092949392505050565b60008060008060608587031215613304578182fd5b8435935060208501356001600160401b03811115613320578283fd5b61332c87828801612e15565b9598909750949560400135949350505050565b60008060408385031215613351578182fd5b8235915060208301356001600160401b0381111561336d578182fd5b61337985828601612e5b565b9150509250929050565b6000815180845260208085018081965082840281019150828601855b858110156133c95782840389526133b7848351613400565b9885019893509084019060010161339f565b5091979650505050505050565b60008284528282602086013780602084860101526020601f19601f85011685010190509392505050565b60008151808452613418816020860160208601613ddc565b601f01601f19169290920160200192915050565b6000828483379101908152919050565b6000825161344e818460208701613ddc565b9190910192915050565b6000835161346a818460208801613ddc565b83519083019061347e818360208801613ddc565b01949350505050565b81546000908190600281046001808316806134a357607f831692505b60208084108214156134c357634e487b7160e01b87526022600452602487fd5b8180156134d757600181146134e857613514565b60ff19861689528489019650613514565b6134f18a613d6e565b885b8681101561350c5781548b8201529085019083016134f3565b505084890196505b509498975050505050505050565b6001600160a01b0391909116815260200190565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061356990830184613400565b9695505050505050565b6001600160a01b03929092168252602082015260400190565b60006060825261359f6060830186613383565b828103602084810191909152855180835286820192820190845b818110156135de5784516001600160a01b0316835293830193918301916001016135b9565b505084810360408601528551808252908201925081860190845b8181101561361e5782516001600160e01b031916855293830193918301916001016135f8565b509298975050505050505050565b60006040825261363f6040830185613383565b8281036020840152610e7e8185613383565b901515815260200190565b90815260200190565b9182526001600160a01b0316602082015260400190565b600084825260406020830152610e7e6040830184866133d6565b6001600160e01b031991909116815260200190565b600060208252610c5e6020830184613400565b6000606082526136d16060830185613400565b92546001600160a01b0381166020840152604090811b6001600160e01b03191692019190915250919050565b602080825260139082015272151bdad95b88191bd95cdb89dd08195e1a5cdd606a1b604082015260600190565b60208082526011908201527015d391950e88139bdd08185b1b1bddd959607a1b604082015260600190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b6020808252601c908201527b115490cdcc8c4e881d1bdad95b88185b1c9958591e481b5a5b9d195960221b604082015260600190565b60208082526024908201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646040820152637265737360e01b606082015260800190565b60208082526019908201527822a9219b99189d1030b8383937bb32903a379031b0b63632b960391b604082015260600190565b60208082526015908201527414d0d25b9d195c999858d9481b9bdd081d985b1a59605a1b604082015260600190565b6020808252602c908201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860408201526b34b9ba32b73a103a37b5b2b760a11b606082015260800190565b60208082526038908201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776040820152771b995c881b9bdc88185c1c1c9bdd995908199bdc88185b1b60421b606082015260800190565b6020808252602a908201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604082015269726f206164647265737360b01b606082015260800190565b60208082526029908201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460408201526832b73a103a37b5b2b760b91b606082015260800190565b6020808252602e908201527f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60408201526d32bc34b9ba32b73a103a37b5b2b760911b606082015260800190565b60208082526019908201527814d0d25b9d195c999858d9481b9bdd081cdd5c1c1bdc9d1959603a1b604082015260600190565b6020808252818101527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604082015260600190565b60208082526031908201527f45524337323155524953746f726167653a2055524920717565727920666f72206040820152703737b732bc34b9ba32b73a103a37b5b2b760791b606082015260800190565b6020808252602c908201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860408201526b34b9ba32b73a103a37b5b2b760a11b606082015260800190565b6020808252601a90820152792ba7232a1d102a37b5b2b71036b2ba30b230ba309032b93937b960311b604082015260600190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526029908201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960408201526839903737ba1037bbb760b91b606082015260800190565b6020808252602f908201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60408201526e3732bc34b9ba32b73a103a37b5b2b760891b606082015260800190565b60208082526021908201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656040820152603960f91b606082015260800190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b60208082526010908201526f574e46543a204f776e6572206f6e6c7960801b604082015260600190565b918252602082015260400190565b6040518181016001600160401b0381118282101715613d3f57613d3f613e9e565b604052919050565b60006001600160401b03821115613d6057613d60613e9e565b50601f01601f191660200190565b60009081526020902090565b60008219821115613d8d57613d8d613e72565b500190565b600082613da157613da1613e88565b500490565b6000816000190483118215151615613dc057613dc0613e72565b500290565b600082821015613dd757613dd7613e72565b500390565b60005b83811015613df7578181015183820152602001613ddf565b83811115610d2d5750506000910152565b600281046001821680613e1c57607f821691505b60208210811415613e3d57634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415613e5757613e57613e72565b5060010190565b600082613e6d57613e6d613e88565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461243a57600080fd5b801515811461243a57600080fd5b6001600160e01b03198116811461243a57600080fdfeddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa26469706673582212208c24e4149241ea7dbda66887bc3a535ef87c26e7003c74711fb64e1cca8490d264736f6c63430008000033",
  "deployedBytecode": "0x60806040526004361061024e5760003560e01c8062923f9e1461025357806301ffc9a71461028957806302f4cb01146102a95780630465cc5b146102cb57806305466a3a146102ed57806306fdde031461030d578063081812fc1461032f578063095ea7b31461035c5780630d5e34a41461037c578063104433341461039c578063162094c4146103bc57806322feb99d146103dc57806323b872dd146103f157806333e12992146104115780633adf2afd146104315780633cc215d01461045157806340c10f191461046657806342842e0e14610479578063436c61341461049957806350bb4e7f146104b9578063517f2fff146104cc57806351b02e65146104ec57806353c3ee1d1461050c5780635c69882e1461052c5780636352211e1461054157806367109485146105615780636a61e5fc1461058157806370a08231146105a1578063715018a6146105c157806378d51b2a146105d6578063797a4646146105eb5780638340ca2f146106005780638a62851c146106155780638da5cb5b146106395780638e2a82401461064e5780638e6181971461066357806395d89b4114610686578063a22cb4651461069b578063a32065dd146106bb578063aa8c217c146106db578063b7d0039a146106f0578063b83a491614610710578063b88d4fde14610730578063c56e137514610750578063c87b56dd14610770578063ccf6c7a614610790578063d2f6f67d146107b0578063d5413d4e146107c5578063e8143500146107e5578063e985e9c5146107fa578063f2fde38b1461081a578063f969f8fa1461083a575b600080fd5b34801561025f57600080fd5b5061027361026e366004613057565b61085a565b6040516102809190613651565b60405180910390f35b34801561029557600080fd5b506102736102a436600461306f565b61086d565b3480156102b557600080fd5b506102c96102c436600461318a565b6108ad565b005b3480156102d757600080fd5b506102e06109ac565b604051610280919061365c565b3480156102f957600080fd5b506102c9610308366004613106565b6109b2565b34801561031957600080fd5b50610322610a5c565b60405161028091906136ab565b34801561033b57600080fd5b5061034f61034a366004613057565b610aee565b6040516102809190613522565b34801561036857600080fd5b506102c9610377366004612fb7565b610b31565b34801561038857600080fd5b50610273610397366004612fb7565b610bc9565b3480156103a857600080fd5b506102c96103b7366004612e7a565b610c65565b3480156103c857600080fd5b506102c96103d7366004613230565b610cc6565b3480156103e857600080fd5b50610322610d33565b3480156103fd57600080fd5b506102c961040c366004612ece565b610d42565b34801561041d57600080fd5b5061032261042c36600461333f565b610d7a565b34801561043d57600080fd5b506102c961044c3660046130a7565b610e87565b34801561045d57600080fd5b5061034f611101565b6102c9610474366004612fb7565b611110565b34801561048557600080fd5b506102c9610494366004612ece565b6111bc565b3480156104a557600080fd5b506102c96104b43660046131e6565b6111d7565b6102c96104c7366004612fe2565b611281565b3480156104d857600080fd5b506102c96104e7366004613279565b61136d565b3480156104f857600080fd5b506102c9610507366004612e7a565b6114b2565b34801561051857600080fd5b506102c9610527366004613106565b61153c565b34801561053857600080fd5b506102e0611587565b34801561054d57600080fd5b5061034f61055c366004613057565b61158d565b34801561056d57600080fd5b506102e061057c366004613057565b6115c2565b34801561058d57600080fd5b506102c961059c366004613057565b611618565b3480156105ad57600080fd5b506102e06105bc366004612e7a565b61166a565b3480156105cd57600080fd5b506102c96116ae565b3480156105e257600080fd5b5061034f6116f9565b3480156105f757600080fd5b50610322611708565b34801561060c57600080fd5b506102e0611794565b34801561062157600080fd5b5061062a61179a565b6040516102809392919061358c565b34801561064557600080fd5b5061034f611adf565b34801561065a57600080fd5b506102e0611aee565b34801561066f57600080fd5b50610678611af4565b60405161028092919061362c565b34801561069257600080fd5b50610322611da7565b3480156106a757600080fd5b506102c96106b6366004612f8a565b611db6565b3480156106c757600080fd5b506102c96106d6366004612e7a565b611dcc565b3480156106e757600080fd5b506102e0611e2d565b3480156106fc57600080fd5b506102c961070b366004612e7a565b611e33565b34801561071c57600080fd5b506102c961072b3660046132ef565b611ed3565b34801561073c57600080fd5b506102c961074b366004612f0e565b612015565b34801561075c57600080fd5b506102c961076b366004612e7a565b61204e565b34801561077c57600080fd5b5061032261078b366004613057565b6120af565b34801561079c57600080fd5b506102e06107ab36600461333f565b6121d0565b3480156107bc57600080fd5b5061034f6122d0565b3480156107d157600080fd5b506103226107e03660046131e6565b6122df565b3480156107f157600080fd5b5061034f61238f565b34801561080657600080fd5b50610273610815366004612e96565b61239e565b34801561082657600080fd5b506102c9610835366004612e7a565b6123cc565b34801561084657600080fd5b506102c9610855366004613057565b61243d565b600061086582612481565b90505b919050565b60006001600160e01b031982166380ac58cd60e01b148061089e57506001600160e01b03198216635b5e139f60e01b145b8061086557506108658261249e565b6108b56124b7565b6001600160a01b03166108c6611adf565b6001600160a01b0316146108f55760405162461bcd60e51b81526004016108ec90613b87565b60405180910390fd5b6012848460405161090792919061342c565b9081526040519081900360200190205460ff1615156001146109775760138054600181018255600091909152610960907f66de8ffda797e3de9c05e8fc57b3bf0ec28a930d40b0d285d93c06501cf6a090018585612c9a565b506014805490600061097183613e43565b91905055505b81816011868660405161098b92919061342c565b9081526040519081900360200190206109a5929091612c9a565b5050505050565b60175481565b6109ba6124b7565b6001600160a01b03166109cb611adf565b6001600160a01b0316146109f15760405162461bcd60e51b81526004016108ec90613b87565b600854600a54604051631827356f60e11b81526001600160a01b039092169163304e6ade91610a26918690869060040161367c565b600060405180830381600087803b158015610a4057600080fd5b505af1158015610a54573d6000803e3d6000fd5b505050505050565b606060018054610a6b90613e08565b80601f0160208091040260200160405190810160405280929190818152602001828054610a9790613e08565b8015610ae45780601f10610ab957610100808354040283529160200191610ae4565b820191906000526020600020905b815481529060010190602001808311610ac757829003601f168201915b5050505050905090565b6000610af982612481565b610b155760405162461bcd60e51b81526004016108ec90613b07565b506000908152600560205260409020546001600160a01b031690565b6000610b3c8261158d565b9050806001600160a01b0316836001600160a01b03161415610b705760405162461bcd60e51b81526004016108ec90613c54565b806001600160a01b0316610b826124b7565b6001600160a01b03161480610b9e5750610b9e816108156124b7565b610bba5760405162461bcd60e51b81526004016108ec90613915565b610bc483836124bb565b505050565b6000610bd482612481565b158015610c5e57506010546040516303578d2960e21b81526001600160a01b0390911690630d5e34a490610c0e9086908690600401613573565b60206040518083038186803b158015610c2657600080fd5b505afa158015610c3a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c5e919061303b565b9392505050565b610c6d6124b7565b6001600160a01b0316610c7e611adf565b6001600160a01b031614610ca45760405162461bcd60e51b81526004016108ec90613b87565b600880546001600160a01b0319166001600160a01b0392909216919091179055565b82610cd13382612529565b610ced5760405162461bcd60e51b81526004016108ec90613ce6565b610d2d8484848080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506125a692505050565b50505050565b606060198054610a6b90613e08565b610d53610d4d6124b7565b82612529565b610d6f5760405162461bcd60e51b81526004016108ec90613c95565b610bc48383836125ea565b60608163661f281660e01b806001600160e01b031916601583604051610da0919061343c565b908152604051908190036020019020546001600160e01b0319600160a01b90910460e01b1614610de25760405162461bcd60e51b81526004016108ec90613b53565b601584604051610df2919061343c565b90815260405190819003602001812054630178fe3f60e01b82526001600160a01b031690630178fe3f90610e2a90889060040161365c565b60006040518083038186803b158015610e4257600080fd5b505afa158015610e56573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610e7e9190810190613145565b95945050505050565b610e8f6124b7565b6001600160a01b0316610ea0611adf565b6001600160a01b031614610ec65760405162461bcd60e51b81526004016108ec90613b87565b60006001600160a01b0316601582604051610ee1919061343c565b908152604051908190036020019020546001600160a01b03161415610f5a57601680546001810182556000919091528151610f43917fd833147d7dc355ba459fc788f669e58cfaf9dc25ddcd0702e87d69c7b512428901906020840190612d1e565b5060178054906000610f5483613e43565b91905055505b6001600160e01b0319831660009081526018602052604090205460ff16610f935760405162461bcd60e51b81526004016108ec9061389a565b6040516301ffc9a760e01b81526001600160a01b038316906301ffc9a790610fbf908690600401613696565b60206040518083038186803b158015610fd757600080fd5b505afa158015610feb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061100f919061303b565b61102b5760405162461bcd60e51b81526004016108ec90613a4e565b8260158260405161103c919061343c565b908152602001604051809103902060000160146101000a81548163ffffffff021916908360e01c021790555081601582604051611079919061343c565b90815260405190819003602001812080546001600160a01b03939093166001600160a01b0319909316929092179091557fed191672d914fd4c7315cd8610c6a1ef2f19fca4fae39377968c17dd31ee942a9082906015906110db90839061343c565b9081526040519081900360200181206110f492916136be565b60405180910390a1505050565b6008546001600160a01b031690565b6010546040516303578d2960e21b8152839183916001600160a01b0390911690630d5e34a4906111469085908590600401613573565b60206040518083038186803b15801561115e57600080fd5b505afa158015611172573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611196919061303b565b6111b25760405162461bcd60e51b81526004016108ec9061372a565b610d2d8484612705565b610bc483838360405180602001604052806000815250612015565b6111df6124b7565b6001600160a01b03166111f0611adf565b6001600160a01b0316146112165760405162461bcd60e51b81526004016108ec90613b87565b6001601282604051611228919061343c565b908152604051908190036020018120805492151560ff19909316929092179091557f0ee953d1e47780ff965cc98c8abb0e3182736081fed7d2d055d4757a66fc3ef9906112769083906136ab565b60405180910390a150565b6010546040516303578d2960e21b8152859185916001600160a01b0390911690630d5e34a4906112b79085908590600401613573565b60206040518083038186803b1580156112cf57600080fd5b505afa1580156112e3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611307919061303b565b6113235760405162461bcd60e51b81526004016108ec9061372a565b61132d8686612705565b610a548585858080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506125a692505050565b83838080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505060405163330f940b60e11b92508291506015906113bf90859061343c565b908152604051908190036020019020546001600160e01b0319600160a01b90910460e01b16146114015760405162461bcd60e51b81526004016108ec90613b53565b8661140c3382612529565b6114285760405162461bcd60e51b81526004016108ec90613ce6565b6015878760405161143a92919061342c565b90815260405190819003602001812054630c2b16d760e11b82526001600160a01b0316906318562dae90611476908b908990899060040161367c565b600060405180830381600087803b15801561149057600080fd5b505af11580156114a4573d6000803e3d6000fd5b505050505050505050505050565b6114ba6124b7565b6001600160a01b03166114cb611adf565b6001600160a01b0316146114f15760405162461bcd60e51b81526004016108ec90613b87565b600f80546001600160a01b0319166001600160a01b0383161790556040517fcf326d247ceccf2f5ab5e1088e66f8585d355c833cfb3452f54cd93aec3b7a4a90611276908390613522565b6115446124b7565b6001600160a01b0316611555611adf565b6001600160a01b03161461157b5760405162461bcd60e51b81526004016108ec90613b87565b610bc460198383612c9a565b600c5481565b6000818152600360205260408120546001600160a01b0316806108655760405162461bcd60e51b81526004016108ec906139b7565b6000600e5482106115e55760405162461bcd60e51b81526004016108ec906136fd565b600d828154811061160657634e487b7160e01b600052603260045260246000fd5b90600052602060002001549050919050565b6116206124b7565b6001600160a01b0316611631611adf565b6001600160a01b0316146116575760405162461bcd60e51b81526004016108ec90613b87565b61166481620186a0613da6565b600c5550565b60006001600160a01b0382166116925760405162461bcd60e51b81526004016108ec9061396d565b506001600160a01b031660009081526004602052604090205490565b6116b66124b7565b6001600160a01b03166116c7611adf565b6001600160a01b0316146116ed5760405162461bcd60e51b81526004016108ec90613b87565b6116f760006127d8565b565b6009546001600160a01b031690565b600854600a5460405163bc1c58d160e01b81526060926001600160a01b03169163bc1c58d19161173b919060040161365c565b60006040518083038186803b15801561175357600080fd5b505afa158015611767573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261178f9190810190613145565b905090565b600a5490565b606080606060006017546001600160401b038111156117c957634e487b7160e01b600052604160045260246000fd5b6040519080825280602002602001820160405280156117fc57816020015b60608152602001906001900390816117e75790505b50905060006017546001600160401b0381111561182957634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015611852578160200160208202803683370190505b50905060006017546001600160401b0381111561187f57634e487b7160e01b600052604160045260246000fd5b6040519080825280602002602001820160405280156118a8578160200160208202803683370190505b50905060005b601754811015611ad257601681815481106118d957634e487b7160e01b600052603260045260246000fd5b9060005260206000200180546118ee90613e08565b80601f016020809104026020016040519081016040528092919081815260200182805461191a90613e08565b80156119675780601f1061193c57610100808354040283529160200191611967565b820191906000526020600020905b81548152906001019060200180831161194a57829003601f168201915b505050505084828151811061198c57634e487b7160e01b600052603260045260246000fd5b60200260200101819052506015601682815481106119ba57634e487b7160e01b600052603260045260246000fd5b906000526020600020016040516119d19190613487565b9081526040519081900360200190205483516001600160a01b0390911690849083908110611a0f57634e487b7160e01b600052603260045260246000fd5b60200260200101906001600160a01b031690816001600160a01b031681525050601560168281548110611a5257634e487b7160e01b600052603260045260246000fd5b90600052602060002001604051611a699190613487565b908152604051908190036020019020548251600160a01b90910460e01b90839083908110611aa757634e487b7160e01b600052603260045260246000fd5b6001600160e01b03199092166020928302919091019091015280611aca81613e43565b9150506118ae565b5091945092509050909192565b6000546001600160a01b031690565b60145481565b60608060006014546001600160401b03811115611b2157634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015611b5457816020015b6060815260200190600190039081611b3f5790505b50905060006014546001600160401b03811115611b8157634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015611bb457816020015b6060815260200190600190039081611b9f5790505b50905060005b601454811015611d9d5760138181548110611be557634e487b7160e01b600052603260045260246000fd5b906000526020600020018054611bfa90613e08565b80601f0160208091040260200160405190810160405280929190818152602001828054611c2690613e08565b8015611c735780601f10611c4857610100808354040283529160200191611c73565b820191906000526020600020905b815481529060010190602001808311611c5657829003601f168201915b5050505050838281518110611c9857634e487b7160e01b600052603260045260246000fd5b6020026020010181905250611d5f60138281548110611cc757634e487b7160e01b600052603260045260246000fd5b906000526020600020018054611cdc90613e08565b80601f0160208091040260200160405190810160405280929190818152602001828054611d0890613e08565b8015611d555780601f10611d2a57610100808354040283529160200191611d55565b820191906000526020600020905b815481529060010190602001808311611d3857829003601f168201915b50505050506122df565b828281518110611d7f57634e487b7160e01b600052603260045260246000fd5b60200260200101819052508080611d9590613e43565b915050611bba565b5090925090509091565b606060028054610a6b90613e08565b611dc8611dc16124b7565b8383612828565b5050565b611dd46124b7565b6001600160a01b0316611de5611adf565b6001600160a01b031614611e0b5760405162461bcd60e51b81526004016108ec90613b87565b600980546001600160a01b0319166001600160a01b0392909216919091179055565b600e5481565b611e3b6124b7565b6001600160a01b0316611e4c611adf565b6001600160a01b031614611e725760405162461bcd60e51b81526004016108ec90613b87565b600954600a54604051635b0fc9c360e01b81526001600160a01b0390921691635b0fc9c391611ea5918590600401613665565b600060405180830381600087803b158015611ebf57600080fd5b505af11580156109a5573d6000803e3d6000fd5b82828080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604051632421c19b60e01b9250829150601590611f2590859061343c565b908152604051908190036020019020546001600160e01b0319600160a01b90910460e01b1614611f675760405162461bcd60e51b81526004016108ec90613b53565b85611f723382612529565b611f8e5760405162461bcd60e51b81526004016108ec90613ce6565b60158686604051611fa092919061342c565b90815260405190819003602001812054634848b1a560e01b82526001600160a01b031690634848b1a590611fda908a908890600401613d10565b600060405180830381600087803b158015611ff457600080fd5b505af1158015612008573d6000803e3d6000fd5b5050505050505050505050565b6120266120206124b7565b83612529565b6120425760405162461bcd60e51b81526004016108ec90613c95565b610d2d848484846128cb565b6120566124b7565b6001600160a01b0316612067611adf565b6001600160a01b03161461208d5760405162461bcd60e51b81526004016108ec90613b87565b601080546001600160a01b0319166001600160a01b0392909216919091179055565b60606120ba82612481565b6120d65760405162461bcd60e51b81526004016108ec90613ab6565b600082815260076020526040812080546120ef90613e08565b80601f016020809104026020016040519081016040528092919081815260200182805461211b90613e08565b80156121685780601f1061213d57610100808354040283529160200191612168565b820191906000526020600020905b81548152906001019060200180831161214b57829003601f168201915b5050505050905060006121796128fe565b905080516000141561218d57509050610868565b8151156121bf5780826040516020016121a7929190613458565b60405160208183030381529060405292505050610868565b6121c884612910565b949350505050565b600081632421c19b60e01b806001600160e01b0319166015836040516121f6919061343c565b908152604051908190036020019020546001600160e01b0319600160a01b90910460e01b16146122385760405162461bcd60e51b81526004016108ec90613b53565b601584604051612248919061343c565b90815260405190819003602001812054630178fe3f60e01b82526001600160a01b031690630178fe3f9061228090889060040161365c565b60206040518083038186803b15801561229857600080fd5b505afa1580156122ac573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e7e9190613218565b6010546001600160a01b031690565b60606011826040516122f1919061343c565b9081526020016040518091039020805461230a90613e08565b80601f016020809104026020016040519081016040528092919081815260200182805461233690613e08565b80156123835780601f1061235857610100808354040283529160200191612383565b820191906000526020600020905b81548152906001019060200180831161236657829003601f168201915b50505050509050919050565b600f546001600160a01b031690565b6001600160a01b03918216600090815260066020908152604080832093909416825291909152205460ff1690565b6123d46124b7565b6001600160a01b03166123e5611adf565b6001600160a01b03161461240b5760405162461bcd60e51b81526004016108ec90613b87565b6001600160a01b0381166124315760405162461bcd60e51b81526004016108ec906137a7565b61243a816127d8565b50565b6124456124b7565b6001600160a01b0316612456611adf565b6001600160a01b03161461247c5760405162461bcd60e51b81526004016108ec90613b87565b600a55565b6000908152600360205260409020546001600160a01b0316151590565b6001600160e01b031981166301ffc9a760e01b14919050565b3390565b600081815260056020526040902080546001600160a01b0319166001600160a01b03841690811790915581906124f08261158d565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600061253482612481565b6125505760405162461bcd60e51b81526004016108ec906138c9565b600061255b8361158d565b9050806001600160a01b0316846001600160a01b031614806125965750836001600160a01b031661258b84610aee565b6001600160a01b0316145b806121c857506121c8818561239e565b6125af82612481565b6125cb5760405162461bcd60e51b81526004016108ec90613a00565b60008281526007602090815260409091208251610bc492840190612d1e565b826001600160a01b03166125fd8261158d565b6001600160a01b0316146126235760405162461bcd60e51b81526004016108ec90613bbc565b6001600160a01b0382166126495760405162461bcd60e51b81526004016108ec90613823565b612654838383610bc4565b61265f6000826124bb565b6001600160a01b0383166000908152600460205260408120805460019290612688908490613dc5565b90915550506001600160a01b03821660009081526004602052604081208054600192906126b6908490613d7a565b909155505060008181526003602052604080822080546001600160a01b0319166001600160a01b038681169182179092559151849391871691600080516020613eee83398151915291a4505050565b61270f8282612992565b600d8054600181810183556000929092527fd7b6990105719101dabeb77144f2a3385c8033acd3af97e9423a695e81ad1eb501829055600e5461275191613d7a565b600e5560105460405163228bea5360e21b81526001600160a01b0390911690638a2fa94c906127869085908590600401613573565b602060405180830381600087803b1580156127a057600080fd5b505af11580156127b4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bc4919061303b565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b816001600160a01b0316836001600160a01b0316141561285a5760405162461bcd60e51b81526004016108ec90613867565b6001600160a01b0383811660008181526006602090815260408083209487168084529490915290819020805460ff1916851515179055517f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31906128be908590613651565b60405180910390a3505050565b6128d68484846125ea565b6128e284848484612a5f565b610d2d5760405162461bcd60e51b81526004016108ec90613755565b60408051602081019091526000815290565b606061291b82612481565b6129375760405162461bcd60e51b81526004016108ec90613c05565b60006129416128fe565b905060008151116129615760405180602001604052806000815250610c5e565b8061296b84612b7a565b60405160200161297c929190613458565b6040516020818303038152906040529392505050565b6001600160a01b0382166129b85760405162461bcd60e51b81526004016108ec90613a81565b6129c181612481565b156129de5760405162461bcd60e51b81526004016108ec906137ed565b6129ea60008383610bc4565b6001600160a01b0382166000908152600460205260408120805460019290612a13908490613d7a565b909155505060008181526003602052604080822080546001600160a01b0319166001600160a01b0386169081179091559051839290600080516020613eee833981519152908290a45050565b6000612a73846001600160a01b0316612c94565b15612b6f57836001600160a01b031663150b7a02612a8f6124b7565b8786866040518563ffffffff1660e01b8152600401612ab19493929190613536565b602060405180830381600087803b158015612acb57600080fd5b505af1925050508015612afb575060408051601f3d908101601f19168201909252612af89181019061308b565b60015b612b55573d808015612b29576040519150601f19603f3d011682016040523d82523d6000602084013e612b2e565b606091505b508051612b4d5760405162461bcd60e51b81526004016108ec90613755565b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490506121c8565b506001949350505050565b606081612b9f57506040805180820190915260018152600360fc1b6020820152610868565b8160005b8115612bc95780612bb381613e43565b9150612bc29050600a83613d92565b9150612ba3565b6000816001600160401b03811115612bf157634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015612c1b576020820181803683370190505b5090505b84156121c857612c30600183613dc5565b9150612c3d600a86613e5e565b612c48906030613d7a565b60f81b818381518110612c6b57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350612c8d600a86613d92565b9450612c1f565b3b151590565b828054612ca690613e08565b90600052602060002090601f016020900481019282612cc85760008555612d0e565b82601f10612ce15782800160ff19823516178555612d0e565b82800160010185558215612d0e579182015b82811115612d0e578235825591602001919060010190612cf3565b50612d1a929150612d92565b5090565b828054612d2a90613e08565b90600052602060002090601f016020900481019282612d4c5760008555612d0e565b82601f10612d6557805160ff1916838001178555612d0e565b82800160010185558215612d0e579182015b82811115612d0e578251825591602001919060010190612d77565b5b80821115612d1a5760008155600101612d93565b6000612dba612db584613d47565b613d1e565b9050828152838383011115612dce57600080fd5b828260208301376000602084830101529392505050565b6000612df3612db584613d47565b9050828152838383011115612e0757600080fd5b610c5e836020830184613ddc565b60008083601f840112612e26578182fd5b5081356001600160401b03811115612e3c578182fd5b602083019150836020828501011115612e5457600080fd5b9250929050565b600082601f830112612e6b578081fd5b610c5e83833560208501612da7565b600060208284031215612e8b578081fd5b8135610c5e81613eb4565b60008060408385031215612ea8578081fd5b8235612eb381613eb4565b91506020830135612ec381613eb4565b809150509250929050565b600080600060608486031215612ee2578081fd5b8335612eed81613eb4565b92506020840135612efd81613eb4565b929592945050506040919091013590565b60008060008060808587031215612f23578081fd5b8435612f2e81613eb4565b93506020850135612f3e81613eb4565b92506040850135915060608501356001600160401b03811115612f5f578182fd5b8501601f81018713612f6f578182fd5b612f7e87823560208401612da7565b91505092959194509250565b60008060408385031215612f9c578182fd5b8235612fa781613eb4565b91506020830135612ec381613ec9565b60008060408385031215612fc9578182fd5b8235612fd481613eb4565b946020939093013593505050565b60008060008060608587031215612ff7578182fd5b843561300281613eb4565b93506020850135925060408501356001600160401b03811115613023578283fd5b61302f87828801612e15565b95989497509550505050565b60006020828403121561304c578081fd5b8151610c5e81613ec9565b600060208284031215613068578081fd5b5035919050565b600060208284031215613080578081fd5b8135610c5e81613ed7565b60006020828403121561309c578081fd5b8151610c5e81613ed7565b6000806000606084860312156130bb578081fd5b83356130c681613ed7565b925060208401356130d681613eb4565b915060408401356001600160401b038111156130f0578182fd5b6130fc86828701612e5b565b9150509250925092565b60008060208385031215613118578182fd5b82356001600160401b0381111561312d578283fd5b61313985828601612e15565b90969095509350505050565b600060208284031215613156578081fd5b81516001600160401b0381111561316b578182fd5b8201601f8101841361317b578182fd5b6121c884825160208401612de5565b6000806000806040858703121561319f578182fd5b84356001600160401b03808211156131b5578384fd5b6131c188838901612e15565b909650945060208701359150808211156131d9578384fd5b5061302f87828801612e15565b6000602082840312156131f7578081fd5b81356001600160401b0381111561320c578182fd5b6121c884828501612e5b565b600060208284031215613229578081fd5b5051919050565b600080600060408486031215613244578081fd5b8335925060208401356001600160401b03811115613260578182fd5b61326c86828701612e15565b9497909650939450505050565b600080600080600060608688031215613290578283fd5b8535945060208601356001600160401b03808211156132ad578485fd5b6132b989838a01612e15565b909650945060408801359150808211156132d1578283fd5b506132de88828901612e15565b969995985093965092949392505050565b60008060008060608587031215613304578182fd5b8435935060208501356001600160401b03811115613320578283fd5b61332c87828801612e15565b9598909750949560400135949350505050565b60008060408385031215613351578182fd5b8235915060208301356001600160401b0381111561336d578182fd5b61337985828601612e5b565b9150509250929050565b6000815180845260208085018081965082840281019150828601855b858110156133c95782840389526133b7848351613400565b9885019893509084019060010161339f565b5091979650505050505050565b60008284528282602086013780602084860101526020601f19601f85011685010190509392505050565b60008151808452613418816020860160208601613ddc565b601f01601f19169290920160200192915050565b6000828483379101908152919050565b6000825161344e818460208701613ddc565b9190910192915050565b6000835161346a818460208801613ddc565b83519083019061347e818360208801613ddc565b01949350505050565b81546000908190600281046001808316806134a357607f831692505b60208084108214156134c357634e487b7160e01b87526022600452602487fd5b8180156134d757600181146134e857613514565b60ff19861689528489019650613514565b6134f18a613d6e565b885b8681101561350c5781548b8201529085019083016134f3565b505084890196505b509498975050505050505050565b6001600160a01b0391909116815260200190565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061356990830184613400565b9695505050505050565b6001600160a01b03929092168252602082015260400190565b60006060825261359f6060830186613383565b828103602084810191909152855180835286820192820190845b818110156135de5784516001600160a01b0316835293830193918301916001016135b9565b505084810360408601528551808252908201925081860190845b8181101561361e5782516001600160e01b031916855293830193918301916001016135f8565b509298975050505050505050565b60006040825261363f6040830185613383565b8281036020840152610e7e8185613383565b901515815260200190565b90815260200190565b9182526001600160a01b0316602082015260400190565b600084825260406020830152610e7e6040830184866133d6565b6001600160e01b031991909116815260200190565b600060208252610c5e6020830184613400565b6000606082526136d16060830185613400565b92546001600160a01b0381166020840152604090811b6001600160e01b03191692019190915250919050565b602080825260139082015272151bdad95b88191bd95cdb89dd08195e1a5cdd606a1b604082015260600190565b60208082526011908201527015d391950e88139bdd08185b1b1bddd959607a1b604082015260600190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b6020808252601c908201527b115490cdcc8c4e881d1bdad95b88185b1c9958591e481b5a5b9d195960221b604082015260600190565b60208082526024908201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646040820152637265737360e01b606082015260800190565b60208082526019908201527822a9219b99189d1030b8383937bb32903a379031b0b63632b960391b604082015260600190565b60208082526015908201527414d0d25b9d195c999858d9481b9bdd081d985b1a59605a1b604082015260600190565b6020808252602c908201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860408201526b34b9ba32b73a103a37b5b2b760a11b606082015260800190565b60208082526038908201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776040820152771b995c881b9bdc88185c1c1c9bdd995908199bdc88185b1b60421b606082015260800190565b6020808252602a908201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604082015269726f206164647265737360b01b606082015260800190565b60208082526029908201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460408201526832b73a103a37b5b2b760b91b606082015260800190565b6020808252602e908201527f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60408201526d32bc34b9ba32b73a103a37b5b2b760911b606082015260800190565b60208082526019908201527814d0d25b9d195c999858d9481b9bdd081cdd5c1c1bdc9d1959603a1b604082015260600190565b6020808252818101527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604082015260600190565b60208082526031908201527f45524337323155524953746f726167653a2055524920717565727920666f72206040820152703737b732bc34b9ba32b73a103a37b5b2b760791b606082015260800190565b6020808252602c908201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860408201526b34b9ba32b73a103a37b5b2b760a11b606082015260800190565b6020808252601a90820152792ba7232a1d102a37b5b2b71036b2ba30b230ba309032b93937b960311b604082015260600190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526029908201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960408201526839903737ba1037bbb760b91b606082015260800190565b6020808252602f908201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60408201526e3732bc34b9ba32b73a103a37b5b2b760891b606082015260800190565b60208082526021908201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656040820152603960f91b606082015260800190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b60208082526010908201526f574e46543a204f776e6572206f6e6c7960801b604082015260600190565b918252602082015260400190565b6040518181016001600160401b0381118282101715613d3f57613d3f613e9e565b604052919050565b60006001600160401b03821115613d6057613d60613e9e565b50601f01601f191660200190565b60009081526020902090565b60008219821115613d8d57613d8d613e72565b500190565b600082613da157613da1613e88565b500490565b6000816000190483118215151615613dc057613dc0613e72565b500290565b600082821015613dd757613dd7613e72565b500390565b60005b83811015613df7578181015183820152602001613ddf565b83811115610d2d5750506000910152565b600281046001821680613e1c57607f821691505b60208210811415613e3d57634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415613e5757613e57613e72565b5060010190565b600082613e6d57613e6d613e88565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461243a57600080fd5b801515811461243a57600080fd5b6001600160e01b03198116811461243a57600080fdfeddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa26469706673582212208c24e4149241ea7dbda66887bc3a535ef87c26e7003c74711fb64e1cca8490d264736f6c63430008000033",
  "devdoc": {
    "kind": "dev",
    "methods": {
      "approve(address,uint256)": {
        "details": "See {IERC721-approve}."
      },
      "balanceOf(address)": {
        "details": "See {IERC721-balanceOf}."
      },
      "getApproved(uint256)": {
        "details": "See {IERC721-getApproved}."
      },
      "isApprovedForAll(address,address)": {
        "details": "See {IERC721-isApprovedForAll}."
      },
      "name()": {
        "details": "See {IERC721Metadata-name}."
      },
      "owner()": {
        "details": "Returns the address of the current owner."
      },
      "ownerOf(uint256)": {
        "details": "See {IERC721-ownerOf}."
      },
      "renounceOwnership()": {
        "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner."
      },
      "safeTransferFrom(address,address,uint256)": {
        "details": "See {IERC721-safeTransferFrom}."
      },
      "safeTransferFrom(address,address,uint256,bytes)": {
        "details": "See {IERC721-safeTransferFrom}."
      },
      "setApprovalForAll(address,bool)": {
        "details": "See {IERC721-setApprovalForAll}."
      },
      "supportsInterface(bytes4)": {
        "details": "See {IERC165-supportsInterface}."
      },
      "symbol()": {
        "details": "See {IERC721Metadata-symbol}."
      },
      "tokenURI(uint256)": {
        "details": "See {IERC721Metadata-tokenURI}."
      },
      "transferFrom(address,address,uint256)": {
        "details": "See {IERC721-transferFrom}."
      },
      "transferOwnership(address)": {
        "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
      }
    },
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  },
  "storageLayout": {
    "storage": [
      {
        "astId": 441,
        "contract": "contracts/WNFT.sol:WNFT",
        "label": "_owner",
        "offset": 0,
        "slot": "0",
        "type": "t_address"
      },
      {
        "astId": 1213,
        "contract": "contracts/WNFT.sol:WNFT",
        "label": "_name",
        "offset": 0,
        "slot": "1",
        "type": "t_string_storage"
      },
      {
        "astId": 1215,
        "contract": "contracts/WNFT.sol:WNFT",
        "label": "_symbol",
        "offset": 0,
        "slot": "2",
        "type": "t_string_storage"
      },
      {
        "astId": 1219,
        "contract": "contracts/WNFT.sol:WNFT",
        "label": "_owners",
        "offset": 0,
        "slot": "3",
        "type": "t_mapping(t_uint256,t_address)"
      },
      {
        "astId": 1223,
        "contract": "contracts/WNFT.sol:WNFT",
        "label": "_balances",
        "offset": 0,
        "slot": "4",
        "type": "t_mapping(t_address,t_uint256)"
      },
      {
        "astId": 1227,
        "contract": "contracts/WNFT.sol:WNFT",
        "label": "_tokenApprovals",
        "offset": 0,
        "slot": "5",
        "type": "t_mapping(t_uint256,t_address)"
      },
      {
        "astId": 1233,
        "contract": "contracts/WNFT.sol:WNFT",
        "label": "_operatorApprovals",
        "offset": 0,
        "slot": "6",
        "type": "t_mapping(t_address,t_mapping(t_address,t_bool))"
      },
      {
        "astId": 2165,
        "contract": "contracts/WNFT.sol:WNFT",
        "label": "_tokenURIs",
        "offset": 0,
        "slot": "7",
        "type": "t_mapping(t_uint256,t_string_storage)"
      },
      {
        "astId": 3086,
        "contract": "contracts/WNFT.sol:WNFT",
        "label": "_ensResolver",
        "offset": 0,
        "slot": "8",
        "type": "t_contract(Resolver)433"
      },
      {
        "astId": 3089,
        "contract": "contracts/WNFT.sol:WNFT",
        "label": "_ens",
        "offset": 0,
        "slot": "9",
        "type": "t_contract(ENS)182"
      },
      {
        "astId": 3091,
        "contract": "contracts/WNFT.sol:WNFT",
        "label": "_ensNodeID",
        "offset": 0,
        "slot": "10",
        "type": "t_bytes32"
      },
      {
        "astId": 3094,
        "contract": "contracts/WNFT.sol:WNFT",
        "label": "_priceFeed",
        "offset": 0,
        "slot": "11",
        "type": "t_contract(AggregatorV3Interface)45"
      },
      {
        "astId": 3102,
        "contract": "contracts/WNFT.sol:WNFT",
        "label": "wnftPriceInUSDPOW8",
        "offset": 0,
        "slot": "12",
        "type": "t_uint256"
      },
      {
        "astId": 3105,
        "contract": "contracts/WNFT.sol:WNFT",
        "label": "_keys",
        "offset": 0,
        "slot": "13",
        "type": "t_array(t_uint256)dyn_storage"
      },
      {
        "astId": 3108,
        "contract": "contracts/WNFT.sol:WNFT",
        "label": "amount",
        "offset": 0,
        "slot": "14",
        "type": "t_uint256"
      },
      {
        "astId": 3110,
        "contract": "contracts/WNFT.sol:WNFT",
        "label": "_contractSwitched",
        "offset": 0,
        "slot": "15",
        "type": "t_address"
      },
      {
        "astId": 3113,
        "contract": "contracts/WNFT.sol:WNFT",
        "label": "_mintingContract",
        "offset": 0,
        "slot": "16",
        "type": "t_contract(IMinting)4081"
      },
      {
        "astId": 3117,
        "contract": "contracts/WNFT.sol:WNFT",
        "label": "_collectionOnchainMetadata",
        "offset": 0,
        "slot": "17",
        "type": "t_mapping(t_string_memory_ptr,t_string_storage)"
      },
      {
        "astId": 3121,
        "contract": "contracts/WNFT.sol:WNFT",
        "label": "_collectionMetadataFields",
        "offset": 0,
        "slot": "18",
        "type": "t_mapping(t_string_memory_ptr,t_bool)"
      },
      {
        "astId": 3124,
        "contract": "contracts/WNFT.sol:WNFT",
        "label": "_collectionMetadataFieldNames",
        "offset": 0,
        "slot": "19",
        "type": "t_array(t_string_storage)dyn_storage"
      },
      {
        "astId": 3127,
        "contract": "contracts/WNFT.sol:WNFT",
        "label": "collectionMetadataFieldNamesCount",
        "offset": 0,
        "slot": "20",
        "type": "t_uint256"
      },
      {
        "astId": 3132,
        "contract": "contracts/WNFT.sol:WNFT",
        "label": "_tokensMetadataFields",
        "offset": 0,
        "slot": "21",
        "type": "t_mapping(t_string_memory_ptr,t_struct(SC)3083_storage)"
      },
      {
        "astId": 3135,
        "contract": "contracts/WNFT.sol:WNFT",
        "label": "_tokensMetadataFieldNames",
        "offset": 0,
        "slot": "22",
        "type": "t_array(t_string_storage)dyn_storage"
      },
      {
        "astId": 3138,
        "contract": "contracts/WNFT.sol:WNFT",
        "label": "tokensMetadataFieldNamesCount",
        "offset": 0,
        "slot": "23",
        "type": "t_uint256"
      },
      {
        "astId": 3142,
        "contract": "contracts/WNFT.sol:WNFT",
        "label": "_onchainMetadataInterface",
        "offset": 0,
        "slot": "24",
        "type": "t_mapping(t_bytes4,t_bool)"
      },
      {
        "astId": 3144,
        "contract": "contracts/WNFT.sol:WNFT",
        "label": "_wnftUri",
        "offset": 0,
        "slot": "25",
        "type": "t_string_storage"
      }
    ],
    "types": {
      "t_address": {
        "encoding": "inplace",
        "label": "address",
        "numberOfBytes": "20"
      },
      "t_array(t_string_storage)dyn_storage": {
        "base": "t_string_storage",
        "encoding": "dynamic_array",
        "label": "string[]",
        "numberOfBytes": "32"
      },
      "t_array(t_uint256)dyn_storage": {
        "base": "t_uint256",
        "encoding": "dynamic_array",
        "label": "uint256[]",
        "numberOfBytes": "32"
      },
      "t_bool": {
        "encoding": "inplace",
        "label": "bool",
        "numberOfBytes": "1"
      },
      "t_bytes32": {
        "encoding": "inplace",
        "label": "bytes32",
        "numberOfBytes": "32"
      },
      "t_bytes4": {
        "encoding": "inplace",
        "label": "bytes4",
        "numberOfBytes": "4"
      },
      "t_contract(AggregatorV3Interface)45": {
        "encoding": "inplace",
        "label": "contract AggregatorV3Interface",
        "numberOfBytes": "20"
      },
      "t_contract(ENS)182": {
        "encoding": "inplace",
        "label": "contract ENS",
        "numberOfBytes": "20"
      },
      "t_contract(IMinting)4081": {
        "encoding": "inplace",
        "label": "contract IMinting",
        "numberOfBytes": "20"
      },
      "t_contract(Resolver)433": {
        "encoding": "inplace",
        "label": "contract Resolver",
        "numberOfBytes": "20"
      },
      "t_mapping(t_address,t_bool)": {
        "encoding": "mapping",
        "key": "t_address",
        "label": "mapping(address => bool)",
        "numberOfBytes": "32",
        "value": "t_bool"
      },
      "t_mapping(t_address,t_mapping(t_address,t_bool))": {
        "encoding": "mapping",
        "key": "t_address",
        "label": "mapping(address => mapping(address => bool))",
        "numberOfBytes": "32",
        "value": "t_mapping(t_address,t_bool)"
      },
      "t_mapping(t_address,t_uint256)": {
        "encoding": "mapping",
        "key": "t_address",
        "label": "mapping(address => uint256)",
        "numberOfBytes": "32",
        "value": "t_uint256"
      },
      "t_mapping(t_bytes4,t_bool)": {
        "encoding": "mapping",
        "key": "t_bytes4",
        "label": "mapping(bytes4 => bool)",
        "numberOfBytes": "32",
        "value": "t_bool"
      },
      "t_mapping(t_string_memory_ptr,t_bool)": {
        "encoding": "mapping",
        "key": "t_string_memory_ptr",
        "label": "mapping(string => bool)",
        "numberOfBytes": "32",
        "value": "t_bool"
      },
      "t_mapping(t_string_memory_ptr,t_string_storage)": {
        "encoding": "mapping",
        "key": "t_string_memory_ptr",
        "label": "mapping(string => string)",
        "numberOfBytes": "32",
        "value": "t_string_storage"
      },
      "t_mapping(t_string_memory_ptr,t_struct(SC)3083_storage)": {
        "encoding": "mapping",
        "key": "t_string_memory_ptr",
        "label": "mapping(string => struct WNFT.SC)",
        "numberOfBytes": "32",
        "value": "t_struct(SC)3083_storage"
      },
      "t_mapping(t_uint256,t_address)": {
        "encoding": "mapping",
        "key": "t_uint256",
        "label": "mapping(uint256 => address)",
        "numberOfBytes": "32",
        "value": "t_address"
      },
      "t_mapping(t_uint256,t_string_storage)": {
        "encoding": "mapping",
        "key": "t_uint256",
        "label": "mapping(uint256 => string)",
        "numberOfBytes": "32",
        "value": "t_string_storage"
      },
      "t_string_memory_ptr": {
        "encoding": "bytes",
        "label": "string",
        "numberOfBytes": "32"
      },
      "t_string_storage": {
        "encoding": "bytes",
        "label": "string",
        "numberOfBytes": "32"
      },
      "t_struct(SC)3083_storage": {
        "encoding": "inplace",
        "label": "struct WNFT.SC",
        "members": [
          {
            "astId": 3080,
            "contract": "contracts/WNFT.sol:WNFT",
            "label": "SCaddress",
            "offset": 0,
            "slot": "0",
            "type": "t_address"
          },
          {
            "astId": 3082,
            "contract": "contracts/WNFT.sol:WNFT",
            "label": "SCinterface",
            "offset": 20,
            "slot": "0",
            "type": "t_bytes4"
          }
        ],
        "numberOfBytes": "32"
      },
      "t_uint256": {
        "encoding": "inplace",
        "label": "uint256",
        "numberOfBytes": "32"
      }
    }
  }
}