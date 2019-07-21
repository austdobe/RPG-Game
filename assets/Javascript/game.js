var CharChoice = ["assets/Images/Anakin.jpg", "assets/Images/Darthmaul.jpg", "assets/Images/Luke.jpg", "assets/Images/DarthSidious.jpg", "assets/Images/yoda.jpg"];
var defeat = 0;
//Player stats
var playerPower = 6;
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
        $("#fourth").hide();
    }
    if(maulChosen){
        $("#second").hide();
    }
    if(anakinChosen){
        $("#first").hide();
    }
    if(lukeChosen){
        $("#third").hide()
    }
}
function showPlayerStats(){
    if(playerChosen){
        $("#health").html("<p></p>"+"<p>Health: "+playerHealth+"</p>")
        $("#power").html("<p>power: "+playerPower+"</p>")
        $("#defense").html("<p>Defense: "+playerDefense+"</p>")
    }
    if(enemyChosen){
        $("#eHealth").html("<p>Health: "+enemyHealth+"</p>")
        $("#ePower").html("<p>power: "+enemyPower+"</p>")
        $("#eDefense").html("<p>Defense: "+enemyDefense+"</p>")
    }
    

}
//calculate enemy stats
function calculateEnemy(){
    if(defeat<1){
        enemyHealth=100;
        enemyDefense = 3;
        enemyPower = 8;
    }
    if(defeat===2){
        enemyHealth=150;
        enemyDefense = 6;
        enemyPower = 16;
    }
    if(defeat>3){
        enemyHealth=300;
        enemyDefense=12;
        enemypower = 24;
    }


}

//display and add to player stats on each attack
function playerAttack (){

}
//

