module.exports = (dd) => {
  dd.drive([
    {
      it: 'without accumulator returns array with false',
      i: [undefined],
      e: [false],
    },
    {
      it: 'given an empty array returns an array with false',
      i: [[]],
      e: [false],
    },
    {
      it: 'object with undefined error returns array with false',
      i: [{}],
      e: [false],
    },
    {
      it: 'object with error message returns array with true and error',
      i: [{ error: 'error message' }],
      e: [true, 'error message'],
    },
  ]);
};
