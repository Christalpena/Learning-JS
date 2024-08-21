/*
 * Crea una función que dibuje una escalera según su número de escalones.
 * - Si el número es positivo, será ascendente de izquiera a derecha.
 * - Si el número es negativo, será descendente de izquiera a derecha.
 * - Si el número es cero, se dibujarán dos guiones bajos (__).
 *
 * Ejemplo: 4
 *         _
 *       _|
 *     _|
 *   _|
 * _|
 *
 *
 */
 
function stairWay(num){
    const space = "  "
    if(num > 0){
        const pattern = '_|'
        console.log(`${space.repeat(num)}  _`)
        for(let i = 0; i < num; i++){
            console.log(`${space.repeat((num) - i)}${pattern}`)
        }
    }else if(num < 0){
        const pattern = "¯¯|"
        for(let i = 0; i > num; i--){
            console.log(`${space.repeat(i*-1)}${pattern}`)
        }
        console.log(`${space.repeat((num*-1))}¯¯`)

    }else{
        console.log("__")
    }
}


console.log(stairWay(0))
