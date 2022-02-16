// typeScript 类的Getter，Setter,static

// private
class xiaojiejei {
  //  外部无法访问private变量
  constructor(private _age: number) {}
  //   getter
  get age() {
    // return this._age;
    //  可以通过 get age来修改
    return this._age+10
  }
//   setter 通过setter 在类的外部去修改age的的值
set age(age:number){
  this._age = age + 10
  }
}

const womanL = new xiaojiejei(20)
womanL.age = 60

console.log('womanL',womanL.age);

//  不用通过new的方法来直接访问变量的方法
class oo {
    static sayHellow(name:string){
       return name
    }
}

console.log(oo.sayHellow('我不知道'));



