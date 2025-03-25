// index.js:

"use strict";

class MoreDate extends Date {
  /*
   * Checks if the provided value is a valid Date object.
   * @param {*} value - The value to check.
   * @returns {boolean} - Returns true if the value is a valid Date object, false otherwise.
   */
  static isDate(value) {
    return value instanceof Date && !isNaN(value.getTime());
  }

  /**
   * Parses a value into a Date object.
   * If the value is already a Date, it returns the Date object.
   * If the value is a string, it attempts to convert it to a Date.
   * If the value is of any other type or the string cannot be parsed, it returns NaN.
   *
   * @param {*} value - The value to parse.
   * @returns {Date|NaN} - Returns a Date object if the value is a valid date or string, or NaN if parsing fails.
   */
  static parse(value) {
    // if value is not a date
    if (!this.isDate(value)) {
      // if value is a string then attempt to parse it
      if (typeof value === "string") {
        value = new Date(value);

        // if parsing fails then return NaN
        if (!this.isDate(value)) {
          value = NaN;
        }
      } else {
        // for all other data types return NaN
        value = NaN;
      }
    }

    // return the converted value
    return value;
  }

  /**
   * Compares two Date objects and returns true if they represent the same date and time.
   * @param {Date} value1 - The first Date object to compare.
   * @param {Date} value2 - The second Date object to compare.
   * @returns {boolean} - Returns true if the two Date objects represent the same date and time, false otherwise.
   */
  static same(value1, value2) {
    // Check if both values are valid Date objects
    if (!(value1 instanceof Date) || !(value2 instanceof Date)) {
      return false;
    }

    // Compare the time values of both dates (milliseconds since Jan 1, 1970)
    return value1.getTime() === value2.getTime();
  }

  /**
   * Returns a Date object representing today's date with the time set to midnight.
   *
   * @returns {Date} - A Date object for today, with time set to midnight.
   */
  static get today() {
    const value = new Date();
    value.setHours(0, 0, 0, 0); // Set time to midnight
    return value;
  }

  /**
   * Returns a Date object representing tomorrow's date with the time set to midnight.
   *
   * @returns {Date} - A Date object for tomorrow, with time set to midnight.
   */
  static get tomorrow() {
    const value = new Date();
    value.setHours(0, 0, 0, 0); // Set time to midnight
    value.setDate(value.getDate() + 1); // Add one day to the current date
    return now;
  }

  /**
   * Returns a Date object representing yesterday's date with the time set to midnight.
   *
   * @returns {Date} - A Date object for yesterday, with time set to midnight.
   */
  static get yesterday() {
    const value = new Date();
    value.setHours(0, 0, 0, 0); // Set time to midnight
    value.setDate(now.getDate() - 1); // Subtract one day from the current date
    return value;
  }
}

// Export the BetterDate class
module.exports = BetterDate;
