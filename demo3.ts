
// 简单的类型定义

function getTotal(one:number,two:number):number{
  return one + two 
}

const total = getTotal(1,2) // 这边不需要定义是因为 tyscript会自动进行类型推断

console.log('total',total)


// 没有返回值的时候的类型定义

function addTotal():void{
  console.log('totalCount')
}
addTotal()

// never()类型

function neverExcute():never{
  throw new Error()
  console.log('never类型永远也执行不完~')
}
// neverExcute()

function forNever():never{
  while(true){}
  console.log('循环永远也执行不完~'); 
}

// 当是对象的时候要怎么进行类型定义
function newAdd({one,two}:{one:number,two:number}):number{
    return one + two
}
const newTotal = newAdd({one:1,two:2})
console.log('newTotal',newTotal);

//当个对象的时候
function newSingleAdd({one}:{one:number}):number{
  return one
}
const single = newSingleAdd({one:1})
console.log('single',single);



