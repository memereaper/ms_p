var heart, heartImg;
var text,textImg,text1,textImg1;
var division,divisionImg;
var multiplication,multiplicationImg;
var addition,additionImg;
var minus,minusImg;

function preload(){
  textImg = loadImage("download.png");
  textImg1 = loadImage("Ms_P.png");
  divisionImg = loadImage("Unknown-1.png")
  multiplicationImg = loadImage("multiplication.png")
  additionImg = loadImage("images.png")
  minusImg = loadImage("minus.png")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  text=createSprite(windowWidth/2,windowHeight/2);
  text.addImage(textImg);

  text1=createSprite(windowWidth/2,windowHeight/1.75);
  text1.addImage(textImg1);

  division=createSprite(windowWidth/4,windowHeight/3);
  division.addImage(divisionImg);
  division.scale = 0.3;

  multiplication=createSprite(windowWidth/1.25,windowHeight*.8);
  multiplication.addImage(multiplicationImg)
  multiplication.scale = 0.4;

  addition=createSprite(windowWidth/4,windowHeight*.8);
  addition.addImage(additionImg)
  addition.scale = 0.3;

  minus=createSprite(windowWidth/1.25,windowHeight*.3);
  minus.addImage(minusImg)
  minus.scale = 0.4;
}

function draw() {
  background("white");  

  drawSprites();
}

