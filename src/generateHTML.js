function generateManager(manager) {
    return `
    <h3></h3>
    `;
}



function generateHTML(manager) {
    return `
    ${manager.name}

`;

`<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Team Profile</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
            integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous"/>

  <link rel="stylesheet" href="assets/style.css"/>
</head>

<body>
    <header>
        <nav class="navbar" id="navbar">
            <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
        </nav>
    </header>

    <div class = "container">
        <div class = "row, col-6">
        </div>

    </div>
    
</body>

</html>
`};

module.exports = generateHTML;