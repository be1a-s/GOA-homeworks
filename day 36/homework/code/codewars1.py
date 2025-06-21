"""https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/python"""

# Count of positives / sum of negatives

def count_positives_sum_negatives(arr):
    if not arr:
        return []
    num = 1
    num1 = 0
    for i in arr:
        if i > 0:
            num += 1
        elif i < 0:
            num1 += i
    return [num-1,num1]
            