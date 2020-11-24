const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#FF5A5F',
              '@border-radius-base': '8px',
              '@height-base': '50px',
              '@height-lg': '60px',
              '@height-sm': '32px',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
