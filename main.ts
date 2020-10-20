input.onButtonPressed(Button.A, function () {
    if (_switch == 0) {
        nombre1 += 1
        basic.showNumber(nombre1)
    }
    if (_switch == 1) {
        nombre2 += 1
        basic.showNumber(nombre2)
    }
})
input.onButtonPressed(Button.AB, function () {
    op += 1
    if (op == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
        basic.pause(100)
        basic.clearScreen()
    } else {
        if (op == 2) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . . . .
                `)
            basic.pause(100)
            basic.clearScreen()
        } else {
            if (op == 3) {
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    . # . # .
                    # . . . #
                    `)
                basic.pause(100)
                basic.clearScreen()
            } else {
                if (op == 4) {
                    basic.showLeds(`
                        . . # . .
                        . . . . .
                        # # # # #
                        . . . . .
                        . . # . .
                        `)
                    basic.pause(100)
                    basic.clearScreen()
                } else {
                    op = 1
                    basic.showLeds(`
                        . . # . .
                        . . # . .
                        # # # # #
                        . . # . .
                        . . # . .
                        `)
                    basic.pause(100)
                    basic.clearScreen()
                }
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    _switch += 1
    if (_switch == 2) {
        if (op == 1) {
            basic.showNumber(nombre1 + nombre2)
        } else {
            if (op == 2) {
                basic.showNumber(nombre1 - nombre2)
            } else {
                if (op == 3) {
                    basic.showNumber(nombre1 * nombre2)
                } else {
                    basic.showNumber(nombre1 / nombre2)
                }
            }
        }
    }
})
let _switch = 0
let nombre2 = 0
let nombre1 = 0
let op = 0
op = 1
nombre1 = 0
nombre2 = 0
_switch = 0
basic.forever(function () {
	
})
