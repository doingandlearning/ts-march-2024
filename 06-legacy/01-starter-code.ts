import { Shape, RightTriangle, Rectangle, Circle, Square } from "./shape-types";
const PI = 3.14;

// Scope the file by exporting (or importing) something!
// export {};
// Shape types => Square/Triangle/Circle/Rectangle
// Shape type -> extends
// interface => functions (shape: Shape) => number

// const arr1: [number, string] = [1, "a string"];

function getCircleArea(circle: Circle) {
  const radius = circle.radius;
  return radius * radius * PI;
}

function getRectangleArea(rectangle: Rectangle) {
  const length = rectangle.length;
  const width = rectangle.width;
  return length * width;
}

function getSquareArea(square: Square) {
  const width = square.width;
  return width * width;
}

function getRightTriangleArea(triangle: RightTriangle) {
  const base = triangle.base;
  const height = triangle.height;
  return (base * height) / 2;
}

function getArea(shape: Shape) {
  switch (shape.type) {
    case "circle":
      shape.area = getCircleArea(shape as Circle);
      break;
    case "rectangle":
      shape.area = getRectangleArea(shape as Rectangle);
      break;
    case "square":
      shape.area = getSquareArea(shape as Square);
      break;
    case "rightTriangle":
      shape.area = getRightTriangleArea(shape as RightTriangle);
      break;
  }
}

const circle: Circle = { type: "circle", radius: 4 };
getArea(circle);
console.log(circle);

const rectangle: Rectangle = { type: "rectangle", length: 7, width: 4 };
getArea(rectangle);
console.log(rectangle);

const square: Square = { type: "square", width: 5 };
getArea(square);
console.log(square);

const rightTriangle: RightTriangle = {
  type: "rightTriangle",
  base: 9,
  height: 4,
};
getArea(rightTriangle);
console.log(rightTriangle);

const triangle: RightTriangle = {
  type: "rightTriangle",
  base: 10,
  height: 5,
};
getArea(triangle);
console.log(triangle);

const circle2: Circle = { type: "circle", radius: 100 };
getArea(circle2);
console.log(circle2);
