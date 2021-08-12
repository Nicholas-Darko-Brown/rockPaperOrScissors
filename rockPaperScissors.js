const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
  
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
      return userInput;
    }else {
      console.log('Invalid input, kindly check.');
    }
  }
  
  
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
  
   switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
  };
  
  
  
  const determineWinner = (userChoice,  computerChoice) => {
    if (userChoice === 'bomb'){
      return 'Congrats, you won!';
    }
    if (userChoice === computerChoice){
      return 'Game was a tie!';
    } 
    if (userChoice === 'rock'){
      if (computerChoice === 'paper'){
        return 'Oops! the computer won!';
      } else {
        return 'Congrats, you won!';
      }
    }
    if (userChoice === 'paper'){
      if (computerChoice === 'scissors'){
         return 'Oops! the computer won!';
      } else {
        return 'Congrats, you won!';
      }
    }
    if (userChoice === 'scissors'){
      if (computerChoice === 'rock'){
        return 'Oops! the computer won!';
      } else {
        return 'Congrats, you won!';
      }
    }
  };
  
  
  
  const playGame = () => {
    const userChoice = getUserChoice('paper');
    const computerChoice = getComputerChoice();
    console.log('The user threw: ' + userChoice);
    console.log('The computer threw: ' +  computerChoice);
  
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame();
    
  
  
  
  
  
  
  