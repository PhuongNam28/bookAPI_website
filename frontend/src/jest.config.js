module.exports = {
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
    "^.+\\.scss$": "jest-css-modules-transform"
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  testEnvironment: "jsdom",
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy"
  }
};
