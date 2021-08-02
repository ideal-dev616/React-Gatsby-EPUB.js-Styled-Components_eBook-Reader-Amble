module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-docs"
  ],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
        transcludeMarkdown: true,
      },
    },
    {
      name: '@storybook/addon-a11y'
    }
  ],
  core: {
    builder: "webpack5",
  },
  webpackFinal: async config => {
    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]
    // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
    
    //config.module.rules[0].use[0].options.plugins.push(
      //require.resolve("babel-plugin-remove-graphql-queries")
    
      config.module.rules[0].use[0].options.plugins = [
      // ...
      require.resolve("@babel/plugin-proposal-class-properties"),
      // ...
      require.resolve("babel-plugin-remove-graphql-queries"),
      // use babel-plugin-react-docgen for docgen support.
      require.resolve("babel-plugin-react-docgen"),
      ]
    return config
  },
}