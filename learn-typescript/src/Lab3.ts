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
console.log(averageScore([5, 6, 7, 8]));



