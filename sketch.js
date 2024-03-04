// Object and Variable Declarations //

let bg;
let bg2;
let fg;
let programMusic;
let timer = 30;
let gameStatus = 'false';
let gameVictory = 'false';
let pikachuPic;
let elapsedTime = 0;
let tree = {
  x : 450,
  y: 175
};
let winText = {
  text1 : "Great Job! You're a Pokemon Master!",
  text2 : "Refresh to play again!",
  color : "white",
  state : 'false'
}

let gameMusic = "false";

let openingMusic = {
state : 'false'
}

let battleMusic = {
  state : 'false'
  }
let victoryMusic = {
    state : 'false'
    }
let defeatMusic = {
  state : 'false'
}
let pikachu = {
  x : 500,
  y : 400,
  state : 'false',
  caught : 'false'
}

let charmander = {
  x : 100,
  y : 700,
  state : 'false',
  caught : 'false'
}

let squirtle = {
  x : 100,
  y : 400,
  state : 'false',
  caught : 'false'
}

let bulbasaur = {
  x : 900,
  y : 600,
  state : 'false',
  caught : 'false'
}

let rules = {
  line1 : "Left click on the Pokemon when they come out of hiding to catch em' all!",
  line2 : "Click Music to Play / Pause, Click Start to Begin"
}

function preload(){
  bg = loadImage('/background2.JPG');
  bg2 = loadImage('/background4.PNG');
  pikachuPic = loadImage('/pikachupixel.png');
  fg = loadImage('/grass2.png');
  charmander.image = loadImage('/charmanderpixel.png');
  squirtle.image = loadImage('/squirtlepixel.png');
  bulbasaur.image = loadImage('/bulbasaurpixel.png');
  tree.image = loadImage('/tree.png');
  openingMusic.music = loadSound('/music/opening.mp3');
  battleMusic.music = loadSound('/music/battle.mp3');
  victoryMusic.music = loadSound('/music/victory.mp3');
  defeatMusic.music = loadSound('/music/moon.mp3');
  pikachu.sound = loadSound('/music/pikachu.mp3');
  squirtle.sound = loadSound('/music/squirtle.mp3');
  charmander.sound = loadSound('/music/charmander.mp3');
  bulbasaur.sound = loadSound('/music/bulbasaur.mp3');

}

function setup() {
  createCanvas(1000, 850);
  background(220);
}

