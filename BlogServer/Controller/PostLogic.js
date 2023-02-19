const PostStore = require('../Model/Post.js')

// Store Post
const PostLogic = async (req, res) => {
  try {
    const PostInformation = new PostStore(req.body)
    const userSave = await PostInformation.save()

    return res.status(200).send('Post Updated')
  } catch (err) {
    console.log('err')
    return res.status(400).send(err)
  }
}

// GET all post
const PostgetLogic = async (req, res) => {
  try {
    const PostInformation = await PostStore.find({})
    if (!PostInformation) {
      return res.status(200).json('There is No post')
    }

    return res.status(200).json(PostInformation)
  } catch (err) {
    console.log('err')
    return res.status(400).json('Fetching Errors')
  }
}

// Update Posts
// Update Posts
const Postupdate = async (req, res) => {
  console.log('postUpdate')
  try {
    const post = await PostStore.findById(req.params.id)
    if (post.username === req.body.username) {
      try {
        const updatepost = await PostStore.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true },
        )

        res.status(200).json(updatepost)
      } catch (err) {
        res.status(400).json(err)
      }
    } else {
      res.status(401).json('You can update only your Post')
    }
  } catch (err) {
    res.status(400).json(err)
  }
}

// Get Single Post
const SinglepostLogic = async (req, res) => {
  console.log(req.params.id)

  try {
    const Singlepost = await PostStore.findById(req.params.id)
    console.log(Singlepost)
    return res.status(200).json(Singlepost)
  } catch (err) {
    res.status(400).send('Link Broken')
  }
}

// get post on categories

module.exports = { PostLogic, PostgetLogic, Postupdate, SinglepostLogic }
