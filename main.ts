/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Yusuf
 * Created on: Mar 2026
 * This program plays game rock, paper, scissors with score.
*/

// variables
let randomNumber: number = 0

let score: number = 0

randomNumber = -2
basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onGesture(Gesture.Shake, function () {
    randomNumber = randint(0, 2)
    basic.clearScreen()

    // if randomNumber was 0
    if (randomNumber == 0) {
        basic.showIcon(IconNames.SmallSquare)
        basic.pause(2500)
    }

    // if randomNumber was 1
    if (randomNumber == 1) {
        basic.showIcon(IconNames.Square)
        basic.pause(2500)
    }

    // if randomNumber was 2
    if (randomNumber == 2) {
        basic.showIcon(IconNames.Scissors)
        basic.pause(2500)
    }
    
    // count score
    input.onButtonPressed(Button.A, function () {
        basic.clearScreen()
        basic.showIcon(IconNames.Yes)
        score = score + 1
        basic.pause(100)
        basic.showNumber(score)
        basic.pause(1000)
        basic.showIcon(IconNames.Happy)
    })

    // display score
    input.onButtonPressed(Button.B, function () {
        score = score 
        basic.pause(100)
        basic.clearScreen()
        basic.showString("Score:" + score)
        basic.showNumber(score)
        basic.showIcon(IconNames.Happy)
    })

    // pause and show you are ready again
    basic.pause(1000)
    basic.showIcon(IconNames.Happy)
})
