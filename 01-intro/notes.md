# TypeScript Code Summary

## Overview
This summary provides an overview of TypeScript features and concepts demonstrated through various code snippets. TypeScript, an extension of JavaScript, offers type safety and better tooling, enhancing development experience in various aspects.

### 1. Basic Types and Variables
- **Primitive Types**: Includes `string`, `number`, `boolean`, `BigInt`, `null`, `undefined`, `Symbol`.
- **Variable Declarations**: Examples of variable declarations with type annotations.
  - String (`let name = "Kevin"; const location = "Belfast";`)
  - Union Type (`let age: number | string = 40; age = "40";`)
  - Objects, Arrays, and Functions are non-primitive.

### 2. Special Types
- **`any` Type**: Opting out of the typing system (`let name: any = "Kevin"; name = 234;`).
- **`void` Type**: Used in functions that do not return a value (`function log(): void {...}`).
- **`never` Type**: Indicates values that never occur (`let newVar: never;`).
- **`unknown` Type**: Represents any value not yet known, requires type guards for operations.

### 3. Enums and Types
- **String Enums**: `enum STATUS_CODES {...}` with string values.
- **Type Aliases**: `type StatusTypes = "OK" | "NOT_FOUND" | ...;`

### 4. Interfaces and Types
- **Interchangeable Usage**: Demonstrating how `interface` and `type` can be used interchangeably in TypeScript.
- **Duck Typing**: TypeScript's structural typing system (Example with `BirdType` and `BirdInterface`).
- **Type Intersection**: Combining types (`type Owl = BirdType & { nocturnal: true };`).
- **Interface Extension**: Extending interfaces to add new properties (`interface Peacock extends BirdInterface {...};`).

### 5. Function Type Annotations
- **Function Parameters**: Type annotations for function parameters.
- **Type Guards**: Using `typeof` for runtime type checks (`if (typeof padding === "number") {...}`).

### 6. Code Examples
- **Variable and Type Examples**: Variables with specific types (`let owl: Owl = { wings: 2 }; let chicken: Chicken = { wings: 2 };`).
- **Function Usage**: Example of a function with conditional logic based on type (`padLeft("£", "3.30"); padLeft(10, "Current PM");`).

### 7. Concepts Demonstrated
- **Type Safety**: Ensuring variables and functions use the expected types.
- **Interoperability with JavaScript**: TypeScript complements and extends JavaScript.
- **Better Tooling**: Examples of TypeScript's advanced type inference and error checking.

## Conclusion
These snippets illustrate TypeScript's capabilities in enforcing type safety, improving code quality, and facilitating robust application development. The examples range from basic type annotations to advanced concepts like type intersections and extensions, demonstrating TypeScript's flexibility and power in a JavaScript environment.