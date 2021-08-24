//readline sync
const readline = require("readline-sync");
const playerName = readline.question("What is your name? "); 
//welcome message with backtick operator
const welcomeMessage = (`Welcome, ${playerName} to the JS Escape Room Simulator \nCan you escape?`);
console.log(welcomeMessage);
console.log("Please select one of the following options to start the game \nBE CAREFUL, ONE OF THESE OPTIONS MAY LEAD TO CERTAIN DEATH!");
//boolean values
    let hasLife = true;
    let hasKey = false;
// while loop/if/else if statements
    function escapeRoom(){
        while (hasLife == true){
       //keyIn for menu options
        const optionID = readline.keyIn("Press '1' to check the hole in the wall \nPress '2' to find the key \nPress '3' to open the door\n", {limit: '$<1-3>'});    
        
    if (optionID == 1){
        console.log(`You have chosen Option 1. ${playerName}, you are now DEAD. THE GAME IS O V E R!`);
    hasLife = false;}
    //User chooses to check the hole in the wall, life value is now false and the game ends
    else if (optionID == 2 && hasKey == false){
        console.log(`Congratulations ${playerName}, you have found the key! You may now go back and choose Option 3!`);
    hasKey = true;}
    //User chooses to find the key and can now unlock the door. 'Key' value is now true
    else if (optionID == 2 && hasKey == true){
        console.log("You've already found the key! Time to unlock the door!");
        hasKey = true; //User has already found the key. 'Key' value is still true and player needs to unlock the door
   }
   
    else if (optionID == 3 && hasKey == false){
            console.log("Please go back and find the key to unlock the door");
    }//User tries to unlock the door without finding the key
    else if (optionID == 3 && hasKey == true){
        console.log(`CONGRATULATIONS!!! ${playerName}, you unlocked the door and escaped the room!!!`);
        hasLife = false;//User has found the key and unlocked the door. Life value is now false and the game is over
    }
        }
    }
    escapeRoom();