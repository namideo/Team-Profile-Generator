const Manager = require('../lib/Manager');


test("creates a Manager object", () => {
    const testValue = "Manager";
    const manager = new Manager("Nick", 100, "email@email.com", "github");
    expect(manager.getRole()).toEqual(testValue)
});

test("", () => {
    const testValue = 100;
    const manager = new Manager("Nick", "email@email.com", "github", 100);
    expect(manager.officeNumber).toEqual(testValue)
})

test("applies office number", () => {
    const testValue = 100;
    const manager = new Manager("Nick", "email@email.com", "github", 100);
    expect(manager.getNumber()).toEqual(testValue)
});