const path = require('path');

const buildEslintCommand = (filenames) =>
  `next lint --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
  'src/**/*.test.{ts,tsx}': ['jest --bail'],
  //'*': ['conc -s first -k \"pnpm build-storybook && pnpx serve -l 6006 -L storybook-static\" \"wait-on tcp:6006 && pnpm test-storybook\"']
};
