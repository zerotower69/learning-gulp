class Person{
    constructor(name) {
        this.name = name
    }

    sayHi(){
        console.log(this.name)
    }
}

function load(){
    for(let i=0;i<10;i++){
        console.log(i)
    }

    if(true){
        console.log("aa")
    }

    const p = new Person('David')
    p.sayHi()
}

load()


