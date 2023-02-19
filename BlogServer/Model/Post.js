const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: true,
      min: 10,
    },
    username: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      default: [],
      required: true,
    },
    reaction: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true },
)

const PostInformation = mongoose.model('postinformation', PostSchema)

module.exports = PostInformation
