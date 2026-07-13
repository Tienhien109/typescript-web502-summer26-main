function sayHello(){
    console.log("Hello, TypeScript!");

}
// chay function
sayHello();
// cach 2: arrow function
const sayHello2 = () => {
    console.log("Hello, TypeScript 2!");
};
sayHello2();
function sumNumbers(a: number, b: number): number {
    return a + b;
}

function haNumbers(a: number, b: number): number {
    return a + b;
}const result = haNumbers(5, 3);

console.log(result);
function mutiplyNumbers(a: number, b: number =5): number {
return a * b;
}

function dividelyNumbers(a: number, b: number =5): number {
    if (b !== undefined) {
        return a/ b;
    } else {
        return a;
    }
    }
    const arr1: number[] = [1, 2, 3];
    const arr2: number[] = [4, 5, 6];
    const arr3: number[] = [...arr1, ...arr2];
    console.log(arr3);