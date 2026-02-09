
"""https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/python"""

# Count of positives / sum of negatives

def count_positives_sum_negatives(arr):
    list_negative = [i for i in arr if i < 0]
    list_positive = [i for i in arr if i > 0]
    list_negative2 = [i for i in arr if i <= 0]
    list_positive2 = [i for i in arr if i >= 0]
    
    if [len(list_positive2),sum(list_negative2)] == [0,0]:
        return []
    else:
        return [len(list_positive),sum(list_negative)]