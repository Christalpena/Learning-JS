/*
 * Crea un programa que analice texto y obtenga:
 * - Número total de palabras.
 * - Longitud media de las palabras.
 * - Número de oraciones del texto (cada vez que aparecen un punto).
 * - Encuentre la palabra más larga.
 *
 * Todo esto utilizando un único bucle.
 */


function text(txt){
    const words = txt.split(" ")
    const totalWords = words.length
    const longestWord = words.toSorted((word1,word2) =>  word1.length - word2.length)[words.length -1]
    const totalLength = words.reduce((acc,word) => acc + word.length,0) 
    const averageLength = totalLength / words.length
    const sentenceNum = words.reduce((acc,word) => {
        if(word.includes(".")){
            acc++
        }
        return acc
    },0)

   
    return `Total Words: ${totalWords} \nMidium Words: ${Math.floor(averageLength)} \nNumber of Sentences: ${sentenceNum} \nLongest Word: ${longestWord}`
}

console.log(text("Todo esto utilizando un único bucle. Todo esto utilizando un único bucle."))