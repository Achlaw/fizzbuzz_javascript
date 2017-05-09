var Fizzbuzz = function(){};
// Fizzbuzz.prototype.isDivisibleByThree = function (number) {
//     return (number % 3 === 0);
// };
//
// Fizzbuzz.prototype.isDivisibleByFive = function (number) {
//   return (number % 5 === 0);
// };

// Fizzbuzz.prototype.isDivisibleByFifteen = function (number) {
//   return (number % 15 === 0);
// };

Fizzbuzz.prototype._isDivisibleBy = function (number, divisor) {
  return (number % divisor === 0);
};

Fizzbuzz.prototype.isDivisibleByThree = function (number) {
    return this._isDivisibleBy(number, 3);
};

Fizzbuzz.prototype.isDivisibleByFive = function (number) {
  return this._isDivisibleBy(number, 5);
};


Fizzbuzz.prototype.isDivisibleByFifteen = function(number) {
  return this._isDivisibleBy(number, 15);
};

Fizzbuzz.prototype.says = function(number) {
  if (this.isDivisibleByThree(number)) {
    return "Fizz";
  }
  else if (this.isDivisibleByFive(number)) {
    return "Buzz";
  }
};
//
// Fizzbuzz.prototype.says = function(number) {
//   if (this.isDivisibleByFive(number)) {
//     return "Buzz";
//   }
// };
