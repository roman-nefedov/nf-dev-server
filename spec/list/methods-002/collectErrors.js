module.exports = (dd) => {
  dd.drive([
    {
      it: 'if item has non string error field, returns object with it',
      i: [{}, { error: 500 }],
      e: { error: 500 },
    },
    {
      it: 'otherwise in object error will have string value',
      i: [{}, { error: '500' }],
      e: { error: '500' },
    },
  ]);
};
