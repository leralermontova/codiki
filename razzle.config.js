"use strict";

const autoprefixer = require("autoprefixer");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const Visualizer = require("webpack-visualizer-plugin");
const isHeroku = require("is-heroku")
const entries = require("object.entries")

module.exports = {
  modify: (baseConfig, { target, dev }, webpack) => {
    const appConfig = Object.assign({}, baseConfig);

    // Setup SCSS
    if (target === "web") {
      const cssLoader = {
        loader: "css-loader",
        options: {
          minimize: !dev,
          sourceMap: dev,
          importLoaders: 1
        }
      };

      const postCSSLoader = {
        loader: "postcss-loader",
        options: {
          ident: "postcss", // https://webpack.js.org/guides/migrating/#complex-options
          sourceMap: dev,
          plugins: () => [
            autoprefixer({
              browsers: [
                ">1%",
                "last 4 versions",
                "Firefox ESR",
                "not ie < 9" // React doesn't support IE8 anyway
              ]
            })
          ]
        }
      };

      const sassLoader = {
        loader: "sass-loader",
        options: {
          sourceMap: dev
        }
      };

      if (dev) {
        // For development, include source map
        appConfig.module.rules.push({
          test: /.scss$/,
          use: ["style-loader", cssLoader, postCSSLoader, sassLoader]
        });
      } else {
        // For production, extract CSS
        appConfig.module.rules.push({
          test: /.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [cssLoader, postCSSLoader, sassLoader]
          })
        });

        appConfig.plugins.push(
          new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
          new webpack.IgnorePlugin(/moment/, /react-kronos/),
          new Visualizer(),
          new ExtractTextPlugin( "bundle.css" )
        );
      }
    } else {
      appConfig.module.rules.push({
        test: /.scss$/,
        use: ["ignore-loader"]
      });
    }

    if (target !== "node") return appConfig

    const isDefinePlugin = plugin => plugin.constructor.name === "DefinePlugin"
    const indexDefinePlugin = appConfig.plugins.findIndex(isDefinePlugin)

    if (indexDefinePlugin < 0) {
      console.warn("Couldn't setup razzle-heroku, no DefinePlugin...")
      return appConfig
    }

    const {definitions} = appConfig.plugins[indexDefinePlugin]
    const newDefs = {}

    const writeDefs = ([key, val]) => (newDefs[`process.env.${key}`] = val)

    entries(definitions["process.env"]).forEach(writeDefs)

    if (isHeroku) {
      delete newDefs["process.env.PORT"]
      newDefs["process.env.RAZZLE_PUBLIC_DIR"] = '"/app/build/public"'
    }

    appConfig.plugins[indexDefinePlugin] = new webpack.DefinePlugin(newDefs)


    return appConfig;
  }
};
