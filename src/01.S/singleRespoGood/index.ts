abstract class Employee {
    abstract calculateSalary(): void
    abstract shareTasks(): void
}

class Developers extends Employee {
    calculateSalary(): void { }
    shareTasks(): void { }
}

class Workers extends Employee {
    calculateSalary(): void { }
    shareTasks(): void { }
}