import * as dotenv from "dotenv";
dotenv.config();
import app from './config/app';
import { MongoService } from '../infra/db/mongo/Mongo';


app.listen(process.env.APP_PORT, () => {
  MongoService;
  console.log('Magic happens on 3000')
})