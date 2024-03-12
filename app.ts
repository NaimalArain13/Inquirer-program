import inquirer from "inquirer";

//async function can be pause and resume the execution and it works through events
async function main() {

//Inquirer.prompt tasks an array of question objects
    const answers = await inquirer.prompt([
//this is the question object as an argument
        {
            name: "name",  //specifies the identifier
            type: "input",  //type property specifies the type of question
            message: "What is your name?"  //this is question being dispplayed on console
        }
    ]);
//here i am using object desctruting syntax.
//it takes name property from object 'answers' and store in the same 'name' variable
    const { name } = answers; 
//it can be either done this way
    //const name = answers.name
    console.log(`Hello, ${name}! Welcome to our CLI application.`);
}

main();