using Demo;

namespace DemoTests;

public class CalculatorTests
{
    [Test]
    public void GetArea_GivenShapeIsSquare_ReturnsSquareArea()
    {
        // Arrange
        var calculator = new Calculator();
        var square = new Square(2);


        // Act
        var result = calculator.GetArea(square);

        // Assert
        Assert.That(4, Is.EqualTo(result));
    }

    [Test]
    public void GetArea_GivenShapeIsRectangle_ReturnsSquareArea()
    {
        // Arrange
        var calculator = new Calculator();
        var rectangle = new Rectangle(2, 3);


        // Act
        var result = calculator.GetArea(rectangle);

        // Assert
        Assert.That(6, Is.EqualTo(result));
    }
}