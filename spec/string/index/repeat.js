module.exports = (dd) => {
  dd.drive([
    {
      it: 'creates string with given pattern repeating count times',
      i: [3, 'hello'],
      e: 'hellohellohello',
    },
  ]);
};
