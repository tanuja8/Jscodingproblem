function isPalindrome(x) {
    // Convert the integer to a string
    const str = x.toString();
  
    // Check if the string is the same when read forwards and backwards
    for (let i = 0; i < str.length / 2; i++) {
      if (str[i] !== str[str.length - 1 - i]) {
        return false;
      }
    }
  
    return true;
  }
  console.log(isPalindrome(121)); // should print true
console.log(isPalindrome(-121)); // should print false
console.log(isPalindrome(12345)); // should print false