module.exports = (dd) => {
  dd.drive([
    {
      it: 'adds leading pattern to subject to specified length',
      i: [10, '0', '123'],
      e: '0000000123',
    },
    {
      it: '',
      i: [1, '0', '123'],
      e: '3',
    },
  ]);
};
