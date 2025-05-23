# MorDate

## API Documentation

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

- [MorDate](#mordate)
  - [API Documentation](#api-documentation)
      - [Table of Contents](#table-of-contents)
    - [MoreDate](#moredate)
      - [isDate](#isdate)
        - [Parameters](#parameters)
      - [parseDate](#parsedate)
        - [Parameters](#parameters-1)
      - [sameDate](#samedate)
        - [Parameters](#parameters-2)
      - [today](#today)
      - [tomorrow](#tomorrow)
      - [yesterday](#yesterday)

### MoreDate

**Extends Date**

A custom Date class that extends the built-in Date class with additional utility methods.
This class provides static methods to parse dates, compare dates, and retrieve today's, tomorrow's, or yesterday's dates.

#### isDate

Checks if the provided value is a valid Date object.

##### Parameters

- `value` **any** The value to check.

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Returns true if the value is a valid Date object, false otherwise.

#### parseDate

Parses a value into a Date object.
If the value is already a Date, it returns the Date object.
If the value is a string, it attempts to convert it to a Date.
If the value is of any other type or the string cannot be parsed, it returns NaN.

##### Parameters

- `value` **any** The value to parse.

Returns **([MoreDate](#moredate) | [NaN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/NaN))** Returns a MoreDate object if the value is a valid date or string, or NaN if parsing fails.

#### sameDate

Compares two Date objects and returns true if they represent the same date and time.

##### Parameters

- `value1` **[Date](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)** The first Date object to compare.
- `value2` **[Date](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)** The second Date object to compare.

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Returns true if the two Date objects represent the same date and time, false otherwise.

#### today

Returns a Date object representing today's date with the time set to midnight.

Returns **[Date](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)** A Date object for today, with time set to midnight.

#### tomorrow

Returns a Date object representing tomorrow's date with the time set to midnight.

Returns **[Date](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)** A Date object for tomorrow, with time set to midnight.

#### yesterday

Returns a Date object representing yesterday's date with the time set to midnight.

Returns **[Date](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)** A Date object for yesterday, with time set to midnight.
