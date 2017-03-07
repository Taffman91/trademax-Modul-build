var data;
var selectedSerieObject = 0;
var serieObjects = [];
var modulObjects = [];

function preload(){
  data = loadJSON("info.json");
}

function setup() {
    createCanvas(window.innerWidth - 10, window.innerHeight - 10);
    for (var i = 0; i < data.utemobler.length; i++){
        serieObjects[i] = new serieObject(20+(i*200),20,i,data.utemobler[i].serieimageURL, data.utemobler[i].namn);
    }
    for (var i = 0; i < data.utemobler[selectedSerieObject].data.length; i++){
        modulObjects[i] = new modulObject(20,220+(i*200),i,
        data.utemobler[selectedSerieObject].data[i].imageURL,
        data.utemobler[selectedSerieObject].data[i].name);
    }
}

function draw(){
    background(255);
    for (var i = 0; i < serieObjects.length; i++){
      serieObjects[i].show(selectedSerieObject);
    }
    for (var i = 0; i < modulObjects.length; i++){
      modulObjects[i].show();
    }
}

function mousePressed(){
    for (var i = 0; i < serieObjects.length; i++ ){
      var dist1 = int(dist(mouseX, mouseY, serieObjects[i].x+imageSizeX/2,serieObjects[i].y+imageSizeY/2));
      if(dist1<imageSizeX/2){
        selectedSerieObject = i;
      }
    }
}
