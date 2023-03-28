using Kata1;

namespace Kata1Tests
{
    public class YearTests
    {
        [Test]
        public void FunctionName_Scenario_ExpectedBehavior()
        {
            // Arrange
            var expected = true;

            // Act
            var result = false;

            // Assert
            Assert.That(result.Equals(expected));
            Assert.That(result, Is.True);   
        }
    }
}