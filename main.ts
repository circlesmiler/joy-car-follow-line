basic.forever(function () {
    if (JoyCar.linefinder(SensorLCRSelection.Center)) {
        JoyCar.drive(FRDirection.Forward, 10)
    } else if (JoyCar.linefinder(SensorLCRSelection.Left)) {
        JoyCar.turn(
        FRDirection.Forward,
        LRDirection.Left,
        10,
        0
        )
    } else if (JoyCar.linefinder(SensorLCRSelection.Right)) {
        JoyCar.turn(
        FRDirection.Forward,
        LRDirection.Left,
        10,
        0
        )
    } else {
        JoyCar.drive(FRDirection.Forward, 10)
    }
})
