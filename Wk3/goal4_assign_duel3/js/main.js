/**
 * Created by alanakeay on 3/7/15.
 */
/*
Name: Alana Keay
Date: March 20, 2015
Assignment: Week#3: ANALYZE Duel#3
*/

//self-executing function
(function(){                                    //create function to store the information about players.

    console.log("FIGHT!!!");                    //console.log to report the start of the fight

    player1 = {name:"Superman", damage:20, health:100};        //create array to contain information for player 1
    player2 = {name:"Flash", damage:20, health:100};           //create array to contain information for player 2

    var round= 0;                               //create var round

    function fight(){                           //create function to run fight
                                                //report to the user the players health at the start of the fight
        alert(player1.name+":"+player1.health+" *START* "+player2.name+":"+player1.health);

           //removed loop

           //random formula is - Math.floor(Math.random()*(max-min)+min);

            var minDamage1 = player1.damage *.5;    //created var for min damage for player 1
            var minDamage2 = player2.damage *.5;    //created var for min damage for player 2
            var f1 = Math.floor(Math.random()*(player1.damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(player2.damage-minDamage2)+minDamage2);

            player1.health-=f1;                    //inflict damage
            player2.health-=f2;                    //inflict damage


                                                //console.log the players health after each round
            console.log(player1.name+":"+player1.health+" "+player2.name+":"+player2.health);

            var results = winnerCheck();        //create var for the results of the match
            console.log(results);               //console.log the results

            if(results === "no winner"){        //if else function for fight
                round++;                        //round numbers
                                                //report to the user the round number and players health
                alert(player1.name+":"+player1.health+" *ROUND "+round+" "+player2.name+":"+player2.health);
            }else{
                alert(results);                 //report the results to user
                break;                          //end of function
            };

    };

    function winnerCheck(){                     //start of function to check winner
       console.log("in winnerCheck FN");        //console.log the winner check

        var result="no winner";                 //create var results for no winner
                                                //if else function to report fight winner
        if(player1.health<1 && player2.health<1){
            result = "No winner!";
        }else if(player1.health<1){
            result =player2.name + "WINS!!!"
        }else if(player2.health<1) {
            result = player1.name + "WINS!!!"
        };

        return result;                          //return results to the outside of the function

    };

    /****** The program gets started below ******/
    console.log("program starts")              //console.log the program starts
    fight();

})();