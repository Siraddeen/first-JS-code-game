'use strict';
/*                          for  your understanding
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = ' ^_^ correct number';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 29;
console.log(document.querySelector('.guess').value);
*/

let secret_number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when ther is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'no secret_number 😒';

    // when player wins
  } else if (guess === secret_number) {
    document.querySelector('.message').textContent = ' ^_^ correct number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secret_number;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when guess is too high
  } else if (guess > secret_number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'number is high 📈';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game 🤣';

      document.querySelector('.score').textContent = 0;
    }
    // when guess is too low
  } else if (guess < secret_number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'number is low 📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game 🤣';

      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.message').textContent = 'start guessing';
  secret_number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = 20;

  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
