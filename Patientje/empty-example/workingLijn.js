function Lijn() {
var count = 0;
this.history = [];
this.x = 0;
this.y = height/2;
var breed = map(this.x, 0, width, 0, 100);
var hoog =  map(this.y, 0, height, 0, 100);
var beat = width / 2;
var beat1 = beat + 15;
var beat2 = beat1 + 15;
var pp;
var kk;

    
var prebeat = beat1 - 20;
var afterbeat = beat2 + 30;
    
    //BEGIN THIS.UPDATE FUNCTIE    
this.update = function(){

}




this.count = function(){
    count += 1;
    if (count > 100){
        count = 0;
    };
};//EINDE THIS.COUNT FUNCTIE      
this.display = function(){


    background(0, 0, 0);

        stroke(0);
        noFill();

    var v = createVector(this.x, this.y);
    this.history.push(v);
    this.x += 12;
    
        for (var i = 0; i < this.history.length; i++){       
    var pos = this.history[i];
    }
    
    


//GROTE BEAT
if (this.x > beat && this.x < beat1 ) {
    this.y -= 55;
    
} else if (this.x > beat1 && this.x < beat2) {
    this.y += 75;

} else if (this.x > beat2) {
    this.y = height/2;       
} 


    
    
    

if (this.x > width){
   this.x = 0;
   pp = 0;
   kk = height/2;
} else {
 pp = pos.x; 
 kk = pos.y;
}
    

    

    
    
    
    
    
if (this.history.length > 150){
   var lengte = this.history.length;
            if (lengte == 25){
                this.history.splice(0,10); 
            } else {
                this.history.splice(0,1); 
            }
// console.log(lengte); ALS JE DE SNELHEID OF LENGTE VAN DE LIJN AANPAST GAAT HET HIER MIS!!!   
    
       
    }
 


    
//    if (pos.x > width){
//   this.x = 0;
//    } else if (pos.x > 500 && pos.x < 525 ){
//        pos.y = height/10;
//    } else {
//        pos.y = height/4;
//    }
// 

        
beginShape();
//    for (var i = 0; i < this.history.length; i++){
//    var pos = this.history[i];
//     console.log(pos);
    

    stroke(0,255,0);
            //line(this.x, this.y, pos.x, pos.y);
    //console.log(pos);
    //vertex(pos.x, pos.y);

vertex(this.x, this.y);

vertex(pp, kk);

endShape(CLOSE);



}//EINDE THIS.DISPLAY FUNCTIE

        
    };//EINDE CONSTRUCTOR