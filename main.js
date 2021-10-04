function preload() {

}

function setup() {
canvas = createCanvas(550,550);
canvas.position(560,150);
video = createCapture(VIDEO);
video.size(550,500);
posenet = ml5.poseNet(video,modelloaded);
posenet.on('pose', gotresults);
}

 function modelloaded() {
     console.log("model has been loaded succesfully");
 }

 function gotresults(results) {
  if (results.length > 0)  {
console.log(results)
  }
 }

function draw() {
background("plum")
}