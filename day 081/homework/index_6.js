// 8) შექმენით class User _password ველით და getter password მეთოდით, რომელიც აბრუნებს პაროლს


class User {
    constructor(_password){
        this._password = _password;
    }
    getter(){
        return _password
    }
}
