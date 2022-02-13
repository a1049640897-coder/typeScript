const count: number = 1.22
console.log(count.toFixed(1))

interface parant {
    name: string,
    age: number
}
const child: parant =  {
    name: '小红',
    age:20
}

const voidType:void = null

function addTotal():void{
  console.log('totalCount')
}
addTotal()