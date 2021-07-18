
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bg,treeimage,obstacle1,obstacle2,obstacle3,obstacle4
var dustGroup
var time=50
var score=0
var newdust
var gamestate="play"
function preload()
{
	bg=loadImage("city.jpg")
	treeimage=loadImage("images/treerb.png")
	crowImage=loadImage("images/crow.png")
	dustbinImage=loadImage("dustbin.png")
	obstacle2=loadAnimation("images/opponent1.png","images/opponent2.png")
	obstacle1=loadImage("images/waste1.png")
	obstacle3=loadAnimation("images/opponent4.png","images/opponent5.png")
	//obstacle4=loadImage("images/waste4.png")
player1=loadAnimation("images/mainPlayer1.png","images/mainPlayer2.png")
}

function setup() {
	createCanvas(displayWidth, displayHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
crow=createSprite(displayWidth-200,displayHeight-520)
crow.addImage(crowImage)
crow.scale=0.4
dustbin=createSprite(displayWidth/2-400,displayHeight-170)
dustbin.addImage(dustbinImage)
dustGroup=new Group()
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
 
  background(bg);
  image (treeimage,displayWidth-450,displayHeight-500)
  if(gamestate==="play"){
	crow.x=mouseX
	crow.y=mouseY
	
	
	spawnObstacles()
	
		for (var i=0;i<dustGroup.length;i++){
			if(dustGroup.get(i).isTouching(crow)){
				dustGroup.get(i).destroy()
				score=score+1
			}
			
		
			
		}
	
	if(time===0){
		gamestate="end"
		textSize(45)
  fill ("black")
  text("GAME OVER",displayWidth/2,displayHeight/2)
	}	
  }

	

  drawSprites();
  textSize(35)
  fill ("black")
  text("Time:"+time,displayWidth-200,displayHeight/2-300)
  text("Score:"+score,displayWidth/2-500,displayHeight/2-300)
}
function spawnObstacles(){
	if (frameCount % 200 === 0){
	  time=time-1
	  var rand1=Math.round(random(100,300))
	  dust=createSprite(rand1,displayHeight-80)
	  dustGroup.add(dust)
	  dust.addImage(obstacle1)
	  dust.scale=0.3
	  var obstacle = createSprite(displayWidth/2-500,displayHeight-75,10,40);
	  obstacle.velocityX = 6;
	  obstacle.scale=0.2
	  obstacle.addAnimation("player1",player1);
	  obstacle.Width=dust.Width+1
	  crow.Width=obstacle.Width
	   //generate random obstacles
	  
	  
	}

}