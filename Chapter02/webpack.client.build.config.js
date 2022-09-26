const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const buildDirectory = 'dist';

const outputDirectory = buildDirectory + '/client';

module.exports = {

  mode: 'production',

  entry: './src/client/index.js',

  output: {

    path: path.join(__dirname, outputDirectory),

    filename: 'bundle.js'

  },

  module: {

    rules: [

      {

        test: /\.js$/,

        exclude: /node_modules/,

        use: {

          loader: 'babel-loader'

        }

      },

        {

            test: /\.css$/,
        
            use: [{ loader: MiniCssExtractPlugin.loader,
        
            options: {
        
                publicPath: '../'
        
            }
        
        }, 'css-loader'],
        
        },
      {

            test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg) (\?[a-z0-9=.]+)?$/,
    
            use: 'file loader'
    
          },

    ]

  },

  devServer: {
    allowedHosts: ['ec2-44-204-158-89.compute-1.amazonaws.com'],

    port: 3000,

    open: true

  },

  plugins: [

    new CleanWebpackPlugin({

      cleanOnceBeforeBuildPatterns: [path.join(__dirname,

      buildDirectory)]

    }),

    new HtmlWebpackPlugin({

      template: './public/index.html'

    }),
    new MiniCssExtractPlugin({
        filename: 'bundle.css',
    })

  ]

};
