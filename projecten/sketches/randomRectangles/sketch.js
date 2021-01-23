
function setup() {
  createCanvas(innerWidth, innerHeight);
  background(255)


  for (let i = 0; i < 1500; i++) {
   
   
    if(i%30 == 0) {
      fill(random(255),random(255),random(255))
    } else {
      fill(255)
    }
  // noStroke()
    // rect(random(1,500), random(1,500),random(15,150), random(15,150))    
    stroke(0, random(0,255));
    rect(random(1,width), random(1,height),random(5,250), random(5,250))
  }



  tint(255);

  // saveCanvas('myCanvas', 'jpg');
}