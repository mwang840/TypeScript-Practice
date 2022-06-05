export function solution(roman: string): number {
    let romanNum = 0,
        index = 0,
        currentValue,
        current,
        next,
        nextValue;
    let toArray = roman.split("");
    //Map of the roman codes
    const romanMap = { M: 1000, D: 500 };
    //Sets up exceptions
    const exceptions = { CD: 400, CM: 900, XC: 90, XL: 40, IV: 4, IX: 9 };
    for (index; index < toArray.length; index++) {
        current = toArray[index];
        currentValue = romanMap[current];
        next = toArray[index + 1];
    }
    return romanNum;
}
