//bai 1
const averageScore = (scores: number[]): number => {
    let sum = 0;
    for (let score of scores) {
        sum += score;
    }
    return sum / scores.length;
}
console.log(averageScore([8, 9, 10]));
console.log(averageScore([5, 6, 7, 8]));
//bai 2

const checkNumber = (num: number): string => {
    if (num % 2 === 0) {
        return "Even";
    }
    return "Odd";
}
console.log("\nBai 2:");
console.log(checkNumber(4));
console.log(checkNumber(7));


