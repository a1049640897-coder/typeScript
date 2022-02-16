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

class testGG {
    // public name:string
    constructor(public name:string){
        // this.name = name
    }
}

const demoH = new testGG('sds')
console.log('demoH',demoH.name);

//  子类调用父类的方法的时候需要调用super 子类继承父类并且有构造器的时候

class parantG {
    constructor(public name:string ){}
}

class childrenG extends parantG {
    constructor(public age:number){
     super('子类调用父类的方法')
    }
}

const newChild = new childrenG(18)
console.log('newChild',newChild);





