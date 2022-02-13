// 接口 (规范类型的)
interface demo {
   name?:string; // ?  表示这个变量是非必选项
   age:number;
   high:number;
   sex:boolean;
   [propname:number]:any;
}

const firsetSelet = (gril:demo) =>{
  gril.age<20 && gril.high>1.67 && console.log('第一次通过筛选')
  gril.age>20 || gril.high<1.67 && console.log('第一次没有通过')
  console.log('属性的名字是:',gril.name )
}

const secondSelect = (gril:demo) =>{
    gril.sex && console.log('第二次通过筛选')
    gril.sex || console.log('第二次没有通过')
}

const gril = {
    age:18,
    high:1.62,
    sex:true,
    name:'女'
}
firsetSelet(gril)
secondSelect(gril)

// 接口类型和类型别名的区别

// 类型别名 1. 直接定义的方式 2. 对象定义的方式
type newType = string 
type newTypeParm = {
    name:string,
    age:number
}

const newParamer1:newType[] = ['2']
const newParamer2:newTypeParm[] = [{
    name:'ss',
    age:18
}]

// 接口只能以对象的方式
interface interfaceParam {
     name:string;
     age:number;
}
const listArr:interfaceParam[]= [
    {
        name:'hah',
        age:16
    }
]