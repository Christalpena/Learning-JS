/*
 * Three in a row game
 * Make a function which will recive a matrix
 * Return X won if that player won
 * Return O won if that player won
 * If any player won, retun a tie
 */


function threeInRow(mtx){

    for(let i = 0; i < mtx.length;i++){
        if(mtx[i][0] == mtx[i][1] &&
           mtx[i][1] == mtx[i][2]
         ){
           return `Player ${mtx[i][0]} won`
        }

    }

    for(let c = 0; c < 3; c++){
        if(mtx[0][c] == mtx[1][c] &&
           mtx[1][c] == mtx[2][c]  &&
           mtx[2][c] == 'X'
        ){
            return `Player ${mtx[2][c]} won`
        }
        
    }

    if(mtx[0][0] == mtx[1][1] &&
       mtx[1][1] == mtx[2][2]
    ){
        return `Player ${mtx[0][0]} won`
    }

    if(mtx[0][2] == mtx[1][1] &&
       mtx[1][1] == mtx[2][0]
     ){
         return `Player ${mtx[0][2]} won`
     }

     return 'This game was a tie'

    
}

console.log(threeInRow([['X','O','X'],
                        ['O','O','O'],
                        ['O','X','O']
                      ]))