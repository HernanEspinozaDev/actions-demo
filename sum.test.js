const sum = require('./sum');

test('Suma dos números', () => {
  expect(sum(1, 2)).toBe(3);
});

// NUEVA PRUEBA
test('Suma dos números negativos', () => {
  expect(sum(-1, -2)).toBe(-3);
});