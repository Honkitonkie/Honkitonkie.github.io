var lijnen = [];
function setup() {
    canvas = createCanvas(innerWidth, innerHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-3');
    
    for (var i = 0; i < 1; i++) {
lijnen[i] = new Lijn();
        
}
    
}





function draw() {
    background(0);
    for (var i = 0; i < lijnen.length; i++){

 lijnen[i].update();
 lijnen[i].display();


        
     
        

    };
   
}    