class Employee {
    constructor(private name: string) {}

    public show(): void {
        console.log(`Employee: ${this.name}`);
    }
}

class Department {
    private subDepartments: Department[] = [];
    private employees: Employee[] = [];

    constructor(private name: string) {}

    public addSubDepartment(department: Department): void {
        this.subDepartments.push(department);
    }

    public addEmployee(employee: Employee): void {
        this.employees.push(employee);
    }

    public show(): void {
        console.log(`Department: ${this.name}`);
        this.employees.forEach(employee => employee.show());
        this.subDepartments.forEach(department => department.show());
    }
}

export { Department, Employee };
