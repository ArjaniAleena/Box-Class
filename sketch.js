var box
var box1

function setup() 
{
  createCanvas(400, 400);
box = new Box(100,100,20,20,2)
box1 = new Box (150,150,20,20,3)
}

function draw() 
{
  background(220);
box.show()
box.move()

box1.show()
box1.move()

}

