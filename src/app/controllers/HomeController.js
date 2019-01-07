const Affiliate = require('../models/Affiliate')

class HomeController {
  async index (req, res) {
    const affiliates = await Affiliate.find()

    return res.render('home', { affiliates })
  }
}

module.exports = new HomeController()
