import { ListArticle } from './ListArticle';
import { articleSchema } from '../../../infra/db/mongo/schema/article.schema';

// Test Config
const makeSut = () => {
  const sut = new ListArticle(articleSchema);
  return sut;
}

const articleMock = {
  "title": "title",
  "htmlContent": "html",
  "active": true,
  "shared": 0,
  "liked": 0,
  "author": "lele"
}

// Suits
describe('ListArticleController', () => {
  test('Should return a empty array with there aren`t articles and status 200', async () => {
    const sut = makeSut();
    jest.spyOn(articleSchema, 'listAll').mockResolvedValue([]);
    const response = await sut.handler();
    
    expect(response.body).toEqual([]);
    expect(response.statusCode).toBe(200);
  })

  test('Should return status 200 with there is at least one article', async () => {
    const sut = makeSut();
    jest.spyOn(articleSchema, 'listAll').mockResolvedValue([articleMock]);
    const response = await sut.handler();
    
    expect(response.statusCode).toBe(200);
  })
})