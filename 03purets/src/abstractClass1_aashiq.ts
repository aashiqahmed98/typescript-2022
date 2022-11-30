abstract class Animal{
    
    constructor(public type: 'mammal' | 'reptile' | 'others',public  name: string){
    }

    abstract makeSound(): void // abstract methods need to defined in inherited classes
}

class MyCat extends Animal{
    constructor(public type: 'mammal' | 'reptile' | 'others', public name: string,  public gender: string){
        super(type, name)
    }   
    
    makeSound(): void {
        console.log('meow!!');
        
    }
}

const tommy = new MyCat('mammal', 'tommy', 'male')

console.log('tommy da', tommy);
