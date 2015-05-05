export class Person {
    firstName: string;
    lastName: string;

    constructor(fName: string, lName: string) {
        this.firstName = fName;
        this.lastName = lName;
    }

    getFullName(): string {
        return this.firstName + " " + this.lastName;
    }
}

export class Developer extends Person {
    salary: number;

    constructor(fName: string,
        lName: string,
        salary: number) {
        super(fName, lName);
        this.salary = salary;
    }

    getFullName(): string {
        return super.getFullName()
            + " ($" + this.salary + ")";
    }
}