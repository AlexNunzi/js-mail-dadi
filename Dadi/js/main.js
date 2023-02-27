const userDice = Math.floor(Math.random() * 6 + 1);
const computerDice = Math.floor(Math.random() * 6 + 1);

console.log(`Il dado del giocatore ha dato come risultato: ${userDice}`);
console.log(`Il dado del computer ha dato come risultato: ${computerDice}`);

if(userDice > computerDice){
    console.log('Hai vinto');
} else if (userDice < computerDice){
    console.log('Hai perso');
} else {
    console.log('Avete pareggiato');
}