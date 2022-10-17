const defaultStep = require('../Components/ToDoList-Step');

test('Return the default step', () => {
  expect(defaultStep()).toBe("Default Step Text");
});