const nodeExternals = require('webpack-node-externals')
const path = require('path');

module.exports = {
  // output: {
  //   path: path.resolve(__dirname + '/dist'),
  // },
  externals: [
    nodeExternals()
  ],

};
