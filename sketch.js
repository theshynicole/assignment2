function setup(){
    createCanvas(720,480);
    background(237,255,232);
    
    var i=0;
    var rand=random(720);
    var rand=random(50,720);
}

function draw(){
    fill(500);
    stroke(111,130,161);
    quad(mouseX,mouseY,500,500,86,20,69,63,30,76);
    // With quad, I added the mouseX and mouseY to quad so that when you move your mouse, the shape would change as well.
    describe('irregular white quadrilateral with black outline');
    // link to p5 reference for shape quad:https://p5js.org/reference/#/p5/quad
}

function mousePressed(){
    saveCanvas("assignment2","png")
    // link to p5 reference for saveCanvas:https://p5js.org/reference/#/p5/saveCanvas
    // link to p5 reference for mousePressed:https://p5js.org/reference/#/p5/mousePressed
    // With mouse pressed, I used the saveCanvas to save a image when you click on the website
}