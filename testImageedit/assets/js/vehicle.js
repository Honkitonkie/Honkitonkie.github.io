// Daniel Shiffman
// http://codingtra.in
// Steering Text Paths
// Video: https://www.youtube.com/watch?v=4hA7G3gup-4

function Vehicle(x, y) {
  this.target = createVector(x, y);
  this.test = floor(random(8)) 
if(this.test === 1){
  this.testx = random(width, width*2)
  } else if(this.test === 2) {
  this.testy = random(height, height * 2); 
  } else if(this.test === 3){
  this.testx = random(-50, -100)
  } else if(this.test === 4){
  this.testx = random(-50, -100)
  this.testy = random(-50, -100)
  }  else if(this.test === 5){
  this.testx = random(width , width*2)
  this.testy = random(height, height * 2); 
  }  else if(this.test === 6){
  this.testx = random(width , width*2)
  this.testy = random(-50, -100)
  }  else if(this.test === 7){
  this.testx = random(width , width*1)
  this.testy = random(-50, -100)
  } else {
  this.testy = random(-50, -100); 
  }  

if (this.testx === undefined) {
  this.testx = random(-50, -100); 
  }  else if(this.testy === undefined) {
  this.testy = random(-50, -100); 
  } else {
  
  }
  
  this.target2 = createVector(this.testx, this.testy);
  this.pos = createVector(this.testx, this.testy);

  this.vel = p5.Vector.random2D();
  this.acc = createVector();
  this.r = 1;
  this.maxspeed = 35;
  this.maxforce = 10;
  this.check = false;
}

Vehicle.prototype.behaviors = function() {
  var arrive = this.arrive(this.target);
  var leave = this.leave(this.target2);

  arrive.mult(2);
  leave.mult(4);
  this.applyForce(arrive);
 if (check){
  this.applyForce(leave);
}

};

Vehicle.prototype.applyForce = function(f) {
  this.acc.add(f);
};

Vehicle.prototype.update = function() {
  this.pos.add(this.vel);
  this.vel.add(this.acc);
  this.acc.mult(0);
};

Vehicle.prototype.show = function() {
  stroke(255);
  strokeWeight(this.r);
   point(this.pos.x, this.pos.y);
};

Vehicle.prototype.arrive = function(target) {
  var desired = p5.Vector.sub(target, this.pos);
  var d = desired.mag();
  var speed = this.maxspeed;
  if (d < 100) {
    speed = map(d, 0, 100, 0, this.maxspeed);
  }
  desired.setMag(speed);
  var steer = p5.Vector.sub(desired, this.vel);
  steer.limit(this.maxforce);
  return steer;
};

Vehicle.prototype.flee = function(target) {
  var desired = p5.Vector.sub(target, this.pos);
  var d = desired.mag();
  if (d < 50) {
    desired.setMag(this.maxspeed);
    desired.mult(-1);
    var steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxforce);
    return steer;
  } else {
    return createVector(0, 0);
  }
};


Vehicle.prototype.leave = function(target2) {
  var desired = p5.Vector.sub(target2, this.pos);
  var d = desired.mag();
  var speed = this.maxspeed;
  if (d < 100) {
    speed = map(d, 0, 100, 0, this.maxspeed);
  }
  desired.setMag(speed);
  var steer = p5.Vector.sub(desired, this.vel);
  steer.limit(this.maxforce);
  return steer;
};



//STEERINGBEHAVIOURS
function VehicleNEW(x, y, size) {
  this.pos = createVector(random(width), random(height));
  this.target = createVector(x, y);
  this.vel = p5.Vector.random2D();
  this.acc = createVector();
  if (size != null) {
      this.r = size;
  } else {
      this.r = 2;
  }
  this.maxspeed = 50;
  this.maxforce = 50;
}

