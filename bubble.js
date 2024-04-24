
var timer = 60;
var score = 0;
var rn = 0;

function bubbles(){
    var c = "";
for(var i = 0;i<=183;i++)
{
    var a = Math.floor(Math.random()*10)
   c+= `<div class="bubble">${a}</div>`;

}

 document.querySelector("#pbtm").innerHTML = c;
}

function timerr(){
   let a =  setInterval(function(){
        if(timer>0)
        {
            timer--;         
         document.querySelector("#timervalue").textContent = timer;

        }
        else{

            document.querySelector("#pbtm").innerHTML = `<h1>Game over</h1>`;
            clearInterval(a);

        }

    },1000);
}

function newhit(){
     rn  = Math.floor(Math.random()*10);
    document.querySelector("#hitvalue").textContent = rn;
}

function increasescore(){
     score+= 10;
     document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pbtm")
.addEventListener( "click",function (dets){
    var targ = Number(dets.target.textContent);
    if(targ === rn)
    {
        increasescore();
        newhit();
        bubbles();


    }
})
newhit();
timerr();
bubbles();