"""2) გააკეთეთ 5-5 მაგალითი თთოეულ შედარების ოპერატორზე (>, >=, <, <=, ==, !=), გვერდზე კომენტარის საშვალებით მიუთითეთ თუ რომელ boolean მნიშვნელობას გამოიტანას, აიღეთ მრავალფეროვანი კომბინაციები, შეეცადეთ გქონდეთ ყველა ვარიანტი"""

#==
print(4 == 3) #False
print(5 == 5) #True
print(66 == 9) #False
print(9 == 9) #True
print(44 == 11) #False

#<=
print(5<=5) #True
print(5<=1) #False
print(5<=33) #True
print(5<=4) #False
print(5<=6) #True

#>=
print(7>=6) #True
print(6>=8) #False
print(55>=55) #True
print(7>=33) #False
print(50>=3) #True

#<
print(5<9) #True
print(8<6) #False
print(1<23) #True
print(19<19) #False
print(8<9) #True

#>
print(11>44) #False
print(64>4) #True
print(60>60.01) #False
print(33>26) #True
print(13>49.99) #False

#!=
print(5!=5) #False
print(7!=9) #True
print(8!=8) #False
print(6.5!=6.5) #True
print(9!=9) #False