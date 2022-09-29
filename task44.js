const UTIL = require("util");
//Create a program that finds specific items in an array.
//1. Create an array with the following items: 55, 23, 6456, 324, 21, 234, 72, 21
//2. Ask the user what they want to search for in the integer array.
//3. Loop through the array and compare the values with the input given by the user.
//4. If the item is found, print out in which index the value was found.
//5. If the item is not found, print out a message saying item was not found.

let integerArray = [55, 23, 6456, 324, 21, 234, 72, 21];

//Prompt the user
process.stdout.write("\nThe number you'd like to search: ")

//Getting and storing the input
process.stdin.on("data", function(inputFromUser){
    let userNumber = Number(inputFromUser);
    //loop the array
    for(let i = 0; i < integerArray.length; i++){
        if(integerArray[i] == userNumber){
            process.stdout.write(userNumber + " was found in the index " + i + "\n\n");
            process.exit();
        }
    }
    process.stdout.write(userNumber + " was not found\n")
    process.exit();
})