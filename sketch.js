//making the variables
var bow, bowImage, background, backgroundImage, red_balloon, red_balloonImage, pink_balloon, pink_balloonImage, green_balloon, green_balloonImage, blue_balloon, blue_balloonImage, arrow, arrowImage;

//making the score
var score = 0;

//making the groups
var redB, blueB, greenB, pinkB, arrowGroup;

function preload(){
 //load your images here 
   bowImage = loadImage("noBG_girl.png");
   backgroundImage = loadImage("background0.png");
   red_balloonImage = loadImage("cuteMonster3.png");
   pink_balloonImage = loadImage("cuteMonster1.png");
   green_balloonImage = loadImage("cuteMonster4.png");
   blue_balloonImage = loadImage("cuteMonster2.png");
   arrowImage = loadImage("heart.png");
  
}

function setup() {
  
  createCanvas(600, 600);
  
  //making and moving the background
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 3;
  background.velocityX = -3;
  
  //making the bow
  bow = createSprite(500,250,20,50);
  bow.addImage(bowImage);
  bow.scale = 0.3;
  
  //making the balloon groups
  redB = new Group();
  blueB = new Group();
  greenB = new Group();
  pinkB = new Group();
  arrowGroup = new Group();
  
}

function draw() {

  //making the background infinite
  if(background.x<0){
    
    background.x = background.width/2;
    
  }
  
  //moving the bow with the mouse
  bow.y = World.mouseY;
  
  //shooting the arrow
  if(keyDown("space")){
   createArrow();
  }
  
  //randomly selecting the balloons
  var select_balloon = Math.round(random(1,4));
  console.log(select_balloon);
  
  if(World.frameCount % 80 === 0){
    if(select_balloon === 1){
      redBalloon();
  } else if(select_balloon === 2){
      blueBalloon();
  } else if(select_balloon === 3){
      greenBalloon();
  } else {
    pinkBalloon();
  }
  }
  
  //bursting the balloons
  if(arrowGroup.isTouching(redB)){
    redB.destroyEach();
    arrowGroup.destroyEach();
    score = score + 1
  }
  
  if(arrowGroup.isTouching(blueB)){
    blueB.destroyEach();
    arrowGroup.destroyEach();
    score = score + 2
  }
  
  if(arrowGroup.isTouching(greenB)){
    greenB.destroyEach();
    arrowGroup.destroyEach();
    score = score + 3
  }
  
  if(arrowGroup.isTouching(pinkB)){
    pinkB.destroyEach();
    arrowGroup.destroyEach();
    score = score + 4
  }
  
  drawSprites();
  
  //showing the score
  text("Score:"+ score,270,30);
  
}

function createArrow(){

//creating the arrows
  arrow = createSprite(420,250,10,10);
  arrow.addImage(arrowImage);
  arrow.scale = 0.05;
  arrow.velocityX = -6;
  arrow.lifetime = 100;
  arrow.y = bow.y;  
  arrowGroup.add(arrow);
}

function redBalloon(){
  //creating the red balloons
  var red = createSprite(0,Math.round(random(20,370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3; 
  red.scale = 0.07;
  
  redB.add(red);
}

function blueBalloon(){
  //creating the blue balloons
  var blue = createSprite(0,Math.round(random(20,370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3; 
  blue.scale = 0.2;
  
  blueB.add(blue);
}

function greenBalloon(){
  //creating the green balloons
  var green = createSprite(0,Math.round(random(20,370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3; 
  green.scale = 0.07;
  
  greenB.add(green);
}

function pinkBalloon(){
  //creating the pink balloons
  var pink = createSprite(0,Math.round(random(20,370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3; 
  pink.scale = 0.15;
  
  pinkB.add(pink);
}


