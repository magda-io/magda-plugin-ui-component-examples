# magda-plugin-ui-component-examples

This is an exmaple repo that demostrates how to build Magda Plugin React UI Components.

These components will be used to replace the generic built-in Magda UI react component via <script> tags. To order to achieve that, the components bundled here will treat React & ReactDom as externals and attempt to use the global shared UMD version libs. i.e. sharing the same React libs copy with main Magda UI JS bundles.

The purpose of doing this is to offer a more flexible way of customising UI component and be able to implement complex logic during the customisation without forking the Magda UI module.

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
