const path = require('path');
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  core: {
    builder: 'webpack5',
  },
  webpackFinal: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src'),
    };
    config.resolve.modules = [...(config.resolve.modules || []), './src'];
    config.module.rules = [
      ...(config.module.rules || []),
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        type: 'javascript/auto',
        use: [
          { loader: '@svgr/webpack', options: { icon: true } },
          'url-loader',
        ],
      },
    ];
    return config;
  },
};
export default config;
