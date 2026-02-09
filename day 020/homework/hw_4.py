"""6) მომხმარებელმა უნდა შეიყვანოს რიცხვები, სანამ -1-ს არ შეიყვანს. საბოლოოდ გამოიანგარიშოს შეყვანილი რიცხვების საშუალო"""

num = int(input("enter a negativ number -1: "))

list1 = []
count2 = 0

while num != -1:
    
    if num != -1:
        list1 += [num]
        count2 += num
        num = (int(input("its not a -1, enter a number -1: ")))
avarage = count2/len(list1)
print("avarage is" , avarage )
