var bird, background1Img, background1,birdImg,helicopterImg,helicopter,monsterImg,monster,pillarImg,pillar;
var helicopterGroup;
var pillarGroup;
var monsterGroup;

function preload(){
  background1Img=loadImage("images/background.jpeg");
  birdImg=loadImage("images/bird4.jpeg");
  pillarImg=loadImage("images/pillar2.jpeg");
  helicopterImg=loadImage("images/helicopter.png");
  monsterImg=loadImage("images/monster.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background1=createSprite(windowWidth/2,windowHeight/2 , windowWidth, windowHeight);
  background1.addImage(background1Img);
  background1.scale=5;

  bird=createSprite(windowWidth/3,windowHeight/3,windowWidth/2,windowHeight/2);
  bird.addImage(birdImg);
  bird.scale=0.5;

  helicopterGroup=new Group();
  pillarGroup=new Group();
  monsterGroup=new Group();


  
}

function draw() {
  background("white"); 
  bird.velocityY=0; 
  
  var r = Math.round(random(1,2));
  if(r===1){
   obstacle()
  }
  else{
    pillars();
  }
console.log(r);
  monsters();


  if(keyDown(UP_ARROW)){
    bird.velocityY=-4;
  }
  
  if(keyDown(DOWN_ARROW)){
    bird.velocityY=4;
  }




  drawSprites();
}

function obstacle(){
  if(frameCount % 200===0){
  helicopter=createSprite(windowWidth,windowHeight-600);
  

 
    helicopter.addImage(helicopterImg);
 
  
  helicopter.velocityX=-4;
  helicopter.scale=0.5;
  helicopter.y=random(50,400);
  helicopter.lifetime=350;
  helicopterGroup.add(helicopter);
 //console.log(windowWidth/4);
 // s=d/t  
}
}

function pillars(){
  if(frameCount % 300===0){
 pillar=createSprite(windowWidth,windowHeight-200);
 pillar.addImage(pillarImg);
  pillar.scale=0.5;
  //var rand = Math.round(random(1,2));
  pillar.velocityX=-4;
  pillar.lifetime=350;
  pillarGroup.add(pillar);


  }
}

function monsters(){
  if(frameCount % 550 === 0){
    monster=createSprite(windowWidth,windowHeight-500);
    monster.addImage(monsterImg);
    monster.scale=1;
    monster.velocityX=-4;
    monster.y=random(50,400);
    monster.lifetime=350;
    monsterGroup.add(monster);

  }
}



