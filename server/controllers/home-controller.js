const users = require('./../data/users.json')

exports.homeGet = async (req, res) => {
  res.send('Welcome back commander.')
}

exports.usersGetAll = async (req, res) => {
  // res.send('There will be dragons, not posts.')
  res.json(users)
}