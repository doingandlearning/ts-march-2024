import { add } from "./add";
import { describe, test, expect } from "vitest";

describe("Happy path for my adding function", () => {
  test("adds numbers correctly", () => {
    // Arrange   : Given
    // Act       : When
    const result = add(1, 2);

    // Assert    : Then
    expect(result).toBe(3);
  });
});

test("Unhappy path for my add function", () => {
  expect(() => add(true as any, [] as any)).toThrow(); // ✅
  // expect(add(true as any, [] as any)).toThrow();  ❌
});
