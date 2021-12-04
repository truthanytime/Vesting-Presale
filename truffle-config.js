require("dotenv").config();
const mnemonic = process.env.mnemonic;
const bscscan = process.env.bscscan;
const HDWalletProvider = require("@truffle/hdwallet-provider")

// const fs = require('fs');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 7545, // Standard Ethereum port (default: none)
      network_id: "5777", // Any network (default: none)
    },
    bsc: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          "https://data-seed-prebsc-1-s1.binance.org:8545"
        ),
      gas: 9900000,
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
  },
  compilers: {
    solc: {
      version: "0.8.6", // Fetch exact version from solc-bin (default: truffle's version)
      // settings: {
      //   optimizer: {
      //     enabled: true,
      //     runs: 200,
      //   },
      // },
    },
  },
  plugins: [
    'truffle-plugin-verify'
  ],
  chai: {
    enableTimeouts: false,
  },
  api_keys: {
    bscscan: bscscan
  }

}
