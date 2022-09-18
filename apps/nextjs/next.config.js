const withTM = require("next-transpile-modules")(["ecommerce"]);

module.exports = withTM({
  reactStrictMode: true,
});
