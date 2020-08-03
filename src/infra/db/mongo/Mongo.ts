import mongoose from 'mongoose';

class Mongo {
  constructor() {
    mongoose.connect(`mongodb://127.0.0.1:27017/homen`, { useNewUrlParser: true, useUnifiedTopology: true });

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