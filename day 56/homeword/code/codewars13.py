
"""https://www.codewars.com/kata/541c8630095125aba6000c00/train/python"""

# Sum of Digits / Digital Root

def digital_root(n):
    list = [int(i) for i in str(n)]
    while sum(list) >= 10:
        n = sum(list)
        list = [int(i) for i in str(n)]
    return sum(list)