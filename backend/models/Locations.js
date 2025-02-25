
const mongoose = require("mongoose");

const LocationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  number: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: function (v) {
        return /^[0-9]{10,15}$/.test(v); // Allow 10-15 digit numbers
      },
      message: "Invalid phone number format.",
    },
  },
  image_urls: {
    type: [String], // Array of strings (URLs)
    validate: {
      validator: function (v) {
        return v.every(url => /^https?:\/\/.+\.(jpg|jpeg|png|webp|svg)$/.test(url));
      },
      message: "Invalid image URL format.",
    },
    default: [], // Default to an empty array
  },
});

module.exports = mongoose.model("Location", LocationSchema);
