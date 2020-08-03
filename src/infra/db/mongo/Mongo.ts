import mongoose from 'mongoose';

class Mongo {
  constructor() {
    mongoose.connect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`, { useNewUrlParser: true, useUnifiedTopology: true });

    mongoose.connection.on('connected', () => {
      console.log('Mongo OK');
    });
    
    mongoose.connection.on('error', (err) => {
      console.log(err);
    });
    
    mongoose.connection.on('disconnected', () => {
      console.log('Mongo Bye');
    });
  }
}

export const MongoService = new Mongo();