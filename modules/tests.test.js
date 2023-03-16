import {test, expect} from 'vitest';
import {capitalize, reverseString} from './stringManipulation.js';

function capitalizeTests() {
  test('First character capitalized', () => {
    expect(capitalize('moo')).toBe('Moo');
  });
  test('Nonletter first', () => {
    expect(capitalize('2moo4u')).toBe('2moo4u');
  });
  test('Empty string', () => {
    expect(capitalize('')).toBe('');
  });
}

function reverseStringTests() {
  test('String reversed', () => {
    expect(reverseString('moo')).toBe('oom');
  });
  test('Empty string', () => {
    expect(reverseString('')).toBe('');
  });
}

capitalizeTests();
reverseStringTests();