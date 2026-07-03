let age: number = 25;
let height: number = 1.75;
height = 1.80; // Cập nhật giá trị của biến height
let myName: string = "John Doe";
let hasPet: boolean = true;
console.log("Age:", age);
console.log("Height:", height);
console.log("Name:", myName);
console.log("Has Pet:", hasPet);
// object type
let student: { name: string, age: number, hasPet: boolean } = {
    name: "Hiennt",
    age: 20,
    hasPet: true,
};
let numbers: number[] = [1, 2, 3];
let strings: string[] = ["a", "b", "c"];
let students: { name: string, age: number, hasPet: boolean }[] = [] = [
    {name: "Hiennt", age: 20, hasPet: true},
    {name: "Hiennt2", age: 21, hasPet: false},
];
let a: any =10;
a = "hello";
a.toFixed(2); // Không có lỗi, nhưng có thể gây ra lỗi khi chạy

let c: unknown = 10;
c = "hello";
if (typeof c === "number") {
    c.toFixed(2); // Không có lỗi, vì đã kiểm tra kiểu dữ liệu trước khi gọi phương thức
}

let b: number | string | boolean = 10;
let status: "success" | "inactive" = "success"; 

let value: undefined | null = null; 
const studentA = {
    name: "Hiennt",
    age: null,
    hasPet: true
};


if(value != undefined && value != null) {
    console.log("value:" + value);
}
