const mi = 1;
const ma = 100;
const ans = Math.floor(Math.random() * (ma - mi + 1)) + mi;
let attempts = 0;
let guess;
let running = true;
while (running) {
  guess = window.prompt(`Guess a number between ${mi} - ${ma}`);
  guess = Number(guess);
  if (isNaN(guess)) window.alert("Please  enter a valid number");
  else if (guess < mi || guess > ma)
    window.alert("Please enter number with in the range");
  else {
    attempts++;
    if (guess < ans) window.alert("TOO LOW! TRY AGAIN!");
    else if (guess > ans) window.alert("TOO HIGH! TRY AGAIN!");
    else {
      window,
        alert(
          `CORRECT! The answer was ${ans}. It took you ${attempts} attempts`
        );
      running = false;
    }
  }
}
