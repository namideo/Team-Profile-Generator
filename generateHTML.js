const fs = require("fs");

function generateManager(manager) {
    return `
        <div class = "card col-4">
            <div class = card-header>
            <h3>${manager.name}</h3>
            <i class="fa-solid fa-mug-hot"></i><h4>Manager<h4>
            </div>
            <p>ID: ${manager.id}</p>
            <p> Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
            <p>Office Number: ${manager.officeNumber}</p>
        </div>
        `;
}

function generateEngineer(engineer) {
    return ` 
    <div class = "card col-4">
        <div class = "card-header">
        <h3>${engineer.name}</h3>
        <i class="fa-solid fa-glasses"></i><h4>Engineer</h4>
        </div>
            <p>ID: ${engineer.id}</p>
            <p> Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p>GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</p></a>
        </div>
        `;
}

function generateIntern(intern) {
    return `
    <div class = "card col-4">
        <div class = "card-header">
        <h3>${intern.name}</h3>
        <i class="fa-solid fa-user-graduate"></i><h4>Intern</h4>
        </div>
        <p>ID: ${intern.id}</p>
        <p> Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
        <p>School: ${intern.school}</p>
    </div>
    `;
};

function generateHTML(response) {

    let htmlArray = []

    const employee = response;

    for (let i = 0; i < employee.length; i++) {
        console.log(employee[i]);
        let role = employee[i].getRole();

        if (role === "Manager") {
            const managerCard = generateManager(employee[i]);

            htmlArray.push(managerCard);
        }

        if (role === "Engineer") {
            const engineerCard = generateEngineer(employee[i]);

            htmlArray.push(engineerCard);
        }

        if (role === "Intern") {
            const internCard = generateIntern(employee[i]);

            htmlArray.push(internCard);
        }

    }

    const teamCards = htmlArray.join("");

    const generateTeam = generatePage(teamCards);
    return generateTeam;
}


const generatePage = function (teamCards) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Team Profile</title>
      <script src="https://kit.fontawesome.com/3f947f4d9f.js" crossorigin="anonymous"></script>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
                integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous"/>
    
      <link rel="stylesheet" href="dist/style.css"/>
    </head>
    
    <body>
        <header>
            <nav class="navbar" id="navbar">
                <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
            </nav>
        </header>
    
        <div class = "container">
            <div class = "row">
            ${teamCards}
            </div>
        </div>
        
    
    </body>
    
    </html>
    `;


}

module.exports = generateHTML;