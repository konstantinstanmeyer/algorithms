export default class Fibonacci {
    getFibonacciArray(num){
        let array = [0,1];
        for(let i=2;i<num;i++){
            array[i] = array[i-1] + array[i-2];
        }
        return array;
    }

    recursiveFibonacci(num){
        if(num<2){ // F1 is always 1
          return num;
        }
        return (this.recursiveFibonacci(num-1) + this.recursiveFibonacci(num-2));
    }  
}