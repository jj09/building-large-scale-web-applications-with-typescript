export class Person {
	private firstName;
	private lastName;

	constructor(fName: string, lName: string) {
		this.firstName = fName;
		this.lastName = lName;
	}

	getFullName(): string {
		return this.firstName + " " + this.lastName
	}

	print() {
		console.log("Hello " + this.getFullName());
	}
}

export class Developer extends Person {
	private salary;

	constructor(fName: string, lName: string, salary: number) {
		super(fName, lName);
		this.salary = salary;
	}

	getFullName(): string {
		return super.getFullName() 
		+ " ($" + this.salary + ")";
	}
}