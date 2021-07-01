module.exports = (dd, that) => {
  const path = 'www.google.com';
  const key = 'maps';
  const emptyKey = '';
  const getPathWithKey = that.getPath(path, key);
  const getPathWithEmptyKey = that.getPath(path, emptyKey);
  dd.drive([
    {
      it: 'creates object with path extended by given key',
      i: getPathWithKey('url'),
      e: { 'url': 'www.google.com/maps' },
    },
    {
      it: 'returns object with only path if key is empty string',
      i: getPathWithEmptyKey('url'),
      e: { 'url': 'www.google.com' },
    },
  ]);
};
