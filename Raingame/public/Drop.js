function Drop() {
    this.x = random(width);
    this.y = random(-500, -50);
    this.z = random(0, 10);
    this.len = map(this.z, 0, 20, 10, 20);
    this.yspeed = map(this.z, 0, 20, 1, 20);
    this.isImmortal = false;
    this.fall = function () {
        this.y = this.y + this.yspeed;
        var grav = map(this.z, 0, 20, 0, 0.2);
        this.yspeed = this.yspeed + grav;
        if (this.y > height) {
            this.y = random(-200, -100);
            this.x = random(width);
            this.yspeed = map(this.z, 0, 20, 4, 10);
        }
    }
    this.show = function () {
        var thick = map(this.z, 0, 20, 1, 3);
        strokeWeight(thick);
        stroke(10, 10, 255);
        line(this.x, this.y, this.x, this.y + this.len);
    }
    this.hits = function (ship) {
            //console.log(ship.x, ship.y);
            if (this.y > ship.y && this.y < height) {
                if (this.x > (ship.x - (ship.w / 2)) && this.x < (ship.x + (ship.w / 2))) {   
                    return true;
                }
            }
        } //EINDE THIS.HITS
    this.highlight = function() {
        background(200);
    }
    
    
}; //EINDE CONSTRUCTOR