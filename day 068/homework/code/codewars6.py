
"""https://www.codewars.com/kata/54e6533c92449cc251001667/train/python"""

# Unique In Order

def unique_in_order(sequence):
    if sequence =="" or sequence ==[] or sequence ==():
        return []
    result = []
    prev = None
    
    for i in sequence:
        if i != prev:
            result.append(i)
        prev = i
    return result