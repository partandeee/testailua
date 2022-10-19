/*Create a program that keeps asking the user to input
numbers. These numbers are stored in an array. Keep asking
till zero is entered. After that the numbers are printed out in
a reverse order. Don’t use array methods for this but only
simple loops.*/

//Make an array
let numberArray = [];

//Prompt the user
process.stdout.write("This program reads numbers from the keyboard.\nAfter receiving a zero, it prints the numbers\n in reverse order. Please, start entering numbers.\nThe program will stop when you enter a zero\n\n")
process.stdout.write("\nEnter a number:")
//Get input
process.stdin.on("data", function(inputFromUser){
    process.stdout.write("Enter a number:")
    //Store input in a variable
    let givenNumber = Number(inputFromUser);

    //Check if input is 0 - if no, store in array - if yes, print out the array
    if(givenNumber == 0){
        process.stdout.write("\nReverse order: " + numberArray.reverse())
    }else{
        numberArray.push(givenNumber);
    }
});