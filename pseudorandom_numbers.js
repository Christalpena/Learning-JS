/*
 * Crea un generador de números pseudoaleatorios entre 0 y 100.
 * - No puedes usar ninguna función "random" (o semejante) del
 *   lenguaje de programación seleccionado.
 *
 * Es más complicado de lo que parece...
 */

function randomNums(){
    let numbers = []
    for(let i = 0; i < 100; i++){
        numbers.push(i)
    }
    const DATE = new Date
    let time = DATE.getTime()
    let randomNum = String(time).slice(-2)
    return Number(randomNum)
    
}

console.log(randomNums())