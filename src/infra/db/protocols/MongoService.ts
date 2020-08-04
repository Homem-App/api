export class MongoService {

  private readonly mongoSchema: any;
  
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
