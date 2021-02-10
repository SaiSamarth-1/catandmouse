var catImage, catImage2, mouseImage, catAnimation, mouseAnimation1, bgImg;
var cat, mouse;


function preload() {
    catImage = loadImage("./images/cat1.png");
    catAnimation = loadAnimation("./images/cat2.png", "./images/cat3.png");
    catImage2 = loadImage("./images/cat4.png");
    
    bgImg = loadImage("./images/garden.png");

    mouseImage = loadImage("./images/mouse4.png");
    mouseAnimation1 = loadAnimation("./images/mouse2.png", "./images/mouse3.png")

}

function setup(){
    createCanvas(1000,800);
    cat = createSprite(750,560,60,60);
    cat.addAnimation("stationary", catImage);
    cat.scale = 0.2;
    cat.debug = true;

    mouse = createSprite(100,560,30,30);
    mouse.addAnimation("teasing", mouseAnimation1);
    mouse.scale = 0.2;
    mouse.debug = true


}
function draw() {

    background(bgImg);

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0
        cat.addAnimation("stop", catImage2);
        cat.changeAnimation("stop", catImage2);

        mouse.addAnimation("curious", mouseImage);
        mouse.changeAnimation("curious", mouseImage);
    }
    else{
        mouse.changeAnimation("teasing", mouseAnimation1);
    }

    drawSprites();
    
    text(mouseX + "," + mouseY, 10,45);
    
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
  cat.velocityX = -5;
  cat.addAnimation("running", catAnimation);
  cat.changeAnimation("running", catAnimation)
    }
    else{
        cat.velocityX = 0;
        cat.changeAnimation("stationary", catImage);
    }
}
