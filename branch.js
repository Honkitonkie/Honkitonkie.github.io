function Branch() {
  this.finished = false;
  this.len = 150;
  this.x =150;
  this.y =150;
  this.r = 150;
  
  this.number = random(0.8 ,0.15);
  this.count = 1;

  this.show = function() {
    stroke(255);

  
ellipse(this.x, this.y, this.r, this.r);
   
  }

  this.move = function(){
if(this.r > 0.08){
    this.x +=1;
    this.r *= 0.99;
   
}
              //console.log(this.number);
  }
  

  
  this.grow = function(){

  }
      

      
  


}//Einde Branch


