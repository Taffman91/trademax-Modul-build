var data;
var selectedSerieObject = 0;
var serieObjects = [];
var serieBilder = [];
var modulObjects = [];
var modulBilder = [[],[]];

function preload(){
  data = loadJSON("info.json", jsonLoaded);
}

function jsonLoaded(data1){
  data = data1;

    for (var i = 0; i < data.utemobler.length; i++){
      serieBilder[i] = loadImage(data.utemobler[i].serieimageURL);
      for (var j = 0; j < data.utemobler[i].data.length; j++){
        modulBilder[i][j] = loadImage(data.utemobler[i].data[j].imageURL);
      }
    }
}

function setup() {

    createCanvas(window.innerWidth - 10, window.innerHeight - 10);
    for (var i = 0; i < data.utemobler.length; i++){
        serieObjects[i] = new serieObject(20+(i*200),20,i,serieBilder[i], data.utemobler[i].namn);
    }
    for (var i = 0; i < data.utemobler[selectedSerieObject].data.length; i++){
        modulObjects[i] = new modulObject(20,140+(i*120),i,
        modulBilder[selectedSerieObject][i],
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
