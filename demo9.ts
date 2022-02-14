//  typescript 构造函数 表示的是类在初始化的时候执行的函数
 
class Person {
    public name:string;
    constructor(name:string){
        this.name = name
    }
}

const man  = new Person('zfl')

console.log('name',man.name);

// 简化写法

class People {
    constructor(public name:string){

    }
}

const woman = new People('女人')
console.log('woman',woman.name);


