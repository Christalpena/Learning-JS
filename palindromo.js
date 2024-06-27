/*
 * Escribe una función que reciba un texto y retorne verdadero o
 * falso (Boolean) según sean o no palíndromos.
 * Un Palíndromo es una palabra o expresión que es igual si se lee
  * de izquierda a derecha que de derecha a izquierda.
 * NO se tienen en cuenta los espacios, signos de puntuación y tildes.
 */


function palindromo(str){
    const PUNTUATION_MARKS = ['.',',','?','!',';',':',' ']
    let normalize_str = str.normalize('NFD').replace(/[\u0300-\u036f]/g,"")
    let words_array = normalize_str.toLowerCase().split('')
    let words = words_array.filter(word => !PUNTUATION_MARKS.includes(word))

    let str1 = words.join('')
    let str2 = words.reverse().join('')
    console.log(str1 + " " + str2)

    return str1 == str2
    
    
}

console.log(palindromo("Aña"))