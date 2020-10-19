//STEP 1
function halfNumber(number1){
    return number1/2;
}
var number1 = parseInt(prompt("Enter a number below :"));
window.console.log("Half of "+number1+" is "+halfNumber(number1)+".");

//STEP 2
var square;
 function squareNumber(number){
     return number*number;
 }
 var number = parseInt(prompt("Enter a number to be squared :"));
 window.console.log("The result of squaring the number " + number + " is " + squareNumber(number)+".");

 //STEP 3
 function percentOf(number1,number2){
    return (number1/number2)*100;
}
var number1 = parseInt(prompt("Enter First Number"));
var number2 = parseInt(prompt("Enter Second Number"));
window.console.log(number1+" is "+percentOf(number1,number2)+"% of "+number2+".");

//STEP 4
function findModulus(number1,number2){
    return number2%number1;
}
var number1 = parseInt(prompt("Enter First Number :"));
var number2 = parseInt(prompt("Enter Second Number :"));
window.console.log(findModulus(number1,number2)+" is the modulus of "+number1+" and "+number2+".");

//STEP 5
var arr = prompt("Enter numbers seperated by commas for addition :");
var Num_arr = arr.split(",");
for(var i=0;i<Num_arr.length;i++){
    Num_arr[i] = parseInt(Num_arr[i]);
}
function sumOfNumbers(Num_arr){
    var sum=0;
    for (var j=0;j<Num_arr.length;j++){
        sum=sum+Num_arr[j];
    }
    return sum;
}
var ans=sumOfNumbers(Num_arr);
window.console.log("Sum of " +arr+ " is "+ans+".");