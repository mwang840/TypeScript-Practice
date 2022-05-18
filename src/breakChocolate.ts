export function breakChocolate(m: number, n: number) {
    let totalSquares = m * n;
    let countOfSquares = 0;
    if (totalSquares === 1 || totalSquares === 0) {
        return 0;
    } else {
        while (totalSquares != 1) {
            totalSquares--;
            countOfSquares++;
        }
        return countOfSquares;
    }
}
