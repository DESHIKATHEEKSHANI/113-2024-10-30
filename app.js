let clickCount = 0;
const maxClicks = 3;
const guessNumber = Math.floor((Math.random() * 10) + 1);
console.log(guessNumber);


function guess() {
    const displayNum = document.getElementById("displayNum").value;
    const msgDiv = document.getElementById("msg");
    const button = document.getElementById("guess");
    const chancesDiv = document.getElementById("chances");
    let imgBox = document.getElementById("imgBox");


    if (clickCount < maxClicks) {
        clickCount++;

        chancesDiv.innerHTML = `Chances left: ${maxClicks - clickCount}`;

        if (displayNum == guessNumber) {
            msgDiv.innerHTML = "Game Win!🤩🥳 YOU ARE CORRECT";
            imgBox.innerHTML=`<img src="https://visitpo.fr/wp-content/uploads/Gif-winner.gif" alt="">`;
            document.body.style.backgroundImage = "url(resources/win.gif.gif)";
            button.disabled = true;
        } else if (displayNum > guessNumber) {
            msgDiv.innerHTML = "Higher than the correct number😱😱";
            imgBox.innerHTML=`<img src="https://media.tenor.com/-wsLV6WhY-QAAAAM/try-again-keegan-michael-key.gif" alt="">`;
        } else{
            msgDiv.innerHTML = "Lower than the correct number😔😥";
            imgBox.innerHTML=`<img src="https://media.tenor.com/-wsLV6WhY-QAAAAM/try-again-keegan-michael-key.gif" alt="">`;
        }

        if (clickCount === maxClicks) {
            msgDiv.innerHTML = "Game Over! The Correct Number was " + guessNumber;
            button.disabled = true;
            imgBox.innerHTML=`<img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGtscnZtOWcwbDIzZW5raTlsc3JzOWx5MWJxMGU2ZTlmNm0yNnNkMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qtgkm1xVilBFWD63CT/giphy.webp" alt="">`;
        }
    }
}