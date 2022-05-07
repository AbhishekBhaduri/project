function preload(){
}

function setup()
{
    canvas=createCanvas(500,400);
    canvas.position(70,200);
    video=createCapture(VIDEO);
    video.hide();
}

function draw()
{
   image(video,100,80,300,250);

   stroke(168,10,10);
   fill(168,10,10)

   circle(40,40,50)
   circle(460,40,50)
   circle(40,350,50)
   circle(460,350,50)

   stroke(50,162,82);
   fill(50,162,82);

   rect(63,27,357,25);
   rect(63,347,375,25);
   rect(25,63,25,257);
   rect(448,63,25,257);
}

function take_snapshot()
{
    save("frame.png")
}