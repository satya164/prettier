"use strict";

function parseWithBabylon(text) {
  // Inline the require to avoid loading all the JS if we don't use it
  const babylon = require("babylon");

  return babylon.parse(text, {
    sourceType: "module",
    allowImportExportEverywhere: false,
    allowReturnOutsideFunction: false,
    plugins: [
      "jsx",
      "flow",
      "doExpressions",
      "objectRestSpread",
      "decorators",
      "classProperties",
      "exportExtensions",
      "asyncGenerators",
      "functionBind",
      "functionSent",
      "dynamicImport"
    ]
  });
}

module.exports = { parseWithBabylon };
