
# https://www.codewars.com/kata/566d5e2e57d8fae53c00000c/train/python

# Bingo Card

import random
def get_bingo_card():
    B = [f"B{n}" for n in random.sample(range(1, 16), 5)]
    I = [f"I{n}" for n in random.sample(range(16, 31), 5)]
    N = [f"N{n}" for n in random.sample(range(31, 46), 4)] 
    G = [f"G{n}" for n in random.sample(range(46, 61), 5)]
    O = [f"O{n}" for n in random.sample(range(61, 76), 5)]

    return B + I + N + G + O