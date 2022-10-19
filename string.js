process.stdout.write("Enter something : ");

process.stdin.on("data", function(inputFromUser){
    process.stdout.write("User entered : " + inputFromUser.toString().trim().toUpperCase() + " it shall end now");
    process.exit();
});
