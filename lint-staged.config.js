module.exports = {
  "*.{js,jsx}": (filenames) => [
    "yarn prettier",
    "yarn lint:fix",
  ],
};