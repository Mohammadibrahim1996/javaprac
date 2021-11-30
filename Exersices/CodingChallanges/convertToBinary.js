// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary

function addBinary(a, b) {
  var sum = a + b;
  var binary = "";
  while (sum > 0) {
    binary = (sum % 2) + binary; //to convert decimal into binary we have to divide the number until its remainder are zero
    sum = Math.floor(sum / 2);
  }
  return binary;
}
console.log(addBinary(5, 9));

// The toString() method in Javascript is used with a number and converts the number to a string. It is used to return a string representing the specified Number object.
// Number.toString(base) it converts number into binary by using base..
function convert(x, y) {
  return (x + y).toString(2);
}
console.log(convert(5, 9));
