"""5) შექმენით ფუნქცია, რომელიც მიიღებს 'kwargs'-ით მანქანის მონაცემებს და დაბეჭდავს თითოეულ გასაღებს და მნიშვნელობას"""


def car(**kwargs):
    for  kay,value in kwargs.items():
        print(f"{kay}:{value}")


car(germani = "mercedes",usa = "dodge")