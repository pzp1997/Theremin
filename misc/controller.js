/*
// connection
window.addEventListener('gamepadconnected', function (e) {
    console.log('Gamepad connected at index %d: %s. %d buttons, %d axes.',
        e.gamepad.index, e.gamepad.id,
        e.gamepad.buttons.length, e.gampad.axes.length);
});

// disconnection
window.addEventListener('gamepaddisconnected', function(e) {
  console.log('Gamepad disconnected from index %d: %s',
        e.gamepad.index, e.gamepad.id);
});
*/


// jQuery
$(document).ready(function () {
    // connection
    $(window).on('gamepadconnected', function () {
        $('#gamepadStatus').html('Gamepad connected!');
        console.log(this.gamepad);
        /*
        var e = this.gamepad;
        $('#gamepadStatus').html('Gamepad connected at index ' + e.index + ': ' + e.id + '.<br>' + e.buttons.length + 'buttons, ' + e.axes.length + 'axes.');
        */
    });

    // disconnection
    $(window).on('gamepaddisconnected', function () {
        $('#gamepadStatus').html('Gamepad disconnected');
        /*
        var e = this.gamepad;
        $('#gamepadStatus').html('Gamepad disconnected from index ' + e.index + ': ' + e.id + '.');
        */
    });
});
