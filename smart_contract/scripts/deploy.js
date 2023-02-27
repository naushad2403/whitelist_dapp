// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

  const WhiteList = await hre.ethers.getContractFactory("Whitelist");
  const whiteList = await WhiteList.deploy(10);

  await whiteList.deployed(); // address 0xf3d733Ae8f86a92e00E3c787F036A4A07C31B2D9cd

  console.log(
    `WhiteList deployed to ${whiteList.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
