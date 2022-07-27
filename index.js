var numberOfButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i<numberOfButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);


    });
}

document.addEventListener("keypress", function(event){
    makeSound(event.key);
});

function makeSound(key){

    switch(key){
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "r":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        
        case "u":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "m":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        case "k":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
            
        case "i":
            var crash = new Audio('sounds/crash.mp3'); 
            crash.play();
            break;
            
        case "t":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

        default:   
        console.log(buttonInnerHTML);     
    }
}
        