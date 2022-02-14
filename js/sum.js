function numbersN (n){
    let sum = 1;
    for ( let i = 1; i<=n.length; i++){
       
        sum  = sum + i.length;
    }
    return sum
}

const number = [10, 20, 30, 40];
console.log(numbersN(number))