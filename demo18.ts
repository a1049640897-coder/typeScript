// 泛型的类型

function join<demo>(param1:demo,param2:demo){
    return `${param1} + ${param2}`
}

console.log('泛型的基本使用',join<number>(1,2));

function demo2<ANY>(params:ANY[]){
    return params
}

function demo3<ky>(params:Array<ky>){
    return params
}

console.log('泛型中使用多个数组',demo2<number>([1,2,3]));

// 进行多个泛型的定义
function manyFax<t,p,m>(name:t,age:p,obj:m){
    return `这是泛型名字:${name} 这是泛型的年龄: ${age} 这是泛型的对象:${obj}`
}
console.log('many',manyFax('1',2,{name:'ss'}));
