module.exports = (dd) => {
  dd.drive([
    {
      it: 'returns acc if no item',
      i: [[]],
      e: [],
    },
    {
      it: 'returns acc if item is not an object',
      i: [[], 42],
      e: [],
    },
    {
      it: 'returns acc if item have no error text',
      i: [[], {}],
      e: [],
    },
    {
      it: 'returns acc with item error text',
      i: [[], { error: 'error' }],
      e: ['error'],
    },
  ]);
};
