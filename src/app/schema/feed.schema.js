const mongoose = require('mongoose');

const FeedSchema = new mongoose.Schema({
  title: String,
  summary: String,
  photo: String,
  link: String,
  interactions: [{
    liked: Array,
    shared: Array,
    comments: Array,
  }],
}, { timestamps: true });

mongoose.model('Feed', FeedSchema);