//ex4
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