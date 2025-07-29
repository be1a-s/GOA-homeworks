"""2) რიცხვების სიიდან "numbers = [1, 4, 7, 10, 13, 16, 19]" აირჩიეთ მხოლოდ კენტები, გაამრავლეთ ორზე და დაამატეთ "new_list"-ში, ჯერ "for"-ით, შემდეგ list comprehension-ით. ბოლოს გააკეთეთ 2 მსგავსი მაგალითი: ერთში მხოლოდ მოქმედება გამოიყენეთ, მეორეში მხოლოდ პირობა"""


numbers = [1, 4, 7, 10, 13, 16, 19]

new_list1 = []

for i in numbers:
    if i % 2 != 0:
        new_list1.append(i*2)

print(new_list1)

new_list2 = [i*2 for i in numbers if i % 2 != 0]
print(new_list2)