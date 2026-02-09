"""4) შექმენით პროგრამა რომელშიც მომხმარებელმა უნდა შეიყვანოს რიცხვები, სანამ უარყოფითს არ შეიყვანს. დაბეჭდეთ შეყვანილი ლუწი და კენტი რიცხვების რაოდენობა გამოიყენეთ პირობითი განცხადებები"""

num = int(input("enter a negative number: "))

number = 0

while num >= 0:
    number += 1
    if num % 2 == 0:
        print("its positive and even " , number)
    else:
        print("its pisitive and odd" , number)
    num = (int(input("its not a negative, enter a negative number: ")))
print("its a negative")