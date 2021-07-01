module.exports = (dd, that) => {
  const errorObject = {};
  const error = {};
  const errorFn = that.errorFn(errorObject, error);
  const item = 'item';
  dd.drive([
    {
      it: 'errorFn result',
      i: errorFn(item),
      e: {},
    },
  ]);
};
