import * as dotenv from "dotenv";
dotenv.config();
import app from './config/app';
import { MongoService } from '../infra/db/mongo/Mongo';


app.listen(process.env.APP_PORT, async () => {
  await MongoService.connect();

  console.log('Magic happens on 3000')
})