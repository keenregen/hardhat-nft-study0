require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-deploy");
require("solidity-coverage");
require("hardhat-gas-reporter");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */

const goerliRpcPoint = process.env.goerliRpcPoint || "";
const goerliAccountA = process.env.goerliAccountA || "";

const localHostRpcPoint = process.env.localHostRpcPoint || "";

const etherScanKeyA = process.env.etherScanKeyA || "";

const cMarCapApiKey = process.env.cMarCapApiKey || "";

module.exports = {
     solidity: {
          compilers: [{ version: "0.8.7" }, { version: "0.6.6" }],
     },

     namedAccounts: {
          deployer: {
               default: 0,
          },
          participant: {
               dafault: 1,
          },
     },

     defaultNetwork: "hardhat",

     networks: {
          goerli: {
               url: goerliRpcPoint,
               accounts: [goerliAccountA],
               chainId: 5,
               blockConfirms: 3,
               saveDeployments: true,
          },
          hardhat: {
               chainId: 31337,
               blockConfirms: 1,
          },
          localhost: {
               url: localHostRpcPoint,
               // we don't need to specify an account, automatically given via hh
               chainId: 31337,
          },
     },

     etherscan: {
          // yarn hardhat verify --network <NETWORK> <CONTRACT_ADDRESS> <CONSTRUCTOR_PARAMETERS>
          apiKey: {
               goerli: etherScanKeyA,
          },
          customChains: [
               {
                    network: "goerli",
                    chainId: 5,
                    urls: {
                         apiURL: "https://api-goerli.etherscan.io/api",
                         browserURL: "https://goerli.etherscan.io",
                    },
               },
          ],
     },

     gasReporter: {
          enabled: false,
          currency: "USD",
          outputFile: "gasReport.txt",
          noColors: true,
          coinmarketcap: cMarCapApiKey,
     },

     mocha: {
          timeout: 500000, // 500 seconds max for running tests
     },
};
