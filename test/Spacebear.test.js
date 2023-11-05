const Spacebear = artifacts.require("Spacebear");
const truffleAsserts = require("truffle-assertions");

contract("Spacebear",(accounts) => {
    it("Should credit an NFT to a specific accounts", async() => {
        const SpacebearInstance = await Spacebear.deployed();
        const txResult = await SpacebearInstance.safeMint(accounts[1],"spacebear_1.json");
        truffleAsserts.eventEmitted(txResult, "Transfer", {from: '0x0000000000000000000000000000000000000000', to: accounts[1], tokenId: web3.utils.toBN("0")});
        truffleAsserts.eventEmitted(txResult, "MetadataUpdate", {_tokenId: web3.utils.toBN("0")});
        assert.equal(await SpacebearInstance.ownerOf(0), accounts[1], "owner of Token 1 is not account 2");
    })
})