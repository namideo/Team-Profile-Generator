const fs = require('fs');

function generateManager(manager) {
    return `
        <div class = "card col-6">
            <div class = card-header>Manager</div>
            <p>Manager Name: ${manager.name}</p>
            <p>ID: ${manager.ID}</p>
            <p>Email address:${manager.email}</p>
            <p>Office Number:${manager.officeNumber}</p>
        </div>
        `;
}

function generateEngineer(employee) {
    return ` 
    <div class = "card col-6">
        <div class = "card-header">Engineer</div>
            <p>Name: ${engineer.name}</p>
            <p>ID: ${engineer.ID}</p>
            <p>Email address: ${engineer.email}</p>
            <p>GitHub: ${engineer.github}</p>
        </div>
        `;
}

function generateIntern(intern) {
    return `
    <div class = "card col-6">
        <div class = "card-header">Intern</div>
        <p>Name: ${intern.name}</p>
        <p>ID: ${intern.ID}</p>
        <p>Email address: ${intern.email}</p>
        <p>School: ${intern.school}</p>
    </div>
    `;
}



function generateHTML() {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
                integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous"/>
    
      <link rel="stylesheet" href="style.css"/>
    </head>
    
    <body>
        <header>
            <nav class="navbar" id="navbar">
                <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
            </nav>
        </header>
    
        <div class = "container">
            <div class = "row">



            </div>
                   
                
            </div>
    
        </div>
        
    
    </body>
    
    </html>
    `;


}

module.exports = generateHTML;