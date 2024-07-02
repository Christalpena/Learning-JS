/*
 * Crea una función que reciba días, horas, minutos y segundos (como enteros)
 * y retorne su resultado en milisegundos.
 */


function timeConverter(days,hr,min,seg){
    let daysHr = days * 24
    let hrMinutes = (daysHr + hr) * 60
    let minutesSeconds = (min + hrMinutes) * 60
    return (minutesSeconds + seg) * 1000
}

console.log(timeConverter(0,0,13,0))