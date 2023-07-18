const express = require('express')
const routes = require('./routes')


const router = express.Router()

routes.map(item => {
    router[item.type](item.route, ...item.middlewares ,item.controler)
})

module.exports = router