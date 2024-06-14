const isAdult = require('../checkAge');
import { test, expect } from '@playwright/test';

test('Checks if Person with age equal to 20 is adult', () => {
  expect(isAdult(20)).toBe(true);
});

test('Checks if Person with age equal to 16 is adult', () => {
  expect(isAdult(16)).toBe(false);
});

test('Checks if Person with age equal to 18 is adult', () => {
  expect(isAdult(18)).toBe(true);
});
