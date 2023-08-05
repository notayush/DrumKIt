


for(var i=0;i<document.querySelectorAll(".drum").length;i++){

    document.querySelectorAll("button")[i].addEventListener("click",function(){

        var buttoninnerHTMl=this.innerHTML;

     makeSound(buttoninnerHTMl);

     btnanimation(buttoninnerHTMl);
});

}


document.addEventListener("keypress",function(Event){
    makeSound(Event.key);
    btnanimation(Event.key);
});

function makeSound(k){

    var b=k;

    switch(b){
       case "w":
           var tom1= new Audio("sounds/tom-1.mp3");
           tom1.play();
           
       break;
       case "a":
           var tom2= new Audio("sounds/tom-2.mp3");
           tom2.play();
           
       break;
       case "s":
           var tom3= new Audio("sounds/tom-3.mp3");
           tom3.play();
           
       break;
       case "d":
           var tom4= new Audio("sounds/tom-4.mp3");
           tom4.play();
           
       break;
       case "j":
           var sn= new Audio("sounds/snare.mp3");
           sn.play();
           
       break;
   
       case "k":
           var cr= new Audio("sounds/crash.mp3");
           cr.play();
           
       break;
   
       case "l":
           var l= new Audio("sounds/kick-bass.mp3");
           l.play();
           
       break;
   
       default:    
           console.log("wrong");
    }
   
   
}

function btnanimation(currentKey){
    var btna=document.querySelector("."+currentKey);
    btna.classList.add("pressed");

    setTimeout(function(){
        btna.classList.remove("pressed")
    },100);
}











