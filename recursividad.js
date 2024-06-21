//[1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];


let lista = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11, [1,5,3]], 12], [13, 14, 15]]
let nuevaLista = []
for(let a = 0; a < lista.length; a++){
    if(lista[a].length > 0){
        for(let i = 0; i < lista[a].length; i++){
            if(lista[a][i].length > 0){
                for(let h = 0; h < lista[a][i].length; h++){
                    nuevaLista.push(lista[a][i][h])
                }
            }else{
                nuevaLista.push(lista[a][i])
            }
        }
    }else{
        nuevaLista.push(lista[a])
    }
}

console.log(nuevaLista)