/*
 * Crea una función que reciba un texto y muestre cada palabra en una línea,
 * formando un marco rectangular de asteriscos.
 * - ¿Qué te parece el reto? Se vería así:
 *   **********
 *   * ¿Qué   *
 *   * te     *
 *   * parece *
 *   * el     *
 *   * reto?  *
 *   **********
 */

function wordsFrame(sentence){
    let words = sentence.split(" ")
    let firstWord = words.toSorted((a,b) => b.length - a.length)[0].length

    console.log("*".repeat(firstWord+4))

    for(let i = 0; i < words.length; i++){
        console.log(`* ${words[i]} ${" ".repeat(firstWord-words[i].length)}*`)
    }

    return "*".repeat(firstWord+4)
}

console.log(wordsFrame("Hello, How are you?"))