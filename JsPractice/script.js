// add tweet dom practice

// const username = document.querySelector("#username");
// const tweet = document.querySelector("#tweet");
// const tweetContainer = document.querySelector(".tweets"); // Use class, not id
// const submit = document.querySelector("#submit-btn");

// submit.addEventListener("click", function (e) {
//   e.preventDefault();

//   const usernameInput = username.value.trim();
//   const tweetInput = tweet.value.trim();

//   if (usernameInput && tweetInput) {
//     const newLI = document.createElement("li");
//     newLI.innerText = `${usernameInput} says: ${tweetInput}`;
//     tweetContainer.appendChild(newLI);

//     // Clear input fields after submit
//     username.value = "";
//     tweet.value = "";
//   }
// });

// 2) ping pong dom practice

const player1Score = document.querySelector("#player1-score");
const player2Score = document.querySelector("#player2-score");

const btn1 = document.querySelector("#player1");
const btn2 = document.querySelector("#player2");
const reset = document.querySelector("#reset");

const selectList = document.querySelector("#select");

let isGameOver = false;

reset.addEventListener("click", function (e) {
  isGameOver = false;
  player1Score.innerText = 0;
  player2Score.innerText = 0;
  player1Score.classList.remove("redColor", "greenColor");
  player2Score.classList.remove("redColor", "greenColor");
  selectList.value = 1;
});

selectList.addEventListener("change", function (e) {
  const selectValue = parseInt(selectList.value);
  console.log(selectValue);
});

btn1.addEventListener("click", function (e) {
  if (!isGameOver) {
    let score1 = parseInt(player1Score.innerText);
    let winningScore = parseInt(selectList.value);
    score1++;
    let scoreOne = (player1Score.innerText = score1);
    let player1finalScore = parseInt(scoreOne);

    if (player1finalScore == winningScore) {
      player1Score.classList.add("greenColor");
      player2Score.classList.add("redColor");
      isGameOver = true;
      console.log("Player 1 wins");
    }
  }

  //   console.log(score1);
});

btn2.addEventListener("click", function (e) {
  if (!isGameOver) {
    let score2 = parseInt(player2Score.innerText);
    let winningScore = parseInt(selectList.value);
    score2++;
    let scoreTwo = (player2Score.innerText = score2);
    let player2FinalScore = parseInt(scoreTwo);
    if (player2FinalScore == winningScore) {
      player1Score.classList.add("redColor");
      player2Score.classList.add("greenColor");
      isGameOver = true;
      console.log("Player 2 wins");
    }
  }
  //   console.log(score2);
});
