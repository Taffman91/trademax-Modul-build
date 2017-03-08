var data;
var selectedSerieObject = 1;
var serieObjects = [];
var serieBilder = [];
var modulObjects = [];
var modulBilder = [
    [],
    []
];
var SerieImageSizeX = 150;
var SerieImageSizeY = 100;
var modulImageSizeX = 150;
var modulImageSizeY = 100;

function preload() {
    data = loadJSON("info.json", jsonLoaded);
}

function setup() {

    createCanvas(window.innerWidth - 10, window.innerHeight - 10);
    modulImageSizeY = (window.innerHeight - (SerieImageSizeY * 2)) / (data.utemobler[selectedSerieObject].data.length) - 10;
    modulImageSizeX = modulImageSizeY + (modulImageSizeY / 2);

    for (var i = 0; i < data.utemobler.length; i++) {
        serieObjects[i] = new serieObject(20 + (i * 200), 20, i, serieBilder[i], data.utemobler[i].namn);
    }
    for (var i = 0; i < data.utemobler[selectedSerieObject].data.length; i++) {
        modulObjects[i] = new modulObject(20, (SerieImageSizeY + 40) + (i * (modulImageSizeY + 20)), i,
            modulBilder[selectedSerieObject][i],
            data.utemobler[selectedSerieObject].data[i].name);
    }
}

function draw() {
    background(255);
    for (var i = 0; i < serieObjects.length; i++) {
        serieObjects[i].show(selectedSerieObject);
    }
    for (var i = 0; i < modulObjects.length; i++) {
        modulObjects[i].show();
    }
}

function mousePressed() {
    for (var i = 0; i < serieObjects.length; i++) {
        var dist1 = int(dist(mouseX, mouseY, serieObjects[i].x + SerieImageSizeX / 2, serieObjects[i].y + SerieImageSizeY / 2));
        if (dist1 < SerieImageSizeX / 2) {
            if (selectedSerieObject != i) {
                selectedSerieObject = i;
                modulObjects = [];
                modulImageSizeY = (window.innerHeight - (SerieImageSizeY * 2)) / (data.utemobler[selectedSerieObject].data.length) - 10;
                modulImageSizeX = modulImageSizeY + (modulImageSizeY / 2);
                for (var i = 0; i < data.utemobler[selectedSerieObject].data.length; i++) {
                    modulObjects[i] = new modulObject(20, (SerieImageSizeY + 40) + (i * (modulImageSizeY + 20)), i,
                        modulBilder[selectedSerieObject][i],
                        data.utemobler[selectedSerieObject].data[i].name);
                }
            }
        }
    }
}

function jsonLoaded(data1) {
    data = data1;

    for (var i = 0; i < data.utemobler.length; i++) {
        serieBilder[i] = loadImage(data.utemobler[i].serieimageURL);
        for (var j = 0; j < data.utemobler[i].data.length; j++) {
            modulBilder[i][j] = loadImage(data.utemobler[i].data[j].imageURL);
        }
    }
}
