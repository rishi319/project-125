
difference=0;
rightWristX=0;
leftWristx=0;

function setup()
{
    video=createCapture(VIDEO);
    video.size(400,400);

    canvas=createCanvas(400,400);
    canvas.position(560,100);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);


}
function draw()

{
    background('#969A97');

    document.getElementById("font_size").innerHTML=" font size of the text will be= "+difference+"px";
    fill ('#EC0A82');
    text('RISHI',50,400);
    textSize(difference);
}
function modelLoaded()
{
    console.log('poseNet is initialized')
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        

        leftWristx=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristx-rightWristX);

        console.log("leftwristx="+leftWristx+"rightwristx="+rightWristX+"difference="+difference);
    }
}
