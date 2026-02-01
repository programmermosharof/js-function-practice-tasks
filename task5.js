function numbers(num){
    if(num % 2 === 0){
        return "Even";
    }else{
        return " Odd";
    }
}

const result = numbers(9);
console.log(result);