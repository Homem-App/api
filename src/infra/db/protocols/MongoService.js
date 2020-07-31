class MongoService {
  constructor (mongoSchema) {
    this.mongoSchema = mongoSchema;
  }
  async listAll () {
    return this.mongoSchema.find({}, { _id: false })
  }

  async findOne ({ data }) {
    return this.mongoSchema.find(data)
  }
}

module.exports = MongoService;