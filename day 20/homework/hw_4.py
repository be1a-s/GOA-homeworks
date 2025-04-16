"""6) მომხმარებელმა უნდა შეიყვანოს რიცხვები, სანამ -1-ს არ შეიყვანს. საბოლოოდ გამოიანგარიშოს შეყვანილი რიცხვების საშუალო"""


num = int(input("enter a negativ number -1: "))
count1 = 0
count2 = 0

while num != -1:
    num = (int(input("its not a -1, enter a number -1: ")))
    if num != -1:
        count2 += num
        count1 += 1

if count1 != 0:
    sashualo = count2/count1
    print("avarage is " , sashualo)
