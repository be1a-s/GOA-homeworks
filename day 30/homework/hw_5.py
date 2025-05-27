"""7) შექმენით ფუნქცია რომელიც არგუმენტად მიიღებს რიცხვს და დააბრუნებს მის ფაქტორიალს. n რიცხვის ფაქტოირალი არის ყველა მთელი დადებითი რიცხვის ნამრავლი 1-იდან n-ის ჩათვლით"""

def greet(number):
    num1 = 1
    num2 = 1

    while num2 <= number:
        num1 *= num2
        num2 += 1

    return num1

gamotvla = greet(5)

print(gamotvla)