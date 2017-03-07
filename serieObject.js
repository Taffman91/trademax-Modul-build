var imageSizeX = 150;
var imageSizeY = 100;

function serieObject (x, y, index, bild, namn){
    this.x = x;
    this.y = y;
    this.index = index;
    this.img = bild;
    this.namn = namn;

    this.show = function(selected) {
      image(this.img, this.x, this.y, imageSizeX, imageSizeY);
      if(selected == this.index){
        fill(90);
      }
      else{
        fill(0);
      }
      text(namn, this.x+35, this.y-10);
    }

    this.update = function(){

    }
}
