const path = require("path");
const webpack = require("webpack");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const configFile = path.resolve(__dirname, "./tsconfig.json");

module.exports = {
    entry: {
        MagdaPluginComponentHeader: {
            import: "./src/MagdaPluginComponentHeader.tsx",
            filename: "[name].js",
            library: {
                name: "[name]",
                type: "umd",
                umdNamedDefine: true
            }
        },
        MagdaPluginComponentFooter: {
            import: "./src/MagdaPluginComponentFooter.tsx",
            filename: "[name].js",
            library: {
                name: "[name]",
                type: "umd",
                umdNamedDefine: true
            }
        }
    },
    mode: "production",
    output: {
        path: path.join(__dirname, ".", "dist")
    },
    externals: {
        react: "React",
        "react-dom": "ReactDOM",
        "react-router": "ReactRouter",
        "react-router-dom": "ReactRouterDOM"
    },
    optimization: {
        minimize: false
    },

    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: "ts-loader",
                options: {
                    configFile,
                    compilerOptions: {
                        lib: [
                            "dom",
                            "es5",
                            "es6",
                            "scripthost",
                            "es2015.promise"
                        ]
                    }
                }
            },
            {
                test: /\.svg$/,
                use: ["@svgr/webpack"]
            }
        ]
    },
    resolve: {
        plugins: [
            new TsconfigPathsPlugin({
                configFile
            })
        ],
        extensions: [".tsx", ".ts", ".js"]
    }
};
