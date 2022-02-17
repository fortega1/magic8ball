
// Triggered when user presses the Ask button
function askEightBall() {
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

    let inputField = document.getElementById("userQuestion"); // Retrieves the users question

    let randomIndex = Math.round(Math.random()*messages.length); // Generates a random message

    document.canvas.src = messages[randomIndex]; // Displays a random message to the user

    inputField.value = ""; // Clears the users question
}
 
// Flips the Magic 8 Ball back over 
function flipEightBall() {
    document.canvas.src = "images/8ball2.png";
}

