# magda-plugin-ui-component-examples

This is an example repo that demonstrates how to build Magda Plugin React UI Components.

These components will be used to replace the generic built-in Magda UI react component via `<script>` tags. To order to achieve that, the components bundled here will treat React & ReactDom as externals and attempt to use the global shared UMD version libs. i.e. sharing the same React libs copy with main Magda UI JS bundles.

The purpose of doing this is to offer a more flexible way of customising UI component and be able to implement complex logic during the customisation without forking the Magda UI module.

### UI Plugin Component Interface

When an UI plugin component is mounted, Magda frontend will pass a list of properties to the component. Besides a list of common properties, different properties will be passed to the component depends on the component type.

To find out the list of properties that different type of plugin component will receive, please refer to document of [@magda/external-ui-plugin-sdk](https://www.npmjs.com/package/@magda/external-ui-plugin-sdk).

### JS Bundle

In order to make sure the UI plugin js bundle can be recoginised & loaded by Magda frontend properly, the JS bundle of UI plugin should meet the following requirement:

- It's recommended that the JS bundle of each UI component is bundled as UMD library and export itself to global scope `MagdaPluginComponentXXXXXX` field. Here , `XXXXXX` represents the support plugin UI component types. For full list of supported plugin UI component type names, please refer to [@magda/external-ui-plugin-sdk document PREFIX constant section](https://github.com/magda-io/magda/blob/master/packages/external-ui-plugin-sdk/docs/modules.md#prefix).

> Please refer to [webpack.config.js](./webpack.config.js) in this repo for webpack config example.

> Since Magda v2.2.0, users can load more than one "Extra Visualisation Section" type Magda UI Plugin Components. To allow this, the component is required to be packaged as a library and exported to global scope `MagdaPluginComponentExtraVisualisationSection.xxxx`. Here, `MagdaPluginComponentExtraVisualisationSection` should be an object with key `xxxx` set to the plugin component. e.g. the [DAP image gallery plugin](https://github.com/magda-io/magda-ui-plugin-component-dap-image-gallery) choose to export itself to "MagdaPluginComponentExtraVisualisationSection.DAPImageGallery".
> Please refer to [webpack.config.js](https://github.com/magda-io/magda-ui-plugin-component-dap-image-gallery/blob/main/webpack.config.js) in DAP image gallery plugin repo for webpack config example.

- Component CSS / styles should bundled into JS bundle as well.

e.g, you can add the `style-loader`, `css-loader` & `sass-loader` webpacke loader to bundle styles imported from scss / css files.
```json
{
    test: /\.(css|s[ac]ss)$/i,
    use: [
        // Creates `style` nodes from JS strings
        "style-loader",
        // Translates CSS into CommonJS
        "css-loader",
        // Compiles Sass to CSS
        "sass-loader"
    ]
}
```
> More please refer to webpack [sass-loader document](https://webpack.js.org/loaders/sass-loader/).

> Please refer to [webpack.config.js](./webpack.config.js) in this repo for webpack config example.

### How to Use UI plugins

You can instruct Magda to load your Plugin UI components via `magad-web-server` module Helm Config. e.g.:

```yaml
web-server:
  externalUIComponents:
    - "https://exmaple.com/assets/libs/MagdaPluginComponentHeader.js"
    - "https://exmaple.com/assets/libs/MagdaPluginComponentFooter.js"
```

You also need to configure Magda Gateway module `CSP` config accordingly to make sure scripts from `exmaple.com` are allowed. e.g.:

```yaml
gateway:
  csp:
    browserSniff: false
    directives:
      scriptSrc:
      - "'self'"
      - "'unsafe-inline'"
      - exmaple.com
      - exmaple.com
      - "blob:"
      objectSrc:
      - "'none'"
      workerSrc:
      - "'self'"
      - "blob:"
```

For more information, please refer to this issue:

https://github.com/magda-io/magda/issues/3099

### Run The Demo

```bash
yarn start
```

Access http://localhost:8080/

