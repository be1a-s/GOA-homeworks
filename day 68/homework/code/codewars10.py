
"""https://www.codewars.com/kata/5552101f47fc5178b1000050/train/python"""

# Playing with digits

def dig_pow(n, p):
    total = 0
    for i ,digit in enumerate(str(n)):
        total += int(digit) ** (p +i)
        
    return total // n if total % n == 0 else -1