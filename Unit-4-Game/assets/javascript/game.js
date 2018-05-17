$(document).ready(function() {
    var random=Math.floor(Math.random()*101+19);
    //selects between 19-120

    $('#randomNumber').text(random);
    //attaches to random number in HTML

    var gem1=Math.floor(Math.random()*11+1);
    var gem2=Math.floor(Math.random()*11+1);
    var gem3=Math.floor(Math.random()*11+1);
    var gem4=Math.floor(Math.random()*11+1);
    //sets random numbers for each gem 1-12

    var currentScore = 0;
    var wins = 0;
    var losses = 0;
    //Tallies variables

$('#wins').text(wins);
$('#losses').text(losses);
    //sets wins and losses in HTML

function reset(){
    random=Math.floor(Math.random()*101+19);
    console.log(random)
    $('#randomNumber').text(random);
    gem1=Math.floor(Math.random()*11+1);
    gem2=Math.floor(Math.random()*11+1);
    gem3=Math.floor(Math.random()*11+1);
    gem4=Math.floor(Math.random()*11+1);
    currentScore= 0;
    $('#currentScore').text(currentScore);
    }
    //resets game

function win(){
    alert("WINNER!");
    wins++;
    $('#wins').text(wins);
    reset();
    }
    //adds wins

function loser(){
    alert("Better luck next time!");
    losses++;
    $('#losses').text(losses);
    reset();
    }
    //adds losses

    $('#red').on ('click',function(){
        currentScore = currentScore + gem1;
        console.log("New currentScore= " + currentScore);
        $('#currentScore').text(currentScore);
        //sets up click for red
        if (currentScore === random){
            win();
        }
        else if (currentScore > random){
            loser();
        }
    });

    $('#white').on ('click',function(){
        currentScore = currentScore + gem2;
        console.log("New currentScore= " + currentScore);
        $('#currentScore').text(currentScore);
        //sets up click for white
        if (currentScore === random){
            win();
        }
        else if (currentScore > random){
            loser();
        }
    });

    $('#green').on ('click',function(){
        currentScore = currentScore + gem3;
        console.log("New currentScore= " + currentScore);
        $('#currentScore').text(currentScore);
        //sets up click for green
        if (currentScore === random){
            win();
        }
        else if (currentScore > random){
            loser();
        }
    });

    $('#grey').on ('click',function(){
        currentScore = currentScore + gem4;
        console.log("New currentScore= " + currentScore);
        $('#currentScore').text(currentScore);
        //sets up click for grey
        if (currentScore === random){
            win();
        }
        else if (currentScore > random){
            loser();
        }
    });
});