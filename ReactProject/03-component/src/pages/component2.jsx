import React from 'react'

class Accout {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    render(){
        console.log(this.name+","+this.age)
    }

    static info = "aaaa"
}

class User extends Accout{
    constructor(){
        super('sb','sb')
    }
}

var user = new User()
user.render()



