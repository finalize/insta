module.exports = {
    mode: "development",
    entry: "./src/index.jsx",
    output: {
      filename: "bundle.js",
      path: __dirname + "/../server/public/javascripts"
    },
  
    devtool: "source-map",
  
    resolve: {
      extensions: [".jsx", ".ts", ".tsx", ".js", ".json"]
    },
  
    module: {
      rules: [
        {
          // 拡張子 .js の場合
          test: /\.jsx$/,
          use: [
            {
              // Babel を利用する
              loader: "babel-loader",
              // Babel のオプションを指定する
              options: {
                presets: [
                  // プリセットを指定することで、ES2019 を ES5 に変換
                  "@babel/preset-env"
                ]
              }
            }
          ]
        }
      ]
    }
  };