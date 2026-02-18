function repeatedDigitSum(n) {
  n = Math.abs(Math.floor(n));
  while (n >= 10) {
    let sum = 0;
    while (n > 0) {
      sum += n % 10;
      n = Math.floor(n / 10);
    }
    n = sum;
  }
  return n;
}

// Example
console.log(repeatedDigitSum(456)); // 6
console.log(repeatedDigitSum(99999)); // 9
