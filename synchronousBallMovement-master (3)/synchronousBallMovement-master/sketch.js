var gameState=0
var playerCount,database,form,player,game; 
var distance=0
var allPlayers

function setup(){
createCanvas(400,400);
database=firebase.database();
game=new Game()
game.getState()
game.start()
}

function draw(){
  background("white");
if(playerCount===4){
game.update(1)
} 
if(gameState===1){
  clear()
  game.play()
}
    drawSprites();
  
}


