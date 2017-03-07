var data;
var selectedSerieObject = 0;

function preload(){
  data = loadJSON("info.json");
}

function setup() {
    createCanvas(window.innerWidth - 10, window.innerHeight - 10);

}

function draw(){
    background(255);
    rect(200, 200, data.utemobler[0].data[0].width,data.utemobler[0].data[0].height);
}
