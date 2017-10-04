exports.config = {
  namespace: 'ttstable',
  generateDistribution: true,
  bundles: [
    {
      components: [
        'tts-table',
        'tts-table-column',
        'tts-table-item',
        'tts-side-column',
        'tts-tooltip'
      ]
    }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
