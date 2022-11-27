// let location1=3;
// let location2=4;
// let location3=5;
let location1 = Math.floor(Math.random() * 6);
let location2 = location1 + 1;
let location3 = location2 + 1;
let guess;
let hits = 0;
let guesses = 0;
let isSink = false;

while (isSink == false) {
    guess = prompt('Ready, aim, fire! (enter a number from 0-6):');
    if (guess < 0 || guess > 6) {
        alert('Please enter a valicell number');
    } else {
        guesses++;
        if (guess == location1 || guess == location2 || guess == location3) {
            alert('HIT!');
            hits++;
            if (hits == 3) {
                isSink = true;
                alert('You sank my battleship!');
            }
        } else {
            alert('MISS');
        }
    }
}
let stats = 'You took ' + guesses + ' guesses to sink the battleship, ' +
    'which means your shooting accuracy was ' + (3 / guesses);
alert(stats);