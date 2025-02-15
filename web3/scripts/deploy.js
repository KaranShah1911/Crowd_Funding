const hre = require("hardhat");

async function main() {
  const CrowdFunding = await hre.ethers.getContractFactory("CrowdFunding");
  const crowdFunding = await CrowdFunding.deploy();

  await crowdFunding.waitForDeployment(); // ✅ Correct method for Hardhat 2.22+
  console.log(`Contract deployed at: ${await crowdFunding.getAddress()}`); // ✅ Correct way to get the address
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
