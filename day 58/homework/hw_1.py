"""3) შექმენით კლასი BankAccount, რომელსაც ექნება balance. დაამატეთ მეთოდი deposit(amount), რომელიც balance-ს თანხას დაუმატებს"""

class Bankaccount:
    def __init__(self,balance):
        self.balance = balance

    def deposit(self,amount):
        self.balance = self.balance + amount
        print(self.balance)



Bankaccount1 = Bankaccount(100)
Bankaccount1.deposit(20)
