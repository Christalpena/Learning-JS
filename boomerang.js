/*
 * Crea una función que retorne el número total de bumeranes de
 * un array de números enteros e imprima cada uno de ellos.
 * - Un bumerán (búmeran, boomerang) es una secuencia formada por 3 números
 *   seguidos, en el que el primero y el último son iguales, y el segundo
 *   es diferente. Por ejemplo [2, 1, 2].
 * - En el array [2, 1, 2, 3, 3, 4, 2, 4] hay 2 bumeranes ([2, 1, 2]
 *   y [4, 2, 4]).
 */


function boomerang(bmg){
    if(bmg.length < 3){
        return 0
    }

    let newBoomerang = []
    for(let i = 0; i < bmg.length; i++){
        if(bmg[i] == bmg[i+2]){
            newBoomerang.push(bmg[i],bmg[i+1],bmg[i+2])
        }
    }
    return newBoomerang
}


console.log(boomerang([2]))