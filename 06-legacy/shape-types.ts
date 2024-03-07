export interface Shape {
  type: "circle" | "rectangle" | "square" | "rightTriangle";
  area?: number;
}

export interface Circle extends Shape {
  type: "circle";
  radius: number;
}

export interface Square extends Shape {
  type: "square";
  width: number;
}

export interface Rectangle extends Shape {
  type: "rectangle";
  length: number;
  width: number;
}

export interface RightTriangle extends Shape {
  type: "rightTriangle";
  base: number;
  height: number;
}
