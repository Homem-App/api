const mongoose = require('mongoose');
const MongoService = require('../../protocols/MongoService');

const schema = new mongoose.Schema({
  title: String,
  summaary: String,
  photo: String,
  link: String,
  interactions: [{
    liked: Array,
    shared: Array,
    comments: Array,
  }]
}, { timestamps: true })

class ArticleSchema extends MongoService {
  constructor () {
    const model = mongoose.model('Article', schema);
    super(model);
  }
  
}

module.exports = new ArticleSchema();
