const path = require('path')


module.exports = (config, context) => {
  console.log(config.module.rules);
  return {
    ...config,
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.html$/,
          loaders: "raw-loader"
        },
        {
          test: /\.js$/,
          use : [
            {
              loader: 'angularjs-template-loader',
              options: {
                relativeTo: path.resolve(__dirname, '')
              }
            }
          ],
          exclude: [
            /node_modules/
          ]
        }
      ]
    }
  }
}
