"""3) შექმენით სიტყვების სია, შემდეგ მის შემობრუნებულ ვერსიას გადაუარეთ for ციკლით, დაბეჭდეთ ყოველი მეორე ელემენტი (რომ გაიგოთ ყოველი მეორე აიღეთ ცვლადი რომელიც თავიდან 0 იქნება, ყოველ გამეორებაზე კი გაზრდით ერთით და შეამოწმეთ ლუწია თუ კენტი)"""

word_list = ["mercedes","audi","bmw","shewrolet","wolksvagen","porshe","mazda","fiat","mini cooper"]
 
word_list2 = word_list[::-1] 

number = 0

for char in word_list2[1::2]:
    print(char)
    number += 1

if number %2 == 0:
    print("number is even" )
else:
    print("number is odd")



