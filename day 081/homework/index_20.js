// 22) შექმენით User Registration სისტემა: ფორმიდან შეიყვანეთ სახელი, გვარი და ასაკი. გამოიყენეთ class public და private ველებით, getter/setter-ით, private ვალიდაციით და static მეთოდით რეგისტრაციის დასათვლელად. არასწორ მონაცემზე აჩვენეთ შეცდომა

class UserRegistration {

  static registrationCount = 0;

  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.setAge(age);
    UserRegistration.registrationCount++;
  }

  get firstName() {
    return this.firstName;
  }

  get lastName() {
    return this.lastName;
  }

  get age() {
    return this.age;
  }

  setAge(age) {
    if (this.#isValidAge(age)) {
      this.age = age;
    } else {
      throw new Error("Invalid age");
    }
  }

  #isValidAge(age) {
    return age > 0 && age <= 120;
  }

  static getRegistrationCount() {
    return UserRegistration.registrationCount;
  }

  getUserInfo() {
    return `${this.firstName} ${this.lastName}, ასაკი: ${this.age}`;
  }
}