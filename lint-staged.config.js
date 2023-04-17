module.exports = {
  "*.{js,jsx}": (filenames) => [
    "npm run prettier",
    "npm run lint:fix",
  ],
};