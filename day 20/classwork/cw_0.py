"""1) მოხმარებელს შემოატანინეთ რიცხვი, შემდეგ კი დაუბეჭდეთ ეს რიცხვი დადებითია, უარყოფითი თუ ნეიტურალი ანუ ნული. შემდეგ კომენტარებით ახსენით რა გასნხვავებაა if-სა და elif-ს შორის რატომ არ შეიძლება ზოგერ elif-ს ნაცვლად if-ის გამოყენება"""

num = int(input("enter a number: "))

if num > 0:
    print("number is positiv")
elif num < 0:
    print("number is negativ")
else:
    print("number is neitral")

"""if გამოიყენება როცა ჩეულებრივად პირველად ვაძლევტ პირობას ხოლო elif-ს ვიყენებთ როცა გვინდა გამოვიტანოთ მეტი პირობა"""