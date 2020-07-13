import util from 'src/utils/endpoints-helper';

describe('endpointsHelper', () => {
  it('should return the endpoint in the map', () => {
    expect(util('topStories')).toBe('https://hacker-news.firebaseio.com/v0/topstories.json');
    expect(util('item', { id: 1 })).toBe('https://hacker-news.firebaseio.com/v0/item/1.json');
    expect(util('user', { id: 2 })).toBe('https://hacker-news.firebaseio.com/v0/user/2.json');
  });

  it('should throw an error when requesting an endpoint which requires a param but none was provided', () => {
    expect(() => {
      util('item');
    }).toThrow('Must provide "id" parameter. Found: undefined');
    expect(() => {
      util('user');
    }).toThrow('Must provide "id" parameter. Found: undefined');
  });

  it('should return the requested endpoint as is when unknown', () => {
    expect(util('/asdf123')).toBe(`https://hacker-news.firebaseio.com/v0/asdf123`);
  });
});
