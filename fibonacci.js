/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

function fibonacci () {
    let lista = []

    for(let a = 0; a < 50; a++ ){
        if(lista.length >= 2){
            lista.push(lista[a-2]+lista[a-1])
        }else{
            lista.push(a)
        }
    }
    return lista
}

console.log(fibonacci())