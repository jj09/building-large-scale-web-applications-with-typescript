interface IPrintable {
    print(): void;
}

class Person implements IPrintable {
    private firstName: string;
    private lastName: string;

    constructor(fName: string, lName: string) {
        this.firstName = fName;
        this.lastName = lName;
    }

    hello(): string {
        return "Hello " + this.firstName + " " + this.lastName;
    }

    print(): void {
        console.log(this.hello());
    }
}

class Developer extends Person {
    private salary: number;

    constructor(fName: string, lName: string, salary: number) {
        super(fName, lName);
        this.salary = salary;
    }

    hello(): string {
        return super.hello() + " ($" + this.salary + ")";
    }
}

var p = new Developer("Jakub", "Jedryszek", 1000000);

p.print();