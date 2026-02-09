
"""https://www.codewars.com/kata/526571aae218b8ee490006f4/train/python"""

# Bit Counting

def count_bits(n):
    bits = 0
    while n > 0:
        bits += n % 2
        n //= 2
    return bits