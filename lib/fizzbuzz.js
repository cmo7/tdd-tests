export function fizzbuzzNumber(n) {
    if (n % 3 === 0 & n % 5 === 0)
        return 'FizzBuzz';
    if (n % 3 === 0)
        return 'Fizz';
    if (n % 5 === 0)
        return 'Buzz';
    return n;
}

export function fizzbuzzRange(start, end) {
    const result = [];
    for (let i = start; i < end; i++) {
        result.push(i);
    }
    return result.map(fizzbuzzNumber);
}