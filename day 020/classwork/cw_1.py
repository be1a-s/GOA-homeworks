"""2) მომხმარებელს შემოატანინეთ რიცხვი, შემდეგ თუ ეს რიცხვი დადებითია დაბეჭდეთ ეს და კიდევ შეამოწმეთ ლუწია თუ კენტი, ხოლო თუ არაა დადებითი მხოლოდ დაბეჭდეთ რომ უარყოფითია"""

num = int(input("enter a number: "))
    
if num >0:
    if num %2==0:
        print(" number is positive and even")
    else:
        print(" number is positive and odd")
else:
    print("incorrect")