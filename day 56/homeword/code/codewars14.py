
"""https://www.codewars.com/kata/54da539698b8a2ad76000228/train/python"""

# Take a Ten Minutes Walk

def is_valid_walk(walk):
    if len(walk) != 10:
        return False
    x = 0
    y = 0
    
    for i in walk:
        if i == "n":
            y += 1
        elif i == "s":
            y -= 1
        elif i == "w":
            x += 1
        elif i == "e":
            x -= 1
    return x==0 and y==0