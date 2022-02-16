/* 
Create an "ask" function that when clicked, will choose
a random 8ball image and insert it into your "answers" div.

Replace the input field with the user's question when 
displaying the answer.
*/

function ask() {
    const messages = [
        "images/magic8ball_1.png",
        "images/magic8ball_2.png",
        "images/magic8ball_3.png",
        "images/magic8ball_4.png",
        "images/magic8ball_5.png",
        "images/magic8ball_6.png",
        "images/magic8ball_7.png",
        "images/magic8ball_8.png",
        "images/magic8ball_9.png",
        "images/magic8ball_10.png",
        "images/magic8ball_11.png",
        "images/magic8ball_12.png",
        "images/magic8ball_13.png",
        "images/magic8ball_14.png",
        "images/magic8ball_15.png",
        "images/magic8ball_16.png",
        "images/magic8ball_17.png",
        "images/magic8ball_18.png",
        "images/magic8ball_19.png",
        "images/magic8ball_20.png"
    ];

    const inputField = document.getElementById("userQuestion");
    const btn = document.getElementById("askButton");

        btn.addEventListener('click', () => {
            let randomIndex = Math.round(Math.random()*messages.length);
            document.canvas.src = messages[randomIndex];
            inputField.value = " ";
        })
    }

function resetEightBall() {
    document.canvas.src = "images/8ball2.png";
}

