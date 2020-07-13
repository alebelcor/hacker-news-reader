import util from 'src/utils/routes-helper';

describe('routesHelper', () => {
  it('should return the route in the map', () => {
    expect(util('index')).toBe(`${process.env.PUBLIC_URL}/`);
    expect(util('topStories')).toBe(`${process.env.PUBLIC_URL}/news`);
  });

  it('should return the requested route when unknown', () => {
    expect(util('/foobar')).toBe(`${process.env.PUBLIC_URL}/foobar`);
  });
});
