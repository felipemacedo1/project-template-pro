/**
 * Tests for index.js
 */

const { greet, add } = require('../src/index');

describe('greet function', () => {
  it('should return a greeting message', () => {
    const result = greet('World');
    expect(result).toBe('Hello, World!');
  });

  it('should greet different names', () => {
    expect(greet('Alice')).toBe('Hello, Alice!');
    expect(greet('Bob')).toBe('Hello, Bob!');
  });
});

describe('add function', () => {
  it('should add two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('should add negative numbers', () => {
    expect(add(-1, -2)).toBe(-3);
  });

  it('should handle zero', () => {
    expect(add(0, 5)).toBe(5);
    expect(add(5, 0)).toBe(5);
  });
});
