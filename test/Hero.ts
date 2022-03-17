import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { expect } from "chai";
import {create} from "domain";

describe("Hero", function() {
    async function createHero() {
        const Hero = await ethers.getContractFactory("TestHero");
        const hero = await Hero.deploy();
        await hero.deployed();
        return hero;
    }

    let hero;

    before(async function() {
        hero = await createHero();
    })

    it("should get a zero hero array", async  function () {
        expect(await hero.getHeroes()).to.deep.equal([]);
    });

    it("should fail at creating cause of payment", async  function() {
        let e;

        try {
            await hero.createHero(0, {
                value: ethers.utils.parseEther("0.0499999999")
            })
        } catch(err) {
            e = err;
        }

        expect(e.message.includes("Please send moar money")).to.equal(true);
    });

    it("should be able to create hero", async  function() {
        const hero  = await createHero()

        await hero.setRandom(69);
        await hero.createHero(0, {
            value: ethers.utils.parseEther("0.5")
        });
        const h = (await hero.getHeroes())[0];

        expect(await hero.getMagic(h)).to.equal(16);
        expect(await hero.getHealth(h)).to.equal(2);
    });
})