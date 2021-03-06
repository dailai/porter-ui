// https://github.com/shelljs/shelljs
require('shelljs/global');
// env.NODE_ENV = 'production';

const fs = require('fs');
const path = require('path');
const config = require('./config');
const ora = require('ora');
const webpack = require('webpack');
const webpackConfig = require('./webpack.prod.conf');

console.log(
    '  Tip:\n' +
    '  Built files are meant to be served over an HTTP server.\n' +
    '  Opening index.html over file:// won\'t work.\n'
)

const spinner = ora('building for ' + env.NODE_ENV + '...');
spinner.start();

require('./generator');
const assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory);
if (process.env.API) {
    mv("./api-config.js", "./api-config-tmp.js");
    fs.writeFile("./api-config.js", 'module.exports = {api:"' + process.env.API + '"}', function(err) {
        console.log("stuff api-config.js error" + err);
    });
}
rm('-rf', assetsPath);
mkdir('-p', assetsPath);
cp('-R', config.staticPath + '/', assetsPath);
webpack(webpackConfig, function (err, stats) {
    spinner.stop();

    if (process.env.API) {
        mv("./api-config-tmp.js", "./api-config.js");
    }

    if (err) throw err;
    process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n');
});

