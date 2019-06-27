require('dotenv').config()
const mongoose = require('mongoose')
const Beer = require('../models/Beer')

mongoose.connect(process.env.DB, { useNewUrlParser: true })

const beers = [
  {
    name: 'Stella Artois',
    brand: 'Grupo Modelo',
    alcohol_percentage: 4.5,
    owner: 'Dieguirris 🤯'
  },
  {
    name: 'Sapporo',
    brand: "Eric's family",
    alcohol_percentage: 4.5,
    owner: 'Eric'
  },
  {
    name: 'Indio',
    brand: 'Moctezuma',
    alcohol_percentage: 4.5,
    owner: 'Roger'
  },
  {
    name: 'Corona',
    brand: 'Grupo Modelo',
    alcohol_percentage: 4.5,
    owner: 'Mariana'
  },
  {
    name: 'Guinness',
    brand: 'Arthur Guinness',
    alcohol_percentage: 4.5,
    owner: 'Edgar'
  }
]

Beer.create(beers)
  .then(() => {
    console.log('Ya se armó 🍺🍻')
    mongoose.connection.close()
  })
  .catch(err => {
    console.log('No se armó ☹️', err)
    mongoose.connection.close()
  })
