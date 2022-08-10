
class City{
    static b = []
    constructor(){
        this.building = City.b
    }
}


class Building {
    constructor(){
        this.car = []
    }
}

class Car {
    constructor(){}
}


class Hospital extends Building{
    constructor(){
        super()
        City.b.push(this)
    }
}
let h = new Hospital()
console.log(h);
let h1 = new Hospital()

let c = new City()
console.log(City.b);




class PoliceDepartment extends Building{
    constructor(){
        super()
    }
}

class PoliceCar extends Car{
    constructor(){
        super()
    }
}

class AmbulanceCar extends Car{
    constructor(){
        super()
    }
}