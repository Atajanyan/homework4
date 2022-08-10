class Product{
    constructor(name,type,price){
        this.name = name
        this.type = type
        this.price = price
    }
}

let product1 = new Product('cola','drink',300)
let product2 = new Product('meat','food',2000)
let product3 = new Product('fanta','drink',200)


class ShoppingCart{
    items = []
    constructor(){}
    addProduct(product){
        this.items.push(product)
    }
    removeProduct(product){
        this.items.splice(this.items.indexOf(product),1)
        //console.log(this.items);
    }
    totalPrice(){
        let sum  = this.items.reduce((a,b)=>{
            return a+b.price
        },0)


        let sale3 = this.items.reduce((a,b)=>{
            if(a[b.name]){
                a[b.name]+=1
            }else{a[b.name] = 1}
            return a
        },{})

        for(let key in sale3){
            let temp = {}
            this.items.forEach(e=>{
                if(e.name = key)temp = e
            })

            if(sale3[key]>3){
                sum-=Math.floor(sale3[key]/4*temp.price)
            }
        }
        
       if(this.items.length>=5){
        sum-=sum*0.1
       }else{sum}
       
        console.log(sum);
    }
  
    replace(productName, replacementProduct) {
        this.items = this.items.map(e => {
            if (e.name == productName) return replacementProduct;
            return item;
        })
    }
}



let s = new ShoppingCart()
s.addProduct(product1)
s.addProduct(product2)
s.addProduct(product3)
s.addProduct(product1)
s.addProduct(product1)
s.addProduct(product1)
s.addProduct(product1)
s.addProduct(product1)
s.addProduct(product1)

 s.removeProduct(product1)
 s.removeProduct(product1)
s.totalPrice()

