const {
  createVanillaExtractPlugin
} = require('@vanilla-extract/next-plugin');

const withVanillaExtract = createVanillaExtractPlugin();

/**
 *
 * @type {import('next').NextConfig}
 */
const config = {
  i18n: {
    locales: ['en'],
    defaultLocale: 'en'
  },
  eslint: {ignoreDuringBuilds: true},
  webpack5: true,
  images: {
    loader: 'custom'
  },
};

module.exports = withVanillaExtract(config);
