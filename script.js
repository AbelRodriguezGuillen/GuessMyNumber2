'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); // INPUT FIELD? USE .VALUE
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // WHEN THERE IS NO INPUT
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No number!';
    displayMessage('⛔️ No number!');

    // WHEN PLAYER WINS
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // WHEN GUESS IS DIFFERENT THAN SECRET NUMBER
  } else if (guess !== secretNumber) {
    // document.querySelector('.message').textContent =
    //   guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
    displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    // document.querySelector('.message').textContent = '💥 You lost the game';
    displayMessage('💥 You lost the game');
    document.querySelector('.score').textContent = score = 0;
  }
});

//     // WHEN GUESS IS TOO HIGH
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📈 Too high!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💥 You lost the game';
//       document.querySelector('.score').textContent = score = 0;
//     }

//     // WHEN GUESS IS TOO LOW
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📉 Too low!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💥 You lost the game';
//       document.querySelector('.score').textContent = score = 0;
//     }
//   }
// });

// AGAIN BUTTON TO REPLAY GAME WITHOUT REFRESH
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
});
