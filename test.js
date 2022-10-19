console.log(process.argv);
if(process.argv.includes("greet")){
    process.stdout.write("Hello ");
}
else if(process.argv.includes("bye")){
    process.stdout.write("Goodbye ");
}

function test(name){
    process.stdout.write(name.toString());
}