//Create a 5x5 Battleship game using a multidimensional array. Use asterisks to mark the ships. 
//Ask the user for coordinates to shoot and give feedback to the user whether they hit a ship or not. 
//Keep asking for as long as there are ships left. Keep count of how many shots the player needed.

/*Ships matrix
*        A B C D E
*      1 _ * _ _ _ 
*      2 _ * _ _ _
*      3 _ * _ _ _
*      4 _ _ * * *
*      5 _ _ _ _ _
*/      

//Create grid for the game
const BOARD_SIZE = 5;
let board = [];

for(let i = 0; i < BOARD_SIZE; i++){
    for(let j = 0; j < BOARD_SIZE; j++){
        board[i] = new Array(" ")
    }
}
//Lets set the ships
board[1][1] = '*';
board[2][1] = '*';
board[3][1] = '*';
board[4][2] = '*';
board[4][3] = '*';
board[4][4] = '*';
let numberOfShips = 6;
let x, y; //Variables for coordinates
let bodyCount = 0; //Variable for sunk ships
let shots = 0;

//Ask input for where to hit the ship
process.stdout.write("\nEnter x and y coordinates separated by space: ")
process.stdin.on("data", function(inputFromUser){
    let userInput = inputFromUser.toString().trim().split(" ");
    let x = Number(userInput[0]);
    let y = Number(userInput[1]);
     
    //Check whether shot is in range
    if(x > BOARD_SIZE || y > BOARD_SIZE){
        process.stdout.write("Input out of range. Please enter valid coordinates.");
    } else{
        if(board[x][y] == '*'){
            process.stdout.write("You hit a ship");
            board[x][y] = ' '; //Sets array column empty
            bodyCount++;
        }else {
            process.stdout.write("Miss!")
        }
        shots++;
    }

    if(bodyCount < numberOfShips){
        process.stdout.write("\nEnter x and y coordinates separated by space: ")
    }else{
        process.stdout.write("\nAll ships sunk! You needed " + Number(shots)+ " shots.");
        process.exit();
    }
})