VehicleNEW.prototype.behaviors = function () {
  var arrive = this.arrive(this.target);
  var mouse = createVector(mouseX, mouseY);
  var flee = this.flee(mouse);

let numb = 5;
if (counter > 40) {
  numb=1;
}



if(goBack){
  arrive.mult(numb);
  flee.mult(6);
} else {
  arrive.mult(1);
  flee.mult(6);
}

  this.applyForce(arrive);
  this.applyForce(flee);
}

VehicleNEW.prototype.applyForce = function (f) {
  this.acc.add(f);
}

VehicleNEW.prototype.update = function () {
  this.pos.add(this.vel);
  this.vel.add(this.acc);
  this.acc.mult(0);
}

VehicleNEW.prototype.show = function () {
  stroke(255);
  strokeWeight(this.r);
  point(this.pos.x, this.pos.y);
}


VehicleNEW.prototype.arrive = function (target) {
  var desired = p5.Vector.sub(target, this.pos);
  var d = desired.mag();
  var speed = this.maxspeed;
  if (d < 100) {
      speed = map(d, 0, 100, 0, this.maxspeed);
  }
  desired.setMag(speed);
  var steer = p5.Vector.sub(desired, this.vel);
  steer.limit(this.maxforce);
  return steer;
}

VehicleNEW.prototype.flee = function (target) {
  var desired = p5.Vector.sub(target, this.pos);
  var d = desired.mag();
  if (d < 50) {
      desired.setMag(this.maxspeed);
      desired.mult(-1);
      var steer = p5.Vector.sub(desired, this.vel);
      steer.limit(this.maxforce);
      return steer;
  } else {
      return createVector(0, 0);
  }
}

VehicleNEW.prototype.clone = function () {
  var v = new VehicleNEW(this.pos.x, this.pos.y);

  v.pos.x = this.pos.x;
  v.pos.y = this.pos.y;

  v.vel.x = this.vel.x;
  v.vel.y = this.vel.y;

  v.acc.x = this.acc.x;
  v.acc.y = this.acc.y;

  return v;
}

// Daniel Shiffman
// http://codingtra.in
// Steering Text Paths
// Video: https://www.youtube.com/watch?v=4hA7G3gup-4

class VehicleOLD {
  constructor(pt) {
    //this.pos = createVector(random(width), random(height));
    this.pos = createVector(pt.x,pt.y);
    //this.target = createVector(x, y);
    this.target = createVector(width/2, height/2);
    this.vel = p5.Vector.random2D();
    this.acc = createVector();
    this.r = 6;
    this.maxspeed = 100;
    this.maxforce = 1;
  }

  behaviors() {
    var arrive = this.arrive(this.target);
    var mouse = createVector(mouseX, mouseY);
    var flee = this.flee(mouse);

    arrive.mult(1);
    flee.mult(3);

    //this.applyForce(arrive);
    //this.applyForce(flee);
  }

  applyForce(f) {
    this.acc.add(f);
  }

  update() {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0);
  }

  
  show() {
   stroke(255);
   strokeWeight(this.r);
    //point(this.pos.x, this.pos.y);

    //rect(this.pos.x, this.pos.y, 50, 100);
   pop();
  }

//  showWall() {
//    walls.push(new Boundary(this.pos.x - this.r, this.pos.y- this.r, this.pos.x + this.r, this.pos.y + this.r));
//   }




  arrive(target) {
    var desired = p5.Vector.sub(target, this.pos);
    var d = desired.mag();
    var speed = this.maxspeed;
    if (d < 100) {
      speed = map(d, 0, 100, 0, this.maxspeed);
    }
    desired.setMag(speed);
    var steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxforce);
    return steer;
  }

  flee(target) {
    var desired = p5.Vector.sub(target, this.pos);
    var d = desired.mag();
    if (d < 50) {
      desired.setMag(this.maxspeed);
      desired.mult(-1);
      var steer = p5.Vector.sub(desired, this.vel);
      steer.limit(this.maxforce);
      return steer;
    } else {
      return createVector(0, 0);
    }
  }
}