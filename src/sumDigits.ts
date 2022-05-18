export function sumDigits(n: number): number {
    const sum = 0;
    if (n < 10) {
        return n;
    } else {
        return sumDigits((n % 10) + sumDigits(Math.floor(n % 10)));
    }
}
