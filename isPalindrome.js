let str = "Sodiq".toLowerCase();

function strReverse(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

function isPalindrome(str) {
  return str == strReverse(str);
}

console.log(isPalindrome(str));
