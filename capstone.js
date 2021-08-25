const readline = require('readline-sync');
const playerName = readline.question('Please enter your name: ');

    readline.question(`Welcome ${playerName} to Mobsters\nThis game is based in the dangerous streets of New York in the year 1985\nThe mobs are taking over and you are the only cop willing to go against them\nPlease press 'Enter' to begin`);


const enemies = ['Rickey Guns', 'Bugsy', 'Al Capone', 'Lucky Luciano'];
const rewards = ['money', 'a new weapon', 'a bullet proof vest', 'a new crime tip'];

    var badge = [];

let playerHealth = 70;
const pickUp = rewards[Math.floor(Math.random()*rewards.length)];

    const playerMoves = ['walk', 'print', 'exit'];
    
function game(){
    let enemyHealth = 70;
    const enemy = enemies[Math.floor(Math.random()*enemies.length)];
    
    const playerAttackPower = Math.floor(Math.random()*(21 - 9 + 7) + 3);
    const enemyPower =  Math.floor(Math.random()*(33 - 9 + 8) + 4);

    const playerMoves = readline.keyIn(playerName + ` please select your move:\nPress 'e' to Exit\nPress 'p' to Print player stats\nPress'w' to Walk`, {limit: '$<e, p, w>'});
        
        if (playerMoves == 'e'){
            return playerHealth = 0;
        }
        else if (playerMoves == 'p'){
            console.log(playerName + ": " + playerHealth + "\nReward: " + pickUp);
        }
        else if (playerMoves === 'w'){
            let walk = Math.random();
        if (walk <= .3){
            console.log('You continue walking....');
        }
        else if (walk >= .3){
            console.log(enemy + ' unexpectedly appears in front of you. He approaches slowly, and it looks like he has a weapon in his hand!');
        }
    while(playerHealth > 0 && enemyHealth > 0){
        const perform = readline.keyIn(`What will you do?!\nPress 'r' to Run\nPress 'a' to Attack`, {limit: '$<r, a>'});

        switch(perform){
            case 'r':
            let run = Math.random();
            if (run <= .5){
                console.log('Just as you and ' + enemy + ' cross paths, he pulls out a knife and stabs you with ' + enemyPower + ' attack power');
            }
            else {
                console.log('You were quick and got passed ' + enemy + '!');
                break;
            }
            case 'a':
                enemyHealth -= playerAttackPower;
                console.log("Nice work! You managed to hit " + enemy + " with " + playerAttackPower + " attack power!");
                playerHealth -= enemyPower;
                console.log(enemy + " hits back with " + enemyPower + " attack power!");
            if (enemyHealth <= 0){
                console.log("You did it! You killed " + enemy + ".\nHe left behind " + pickUp + ", take it.\n" + playerName + ", YOU WON THE GAME!");
            }
            let loot = Math.random();
                if(loot <= .3){
                badge.push(pickUp);
                }
            else if (playerHealth <= 0){
                console.log("Looks like " + enemy + " overpowered you\n You're now dead..\n" + playerName + ", you lost the game");
            }
        }
    }
        }
}
game();