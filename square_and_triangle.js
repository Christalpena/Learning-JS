/*
 * Crea un programa que dibuje un cuadrado o un triángulo con asteriscos "*".
 * - Indicaremos el tamaño del lado y si la figura a dibujar es una u otra.
 * - EXTRA: ¿Eres capaz de dibujar más figuras?
 */


function figures(size,fig){
    
    if(fig == 'Triangle'){
        for(let i = 1; i <= size; i++){
            let simbol = '* '
            console.log(" ".repeat(size-i) + simbol.repeat(i))
        }

    }else if(fig == 'Rectangle'){
        for(let i = 0; i < size; i++){
            let simbol = '*  '
            console.log(simbol.repeat(size*2))
        }

    }else{ 
        for(let i = 0; i < size; i++){
            let simbol = '*  '
            console.log(simbol.repeat(size))
        }
    }

    return `\n----${fig}----`
}

console.log(figures(6,'Rectangle'))
console.log(figures(4,'Triangle'))
console.log(figures(4,'Square'))