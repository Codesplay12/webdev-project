var a = document.querySelector("h5");

var add = document.querySelector("#Add");

add.addEventListener("click",function(){
   a.innerHTML = "Friends";
   a.style.color = "green" ;
})

var remove = document.querySelector("#Remove");

remove.addEventListener("click",function(){
    a.innerHTML = "rejected";
    a.style.color = "red";
})


