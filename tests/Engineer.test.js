const Engineer = require('../lib/Engineer');

test("creates an Engineer object", () => {
    const testValue = "Engineer";
    const engineer = new Engineer("Nick", 100, "email@email.com", "github");
    expect(engineer.getRole()).toEqual(testValue)
});

test("", () => {
    const testValue = "github";
    const engineer = new Engineer("Nick", 100, "email@email.com", testValue);
    expect(engineer.github).toEqual(testValue)
})

test("returns github", () => {
    const testValue = "github";
    const engineer = new Engineer("Nick", 100, "email@email.com", testValue);
    expect(engineer.getGithub()).toEqual(testValue)
});