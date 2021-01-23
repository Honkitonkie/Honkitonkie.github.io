// Code based on code by wooooooood, based on code of Daniël Shiffman, based on code of Alca's Snowflakes
// See https://thecodingtrain.com/CodingChallenges/088-snowfall.html for full reference

let hooks = [];
let gravity;
let img;
let zOff = 0;
var c;
let spritesheet;
let textures = [];
var loopFrame = 150;
var xx, yy, wide, long, mobile, desktop, en = getUrlVars()["en"], content = getUrlVars()["utm_content"]
let vacatures, kandidaten

function preload() {
   spritesheet = loadImage('haak.png');
   font = loadFont('Urbana-Bold.otf');
   imgg = loadImage('Background.png')

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight -pos);
  
}


function setup() {
if(innerWidth > 450) {
  pos = 75;
  // console.log("desktop");
  desktop = true;
  c = createCanvas(windowWidth, windowHeight - pos);
  c.position(0, 75);
  c.style('z-index', '-1');
  xx = 150;
  yy = height/12;


  if(en){
  vacatures = createA("https://www.keser.nl/en/candidate/job-openings?utm_source=clang&utm_medium=email&utm_campaign=kerst&utm_content=" + content, 'Vacancies')
  vacatures.position(xx + 250, 420)
  vacatures.addClass("vacatures")
  } else{   
  vacatures = createA("https://www.keser.nl/kandidaat/vacatures?utm_source=clang&utm_medium=email&utm_campaign=kerst&utm_content=" + content, 'Vacatures')
  vacatures.position(xx + 250, 370)
  vacatures.addClass("vacatures")
  kandidaten = createA("https://www.keser.nl/werkgever/kandidaten?utm_source=clang&utm_medium=email&utm_campaign=kerst&utm_content=" + content, 'Kandidaten')
  kandidaten.position(xx + 250, 420)
  kandidaten.addClass("kandidaten")
  }
} else {
  pos = 100;
  // console.log("mobile");
  mobile = true;
    c = createCanvas(windowWidth, windowHeight - pos);
    c.position(0, pos);
    c.style('z-index', '-1');
    xx = 10;
    yy = 20;


    if(en){
      vacatures = createA("https://www.keser.nl/en/candidate/job-openings?utm_source=clang&utm_medium=email&utm_campaign=kerst&utm_content=" + content, 'Vacancies')
      vacatures.position(xx + 140, 350)
      vacatures.addClass("vacatures")
    } else{   
      vacatures = createA("https://www.keser.nl/kandidaat/vacatures?utm_source=clang&utm_medium=email&utm_campaign=kerst&utm_content=" + content, 'Vacatures')
      vacatures.position(xx + 140, 300)
      vacatures.addClass("vacatures")
      kandidaten = createA("https://www.keser.nl/werkgever/kandidaten?utm_source=clang&utm_medium=email&utm_campaign=kerst&utm_content=" + content, 'Kandidaten')
      kandidaten.position(xx + 140, 350)
      kandidaten.addClass("kandidaten")
    }
  }

  textFont(font);
  gravity = createVector(0, 0.3);
  for (let x = 0; x < spritesheet.width; x += 32) {
    for (let y = 0; y < spritesheet.height; y += 32) {
      let img = spritesheet.get(x, y, 32, 32);
      image(img, x, y);
      textures.push(img);
    }
  }
  
  for (let i = 0; i < 500; i++) {
    let x = random(width);
    let y = random(height);
    let design = random(textures);
    hooks.push(new Iconflake(x, y, design));
  }

}

