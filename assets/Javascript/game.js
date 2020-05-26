var CharChoice = ["assets/Images/Anakin.jpg", "assets/Images/Darthmaul.jpg", "assets/Images/Luke.jpg", "assets/Images/DarthSidious.jpg", "assets/Images/yoda.jpg"];
var chosen = new Audio("assets/Sounds/Lightsaber_Open.mp3");
var fight = new Audio("assets/Sounds/Lightsaber_Fight.mp3");
var powerUp = new Audio("assets/Sounds/powerUp.mp3")
var wins = 0;
var losses = 0;
var defeat = 0;
//Player stats
var playerPower = 3+ Math.floor(Math.random()*9);
var playerHealth = 100;
var playerDefense = 6;
//Enemy Stats
var enemyPower;
var enemyHealth;
var enemyDefense;
//booleans
var playerChosen = false;
var enemyChosen = false;
var anakinChosen = false;
var lukeChosen = false;
var maulChosen = false;
var sidiousChosen=false;
var yodaChosen=true;
//Choose player and enemy

$( "document" ).ready(function(){
    $("#fifth").hide()

$("#first").on("click", function() {

    if (playerChosen && !enemyChosen) {
        $(".attackZone").html("<img src="+CharChoice[0]+">");
        enemyChosen =true;
        anakinChosen = true;
        hideChosen()
        calculateEnemy()
        showEnemyStats()
        chosen.play()
    }
    else if(!playerChosen) {
        $(".player").html("<img src="+CharChoice[0]+">");
        playerChosen = true;
        anakinChosen=true;
        hideChosen()
        showPlayerStats()
        chosen.play()
    }
    
})
$("#second").on("click", function() {

    if (playerChosen && !enemyChosen) {
        $(".attackZone").html("<img src="+CharChoice[1]+">");
        maulChosen = true;
        enemyChosen =true;
        hideChosen()
        calculateEnemy()
        showEnemyStats()
        chosen.play()
    }
    else if(!playerChosen){
        $(".player").html("<img src="+CharChoice[1]+">");
        playerChosen=true;
        maulChosen = true;
        hideChosen()
        showPlayerStats()
        chosen.play()
        
    } 
})
$("#third").on("click", function() {

    if (playerChosen && !enemyChosen) {
        $(".attackZone").html("<img src="+CharChoice[2]+">");
        lukeChosen = true;
        enemyChosen = true;
        hideChosen()
        calculateEnemy()
        showEnemyStats()
        chosen.play()
    }
    else if(!playerChosen){
        $(".player").html("<img src="+CharChoice[2]+">");
        playerChosen = true;
        lukeChosen = true;
        hideChosen()
        showPlayerStats()
        chosen.play()
    }
})
$("#fourth").on("click", function() {

    if (playerChosen && !enemyChosen) {
        $(".attackZone").html("<img src="+CharChoice[3]+">");
        sidiousChosen = true;
        enemyChosen = true;
        hideChosen()
        calculateEnemy()
        showEnemyStats()
        chosen.play()
    }
    else if(!playerChosen){
        $(".player").html("<img src="+CharChoice[3]+">");
        playerChosen = true;
        sidiousChosen = true;
        hideChosen()
        showPlayerStats()
        chosen.play()
    }
})
$("#fifth").on("click", function() {

    if (playerChosen && !enemyChosen) {
        $(".attackZone").html("<img src="+CharChoice[4]+">");
        yodaChosen = true;
        enemyChosen = true;
        hideChosen()
        calculateEnemy()
        showEnemyStats()
        chosen.play()
        showPlayerStats()
    }
})


function hideChosen(){
    if(sidiousChosen){
        $("#fourth").fadeOut();
    }
    if(maulChosen){
        $("#second").fadeOut();
    }
    if(anakinChosen){
        $("#first").fadeOut();
    }
    if(lukeChosen){
        $("#third").fadeOut()
    }
    if(yodaChosen){
        $("#fifth").fadeOut()
    }
}
function showPlayerStats(){
    if(playerChosen){
        $("#health").html("<p></p>"+"<p>Health: "+playerHealth+"</p>")
        $("#power").html("<p>power: "+playerPower+"</p>")
        $("#defense").html("<p>Defense: "+playerDefense+"</p>")
    }
}
function showEnemyStats(){
    if(enemyChosen){
        $("#eHealth").html("<p>Health: "+enemyHealth+"</p>")
        $("#ePower").html("<p>power: "+enemyPower+"</p>")
        $("#eDefense").html("<p>Defense: "+enemyDefense+"</p>")
    };
};
//calculate enemy stats
function calculateEnemy(){
    if(defeat<1){
        enemyHealth=100;
        enemyDefense = 3;
        enemyPower = 8;
    }
    if(defeat===1){
        enemyHealth=150;
        enemyDefense = 16;
        enemyPower = 16;
    }
    if(defeat>=2){
        enemyHealth = 200;
        enemyDefense = 20;
        enemyPower = 25;
    }
    if(defeat ===3){
        enemyHealth=300;
        enemyDefense=30;
        enemyPower=40;
        yodaChosen = false;
        $("#fifth").show();
    }
};

//display and add to player stats on each attack
$("#attack").on("click", function(){
    if(enemyChosen){
        var damage = playerPower - enemyDefense;
        enemyHealth = enemyHealth - damage;
        playerPower = playerPower+3;
        if(playerDefense>enemyPower){
            playerHealth--;
        }else if(playerDefense<enemyPower)
        playerHealth = playerHealth - enemyPower + playerDefense;
        if(defeat>=1){
            playerDefense++;
        }
        showPlayerStats()
        showEnemyStats()
        isdefeated()
        playerStatus()
        fight.play()
    }else{
        if(playerChosen){
            alert("Please choose an enemy.")
        }else{
            alert("Please choose your player")
        }
    }
});
$("#boost").on("click", function(){
    if(enemyChosen){
        playerPower++;
        if(playerDefense>enemyPower){
            playerHealth--;
        }else if(playerDefense<enemyPower)
        playerHealth = playerHealth - enemyPower + playerDefense;
        playerDefense++;
        showPlayerStats()
        showEnemyStats()
        isdefeated()
        playerStatus()
        powerUp.play()
    }else{
        if(playerChosen){
            alert("Please choose an enemy.")
        }else{
            alert("Please choose your player")
        }
    }
});
//determine defeat
function isdefeated(){
    if(enemyHealth<=0){
        defeat++;
        $(".attackZone").text(" ");
        $("#eHealth").html(" ")
        $("#ePower").html(" ")
        $("#eDefense").html(" ")
        enemyChosen = false;
        calculateEnemy();
        
    }
    if(defeat > 3){
        alert("You win!")
        gameReset();
    }
}
function playerStatus(){
    if(playerHealth<=0&&enemyHealth>0){
        alert("You lost")
        gameReset();
        
    }
};
function gameReset(){
    if(sidiousChosen){
        $("#fourth").show();
    }
    if(maulChosen){
        $("#second").show();
    }
    if(anakinChosen){
        $("#first").show();
    }
    if(lukeChosen){
        $("#third").show()
    }
    sidiousChosen = false;
    maulChosen = false;
    anakinChosen = false;
    lukeChosen = false;
    yodaChosen = true;
    playerChosen = false; 
    enemyChosen = false;
    defeat = 0;
    playerHealth = 100;
    playerPower =8;
    playerDefense=6;
    $(".attackZone").text(" ");
    $("#eHealth").html(" ")
    $("#ePower").html(" ")
    $("#eDefense").html(" ")
    $(".player").html(" ")
    $("#health").html(" ")
    $("#power").html(" ")
    $("#defense").html(" ")
}
});

