// Q4: Sum of products of corresponding digits

function sumOfDigitProducts(n1, n2) {

    let sum = 0;
    while (n1 > 0 || n2 > 0) {
        let digit1 = n1 % 10;
        let digit2 = n2 % 10;
        sum += digit1 * digit2;
        n1 = Math.floor(n1 / 10);
        n2 = Math.floor(n2 / 10);
    }
    return sum;
}

// Example:
console.log(sumOfDigitProducts(6, 34));  // 24
console.log(sumOfDigitProducts(123, 456)); // (3*6)+(2*5)+(1*4)=32
