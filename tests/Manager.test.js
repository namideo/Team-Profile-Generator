const Manager = require('../lib/Manager');


test("creates a Manager object", () => {
    const testValue = "Manager";
    const manager = new Manager();
    expect(manager.getRole()).toEqual(testValue)
});

test("applies office number", () => {
    const testValue = 100;
    const manager = new Manager();
    expect(manager.getNumber()).toEqual(testValue)
});