import isObject from './index';

describe('isObject::', () => {
  /** @test {isObject} */
  it('Should return true for object literal {}', () => {
    expect(isObject({})).toEqual(true);
  });

  /** @test {isObject} */
  it('Should return true for array literal []', () => {
    expect(isObject([])).toEqual(true);
  });

  /** @test {isObject} */
  it('Should return true for null', () => {
    expect(isObject(null)).toEqual(true);
  });

  /** @test {isObject} */
  it('Should return false for primitive values', () => {
    expect(isObject(1)).toEqual(false);
    expect(isObject('string')).toEqual(false);
    expect(isObject(true)).toEqual(false);
  });
});
