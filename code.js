
    const displayPlayerScore = document.querySelector(".player-score");
    const displayComputerScore = document.querySelector(".computer-score")
    const message = document.querySelector(".message");
    let playerScore = 0;
    let computerScore = 0;

    const buttons = document.querySelectorAll("button")
    buttons.forEach(button => button.addEventListener('click',()=>{
        if (playerScore >= 5 || computerScore >=5){
            return;
        }
        playerSelection = button.textContent;
        playRound(playerSelection)
        })
    )


    function getComputerChoice(){
        const choiceList = ["PAPER","ROCK","SCISSORS"];
        return choiceList[Math.floor(Math.random()*choiceList.length)];
    }


    function playRound(playerSelection){
        let computerSelection = getComputerChoice()
        let roundResult = ""
        let finalResult = ""
            if(playerSelection == computerSelection){
                roundResult = "Tie";
            }
            else if(playerSelection == "ROCK" && computerSelection == "SCISSORS"){
                playerScore += 1;
                roundResult = "You win. Rock beats scissors."
            }
            else if(playerSelection == "SCISSORS" && computerSelection == "PAPER"){
                playerScore += 1;
                roundResult = "You win. Scissors beat paper."
            }
            else if(playerSelection == "PAPER" && computerSelection == "ROCK"){
                playerScore += 1;
                roundResult = "You win. Paper beats rock."
            }
            else if(playerSelection == "SCISSORS" && computerSelection == "ROCK"){
                computerScore += 1;
                roundResult = "You lose. Rock beats scissors.";
            }
            else if(playerSelection == "PAPER" && computerSelection == "SCISSORS"){
                computerScore += 1;
                roundResult = "You lose. Scissors beat paper.";
            }
            else if(playerSelection == "ROCK" && computerSelection == "PAPER"){
                playerScore += 1;
                roundResult = "You lose. Paper beats rock."
            }

        displayComputerScore.textContent = computerScore;
        displayPlayerScore.textContent = playerScore;
        message.textContent = roundResult;

        if(playerScore >=5 && computerScore <5){
            finalResult = "Gams is over. You won the game! Reload the page to play again."
            message.textContent = finalResult;
        }
        else if(playerScore <5 && computerScore >=5){
            finalResult = "Game is over. You lost the game. Reload the page to play again."
            message.textContent = finalResult;
        }
        
    }
     

    // const reset = document.querySelector(".reset")
    // reset.onlick = reset();

    // function reset(){
    //     playerScore = 0;
    //     computerScore = 0;
    //     displayComputerScore.textContent = computerScore;
    //     displayPlayerScore.textContent = playerScore;
    //     playerSelection = "";
    //     computerSelection = "";
    // }


