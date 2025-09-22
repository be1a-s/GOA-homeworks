"""4) შექმენით ფუნქცია, რომელიც მიიღებს 'kwargs'-ით ადამიანის მონაცემებს (სახელი, ასაკი) და დაბეჭდავს "სახელი: X, ასაკი: Y"""


def print_info(**kwargs):
    name = ""
    age = 0
    for key,value in kwargs.items():
        if isinstance(value,str):
            name += value
        elif isinstance(value,int):
            age += value
    print(f"სახელი: {name}, ასაკი: {age}")


print_info(name="beqa", age=16)

