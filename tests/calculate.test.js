const calculateRectangleArea = require('../calculate');
import { test, expect } from '@playwright/test';

test('Calculate rectangle area with lenght 5 and width 4', () => {
  expect(calculateRectangleArea(5, 4)).toBe(20);
});

test('Calculate rectangle area with lenght 3 and width 7', () => {
  expect(calculateRectangleArea(3, 7)).toBe(21);
});

test('Calculate rectangle area with lenght 10 and width 10', () => {
  expect(calculateRectangleArea(10, 10)).toBe(100);
});
