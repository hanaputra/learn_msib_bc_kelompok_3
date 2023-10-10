require("@nomicfoundation/hardhat-toolbox");
require("hardhat-gas-reporter");
// require('hardhat-ethernal');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  hardhat: {
    url: "http://localhost:8545",
    accounts: ["0x55dfe2c6e5fe50c9474df5035fae03bdedc04d02845c5f752c94e61c71532509"]
  },
  mumbai_testnet: {
    url: "https://rpc-mumbai.maticvigil.com",
    accounts: ["0x55dfe2c6e5fe50c9474df5035fae03bdedc04d02845c5f752c94e61c71532509"]
  },
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
//   ethernal: {
//     apiToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJlYmFzZVVzZXJJZCI6ImZlOHBEak8zRllZR0thc1NiVWp5eUhsdk5qNzMiLCJhcGlLZXkiOiJUUTBNQTdRLVlLWjQ2WUItR0haOEdNVi1USDM2Mkg1XHUwMDAxIiwiaWF0IjoxNjk2OTA2MzkxfQ.qr-6nt9Jm872xlb1L9aPYklCX1cwXdD1SFPYegqWj6U"
// }
};
