noseX = 0;
noseY = 0;
scarfX = 0;
scarfY = 0;
gorroX = 0;
gorroY = 0;

function preload() {
  nose_img = loadImage("clownnose.png")
  scarf_img = loadImage("bufanda.png")
  gorro_img = loadImage("gorro.png")
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300,300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded(){
  console.log("Modelo poseNet cargado!!")
}

function gotPoses(results){
 console.log(results)
 if(results.length > 0){
  noseX = results[0].pose.nose.x-20;
  noseY = results[0].pose.nose.y-20;
  scarfX = results[0].pose.leftElbow.x-120;
  scarfY = results[0].pose.leftElbow.y-110;
  gorroX = results[0].pose.leftEar.x-65;
  gorroY = results[0].pose.leftEar.y-100;
 }
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(nose_img, noseX, noseY, 30, 30);
  image(scarf_img, scarfX, scarfY, 80, 80);
  image(gorro_img, gorroX, gorroY, 100, 130);
}

function take_snapshot(){    
  save('myFilterImage.png');
}