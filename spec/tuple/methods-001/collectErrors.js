module.exports = (dd) => {
  dd.drive([
    {
      it: 'if no errors returns array with false',
      i: [],
      e: [false],
    },
    {
      it: 'if error, returns array with true and error',
      i: [[1, 2, { error: 'err message' }]],
      e: [true, ['err message']],
    },
  ]);
};
