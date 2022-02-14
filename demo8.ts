// typescript 中的访问类型  三个关键词 private protected public

class ggDemo {
    name:string; // 默认为public 类的内外部都可以访问
    test = '我是哈哈'
    sayHellow(){
        return this.test
    }
}

const bTitle = new ggDemo()
console.log(bTitle.sayHellow());


class ttDemo { //只能在类内访问
    content = '我是private'
    private name:string;
    private sayR(){
     return this.content
    }
}

const tTile = new ttDemo()
// console.log('我是private',tTile.sayR());

class bbDemo {
    content = '我是protected' //  只能在之类中访问
    protected name:string;
    protected sayE(){
        return this.content
    }
}

class ddDemo extends bbDemo {
    public sayE(): string {
        return this.content
    }
}

const kTitle = new ddDemo()
console.log(kTitle.sayE());
