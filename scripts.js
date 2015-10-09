var stage, width, height;
var img, background;

function init() {
  var canvas = document.getElementById("canvas");
  document.getElementById("scene").setAttribute("width", canvas.offsetWidth);
  document.getElementById("scene").setAttribute("height", canvas.offsetHeight);

  stage = new createjs.Stage("scene");
  width = stage.canvas.width;
  height = stage.canvas.height;

  img = new Image();
  img.onload = handleImageLoad;
  img.src = "./assets/Easter-Landscape-001.svg";
}

function handleImageLoad() {
  var bmp = new createjs.Bitmap(img).set({
    scaleX: canvas.offsetWidth / img.width,
    scaleY: canvas.offsetHeight / img.height
  });
  stage.addChild(bmp);
  stage.update();
}

window.onresize = function () {
  stage.removeAllChildren();
  document.getElementById("scene").removeAttribute("width");
  document.getElementById("scene").removeAttribute("height");
  init();
}
