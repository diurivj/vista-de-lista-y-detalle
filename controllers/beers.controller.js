const Beer = require('../models/Beer')

// controller para traer todas las chelas
exports.findBeers = (req, res, next) => {
  Beer.find()
    .then(beers => res.render('beers-list', { beers }))
    .catch(err => res.render('beers-list', err))
}

// controller para traer una cerveza
exports.findOneBeer = (req, res, next) => {
  const { id } = req.params
  Beer.findById(id)
    .then(beer => res.render('beer-detail', beer))
    .catch(err => res.render('beer-detail', err))
}
