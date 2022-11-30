// class User1 {
//   email: string;
//   private name: string;
//   readonly city: string = "Trichy";

//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }

class User1{
    readonly city: string = "Trichy";
    protected _courseCount = 1 // protected variables can only be accessed with the parent class and class extends it.
    
    constructor(public email: string, public name: string,
       private userId: string // private variables cannot be accessed using '.' operator.
       ){

    }

    get getAppleEmailID(): string{
        return `apple${this.email}`
    }

    set setCourseNumber(courseCount: number){ // set accessor cannot have a return type
        this._courseCount = courseCount
    }
}

class SubUser1 extends User1{
    private isFamily: boolean = true

    changeCourseCount(){
        this._courseCount = 4
    }
}

const aashiq = new User1("ahmed.aashiq@saama.com", "Aashiq", '13725');

aashiq.city;