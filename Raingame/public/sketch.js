var socket;
var drops = [];
var lifes = [];
var ship;
var score = 0;
var highscore = 0;
var lifelost = false;
var spliceIt = false;
var myVar;
var drawdata;
var linkie;

function setup() {
    createCanvas(innerWidth, innerHeight);
    for (let i = 0; i < 10; i++) {
        drops[i] = new Drop();
    };
    
        for (let i = 0; i < 4; i++) {
        lifes.push(1);
    };
    
    socket = io.connect('http://www.spesjaal.com/raingame/public/index.html'); // maakt connectie met de server vanaf de client
    //socket.on('mouse', newDrawing);
    resetSketch();
    socket.on('ship', newDrawing);

    // textje = createA("https://www.patientje.nl", "Patientje");
    textje = createA("https://www.patientje.nl/projecten/", 
    "Projecten", "_blank"); 
    
    textje.position(10, 10); 
}

function newDrawing(moreData) {
    if (moreData !== undefined) {
        drawdata = moreData;
    }
}

function mouseDragged(Ship) {
    //console.log(ship);
    var data = {
        x: ship.x
        , y: ship.y
        , w: ship.w
        , h: ship.h
    };
    //console.log(data.x);
    socket.emit('ship', data); // Emit is de brug naar de server
} //EINDE mouseDragged
function scoreIt() {
    this.score++;
    textSize(32);

    textje.position(10, 10); 
    // console.log(textje);
    text(score, 10, 60);
    text(this.highscore, 10, 90);

} //EINDE scoreIt
                                                                        //function loseLife() {
                                                                        //    lifelost = true;
                                                                        //    if (lifelost === true) {
                                                                        //        clearTimeout(myVar);
                                                                        //    }
                                                                        //} //EINDE loseLife            
function eindSpel() {
    if (lifes.length <= 1) {
        alert("You got wet");
        resetSketch();
    } //EINDE IF
} //EINDE EINDSPEL
//HIER BEGINT DE DRAW FUNCTIE
function resetSketch() {
    ship = new Ship();
//    this.highscore = 0;
    //        var data = {
    //        x: ship.x, 
    //        y: ship.y,
    //        w: ship.w,
    //        h: ship.h,
    //        score: highscore
    //    }
        for (let i = 0; i < 4; i++) {
        lifes.push(1);
    };
    //socket.emit('ship', data) // Emit is de brug naar de server
} //EINDE RESETSKETCH
function draw(moreData) {
    background(228, 246, 255);
    //BEGIN DROP HITS SHIP
    for (var i = 0; i < drops.length; i++) {
        if (frameCount % 40 == 0) {
            drops[i].push = new Drop();
        }
        if (drops[i].hits(ship)) {
            console.log("true");
            drops[i].highlight();
            lifes.splice(0,1);
            //loseLife();
            if (this.score > this.highscore) {
                this.highscore = this.score;
            }
            this.score = 0;
            
            eindSpel();
        } //EINDE IF DROPS HIT SHIP
        drops[i].show();
        drops[i].fall();
    }                                                                        //    } //EINDE FOR DROPS
                                                                                //    for (var j = lifes.length - 1; j >= 0; j--) {
                                                                                //        stroke(51);
                                                                                //        if (lifelost === true) {
                                                                                //            lifelost = false;
                                                                                //            lifes.splice(j, 1);
                                                                                //            console.log("happened");
                                                                                //        } //Einde if spliceIT
                                                                                //        line(innerWidth - 15 * j, 30, innerWidth - 15, 60);
                                                                                //    } //EINDE FOR LIFES ARRAY
    
    
    
    ship.show();
    ship.move();
    ship.limit();
    scoreIt();
//    mouseDragged();
//    newDrawing();
    fill(random(0,255),random(0,255),random(0,255));
    // rect(drawdata, height - 60, 20, 60);
    
} //EINDE DRAW
function keyReleased() {
    if (key != ' ') {
        ship.setDir(0);
    }
}

function keyPressed() {
    if (keyCode === RIGHT_ARROW) {
        ship.setDir(1);
    }
    else if (keyCode === LEFT_ARROW) {
        ship.setDir(-1);
    }
}