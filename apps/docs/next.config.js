const withTM = require("next-transpile-modules")(["ui"]);

module.exports = withTM({
  basePath: "/docs",
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/web",
        destination: process.env.NEXT_PUBLIC_WEB_API_URL,
      },
    ];
  },
});
