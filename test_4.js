let game = prompt("Guess the number from 0 to 100", "" );
let attempt = 0
let number = Math.ceil(Math.random() * 100);

while (game != number) {
   if (game > number) {
      game = prompt("Too high","");
      attempt++;
   }
   if (game < number) {
      game = prompt ("Too Low", "");
      attempt++;
   }
}

alert("You found the number! " + number + ". The number of your attempts - " + attempt);