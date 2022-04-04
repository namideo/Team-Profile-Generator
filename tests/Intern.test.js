const Intern = require('../lib/Intern');

test("creates an Intern object", () => {
    const testValue = "Intern";
    const intern = new Intern("Nick", 100, "email@email.com", "school");
    expect(intern.getRole()).toEqual(testValue)
});

test("", () => {
    const testValue = "school";
    const intern = new Intern("Nick", 100, "email@email.com", testValue);
    expect(intern.school).toEqual(testValue)
})

test("add school", () => {
    const testValue = "school";
    const intern = new Intern("Nick", 100, "email@email.com", testValue);
    expect(intern.getSchool()).toEqual(testValue)
});