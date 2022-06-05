export function solution(roman: string): number {
    let romanNum = 0,
        index = 0;
    while (index <= roman.length) {
        if (roman[index] === "I") {
            romanNum += 1;
        } else if (roman[index] === "V") {
            romanNum += 5;
        } else if (roman[index] === "X") {
            romanNum += 10;
        } else if (roman[index] === "L") {
            romanNum += 50;
        } else if (roman[index] === "C") {
            romanNum += 100;
        } else if (roman[index] === "D") {
            romanNum += 500;
        }

        index++;
    }
    return romanNum;
}
