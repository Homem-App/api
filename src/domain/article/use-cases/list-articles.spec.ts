import { listAll } from './list-articles';
import { articleSchema } from '../../../infra/db/mongo/schema/article.schema';

const makeSut = () => {
  return listAll(articleSchema);
}
describe('List Article Use Cases', () => {
  test('Should return a array of articles', async () => {
    jest.spyOn(articleSchema, 'listAll').mockResolvedValue([]);
    const result = await makeSut();
    expect(result).toEqual([]);
  })
})