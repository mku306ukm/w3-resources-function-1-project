// 1. Write a JavaScript function that reverse a number. 

function reversedNum(num) {
  return (
    parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num)
  );
}
console.log(reversedNum("-00012345000"));

//num.toString() converts the given number into a String.
//num.split('') converts the String into an Array.
//num.reverse() reverses the order of the items in the array.
//num.join('') (array to string)
//The parseFloat() method parses a value as a string and returns the first number.
/* num = '0012345'
parseFloat(num)
 num = 12345 */
//Note: parseFloat runs in the end (even though it is on the first line of the function) on the reversed number and removes any leading zeroes.
//num * Math.sign(num) multiplies the number with the sign of the original number provided.

