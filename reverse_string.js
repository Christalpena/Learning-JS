/*
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */

function reverseString(str){
    let newString = ""
    for(let a = 0; a < str.length; a++){
        newString = newString + str[(str.length-a)-1]
    }
    return newString
}

console.warn(reverseString('Hola mundo'))