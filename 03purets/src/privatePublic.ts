class User1 {
  email: string;
  name: string;
  readonly city: string = "Trichy";

  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const aashiq = new User("ahmed.aashiq@saama.com", "Aashiq");

aashiq.city;
