const express = require('express')
const router = express.Router()
const { findBeers, findOneBeer } = require('../controllers/beers.controller')

router.get('/', (req, res, next) => res.render('index'))

router.get('/beers', findBeers)

router.get('/beers/:id', findOneBeer)

module.exports = router
