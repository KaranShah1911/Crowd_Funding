# 🌟 Web3 Crowdfunding Application 🚀

## 🔥 Overview
This is a **decentralized crowdfunding platform** built using Web3 technology. Users can create campaigns with a target **ETH** amount, and donors can contribute **ETH** to support these campaigns. The platform uses **Web3 authentication** for both donors and campaign creators. 💡

## 🛠 Tech Stack
- 🏗 **Frontend:** Vite + React, Tailwind CSS
- ⚙ **Backend:** Hardhat (Web3-based, Smart Contracts on Ethereum)
- 🔑 **Authentication:** Web3 Login (MetaMask)

## ✨ Features
- 🎯 Campaign creation with a target **ETH** goal.
- 📢 Display of all active campaigns for donors to explore.
- 🔐 Web3-based authentication for secure interactions.
- 💰 Donations in **ETH** with real-time tracking of funds.
- 📜 Smart contract-powered backend for transparency and trust.

## 📦 Installation
### ✅ Prerequisites
- 📌 **Node.js & npm**
- 🔗 **MetaMask**
- 🏗 **Hardhat for smart contract development**

### 🛠 Clone Repository
```sh
git clone https://github.com/KaranShah1911/Crowd_Funding.git
cd Crowd_Funding
```

### 📥 Install Dependencies
```sh
cd client
npm i
```

```sh
cd ../web3
npm i
```
## 🚀 Running the Application
### 1️⃣ Start Hardhat Node
```sh
npx hardhat node
```

### 2️⃣ Deploy Smart Contracts
```sh
npx hardhat run scripts/deploy.js --network sepolia
```

### 3️⃣ Start Frontend
```sh
cd ../client
npm run dev