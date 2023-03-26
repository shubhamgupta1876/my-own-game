var PLAY = 1;
var END = 0;
var gameState = PLAY;

var ninja,ninja_running,ninja_killing;
var ground, invisibleGround, groundImage;

var zombi, zombiImage;

var score;

var gameOverImg,restartImg
var jumpSound , checkPointSound, dieSound




function preload(){
    ninja_running = loadAnimation("ninja(1).png","ninja(2).png","ninja (3).png");
  ninja_killing= loadAnimation("ninja(4).png");
  
  groundImage = loadImage("ground2.png");
  
  zombi= loadImage("zombi.png");
  
  jungle = loadImage("jungle.jpg");
  food = loadImage("food.png");

 
}

function setup() {
  createCanvas(400,400);
  j=createSprite(200,200,400,400)
  j.addImage(jungle)
  ninja=createSprite(30,350,20,20)
  ninja.addAnimation("r",ninja_running)

 
}

function draw() {
 background("grey")
 j.velocityX=-5;
 if(j.x<100){
j.x=width/2

 }
 drawSprites()
}