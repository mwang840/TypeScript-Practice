export function descendingOrder(n: number): number {
    let descending = String(n);
    let popular = [];
    for(let i = 0; i < descending.length; ++i){
      popular.push(descending[i]);
    }

    for(let j = 0; j < popular.length + 1; ++j){
      if(popular[j] < popular[j+1]){
        popular[j] = popular[j+1];
      }
    }
    
    return Number(popular);
    // your code here
  }