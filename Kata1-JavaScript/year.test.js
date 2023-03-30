const isLeap = require('./year.js');

describe('isLeap', () => {
  test('All years divisible by 400 are leap years', () => {
    expect(isLeap(2000)).toBe(true);
  });

  test('All years divisible by 100 but not by 400 are NOT leap years', () => {
    expect(isLeap(1700)).toBe(false);
    expect(isLeap(1800)).toBe(false);
    expect(isLeap(1900)).toBe(false);
    expect(isLeap(2100)).toBe(false);
  });

  test('All years divisible by 4 but not by 100 are leap years', () => {
    expect(isLeap(2008)).toBe(true);
    expect(isLeap(2012)).toBe(true);
    expect(isLeap(2016)).toBe(true);
  });

  test('All years not divisible by 4 are NOT leap years', () => {
    expect(isLeap(2017)).toBe(false);
    expect(isLeap(2018)).toBe(false);
    expect(isLeap(2019)).toBe(false);
  });
});