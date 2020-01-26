  
require('dotenv').config()
const HDWalletProvider = require("@truffle/hdwallet-provider")


module.exports = {

  networks: {
    development: {
      provider: () => { return new HDWalletProvider(process.env.MNEMONIC, "http://127.0.0.1:8545", 0, 5) },
      network_id: "*"
    },
    ropsten: {
      provider: () => { return new HDWalletProvider(process.env.MNEMONIC, "ropsten." + process.env.INFURA) },
      network_id: "3"
    },
    kovan: { 
      provider: () => { return new HDWalletProvider(process.env.MNEMONIC, "kovan." + process.env.INFURA )},
      metwork_id: "43"
    }
  },

  compilers: {
    solc: {
      verion: "0.6.0"
    }
  }
}
