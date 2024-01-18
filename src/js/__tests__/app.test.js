import ErrorRepository from "../app";

const error = new ErrorRepository();

test.each([
  [0, 'Not found'],
  [1, 'Process not finished'],
  [2, 'Gateway Timeout'],
  [3, 'No connect'],
])(
  'The error text should be displayed if the code is known', (code, text) => {
    expect(error.translate(code)).toBe(text);
  },
);

test('Text should be displayed for an unknown error code', () => {
  expect(error.translate(5)).toBe('Unknown error');
});
