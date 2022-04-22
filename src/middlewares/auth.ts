import Web3 from "web3"

const authenticate = async (req, res, next) => {
  // next()
  const account = req.body.account || ''
  const signedMsg = req.body.signedMsg || ''
  const web3 = new Web3(Web3.providers.HttpProvider())
  let recoveredAccount = await web3.eth.personal.ecRecover("Crosmo Crafts", "0x55d50182fabba6b80fb6a561eec7b103594fb72374004e887e7b98fc06b942c44c324f65d513e38c5407ce873f0f321a033a3f1f83cb6e5af1db5e4b834f74471b")
  if (account === recoveredAccount) next()
  else res.status(401).json({ msg: "Your authentification is failed!", data: null })
}

const authError = (err, req, res, next) => {
  res.json(err)
}

module.exports = {
  authenticate,
  authError
}
