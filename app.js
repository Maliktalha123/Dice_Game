let userNumber = document.getElementById("userNumber");
let resultNumber = document.getElementById("resultNumber");
let message = document.getElementById("message");

function diceGame(number) {
  userNumber.innerText = number;
  let randomNumber = Math.ceil(Math.random() * 6);
  resultNumber.innerText = randomNumber;
  if (number == randomNumber) {
    message.innerText = "Congrats ! You Win";
    message.style.color = "green";
  } else {
    message.innerText = "Sorry, You Loose ";
    message.style.color = "red";
  }
}
