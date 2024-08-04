/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
   solidity: "0.8.11",
   networks: {
      hardhat: {},
      sepolia: {
         url: "https://sepolia.infura.io/v3/370b647c5c4e4577bf77cedf862e1adc",
         accounts:['b0cd1b24f1806c39bca6b5b8e206836ad26e35289c9dfc506053612873172dea'],
      },
       
         
   },
}
