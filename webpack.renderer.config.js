const rules = require("./webpack.rules");
const plugins = require("./webpack.plugins");

rules.push({
  test: /\.css$/,
  use: [{ loader: "style-loader" }, { loader: "css-loader" }],
});

rules.push({
  test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
  use: {
    loader: "file-loader",
    options: {
      name: "[path][name].[ext]",
      publicPath: "../",
    },
  },
});

module.exports = {
  module: {
    rules,
  },
  plugins: plugins,
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css"],
  },
};
