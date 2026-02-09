"""6) დაწერეთ დეკორატორი, რომელიც ფუნქციის გაშვების წინ დაბეჭდავს "ფუნქცია დაიწყო" და დასრულების შემდეგ "ფუნქცია დასრულდა"""

def decorator(func):
    def wrapper():
        print("ფუნქცია დაიწყო")
        func()
        print("ფუნქცია დასრულდა")
    return wrapper


@decorator
def greet():
    print("hello")

greet()