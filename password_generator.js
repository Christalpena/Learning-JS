/*
 * Escribe un programa que sea capaz de generar contraseñas de forma aleatoria.
 * Podrás configurar generar contraseñas con los siguientes parámetros:
 * - Longitud: Entre 8 y 16.
 * - Con o sin letras mayúsculas.
 * - Con o sin números.
 * - Con o sin símbolos.
 * (Pudiendo combinar todos estos parámetros entre ellos)
 */

function randomChart(chartArray){
    let randomNun = Math.floor(Math.random() * chartArray.length)
    return chartArray[randomNun]
}

function passwordGenerator(long,hasCap,hasNum,hasSimb){
    const SIMBOLS = ['#','_','-','.','*','@']
    const NUMBERS = [1,2,3,4,5,6,7,8,9]
    const ABC = ['a','b','c','d','e','f','g','h','i','j','k','l','ñ','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let password = ""

    if(long < 8 || long > 16){
        return 'Your password length must be greater than 8 but less than 16'
    }else{
        for(let i = 0; i < long; i++){
            if(password.length >= long){
                break
            }
            password += randomChart(ABC)
            if(hasCap){
                password += randomChart(ABC).toUpperCase()
            }
            
            if(hasNum){
                password += randomChart(NUMBERS)
            }

            if(hasSimb){
                password += randomChart(SIMBOLS)
            }
        }
    }
    return password.slice(0,long)


}

console.log(passwordGenerator(13,true,true,true))