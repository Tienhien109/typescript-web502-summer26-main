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