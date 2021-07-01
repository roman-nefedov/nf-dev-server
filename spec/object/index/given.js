module.exports = (dd) => {
  const object = { 'key': 'value' };
  const key = 'key';

  dd.drive([
    {
      it: 'should return "true" if key value exists',
      i: [object, key],
      e: true,
    },
  ]);
};
