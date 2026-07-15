class person {
    // property
    name: string;
    constructor(name: string) {
        this.name = name;
}
greet() {
    console.log(`Hello, my name is ${this.name}`);
}
}   
const person1 = new person("Hien");
person1.greet();

interface Student {
    name: string;
    age: number;
    isDone?: boolean;
}

const s2: Student = {
    name: "Hiennt",
    age: 20,
    isDone: true
};

console.log(s2);

type Product = {
    title: string;
    price: number;
}
type status = "success" | "error";
const statusSuccess: status = "success";

type Person = {
    name: string;
};

type Employee = {
    id: string;
};

type EmployeeInfo = Person & Employee;

enum Role {
    ADMIN = "admin",
    USER = "user",
}


console.log(Role.USER);
function showInfo<T>(data: T): T {
    return data;
}
showInfo<number>(10);
showInfo<string>("Hiennt");