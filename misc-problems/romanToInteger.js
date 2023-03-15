const symbols = {
    "I": 1,
    "V": 5,
    "X":10,
    "L":50,
    "C":100,
    "D":500,
    "M":1000
}

export default function romanToInteger(numerals){
    let result = 0;
    for(let i=0;i <numerals.length; i++){
        numerals[i + 1] && symbols[numerals[i]]<symbols[numerals[i+1]] ? result -= symbols[numerals[i]] : result += symbols[numerals[i]]
    }
    return result;
}

console.log(romanToInteger("IV"))
// functional