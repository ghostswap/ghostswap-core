import { HardhatUserConfig } from "hardhat/types";

import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";
// import "@nomiclabs/hardhat-vyper";

import { config as env } from "dotenv";
// import { ethers } from "hardhat";

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html

// task("accounts", "Prints the list of accounts", async () => {
//   const accounts = await ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });
env();
const MNEMONIC_KEY = process.env.MNEMONIC_KEY || "";

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
      chainId: 1337,
    },
    mainnet: {
      url:
        "https://rpcapi.fantom.network/",
      chainId: 250,
      accounts: {
        mnemonic: MNEMONIC_KEY
      },
    },
    testnet: {
      url:
        "https://rpc.testnet.fantom.network/",
      chainId: 4002,
      accounts: {
        mnemonic: MNEMONIC_KEY
      },
    },
    hardhat: {
      forking: {
        url:
          "https://rpcapi.fantom.network/",
      },
      accounts: {
        mnemonic: MNEMONIC_KEY,
        accountsBalance: "10000000000000000000000",
      },
      chainId: 1337,
    },
  },
  solidity: {
    compilers: [
      {
        version: '0.4.0'
      },
      {
        version: '0.6.12'
      },
      {
        version: '0.5.16'
      }
    ],
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
    overrides: {
      "contracts/libraries/SafeBEP20.sol": {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        }
      },
      "contracts/libraries/BEP20.sol": {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        }
      },
      "contracts/libraries/SafeMath.sol": {
        version: "0.5.16",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        }
      },
      "contracts/Spirit.sol": {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        }
      },
      "contracts/SpiritMasterChef.sol": {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        }
      },
      "contracts/SpiritRouter.sol": {
        version: "0.6.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        }
      },
      "contracts/SpiritFactory.sol": {
        version: "0.5.16",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        }
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 300000,
  },
};

export default config;
