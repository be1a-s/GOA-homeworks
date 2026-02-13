// z4) შექმენით Account კლასი და გამოიყენეთ ყველა ნასწავლი კონცეფცია კლასებზე. კლასში უნდა გქონდეთ საჯარო ველები და პირადი ველი #password. გამოიყენეთ constructor სადაც მიიღებთ firstname lastname და password მნიშვნელობებს. შექმენით getter და setter მეთოდები password ველისთვის და ახსენით კომენტარებით როგორ მუშაობს მათი დანიშნულება. დაამატეთ static ველი count რომელიც დაითვლის რამდენი ობიექტი შეიქმნა და static მეთოდი objectCount რომელიც ზრდის ამ მნიშვნელობას ყოველ ახალ ობიექტზე. ასევე მოიყვანეთ მაგალითი პირადი მეთოდის გამოყენებაზე და კომენტარებით ახსენით განსხვავება ჩვეულებრივ მეთოდსა და static მეთოდს შორის

class Account {
  static count = 0;
  #firstname;
  #lastname;
  #password;
  constructor(firstname, lastname, password) {
    this.#firstname = firstname;
    this.#lastname = lastname;
    this.password = password;
    Account.count++;
  }
  get firstname() {
    return this.#firstname;
  }
  get lastname() {
    return this.#lastname;
  }
  get password() {
    return this.#password;
  }
  set password(value) {
    if (value.length >= 6) {
      this.#password = value;
    } else {
      throw new Error("Password must be at least 6 characters");
    }
  }
  static getCount() {
    return Account.count;
  }
}
const acc1 = new Account("Beqa", "Abuladze", "123456");
const acc2 = new Account("Giorgi", "kekelidze", "abcdef");
console.log(Account.getCount());