module.exports = (dd, that) => {
  const item = 'item';
  const errorMisset = that.errorMisset(item);
  dd.drive([
    {
      it: 'returns an error message',
      i: errorMisset(),
      e: `Error "${item}" defenition invalid`,
    },
  ]);
};
