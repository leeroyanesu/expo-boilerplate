module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
          root: ["./"],
          alias: {
            "@components": "./src/components",
            "@services": "./src/modules",
            "@routers": "./src/routers",
            "@screens": "./src/screens",
            "@helpers": "./src/helpers",
            "@assets": "./src/assets",
            "@icons": "./src/assets/icons",
            "@providers": "./src/providers",
            "@utils": "./src/utils",
            "@src": "./src",
            "@styles": "./src/styles",
            "@store": "./src/store",
          },
        },
      ],
    ],
  };
};