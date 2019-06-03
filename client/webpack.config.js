module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
      filename: "bundle.js",
      path: __dirname + "/../server/public/javascripts"
    },
  
    devtool: "source-map",
  
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"]
    },
  
    module: {
      rules: [
        {
          enforce: "pre",
          test: /\.tsx?$/,
          use: [
            {
              loader: "tslint-loader",
              options: {
                typeCheck: true,
                fix: true
              }
            }
          ]
        },
        { test: /\.tsx?$/, loader: "ts-loader" }
      ]
    }
  };