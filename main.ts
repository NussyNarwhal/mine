pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
pins.setPull(DigitalPin.P5, PinPullMode.PullUp)
pins.setPull(DigitalPin.P11, PinPullMode.PullUp)
let strip = neopixel.create(DigitalPin.P8, 48, NeoPixelMode.RGB)
let range = strip.range(0, 12)
let range2 = strip.range(12, 12)
let range3 = strip.range(24, 12)
let range4 = strip.range(36, 12)
strip.setBrightness(150)
strip.showRainbow(1, 155)
music.setBuiltInSpeakerEnabled(true)
music.setVolume(127)
for (let index = 0; index < 48; index++) {
    strip.rotate(1)
    basic.pause(100)
    strip.show()
}
basic.pause(1000)
music.playSoundEffect(music.createSoundEffect(
WaveShape.Noise,
523,
1,
255,
0,
100,
SoundExpressionEffect.Warble,
InterpolationCurve.Logarithmic
), SoundExpressionPlayMode.InBackground)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P2) == 0) {
        range.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(1000)
        for (let index = 0; index < 12; index++) {
            strip.rotate(1)
            basic.pause(100)
            strip.show()
        }
    } else if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        range2.showColor(neopixel.colors(NeoPixelColors.White))
        basic.pause(1000)
    } else if (pins.digitalReadPin(DigitalPin.P11) == 0) {
        range3.showColor(neopixel.colors(NeoPixelColors.Blue))
        basic.pause(1000)
    } else if (pins.digitalReadPin(DigitalPin.P5) == 0) {
        range4.showColor(neopixel.colors(NeoPixelColors.Purple))
        basic.pause(1000)
    } else {
        strip.clear()
        strip.show()
    }
})
