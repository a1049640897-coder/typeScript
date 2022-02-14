// 类的基本使用
class demoCalss{
    name:string;
    age:number;
    content:string = '我出现了'
    test() {
        return this.content
    }
}

const newDemo = new demoCalss()
newDemo.name = '哈哈',
newDemo.age = 20
console.log('测试',newDemo,newDemo.test());

// 类的继承
class newTest extends demoCalss {
    teach(){
        return this.content
    }
}
const newT = new newTest()
console.log('类的继承',newT.teach(),newT.name = 'sdsad',newT);

//  类的重写
class newMt extends newTest {
    sayHello(){
        return '我爱你们啊'
    };
    say(){
     return 'say方法被重写了'
    };
    sayLove(){
        return super.teach() +'用了super访问父类'
    }
}

const ceshi = new newMt()

console.log(ceshi.sayHello(),ceshi.say(),ceshi.sayLove());



