"""10) დაწერეთ დეკორატორი, რომელიც ფუნქციის დაბრუნებულ ტექსტს გადააქცევს დიდ ასოებად"""

def upper(func):
    def wrapper():
        result = func()
        if isinstance(result,str):
            return result.upper()
    return wrapper

@upper

def greet():
    return "hello"

print(greet())