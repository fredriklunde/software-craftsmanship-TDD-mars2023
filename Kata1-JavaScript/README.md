# Kata 1: Leap Years

123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 |
Implement the `isLeap()` function in the `year.js` file, so that it returns
`true` or `false` depending on whether its input integer is a leap year or not.

**A leap year is divisible by 4, but is not otherwise divisible by 100, unless
it is also divisible by 400. E.g.:**

- 1996 --> true
- 2001 --> false
- 2000 --> true
- 1900 --> false

# Commands:

Install the packages:

```terminal
npm install
```

Run tests:

```terminal
npm test
```

## Flow

1. Write a failing test
2. Write just enough amount of code to make it pass
3. Refactor
4. Repeat

## Naming tests

Use the following naming convention:

```js
"[Function under test] [results in X] [when scenario is Y]";
```

**Bad:**

```js
"Is Adult passes";
```

**Better:**

```js
"Function isAdult returns false when age is less than 18";
```

## Arranging tests

Use 3 A's:

```js
test("Function isAdult returns true when age 18", () => {
  // Arrange
  const user = { age: 18 };

  // Act
  const result = isAdult(user);

  // Assert
  expect(result).toBe(true);
});
```

## Avoid magic numbers/strings

**Bad:**

```js
test("Function isAdult returns true when age is over 18", () => {
  const user = { age: 74 };
  const result = isAdult(user);
  expect(result).toBe(true);
});
```

**Better:**

```js
test("Function isAdult returns true when age is over 18", () => {
  const user = { age: 19 };
  const result = isAdult(user);
  expect(result).toBe(true);
});
```
