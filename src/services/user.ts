const User = require('../models/user')

const findUserByAccount = async (account: string) => {
  const usr = await User.findOne({ account: account })
  return usr;
}

const addUser = async (user: any) => {
  const userData = {
    ...user,
  }
  const usr = new User(userData)
  const userRes = await usr.save()
  return userRes
}

const updateUser = async (user: any) => {

  await User.findOneAndUpdate({ account: user.account }, user)
  const res = await User.findOne({ account: user.account })
  return res
}

module.exports = {
  addUser,
  updateUser,
  findUserByAccount
}