
"""https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/python"""

# Descending Order

def descending_order(num):
    num1 = str(num)

    num2 = sorted(num1)[::-1]
    resoult = "".join(num2)

    return int(resoult)
    
