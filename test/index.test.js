// index.test.js:

"use strict";

// load all necessary modules
const MoreDate = require("../index.js");

describe("MoreDate", () => {
  describe("MoreDate.parseDate", () => {
    it('"2025-03-21" is valid date', () => {
      let value = MoreDate.parseDate("2025-03-20");
    });
  });
});
