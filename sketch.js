// Coding Rainbow
// Daniel Shiffman
// http://patreon.com/codingtrain
// Code for: https://youtu.be/fcdNSZ9IzJM

var tree = [];


function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(150, 150);
    canvas.style('z-index', '3');
  var root = new Branch();
  tree[0] = root;

}


function draw() {
fill(51)
  for (var j = 0; j < tree.length; j++) {
    tree[j].show();
      tree[j].move();
      tree[j].grow();
       ellipse(this.x, this.y, this.r, this.r);
    //tree[i].jitter();
  }



}