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
    private _courseCount = 1
    
    constructor(public email: string, public name: string,
       private userId: string // private variables cannot be accessed using '.' operator.
       ){

    }

    get getAppleEmailID(): string{
        return `apple${this.email}`
    }

    set setCourseNumber(courseCount: number){ // set accessor cannot have a return type

    }
}

const aashiq = new User1("ahmed.aashiq@saama.com", "Aashiq", '13725');

aashiq.city;