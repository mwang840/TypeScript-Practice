export function descendingOrder(n: number): number {
    let descending = String(n);
    let popular = [];
    //Turns the numbers to an string then put each digit out to an array
    for(let i = 0; i < descending.length; ++i){
      popular.push(descending[i]);
    }
    //Shallow copy first, then sorts the array from greatest to least (ternary to check if one > two; place one first; otherwise
    //put the other first and repeat until end of array)
    [...popular].sort((one, two)=>(one > two ? -1: 1));
    //convert it to a number then return the number
    return Number(popular);
  }