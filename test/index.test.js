// index.test.js:

// load all necessary modules
const BetterDate = require("../index.js");

describe("BetterDate", () => {
  describe("BetterDate.parse", () => {
    it('"2025-03-21" is valid date', () => {
      let value = BetterDate.parse("2025-03-20");
      console.log("today", BetterDate.today);
    });
  });
});
