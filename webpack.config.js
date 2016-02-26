var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var exec = require('child_process').exec;

module.exports = {
    context: __dirname + '/resources/js',
    entry: {
        app: './app.js',
        vendor: './vendor.js'
    },

    output: {
        path: __dirname + '/assets/js/',
        filename: "[name].js"
    },

    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /(node_modules|bower_components)/, loader: 'babel', query: { presets: ['react', 'es2015'], plugins: ['transform-runtime']} },
            { test: /\.vue$/, loader: 'vue' },

            {test: /\.scss$/, loader: 'style!css-loader!scss-loader'},
            {test: /\.less/, loader: 'style!css-loader!less-loader'},
            {test: /\.css$/, loader: "style!css-loader!postcss"},

            {test: /\.png$/, loader: 'url', query: { limit: 25000, prefix: 'img/', name: '[name].[ext]?[hash]'}},
            {test: /\.jpg$/, loader: 'url', query: { limit: 25000, prefix: 'img/', name: '[name].[ext]?[hash]'}},
            {test: /\.gif$/, loader: 'url', query: { limit: 25000, prefix: 'img/', name: '[name].[ext]?[hash]'}},
            {test: /\.svg$/, loader: 'url', query: { limit: 25000, prefix: 'img/', name: '[name].[ext]?[hash]'}},

            {test: /\.(woff(2)?)(\?[a-z0-9=\.]+)?$/, loader: 'url', query: { limit: 25000, prefix: 'font/', name: '[name].[ext]?[hash]'}},
            {test: /\.(eot)(\?[a-z0-9=\.]+)?$/, loader: 'file', query: { prefix: 'font/', name: '[name].[ext]?[hash]'}},
            {test: /\.(ttf)(\?[a-z0-9=\.]+)?$/, loader: 'file', query: { prefix: 'font/', name: '[name].[ext]?[hash]'}},
            {test: /\.(svg)(\?[a-z0-9=\.]+)?$/, loader: 'file', query: { prefix: 'font/', name: '[name].[ext]?[hash]'}}
        ]
    },
    postcss: function (webpack) {
        return [
            require('autoprefixer'),
            require('precss'),
            require('postcss-less-vars')
        ];
    },
    plugins: [
        new BrowserSyncPlugin({
            proxy: 'societycms.dev'
        }),
        function() {
            this.plugin("emit", (compilation, callback) => {
                exec('php ../../artisan stylist:publish SocietyAdmin', function(error, stdout, stderr) {
                    console.log(stdout);
                });
                callback();
            });
        }
    ]
};
