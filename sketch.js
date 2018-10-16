var entities = [];
var g = 398/60;
var colorList = ['#86DEB7',
                 '#63B995',
                 '#FF6F59',
                 '#DB504A',
                 '#FED18C'];

var Entity = function (x, y) {
    this.color = [random(colorList)];
    this.x = x;
    this.y = y;
    this.speed = [random(-25,25),0];
    this.size = 70;
    this.update = function () {
        this.x += this.speed[0];
        this.y += this.speed[1];
        if (this.x + (this.size/2) > width || this.x < 0) {
            this.speed[0] = -this.speed[0];
            this.x += (this.speed[0] * 2);
        }
        if (this.y + (this.size/2) > height) {
            this.speed[1] = -this.speed[1]*0.7;
            this.y += (this.speed[1] * 2);
        }
        this.speed[1] += g;

    }

    this.draw = function () {
        ellipse(this.x, this.y, this.size);

    }
}


function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0)
}

function draw() {
        background('#AFFFEC')
        noStroke();

    for (let i = 0; i < entities.length; i++) {
        entities[i].update();
    }
    for (let i = 0; i < entities.length; i++) {
        fill(entities[i].color);
        entities[i].draw();
    }
    textSize(20);
text('click anywhere', 50, 50);

}

document.onclick = function (e) {
    entities.push(new Entity(e.clientX,e.clientY));
}
