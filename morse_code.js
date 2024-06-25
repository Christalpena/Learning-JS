/*
 * Crea un programa que sea capaz de transformar texto natural a código
 * morse y viceversa.
 * - Debe detectar automáticamente de qué tipo se trata y realizar
 *   la conversión.
 * - En morse se soporta raya "—", punto ".", un espacio " " entre letras
 *   o símbolos y dos espacios entre palabras "  ".
 * - El alfabeto morse soportado será el mostrado en
 *   https://es.wikipedia.org/wiki/Código_morse.
 */



function Codigo_morse(str){
    const morse_code = {
        A:'.-', B:'-...',C:'-.-.',D:'-..',E:'.',
        F:'..-.',G:'--.',H:'....',I:'..',J:'.---',
        K:'-.-',L:'.-..',M:'--',N:'-.',O:'---',P:'.--.',
        Q:'--.-',R:'.-.',S:'...',T:'-',U:'..-',V:'...-',
        W:'.--',X:'-..-',Y:'-.--',Z:'--..',
        1:'.----',2:'..---',4:'....-',5:'.....',6:'-....',
        7:'--...',8:'---..',9:'----.',0:'-----',
        '.':'.-.-.-',',':'--..--','?':'..--..','/':'-..-.',
        ':':'---...',';':'-.-.-.',
    }
    const word = []
    if(str.includes('-') || str.includes('.') || str.includes('..')){
        let letter = ""
        for(let a = 0;  a <= str.length; a++){
            if(str[a] !== " " && a !== str.length){
                letter += str[a]
            }else {
                let morse_Code_keys = Object.keys(morse_code)
                for(let b = 0; b < morse_Code_keys.length; b++){
                    let morse_code_letter = morse_Code_keys[b]
                    if(morse_code[morse_code_letter] == letter){
                        word.push(morse_Code_keys[b])
                    }
                }
                letter = ""
                if(str[a] == " " && str[a+1] == " "){
                    word.push(" ")
                }
            }         
        }
    }else{
        for(let i = 0; i < str.length; i++){
            if(str[i] !== " "){
                word.push(morse_code[`${str[i].toUpperCase()}`] + " ")
            }else{
                word.push(" ")
            }
        }
    }
    return word.join("")
}


console.log(Codigo_morse(".... --- .-.. .- --..--  -- ..  -. --- -- -... .-. .  . ...  -.-. .... .-. .. ... - .- .-.. --..--  -.-. ..- .- .-..  . ...  - ..-  -. --- -- -... .-. . ..--.."))
