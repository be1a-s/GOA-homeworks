
"""https://www.codewars.com/kata/57f780909f7e8e3183000078/train/python"""

# Beginner - Reduce but Grow

def grow(arr):
    num = 1
    for i in arr:
        num *=i
    return num