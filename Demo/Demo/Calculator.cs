using System.Drawing;

namespace Demo;

public class Calculator
{
    public int GetArea(IShape shape)
    {
        return shape.GetArea();
    }
}

public interface IShape
{
    public int GetArea();
}

public class Square : IShape
{
    public int Side { get; set; }

    public Square(int side)
    {
        Side = side;
    }

    public int GetArea()
    {
        return Side * Side;
    }
}

public class Rectangle : IShape
{
    public int Height { get; set; }
    public int Width { get; set; }

    public Rectangle(int height, int width)
    {
        Height = height;
        Width = width;
    }

    public int GetArea()
    {
        return Height * Width;
    }
}

public class Triangle
{
    public int Base { get; set; }
    public int Height { get; set; }

    public Triangle(int triangleBase, int height)
    {
        Base = triangleBase;
        Height = height;
    }
}

public class Circle
{
    public int Radius { get; set; }

    public Circle(int radius)
    {
        Radius = radius;
    }
}