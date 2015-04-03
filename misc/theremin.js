$(document).ready(function () {
    var AudioContext = window.AudioContext || window.webkitAudioContext;
    var audioCtx = new AudioContext();

    var oscillator = audioCtx.createOscillator();
    var gainNode = audioCtx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.type = 0;
    oscillator.frequency.value = 3000;
    oscillator.start(0);

    gainNode.gain.value = 0.5;

    function constrain(val, min, max) {
        if (val < min) {
            return min;
        } else if (val > max) {
            return max;
        } else {
            return val;
        }
    }

    $(document).keydown(function (event) {
        switch (event.which) {
            case 38: // Up arrow
                oscillator.frequency.value += 100;
                break;
            case 40: // Down arrow
                oscillator.frequency.value -= 100;
                break;
            case 37: // Left arrow
                gainNode.gain.value -= 0.1;
                break;
            case 39: // Right arrow
                gainNode.gain.value += 0.1;
                break;
        }
        oscillator.frequency.value = (oscillator.frequency.value % 6000 + 6000) % 6000;
        gainNode.gain.value = constrain(gainNode.gain.value, 0, 1);
    });
});