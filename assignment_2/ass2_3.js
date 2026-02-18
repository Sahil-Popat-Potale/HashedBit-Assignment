// Q3: findTax using switch

function findTax(salary) {
    let tax = 0;
    switch (true) {
        case (salary > 0 && salary <= 500000):
            tax = 0;
            break;
        case (salary > 500000 && salary <= 1000000):
            tax = salary * 0.10;
            break;
        case (salary > 1000000 && salary <= 1500000):
            tax = salary * 0.20;
            break;
        case (salary > 1500000):
            tax = salary * 0.30;
            break;
        default:
            return "Invalid salary";
    }
    return tax;
}

// Example:
console.log(findTax(450000));   // 0
console.log(findTax(800000));   // 80000
console.log(findTax(1200000));  // 240000
