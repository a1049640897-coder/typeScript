// 泛型 泛指
function faxing<JA>(first:JA,second:JA){
    return `${first}${second}`
}

console.log(faxing <string> ('1','66'));

// 泛型在数组里面的使用
function myFaxing<ANY>(params:ANY[]){
  return params
} 

console.log('泛型在数组里面的写法',myFaxing<number>([1,2,3]));
// 定义多个泛型
function manyFaxing<t,p>(first:t,second:p){
    return `${first}${second}`
}
console.log('定义多个泛型',manyFaxing<string,number>('1',2));

function join<T, P>(first: T, second: P) {
    return `${first}${second}`;
  }
console.log('进行类型推断的多个泛型写法',join(1, "2"));

