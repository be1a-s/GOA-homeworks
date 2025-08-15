"""1) ახსენით კომნენტარებით raise keyword. მოიყვანეთ raise ბრძანების 2 მაგალითი"""

index = input("enter a number:")

try:
    index = int(index)

except:
    raise ValueError("value error, enter only number")


try:
    list1 = [1,2,3,4,5]
    print(list1[10])
except:
    raise IndexError("wrong index ypur choise is 0,1,2,3 or 4")


# raise keyword - ის საშუალებით შეჰვიძლია გამოვიტანოთ იმ ტიპის ერორი რომელიც ჩვენ გვინდა
