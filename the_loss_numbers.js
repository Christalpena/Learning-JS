/*
 * Dado un array de enteros ordenado y sin repetidos,
 * crea una función que calcule y retorne todos los que faltan entre
 * el mayor y el menor.
 * - Lanza un error si el array de entrada no es correcto.
 */

function isSorted(arr){
    let sortedArr = arr.toSorted((a,b) => a -b)
    for(let b = 0; b < arr.length; b++){
        if(!(arr[b] == sortedArr[b])){
            return false
        }
    }
}

function lossNumbers(numberList){
    let newNumbers = []
    for(let i = 0; i < numberList.length; i++){
        let NewList = numberList.slice(i+1)
        if(NewList.includes(numberList[i]) || numberList.length < 2 || isSorted(numberList) == false){
            return 'The list can not have repeated numbers, \nneeds to be ordered \nand the length must be greater than 2.'

        }else{
            newNumbers.push(numberList[i])

            for(let a = 1; a < numberList[i+1]; a++){
                if(numberList[i] == numberList[i+1] -a){
                    break
               }else{
                    newNumbers.push(numberList[i]+ a)
               }
            }
        }
        
    }
    return newNumbers
}

console.log(lossNumbers([1,3,5,10]))