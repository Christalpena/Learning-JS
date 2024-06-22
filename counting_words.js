/*
 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
 */

function countingWords(str){
    const alfabeth = ['a','b','c','d','e','f','g','h','i','j','k','l','ñ','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let wordList = []
    let word = ""
    for(let a = 0; a < str.length; a++){
        if(alfabeth.includes(str[a].toLowerCase())){
            word += str[a]
        }else{
            if(word){
                wordList.push(word.toLowerCase())
                word = ""
            }
        }
    }
    return wordList

}

const wordList = countingWords("Hola, mi nombre es brais. Mi nombre completo es Brais Moure (MoureDev).")
for(let b = 0; b < wordList.length; b++){
    if(wordList.indexOf(wordList[b]) == b){
        let numWords = wordList.filter(word => word == wordList[b]).length
        console.log(`The word '${wordList[b]}' appers ${numWords} ${numWords > 1 ? 'times' : 'time'}`)
    }
}

