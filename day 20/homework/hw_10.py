"""7) მომხმარებელს შემოაყვანინეთ წინადადება, შემდეგ for ციკლისა და პირობითი განცხადებების საშვალებით დაბეჭდეთ ჯერ ხმოვნების, შემდეგ კი თანხმოვნების რაოდენობა (ხმოვნებად ჩათვალეთ სიმბოლოები: a, e, i, o, u ხოლო სხვა ყველა თანხმოვნად)"""

text = input("enter your text: ")

xmovani = ""
tanxmovani= ""

for i in text:
    if i == "a":
        xmovani += i
    elif i == "e":
        xmovani += i
    elif i == "i":
        xmovani += i
    elif i == "o":
        xmovani += i
    elif i == "u":
        xmovani += i
    elif i == "A":
        xmovani += i
    elif i == "E":
        xmovani += i
    elif i == "I":
        xmovani += i
    elif i == "O":
        xmovani += i
    elif i == "U":
        xmovani += i
    else:
        tanxmovani+= i

    
print(len(xmovani))
print(len(tanxmovani))
