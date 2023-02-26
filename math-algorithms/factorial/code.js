export default class Factorial {
    factorial(num){
        let value = 1;
        for(let i=2;i<=num;i++){
            value = value * i;
        }
        return value;
    }

    recursiveFactorial(num){
        if(num === 0){
          return 1;
        }
        return num * this.recursiveFactorial(num-1)
    }
}