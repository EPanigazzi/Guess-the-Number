let randomNumber = Math.floor(Math.random() * 100) + 1;
let inputField = document.querySelector('#inputField');
let buttonSubmit = document.querySelector('#buttonSubmit');
        
let attempts = document.querySelector('#results p');
let messageResult= document.querySelector('.messageResult');
let closeNumber = document.querySelector('.closeNumber');
       
        
let attemptsArray = [];
let attemptsCounter = 1;

       
       
        
function checkValues(){
            
    let userNumber = Number(inputField.value);
            
    if(userNumber > 100 || userNumber < 0 || !userNumber){
        alert('You were wrong!, you have to put a number from 1 to 100')
        inputField.value = '';
        inputField.focus();
        return;
    }
            
            
            
            
    if (attemptsCounter === 1){
        attempts.textContent = 'Attempts ';
        attempts.classList.add('backgrounAttempts');
    }
            //--------------------------------------------------
    attempts.textContent += '- ' + userNumber;
           
    attemptsArray.unshift(userNumber);
            
            
    for ( var i=0; i < attemptsArray.length; i++){
        attemptsArray[i].value;
    }
            
            
//-------------------------------------------------
          
    if (randomNumber === userNumber){
        messageResult.textContent = 'Congratulations! You win!';
        messageResult.classList.add('backgrounWin');
        closeNumber.textContent = '';
        closeNumber.classList.remove('backgrounBigger','backgrounSmaller');
        gameOver();
                
    }else if (attemptsCounter === 10){
        messageResult.textContent = "I'm sorry!, you don't have any more attempts, You lost!";
        messageResult.classList.add('backgrounLost');
        closeNumber.textContent = '';
        closeNumber.classList.remove('backgrounBigger','backgrounSmaller');
        gameOver();
                
    }else{
        messageResult.textContent = 'Wrong number';
        messageResult.classList.add('backgrounWrong');
        closeNumber.classList.add('backgrounBigger','backgrounSmaller');
                
    if (userNumber < randomNumber){
        closeNumber.textContent = 'The random number is bigger';
        closeNumber.classList.remove('backgrounSmaller');

                
    }else if (userNumber > randomNumber){
        closeNumber.textContent = 'The random number is smaller';
    }
            
    }
        attemptsCounter ++;
        inputField.value = '';
        inputField.focus();
            
    }
       
       
    buttonSubmit.addEventListener('click', checkValues);
       
       
function gameOver() {
        inputField.disabled = true;
        buttonSubmit.disabled = true;
        buttonNewGame = document.createElement('button');
        buttonNewGame.textContent = 'Start new game';
        document.body.appendChild(buttonNewGame);
        buttonNewGame.addEventListener('click', newGame)
        buttonNewGame.classList.add('btn','btn-warning','btn-lg','btn-block','container','mt-2');
             
}
       
function newGame(){
        attemptsCounter = 1;
        
        for ( var i=0; i < attempts.length; i++){
               attempts[i].textContent = ''; 
        }
        buttonNewGame.parentNode.removeChild(buttonNewGame);
        inputField.disabled = false;
        buttonSubmit.disabled = false;
        messageResult.textContent = '';
        attempts.textContent = '';
        attempts.classList.remove('backgrounAttempts');
        inputField.value = '';
        inputField.focus();
        messageResult.classList.remove('backgrounLost','backgrounWin','backgrounWrong');
        closeNumber.classList.remove('backgrounBigger','backgrounSmaller');
           
        randomNumber = Math.floor(Math.random() * 100) + 1;
}