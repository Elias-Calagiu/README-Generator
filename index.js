const inquirer = require('inquirer');
const fs = require('fs');
// const generateMarkdown = require("");
// Psuedo Codez
// TODO: create a prompt of inquirer Q's
inquirer.prompt([
        {
            type: 'input',
            message: 'What is the title of your application?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Describe your application',
            name: 'Description',
        },
        {
            type: 'input',
            message: 'Enter installation instructions',
            name: 'Installation',
        },
        {
            type: 'input',
            message: 'Enter application usage information',
            name: 'Usage',
        },
        {
            type: 'input',
            message: 'Detail contribution guidelines here',
            name: 'Contributing',
        },
        {
            type: 'input',
            message: 'Detail test instructions',
            name: 'Tests',
        },
        {
            type: 'list',
            message: 'Choose your license!',
            name: 'License',
            choices: ["GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "MIT License", "Boost Software License 1.0", "The Unlicense", "No license"],
        },
        {
            type: 'input',
            message: 'Enter GitHub Link',
            name: 'GitHub',
        },
        {
            type: 'input',
            message: 'Enter email address',
            name: 'Email',
        },
    ])
    .then((response) => {
      const mdOutput =  `# 09 Node.js Homework: Professional README Generator

      ## Application Title
      * ${response.title}
      * ${response.Description}
      * ${response.Installation}
      * ${response.Usage}
      * ${response.Contributing}
      * ${response.Tests}
      * ${response.License}
      * ${response.GitHub}
      * ${response.Email}
      ---`

    
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <!-- BootStrap CDN -->
//     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
//         integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
//     <title>Mini Project</title>
// </head>
// <body>
//     <!-- NavBar -->
//     <nav class="navbar navbar-light bg-light">
//         <div class="container-fluid">
//             <h1 class="navbar-brand mb-0 h1" id="app-title">${response.title}</h1>
//         </div>
//     </nav>
//     <!-- Main Content Container -->
//     <main class="container">
//         <section class="row border">
//             <article class="col-6">
//                 <div class="card" style="width: 18rem;">
//                     <img src="https://i.postimg.cc/brStT1tN/bj.jpg" class="card-img-top" alt="Buddy Christ">
//                     <div class="card-body">
//                         <h5 class="card-title">
//                             Title: ${response.title}<br>
//                             Description: ${response.Description}<br>
//                             Installation Instructions: ${response.Installation}<br>
//                             Application Usage: ${response.Usage}<br>
//                             Contribution Guidelines: ${response.Contributing}<br>
//                             Testing Instructions: ${response.Testing}<br>
//                         </h5>
//                         <p class="card-text" id="personalData"></p>
//                     </div>
//             </article>
//             <article class="col-6">
//                 <div class="card" style="width: 18rem;">
//                     <img src="https://i.postimg.cc/brStT1tN/bj.jpg" class="card-img-top" alt="Buddy Christ">
//                     <div class="card-body">
//                         <h5 class="card-title">Personal Details</h5>
//                         <p class="card-text" id="personalData">
//                             <a href="${response.GitHub}">GitHub Repo</a>
//                             <a href="${response.Email}">Email Address</a>
//                         </p>
//                     </div>
//                 </div>
//             </article>
//         </section>
//     </main>
//     <!-- BootStrap JS -->
//     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
//         integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
//         crossorigin="anonymous"></script>
// </body>
// </html>`

        fs.writeFile(`README.md`, mdOutput, err => {
            if (err) {
                console.log(err);
            } else {
                console.log("well done jabrone")
            }
        })

    })

