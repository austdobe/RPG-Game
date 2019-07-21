var CharChoice = ["assets/Images/Anakin.jpg", "assets/Images/Darthmaul.jpg", "assets/Images/Luke.jpg", "assets/Images/DarthSidious.jpg", "assets/Images/yoda.jpg"];
var wins = 0;
var losses = 0;
var defeat = 0;
//Player stats
var playerPower = 5+ Math.floor(Math.random()*11);
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
console.log(playerChosen)
//Choose player and enemy
$("#first").on("click", function() {

    if (playerChosen && !enemyChosen) {
        $(".attackZone").html("<img src="+CharChoice[0]+">");
        enemyChosen =true;
        anakinChosen = true;
        hideChosen()
        calculateEnemy()
        showEnemyStats()
    }
    else if(!playerChosen) {
        $(".player").html("<img src="+CharChoice[0]+">");
        playerChosen = true;
        anakinChosen=true;
        hideChosen()
        showPlayerStats()
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
    }
    else if(!playerChosen){
        $(".player").html("<img src="+CharChoice[1]+">");
        playerChosen=true;
        maulChosen = true;
        hideChosen()
        showPlayerStats()
        
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
    }
    else if(!playerChosen){
        $(".player").html("<img src="+CharChoice[2]+">");
        playerChosen = true;
        lukeChosen = true;
        hideChosen()
        showPlayerStats()
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
    }
    else if(!playerChosen){
        $(".player").html("<img src="+CharChoice[3]+">");
        playerChosen = true;
        sidiousChosen = true;
        hideChosen()
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
    if(defeat>=1){
        enemyHealth=100;
        enemyDefense = 16;
        enemyPower = 20;
    }
};

//display and add to player stats on each attack
$("button").on("click", function(){
    if(enemyChosen){
        var damage = playerPower - enemyDefense;
        enemyHealth = enemyHealth - damage;
        playerPower = playerPower+3;
        playerHealth = playerHealth - enemyPower + playerDefense;
        if(defeat>=1){
            playerDefense++;
        }
        showPlayerStats()
        showEnemyStats()
        isdefeated()
        playerStatus()
    }else{
        alert("Please choose an enemy.")
    }

})
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
    if(defeat ===3){
        alert("You Win")
    }
}
function playerStatus(){
    if(playerHealth<=0&&enemyHealth>0){
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

};

