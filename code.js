
    
    const displayChoice=document.querySelector(".displaychoice");
    const result=document.querySelector(".result");
    const displayScore=document.querySelector(".displayScore");
    const final=document.querySelector(".final");
    const restart=document.querySelector("#restart")
    let playerSelection;
    let computerSelection;
    let playerScore=0;
    let computerScore=0;


    
    const weapons=document.querySelectorAll("button")

    weapons.forEach(button => button.addEventListener('click',()=>{
            playerSelection=button.textContent;
            computerSelection=getComputerChoice();
            displayChoice.textContent=`${playerSelection}`+" : "+`${computerSelection}`;
            result.textContent= `${playRound(playerSelection,computerSelection)}`;
            displayScore.textContent=`Your score : ${playerScore} vs Computer's score : ${computerScore}`;
            
        }))

    function getComputerChoice(){
        const computerChoice=["PAPER","ROCK","SCISSORS"];
        return computerChoice[Math.floor(Math.random()*computerChoice.length)];
    }

    function playRound(playerSelection,computerSelection){
            if(playerSelection==computerSelection){
                return("Tie");
            }
            else if(playerSelection=="ROCK"&&computerSelection=="SCISSORS"||
            playerSelection=="SCISSORS"&&computerSelection=="PAPER"||
            playerSelection=="PAPER"&&computerSelection=="ROCK"){
                playerScore+=1;
                return("You won!")
            }
            else{
                computerScore+=1;
                return("Computer won!");
            }}


function gameover(){
    if(computerScore==5||playerScore==5){
        return computerScore>playerScore?("Game over...Computer won. want to play again?")
        :computerScore==playerScore?("Game over... Tie")
        :("Game over...You are the winner!")
        }   
}
        

function reset(){
    playerScore=0;
    computerScore=0;
    playerSelection="";
    computerSelection="";
}


