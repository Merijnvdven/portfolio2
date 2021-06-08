window.onload = init;
let imgfrt,imgbck,imgArray,curImg;

function init()
{
    imgfrt = document.getElementById('imgfrt');
    imgbck = document.getElementById('imgbck');
    imgArray = ['imageslideshow/foto1.jpg','imageslideshow/foto2.jpg',];
    curImg = 0;
    fadeOut(imgfrt,5000);
}

function setImgUrl(el,arr)
{
    if(curImg == arr.length)
    {
        curImg = 0;
    }
    el.src = arr[curImg];
    console.log("current image "+ curImg +": "+arr[curImg]);
    curImg++;
}

function fadeOut(el, duration)
{
    let s = el.style;
    let step = 25/duration;
    let factor = 1;
    
    function fade() 
    {
        if(s.opacity < 0 && factor == 1)
        {
            console.log("1/2");
            factor = -1;
            setTimeout(fade, 25);
            setImgUrl(imgfrt,imgArray);
        }
        else if(s.opacity > 1 && factor == -1)
        {
            console.log("2/2");
            factor = 1;
            setImgUrl(imgbck,imgArray);
            fade();
        }
        else
        {
            s.opacity = s.opacity - (step*factor)
            setTimeout(fade, 25);
        }
    }
    fade();
}