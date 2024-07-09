/*
 * Simula el funcionamiento de una máquina expendedora creando una operación
 * que reciba dinero (array de monedas) y un número que indique la selección
 * del producto.
 * - El programa retornará el nombre del producto y un array con el dinero
 *   de vuelta (con el menor número de monedas).
 * - Si el dinero es insuficiente o el número de producto no existe,
 *   deberá indicarse con un mensaje y retornar todas las monedas.
 * - Si no hay dinero de vuelta, el array se retornará vacío.
 * - Para que resulte más simple, trabajaremos en céntimos con monedas
 *   de 5, 10, 50, 100 y 200.
 * - Debemos controlar que las monedas enviadas estén dentro de las soportadas.
 */


function vendigMachine(money,productNum){
    let products = {
        1 : ['Cake',20],
        2 : ['Soda', 35],
        3 : ['Candy', 5],
        4 : ['sneaker', 45],
        5 : ['Water', 15]
    }
    let product = products[productNum]
    let totalMoney = money.reduce((a,b) => a + b, 0)

    if(product && totalMoney >= product[1] && totalMoney <= 200){
        let b = money[0]

        for(let a = 1; a <= money.length; a++){

            if(b >= product[1]){
                let total = b - product[1]
                let leftMoney = [money.slice(a), total]

                return `Product: ${product[0]} \nMoney left: ${leftMoney}`

            }else{
                b += money[a]
            }
        }

    }else{
        return 'The money is not enough, \nYour money need to be less than 200 \nor the Product does not exists'
    }

}

console.log(vendigMachine([45],2))