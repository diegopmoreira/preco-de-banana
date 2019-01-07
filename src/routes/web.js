const express = require('express')

const route = express.Router()

const authMiddleware = require('../app/middlewares/auth')
const guestMiddleware = require('../app/middlewares/guest')

const AffiliateController = require('../app/controllers/AffiliateController')
const SessionController = require('../app/controllers/SessionController')
const UserController = require('../app/controllers/UserController')
const HomeController = require('../app/controllers/HomeController')

route.use((req, res, next) => {
  res.locals.flashSuccess = req.flash('success')
  res.locals.flashError = req.flash('error')

  return next()
})

route.get('/', HomeController.index)

route.get('/login', guestMiddleware, SessionController.create)
route.post('/login', SessionController.store)

// route.post('/signup', UserController.store)

route.use('/app', authMiddleware)

route.get('/app/logout', SessionController.destroy)

route.get('/app/affiliates', AffiliateController.index)
route.post('/app/affiliates', AffiliateController.store)
route.get('/app/affiliates/create', AffiliateController.create)
route.get('/app/affiliates/:id', AffiliateController.show)
route.post('/app/affiliates/:id', AffiliateController.update)
route.get('/app/affiliates/:id/destroy', AffiliateController.destroy)

module.exports = route
