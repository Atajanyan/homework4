//ex3
class A{
    constructor(){
    if(this.constructor===A){
        throw new Error('kkkkkk')
    }
}
}
let a = new A()
console.log();