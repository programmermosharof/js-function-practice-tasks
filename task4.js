



function count_zero(binaryString){
    let count = 0;
    for(let i = 0 ; i < binaryString.length; i++){
        if(binaryString[i] === "0"){
            count++;
        }
    }
    return count;
}
console.log(count_zero("1010010"));

function zero(string){
    let num = 0;
    for(let nums = 0; nums < string.length; nums++){
        if(string[nums] === "1"){
            num++;
        }
    }
    return num;
}
console.log(zero("1010010"));