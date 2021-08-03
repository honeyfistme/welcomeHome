const numbers = [23, 43, 77, 88, 65];
// for(let i=0; i<numbers.length; i++){
//     console.log(numbers[i]);
// }
// for(let num of numbers){
//     console.log(num)
// }
let sum = 0;
let fData = numbers.filter(function(val, idx){
        return val > 40;
});//배열값을 걸러내서 원하는 값만 산출
console.log(`fData: ${fData}`)

mData = fData.map(function(val, idx){
    return val * 2;
});//배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.
console.log(`mData: ${mData}`)

mData.forEach(sumCallBack)
//주어진 함수를 배열 요소 각각에 대해 실행합니다.
function sumCallBack(v, i, a){
    
    sum += v;
    
};
console.log(`합계 : ${sum}`);

console.log('-----------------------------')

numbers.filter(function(val, idx){
        return val > 40;
})
.map(function(val, idx){
    return val * 2;
})
.forEach(function(val, idx){
    console.log(`val: ${val}, idx: ${idx}`);
});
