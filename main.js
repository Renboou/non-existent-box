noseX=0;
noseY=0;
difference = 0;
rightWristx = 0;
leftWristx = 0;
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
leftWristx = results[0].pose.leftWristx;
rightWristx = results[0].pose.rightWristx;
difference = floor(leftWristx - rightWristx);
console.log("leftWristX = " + leftWristx + "RightWristX = " + rightWristx + "difference =" + difference);
}
}
function draw() {
document.getElementById("square_side").innerHTML = "width and height of square will be " + difference +"px";
fill('black');
stroke('orange');
square(noseX, noseY, difference);
}













