const path = require('path');

module.exports = {
    mode: "development",
    entry: "./src/app.tsx",
    output: {
      path: path.join(__dirname, 'dist'),
      filename: "[name].js"
    },
    devServer: {
      contentBase: "dist",
      open: true,
      port: 3000,
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader"
        }
      ]
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"]
    },
    target: 'web',
};