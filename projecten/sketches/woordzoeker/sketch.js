function make2DArray(cols, rows) {
  var arr = new Array(cols);
  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

function pickstart(words) {
  words = words.toUpperCase();
  words = words.split(" ");
  tempWord = []
  for (let vac = 0; vac < words.length; vac++) {
    tempWord.push(words[vac].split(""))
  }

  for (let i = 0; i < tempWord.length; i++) {
    let contain = new Word(w, tempIndex, tempWord[i]);
  }
}

let zoekWoorden = "LOREM IPSUM DOLOR"
var grid, cols, rows, check = false;
var w = 35;
let tempIndex = [];
let tempArray = [];

function setup() {
  let canvas = createCanvas(innerWidth, innerHeight - 50);
  canvas.position(0, 50);
  background(234, 232, 219);
  textSize(22)
  zoekWoorden = "GEVONDEN " + zoekWoorden;
  cols = floor((width / 3 * 2) / w);
  rows = floor((height / 3 * 2) / w);
  grid = make2DArray(cols, rows);
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j] = new Cell(i, j, w);
    }
  }
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      tempIndex.push([i, j]);
    }
  }
  pickstart(zoekWoorden)
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j].contain(tempArray);
    }
  }
  tempWord = zoekWoorden.split(" ");
  for (let index = 0; index < tempWord.length; index++) {
    text(tempWord[index], (width / 3) * 2.2, (height / 3) + (60 * index));
  }
  push()
  textSize(50);
  text("Woordzoeker", width / 2 - 175, 100)
  stroke(230, 0, 0);
  noFill();
  rect((width / 3) * 2.18, (height / 3) - 25, 150, w, 20);
  pop();
}

function draw() {
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j].show();
      if (check) {
        grid[i][j].fillWitChars();
      }
    }
  }
}
