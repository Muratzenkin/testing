import { test, expect } from "vitest";
import { square } from "./utils";

test("squares positive numbers", () => {
  expect(square(5)).toBe(25);
  expect(square(1.5)).toBe(2.25);
  expect(square(0)).toBe(0);
});

test("squares negative numbers", () => {
  expect(square(-5)).toBe(25);
  expect(square(-1.5)).toBe(2.25);
  expect(square(-0)).toBe(0);
});
