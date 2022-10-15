var skyDayImg,skyNightImg, birdImg,birdStopImg
var background1
var bird
var gameState = "play"
var gameOver, gameOverImg
var restart, restartImg
function preload(){
skyDayImg = loadImage("skyDay.jpg")
skyNightImg = loadImage("skyNight.jpg")
birdImg = loadAnimation("bird1.png","bird2.png","bird3.png","bird4.png")
birdStopImg = loadAnimation("bird1.png")
gameOverImg = loadImage("gameOver.png")
restartImg = loadImage("restart.png")
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    //background1 = createSprite(windowWidth/2,windowHeight/2,400,200);
    background1 = createSprite(width/2,200)
    background1.addImage(skyDayImg)
    background1.velocityX = -4
    bird = createSprite(300,windowHeight/2)
    bird.addAnimation("flying",birdImg)
    bird.scale = 0.5
    gameOver = createSprite(windowWidth/2,windowHeight/2,20,20)
    gameOver.addImage(gameOverImg)
    gameOver.visible = false
    restart = createSprite(windowWidth/2, (windowHeight/2)+120,20,20)
    restart.addImage(restartImg)
    restart.scale = 0.1
    restart.visible = false
    
}

function draw() {
    background("white")
    if (gameState === "play"){
        //background1.velocityX = -4
        if (background1.y > height){
            background1.y = height/2;
          }
        if (keyDown("space")){
            bird.velocityY = -12
        }
        bird.velocityY = bird.velocityY + 0.8
        if (bird.y<0||bird.y>700){
            gameState = "end"
        }
    }
    if (gameState === "end"){
        bird.changeAnimation("stopped", birdStopImg)
        bird.velocityY = 0
        background1.velocityX = 0
        gameOver.visible = true
        restart.visible = true
    }
    if (mousePressedOver(restart)){
        gameRestart()
    }
    //console.log(bird.y)
    drawSprites()
}
function gameRestart(){
    gameState = "play"
    gameOver.visible = false
    restart.visible = false
    bird.y = windowHeight/2
}
function spawnObstacles() {

}