//ex1
// class  University{
//     constructor(teachers = [],students = [],energy = 24){
//         this.teachers = teachers
//         this.students = students
//     }
//     addMember(member){}
//     removeMember(member){}
//     startLesson(){
//         this.energy-=5
        
//     }
// }


// class UniversityMember extends University{
//     constructor(name,age,role,energy =24){
//         super()
//         this.name = name
//         this.age = age
//         this.role = role
//         this.energy = energy
//     }
//     info(){
//         console.log(this.name,this.age,this.role,this.energy);
//     }
// }


// class Teacher extends UniversityMember{
//     constructor(...args){
//         super(...args)
//     }
//     startLesson(){
//         this.energy-=5
//     }
// }

// class Student extends UniversityMember{
//     constructor(...args){
//         super(...args)
//     }
//     startLesson(){
//         this.energy-=2
//     }
// }




//ex2
// class CoffeeShop{
//     constructor(){
//         this.name = 'basically, of the shop'
//         this.menu = [{
//             name:'cola',
//             price:200,
//             type:'drink'
//         },{
//             name:'coffe',
//             price:300,
//             type:'drink'},
//         {
//             name:'stayck',
//             price:500,
//             type:'food'
//         }]
//         this.orders = []
//     }

//     addOrder(item){
//         this.menu.forEach(e=>{
//             if(e.name===item){
//                 this.orders.push(e.name)
//             }else{console.log('This item is currently unavailable!');}
//         })
//     }
//     fillOrder(){
//         if(this.orders.length){
//             let item = this.orders.shift()
//             console.log(`The ${item} is ready!`)
//         }else{console.log('All orders have been fulfilled!');}
//     }
//     listOreder(){
//         let listOrederArr = []
//        this.orders.forEach(el=>{
//         this.menu.forEach(e=>{
//             if(e.name===el){
//                 listOrederArr.push(e)
//             }
//         })
//     })
//     console.log(listOrederArr);
//     return listOrederArr
//     }

//     dueAmount(){
//       let amount = this.listOreder()
//       if(amount.length){
//         console.log(amount.reduce((a,b)=>a.price+b.price));
//       }else{console.log(0);}
//     }

//     CheapItem(){
//         let priceMenu = this.menu.map(e=>e.price)
//         let cheapestItem = Math.min(...priceMenu)
//         console.log(cheapestItem);
//     }

//     drinkOnly(){
//         let drinkItems = this.menu.filter(e=>e.type==='drink').map(e=>e.name).join()
//         console.log(drinkItems);
//     }
//     foodOnly(){
//         let foodItems = this.menu.filter(e=>e.type==='food').map(e=>e.name).join()
//         console.log(foodItems);
//     }
// }
//  let c = new CoffeeShop()
// c.addOrder('cola')
// c.addOrder('cola')
// console.log(c);
// c.fillOrder()
// c.listOreder()
// c.dueAmount()
// c.CheapItem()
// c.drinkOnly()
// c.foodOnly()


//ex3
// class A{
//     constructor(){
//     if(this.constructor===A){
//         throw new Error('kkkkkk')
//     }
// }
// }
// let a = new A()
// console.log();



ex4
class Character{
    #types = ["Bowerman", "Swordsman", "Magician", "Daemon",
    "Undead", "Zombie"]
    constructor(name,type,attack,protection,){
        if(name.length >= 2 && name.length<= 10){
            this.name = name
        }else{ throw new Error('errr')}
        if(this.#types.includes(type)){
            this.type  = type
        }else{throw new Error('error')}
        this.health = 100
        this.level = 1
        this.attack = attack
        this.defense = protection
    }
    levelUp(){
        if(this.health){
        this.level +=1
        this.attack += this.attack*(1/5)
        this.defense += this.defense*(1/5)
        this.health = 100
        }else{ console.log('error dead')}
    }

    damage(points){
        this.health -= points*(1-this.defense/100)
        if(this.health<0) this.health=0;
    }
}


class Bowerman extends Character{
    constructor(name){
        let type = 'Bowerman'
        super(name,type)
        this.attack = 25
        this.defense = 25
    }
}
let b = new Bowerman('sdfsd')
console.log(b);
b.levelUp()

class Swordsman extends Character{
    constructor(name){
        let type = 'Swordsman'
        super(name,type)
        this.attack = 40
        this.defense = 10
    }
}

class Magician extends Character{
    constructor(name){
        let type = 'Magician'
        super(name,type)
        this.attack = 10
        this.defense = 40
    }
}


class Undead extends Character{
    constructor(name){
        let type = 'Undead'
        super(name,type)
        this.attack = 25
        this.defense = 25
    }
}


class Zombie extends Character{
    constructor(name){
        let type = 'Zombie'
        super(name,type)
        this.attack = 40
        this.defense = 10
    }
}




class Daemon extends Character{
    constructor(name){
        let type = 'Daemon'
        super(name,type)
        this.attack = 10
        this.defense = 40
    }
}