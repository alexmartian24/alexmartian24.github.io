backgroundColor = "#5accf1"
let snowflakeArr = [];

function setup() {
  tree = loadImage("images/snowyTree.jpg");
  createCanvas(500,600);
}

function draw() {
  noStroke();
  background(backgroundColor);
  image(tree, 0, 60, 500, 500);
  fill("#000000");
  rect(0, 550, 500, 50);
}
class Snowmound{}
class Snowflake{
  constructor(x, y){
  this.x = x
  this.y = y
  this.color = "snow";
  this.size = random(0,5);
  this.angle = random(10, 1*PI);
  this.radius = sqrt(random(pow(width / 1, 2)));
  }
  cleanup(){
    for (i = 0; i < snowflakeArr.length(); i++){
      if (snowflakeArr[i].this.x >=500)
        splice(i, 1);
    }
  }
  fall(){}
}


