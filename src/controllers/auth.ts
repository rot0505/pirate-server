const userService = require('../services/user')

const login = async (req, res, next) => {
  const {
    account,
    signedMsg
  } = req.body

  console.log('req.body', req.body)
  const usr = await userService.findUserByAccount(account)
  if (!usr) {
    //must add validate signMsg
    const usrRes = await userService.addUser(req.body)
    return res.json({
      error: false,
      output: usrRes
    })
  }
  if (signedMsg === usr.signedMsg) {
    const user = {
      ...req.body,
    }
    const usrRes = await userService.updateUser(user)
    return res.json({
      error: false,
      output: usrRes
    })
  }
  return res.json({
    error: 'Error occured in server'
  })
}

const getMe = (req, res, next) => {
  res.json({
    account: req.account
  })
}

module.exports = {
  login,
  getMe
}