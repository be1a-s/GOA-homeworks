
"""https://www.codewars.com/kata/57f609022f4d534f05000024/train/python"""

# Find the stray number

def stray(arr):
    for i in arr:
        if arr.count(i) == 1:
            return i