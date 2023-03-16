import {test, expect} from 'vitest';
import {capitalize, reverseString} from './stringManipulation.js';
import {CalculatorFactory} from './calculator.js';

function capitalizeTests() {
  test('capitalize: First character capitalized', () => {
    expect(capitalize('moo')).toBe('Moo');
  });
  test('capitalize: Nonletter first', () => {
    expect(capitalize('2moo4u')).toBe('2moo4u');
  });
  test('capitalize: Empty string', () => {
    expect(capitalize('')).toBe('');
  });
}

function reverseStringTests() {
  test('reverseString: String reversed', () => {
    expect(reverseString('moo')).toBe('oom');
  });
  test('reverseString: Empty string', () => {
    expect(reverseString('')).toBe('');
  });
}

function CalculatorFactoryTests() {
  test('CalculatorFactory: Add 2 numbers', () => {
    expect(CalculatorFactory().add(2, 13)).toBe(15);
  });
  test('CalculatorFactory: Subtract 2 numbers', () => {
    expect(CalculatorFactory().subtract(5, 3)).toBe(2);
  });
  test('CalculatorFactory: Multiply 2 numbers', () => {
    expect(CalculatorFactory().multiply(3, 7)).toBe(21);
  });
  test('CalculatorFactory: Divide 2 numbers', () => {
    expect(CalculatorFactory().divide(10, 5)).toBe(2);
  });
}

capitalizeTests();
reverseStringTests();
CalculatorFactoryTests();