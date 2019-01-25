function Ship() {
    this.x = width / 2;
    this.xdir = 0;
    this.y = height - 60;
    this.w = 20;
    this.h = 60;
    this.show = function () {
        fill(51);
        rect(this.x, this.y, this.w, this.h);
    }
    this.setDir = function (dir) {
        this.xdir = dir;
    }
    this.move = function (dir) {
        this.x += this.xdir * 8;
        //  this.x = mouseX;
        //this.y = mouseY;
    }
    this.limit = function () {
            if (this.x < 0) {
                this.x = innerWidth;
            } //IF
            else if (this.x > innerWidth) {
                this.x = 0;
            } //ELSE IF
        } //LIMIT
} //:CONSTRUCTOR