class TV{
    constructor(brand){
        this.brand = brand
        this.channel = 1
        this.volue = 50
    }
    increase(){
        if(this.volue<100)this.volue++
    }
    decrease(){
        if(this.volue>0)this.volue--
    }
    setChannel(chan){
        if(chan<=50){
            this.channel = chan
        }
    }
    resetTV(){
       this.channel = 1
       this.volue = 50
    }
    status(){
        console.log(`brand ${this.brand}, at channel ${this.channel}, volume ${this.volue}`);
    }
}

let t = new TV(1)
t.increase()
t.setChannel(25)
t.setChannel(35)
t.resetTV()
t.status()
console.log(t);