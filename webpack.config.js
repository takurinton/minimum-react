module.exports = {
    mode: "development",
    entry: "./src/main.tsx",
    output: {
      path: `${__dirname}/dist`,
      filename: "[name].js"
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