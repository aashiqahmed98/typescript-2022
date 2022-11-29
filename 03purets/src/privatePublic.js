// class User1 {
//   email: string;
//   private name: string;
//   readonly city: string = "Trichy";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
var User1 = /** @class */ (function () {
    function User1(email, name) {
        this.email = email;
        this.name = name;
        this.city = "Trichy";
    }
    return User1;
}());
var aashiq = new User1("ahmed.aashiq@saama.com", "Aashiq");
aashiq.city;
