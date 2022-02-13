// 数组类型

// 一般数组类型
const numberArr:number[] = [1,2,3]
const stringArr:string[]= ['1','2','3']
const booleArr:boolean[] = [false,true]
const nullArr:null[] = [null,null]
const undefinedArr:undefined[] = [undefined,undefined]
console.log('一般数组类型',booleArr);

const multipltType:(string | number)[] = [1,'2',3]
console.log('符合的数组类型');
console.log('multipltType',multipltType);


//  不设置类型别名的时候

const typeArr:{name:string,age:number}[] = [
    {
      name:'第一个名字',
      age:18   
    },
    {
        name:'第二个名字',
        age:60   
      },
]

 console.log('typeArr',typeArr)

// 设置类型别名
type lady = {
    name:string,
    age:Number,    
}

const testArr:lady[]=[
    {
        name:'设置了类型别名',
        age:16
    }
]

console.log('设置了类型别名',testArr);

// 用类进行设置类型别名
class typeClass {
    name:string;
    age:number;
}
const classArr:typeClass[]=[{
    name:'类进行别名设置',
    age:12
}]
console.log('类进行别名设置',classArr);


