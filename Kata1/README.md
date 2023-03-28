# Kata 1: Leap Years

Implement the `IsLeap()` function of the `Year` class, so that it returns `true`
or `false` depending on whether its input integer is a leap year or not.

**A leap year is divisible by 4, but is not otherwise divisible by 100, unless 
it is also divisible by 400. E.g.:**

- 1996 --> true  
- 2001 --> false  
- 2000 --> true  
- 1900 --> false

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
