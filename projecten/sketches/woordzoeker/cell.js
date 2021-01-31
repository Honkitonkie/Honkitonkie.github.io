
function Cell(i, j, w) {
  this.i = i;
  this.j = j;
  this.x = i * w + 50;
  this.y = j * w + 170;
  this.w = w;
  this.conflict = false;
  this.horizon = Math.floor(random(0, 2));
  this.value;
  this.centerX = 25;
  this.centerY = 9;
}

Cell.prototype.show = function () {
  stroke(0);
  noFill();
  rect(this.x, this.y, this.w, this.w);
};

Cell.prototype.contain = function (value) {
  if (this.value == undefined) {
    this.value = value;
    return false
  } else if (this.value == value) {
    this.value = value;
    return false;
  } else {
    return true;
  }
};

Cell.prototype.fillWitChars = function (value) {
  noStroke()
  fill(0)
  if (typeof this.value == "object") {
    this.value = generateRandomLetter()
    text(this.value, 50 + ((this.i + 1) * this.w) - this.centerX, 170 + ((this.j + 1) * this.w) - this.centerY)
  } else {
    text(this.value, 50 + ((this.i + 1) * this.w) - this.centerX, 170 + ((this.j + 1) * this.w) - this.centerY)
  }
};

function Word(w, tempIndex, word) {
  this.word = word
  this.start = GetStart(this.word)
  this.direction = Math.floor(Math.random() * 3);
  this.i = this.start[0];
  this.j = this.start[1];
  this.x = this.i * w + 50;
  this.y = this.j * w + 170;
  this.w = w;
  this.centerX = 25;
  this.centerY = 9;
  let conflict;

  while (
    this.direction == 0 && this.start[0] + word.length > cols || this.start[1] + word.length > rows ||
    this.direction == 1 && this.start[0] + word.length > cols ||
    this.direction == 2 && this.start[1] + word.length > rows) {
    this.start = GetStart(this.word)
  }

  if (this.word.join("") == "GEVONDEN") {
    push()
    noFill()
    strokeWeight(2)
    angleMode(DEGREES);
    this.time = Math.floor(Math.random() * 2)
    stroke(255, 0, 0)
    switch (this.direction) {
      case 0:
        if (this.time == 0) {
          line(55 + ((this.start[0] + 1) * this.w) - this.centerX,
            160 + ((this.start[1] + 1) * this.w) - this.centerY,
            20 + ((this.start[0]) * this.w) + (this.word.length * this.w) + this.centerX,
            160 + ((this.start[1]) * this.w) + (this.word.length * this.w) + this.centerY);
        } else {
          translate(this.start[0] * this.w, this.start[1] * this.w);
          rotate(45);
          rect(155, 70, (this.word.length + 3.5) * this.w, this.w - (this.w / 3) / 2, 20);
        }
        break;
      case 1:
        if (this.time == 0) {
          line(55 + ((this.start[0] + 1) * this.w) - this.centerX,
            160 + (this.start[1] + 1) * this.w - this.centerY,
            60 + ((this.start[0]) * this.w) + (this.word.length * this.w) - this.centerX,
            160 + (this.start[1] + 1) * this.w - this.centerY);
        } else {
          translate(this.start[0] * this.w, this.start[1] * this.w);
          rect(50, 170, (this.word.length) * this.w, this.w, 20);
        }
        break;
      case 2:
        // rect(this.start[0] + 1 * this.w,this.start[1] + 1, this.w * word.length, this.w, 20);
        if (this.time == 0) {
          line(58 + ((this.start[0] + 1) * this.w) - this.centerX,
            160 + ((this.start[1] + 1) * this.w) - this.centerY,
            58 + ((this.start[0] + 1) * this.w) - this.centerX,
            160 + ((this.start[1]) * this.w) + (this.word.length * this.w) + this.centerY);
        } else {
          translate(this.start[0] * this.w, this.start[1] * this.w);
          rect(50, 170, this.w, this.word.length * this.w, 20);
          rotate(90);
        }
        break;
      default:
    }
    pop()
    setTimeout(function () { check = true; console.log("done"); }, 250);
  }


  for (let j = 0; j < this.word.length; j++) {
    switch (this.direction) {
      case 0:
        if (grid[this.start[0] + j][this.start[1] + j]) {
          conflict = grid[this.start[0] + j][this.start[1] + j].contain(this.word[j]);
        }
        break;
      case 1:
        if (grid[this.start[0] + j][this.start[1]]) {
          conflict = grid[this.start[0] + j][this.start[1]].contain(this.word[j]);
        }
        break;
      case 2:
        if (grid[this.start[0]][this.start[1] + j]) {
          conflict = grid[this.start[0]][this.start[1] + j].contain(this.word[j]);
        }
        break;
      default:
    }
    if (conflict) {
      window.location.reload(1);
    }
  }

}

GetStart = function () {
  this.start = Math.floor(Math.random() * tempIndex.length);
  this.start = tempIndex[this.start];
  return this.start
}

function generateRandomLetter() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return alphabet[Math.floor(Math.random() * alphabet.length)]
}