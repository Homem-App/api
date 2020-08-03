import app from './config/app';
import { MongoService } from '../infra/db/mongo/Mongo';


app.listen(3000, () => {
  MongoService;
  console.log('Magic happens on 3000')
})