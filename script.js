// Define the Rectangle class
class Rectangle {
  constructor(width, height) {
    if (width <= 0 || height <= 0) {
      throw new Error("Width and height must be positive integers.");
    }
    this._width = width;
    this._height = height;
  }

  // Getter for width
  get width() {
    return this._width;
  }

  // Getter for height
  get height() {
    return this._height;
  }

  // Method to calculate area
  getArea() {
    return this._width * this._height;
  }
}

// Define the Square class extending Rectangle
class Square extends Rectangle {
  constructor(side) {
    if (side <= 0) {
      throw new Error("Side must be a positive integer.");
    }
    // Call the Rectangle constructor with equal width and height
    super(side, side);
  }

  // Method to calculate perimeter
  getPerimeter() {
    return 4 * this._width; // _width and _height are equal for a square
  }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
