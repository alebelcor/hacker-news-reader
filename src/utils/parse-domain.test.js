import util from 'src/utils/parse-domain';

describe('parseDomain', () => {
  it('should return only the domain of a URL', () => {
    expect(util('https://ycombinator.com')).toBe('ycombinator.com');
    expect(util('https://ycombinator.com/news')).toBe('ycombinator.com');
    expect(util('https://news.ycombinator.com')).toBe('ycombinator.com');
    expect(util('https://news.ycombinator.com/news')).toBe('ycombinator.com');
    expect(util('https://foo.news.ycombinator.com/news?q=bar')).toBe('ycombinator.com');
  });

  it('should return null for invalid URLs', () => {
    expect(util('foo.bar')).toBeNull();
    expect(util('')).toBeNull();
    expect(util(null)).toBeNull();
    expect(util(undefined)).toBeNull();
  });
});
