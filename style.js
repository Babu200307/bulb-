var bulb = 0;

function findbulb()
{
    if(bulb==0)
    {
        document.getElementById("image").src = "onn.png.jpg";
        bulb=1;
    }
    else{
        document.getElementById("image").src = "off.png";
        bulb=0;
    }
}