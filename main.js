function add(a, b) {
    let result = a + b;
    return result;
}
// console.log(add(2,2))

function multiply(a, b) {
    let i = 0;
    let result = 0;
    while (i < b) {
        result = add(a, result);
        i++;
    }
    return result
}
// console.log(multiply(3,4))

function power(a, b) {
    let i = 0;
    let result = 1;
    while (i < b) {
        result = multiply(a, result);
        i++;
    }
    return result;
}
// console.log(power(4,4))

function factorial(a) {
    let i = 0;
    let result = 1;
    let b = a;
    while (i < a) {
        result = multiply(b, result);
        b--;
        i++;
    }
    return result;
}
// console.log(factorial(5));

function fibonacci(a) {
    let i = 0;
    let fib = [0, 1];
    while(i < a) {
        fib.push(add(fib[i], fib[i + 1]))
        i++;
    }
    return fib[a-1];
}
console.log(fibonacci(8));