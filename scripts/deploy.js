const { ethers } = require("ethers");
const hre = require("hardhat");
require("dotenv").config();


// async function main() {
    
  
//     const url = process.env.GOERLI_URL;
//     let artifacts = await hre.artifacts.readArtifact("MyWin");
//     const provider = new ethers.providers.JsonRpcProvider(url);
//     let privateKey = process.env.PRIVATE_KEY;
//     let wallet = new ethers.Wallet(privateKey, provider);
  
//     // Create an instance of a Faucet Factory
//     let factory = new ethers.ContractFactory(artifacts.abi, artifacts.bytecode, wallet);
  
//     let mywin = await factory.deploy();
  
//     console.log("MyWin address:", mywin.address);
  
//     await mywin.deployed();
//   }
  
//   main()
//     .then(() => process.exit(0))
//     .catch(error => {
//       console.error(error);
//       process.exit(1);
//   });





async function main() {

  const MyWin = await hre.ethers.getContractFactory("MyWin");
  const myWin = await MyWin.deploy();
  const addressContract = "0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502"

  await myWin.deployed();

  const result = await myWin.Win(addressContract);

  console.log(result);
  console.log(`MyWin deployed to: ${myWin.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});