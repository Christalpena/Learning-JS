/*
 * Dado un listado de números, encuentra el SEGUNDO más grande
 * Sin usar funciones del lenguaje
 */


function theSecond(numberList){
    for(let i = 0; i < numberList.length; i++){
        for(let a = 0; a < numberList.length; a++){
            if(numberList[a] > numberList[a+1]){
                let newPosition = numberList[a+1]
                numberList[a+1] = numberList[a]
                numberList[a] = newPosition
            }
        }
    }

    return numberList[numberList.length - 2]
}

console.log(theSecond([4, 2, 10, 8, 9]))