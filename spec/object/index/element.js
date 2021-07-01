module.exports = (dd, that) => {
  const object = { 'item': 'value' };
  const item = 'item';
  const element = that.element(object);

  dd.drive([
    {
      it: 'should return value from object by given key',
      i: element(item),
      e: 'value',
    },
  ]);
};
