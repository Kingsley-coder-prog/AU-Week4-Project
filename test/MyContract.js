const { loadFixture } = require('@nomicfoundation/hardhat-network-helpers');
const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('MyWin', function () {
    async function deployContractAndSetVariables() {
        const MyWin = await ethers.getContractFactory('MyWin');
        const myWin = await MyWin.deploy();

       
        const [ owner ] = await ethers.getSigners();

        console.log('Signer 1 address: ', owner.address);
        return { myWin, owner };
    }

    it('should deploy and set the owner correctly', async function() {
        const { myWin, owner } = await loadFixture(deployContractAndSetVariables);

        expect(await myWin.owner()).to.equal(owner.address);
    });

    
});