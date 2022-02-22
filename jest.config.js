// eslint-disable-next-line no-undef
module.exports = {
  roots: ["<rootDir>/components", "<rootDir>/test"],
  transform: {
    "^.+\\.(tsx|ts)$": "ts-jest",
    "\\.js?$": "babel-jest",
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|eot|woff2|svg)$":
      "jest-transform-stub",
  },
  testMatch: [
    "<rootDir>/components/**/__test__/*.(test).{js,jsx,ts,tsx}",
    "<rootDir>/test/**/*.(test).{js,jsx,ts,tsx}",
  ],
  moduleNameMapper: {
    "^components(.*)$": "<rootDir>/components$1",
    "^hooks(.*)$": "<rootDir>/components/_util/hooks$1",
    "^util/(.*)$": "<rootDir>/components/_util/$1",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "json", "node"],
  testPathIgnorePatterns: ["/node_modules/", "/lib"],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  setupFiles: ["<rootDir>/setupTest.js"],
  testEnvironment: "jsdom",
};
