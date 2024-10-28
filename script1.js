class User {
    constructor(email, name){
        this.email = email;
        this.name = name;
    }
}

var UserOne = new User('martind@live.ie', 'Martin');

console.log(UserOne);