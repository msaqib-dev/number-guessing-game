#! /usr/bin/env node

import inquirer from "inquirer";

// 1) Computer will generate a number

// 2) User input for guessing number

// 3) Compare user input with computer generated number and show result

const randomNumber = Math.floor(Math.random() * 6 + 1);3

const answer = await inquirer.prompt([
    {
        name: "UserGuessedNumber",
        type: "number",
        message: "Please guess a number between 1 to 6"
    }
])

if(answer.UserGuessedNumber === randomNumber){
    console.log("Congratulations! You guessed right number");
}else{
    console.log("You guessed wrong number")
}