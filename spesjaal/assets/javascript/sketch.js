var dots = [];
var spesjalen = [];
var spesjaal;
var x = 0; 
var y = Math.floor(Math.random() * innerHeight);
var rand = Math.floor(Math.random() * 5);
var items = [];

//document.getElementById("spes").innerHTML = 0;
//console.log(hoeveel);
function setup() {

	canvas = createCanvas(windowWidth, windowHeight -25);
    canvas.position(0, 25);
    canvas.style('z-index', '-3');

for (var i = 0; i < 3; i++) {
spesjalen[i] = new Spesjaal();        
}//CONSTRUCTOR SPESJAAL
for (var i = 0; i < 50; i++) {
dots[i] = new Dott();        
}//CONSTRUCTOR DOTT  
//loadJSON('ABN.postman_collection.json', gotData, 'jsonp');
    //loadJSON('item.json', gotData, 'jsonp');
    

    
}//EINDE SETUP


function gotData(){
    console.log(data);
}


function draw() {
    background(0);
    noStroke();
    fill(255);
    ellipse(20, 60, 500, 500);

    
for (var i = 0; i < dots.length; i++){
    stroke(255);
    point(dots[i].x, dots[i].y);
    
    if (i > 15){
    dots[i].x += 0.20;
    };
    if (i > 30){
    dots[i].x -= 0.20;
    };
    if (i > 45){
    dots[i].x += 3;
    dots[i].y += 3;
    };
    if (i > 48){
    dots[i].x -= 3;
    dots[i].y -= 3;
    };
    
    if (dots[i].x > width){
    dots[i].x = 0;
    };
    if (dots[i].x < 0){
    dots[i].x = width;
    };
    if (dots[i].y > height){
    dots[i].y = 0;
    };
    if (dots[i].y < 0){
    dots[i].y = height;
    };
    
    
    };
for (var i = 0; i < spesjalen.length; i++){
image(
    this.spesjaal,
    this.x, 
    this.y, 
    this.spesjaal.width/16, 
    this.spesjaal.height/16); //EINDE IMAGE
    
    spesjalen[i].move();
    spesjalen[i].update();
    };
    var urlPath = getURLPath();
    //console.log(urlPath);
if(urlPath.indexOf('product-page.php') >= 0){
    //console.log(items);
  if(items.itemName === "spesjaal"){
  document.getElementById("spes").innerHTML = "hoi";
  document.getElementById("spas").innerHTML = "hoi";
  document.getElementById("coll").innerHTML = "hoi";
     console.log("hooooi");
  }
}
 


}//EIDNE DRAW
function mousePressed(){
   
    for (var i = 0; i < spesjalen.length; i++){
   console.log("uit constructor")
    if (spesjalen[i].clicked() === true){
    console.log("in")
    spesjalen.splice(i,1);
    spesjaalitem()
    }

    //document.getElementById("spas").innerHTML += 1;
    
    };        
}//EINDE MOUSEPRESSED
function Spesjaal() {
spesjaal = loadImage('spesjaal/spesjaal.png');
x = -30;
y = random(innerHeight, 0);
    
    
this.clicked = function(){
    var d1 = dist(mouseX, mouseY,  x, (y + 20) );
    var d2 = dist(mouseX, mouseY, (x + 25), (y + 20));
    var d3 = dist(mouseX, mouseY, (x + 50), (y + 20));
    var d4 = dist(mouseX, mouseY, (x + 75), (y + 20));
    var d5 = dist(mouseX, mouseY, (x + 100), (y + 20));
    var d6 = dist(mouseX, mouseY, (x + 125), (y + 20));
    var d7 = dist(mouseX, mouseY, (x + 150), (y + 20));
    var d8 = dist(mouseX, mouseY, (x + 175), (y + 20));
    var d9 = dist(mouseX, mouseY, (x + 200), (y + 20));
    var d10 = dist(mouseX, mouseY, (x + 225), (y + 20));
    var d11 = dist(mouseX, mouseY, (x + 240), (y + 20));

   
    //console.log(x, y);  
    if (d1 < 20 || d2 < 20 || d3 < 20 || d4 < 20 || d5 < 20 || d6 < 20 || d7 < 20 || d8 < 20 || d9 < 20 || d10 < 20 || d11 < 20){ 
    
 
        //spesjalen.splice(0,1);
    
        return true;
    }
    
    };//EINDE THIS.CLICKED
this.move = function(){
   x = x + random(1,4);  
    
    
    
    };//EINDE THIS.MOVE
this.update = function(){
    if (x > width){
        
        x = -30;
        y = random(0, innerHeight);
    }

}//EINDE THIS.UPDATE
}//EINDE SPESJAAL
function Dott() {
  this.x = random(0, width);
  this.y = random(0, height);
  
}//EINDE DOTT


function spesjaalitem() {
    items.push({
      "itemName": "spesjaal",
      "priceInCents": 1499,
      "quantity": 1
    });
}

function collosjaalitem() {
    items.push({
      "itemName": "collosjaal",
      "priceInCents": 1499,
      "quantity": 1
    });
}

function spacesjaalitem() {
    items.push({
      "itemName": "spacesjaal",
      "priceInCents": 1499,
      "quantity": 1
    });
}

