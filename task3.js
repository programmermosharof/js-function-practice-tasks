// function make_avg(numbers, size){
//     let sum = 0;

//     for(const num of numbers){
//         sum = sum + num;
//     }
// const avg = sum / size;
// return  avg ;
// }
// const nums = [12, 24, 43, 55, 67, 77];
// const result = make_avg(nums, nums.length);
// console.log(result);

function getsum(numbers, size){
    let sum = 0 ;

    for(const num of numbers){
        sum = sum + num ;
    }
    const avg = sum / size;
    return avg;
}

const nums = [ 100, 40, 44, 66, 22, 10];
const all = getsum( nums, nums.length);
console.log(all);