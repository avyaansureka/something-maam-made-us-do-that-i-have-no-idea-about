input.onPinPressed(TouchPin.P0, function () {
    music.play(music.stringPlayable("C5 C B G F F F C ", 120), music.PlaybackMode.UntilDone)
    basic.showNumber(8635222)
    basic.showLeds(`
        # . . # .
        . . # . .
        # . . # #
        . . # . .
        # . # . #
        `)
    basic.showIcon(IconNames.Tortoise)
    basic.showString("AVYAAN SUREKA IS THE BEST")
})
input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        # . # . #
        . # # . .
        # . . # .
        . . # . #
        # . # . #
        `)
    basic.showNumber(7956)
    basic.showIcon(IconNames.Meh)
    basic.showString("AVYAAN SUREKA IS THE BEST")
})
input.onPinPressed(TouchPin.P2, function () {
    music.play(music.stringPlayable("C F G B G A G D ", 120), music.PlaybackMode.UntilDone)
    basic.showNumber(6543322)
    basic.showLeds(`
        # . . . .
        . . # . .
        # . . # .
        . . # . .
        # . . . #
        `)
    basic.showIcon(IconNames.Pitchfork)
    basic.showString("AVYAAN SUREKA IS THE BEST")
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("B B A A A G G G ", 120), music.PlaybackMode.UntilDone)
    basic.showNumber(579087)
    basic.showLeds(`
        # # . # .
        . . # . #
        # # . # .
        . . # . .
        # . . . #
        `)
    basic.showIcon(IconNames.StickFigure)
    basic.showString("AVYAAN SUREKA IS THE BEST")
})
input.onPinPressed(TouchPin.P1, function () {
    music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
    basic.showNumber(362422)
    basic.showLeds(`
        # . . . .
        . # # . #
        # . . # .
        . . # . .
        # # . . #
        `)
    basic.showIcon(IconNames.TShirt)
    basic.showString("AVYAAN SUREKA IS THE BEST")
})
input.onGesture(Gesture.Shake, function () {
    music.play(music.stringPlayable("C5 B B A G G F E ", 120), music.PlaybackMode.UntilDone)
    basic.showNumber(556757)
    basic.showLeds(`
        # . . . #
        . . # . .
        # . . # .
        . # # . .
        # . . . #
        `)
    basic.showIcon(IconNames.Yes)
    basic.showString("AVYAAN SUREKA IS THE BEST")
})
input.onSound(DetectedSound.Quiet, function () {
    music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
    turtle.pen(TurtlePenMode.Down)
    turtle.setBrightness(255)
    turtle.forward(4)
    turtle.turnRight()
    turtle.forward(4)
    turtle.turnLeft()
    turtle.back(4)
    turtle.turnLeft()
    turtle.forward(4)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.play(music.stringPlayable("C5 C5 A B A G F E ", 120), music.PlaybackMode.UntilDone)
    basic.showNumber(3432646)
    basic.showLeds(`
        # . # . #
        . . # . .
        # . . # .
        . . # . .
        # . # . #
        `)
    basic.showIcon(IconNames.Asleep)
    basic.showString("AVYAAN SUREKA IS THE BEST")
})
