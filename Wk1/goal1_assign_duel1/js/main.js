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

        for(var i=0; i < 10; i++){

            //random formula is - Math.floor(Math.random()*(max-min)+min);

            var minDamage1 = player1Damage *.5;
            var minDamage2 = player2Damage *.5;
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);

            //inflict damage
            playerOneHealth-=f1;
            playerTwoHealth-=f2;



            console.log(playerOneName+":"+playerOneHealth+" "+playerTwoName+":"+playerTwoHealth);

            var results = winnerCheck();
            console.log(results);

            if(results === "no winner"){
                round++;
                alert(playerOneName+":"+playerOneHealth+" *ROUND "+round+" "+playerTwoName+":"+playerTwoHealth);
            }else{
                alert(results);
                break;
            };
        };
    };

    function winnerCheck(){
       console.log("in winnerCheck FN");

        var result="no winner";

        if(playerOneHealth<1 && playerTwoHealth<1){
            result = "No winner!";
        }else if(playerOneHealth<1){
            result =playerTwoName+"WINS!!!"
        }else if(playerTwoHealth<1) {
            result = playerOneName + "WINS!!!"
        };

        return result;

    };

    /****** The program gets started below ******/
    console.log("program starts")
    fight();

})();