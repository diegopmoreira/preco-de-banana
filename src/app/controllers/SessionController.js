const User = require('../models/User')

class SessionController {
  async create (req, res) {
    return res.render('auth/login')
  }

  async store (req, res) {
    const { username, password } = req.body

    const user = await User.findOne({ username })

    if (!user) {
      req.flash('error', 'Usuário não encontrado')

      return req.session.save(() => res.redirect('/login'))
    }

    if (!(await user.compareHash(password))) {
      req.flash('error', 'Senha incorreta')

      return req.session.save(() => res.redirect('/login'))
    }

    req.session.user = user

    return res.redirect('/app/affiliates')
  }

  destroy (req, res) {
    req.session.destroy(() => {
      res.clearCookie('root')
      return res.redirect('/')
    })
  }
}

module.exports = new SessionController()
