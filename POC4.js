let circle = document.querySelector('.circle');

let moveBy = 10;

window.addEventListener('load', () =>{
    circle.style.position = 'absolute';
    circle.style.left = 0;
    circle.style.top = 0;
});



window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
        circle.style.left = parseInt(circle.style.left) - moveBy + 'vw';
        document.getElementById("circle").style.backgroundColor = "red";
        break;
   
        case 'ArrowRight':
        circle.style.left = parseInt(circle.style.left) + moveBy + 'vw';
        document.getElementById("circle").style.backgroundColor = "blue";
        break;
        case 'ArrowUp':
        circle.style.top = parseInt(circle.style.top) - moveBy + 'vw';
        document.getElementById("circle").style.backgroundColor = "green";
        break;
        case 'ArrowDown':
            document.getElementById("circle").style.backgroundColor = "purple";
        circle.style.top = parseInt(circle.style.top) + moveBy + 'vw';
  break;

 

}
});
