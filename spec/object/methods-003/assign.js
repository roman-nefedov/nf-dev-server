module.exports = (dd) => {
  const targetObj = {};
  const obj1 = { a: 1 };
  const obj2 = { b: 2, c: 3 };
  dd.drive([
    {
      it: 'does the same as Object.assign method',
      i: [targetObj, obj1, obj2],
      e: { a: 1, b: 2, c: 3 },
    },
  ]);
};
