/**
 * Created by alanakeay on 3/7/15.
 */
/*
Name: Alana Keay
Date: March 13, 2015
Assignment: Week#1: ANALYZE Duel#1
*/

//self-executing function
(function(){                                    //create function to store the information about players.

    console.log("FIGHT!!!");                    //console.log to report the start of the fight

    //player name
    var playerOneName= "Superman";
    var playerTwoName= "Flash";

    //player damage
    var player1Damage= 20;
    var player2Damage= 20;

    //player health
    var playerOneHealth= 100;
    var playerTwoHealth= 100;

   //round
    var round= 0;

    function fight(){                           //create function to run fight
        console.log("in the fight function")    //console.log to report that the fight in the function
                                                //report to the user the players health at the start of the fight
        alert(playerOneName+":"+playerOneHealth+" *START* "+playerTwoName+":"+playerTwoHealth)

        for(var i=0; i < 10; i++){              //for loop to run the fight

                                                //random formula is - Math.floor(Math.random()*(max-min)+min);

            var minDamage1 = player1Damage *.5;
            var minDamage2 = player2Damage *.5;
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);

            playerOneHealth-=f1;                //inflict damage
            playerTwoHealth-=f2;                //inflict damage


                                                //console.log the players health after each round
            console.log(playerOneName+":"+playerOneHealth+" "+playerTwoName+":"+playerTwoHealth);

            var results = winnerCheck();        //create var for the results of the match
            console.log(results);               //console.log the results

            if(results === "no winner"){        //if else function for fight
                round++;                        //round numbers
                                                //report to the user the round number and players health
                alert(playerOneName+":"+playerOneHealth+" *ROUND "+round+" "+playerTwoName+":"+playerTwoHealth);
            }else{
                alert(results);                 //report the results to user
                break;                          //end of function
            };
        };
    };

    function winnerCheck(){                     //start of function to check winner
       console.log("in winnerCheck FN");        //console.log the winner check

        var result="no winner";                 //create var results for no winner
                                                //if else function to report fight winner
        if(playerOneHealth<1 && playerTwoHealth<1){
            result = "No winner!";
        }else if(playerOneHealth<1){
            result =playerTwoName+"WINS!!!"
        }else if(playerTwoHealth<1) {
            result = playerOneName + "WINS!!!"
        };

        return result;                          //return results to the outside of the funtion

    };

    /****** The program gets started below ******/
    console.log("program starts")              //console.log the program starts
    fight();

})();