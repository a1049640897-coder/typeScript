//  类的只读和抽象
class ll {
    constructor(public name:string){}
}
const iu = new ll('radonly')
iu.name = '可以修改'
console.log(iu.name);

// class ll {
//     public readonly _name:string
//     constructor(public name:string){
//         this._name = name
//     }
// }
// const iu = new ll('radonly')
// iu._name = '可以修改'
// console.log(iu.name);

// 抽象类  抽象类的定义就是 父类进行对应的定义，子类进行具体的实现

abstract class Teacher{
     abstract skill()
}

class childTeacher extends Teacher {
    skill():void {
        console.log('我是初级教师');
    }
}

class highTeacher extends Teacher {
    skill():void {
        console.log('我是高级教师');
    }
}

const childT = new childTeacher()
const highT = new highTeacher()

console.log('childT',childT.skill(),'highT',highT.skill());
