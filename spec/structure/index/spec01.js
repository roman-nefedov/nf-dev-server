module.exports = (dd, that) => {
  const data = require('../../../gulp/helpers/structure/helpers/data.js');
  const output = {
    'dist': 'dist',
    'project': 'some_project',
    'jsBundles': 'dist/js',
    'json': 'dist/json',
    'jsonCore': 'dist/json/core',
    'jsonRoutes': 'dist/json/routes',
    'markup': 'some_project',
    'markupData': 'some_project/data',
    'markupDataRoutes': 'some_project/data',
    'markupDataCore': 'some_project/data/_core',
    'markupDataGenerators': 'some_project/data/_generators',
    'jsMarkup': 'some_project/js',
    'pugMarkup': 'some_project/pug',
    'cssMarkup': 'some_project/sass',
  };
  dd.drive([
    {
      it: 'builds dist/project hierarchy representation',
      i: [{ dist: 'dist', project: 'some_project' }, data],
      e: output,
    },
  ]);
};