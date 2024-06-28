/*
 * Crea una función que reciba dos cadenas como parámetro (str1, str2)
 * e imprima otras dos cadenas como salida (out1, out2).
 * - out1 contendrá todos los caracteres presentes en la str1 pero NO
 *   estén presentes en str2.
 * - out2 contendrá todos los caracteres presentes en la str2 pero NO
 *   estén presentes en str1.
 */


function removingCaracters(str1,str2){
    let out1 = []
    let out2 =  []
    let str1_letters = str1.toLowerCase().split("")
    let str2_letters = str2.toLowerCase().split("")

    for(let i = 0; i < str1.length; i++){
        out1 = str1_letters.filter(letter => !str2_letters.includes(letter))
        out2 = str2_letters.filter(letter => !str1_letters.includes(letter))
    }

    return `The result of OUT1 is: ${out1} \nThe result of OUT2 is: ${out2}`
}

console.log(removingCaracters("brais Hola","moure"))