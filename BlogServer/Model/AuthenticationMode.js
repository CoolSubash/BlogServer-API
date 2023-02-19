const mongoose = require('mongoose')

const RegisterSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 8,
      max: 100,
    },
    confirmpassword: {
      type: String,
      min: 8,
      max: 100,
    },
  },
  { timestamps: true },
)

const UserInformation = mongoose.model('userinformation', RegisterSchema)

module.exports = UserInformation
