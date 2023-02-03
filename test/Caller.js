const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { expect } = require("chai");

describe("Winner", function () {

  async function deployOneYearLockFixture() {
    const Contract = await hre.ethers.getContractFactory("Contract");
    const contract = await Contract.deploy();
    await contract.deployed();
    
    return { Contract, contract };
  }
  
  it("Should emit winner", async function () {
    const { Contract, contract } = await loadFixture(deployOneYearLockFixture);
    // console.log("Deploy (base) Contract to", contract.address);
    
    const Caller = await hre.ethers.getContractFactory("Caller");
    const caller = await Caller.deploy(contract.address);
    // console.log("Deploy Caller to", caller.address);
    await caller.deployed();
    expect(caller).to.emit('Winner');
  });
  
});