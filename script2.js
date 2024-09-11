var audio = new Audio('Sounds/Ses.mp3');
audio.volume = 0.5;

document.addEventListener('DOMContentLoaded', function() {
    audio.play().catch(function(error) {
        // Handle errors (e.g., autoplay policy restrictions)
        console.error('Error playing audio:', error);
    });
});

document.querySelector(".mute-button").addEventListener("click", stopAllSounds)

function stopAllSounds() {
    audio.pause();
    audio.currentTime = 0;
}

