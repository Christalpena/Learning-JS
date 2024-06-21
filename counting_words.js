/*
 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
 */

function countingWords(str){
    let wordList = []
    let word = ""
    const patterns = /^[a-zA-Z0-9]*$/
    for(let a = 0; a < str.length; a++){
        console.log(patterns)
        if(str[a] !== patterns){
            wordList.push(word)
            word = ""
        }else{
            word += str[a]
        }
    }
    return wordList
}

console.log(countingWords("Hola, mi nombre es brais. Mi nombre completo es Brais Moure (MoureDev)."))