/**
* @author  Aldy Rozian
* @version 1.0
* @since   2023-11-20
*/
var isPalindrome = function (value) {
    if (typeof value === 'number') {
        value = value.toString();
    }
    var reversed = value.split('').reverse().join('');
    return reversed === value;
};
console.log(isPalindrome(121));
var fizzBuzz = function (value) {
    for (var i = 1; i <= value; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        }
        else if (i % 3 === 0) {
            console.log('Fizz');
        }
        else if (i % 5 === 0) {
            console.log('Buzz');
        }
        else {
            console.log(i);
        }
    }
};
fizzBuzz(15);
