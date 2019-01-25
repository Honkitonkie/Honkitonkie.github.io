function Lijn() {
this.history = [];
x = 0;
y = height/2 + height/5;
standaard = height/2 + height/5;
breed=0;
hoogte= height/4;

    //BEGIN THIS.UPDATE FUNCTIE    
this.update = function(){

if (width > 1200){
    x+= 15;
} else if(width > 600 && width < 1200) {
    x+=7;
} else{
    x+=5;
}

if (x > width){
  x=0;   
}
 var v = createVector(x, y);
this.history.push(v);
}
     
this.display = function(){
noStroke();
fill(0,255,0);
    
if (width < 600){
    y = 125;
standaard = 125;
}
for (var i =0; i < this.history.length; i++){       
    var pos = this.history[i];

    ellipse(pos.x,pos.y,(breed -i),(breed-i)); 

if (width > 1200 && i > 15){
   this.history.splice(0, 1); 
} else if(width > 600 && width < 1200 && i > 10) {
   this.history.splice(0, 1); 
} else if (i > 5 && width < 600){
   this.history.splice(0, 1); 
}
    
//BEATING HEART
//if (pos.x > width/4){
//  pos.y = hoogte;
//} 
//if (pos.x > (width/2 +100)){
//  pos.y= standaard;
//}   
//if (x > width/4){
//  y = hoogte;
//} 
//if (x > (width/2 +100)){
//  y= standaard;
//}  
if (x > width/5 && x < width/4){
  y-=1;
} 
if (x > width/4 && x < (width/4 + width/5 - width/7)){
  y+=1;
} 
    
if (x > (width/5 * 3) && x < ((width/4 * 3) - width/10)){
  y-=3;
} 
if (x > ((width/4 * 3) - width/10)){
  y+=3;
} 
    
if (y > standaard){
    y= standaard;
}

//if (x > width/4 && (y == standaard || y > standaard)){
//  y = standaard;
//} 

    
    
    
    
    
    
//BEATING HEART       
    
}
 




}//EINDE THIS.DISPLAY FUNCTIE

        
    };//EINDE CONSTRUCTOR