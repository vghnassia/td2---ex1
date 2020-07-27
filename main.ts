function Mouvement (led2: number) {
    if (liste_direction[led2] == 1) {
        if (liste_led[led2] < 4) {
            liste_led[led2] = liste_led[led2] + 1
            led.plot(liste_x[led2], liste_y[liste_led[led2]])
            led.unplot(liste_x[led2], liste_y[liste_led[led2]] - 1)
        } else if (liste_led[led2] == 4) {
            liste_led[led2] = liste_led[led2] - 1
            led.plot(liste_x[led2], liste_y[liste_led[led2]])
            led.unplot(liste_x[led2], liste_y[liste_led[led2]] + 1)
            liste_direction[led2] = liste_direction[led2] + 1
        }
    } else if (liste_direction[led2] == 2) {
        if (liste_led[led2] > 0) {
            liste_led[led2] = liste_led[led2] - 1
            led.plot(liste_x[led2], liste_y[liste_led[led2]])
            led.unplot(liste_x[led2], liste_y[liste_led[led2]] + 1)
        } else if (liste_led[led2] == 0) {
            liste_led[led2] = liste_led[led2] + 1
            led.plot(liste_x[led2], liste_y[liste_led[led2]])
            led.unplot(liste_x[led2], liste_y[liste_led[led2]] - 1)
            liste_direction[led2] = liste_direction[led2] - 1
        }
    }
}
let liste_direction: number[] = []
let liste_led: number[] = []
let liste_x: number[] = []
let liste_y: number[] = []
let x = 0
let y = 0
liste_y = [0, 1, 2, 3, 4]
liste_x = [0, 1, 2, 3, 4]
liste_led = [0, 1, 2, 3, 4]
liste_direction = [1, 1, 1, 1, 2]
for (let valeur of liste_x) {
    led.plot(liste_x[valeur], liste_y[valeur])
}
basic.forever(function () {
    Mouvement(0)
    Mouvement(1)
    Mouvement(2)
    Mouvement(3)
    Mouvement(4)
    basic.pause(100)
})
