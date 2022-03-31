const Intern = require('../lib/Intern');

test("creates an Intern object", () => {
    const testValue = "Intern";
    const intern = new Intern();
    expect(intern.getRole()).toEqual(testValue)
});

test("add school", () => {
    const testValue = "school";
    const intern = new Intern();
    expect(intern.getSchool()).toEqual(testValue)
});