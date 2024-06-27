/*
 * Crea una función que reciba dos cadenas como parámetro (str1, str2)
 * e imprima otras dos cadenas como salida (out1, out2).
 * - out1 contendrá todos los caracteres presentes en la str1 pero NO
 *   estén presentes en str2.
 * - out2 contendrá todos los caracteres presentes en la str2 pero NO
 *   estén presentes en str1.
 */

function removingCaracters(caracter_array){
    for(let i = 0; i < a.length; i++){
        if(!b.includes(a[i])){
            caracter_array.push(a[i])
        }
    }
    return caracter_array
}
function removingCaracters(str1,str2){
    let out1 = []
    let out2 =  []
    let b = str2.toLowerCase().split("")
    let a = str1.toLowerCase().split("")

    

    for(let d = 0; d < a.length; d++){
        if(!a.includes(b[d])){
            out2.push(b[d])
        }
    }
    return `The result of OUT1 is: ${out1} \nThe result of OUT2 is: ${out2}`
}

console.log(removingCaracters("brais","moure"))