/*
 * Crea una función que transforme grados Celsius en Fahrenheit
 * y viceversa.
 *
 * - Para que un dato de entrada sea correcto debe poseer un símbolo "°"
 *   y su unidad ("C" o "F").
 * - En caso contrario retornará un error.
 */



function temperatureConverter(tmp){
    
    if(!tmp.includes("°")){
        return "The temperature is not correct"
    }else{
        let tmpNumber = tmp.slice(0,-2)
        let result = 0
        if(tmp.includes("C°")){    
            result = (tmpNumber * 1.8) + 32
            return `The new  Fahrenheit temperature is: ${result}`
        }
        result = (tmpNumber - 32) / 1.8
        return `The new Celsius temperature is: ${result}`
    }
}


console.log(temperatureConverter("20F"))