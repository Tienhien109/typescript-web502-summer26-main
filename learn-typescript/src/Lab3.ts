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

//bai3
const createUser = (
    name: string,
    age?: number,
    role: string = "user"
): string => {

    if (age != undefined) {
        return `Name: ${name}, Age: ${age}, Role: ${role}`;
    }

    return `Name: ${name}, Role: ${role}`;
}
console.log("\nBai 3:");
console.log(createUser("Hiền"));
console.log(createUser("Hiền", 20, "admin"));
//bai 4
const mergeProducts = (
    arr1: string[],
    arr2: string[]

): string[] => {
    return [...arr1, ...arr2];
}
const printProducts = (products: string[]) => {
    for (let product of products) {
        console.log(product);
}
}


const a = ["Iphone", "Samsung"];
const b = ["huawei", "honda"];

const listProducts = mergeProducts(a, b);

console.log("\nBai 4:");
printProducts(listProducts);  
