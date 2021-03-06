const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');

const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './src/**/*.njk',
    './src/**/*.html',
    './src/**/*.svelte'
  ],

  whitelistPatterns: [/svelte-/],

  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

const isProd = process.env.NODE_ENV === 'PROD';
const isDev  = process.env.NODE_ENV === 'DEV';

module.exports = {
  plugins: [
    tailwindcss,
    autoprefixer,
    ...(isProd ? [purgecss, cssnano] : [])
  ]
};
