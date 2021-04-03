module.exports = {
  roots: ["__tests__"],
  testRegex: ".*\\.(spec|test)\\.(ts|tsx)$",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverage: true,
};
