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
    
    constructor(public email: string, public name: string,
      //  private userId: string
       ){

    }
}

const aashiq = new User1("ahmed.aashiq@saama.com", "Aashiq");

aashiq.city;
