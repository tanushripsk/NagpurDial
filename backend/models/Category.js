// models/Category.js
const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
});

const phoneNumberSchema = new mongoose.Schema({
  number: String,
});

const categorySchema = new mongoose.Schema({
  categories: String,
  name: String,
  address: addressSchema,
  phone_numbers: [phoneNumberSchema],
  image_urls: [String],
});

module.exports = mongoose.model('Category', categorySchema);
