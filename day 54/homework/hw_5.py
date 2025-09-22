"""7) დაწერეთ დეკორატორი, რომელიც ფუნქციის გაშვების დროს დაითვლის რამდენი წამი მუშაობდა ფუნქცია"""

import time


def time_decorator(func):
    def wrapper(*args,**kwargs):
        start = time.time()
        resoult = func(*args,**kwargs)
        end = time.time()
        print(f"ფუნქციამ იმშავა {end - start} წამი")
        return resoult
    return wrapper

@time_decorator

def greet(*args):
    for i in args:
        print(f"hello {i}")

greet("beqa","saba")