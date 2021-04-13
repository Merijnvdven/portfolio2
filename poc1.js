
function maakrood(){
    document.bgColor="red";
}

document.getElementById("verdwijn").addEventListener("click",function()
{
   var box1= document.getElementById("maakrood");
   if(box1.style.display=="none")
   {
       box1.style.display="block";
       
   }
   else{
       box1.style.display="none";
       document.bgColor="white";
   }
})

let buttonblauw = document.querySelector('#buttonblauw');

buttonblauw.addEventListener('click',() => buttonblauw.style.backgroundColor= '#337ab7')
