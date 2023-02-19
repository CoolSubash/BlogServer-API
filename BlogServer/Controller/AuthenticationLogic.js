const RegisterStore = require('../Model/AuthenticationMode.js')
const bcrypt = require('bcrypt')
const registerLogic = async (req, res) => {
  try {
    const checkUsername = await RegisterStore.findOne({
      username: req.body.username,
    })
    if (checkUsername) {
      return res.status(400).send('Username Already Exits Change Username')
    }

    const checkemail = await RegisterStore.findOne({ email: req.body.email })
    if (checkemail) {
      return res.status(400).send('Email Already Exits')
    }

    const saltRounds = 10
    const salt = bcrypt.genSaltSync(saltRounds)
    const hashPassword = await bcrypt.hash(req.body.password, salt)

    const userInformation = new RegisterStore({
      username: req.body.username,
      email: req.body.email,
      password: hashPassword,
    })

    const userSave = await userInformation.save()
  } catch (err) {
    res.status(400).send(err)
  }
}

const loginLogic = async (req, res) => {
  try {
    const checkdata = await RegisterStore.findOne({
      username: req.body.username,
    })

    if (!checkdata) {
      return res.status(400).json('Wrong Credentials')
    }
    const passwordCheck = await bcrypt.compare(
      req.body.password,
      checkdata.password,
    )
    if (passwordCheck) {
      return res.status(200).send('Logged In')
    } else {
      return res.status(400).send('Wrong Password')
    }
  } catch (err) {
    return res.status(400).json('Network Error')
  }
}
module.exports = { registerLogic, loginLogic }
