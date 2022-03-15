const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = require('./src/generateHTML');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const addManager = () => {
    return inquirer.prompt([

        {
            type: 'input',
            name: 'name',
            message: 'Manager name'
        },
        {
            type: 'input',
            name: 'ID',
            message: 'Input manager Id'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Input manager email address'
        },
        {   type: 'input',
            name: 'officeNumber',
            message: 'Office Number'
        },
    ])
};

    const addEmployee = () => {
        return inquirer.prompt([
    
        {
            type: 'list',
            name: 'employee',
            message: 'Select an employee position',
            choices: ['Engineer', 'Intern'] 
        },
        {
            type: 'input',
            name: 'ID',
            message: 'Input employee Id'
        },
        {   
            type: 'input',
            name: 'email',
            message: 'Input employee email address'
        },
        {
            type: 'input',
            name: 'github',
            message: 'GitHub username?',
            when: (input) => input.employee = "Engineer"          
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school are you currently enrolled in?', 
            when: (input) => input.employee = "Intern"
         },
         {
            type: 'list',
            name: 'newEmployee',
            message: 'Add employee?',
            choices: ['yes', 'no']
         },
    ])
};

function init() {
    addManager()
    .then((response) => {fs.writeFile("generateHTML.js", generateHTML(response))
    .catch((err) => console.error(err));
    }
    )}

init();