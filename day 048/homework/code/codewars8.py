
"""https://www.codewars.com/kata/56606694ec01347ce800001b/train/python"""

# Is this a triangle?

def is_triangle(a, b, c):
    if a > 0 and b>0 and c >0 and b+c > a and a+c > b and a+b > c:
        return True
    return False
