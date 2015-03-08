/**
 * Created by alanakeay on 3/7/15.
 */
/*
Name: Alana Keay
Date: March 07 2015
Assignment: Week#1: ANALYZE Duel#1
*/

//self-executing function
(function(){

    console.log("FIGHT!!!");

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

    function fight(){
        console.log("in the fight function")

        alert(playerOneName+":"+playerOneHealth+" *START* "+playerTwoName+":"+playerTwoHealth)


    };

    function winnerCheck(){
        console.log("in winnerCheck FN");

        var result="no winner";

        return result;

    };

    /****** The program gets started below ******/
    console.log("program starts")
    fight();

})();