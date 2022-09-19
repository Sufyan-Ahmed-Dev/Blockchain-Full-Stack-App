const hre = require("hardhat");

async function main() {
  const NFTMarketPlace = await hre.ethers.getContractFactory("NFTMarketPlace");
  const NFTmarketplace = await NFTMarketPlace.deploy();

  await NFTmarketplace.deployed();

  console.log(" Transfer Contract deployed to:", NFTmarketplace.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
