
"""https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/python"""

# You're a square!

def is_square(n):
    if n < 0:
        return False
    num = int(n ** 0.5)
    return num * num == n