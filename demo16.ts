// enum 枚举类型讲解

enum Status {
    MESSAGE = 10,
    SPA,
    ANJIAO
}

 const getServe = (status:any) =>{
   if(status === Status.MESSAGE){
        return '我去发消息'
   }else if(status === Status.SPA){
       return '我去span'
   }else if(status === Status.ANJIAO){
       return '我去按脚'
   }
 }

 const yui = getServe(11)
 console.log(yui);
 