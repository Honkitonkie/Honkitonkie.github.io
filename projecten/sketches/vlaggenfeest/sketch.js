/*
Based on code of Daniel Shiffman
https://www.youtube.com/thecodingtrain/
https://www.patreon.com/codingtrain
*/

let circles = [];
let counter = 0;
let r = 9, g = 149, b = 204;
let frans, duits, engels, spaans, nederlands;
let pics = [];

function preload() {
  frans = loadImage('assets/fr_round.png');
  nederlands = loadImage('assets/nl_round.png');
  engels = loadImage('assets/eng_round.png');
  duits = loadImage('assets/du_round.png');
  spaans = loadImage('assets/sp_round.png');
  pics.push(engels, nederlands, duits, spaans, frans)
}


class Circle {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.r = random(12, 48);
  }
}

function setup() {
  let canvas = createCanvas(innerWidth, innerHeight - 52);
  canvas.position(0, 50);
  background(255);

  while (circles.length < 1000) {
    let overlapping = false;
    let proposalCircle = new Circle();
    for (let j = 0; j < circles.length; j++) {
      let existingCircle = circles[j];
      let d = dist(
        proposalCircle.x,
        proposalCircle.y,
        existingCircle.x,
        existingCircle.y
      );
      if (d < proposalCircle.r + existingCircle.r) {
        overlapping = true;
        break;
      }
    }
    if (!overlapping) {
      circles.push(proposalCircle);
      noStroke();
      fill(0, 255, 250, 100);
      image(random(pics), proposalCircle.x, proposalCircle.y, proposalCircle.r * 2, proposalCircle.r * 2);
    }

    counter++;
    if (counter > 100000) {
      break;
    }



  }
}