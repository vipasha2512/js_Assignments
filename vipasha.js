var box1=document.getElementById("box1")
var box2=document.getElementById("box2")

var forward=document.getElementById("forward")
var pause=document.getElementById("pause")
var backward=document.getElementById("backward")


forward.addEventListener("click",transferForward)
backward.addEventListener("click",transferBackward)

pause.addEventListener("click",function()
{
 
 clearInterval(forwardInterval)
    clearInterval(backwardInterval)
   
})

var forwardInterval;
var backwardInterval;

function transferForward()

{
    clearInterval(backwardInterval)
    clearInterval(forwardInterval)
    forwardInterval=setInterval(function()
{
    var box1ValueLength=box1.value.length;
    if(box1ValueLength!=0)
    {
        box2.value=box1.value.slice(box1ValueLength-1,box1ValueLength)+box2.value;
        box1.value=box1.value.substr(0,box1.value.length-1)// 0 to last element
    }
    else
    {
        console.log("button cleared");
        clearInterval(forwardInterval)
    }
},1000)
}


function transferBackward(){   
    clearInterval(backwardInterval); 
    clearInterval(forwardInterval);    
backwardInterval = setInterval(function(){         
var box2ValueLength = box2.value.length;
              
if(box2ValueLength!=0){                  
box1.value = box1.value + box2.value.slice(0,1);// character by character
box2.value = box2.value.substr(1);
              
} else{
console.log("left cleared");	
                  
clearInterval(backwardInterval);
}
          
},1000);	
      
}