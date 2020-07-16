let A1: game.LedSprite = null
input.onButtonPressed(Button.A, function () {
    A1 = game.createSprite(0, 2)
    basic.pause(1000)
    for (let index = 0; index < 2; index++) {
        A1.change(LedSpriteProperty.X, 1)
        basic.pause(1000)
    }
    basic.pause(500)
    for (let index = 0; index < 1; index++) {
        A1.change(LedSpriteProperty.X, -2)
        basic.pause(1000)
    }
    A1.delete()
})
