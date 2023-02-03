const hre = require("hardhat");


async function main() {
  const Contract = await hre.ethers.getContractFactory("Contract");
  const contract = await Contract.deploy();
  console.log("Deploy Contract to", contract.address);
  await contract.deployed();
  console.log("Contract deployed ");

  const Caller = await hre.ethers.getContractFactory("Caller");
  const caller = await Caller.deploy(contract.address);
  console.log("Deploy Caller to", caller.address);
  await caller.deployed();
  console.log("Caller output", caller);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
