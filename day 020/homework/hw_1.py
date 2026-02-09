"""3) მომხმარებელს იქამდე შეეკითხეთ რიცხვები სანამ უარყოფით რიცხვს არ შემოიყვანს, while ციკლისა და input ინსტრუქციის საშვალებით, ასევე პირობითი განცხადებების დადებითობა/უარყოფითობის შესამოწმებლად, საბოლოოდ დაბეჭდეთ ყველა მიღებული დადებითი რიცხვის ჯამი"""

num = int(input("enter a negative number: "))

while num >= 0:
    num = (int(input("its not a negative, enter a negative number: ")))
print("number is negative")