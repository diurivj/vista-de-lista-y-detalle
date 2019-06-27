const mongoose = require('mongoose')
const Schema = mongoose.Schema

const beerSchema = new Schema(
  {
    name: String,
    brand: String,
    alcohol_percentage: Number,
    owner: String
  },
  {
    versionKey: false,
    timestamps: true
  }
)

module.exports = mongoose.model('Beer', beerSchema)
