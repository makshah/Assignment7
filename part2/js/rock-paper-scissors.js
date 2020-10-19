var  computer_choice;
var user_choice = (window.prompt("Enter your choice rock, paper or scissors :")).toLowerCase();
var random_number = Math.random();
if (user_choice === 'paper' || user_choice === 'rock' || user_choice === 'scissors'){
    if (random_number < 0.30) computer_choice = "rock"; 
    else if (random_number >= 0.30  && random_number < 0.65) computer_choice = "paper";
    else computer_choice = "scissors";
    window.console.log("You chose "+user_choice+" Computer chose " +computer_choice);
    game(user_choice,computer_choice);
}
else {
    window.alert("You have entered invalid choice...");
}
function game(user_choice,computer_choice){
    if(user_choice==="scissors"){
        if(user_choice === computer_choice){
            window.alert("The result is a tie!");
        }
        else if(computer_choice==="rock"){
            window.alert("Computer chose rock & User chose scissors \n Computer Wins!");
        }
        else{
            window.alert("User chose scissors & Computer chose paper \n User Wins!");
        }
    }
    if(user_choice==="rock"){
        if(user_choice === computer_choice){
            window.alert("The result is a tie!");
        }
        else if(computer_choice==="scissors"){
            window.alert("User chose Rock & Computer chose Scissors \n User Wins!");
        }
        else{
            window.alert("Computer chose Paper & User chose Rock \n Computer Wins!");
        }
    }
    if(user_choice==="paper"){
        if(user_choice === computer_choice){
            window.alert("The result is a tie!");
        }
        else if(computer_choice==="rock"){
            window.alert("User chose Paper & Computer chose Rock \n User Wins!");
        }
        else{
            window.alert("Computer chose Scissors & User chose Paper \n Computer Wins!");
        }
    }
}