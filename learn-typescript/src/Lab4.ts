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