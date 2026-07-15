class Student {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;;
        this.name = name;
}
display() {
console.log(`ID: ${this.id}`);
console.log(`Name: ${this.name}`);   
}
}
const student1 = new Student(1, "Hiennt");
student1.display();

//bai2
interface User {
    id: number;
    email: string;
    phone?: string;
}

const user1: User = {
    id: 1,
    email: "hiennt@gmail.com",
    phone: "0332405972"
};
const user2: User = {
    id: 2,
    email: "hien22@gmail.com",
    phone: "0332405972"
};
console.log(user1);
console.log(user2);

//bai3
type Product = {
    id: number;
    name: string;
    price: number;
};

const product1: Product = {
    id: 1,
    name: "Iphone",
    price: 1000
};
const product2: Product = {
    id: 3,
    name: "oppo",
    price: 500
};
console.log(product1);
console.log(product2);
//bai4

type status = "loading"| "success" | "error";
function logStatus(status: status) {
  if (status === "loading") {
    console.log("Đang tải...");
  } else if (status === "success") {
    console.log("Thành công!");
  } else {
    console.log("Có lỗi xảy ra!");
  }
}
logStatus("loading");
logStatus("success");
logStatus("error");

//bai5
function identity<T>(value: T): T {
    return value;
}

console.log(identity<number>(10));
console.log(identity<string>("Hello"));
console.log(identity<boolean>(true));

