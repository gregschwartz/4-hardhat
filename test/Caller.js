const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { expect } = require("chai");

const contractAddress = "0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502";

describe("Winner", function () {

  it("Indirect way emit winner but since you put 'use getContractAt()' in the rubric, here it is...", async function () {    
    const Caller = await hre.ethers.getContractFactory("Caller");
    const caller = await Caller.deploy();
    
    const callerAltConnection = await hre.ethers.getContractAt("Caller", caller.address);
    expect(await callerAltConnection.makeAttempt(contractAddress)).to.emit('Winner');
  });
  
  it("Better way to emit winner", async function () {
    const Caller = await hre.ethers.getContractFactory("Caller");
    const caller = await Caller.deploy();
    expect(await caller.makeAttempt(contractAddress)).to.emit('Winner');
  });

});
