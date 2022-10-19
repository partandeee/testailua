let numbers = [];

for(let i = 0; i < 100; i++){
    let randomNumber = Math.floor(Math.random() * 1000)
    numbers.push(randomNumber);
    process.stdout.write(randomNumber + ", ")
}

let largest = numbers[0]
for(let i = 1; i < numbers.length; i++){
    if(numbers[i] > largest){
        largest = numbers[i];
    }
}
process.stdout.write("\nThe largest number is: " + largest);

let smallest = numbers[0]
for(let i = 1; i < numbers.length; i++){
    if(numbers[i] < smallest){
        smallest = numbers[i];
    }
}
process.stdout.write("\nThe smallest number is: " + smallest)