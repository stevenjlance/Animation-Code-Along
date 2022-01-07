var horse;


function preload(){
	horse = loadImage("horse.png")
}

function setup() {
  createCanvas(600, 600);
    
}

function draw() {
  background(255);
  image(horse, 50, 50)
	
}