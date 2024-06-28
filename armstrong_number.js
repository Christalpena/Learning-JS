/*
 * Escribe una función que calcule si un número dado es un número de Armstrong
 * (o también llamado narcisista).
 * Si no conoces qué es un número de Armstrong, debes buscar información
 * al respecto.
 */

function armstrongNumber(num){
    let numArray = String(num).split("")
    let result = 0
    for(let i = 0; i < numArray.length; i++){
        result = result + (Number(numArray[i]) ** numArray.length)
    }
    return result == num
}

console.log(armstrongNumber(153))