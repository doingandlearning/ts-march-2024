export function add(a: number, b: number): number {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Parameters must be numbers");
  }
  return a + b;
}
