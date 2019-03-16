
export const playAudio = () => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioContext = new AudioContext();
    
    const audioElement = document.querySelector('audio');
    
    const playButton = document.querySelector('button');
    
    playButton.addEventListener('click', function() {

        if (audioContext.state === 'suspended') {
            audioContext.resume();
          
        }
    
        if (this.dataset.playing === 'false') {
           
            audioElement.play();
            this.dataset.playing = 'true';
        } else if (this.dataset.playing === 'true') {
            debugger
            audioElement.pause();
            this.dataset.playing = 'false';
        }
    
    }, false);
}