const isLeap = require("./year");

test("All years divisible by 400 Are Leap Years", () => {
  expect(isLeap(2000)).toBe(true);
});

test("All years not divisible by 400 Are NOT Leap Years", () => {
  expect(isLeap(2001)).toBe(false);
});

test("All years divisible by 100 but not 400 are NOT leap years", () => {
  expect(isLeap(1700)).toBe(false);
});

test("All years divisible by 4 but not 100 are leap years", () => {
  expect(isLeap(2008)).toBe(true);
});

test("All years not divisible by 4 are NOT leap years", () => {
  expect(isLeap(2017)).toBe(false);
});