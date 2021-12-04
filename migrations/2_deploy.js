const Token = artifacts.require("Token")
const Presale = artifacts.require("PreSale")

module.exports = async (deployer) => {
  let addr = await web3.eth.getAccounts()

  // Deploy Real Estate Demo Token with no constructor parameters
  await deployer.deploy(Token)

  // Deploy Real Estate Demo PreSale with rate 1, owner address, IERC20 token
  await deployer.deploy(
    Presale,
    5 /* _rate */,
    addr[0] /* _wallet */,
    Token.address /* IERC20 Token Contract */
  )
}
