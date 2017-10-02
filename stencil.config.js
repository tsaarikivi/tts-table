exports.config = {
  namespace: 'ttstable',
  generateDistribution: true,
  bundles: [{ components: ['tts-table'] }]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
