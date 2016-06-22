$(document).ready ->
  AudioContext = window.AudioContext or window.webkitAudioContext
  audioCtx = new AudioContext()

  oscillator1 = audioCtx.createOscillator()
  oscillator2 = audioCtx.createOscillator()
  delayNode = audioCtx.createDelay()
  gainNode = audioCtx.createGain()

  oscillator1.connect delayNode
  delayNode.connect gainNode
  gainNode.connect audioCtx.destination

  oscillator2.connect audioCtx.destination

  oscillator1.type = 'square'
  oscillator1.frequency.value = 2000
  oscillator1.start 0

  oscillator2.type = 'sine'
  oscillator2.frequency.value = 2000
  oscillator2.start 0

  gainNode.gain.value = 0.5

  ###
  constrain = (val, min, max) ->
    if val < min
      min
    else if val > max
      max
    else
      val
  ###

  $(document).mousemove (event) ->
    oscillator1.frequency.value = (event.pageX/window.innerWidth)*4000
    oscillator2.frequency.value = (event.pageY/window.innerHeight)*4000
    # gainNode.gain.value = (event.pageY/window.innerHeight)

  $(document).keydown (event) ->
    switch event.which
      when 38 # Up arrow
        oscillator2.frequency.value += 100
      when 40 # Down arrow
        oscillator2.frequency.value -= 100
      when 37 # Up arrow
        oscillator1.frequency.value += 100
      when 39 # Down arrow
        oscillator1.frequency.value -= 100

    oscillator1.frequency.value %%= 4000
    oscillator1.frequency.value %%= 4000
    # gainNode.gain.value = constrain gainNode.gain.value, 0, 1
