function setup() {
  let canvas = createCanvas(innerWidth, innerHeight - 52);
  canvas.position(0, 50);
  background("#2d62b7")
  for (let i = 0; i < 500; i++) {
    if (i % 15 == 0) {
      fill(random(255), random(255), random(255))
    } else {
      fill(255)
    }
    stroke(0, random(0, 255));
    rect(random(-50, width), random(-50, height), random(5, 250), random(5, 250))
  }
}

function mouseClicked() {
  background("#2d62b7")
  for (let i = 0; i < 500; i++) {
    if (i % 15 == 0) {
      fill(random(255), random(255), random(255))
    } else {
      fill(255)
    }
    stroke(0, random(30, 255));
    rect(random(-50, width), random(-50, height), random(5, 250), random(5, 250))
  }
}