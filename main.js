noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup(){

video = createCapture(VIDEO);
video.size(450,450);
canvas = createCanvas(800,600);
canvas.position(500,70);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function modelLoaded(){
console.log("poseNet is on :)")
}

function gotPoses(results)
{
if(results.length > 0)
{
console.log(results);
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
console.log("noseX = " + noseX + "NoseY =" + noseY);
leftWristX = results[0].pose.leftWrist.x;
rightWristX = results[0].pose.rightWrist.x;
difference = floor(leftWristX - rightWristX);
console.log("leftWristX = " + leftWristX + "RightWristX = " + rightWristX + "difference =" + difference);
}
}
function draw() {
document.getElementById("square_side").innerHTML = "width and height of square will be " + difference +"px";
fill('black');
stroke('orange');
square(noseX, noseY, difference);
}













