const mongoose = require('mongoose');
const FeedSchema = require('../schema/feed.schema');
const Feed = mongoose.model('Feed');
const validate = require('../schema/feed.validation');

// FIXME HARDCODE STATUS
class FeedController {
  async listAll (req, res) {
    const feed = await Feed.find({});
    return res.status(200).json({
      feed
    })
  }

  async create (req, res) {
  
    try {
      await validate(req.body)
    } catch(err) {
      return res.status(400).json(
        err.errors
      )
    } 
    
    const feed = await Feed.create({
      ...req.body
    })
    if (feed.id) {
      return res.status(200).json({

      })
    }
    return res.status(400).json({
        
      })
    
  }

}

module.exports = new FeedController();