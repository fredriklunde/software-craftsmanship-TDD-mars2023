# Kata 1: Leap Years - C# with NUnit

This solution contains two projects:
- A c# console application called `Kata1`
- A NUnit test project called `Kata1Tests`

Both are targeting `net6.0`

## Before you start:
- Do one task at a time. Try not to read ahead. The trick is to learn to work incrementally.
- Test first!

## Description

Implement the `IsLeap()` function of the `Year` class, so that it returns `true`
or `false` depending on whether its input integer is a leap year or not.

### Task 1
All years divisible by 400 ARE leap years (so, for example, 2000 was indeed a leap year)

### Task 2
All years divisible by 100 but not by 400 are NOT leap years (so, for example, 1700, 1800, and 1900 were NOT leap years, NOR will 2100 be a leap year)

### Task 3
All years divisible by 4 but not by 100 ARE leap years (e.g., 2008, 2012, 2016)

### Task 4
All years not divisible by 4 are NOT leap years (e.g. 2017, 2018, 2019)

## Bonus tasks

### Task 5
Write a function `GetDayNumber()` that takes a date as an argument, and returns the day of the year. e.g.:
- January 1, 2023 --> returns 1
- December 31, 2022 --> returns 365
- March 1, 2023 --> returns 60
- March 1, 2020 --> returns 61

### Task 6
Write a function `GetWeekNumber()` that takes a date as an argument, and returns the calendar week, e.g.:
- March 29, 2023 --> returns week 13

### Task 6
Write a function `GetWeekDay()` that takes a date as an argument, and returns the day of the week, e.g.:
- March 29, 2023 --> returns Wednesday

## Flow
1. Write a failing test
2. Write just enough amount of code to make it pass
3. Refactor
4. Repeat

## Naming tests

Use the following naming convention:

```csharp
[MethodUnderTest]_[Scenario]_[ExpectedResult]
```

**Bad:**
```csharp
Test_NotAdult
```

**Better:**
```csharp
IsAdult_AgeIsLessThan18_ReturnsFalse
```

## Arranging tests

Use 3 A's:
```csharp
public void IsAdult_AgeIs18_ReturnsTrue()
{
    // Arrange
    var user = new User(18);

    // Act
    var result = user.IsAdult();

    // Assert
    Assert.That(result, Is.True);
}
```

## Avoid magic numbers/strings

**Bad:**
```csharp
public void IsAdult_AgeIsOver18_ReturnsTrue()
{
    var user = new User(68);
    var result = user.IsAdult();
    Assert.That(result, Is.True);
}
```

**Better:**
```csharp
public void IsAdult_AgeIsOver18_ReturnsTrue()
{
    var user = new User(19);
    var result = user.IsAdult();
    Assert.That(result, Is.True);
}
```
