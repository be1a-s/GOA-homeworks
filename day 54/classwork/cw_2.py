"""3) შექმენით decorator ფუნქცია, რომელიც თავისთავად შექმნის wrapper ფუნქციას და დააბრუენბს მას. აიღეთ მარტივი greet ფუნქცია რომელიც აბრუნებს "Hello World"-ს და გამოიძახეთ მიანიჭეთ მას decorator. საბოლოოდ გამოიძახეთ greet ფუნქცია"""

def decorator(func):
    def wrapper():
        print("starte")
        func()
        print("ended")
    return wrapper



@decorator
def greet():
    print("hello world")

greet()