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
```
cd ../client
npm run dev

## 🎯 Usage

### ✅ Creating a New Campaign
1. **Connect your MetaMask wallet** by clicking the **"Connect Wallet"** button.  
2. Navigate to the **"Create Campaign"** section.  
3. Fill in the required details:
   - **Campaign Title**  
   - **Description**  
   - **Target Amount (ETH)**  
   - **Deadline**  
4. Click **"Create Campaign"** and confirm the transaction in MetaMask.  
5. Your campaign is now live on the blockchain! 🎉  

---

### ✅ Contributing to a Campaign
1. Browse the list of **active campaigns** on the homepage.  
2. Click on a campaign to view details.  
3. Enter the amount you want to contribute in **ETH**.  
4. Click **"Funds"** and approve the transaction in MetaMask.  
5. Your contribution is recorded on the blockchain, and the campaign owner can withdraw funds when the goal is met.  

---

### ✅ Withdrawing Funds (For Campaign Owners)
1. Navigate to **"My Campaigns"** to view your campaigns.  
2. If the target amount is reached, click **"Withdraw Funds"**.  
3. Confirm the transaction in MetaMask to transfer the funds to your wallet.  

---

### ✅ Viewing Transaction History
- Click **"Transaction History"** to see all blockchain transactions related to your campaigns.  
- Details include **amount, contributors, and timestamps**.  

---

### 💡 **Troubleshooting**
- **Issue: MetaMask Not Connecting?**  
  - Ensure you are using a supported **Ethereum-compatible browser** (Chrome, Brave).  
  - Switch to the correct **Ethereum network (Goerli, Sepolia, or Mainnet)**.  

- **Issue: Transaction Failed?**  
  - Check if you have **sufficient ETH** in your wallet.  
  - Ensure you are using the **correct gas fees** suggested by MetaMask.
 
## 👨‍💻 Contributors

### 🎉 Main Contributors:
- **Harsh Pimple** – [GitHub](https://github.com/harshpimple1321)  
  

- **Karan Shah** – [GitHub](https://github.com/KaranShah1911)  


- **Darshit Shah** – [GitHub](https://github.com/darshitshah2005)  
  

- **Kavya Shah** – [GitHub](https://github.com/kavyashah)  
 

---












