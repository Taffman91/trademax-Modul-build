var data;

function preload(){
  data = loadJSON("info.json");
}

function setup() {
    createCanvas(window.innerWidth - 10, window.innerHeight - 10);

}

function draw(){
    background(255);
    fill(0);
    stroke(0);
    rect(window.innerWidth/2, window.innerHeight/2, data.bahamas[0].width, data.bahamas[0].height);
}
