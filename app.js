let clickCount = 0;  
const maxClicks = 3; 

function guess() {  
    const displayNum = document.getElementById("displayNum").value;  
    const msgDiv = document.getElementById("msg");  
    const button = document.getElementById("guess");  
    const chancesDiv = document.getElementById("chances");  

    const guessNumber = Math.floor((Math.random() * 10) + 1); 
    

    if (clickCount < maxClicks) {  
        clickCount++;  

        chancesDiv.innerHTML = `Chances left: ${maxClicks - clickCount}`;  

        if (displayNum == guessNumber) {  
            msgDiv.innerHTML = "Game Win! YOU ARE CORRECT";  
            button.disabled = true;  
        } else if (displayNum > guessNumber) {  
            msgDiv.innerHTML = "Higher than the correct number";  
        } else {  
            msgDiv.innerHTML = "Lower than the correct number";  
        }  

        if (clickCount === maxClicks) {  
            msgDiv.innerHTML = "Game Over! The Correct Number was " + guessNumber;  
            button.disabled = true;  
        }  
    }  
}