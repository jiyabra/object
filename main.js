function setup()
{
    canvas = createCanvas(650 , 420);
    canvas.center();
}

img = "";

function preload()
{
    img = loadImage("god_cat.jpg");
}

function draw()
{
    image(img , 0 , 0 , 650 , 420);
    fill("#FF0000");
    stroke("#FF0000")
    nofill();
    text("DOG" , 45 , 75)
    rect(30 , 60 , 450 ,350)
}