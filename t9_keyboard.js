/*
 * Los primeros dispositivos móviles tenían un teclado llamado T9
 * con el que se podía escribir texto utilizando únicamente su
 * teclado numérico (del 0 al 9).
 *
 * Crea una función que transforme las pulsaciones del T9 a su
 * representación con letras.
 * - Debes buscar cuál era su correspondencia original
 * - Cada bloque de pulsaciones va separado por un guión.
 * - Si un bloque tiene más de un número, debe ser siempre el mismo.
 * - Ejemplo:
 *     Entrada: 6-666-88-777-33-3-33-888
 *     Salida: MOUREDEV
 */

function t9Keyboard(numbers){

    if(numbers.length <= 0){
        return "Please insert more numbers"
    }
    const letters = [[" ",",",".","?","!"],["A","B","C"],["D","E","F"],["G","H","I"],["J","K","L"],["M","N","O"],["P","Q","R","S"],["T","U","V"],["W","X","Y","Z"]]
    const splitedNumbers = numbers.split("-")
    let result = ""

    for(let i = 0; i < splitedNumbers.length; i++){
        const letterPosition = splitedNumbers[i].length
        //getting the firts number
        const number = Number(splitedNumbers[i][0])

        //separating the numbers to know if they have a letter or not follow the sequence
        const numbers = splitedNumbers[i].split("")
        const isAsequent = numbers.filter((num) => Number(num) < number || Number(num) > number)
        const isNumber = numbers.filter((num) => isNaN(num))


        if(isNumber.length > 0){
            return "You can't insert a letter"
        }else if(isAsequent.length > 0){
            return "Something went wrong"
        }else{
            if(number == 0){
                result += letters[0][letterPosition-1]
            }else{
                //if the length of the number sequence is greater than the length of the letter block, then the letter will be the first
                if(letterPosition > letters[number-1].length){
                    result += letters[number-1][0]
                }else{
                    result += letters[number-1][letterPosition-1]
                }

            }
        }
         
    }
    return result
}


console.log(t9Keyboard("6-666-88-777-33-3-33-888"))
console.log(t9Keyboard("6-666-88-777-33-0-3-33-888"))
console.log(t9Keyboard("6-676-88-777-33-3-33-888"))
console.log(t9Keyboard("6-6a6-88-777-33-3-33-888"))
console.log(t9Keyboard(""))
console.log(t9Keyboard("2222"))

