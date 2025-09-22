"""2) შექმენით ფუნქცია greet_people რომელსაც ექენბა 3 არგუემნტის ცვლადი, special, *guests, **visitors. თქვენი ფანტაზიით მიესალმეთ თითეულს განსხვავებულად. ახსენით რა არის *args და **kwargs"""

def greet_people(special,*guests,**visitors):
    print("welcome "+special)
    for i in guests:
        print("Hello " + i)
    for i in visitors:
        print("Welcome dear " + i)



greet_people("beqa","saba","luka",lika = "lika" , ana = "ana")