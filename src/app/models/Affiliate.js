const mongoose = require('mongoose')

const AffiliateSchema = new mongoose.Schema({
  title: String,
  description: String,
  link: String
})

module.exports = mongoose.model('Affiliate', AffiliateSchema)
