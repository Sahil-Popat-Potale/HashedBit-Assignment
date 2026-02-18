// Q2: Calculator using switch

function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return "Cannot divide by zero";
            }
            return num1 / num2;
        default:
            return "Invalid operator";
    }
}

// Example usage:
console.log(calculate(10, 5, '+')); // 15
console.log(calculate(10, 5, '/')); // 2
