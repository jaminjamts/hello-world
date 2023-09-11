const path = require("path");

const postCSSPlugins = [
  require("postcss-mixins"),
  require("postcss-import"),
  require("postcss-simple-vars"),
  require("postcss-nested"),
  require("postcss-hexrgba"),
  require("autoprefixer"),
];


module.exports = {
  entry: "../platinum-travel-site/app/assets/scripts/App.js",
  output: {
    filename: "bundled.js",
    path: path.resolve(__dirname, "app"),
  },

  devServer: {
    static: function(app, server){
      server._watch("./app/**/*.html");
    },
    static: path.join(__dirname, "app"),
    hot: true,
    port: 3002,

    host: "0.0.0.0"
  },

  mode: "development",

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: { postcssOptions: { plugins: postCSSPlugins } },
          },
        ],
      },
    ],
  },
};
