
var SoundButtonNumber =  document.querySelectorAll(".Soundbuttons").length;

var audioR32 = new Audio('Sounds/R32.mp3');
var audioR33 = new Audio('Sounds/R33.MP3');
var audioR34 = new Audio('Sounds/R34.MP3');
var audioR35 = new Audio('Sounds/R35.mp3');

audioR32.volume = 0.2;
audioR33.volume = 0.2;
audioR34.volume = 0.2;
audioR35.volume = 0.2;

for (var i = 0; i < SoundButtonNumber; i++) {
    document.querySelectorAll(".Soundbuttons")[i].addEventListener("click", function PlatSounds() {
    
        var innerhtmls = this.innerHTML;

        stopAllSounds();
    
        if (innerhtmls == "R32 Engine Sound") {
            audioR32.play();
        }
        else if (innerhtmls == "R33 Engine Sound") {
            audioR33.play();
        }
        else if (innerhtmls == "R34 Engine Sound") {
            audioR34.play();
        }
        else if (innerhtmls == "R35 Engine Sound") {
            audioR35.play();
        }
    
    })
}

function stopAllSounds() {
    audioR32.pause();
    audioR32.currentTime = 0;

    audioR33.pause();
    audioR33.currentTime = 0;

    audioR34.pause();
    audioR34.currentTime = 0;

    audioR35.pause();
    audioR35.currentTime = 0;
}


document.querySelector(".mute-button").addEventListener("click", stopAllSounds)



