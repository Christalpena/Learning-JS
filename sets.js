/*
 * Crea una función que reciba dos array, un booleano y retorne un array.
 * - Si el booleano es verdadero buscará y retornará los elementos comunes
 *   de los dos array.
 * - Si el booleano es falso buscará y retornará los elementos no comunes
 *   de los dos array.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
 */

function sets(array1,array2,isTrue){
    let commonsElem = []
    let unCommontElem =[]
    
    for(let i = 0; i < array1.length; i++){
        if(array2.includes(array1[i]) && !commonsElem.includes(array1[i])){
            commonsElem.push(array1[i])
        }else if(!array2.includes(array1[i]) && !unCommontElem.includes(array1[i])){
            unCommontElem.push(array1[i])
        }
    }
    return isTrue ? commonsElem : unCommontElem
    
}


console.log(sets([1,4,321,5,6,321],[1,4,6,5],false))