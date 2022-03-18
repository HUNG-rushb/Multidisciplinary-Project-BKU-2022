// module.exports = function(api) {
//   api.cache(true);
//   return {
//     presets: ['babel-preset-expo'],
//   };
// };

// https://docs.nativebase.io/nb-icons#h3-expo
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@native-base/icons": "@native-base/icons/lib",
          },
        },
      ],
    ],
  };
};
