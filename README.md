
# Blockchain based voting system

This project is a decentralized voting system built on a blockchain using Hardhat for deployment on the Sepolia network. The system ensures transparency and immutability, making it ideal for secure voting processes.


## Table of contents
- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Smart Contract Deployment](#smart-contract-deployment)
## Overview
The Voting System is a decentralized application (DApp) that allows users to vote securely and transparently using blockchain technology. The system is built with Solidity for smart contracts and uses Hardhat for deployment and testing.
## Features

- **Decentralized:** Ensures transparency and prevents tampering with the voting process.
- **Secure:** Utilizes blockchain technology to secure votes and voter identities.
- **Anonymous:** Voter identities are anonymized, ensuring privacy.
- **Real-time Results:** Provides real-time updates on the voting results.


## Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Solidity (Smart Contracts)
- **Blockchain Framework:** Hardhat
- **Development Environment:** Node.js, Hardhat
- **Tools:** Metamask, Ethers.js



## Installation

1.Clone the repository

```bash
  git clone https://github.com/Manjusenthilkumar/Voting-System-Blockchain.git
  cd Voting-System-Blockchain

```
2.Install dependencies:

```bash
npm install
```
3.Configure environment variables:

Create a .env file in the root directory and add your configurations. For example:

```bash
INFURA_API_KEY=your_infura_api_key
PRIVATE_KEY=your_private_key
```



## Usage

1.Start the local blockchain:

```bash

npx hardhat node

```
2.Deploy the smart contracts:
```bash
npx hardhat run scripts/deploy.js --network sepolia
```


3.Interact with the DApp:

Open the frontend in your browser and connect to your local blockchain using Metamask.


## Smart Contract Deployment

The smart contracts are deployed using Hardhat. The scripts/deploy.js file contains the deployment script. To deploy the contracts to the Sepolia network, use:

```bash
npx hardhat run scripts/deploy.js --network sepolia
```
