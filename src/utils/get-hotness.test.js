import util from 'src/utils/get-hotness';

describe('getHotness', () => {
  it('should return "hot"', () => {
    expect(util(100)).toBe('hot');
    expect(util(200)).toBe('hot');
    expect(util(500)).toBe('hot');
    expect(util(1000)).toBe('hot');
  });

  it('should return "medium" ', () => {
    expect(util(75)).toBe('medium');
    expect(util(80)).toBe('medium');
    expect(util(90)).toBe('medium');
    expect(util(99)).toBe('medium');
  });

  it('should return "mild"', () => {
    expect(util(50)).toBe('mild');
    expect(util(60)).toBe('mild');
    expect(util(70)).toBe('mild');
    expect(util(74)).toBe('mild');
  });

  it('should return nothing', () => {
    expect(util(0)).toBe('');
    expect(util(1)).toBe('');
    expect(util(10)).toBe('');
    expect(util(20)).toBe('');
    expect(util(49)).toBe('');
  });
});
