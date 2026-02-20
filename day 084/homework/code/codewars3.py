
# https://www.codewars.com/kata/5469e0798a3502f4a90005c9/train/python

# Rotate Array

def rotate(data, n):
    if not data:
        return data
    l = len(data)
    n = n % l
    
    return data[-n:] + data[:-n]