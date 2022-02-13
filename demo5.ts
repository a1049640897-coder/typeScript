// 元组的使用和类型约束

// 正常的数组
const lArr:(string|number)[] = ['22',24,56] // 没有限制数组类型的顺序
console.log(lArr);

// 元组限制了数组类型的顺序
const xiaojiejie: [string, string, number] = ["dajiao", "teacher", 28];
const demo2Arr:[string,string,number] = ['2','3',3]
console.log('这是元组',demo2Arr);
