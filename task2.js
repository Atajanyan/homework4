
//ex2
class CoffeeShop{
    constructor(){
        this.name = 'basically, of the shop'
        this.menu = [{
            name:'cola',
            price:200,
            type:'drink'
        },{
            name:'coffe',
            price:300,
            type:'drink'},
        {
            name:'stayck',
            price:500,
            type:'food'
        }]
        this.orders = []
    }

    addOrder(item){
        this.menu.forEach(e=>{
            if(e.name===item){
                this.orders.push(e.name)
            }else{console.log('This item is currently unavailable!');}
        })
    }
    fillOrder(){
        if(this.orders.length){
            let item = this.orders.shift()
            console.log(`The ${item} is ready!`)
        }else{console.log('All orders have been fulfilled!');}
    }
    listOreder(){
        let listOrederArr = []
       this.orders.forEach(el=>{
        this.menu.forEach(e=>{
            if(e.name===el){
                listOrederArr.push(e)
            }
        })
    })
    console.log(listOrederArr);
    return listOrederArr
    }

    dueAmount(){
      let amount = this.listOreder()
      if(amount.length){
        console.log(amount.reduce((a,b)=>a.price+b.price));
      }else{console.log(0);}
    }

    CheapItem(){
        let priceMenu = this.menu.map(e=>e.price)
        let cheapestItem = Math.min(...priceMenu)
        console.log(cheapestItem);
    }

    drinkOnly(){
        let drinkItems = this.menu.filter(e=>e.type==='drink').map(e=>e.name).join()
        console.log(drinkItems);
    }
    foodOnly(){
        let foodItems = this.menu.filter(e=>e.type==='food').map(e=>e.name).join()
        console.log(foodItems);
    }
}
 let c = new CoffeeShop()
c.addOrder('cola')
c.addOrder('cola')
console.log(c);
c.fillOrder()
c.listOreder()
c.dueAmount()
c.CheapItem()
c.drinkOnly()
c.foodOnly()
