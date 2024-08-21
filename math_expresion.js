/*
 * Crea una función que reciba una expresión matemática (String)
 * y compruebe si es correcta. Retornará true o false.
 * - Para que una expresión matemática sea correcta debe poseer
 *   un número, una operación y otro número separados por espacios.
 *   Tantos números y operaciones como queramos.
 * - Números positivos, negativos, enteros o decimales.
 * - Operaciones soportadas: + - * / %
 *
 * Ejemplos:
 * "5 + 6 / 7 - 4" -> true
 * "5 a 6" -> false
 */

function mathExpresion(expresion){
    const EXP  = ["+", "-", "*", "/", "%"]
    const CHARACTERS = expresion.split(" ")
    if(CHARACTERS.length >= 3){
        for(let i = 0; i < CHARACTERS.length-1; i += 2){
            const CHARACTER = Number(CHARACTERS[i])
            if(!isNaN(CHARACTER) && CHARACTERS[i+1] == " " || EXP.includes(CHARACTERS[i+1])){
            }else{
                return false
            }
        }
    }else{
        return false
    }
    return true

}

console.log(mathExpresion("3.05 + 5"))
console.log(mathExpresion("3 a 5"))
console.log(mathExpresion("-3 + 5"))
console.log(mathExpresion("- 3 + 5"))
console.log(mathExpresion("-3 a 5"))
console.log(mathExpresion("-3+5"))
console.log(mathExpresion("3 + 5 - 1 / 4 % 8"))