function draw() {
  
  elapsedTime = millis()/1000;
  image(bg,0,0);

  if(gameStatus == "false" && gameVictory == "false" && openingMusic.state == "false" && battleMusic.state == "false"){
    openingMusic.music.play();
    openingMusic.state = "true";

    gameMusic = "true";
  }
  // else if(gameStatus == "false")
  else if(gameStatus == "true" && gameVictory == "false" && timer < 30 && battleMusic.state == "false"){
    openingMusic.music.stop();
    battleMusic.music.play();
    battleMusic.state = "true";
  }

  else if(gameStatus == "false" && gameVictory == "true" && timer < 30 && victoryMusic.state == "false"){
    openingMusic.music.stop();
    battleMusic.music.stop();
    victoryMusic.music.play();
    victoryMusic.state = "true";

  }
  else if(gameStatus == "true" && gameVictory == "false" && timer == 0 && defeatMusic.state == "false"){
    defeatMusic.music.play();
    openingMusic.music.stop();
    battleMusic.music.stop();
    victoryMusic.music.stop();
    victoryMusic.state = "false";
    defeatMusic.state = "true";
  }
  // else{
  //   openingMusic.music.stop();
  //   battleMusic.music.stop();
  //   victoryMusic.music.play();
  // }
  // else if(gameStatus == "true" && gameVictory == "false" && openingMusic.state == "true" && battleMusic.state == "false" && (mouseIsPressed=== true && mouseX >850 && mouseX <950 && mouseY < 100)){
  //   openingMusic.music.stop();
  //   battleMusic.music.play();
  // }

  if(gameStatus == "false" && gameVictory == "false" && timer == 30){
    fill("white");
    stroke("red");
    strokeWeight("3");
    textSize(30);
    text(rules.line1, width/2, height/5);
    text(rules.line2, width/2, height/4);
  }

  textAlign(CENTER, CENTER);
  textSize(100);
  color("white");
  text(timer, width/2, 75);
  circle(900, 75, 100);
  textSize(30);
  text("Start", 900, 75 );
  circle(100, 75, 100);
  text("Music", 100, 75 );
  
  print(elapsedTime);
 
  // Buttons //

  if(mouseIsPressed=== true && mouseX >850 && mouseX <950 && mouseY < 150){
    gameStatus = 'true';
    pikachu.state = 'true';
    openingMusic.state = 'false';
  }

  if(mouseIsPressed=== true && mouseX >50 && mouseX <150 && mouseY < 150 && gameMusic == "false" && gameStatus == "false"){
    openingMusic.music.play();
    gameMusic = "true";
  }
  else if(mouseIsPressed=== true && mouseX >50 && mouseX <150 && mouseY < 150 && gameMusic == "true" && gameStatus == "false"){
    openingMusic.music.stop();
    battleMusic.music.stop();
    gameMusic = "false";
  }

  if(mouseIsPressed=== true && mouseX >50 && mouseX <150 && mouseY < 150 && gameMusic == "false" && gameStatus == "true"){
    battleMusic.music.play();
    gameMusic = "true";
  }
  else if(mouseIsPressed=== true && mouseX >50 && mouseX <150 && mouseY < 150 && gameMusic == "true" && gameStatus == "true"){
    battleMusic.music.stop();
    openingMusic.music.stop();
    victoryMusic.music.stop();
    gameMusic = "false";
  }

  if(mouseIsPressed=== true && mouseX >50 && mouseX <150 && mouseY < 150 && gameMusic == "false" && gameStatus == "true" && gameVictory == "true"){
    victoryMusic.music.play();
    gameMusic = "true";
  }
  else if(mouseIsPressed=== true && mouseX >50 && mouseX <150 && mouseY < 150 && gameMusic == "true" && gameStatus == "true" && gameVictory == "true"){
    victoryMusic.music.stop();
    openingMusic.music.stop();
    battleMusic.music.stop();
    gameMusic = "false";
  }

  if(gameStatus == 'true'){


    if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
      timer --;
    }
    if (timer == 0) {
      text("GAME OVER", width/2, height/5);
      text("REFRESH TO TRY AGAIN", width/2, height/4);
    }
  }
  squirtle.image.resize(150,150);
  image(squirtle.image,squirtle.x, squirtle.y);

  pikachuPic.resize(150,150);
  image(pikachuPic,pikachu.x,pikachu.y);

  bg2.resize(1000,600);
  image(bg2,0,300);

  

  bulbasaur.image.resize(150,150);
  image(bulbasaur.image, bulbasaur.x, bulbasaur.y);

  tree.image.resize(650,650);
  image(tree.image, tree.x, tree.y);

  charmander.image.resize(150,150);
  image(charmander.image, charmander.x, charmander.y);

  
  fg.resize(1200,700);
  image(fg,0,150);

  if (elapsedTime < 3 && gameStatus === 'true') {
    if(pikachu.state=='true'){
    pikachu.x = pikachu.x+random(-5,0);
    };
    // pikachu.y = pikachu.y+random(-1,0);

    bulbasaur.x = bulbasaur.x += random(-3,1);

    charmander.y += random(-4,0);

    // squirtle.x += random(0,4);
    squirtle.y -= random(0,3);
  }
  else if (elapsedTime < 6 && gameStatus === 'true'){
    pikachu.x = pikachu.x+random(-2,4);
    pikachu.y = pikachu.y+random(-2,4);
    
    bulbasaur.x = bulbasaur.x += random(-3,1);

    charmander.x+= random(-5,0);
    charmander.y+= random(-2,0);

    squirtle.y += random(0,7);
    
  }
  else if (elapsedTime < 9 && gameStatus === 'true'){
    pikachu.x = pikachu.x+random(0,0);
    pikachu.y = pikachu.y+random(-4,0);

    bulbasaur.x = bulbasaur.x += random(-3,1);

    charmander.x+= random(0,10);

    squirtle.x += random(0,7);

  }
  else if (elapsedTime < 12 && gameStatus === 'true'){
    pikachu.x = pikachu.x+random(0,5);
    pikachu.y = pikachu.y+random(0,4);

    bulbasaur.x = bulbasaur.x += random(-3,1);

    charmander.y+= random(0,10);

    squirtle.y -= random(0,10);
  }
  else if (elapsedTime < 15 && gameStatus === 'true'){
    pikachu.x-=random(0,5);
    pikachu.y-=random(0,5);

    bulbasaur.y = bulbasaur.y += random(0,4);

    charmander.x = 800;
    charmander.y = 700 - random(0,4);

    squirtle.y += random(0,10);
  }
  else if (elapsedTime < 18 && gameStatus === 'true'){
    pikachu.x-=random(0,3);
    pikachu.y-=random(-5,0);
    
    bulbasaur.x = 200;
    bulbasaur.y = 650;

    charmander.y-= random(0,4);

 
  }

  else if (elapsedTime < 21 && gameStatus === 'true'){
    pikachu.y+=random(-5,0);
    bulbasaur.x-= random(0,5);
    bulbasaur.y -= random(0,6);

    charmander.y+= random(0,4);
    squirtle.y += random(-7,0);
  }

  else if (elapsedTime < 24 && gameStatus === 'true'){

    pikachu.y-=random(-5,0);
    bulbasaur.y += 5;
    bulbasaur.x +=8;
  }

  else if (elapsedTime < 27 && gameStatus === 'true'){
  
    bulbasaur.y -=7;
  }


  // Code for Pokemon Interactivity
  if(mouseIsPressed == true && dist(mouseX,mouseY, pikachu.x, pikachu.y) < 100 && pikachu.y < 300 ){
    pikachu.x = 2000;
    pikachu.y = 2000;
    pikachu.state = "false";
    pikachu.caught = "true";
    pikachu.sound.play();
  }

  if(mouseIsPressed == true && dist(mouseX,mouseY, charmander.x, charmander.y) < 100 && (charmander.y < 450 ) ){
    charmander.x = 2000;
    charmander.y = 2000;
    charmander.state = "false";
    charmander.caught = "true";
    charmander.sound.play();
    
  }

  if(mouseIsPressed == true && dist(mouseX,mouseY, squirtle.x, squirtle.y) < 100 && squirtle.y < 300 ){
    squirtle.x = 2000;
    squirtle.y = 2000;
    squirtle.state = "false";
    squirtle.caught = "true";
    squirtle.sound.play();
  }

  if(mouseIsPressed == true && dist(mouseX,mouseY, bulbasaur.x, bulbasaur.y) < 100 && bulbasaur.y < 575 ){
    bulbasaur.x = 2000;
    bulbasaur.y = 2000;
    bulbasaur.state = "false";
    bulbasaur.caught = "true";
    bulbasaur.sound.play();
  }

  // Game Logic Section //

  if (pikachu.caught == "true" && charmander.caught == "true" && squirtle.caught == "true" && bulbasaur.caught == "true" && elapsedTime < 30){
    gameStatus = "false";
    gameVictory = "true";
    timer = timer;
    text(winText.text1, width/2, height/5);
    text(winText.text2, width/2, height/4);
  }
  // else if ((pikachu.x > 1000 || pikachu.x < 0 ) || (pikachu.y > 850 || pikachu.y < 0)){
  //   pikachu.x = random(300,500);
  //   pikachu.y = random(200,300);
  // }

  // old movement code


  // if(gameStatus === 'true' && pikachu.x < width && pikachu.y < height){ 
  //   pikachu.x = pikachu.x+random(-5,4);
  //   pikachu.y = pikachu.y+random(-5,4);

  // }
  // else {
  
  // }

  // if(gameStatus === 'true'){
  //   color(255,255,255,1);
  //   rules.line1;
  // }

}


