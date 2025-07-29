

"""https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/python"""

# Find the next perfect square!

def find_next_square(sq):
    fesv = sq ** 0.5
    if fesv.is_integer():
        fesv2 = int(fesv) + 1
        return fesv2 ** 2
    return -1
