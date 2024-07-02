var noOfButtons = document.querySelectorAll(".drum").length;
console.log(noOfButtons);
for(var i=0;i<noOfButtons;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function(){
   var buttonInnerHTML = this.innerHTML;
   makeSound(buttonInnerHTML);
   })    
}

document.addEventListener("keypress", function(event)
{makeSound(event.key);})

function makeSound(key)
{
    switch(key){
        case "w":
             var audio = new Audio('sound/tom-1.mp3');
             audio.play();
             break;
        case "a":
            var audio = new Audio('sound/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sound/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sound/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sound/snare.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sound/crash.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sound/kick-bass.mp3');
            audio.play();
            break;
        default:
            console.log(buttonInnerHTML);
       }
        
}