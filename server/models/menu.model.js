const mongoose = require('mongoose')

const MenuModel = new mongoose.Schema({
  name: {
    type: String, required: true
  },
  path: String
})

module.exports = mongoose.model("Menu",MenuModel)