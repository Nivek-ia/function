const square = require('./square');

test('square de 2 doit être 4', () => {
  expect(square(2)).toBe(4);
});

test('square de -3 doit être 9', () => {
  expect(square(-3)).toBe(9);
});

test('square de 0 doit être 0', () => {
  expect(square(0)).toBe(0);
});
