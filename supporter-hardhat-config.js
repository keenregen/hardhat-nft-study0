const { ethers } = require("hardhat");

const networkConfig = {
     default: {
          name: "hardhat",
          keepersUpdateInterval: "30",
     },
     31337: {
          name: "localhost",
          subscriptionId: "0",
          gasLane: "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc", // 150 gwei
          keepersUpdateInterval: "30",
          callbackGasLimit: "500000", // 500,000 gas
     },
     5: {
          name: "goerli",
          subscriptionId: "10149",
          gasLane: "0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15", // 150 gwei
          keepersUpdateInterval: "30",
          callbackGasLimit: "500000", // 500,000 gas
     },
     1: {
          name: "mainnet",
          keepersUpdateInterval: "30",
     },
};

const developmentChains = ["hardhat", "localhost"];
const VERIFICATION_BLOCK_CONFIRMATIONS = 3;
const frontEndContractsFile = "../nextjs-smartcontract-raffle/constants/contractAddresses.json";
const frontEndAbiFile = "../nextjs-smartcontract-raffle/constants/abi.json";

module.exports = {
     networkConfig,
     developmentChains,
     VERIFICATION_BLOCK_CONFIRMATIONS,
     frontEndContractsFile,
     frontEndAbiFile,
};
