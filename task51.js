//Create a program with two methods:
//1. printLetters(): prints letters from a-z
//2. printNumbers(): prints numbers from 1-9
//Call first printLetters() method, then printNumbers() and after that printLetters() again.

function printLetters() {
    for(let i = 10;i < 36; i++){
        process.stdout.write(i.toString(36));
    }
}
function printNumbers() {
    for(let i = 0; i <= 9; i++) {
        process.stdout.write(i.toString());
    }
}
process.stdout.write("\n");
printLetters();
process.stdout.write("\n");
printNumbers();
process.stdout.write("\n");
printLetters();
process.stdout.write("\n");
process.stdout.write("\n");