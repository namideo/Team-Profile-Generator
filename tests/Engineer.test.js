const Engineer = require('../lib/Engineer');

test("creates an Engineer object", () => {
    const testValue = "Engineer";
    const engineer = new Engineer();
    expect(engineer.getRole()).toEqual(testValue)
});

test("returns github", () => {
    const testValue = "github";
    const engineer = new Engineer();
    expect(engineer.getGithub()).toEqual(testValue)
});