/*
 * Dada una URL con parámetros, crea una función que obtenga sus valores.
 * No se pueden usar operaciones del lenguaje que realicen esta tarea directamente.
 *
 * Ejemplo: En la url https://retosdeprogramacion.com?year=2023&challenge=0
 * los parámetros serían ["2023", "0"]
 */

function parameters(url){
    const STRAT_INDEX = url.indexOf('?')
    let new_string = url.slice(STRAT_INDEX + 1)
    let prmtrs = []
    while(true){
        const INDEX_ONE = new_string.indexOf('=') + 1
        if(new_string.includes('&')){
            const INDEX_TWO = new_string.indexOf('&') 
            prmtrs.push(new_string.slice(INDEX_ONE, INDEX_TWO))
            new_string = new_string.slice(INDEX_TWO + 2)

        }else{
            prmtrs.push(new_string.slice(INDEX_ONE))
            break
        }
    }

    return prmtrs
}

console.log(parameters("https//www.dominio.com/page?key1=value1&key2=value2"))