export function descendingOrder(n: number): number {
    //Converts to string
    let descending = n.toString();
    //Splits it to an array by char
    let arr = descending.split("");
    //ParseInts the current array while sorting it in reverse order then getting rid of the gaps
    return parseInt(arr.sort().reverse().join(""));
}