function draw() {
if(desktop){ 
  background(0);
  stroke(255);
  strokeWeight(8)
// RAND
fill(0);
imageMode(CENTER);
  rect(
    xx,
    yy,
    430,
    450,
    25);
    strokeWeight(1)

    // BLOK OM RAND TE VERBERGEN
    fill(0)  
    noStroke()
  rect(
    xx + 79,
    yy + 410, 
    68, 
    50)
  stroke(255)

  //  PRAATHAAK
  strokeWeight(8)
  beginShape()
  vertex(xx +75, yy + 456)
  vertex(xx + 75, yy + 510)
  vertex(xx + 150, yy + 450)
  endShape()
  noStroke()
  strokeWeight(1)

  zOff += 0.1;

  for (flake of hooks) {
    let xOff = flake.pos.x / width;
    let yOff = flake.pos.y / height;
    let wAngle = noise(xOff, yOff, zOff) * TWO_PI;
    let wind = p5.Vector.fromAngle(wAngle);
    wind.mult(0.1);

    flake.applyForce(gravity);
    flake.applyForce(wind);
    flake.update();
    flake.render();
  }
  textSize(64);
  fill(255)


  if(en){
    text(' MAKES\n LIGHT\n WORK OFF\n 2021',   xx + 30, yy + 80);
  } else {
    text(' MAAKT\n WERK\n VAN\n 2021',   xx + 30, yy + 80);
  }
  
  imgg.resize(350,56)
  image(imgg, xx + 215,yy + 380)
  
  
  
  push()
  //BAL OP MUTS
  fill(255)
  ellipse(xx -4, height-177, 10, 10)

  //MUTS
  fill(255, 10,10)
  ellipse(xx, height-160, 30, 30)
  
  
  //HOOFD
  fill(255)
  ellipse(xx, height-125, 75, 75)
  

  //TORSO
  stroke(0)
  strokeWeight(1)
  ellipse(xx, height-50, 150, 150)
  
  //OGEN
  fill(0)
  ellipse(xx -10, height-155, 8, 8)
  ellipse(xx+10, height-155, 8, 8)
  

  //NEUS
  fill(255, 180,10)
  ellipse(xx, height-140, 8, 8)
  fill(255)
  
  
  //ARMEN
  stroke(150, 75, 0)
  strokeWeight(3)
  line(xx - 40, height-150,xx - 50, height-90)
  line(xx + 180, height-130,xx + 50, height-90)
  

  
  //BODEN
  noStroke()
  rect(0, height-20, width, 150)
  pop()


  //HIERONDER EINDE DESKTOP VERSIE
} else {
  background(0);
  stroke(255);
  strokeWeight(8)


// RAND
fill(0);
imageMode(CENTER);
  rect(
    xx,
    yy,
    260,
    350,
    25);
    strokeWeight(1)

    // BLOK OM RAND TE VERBERGEN
    fill(0)  
    noStroke()
  rect(
    xx + 55,
    yy + 330, 
    43, 
    20)
  stroke(255)

  //  PRAATHAAK
  strokeWeight(8)
  beginShape()
  vertex(xx + 55, yy + 350)
  vertex(xx + 55, yy + 400)
  vertex(xx + 100, yy + 350)
  endShape()
  noStroke()
  strokeWeight(1)

  zOff += 0.1;

  for (flake of hooks) {
    let xOff = flake.pos.x / width;
    let yOff = flake.pos.y / height;
    let wAngle = noise(xOff, yOff, zOff) * TWO_PI;
    let wind = p5.Vector.fromAngle(wAngle);
    wind.mult(0.1);

    flake.applyForce(gravity);
    flake.applyForce(wind);
    flake.update();
    flake.render();
  }
  textSize(52);
  fill(255)

  
  if(en){
    text(' MAKES\n LIGHT\n WORK OFF\n 2021', xx + 20, yy + 65);
  } else {
    text(' MAAKT\n WERK\n VAN\n 2021',   xx + 20, yy + 65);
  }
  



  imgg.resize(216,34)
  image(imgg, xx + 135,yy + 300)


  //SNEEUWPOP
  push()
  fill(255)

  // TOP VAN MUTS
  ellipse(xx + 150, height-125, 10, 10)
  
  //MUTS
  fill(255, 10,10)
  ellipse(xx + 150, height-110, 30, 30)
  
  
  //HOOFD
  fill(255)
  ellipse(xx + 150, height-75, 75, 75)
  
  //TORSO
  stroke(0)
  strokeWeight(1)
  ellipse(xx + 150, height+ 10, 150, 150)

  //OGEN
  fill(0)
  ellipse(xx + 160, height-105, 8, 8)
  ellipse(xx+ 140, height-105, 8, 8)
  
  //NEUS
  fill(255, 180,10)
  ellipse(xx + 150, height-95, 8, 8)
  fill(255)
  
  //ARMEN
  stroke(150, 75, 0)
  strokeWeight(3)
  line(xx + 100, height-40,xx + 70, height-90)
  line(xx + 200, height-40,xx + 270, height-90)
  

  
  // noStroke()
  noStroke()
  rect(0, height-10, width, 150 )
  pop()



} // EINDE MOBIEL


}


function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
		vars[key] = value;
	});
	return vars;
} //END getUrlVars	