class Person {
    private firstName: string;
    private lastName: string;

    constructor(fName: string, lName: string) {
        this.firstName = fName;
        this.lastName = lName;
    }

    getFullName(): string {
        return this.firstName + " " + this.lastName;
    }
}

class Developer extends Person {
    private salary: number;

    constructor(fName: string, lName: string, salary: number) {
        super(fName, lName);
        this.salary = salary;
    }

    getFullName(): string {
        return super.getFullName() + " ($" + this.salary + ")";
    }
}
