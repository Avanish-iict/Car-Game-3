class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play(){
    form.hide();
    textSize(30);
    text("Game Start",120,100);
    Player.getPlayerInfo();

  if(allplayers !==undefined){
 var displayPosition = 130;

 for(var plr in allplayers){
displayPosition += 20;

textSize(20);
text(allplayers[plr].name+": " +allplayers[plr].distance , 120 , displayPosition);
 }
  }
if(keyIsDown(UP_ARROW)&&player.index!==null){
  player.distance+=20;
  player.update();
}
  }
}
