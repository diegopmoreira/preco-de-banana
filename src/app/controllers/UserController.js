const User = require('../models/User')

class UserController {
  async store (req, res) {
    const { username } = req.body

    if (await User.findOne({ username })) {
      return res.status(400).send('User already exists')
    }

    const user = await User.create(req.body)

    return res.send(user)
  }
}

module.exports = new UserController()
