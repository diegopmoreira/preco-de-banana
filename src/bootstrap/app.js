const express = require('express')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const flash = require('connect-flash')
const nunjucks = require('nunjucks')
const mongoose = require('mongoose')
const path = require('path')

const databaseConfig = require('../config/database')

class App {
  constructor () {
    this.express = express()
    this.isDev = process.env.NODE_ENV !== 'production'

    this.database()
    this.middlewares()
    this.views()
    this.routes()
  }

  database () {
    mongoose.connect(
      databaseConfig.uri,
      {
        useCreateIndex: true,
        useNewUrlParser: true
      }
    )
  }

  middlewares () {
    this.express.use(express.urlencoded({ extended: false }))
    this.express.use(flash())
    this.express.use(
      session({
        name: 'root',
        secret: 'MyAppSecret',
        resave: true,
        store: new FileStore({
          path: path.resolve(__dirname, '..', 'storage', 'sessions')
        }),
        saveUninitialized: true
      })
    )
  }

  views () {
    nunjucks.configure(path.resolve(__dirname, '..', 'resources', 'views'), {
      watch: this.isDev,
      express: this.express,
      autoescape: true
    })

    this.express.use(express.static(path.resolve(__dirname, '..', 'public')))
    this.express.set('view engine', 'njk')
  }

  routes () {
    this.express.use(require('../routes/web'))
  }
}

module.exports = new App().express
