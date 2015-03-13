/**
 * Created by alanakeay on 3/7/15.
 */
/*
Name: Alana Keay
Date: March 13, 2015
Assignment: Week#2: ANALYZE Duel#2
*/

//self-executing function
(function(){                                    //create function to store the information about players.

    console.log("FIGHT!!!");                    //console.log to report the start of the fight

    var player1 = ["Superman", 20, 100];        //create array to contain information for player 1
    var player2 = ["Flash", 20, 100];           //create array to contain information for player 2

    var round= 0;                               //create var round

    function fight(){                           //create function to run fight
        console.log("in the fight function")    //console.log to report that the fight in the function
                                                //report to the user the players health at the start of the fight
        alert(player1[0]+":"+player1[2]+" *START* "+player2[0]+":"+player1[2]);

        for(var i=0; i < 10; i++){              //for loop to run the fight

                                                //random formula is - Math.floor(Math.random()*(max-min)+min);

            var minDamage1 = player1[1] *.5;    //created var for min damage for player 1
            var minDamage2 = player2[1] *.5;    //created var for min damage for player 2
            var f1 = Math.floor(Math.random()*(player1[1]-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(player2[1]-minDamage2)+minDamage2);

            player1[2]-=f1;                    //inflict damage
            player2[2]-=f2;                    //inflict damage


                                                //console.log the players health after each round
            console.log(player1[0]+":"+player1[2]+" "+player2[0]+":"+player2[2]);

            var results = winnerCheck();        //create var for the results of the match
            console.log(results);               //console.log the results

            if(results === "no winner"){        //if else function for fight
                round++;                        //round numbers
                                                //report to the user the round number and players health
                alert(player1[0]+":"+player1[2]+" *ROUND "+round+" "+player2[0]+":"+player2[2]);
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
        if(player1[2]<1 && player2[2]<1){
            result = "No winner!";
        }else if(player1[2]<1){
            result =player2[0] + "WINS!!!"
        }else if(player2[2]<1) {
            result = player1[0] + "WINS!!!"
        };

        return result;                          //return results to the outside of the function

    };

    /****** The program gets started below ******/
    console.log("program starts")              //console.log the program starts
    fight();

})();