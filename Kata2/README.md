# TDD Kata 1 - String Calculator

## Before you start
- Try not to read ahead.
- Do **one task at a time**. The trick is to learn to work incrementally.
- Make sure you only test for **correct inputs**. There is no need to test for 
invalid inputs for this kata.
- Test First!

## Task 1

In a test-first manner, create a simple class `class StringCalculator` with a 
method `public int Add(string numbers)`
- The method can take **0, 1 or 2 numbers**, and will return their `sum`. For
  an **empty string** it will return `0`.
- For example: `"" == 0`, `"1" == 1`, `"1,2" == 3`
- Start with the simplest test case of an **empty string** and move to **one &
  two numbers**
- Remember to solve things as **simply as possible**.
- Remember to **refactor** after each passing test.
   
## Task 2

Allow the `Add` method to handle an unknown amount of numbers.

## Task 3

Allow the `Add` method to handle new lines between numbers (instead of commas).
- the following input is ok: `“1\n2,3” == 6`
- the followint is INVALID input, so do not expect it: `“1,\n”` (no need to
  write a test for it)
  
## Task 4

Support different delimiters:
- To change a delimiter, the beginning of the string will contain a separate
  line that looks like this: `“//[delimiter]\n[numbers…]”`, for example
  `“//;\n1;2” == 3`, since the default delimiter is `;`.
- **Note:** All existing scenarios and tests should still be supported

## Task 5

Calling `Add` with a negative number will throw an exception `“negatives not 
allowed”` and the negative that was passed.

## Task 6

If there are multiple negatives, show all of them in the exception message.

## Task 7

Using TDD, add a method to `StringCalculator` called `public int 
GetCalledCount()`, that returns how many times `Add()` was invoked. Remember -
Start with a failing (or even non compiling) test.

## Task 8

Numbers bigger than `1000` should be ignored, for example: `2 + 1001 == 2`
