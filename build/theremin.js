// Generated by CoffeeScript 1.10.0
(function() {
  var modulo = function(a, b) { return (+a % (b = +b) + b) % b; };

  $(document).ready(function() {
    var AudioContext, audioCtx, delayNode, gainNode, oscillator1, oscillator2;
    AudioContext = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContext();
    oscillator1 = audioCtx.createOscillator();
    oscillator2 = audioCtx.createOscillator();
    delayNode = audioCtx.createDelay();
    gainNode = audioCtx.createGain();
    oscillator1.connect(delayNode);
    delayNode.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    oscillator2.connect(audioCtx.destination);
    oscillator1.type = 'square';
    oscillator1.frequency.value = 2000;
    oscillator1.start(0);
    oscillator2.type = 'sine';
    oscillator2.frequency.value = 2000;
    oscillator2.start(0);
    gainNode.gain.value = 0.5;

    /*
    constrain = (val, min, max) ->
      if val < min
        min
      else if val > max
        max
      else
        val
     */
    $(document).mousemove(function(event) {
      oscillator1.frequency.value = (event.pageX / window.innerWidth) * 4000;
      return oscillator2.frequency.value = (event.pageY / window.innerHeight) * 4000;
    });
    return $(document).keydown(function(event) {
      var base, base1;
      switch (event.which) {
        case 38:
          oscillator2.frequency.value += 100;
          break;
        case 40:
          oscillator2.frequency.value -= 100;
          break;
        case 37:
          oscillator1.frequency.value += 100;
          break;
        case 39:
          oscillator1.frequency.value -= 100;
      }
      (base = oscillator1.frequency).value = modulo(base.value, 4000);
      return (base1 = oscillator1.frequency).value = modulo(base1.value, 4000);
    });
  });

}).call(this);
