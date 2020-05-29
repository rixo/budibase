import { svenchify } from "svench/rollup"

export default svenchify("./rollup.config.js", {
  index: {
    source: "src/index.html",
    replace: {
      "/_builder/bundle.js": "/svench.js",
    },
  },

  serve: {
    public: [
      // NOTE this is where svenchify builds svench by default, by overriding
      // your config's output (you can control this with override option)
      ".svench/build",
      {
        dir: "../server/builder",
        base: "/_builder",
      },
    ],
  },
})
