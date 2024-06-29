/*
 * Crea una función que reciba un String de cualquier tipo y se encargue de
 * poner en mayúscula la primera letra de cada palabra.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
 */


function capitalizeFirstLetter(str){
    let strArray = str.split(" ")
    return strArray.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
}

console.log(capitalizeFirstLetter("El niño ñoño"))