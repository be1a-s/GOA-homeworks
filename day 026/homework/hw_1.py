"""3) შექმენით პროგრამა რომელშიც გექნებათ ხილის სია კალათა (list), 
შემდეგ მომხარებელს შემოატანინეთ თავისი საყვარელი ხილი (input), 
დაადეკლარირეთ ცვლადი რომელიც დაადგენს არის თუ არა ხილი 
კალათაში (variable) fruit_in_basket რომლის მნიშვნელობა თავიდან 
იქნება False, for ციკლის საშვალებით (for loop) განიხილეთ კალათა 
და პირობითი განცხადების საშვალებით (if-else) შეადარეთ მომხარებლის 
საყვარელ ხილს, თუ ისინი ტოლი იქნება fruit_in_basket ცვლადის 
მნიშვნელობა შეცვალეთ True boolean-ით, საბოლოოდ პირობითი განცხადების 
საშვალებით (if-else) შეამოწმეთ მომხმარებლის საყვარელი ხილი არის თუ 
არა კალათაში fruit_in_basket, თუ არის დაუბეჭდეთ 'Good choice' თუ
არ არის 'Fruit not in basket'"""

fruits = ["apple","banana","paynapple","greyp"]

visitor_fruit = input("enter your favorite fruit: ")

fruit_in_basket = False

for i in fruits:
    if i == visitor_fruit:
        fruit_in_basket = True
        print("Good choice")
        break
else:
    print("Fruit not in basket")