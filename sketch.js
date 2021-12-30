var canvas;
var backgroundImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image;                       
var database, gameState;
var form, player, playerCount,rules;
var allPlayers, car1, car2, fuels, powerCoins, obstacles;
var cars = [];
var blastImage;                
var gameState="rules"

function preload() {
  backgroundImage = loadImage("background.png");
  car1_img = loadAnimation("D2.png","D3.png","D4.png","D5.png","D6.png","D7.png");
  car2_img = loadAnimation("N2.png","N2.png","N2.png");
  track = loadImage("track.jpg");
  fuelImage = loadImage("fuel.png");
  powerCoinImage = loadImage("goldCoin.png");
  lifeImage = loadImage("life.png");
  obstacle1Image = loadImage("obstacle1.png"); 
  obstacle2Image = loadImage("obstacle2.png"); 
  blastImage = loadAnimation("blast.png","blast.png","blast.png"); 
 
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
   rules=new Rule()
  rules.connectStates()

}

function draw() {
  background(backgroundImage);
 
  if (playerCount === 2) {
    game.update(1);
  }
if(gameState=== "rules" ){
  rules.display()
  form.hide()
}
if(keyDown("space")){
  game.update(0)
  gameState=0
}
  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
  drawSprites();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
