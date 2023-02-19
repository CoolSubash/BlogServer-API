const RegisterStore = require('../Model/AuthenticationMode.js')
const bcrypt = require('bcrypt')
const post = require('../Model/Post.js')
const UpdateLogic = async (req, res) => {
  if (req.body.userId == req.params.id) {
    if (req.body.password) {
      const saltRounds = 10
      const salt = bcrypt.genSaltSync(saltRounds)
      req.body.password = await bcrypt.hash(req.body.password, salt)
    }

    try {
      const updateUser = await RegisterStore.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true },
      )

      console.log('Neupane')
      return res.status(200).json(updateUser)
    } catch (err) {
      return res.status(500).json(err)
    }
  } else {
    res.status(401).json('You can update only your account')
  }
}

const deleteLogic = async (req, res) => {
  if (req.body.userId == req.params.id) {
    try {
      const user = await RegisterStore.findById(req.params.id)
      if (user) {
        await post.deleteMany({ username: user.username })
        await RegisterStore.findByIdAndDelete(req.params.id)
        return res.status(200).json('User has been Deleted')
      }
    } catch (err) {
      return res.status(500).json(err)
    }
  } else {
    return res.status(401).json('You can delete only your account')
  }
}

module.exports = { UpdateLogic, deleteLogic }
