'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number !'  ;

// document.querySelector('.number').textContent = 13;

// document.querySelector('.guess').value * 1;

// console.log(document.querySelector('.guess').value);

// document.querySelector('.guess').value =23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20 + 1);
// console.log(number);
// document.querySelector('.number').innerHTML = secretNumber;

let score = 20;
let highscore = 0;

let displayMessage = function(message) { 
    document.querySelector('.message').innerHTML = message;
}

// ------------get value from user via check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value * 1;
  // -----------------  no input
  if (!guess) {
    // let message = (document.querySelector('.message').textContent =
    //   '🛑 Please Input Number');
    // console.log(message);
    displayMessage('🛑 Please Input Number')

    //When players win:
  } else if (guess === secretNumber) {
    // document.querySelector('.message').innerHTML = '🎉 Correct Number ! ';
    displayMessage('🎉 Correct Number ! ');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').innerHTML = secretNumber;

    if(score > highscore) {
        highscore = score; 
        document.querySelector('.highscore').innerHTML = highscore; 
    } 

    // when guess is wrong:  ( refracturing code).
  }else if (guess !== secretNumber) { 
    if (score > 1) {

        // toán tử 3 ngôi.
        // document.querySelector('.message').innerHTML = guess > secretNumber ? '⬇️ Too High! ' : '⬆️ Too Low!';
        displayMessage(guess > secretNumber ? '⬇️ Too High! ' : '⬆️ Too Low!');

        score--;
        document.querySelector('.score').innerHTML = score;
      } else {
        // document.querySelector('.message').innerHTML = '🔫 Loser !!! ';
        displayMessage('🔫 Loser !!! ');
      }

  }

    // guess too high
//   else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').innerHTML = '⬇️ Too High! ';
//       score--;
//       document.querySelector('.score').innerHTML = score;
//     } else {
//       document.querySelector('.message').innerHTML = '🔫 Loser !!! ';
//     }

//     // guess too low
//   } else if (guess < secretNumber) {
//     if (score > 0) {
//       document.querySelector('.message').innerHTML = '⬆️ Too Low! ';
//       score--;
//       document.querySelector('.score').innerHTML = score;
//     } else {
//       document.querySelector('.message').innerHTML = '🔫 Loser !!! ';
//     }
//   }
});

// again button:

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
//   document.querySelector('.message').innerHTML = 'Start guessing...';
displayMessage('Start guessing...');
  document.querySelector('.score').innerHTML = 20;
  document.querySelector('.number').innerHTML = "?";
  document.querySelector('.guess').value = '';
});
