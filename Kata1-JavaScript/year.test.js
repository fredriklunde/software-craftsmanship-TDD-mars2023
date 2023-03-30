const isLeap = require("./year");

test("All years divisible by 400 Are Leap Years", () => {
  expect(isLeap(2000)).toBe(true);
});

test("All years not divisible by 400 Are Leap Years", () => {
  expect(isLeap(2001)).toBe(false);
});