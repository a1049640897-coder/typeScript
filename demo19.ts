//  泛型中类（难点）

// 泛型改造前

// class selectGril{
//     constructor(private grils: string [] | number[]){}
//     getGrils(index:number):string | number {
//         return this.grils[index] 
//     }
// }
// const newGril = new selectGril([1,1,2])
// console.log('newGrils',newGril.getGrils(1));



// 泛型改造后
// class selectGril <T>{
//     constructor(private grils:T[]){}
//     getGrils(index:number):T{
//         return this.grils[index] 
//     }
// }
// const newGril = new selectGril<number>([1,1,2])
// console.log('newGrils',newGril.getGrils(1));

// 接口

// interface grilObj {
//     name:string
// }


// class selectGril <T extends grilObj>{
//     constructor(private grils:T[]){}
//     getGrils(index:number):string{
//         return this.grils[index].name 
//     }
// }
// const newGril = new selectGril([
//     {name:'woxiaole'},
//     {name:'buyaopa'},
//     {name:'chulaile'}
// ])
// console.log('newGrils',newGril.getGrils(1));

//  泛型的约束
class selectGril <T extends number | string >{
    constructor(private grils:T[]){}
    getGrils(index:number):T{
        return this.grils[index] 
    }
}
const newGril = new selectGril<number>([1,1,2])
console.log('newGrils',newGril.getGrils(1));



