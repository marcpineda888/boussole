let sens_de_la_boussole = 0
basic.showString("PRET")
basic.forever(function () {
    sens_de_la_boussole = input.compassHeading()
    if (sens_de_la_boussole < 45 || sens_de_la_boussole == 0) {
        basic.showArrow(ArrowNames.North)
    } else if (sens_de_la_boussole > 45 && sens_de_la_boussole < 90) {
        basic.showArrow(ArrowNames.NorthEast)
    } else if (sens_de_la_boussole > 90 && sens_de_la_boussole < 135) {
        basic.showArrow(ArrowNames.East)
    } else if (sens_de_la_boussole > 135 && sens_de_la_boussole < 180) {
        basic.showArrow(ArrowNames.SouthEast)
    } else if (sens_de_la_boussole > 180 && sens_de_la_boussole < 225) {
        basic.showArrow(ArrowNames.South)
    } else if (sens_de_la_boussole > 225 && sens_de_la_boussole < 270) {
        basic.showArrow(ArrowNames.SouthWest)
    } else if (sens_de_la_boussole > 270 && sens_de_la_boussole < 315) {
        basic.showArrow(ArrowNames.West)
    } else {
        basic.showArrow(ArrowNames.NorthWest)
    }
    basic.pause(100)
})
