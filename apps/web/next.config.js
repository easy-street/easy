const withTM = require("next-transpile-modules")(["ui", "api", "utils"]);

const { DOCS_URL } = process.env;

module.exports = withTM({
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/docs",
        destination: `${DOCS_URL}/docs`,
      },
      {
        source: "/docs/:path*",
        destination: `${DOCS_URL}/docs/:path*`,
      },
    ];
  },
});
