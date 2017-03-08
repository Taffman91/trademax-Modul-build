function modulObject (x, y, index, bild, namn){
    this.x = x;
    this.y = y;
    this.index = index;
    this.img = bild;
    this.namn = namn;

    this.show = function() {
      image(this.img, this.x, this.y, modulImageSizeX, modulImageSizeY);
      fill(0);
      text(namn, this.x+35, this.y-5);
    }

    this.update = function(){

    }
}
