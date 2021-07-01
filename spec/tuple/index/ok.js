module.exports = (dd) => {
  dd.drive([
    {
      it: 'returning array with true and payload',
      i: [{ a: 1 }],
      e: [true, { a: 1 }],
    },
  ]);
};
