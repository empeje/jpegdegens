import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { expect } from "chai";

describe("hello world", function() {
  it("should say hi", async function() {
    // 1. setup environment
    // 2. deploy contract
    // 3. call our contract to call

    // 2.
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const hello = await HelloWorld.deploy();
    await hello.deployed()

    expect(await hello.hello()).to.equal("Hello World!")
  });
});
