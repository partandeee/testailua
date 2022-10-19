let integerArray = [5, 7, 32, 31, 8];
let doubleArray = [12.4, -13.55, 67.44];
let stringArray = ["Helsinki", "Lissabon", "New York", "Shanghai"];

/*Then print out the following:
- “The value in the index number 3 is: “ and the value from the string array.
- “The fourth item in the int array is: “ and the value from the int array.
- “In the double array there are xx items” where xx is the size of the array.
- The whole content of the integer array with a loop.
- The whole content of the double array from the last item to the first.
- Lastly, in a loop go through the string array and set all the values to be “empty” and print it out as a
comma separated string.
*/
process.stdout.write("\nThe value in the index number 3 is: " + stringArray[3]);
process.stdout.write("\nThe fourth item in the int array is: " + integerArray[3]);
process.stdout.write("\nIn the double array there are " + doubleArray.length + " items.")

for(let i = 0; i < integerArray.length; i++){
    process.stdout.write("\n" + integerArray[i]);
}
process.stdout.write("\nDouble array contents from last to first:")
for(let i = doubleArray.length - 1; i >= 0; i--){
    process.stdout.write("\n" + doubleArray[i]);
}
for(let i = 0; i < stringArray.length; i++){
    stringArray[i] = "empty"
}
process.stdout.write("\nNew string array:" + stringArray.toString())