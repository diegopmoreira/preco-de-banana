const Affiliate = require('../models/Affiliate')

class AffiliateController {
  async index (req, res) {
    const affiliates = await Affiliate.find()

    return res.render('affiliates/index', { affiliates })
  }

  async create (req, res) {
    return res.render('affiliates/create')
  }

  async show (req, res) {
    const affiliate = await Affiliate.findById(req.params.id)

    return res.render('affiliates/show', { affiliate })
  }

  async store (req, res) {
    await Affiliate.create(req.body)

    return res.redirect('/app/affiliates')
  }

  async update (req, res) {
    await Affiliate.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })

    return res.redirect('/app/affiliates')
  }

  async destroy (req, res) {
    await Affiliate.findByIdAndDelete(req.params.id)

    return res.redirect('/app/affiliates')
  }
}

module.exports = new AffiliateController()
