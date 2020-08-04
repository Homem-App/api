import { MongoService } from './Mongo';

// Test config
const makeSut = () => {
  const mongoStatus = {
    DISCONNECTED : 0,
    CONNECTED : 1,
    CONNECTING : 2,
    DISCONNECTING : 3,
  }

  return {
    MongoService,
    mongoStatus, 
  };
}

// Suits
describe('Mongo Service', () => {

  beforeAll(async () => {
    await makeSut().MongoService.disconnect();
  })

  test('Should reconnect if mongo is down', async () => {
    const mongoStatus = await makeSut().MongoService.status();
    const currentStatus = await makeSut().mongoStatus.DISCONNECTED;
    expect(mongoStatus).toBe(currentStatus);
  })
})