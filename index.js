const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = require('./generateHTML');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const team = [];



const addManager = () => {
    return inquirer.prompt([

        {
            type: 'input',
            name: 'name',
            message: 'Manager name'
        },
        {
            type: 'input',
            name: 'id',
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

    .then(response => {
        let manager = new Manager(response.name, response.id, response.email, response.officeNumber);
        team.push(manager)
    })

};

    const addEmployee = () => {
        return inquirer.prompt([
    
        {
            type: 'list',
            name: 'employee',
            message: 'Select employee position',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: 'Employee name'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Input Id'
        },
        {   
            type: 'input',
            name: 'email',
            message: 'Input email address'
        },
        {
            type: 'input',
            name: 'github',
            message: 'GitHub username?',
            when: (input) => (input.employee) === "Engineer"      
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school are you currently enrolled in?',
            when: (input) => (input.employee) === "Intern"
        },
        {
            type: 'list',
            name: 'newEmployee',
            message: "Add another employee?",
            choices: ["yes", "no"]
        }
    ])

        .then(function(response) {
            let newMember;
            if (response.employee === "Engineer") {
                newMember = new Engineer(response.name, response.id, response.email, response.github);
            } else if (response.employee === "Intern") {
                newMember = new Intern(response.name, response.id, response.email, response.school);
            }
            team.push(newMember);

                if (response.newEmployee === "yes") {
                    return addEmployee(team);
                } else {
                    return team;
                }
            })
    };

    function init() {
        addManager()
        .then(addEmployee)

            .then(() => {
                fs.writeFileSync("output.html", generateHTML(team))
            }) 
            
            .catch((error) => {
                console.log(error)
            })
    
        .catch((error) => { console.log(error)});
        
        };
    

    init();
