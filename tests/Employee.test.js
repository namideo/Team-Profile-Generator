const Employee = require('../lib/Employee');

describe("Employee", () => {
    it("should return values for Manager, Engineer, and Intern", () => {
    const employee = new Employee();
    expect(employee).toEqual("object")
});

    it("Can set employee name", () => {
        const name = "Nick";
        const employee = new Employee(name);
        expect(employee.getName()).toEqual(name)
    });

    it("Can set employee id", () => {
        const testValue = 100;
        const employee = new Employee(testValue);
        expect(employee.getId()).toEqual(testValue)
    });

    it("Can set employee email", () => {
        const testValue = "email@email.com";
        const employee = new Employee(testValue);
        expect(employee.getEmail()).toEqual(testValue)
    });

    it("Can retrieve employee role", () => {
        const testValue = "Employee";
        const employee = new Employee("Nick", 100, "email@email.com");
        expect(employee.getRole()).toEqual(testValue)
    });
});