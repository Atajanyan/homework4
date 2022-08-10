//ex1
class  University{
    constructor(teachers = [],students = [],energy = 24){
        this.teachers = teachers
        this.students = students
    }
    addMember(member){}
    removeMember(member){}
    startLesson(){
        this.energy-=5
        
    }
}


class UniversityMember extends University{
    constructor(name,age,role,energy =24){
        super()
        this.name = name
        this.age = age
        this.role = role
        this.energy = energy
    }
    info(){
        console.log(this.name,this.age,this.role,this.energy);
    }
}


class Teacher extends UniversityMember{
    constructor(...args){
        super(...args)
    }
    startLesson(){
        this.energy-=5
    }
}

class Student extends UniversityMember{
    constructor(...args){
        super(...args)
    }
    startLesson(){
        this.energy-=2
    }
}