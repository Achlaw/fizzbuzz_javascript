var Fizzbuzz = function(){};
Fizzbuzz.prototype.isDivisibleByThree = function (number) {
    return (number % 3 === 0);
};

Fizzbuzz.prototype.isDivisibleByFive = function (number) {
  return (number % 5 === 0);
};
// Fizzbuzz.prototype._isDivisibleBy = function (number, divisor) {
//   return (number % divisor === 0);
// };
//
// Fizzbuzz.prototype.isDivisibleByFifteen = function(number) {
//   return _isDivisibleBy(number, 15);
// };
