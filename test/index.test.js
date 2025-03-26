// index.test.js:

"use strict";

// load all necessary modules
const MoreDate = require("../index.js");

describe("MoreDate", () => {
  describe("MoreDate.parseDate", () => {
    it('"2025-03-21" is a valid date', () => {
      let value = MoreDate.parseDate("2025-03-20");
      expect(value).not.toBe(NaN);
    });

    it('"2025-03-32" is not a valid date', () => {
      let value = MoreDate.parseDate("2025-03-32");
      expect(value).toBe(NaN);
    });
  });

  describe("MoreDate.sameDate", () => {
    it('"is the same date', () => {
      let value1 = MoreDate.parseDate("2025-03-20");
      let value2 = MoreDate.parseDate("2025-03-20");
      expect(MoreDate.sameDate(value1, value2)).toEqual(true);
    });

    it("is not the same date", () => {
      let value1 = MoreDate.parseDate("2025-03-20");
      let value2 = MoreDate.parseDate("2025-03-21");
      expect(MoreDate.sameDate(value1, value2)).toEqual(false);
    });
  });
});
